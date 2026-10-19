import { Product } from "@/data/types";

// ──────────────────────────────────────────────────────────────
// Product catalog for One Click Enterprises
//
// STRUCTURE
//   Each product has either `variants` (flat list) or `subProducts`
//   (grouped list — used when a product contains distinct sub-groups).
//
// PDF DOCUMENTS
//   Place PDF files in: public/pdfs/{filename}.pdf
//
//   Each product can have multiple PDF attachments.
//   `name` is the label shown in the UI.
//   `file` is the public PDF path.
//
//   Example:
//   pdfs: [
//     {
//       name: 'Product Catalogue',
//       file: '/pdfs/product-catalogue.pdf',
//     },
//   ]
// ──────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "bathroom-tiles",
    name: "Bathroom Tiles",
    category: "Tiles",
    icon: "Bath",
    sizes: ["300x450", "300x300", "300x600"],
    variants: [],
    image: "/images/bathroom-tiles.jpeg",
    description:
      "Premium quality Ceramic and Vitrified bathroom tiles in multiple sizes and finishes for a stylish and water-resistant bathroom space.",

    // PDF attachment for Cool Roof Tiles.
    pdfs: [
      {
        name: "Bathroom Tiles Catalogue",
        file: "/pdfs/bathroom-tiles.pdf.pdf",
      },
    ],
  },
  {
    id: "kitchen-tiles",
    name: "Kitchen Tiles",
    category: "Tiles",
    icon: "ChefHat",
    sizes: ["300x450", "300x300", "300x600"],
    variants: [],
    image: "/images/kitchen-tiles.jpeg",
    description:
      "Durable and easy-to-clean Ceramic and Vitrified kitchen tiles designed to handle heat, stains, and splashes while adding elegance.",
    pdfs: [
      {
        name: "Kitchen Tiles Catalogue",
        file: "/pdfs/kitchen-tiles.pdf",
      },
    ],
  },
  {
    id: "floor-tiles",
    name: "Floor Tiles",
    category: "Tiles",
    icon: "Grid3x3",
    sizes: ["600x600", "600x1200", "800x800", "800x1600", "1200x1800"],
    variants: [],
    image: "/images/floor-tiles.jpeg",
    description:
      "High-quality floor tiles available in porcelain, GVT, PGVT, and double charge variants for lasting beauty and strength.",
    pdfs: [
      // {
      //   name: "Floor Tiles Glossy",
      //   file: "/pdfs/floor-tiles-glossy.pdf",
      // },
      {
        name: "Floor Tiles Spectra",
        file: "/pdfs/floor-tiles-spectra.pdf",
      },
    ],
  },
  {
    id: "parking-tiles",
    name: "Parking Tiles",
    category: "Tiles",
    icon: "Car",
    sizes: ["400x400", "500x500", "600x600", "600x1200"],
    variants: [],
    image: "/images/parking-tiles-image.jpeg",
    description:
      "Heavy-duty Parking Tiles with full-body construction that withstands vehicle weight and weather conditions.",

    // Multiple PDF attachments for the same product.
    pdfs: [
      {
        name: "Parking Tiles 1x1",
        file: "/pdfs/parking-tiles-1x1.pdf",
      },
      {
        name: "Parking Tiles Glossy",
        file: "/pdfs/parking-tiles-glossy.pdf",
      },
      {
        name: "Parking Tiles 16x16",
        file: "/pdfs/parking-tiles-16x16.pdf",
      },
    ],
  },
  {
    id: "kitchen-slabs",
    name: "Kitchen Quartz",
    category: "Tiles",
    icon: "ChefHat",
    sizes: ["800x2400", "800x3200"],
    variants: [],
    image: "/images/kitchen-slabs.jpeg",
    description:
      "Large-format kitchen quartz in full body and color body for a seamless, premium countertop and backsplash solution.",
    pdfs: [
      {
        name: "Kitchen Quartz Catalogue",
        file: "/pdfs/kitchen-quartz.pdf",
      },
    ],
  },
  {
    id: "cool-roof-tiles",
    name: "Cool Roof Tiles",
    category: "Tiles",
    icon: "Home",
    sizes: ["300x300"],
    variants: [],
    image: "/images/cool-roof.jpeg",
    description:
      "Heat-reflective cool roof tiles that reduce indoor temperatures and energy costs while protecting your rooftop.",

    // PDF attachment for Cool Roof Tiles.
    pdfs: [
      {
        name: "Cool Roof Tiles Catalogue",
        file: "/pdfs/cool-roof-tiles.pdf",
      },
    ],
  },
  {
    id: "wooden-plank-tiles",
    name: "Wooden Plank Tiles",
    category: "Tiles",
    icon: "TreePine",
    sizes: ["200x900"],
    variants: [],
    image: "/images/wooden-planks.jpeg",
    description:
      "Wood-look plank tiles that combine the warmth of natural wood with the durability of Ceramic and Vitrified — perfect for living spaces.",
    pdfs: [
      {
        name: "Wooden Plank Tiles 01",
        file: "/pdfs/wooden-planks-8x36-01.pdf",
      },
      {
        name: "Wooden Plank Tiles 02",
        file: "/pdfs/wooden-planks-8x36-02.pdf",
      },
    ],
  },
  {
    id: "high-depth-elevation",
    name: "High Depth Elevation Tiles",
    category: "Tiles",
    icon: "Layers",
    sizes: ["300x450"],
    variants: [],
    image: "/images/elevation.jpeg",
    description:
      "High-depth elevation tiles for striking building facades and feature walls with bold textures and patterns.",
    pdfs: [
      {
        name: "Elevation",
        file: "/pdfs/elevation.pdf",
      },
    ],
  },
  {
    id: "swimming-pool-tiles",
    name: "Swimming Pool Tiles",
    category: "Tiles",
    icon: "Waves",
    sizes: ["300x300"],
    variants: [],
    image: "/images/swimmingpool.jpeg",
    description:
      "Waterproof, fade-resistant swimming pool tiles designed for underwater beauty and long-lasting performance.",
    pdfs: [
      {
        name: "Swimming Pool Tiles",
        file: "/pdfs/swimming-pool.pdf",
      },
    ],
  },
  {
    id: "step-riser",
    name: "Step Riser Tiles",
    category: "Tiles",
    icon: "Stairs",
    sizes: ["300x900", "300x1000", "300x1200"],
    variants: [],
    image: "/images/step-riser.jpeg",
    description:
      "Premium step riser tiles in matt, sugar, and carving finishes for staircase elegance and durability.",
    pdfs: [
      {
        name: "Step Riser Tiles Catalogue",
        file: "/pdfs/step-riser-tiles.pdf",
      },
    ],
  },
  {
    id: "double-charge-tiles",
    name: "Double Charge Tiles",
    category: "Tiles",
    icon: "Layers",
    sizes: ["600x600", "800x800"],
    variants: [],
    image: "/images/double-charge-tiles.jpeg",
    description:
      "Premium double charge vitrified tiles featuring enhanced surface thickness, rich patterns, and excellent durability for high-traffic residential and commercial spaces.",
    pdfs: [
      {
        name: "Double Charge Tiles Catalogue",
        file: "/pdfs/double-charge-tiles-catalog.pdf",
      },
    ],
  },
  {
    id: "terracotta",
    name: "Breeze Block (Terracotta)",
    category: "Terracotta",
    icon: "Grid2x2",
    sizes: [],
    image: "/images/breezeblock.jpeg",
    description:
      "Complete terracotta collection including handcrafted jali, terracotta floor tiles, and specialized terracotta adhesive for architectural, interior, and outdoor applications.",
    pdfs: [
      {
        name: "Breeze Block",
        file: "/pdfs/terracotta.pdf",
      },
    ],
    subProducts: [
      {
        id: "terracotta-jali",
        name: "Terracotta Jali",
        sizes: [
          "220x220x63",
          "220x70x30",
          "220x70x25",
          "220x70x20",
          "195x60x50",
          "240x80x10",
          "300x80x12",
          "240x70x10",
          "230x63x12",
          "230x80x10",
        ],
        image:
          "https://images.pexels.com/photos/35466647/pexels-photo-35466647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Handcrafted terracotta jali and brick designs that bring traditional Indian architecture to modern facades and partitions.",
        variants: [],
      },

      {
        id: "terracotta-tiles",
        name: "Terracotta Floor Tiles",
        sizes: ["305x305"],
        image:
          "https://images.pexels.com/photos/5146922/pexels-photo-5146922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Natural terracotta floor tiles offering earthy tones and rustic charm for interiors and outdoor spaces.",
        variants: [],
      },

      {
        id: "terracotta-adhesive",
        name: "Terracotta Adhesive",
        sizes: ["Approx 40 sq ft per 20 kg Bag"],
        image:
          "https://images.pexels.com/photos/29301863/pexels-photo-29301863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Specialized adhesive for terracotta installations, ensuring strong bonding and lasting results. Covers approx 40 sq ft per 20 kg bag.",
        variants: [],
      },
    ],
  },
  {
    id: "sanitary-ware",
    name: "Sanitary Ware",
    category: "Sanitary",
    icon: "Droplets",
    sizes: ["All Types of Sanitary Ware Available"],
    variants: [],
    image: "/images/sanitary.jpeg",
    description:
      "Complete sanitary ware collection including wash basins, one-piece suites, rimless toilets, and smart sanitary fixtures.",
    pdfs: [
      {
        name: "Sanitary Ware Catalogue 1",
        file: "/pdfs/sanitary-ware-catalog-final.pdf",
      },
      {
        name: "Wash basin",
        file: "/pdfs/sanitary-ware-catalogue-updated.pdf",
      },
    ],
  },
  {
    id: "hilton-doors",
    name: "Hilton Doors",
    category: "Doors",
    icon: "DoorOpen",
    sizes: [
      "2050x960x70",
      "2050x960x50",
      "2050x1200x70",
      "2050x1050x70",
      "2400x960x70",
      "2400x1500x70",
      "2050x1250x70",
      "2400x1200x100",
      "2050x1560x100",
      "2400x1800x100",
      "2050x760x30",
      "2400x760x30",
    ],
    variants: [],
    image: "/images/hilton-doors.jpg",
    description:
      "Premium Hilton Steel Doors with 50+ models in edge, cube, and hiltz styles. Available in multiple sizes for residential and commercial applications.",
    pdfs: [
      {
        name: "Hilton Door Catalogue",
        file: "/pdfs/hilton-door-catalogue.pdf",
      },
    ],
  },
  {
    id: "digital-locks",
    name: "Hi Smart Locks",
    category: "Digital Locks",
    icon: "Lock",
    sizes: [],
    variants: [],
    image:
      "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Advanced digital smart locks for homes, hotels, and offices — featuring AI-powered, palm recognition, and glass door compatible models.",
    pdfs: [
      {
        name: "Hilton Smart Locks Catalogue",
        file: "/pdfs/hi-smart-locks-catalog.pdf",
      },
    ],
  },
  {
    id: "granite",
    name: "Granite",
    category: "Granite",
    icon: "Gem",
    sizes: [],
    // sizes: ["1200x1200", "1200x1800"],
    variants: [],
    image: "/images/granite.jpeg",
    description:
      "Premium granite in a variety of colors and finishes for floors, walls, countertops, door frames and other architectural applications.",
    pdfs: [
      {
        name: "Granite",
        file: "/pdfs/oce-granite.pdf",
      },{
        name: "Granite Door Frames Catalog",
        file: "/pdfs/granite-door-frames-catalog.pdf",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Stones — grouped product with sub-products
  // ─────────────────────────────────────────────
  {
    id: "stones",
    name: "Stones",
    category: "Stones",
    icon: "Mountain",
    sizes: [],
    image: "/images/stone.jpeg",
    description:
      "Premium pebble stones, cobbles, and more — sourced from the finest quarries.",
    pdfs: [
      // {
      //   name: "Quartz",
      //   file: "/pdfs/quartz.pdf",
      // },
      {
        name: "Pebble Stones",
        file: "/pdfs/pebble-stones.pdf",
      },
      {
        name: "Temple",
        file: "/pdfs/mandir.pdf",
      },
      {
        name: "Cobbles Stone",
        file: "/pdfs/cobbles-stone.pdf",
      },
      {
        name: "Red Stone",
        file: "/pdfs/red-stone.pdf",
      },
    ],
    subProducts: [
      // {
      //   id: "granite",
      //   name: "Granite",
      //   sizes: ["1200x1200", "1200x1800"],
      //   image:
      //     "https://images.pexels.com/photos/168442/pexels-photo-168442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      //   description: "Premium granite in a variety of colors and finishes.",
      //   variants: [],
      // },
      // {
      //   id: "marble",
      //   name: "Marble",
      //   sizes: ["All Sizes Available"],
      //   image:
      //     "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      //   description:
      //     "Natural marble in elegant finishes for floors, walls, and countertops.",
      //   variants: [],
      // },
      {
        id: "limestone",
        name: "Limestone",
        image:
          "https://images.pexels.com/photos/29252363/pexels-photo-29252363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Durable limestone in single and double polished finishes.",
        variants: [],
      },
      // {
      //   id: "quartz",
      //   name: "Quartz",
      //   image:
      //     "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      //   description:
      //     "Digital and composite quartz surfaces for countertops and vanities.",
      //   variants: [],
      // },
      {
        id: "decorative-stones",
        name: "Pebble Stones",
        image:
          "https://images.pexels.com/photos/35466647/pexels-photo-35466647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Decorative stones available in a range of colors for architectural and interior applications.",
        variants: [],
      },
      {
        id: "mandir",
        name: "Temple",
        sizes: ["All Sizes Available"],
        image:
          "https://images.pexels.com/photos/35466647/pexels-photo-35466647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Beautiful stone mandir products available in multiple sizes and designs.",
        variants: [],
      },
      {
        id: "cobbles-stone",
        name: "Cobbles Stone",
        sizes: ["All Sizes Available"],
        image:
          "https://images.pexels.com/photos/29301863/pexels-photo-29301863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Natural cobblestones in multiple colors for pathways, driveways, and landscaping.",
        variants: [],
      },
      {
        id: "red-stone",
        name: "Red Stone",
        sizes: ["2050x1050"],
        image:
          "https://images.pexels.com/photos/29301863/pexels-photo-29301863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        description:
          "Our Red Sandstone Door Frames, crafted from authentic Dholpur Red Sandstone, offer the perfect blend of natural elegance, strength, and affordability. A superior and long-lasting alternative to traditional wooden frames, they bring a timeless, earthy charm to any space.",
        variants: [],
      },
    ],
  },
  {
    id: "decorative-tiles",
    name: "Decorative Items",
    category: "Decorative",
    icon: "Sparkles",
    sizes: [],
    variants: [],
    image: "/images/decorative-item.jpeg",
    description:
      "Explore our decorative collection featuring ceramic pencil border tiles, tile skirting, God poster tiles, and carpet tiles.",
    pdfs: [
      {
        name: "God Poster 600x1200",
        file: "/pdfs/god-poster-600x1200-with-g816.pdf",
      },
      {
        name: "Gods Poster Catalog 300x450",
        file: "/pdfs/gods-poster-catalog-full.pdf",
      },
      {
        name: "Gods Poster 600x600",
        file: "/pdfs/gods-poster-collection.pdf",
      },
      {
        name: "Carpet Tiles Catalog",
        file: "/pdfs/carpet-tiles-catalog.pdf",
      },
    ],
    subProducts: [
      {
        id: "pencil-border-tiles",
        name: "Ceramic Pencil Border Tiles",
        sizes: ["Multiple Designs Available"],
        image: "/images/pencil-border-tiles.jpeg",
        description:
          "Decorative ceramic pencil border tiles that add elegant detailing and a refined finish to walls and tiled surfaces.",
        variants: [],
      },
      {
        id: "tiles-skirting",
        name: "Tiles Skirting",
        sizes: ["Multiple Sizes Available"],
        image: "/images/tiles-skirting.jpeg",
        description:
          "Decorative tile skirting designed to create a neat transition between floors and walls while enhancing the overall finish.",
        variants: [],
      },
      {
        id: "god-poster-tiles",
        name: "God's Poster Tiles",
        sizes: ["600x600 mm", "300x450 mm", "600x1200 mm"],
        image: "/images/god-poster-tiles.jpeg",
        description:
          "Beautiful religious poster tiles featuring devotional artwork, available in 600×600 mm, 300×450 mm, and 600×1200 mm sizes. Ideal for home temples, prayer rooms, and other sacred spaces.",
        variants: [],
      },
      {
        id: "carpet-tiles",
        name: "Carpet Tiles",
        sizes: ["1200*1200", "600*600", "1200*1800"],
        image: "/images/carpet-tiles.jpeg",
        description:
          "Stylish carpet tiles offering a decorative flooring solution for offices, commercial spaces, and modern interiors.",
        variants: [],
      },
    ],
  },

  {
    id: "tiles-adhesive",
    name: "Tiles Adhesive & Grout",
    category: "Adhesive",
    icon: "Package",
    sizes: [],
    variants: [],
    image: "/images/tiles-adhesive.jpeg",
    description:
      "High-quality tile adhesives and grouts from leading brands including JK, Roff and Ultratech.",
    pdfs: [
      {
        name: "Tiles Adhesive and Grout Catalog",
        file: "/pdfs/adhesive-and-grout-catalog.pdf",
      },
    ],
  },
  {
    id: "kitchen-sink",
    name: "Kitchen Sinks",
    category: "Kitchen",
    icon: "ChefHat",
    sizes: ["All Sizes / All Colors / Double Bowl"],
    variants: [],
    image: "/images/sink.jpeg",
    description:
      "Stainless steel kitchen sinks in handmade, waterfall, satin, and plain finishes. Available in all sizes and colors with double bowl options.",
    pdfs: [
      {
        name: "Kitchen Sinks Catalogue",
        file: "/pdfs/kitchen-sink.pdf",
      },
    ],
  },
  {
    id: "vanity",
    name: "Bathroom Fixtures & Fitting",
    category: "Bathroom",
    icon: "Bath",
    sizes: [],
    // sizes: ["16x20", "18x24", "18x32"],
    variants: [],
    image: "/images/vanity.jpeg",
    description:
      "Elegant Vanity Fixtures & Fitting in wall-hung and floor-standing designs, available in 16x20, 18x24, and 18x32 sizes.",
    pdfs: [
      {
        name: "Vanity Catalogue",
        file: "/pdfs/bathroom-fixtures-and-fitting.pdf",
      },
      {
        name: "Shower Panels Catalogue",
        file: "/pdfs/shower-panels-catalog.pdf",
      },
    ],
  },
  {
    id: "quartz-table-top",
    name: "Quartz Table Top",
    category: "Furniture",
    icon: "Gem",
    sizes: ["Custom Sizes Available"],
    variants: [],
    image: "/images/quartz-table-top.jpeg",
    description:
      "Our Quartz Table Top collection is where modern design meets everlasting durability. Each set includes 2 nesting tables that save space and add a designer touch to any corner of your home. Unlike ordinary marble or wooden tops, our engineered quartz tops are 100% non-porous, scratch-resistant, heat-resistant, and easy to maintain. No stains, no tension - just wipe and it shines like new.",
    pdfs: [
      {
        name: "Quartz Table Top Catalogue",
        file: "/pdfs/quartz-table-top-catalog.pdf",
      },
    ],
  },
];
