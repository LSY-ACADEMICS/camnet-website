/* ============================================================
   CAMNET — CCTV PACKAGES DATABASE
   ============================================================
   HOW TO EDIT:
   ------------
   • name       → package title
   • image      → image URL
   • price      → package price
   • cameras    → number of cameras included (4 or 8)
   • resolution → camera resolution ("2MP" or "5MP")
   • includes   → array of items in the package
   • featured   → true = show on homepage | false = packages page only

   To ADD a package: copy a block { ... }, paste, edit, add comma.
   To DELETE a package: remove the whole { ... } block.
   ============================================================ */

const PACKAGES = [
  {
    name: "2MP 4-Camera Package",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/2mp4cam.jpg",
    price: "Rs. 32,000",
    cameras: 4,
    resolution: "2MP",
    includes: [
      "4x 2MP HD Cameras",
      "1x 4-Channel DVR",
      "1x 500GB Hard Disk",
      "Power Supply & Adapters",
      "100m Cable + Connectors",
      "Complete Installation"
    ],
    featured: true
  },
  {
    name: "2MP 8-Camera Package",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/2mp8cam.jpg",
    price: "Rs. 65,000",
    cameras: 8,
    resolution: "2MP",
    includes: [
      "8x 2MP HD Cameras",
      "1x 8-Channel DVR",
      "1x 1TB Hard Disk",
      "Power Supply & Adapters",
      "200m Cable + Connectors",
      "Complete Installation"
    ],
    featured: true
  },
  {
    name: "5MP 4-Camera Package",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/5mp4cam.jpg",
    price: "Rs. 51,000",
    cameras: 4,
    resolution: "5MP",
    includes: [
      "4x 5MP HD Cameras",
      "1x 4-Channel DVR",
      "1x 1TB Hard Disk",
      "Power Supply & Adapters",
      "100m Cable + Connectors",
      "Complete Installation"
    ],
    featured: true
  },
  {
    name: "5MP 8-Camera Package",
    image: "https://raw.githubusercontent.com/LSY-ACADEMICS/my-product-images/main/5mp8cam.jpg",
    price: "Rs. 88,000",
    cameras: 8,
    resolution: "5MP",
    includes: [
      "8x 5MP HD Cameras",
      "1x 8-Channel DVR",
      "1x 2TB Hard Disk",
      "Power Supply & Adapters",
      "200m Cable + Connectors",
      "Complete Installation"
    ],
    featured: true
  }
];
