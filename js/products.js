/* ============================================================
   CAMNET — PRODUCT DATABASE
   ============================================================
   HOW TO EDIT:
   ------------
   • name  → product title (change freely)
   • image → paste any image URL (Unsplash, your own, etc.)
   • price → change the price text
   • cat   → category: "camera" | "recorder" | "access" | "network"
   • tag   → small label shown above the name
   • featured → true = show on homepage | false = products page only

   To ADD a product: copy a block { ... }, paste, edit, add comma.
   To DELETE a product: remove the whole { ... } block.
   ============================================================ */

const PRODUCTS = [
  // ---------- CAMERAS ----------
  {
    name: "4MP IP Camera",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/4%20mp%20Camera.webp",
    price: "Rs. 12,500",
    cat: "camera",
    tag: "IP Camera",
    featured: true
  },
  {
    name: "4MP DOM Camera",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/4%20mp%20Dom%20Camera.webp",
    price: "Rs. 13,000",
    cat: "camera",
    tag: "IP Camera",
    featured: true
  },
  {
    name: "PTZ 4 MP Camera",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/PTZ%20Camera.jpg",
    price: "Rs. 92,000",
    cat: "camera",
    tag: "PTZ",
    featured: false
  },
  {
    name: "WiFi Smart Camera",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/Box%20Camera.jpg",
    price: "Rs. 17,500",
    cat: "camera",
    tag: "Wireless",
    featured: false
  },

  // ---------- RECORDERS ----------
  {
    name: "5 MP 4-Channel DVR",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/4%20Ch%20DVR.jpg",
    price: "Rs. 12,999",
    cat: "recorder",
    tag: "NVR",
    featured: true
  },
  {
    name: "8-Channel DVR",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/8%20Ch%20DVR.jpg",
    price: "Rs. 21,000",
    cat: "recorder",
    tag: "DVR",
    featured: false
  },
  {
    name: "2TB Surveillance HDD",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
    price: "Rs. 24,000",
    cat: "recorder",
    tag: "Storage",
    featured: false
  },

  // ---------- ACCESS CONTROL ----------
  {
    name: "Biometric Attendance Machine",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/Biomatric.jpg",
    price: "Rs. 22,000",
    cat: "access",
    tag: "Access Control",
    featured: true
  },
  {
    name: "Video Door Phone",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/Video%20door%20phone.jpg",
    price: "Rs. 26,500",
    cat: "access",
    tag: "Intercom",
    featured: false
  },
  {
    name: "Electric Door Lock",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/electric%20door%20lock.jpg",
    price: "Rs. 19,500",
    cat: "access",
    tag: "Access Control",
    featured: false
  },

  // ---------- NETWORKING ----------
  {
    name: "Dual-Band WiFi Router",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/Dual%20Band%20wifi%20router.jpg",
    price: "Rs. 7,500",
    cat: "network",
    tag: "Networking",
    featured: false
  },
  {
    name: "8-Port PoE Switch GIGA",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/POE.jpg",
    price: "Rs. 13,000",
    cat: "network",
    tag: "Networking",
    featured: false
  },
  {
    name: "Cat6 Cable (305m)",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/Cat6.webp",
    price: "Rs. 38,000",
    cat: "network",
    tag: "Cabling",
    featured: false
  }
];

/* ============================================================
   BUSINESS INFO — change once, updates everywhere
   ============================================================ */
const BUSINESS = {
  name: "CAMNET",
  tagline: "IT AND CCTV SOLUTIONS",
  address: "Shop #16, Al-Nabi Plaza, Near Meezan Bank, Taxila",
  whatsapp1: "923215620799",
  whatsapp1Display: "0321-5620799",
  whatsapp2: "923255333667",
  whatsapp2Display: "0325-5333667"
};
