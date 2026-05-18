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

    // --- Partner Products (Separate Database for Cabinet) ---

    async getPartnerProducts() {
        try {
            const snapshot = await getDocs(collection(db, 'partner_products'));
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('❌ Error reading partner products:', error);
            return [];
        }
    },

    onPartnerProductsChange(callback) {
        return onSnapshot(collection(db, 'partner_products'), (snapshot) => {
            const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            callback(products);
        }, (error) => {
            console.error('❌ Firestore listener error:', error);
        });
    },

    async addPartnerProduct(productData) {
        try {
            const docRef = await addDoc(collection(db, 'partner_products'), {
                ...productData,
                createdAt: Date.now()
            });
            console.log('✅ Partner Product added:', docRef.id);
            return docRef.id;
        } catch (error) {
            console.error('❌ Error adding partner product:', error);
            throw error;
        }
    },

    async updatePartnerProduct(id, productData) {
        try {
            await updateDoc(doc(db, 'partner_products', id), {
                ...productData,
                updatedAt: Date.now()
            });
            console.log('✅ Partner Product updated:', id);
        } catch (error) {
            console.error('❌ Error updating partner product:', error);
            throw error;
        }
    },

    async deletePartnerProduct(id) {
        try {
            await deleteDoc(doc(db, 'partner_products', id));
            console.log('✅ Partner Product deleted:', id);
        } catch (error) {
            console.error('❌ Error deleting partner product:', error);
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

    // --- Partner Management ---

    /** Get all authorized partners */
    async getPartners() {
        try {
            const snapshot = await getDocs(collection(db, 'partners'));
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('❌ Error reading partners:', error);
            return [];
        }
    },

    /** Add a new partner */
    async addPartner(email) {
        try {
            const docRef = await addDoc(collection(db, 'partners'), {
                email: email.toLowerCase().trim(),
                createdAt: Date.now()
            });
            console.log('✅ Partner added:', email);
            return docRef.id;
        } catch (error) {
            console.error('❌ Error adding partner:', error);
            throw error;
        }
    },

    /** Delete a partner */
    async deletePartner(id) {
        try {
            await deleteDoc(doc(db, 'partners', id));
            console.log('✅ Partner deleted:', id);
        } catch (error) {
            console.error('❌ Error deleting partner:', error);
            throw error;
        }
    },

    /** Check if an email is an authorized partner */
    async isAuthorizedPartner(email) {
        try {
            const partners = await this.getPartners();
            return partners.some(p => p.email === email.toLowerCase().trim());
        } catch (error) {
            console.error('❌ Error checking authorization:', error);
            return false;
        }
    },

    /** Verify partner credentials */
    async verifyPartnerLogin(email, password) {
        try {
            const partners = await this.getPartners();
            const partner = partners.find(p => p.email === email.toLowerCase().trim());
            if (!partner) return { success: false, error: 'email_not_found' };
            
            // If they have a custom password, check it. Otherwise, check against default "ONYXWORLD"
            const correctPassword = partner.password || 'ONYXWORLD';
            if (password === correctPassword) {
                return { success: true, partner };
            } else {
                return { success: false, error: 'wrong_password' };
            }
        } catch (error) {
            console.error('❌ Error verifying partner login:', error);
            return { success: false, error: 'db_error' };
        }
    },

    /** Update a partner's password */
    async updatePartnerPassword(email, newPassword) {
        try {
            const partners = await this.getPartners();
            const partner = partners.find(p => p.email === email.toLowerCase().trim());
            if (!partner) {
                throw new Error('Partner not found');
            }
            await updateDoc(doc(db, 'partners', partner.id), {
                password: newPassword,
                updatedAt: Date.now()
            });
            console.log('✅ Partner password updated:', email);
            return true;
        } catch (error) {
            console.error('❌ Error updating partner password:', error);
            throw error;
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
