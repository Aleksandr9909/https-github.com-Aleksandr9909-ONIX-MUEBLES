/* ============================================
   ONYX MUEBLES — Firebase Configuration
   Cloud Database for real-time product sync
   ============================================ */

// Firebase App + Firestore SDK (modular, CDN-compatible)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeakpiTKGUR9cMP8o2TGqWwoUmNwrWHBw",
    authDomain: "onyx-muebles.firebaseapp.com",
    projectId: "onyx-muebles",
    storageBucket: "onyx-muebles.firebasestorage.app",
    messagingSenderId: "636405277001",
    appId: "1:636405277001:web:547a6404e1a4477184ba98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ====== DATABASE SERVICE (Public API) ======

const FirebaseDB = {

    // --- Products ---

    /** Get all products (one-time read) */
    async getProducts() {
        try {
            const snapshot = await getDocs(collection(db, 'products'));
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('❌ Error reading products:', error);
            return [];
        }
    },

    /** Listen for real-time product changes */
    onProductsChange(callback) {
        return onSnapshot(collection(db, 'products'), (snapshot) => {
            const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            callback(products);
        }, (error) => {
            console.error('❌ Firestore listener error:', error);
        });
    },

    /** Add a new product */
    async addProduct(productData) {
        try {
            const docRef = await addDoc(collection(db, 'products'), {
                ...productData,
                createdAt: Date.now()
            });
            console.log('✅ Product added:', docRef.id);
            return docRef.id;
        } catch (error) {
            console.error('❌ Error adding product:', error);
            throw error;
        }
    },

    /** Update an existing product */
    async updateProduct(id, productData) {
        try {
            await updateDoc(doc(db, 'products', id), {
                ...productData,
                updatedAt: Date.now()
            });
            console.log('✅ Product updated:', id);
        } catch (error) {
            console.error('❌ Error updating product:', error);
            throw error;
        }
    },

    /** Delete a product */
    async deleteProduct(id) {
        try {
            await deleteDoc(doc(db, 'products', id));
            console.log('✅ Product deleted:', id);
        } catch (error) {
            console.error('❌ Error deleting product:', error);
            throw error;
        }
    },

    // --- Contact Form Submissions ---

    /** Save a contact form submission */
    async saveContactSubmission(formData) {
        try {
            const docRef = await addDoc(collection(db, 'contact_submissions'), {
                ...formData,
                createdAt: Date.now(),
                status: 'new'
            });
            console.log('✅ Contact submission saved:', docRef.id);
            return docRef.id;
        } catch (error) {
            console.error('❌ Error saving contact submission:', error);
            throw error;
        }
    },

    /** Get all contact submissions (for admin) */
    async getContactSubmissions() {
        try {
            const snapshot = await getDocs(collection(db, 'contact_submissions'));
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('❌ Error reading submissions:', error);
            return [];
        }
    },

    // --- Migration Helper ---

    /** Migrate products from localStorage to Firestore (one-time) */
    async migrateFromLocalStorage() {
        const STORAGE_KEY = 'muebles_catalog_products';
        const localProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        if (localProducts.length === 0) {
            console.log('ℹ️ No local products to migrate.');
            return 0;
        }

        // Check if Firestore already has products
        const existing = await this.getProducts();
        if (existing.length > 0) {
            console.log('ℹ️ Firestore already has products. Skipping migration.');
            return 0;
        }

        console.log(`🔄 Migrating ${localProducts.length} products from localStorage...`);
        let migrated = 0;

        for (const product of localProducts) {
            try {
                const { id, ...data } = product;
                await addDoc(collection(db, 'products'), {
                    ...data,
                    legacyId: id,
                    createdAt: Date.now()
                });
                migrated++;
            } catch (error) {
                console.error('❌ Error migrating product:', product.name, error);
            }
        }

        console.log(`✅ Migration complete: ${migrated}/${localProducts.length} products migrated.`);

        // Clear localStorage after successful migration
        if (migrated === localProducts.length) {
            localStorage.removeItem(STORAGE_KEY);
            console.log('🗑️ localStorage cleared after successful migration.');
        }

        return migrated;
    }
};

// Export for use in main.js
export { FirebaseDB, db };
