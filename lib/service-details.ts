export type ServiceSpecification = {
  label: string
  value: string
}

export type ServicePhoto = {
  src: string
  caption: string
  alt: string
}

export type ServiceDetailInfo = {
  badge?: string
  specifications?: ServiceSpecification[]
  features?: string[]
  applications?: string[]
  benefits?: string[]
  installationSteps?: string[]
  importantNote?: string
  photos?: ServicePhoto[]
  video?: { src: string; caption: string }
}

export const serviceDetailData: Record<string, ServiceDetailInfo> = {
  // 1. Invisible Grills for Balcony
  'invisible-grills-for-balcony': {
    badge: 'High-Tensile 316 Marine Grade',
    specifications: [
      { label: 'Cable Grade', value: 'High-tensile 316 marine-grade stainless steel' },
      { label: 'Coating', value: 'Transparent nylon protective sheath' },
      { label: 'Thickness Options', value: '2 mm, 2.5 mm and 3 mm' },
      { label: 'Spacing Options', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Track Channel', value: 'Heavy-gauge powder-coated aluminium track' },
      { label: 'Tensile Capacity', value: 'Engineered for high load resistance' },
    ],
    features: [
      'Unobstructed panoramic balcony views without heavy iron bars',
      'Marine-grade 316 stainless steel resisting corrosion and rust',
      'Precision mechanical tensioning preventing cable sag',
      'Child and pet safety compliant for high-rise apartment balconies',
      'Low maintenance with simple wipe-down care',
      'Emergency cuttable in case of rescue needs',
    ],
    applications: [
      'Apartment balconies in high-rise buildings and condominiums',
      'Villa and duplex balconies',
      'Penthouse sit-outs and private balconies',
      'Child fall prevention and pet safety boundaries',
    ],
    benefits: [
      'Complete safety without compromising architectural elegance',
      '100% natural daylight and fresh air circulation',
      'Rust-proof durability in Bangalore and coastal weather',
      'Neat perimeter finish with concealed mechanical anchors',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-01.jpg', caption: 'Balcony invisible grill installation with open horizon view', alt: 'Balcony invisible grill installation in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-02.jpg', caption: 'High-tensile vertical cable tensioning detail', alt: 'Discreet invisible grill cable detailing' },
      { src: '/services/invisible-grills/invisible-grills-06.jpg', caption: 'High-rise balcony safety boundary with uninterrupted sky view', alt: 'High rise apartment invisible grill in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-10.jpg', caption: 'Corner balcony cable profile framing lush urban greenery', alt: 'Corner balcony invisible grill' },
    ],
    video: {
      src: '/services/invisible-grills/invisible-grills-video-01.mp4',
      caption: 'Completed balcony invisible grill installation walkthrough',
    },
  },

  // 2. Invisible Grills for Glass Balcony
  'invisible-grills-for-glass-balcony': {
    badge: 'Glass Railing Integration',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Mounting Style', value: 'Ceiling-to-glass railing / fascia mounted' },
      { label: 'Spacing', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Track Channel', value: 'Slim-line architectural aluminium profile' },
      { label: 'Fasteners', value: 'Stainless steel anchor bolts' },
    ],
    features: [
      'Engineered specifically to complement glass railing balconies',
      'Provides secondary height safety above low glass parapets',
      'Zero drilling into glass panels — anchored safely into concrete reveals',
      'Maintains ultra-clean modern architectural aesthetic',
      'Tested for high wind resistance on top floors',
    ],
    applications: [
      'Modern glass-railed balconies in luxury condominiums',
      'Duplex and penthouse glass balconies',
      'Commercial office terrace sit-outs with glass balustrades',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-03.jpg', caption: 'Invisible grills fitted above modern glass balcony railing', alt: 'Invisible grills for glass balcony installation' },
      { src: '/services/invisible-grills/invisible-grills-10.jpg', caption: 'Corner glass railing safety cable integration', alt: 'Glass balcony corner invisible grill' },
      { src: '/services/invisible-grills/invisible-grills-15.jpg', caption: 'Precision tensioning along architectural glass boundary', alt: 'Glass railing safety cables detail' },
    ],
  },

  // 3. Invisible Grills for Plain Balcony
  'invisible-grills-for-plain-balcony': {
    badge: 'Full-Height Parapet Safety',
    specifications: [
      { label: 'Cable Material', value: '316 Marine-grade SS wire core' },
      { label: 'Sheath', value: 'UV-stabilised transparent nylon' },
      { label: 'Fixing Method', value: 'Floor-to-ceiling or parapet-to-ceiling' },
      { label: 'Spacing', value: '50 mm / 75 mm pitch options' },
      { label: 'Warranty', value: 'Extended manufacturer warranty' },
    ],
    features: [
      'Custom fabricated to fit plain balconies with masonry or steel railings',
      'Floor-to-ceiling full-height safety barrier',
      'Eliminates need for heavy decorative iron grilles',
      'Allows natural cross-ventilation and sunlight into living rooms',
      'Strong tension prevents children from squeezing through',
    ],
    applications: [
      'Standard residential apartment balconies',
      'Balconies with brick or concrete parapet walls',
      'Independent houses and residential floors',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-04.jpg', caption: 'Plain balcony parapet-to-ceiling cable installation', alt: 'Invisible grills for plain balcony in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-06.jpg', caption: 'Full-height safety cables on residential apartment balcony', alt: 'Full height invisible grill for plain balcony' },
    ],
  },

  // 4. Invisible Grills for Windows
  'invisible-grills-for-windows': {
    badge: 'Discreet Window Protection',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Coating', value: 'Nylon protective sheath' },
      { label: 'Spacing', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Track', value: 'Slim profile aluminium channel' },
      { label: 'Tensile Strength', value: 'Engineered high load capacity' },
    ],
    features: [
      'Custom fitted into window reveals without bulky grilles',
      'Maintains daylight and outdoor visibility',
      'Safe for children and household pets',
      'Zero rust with 316 marine-grade cable cores',
      'Compatible with sliding, casement and French windows',
    ],
    applications: [
      'Residential sliding windows',
      'Openable casement windows',
      'Kitchen, bedroom and living room window reveals',
      'High-rise apartment window safety',
    ],
    photos: [
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-01.jpg', caption: 'Window invisible grill installation in residential apartment', alt: 'Invisible grills for windows installation in Bangalore' },
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-05.jpg', caption: 'Discreet window safety grill fitting with slim channel', alt: 'Discreet window safety grill Bangalore' },
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-12.jpg', caption: 'Wide window invisible grill with aluminium track anchors', alt: 'Wide window invisible grill track' },
    ],
  },

  // 5. Invisible Grills for Utilities
  'invisible-grills-for-utilities': {
    badge: 'Utility & Service Yard Safety',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Coating', value: 'Heavy nylon weather protective sheath' },
      { label: 'Orientation', value: 'Vertical tensioned alignment' },
      { label: 'Spacing', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Ventilation', value: '100% natural airflow' },
    ],
    features: [
      'Prevents birds, pigeons and accidental item falls from utility yards',
      'Allows continuous airflow for washing machines, geysers and clothes drying',
      'Easy to clean and maintain without accumulating soot or grease',
      'Sleek modern finish replacing claustrophobic iron cages',
    ],
    applications: [
      'Kitchen utility balconies',
      'Washing machine and laundry areas',
      'Service shafts and utility drying spaces',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-08.jpg', caption: 'Utility balcony invisible grill providing security and ventilation', alt: 'Invisible grills for utilities in Bangalore apartment' },
      { src: '/services/invisible-grills/invisible-grills-02.jpg', caption: 'Precision cable alignment in utility wash space', alt: 'Utility balcony safety cable installation' },
    ],
  },

  // 6. Invisible Grills for Staircases
  'invisible-grills-for-staircases': {
    badge: 'Architectural Void Safety',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Configuration', value: 'Floor-to-ceiling or handrail-to-ceiling' },
      { label: 'Spacing', value: '50 mm or 75 mm pitch' },
      { label: 'Track Finish', value: 'Powder-coated architectural aluminium' },
    ],
    features: [
      'Prevents children and pets from falling through open stair voids and banisters',
      'Enhances modern interior design with clean vertical sightlines',
      'Custom angled tracks matching staircase rise and run geometry',
      'Robust structural anchoring into concrete steps and ceiling slabs',
    ],
    applications: [
      'Duplex home stairwells',
      'Open riser contemporary stairs',
      'Mezzanine floor edges and internal balconies',
      'Villa atrium railings',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-11.jpg', caption: 'Staircase vertical invisible grill installation in modern duplex', alt: 'Invisible grills for staircases in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-02.jpg', caption: 'Close detail of vertical tensioned staircase cables', alt: 'Staircase safety cable tension detail' },
    ],
  },

  // 7. Invisible Grills for Terraces
  'invisible-grills-for-terraces': {
    badge: 'Rooftop Perimeter Protection',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Wind Resistance', value: 'Tested for high wind loads' },
      { label: 'Height', value: 'Custom heights up to 10+ feet' },
      { label: 'Anchors', value: 'Heavy-duty chemical/expansion anchors' },
    ],
    features: [
      'Secure boundary protection for rooftop terraces and sit-outs',
      'Preserves 360-degree skyline vistas without heavy masonry walls',
      'Withstands extreme outdoor monsoon weather and UV radiation',
      'Creates a safe recreation area for children, family, and pets',
    ],
    applications: [
      'Apartment rooftop common terraces',
      'Penthouse private terrace gardens',
      'Villa open roof sit-outs and decks',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-07.jpg', caption: 'Terrace perimeter invisible grill preserving skyline views', alt: 'Invisible grills for terraces in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-01.jpg', caption: 'Open rooftop boundary safety cables', alt: 'Terrace boundary invisible grill installation' },
    ],
  },

  // 8. Invisible Grills for Compound Walls
  'invisible-grills-for-compound-walls': {
    badge: 'Perimeter Boundary Security',
    specifications: [
      { label: 'Cable Grade', value: 'High-tensile 316 stainless steel' },
      { label: 'Mounting', value: 'Wall top mounted with heavy aluminium track' },
      { label: 'Spacing', value: '50 mm / 75 mm pitch' },
      { label: 'Coating', value: 'Weatherproof transparent protective jacket' },
    ],
    features: [
      'Adds clean vertical height security on top of masonry compound walls',
      'Deters human intrusion and stray animal entry without unsightly barbed wire',
      'Maintains open road visibility and premium villa curb appeal',
      'Corrosion-free performance across years of monsoon and sun exposure',
    ],
    applications: [
      'Villa compound walls and boundaries',
      'Gated community perimeter boundaries',
      'Commercial building campus boundaries',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-09.jpg', caption: 'Compound wall invisible grill perimeter safety barrier', alt: 'Invisible grills for compound walls in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-02.jpg', caption: 'Perimeter cable tensioning and anchor finish', alt: 'Compound wall safety cable detail' },
    ],
  },

  // 9. Invisible Grills for Open Areas
  'invisible-grills-for-open-areas': {
    badge: 'Custom Architectural Enclosure',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Span Capacity', value: 'Custom large-span structural engineering' },
      { label: 'Tension System', value: 'High-torque turnbuckle / mechanical lock' },
      { label: 'Sheath', value: 'Heavy nylon transparent casing' },
    ],
    features: [
      'Custom-engineered safety boundaries for large architectural spans',
      'Protects central building courtyards, lightwells, and ventilation shafts',
      'Blends into the background while stopping falls and bird intrusion',
      'Load-tested anchor points designed specifically for open structural voids',
    ],
    applications: [
      'Central building lightwells and atriums',
      'Residential courtyard voids',
      'Clubhouse open spans and commercial walkways',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-12.jpg', caption: 'Open courtyard invisible grill cable installation', alt: 'Invisible grills for open areas in Bangalore' },
      { src: '/services/invisible-grills/invisible-grills-06.jpg', caption: 'High-span tensioned safety cables across building void', alt: 'Open space safety cable system' },
    ],
  },

  // 10. Wall-Mounted Cloth Hangers
  'wall-mounted-cloth-hangers': {
    badge: 'Foldable Wall Drying Systems',
    specifications: [
      { label: 'Material', value: 'High-grade stainless steel (SS 202 / SS 304)' },
      { label: 'Type', value: 'Foldable scissor / bracket accordion design' },
      { label: 'Rods', value: '4 to 7 heavy-duty stainless steel rods' },
      { label: 'Load Capacity', value: 'Up to 30 kg wet laundry capacity' },
      { label: 'Mounting', value: 'Solid wall anchored with heavy steel fasteners' },
    ],
    features: [
      'Folds flat against the wall when not in use to save valuable space',
      'Rust-proof stainless steel construction ideal for wet clothing',
      'Heavy load-bearing capacity for heavy daily family laundry',
      'Smooth folding motion with durable pivot joints',
      'Professional installation on concrete or brick walls',
    ],
    applications: [
      'Apartment balconies with wall space',
      'Utility rooms and wash basins',
      'Terraces and covered corridors',
    ],
    benefits: [
      'Keeps balcony floors 100% free and clear',
      'Effortless pull-out and push-back mechanism',
      'Durable, rust-free performance for years',
    ],
    photos: [
      { src: '/services/cloth-hangers/cloth-hangers-02.jpg', caption: 'Wall-mounted foldable stainless steel clothes drying rack', alt: 'Wall mounted cloth hangers in Bangalore' },
      { src: '/services/cloth-hangers/cloth-hangers-06.jpg', caption: 'Foldable laundry drying rods mounted on utility wall', alt: 'Wall clothes drying rack installed on balcony wall' },
    ],
  },

  // 11. Ceiling-Mounted Cloth Hangers
  'ceiling-mounted-cloth-hangers': {
    badge: 'Pulley-Operated Ceiling Systems',
    specifications: [
      { label: 'Material', value: 'Stainless steel rods with nylon coated pulleys' },
      { label: 'Mechanism', value: 'Individual pipe lowering pulley system' },
      { label: 'Pipe Count', value: '4, 5, or 6 independent stainless steel pipes' },
      { label: 'Lengths Available', value: '4 ft, 5 ft, 6 ft, 7 ft, and 8 ft options' },
      { label: 'Cords', value: 'High-tensile nylon braided ropes' },
    ],
    features: [
      'Each stainless steel pipe lowers and rises independently',
      'Smooth nylon pulley mechanism makes hoisting effortless',
      'Utilises warm ceiling air for faster clothes drying',
      'Eliminates portable drying racks cluttering the floor',
      'Rust-proof materials designed for humid Indian monsoon conditions',
    ],
    applications: [
      'Apartment balconies',
      'Utility and washing machine areas',
      'Covered verandas and high-ceiling corridors',
    ],
    photos: [
      { src: '/services/cloth-hangers/cloth-hangers-01.jpg', caption: 'Ceiling-mounted pulley clothes drying hanger in balcony', alt: 'Ceiling mounted cloth hangers in Bangalore' },
      { src: '/services/cloth-hangers/cloth-hangers-04.jpg', caption: 'Space-conscious individual rod pulley lowering mechanism', alt: 'Individual rod cloth drying mechanism' },
    ],
  },

  // 12. Extra-Mount Cloth Hangers
  'extra-mount-cloth-hangers': {
    badge: 'Heavy-Duty High-Capacity',
    specifications: [
      { label: 'Material', value: 'Reinforced 304 stainless steel pipes' },
      { label: 'Brackets', value: 'Extra-thick heavy gauge structural brackets' },
      { label: 'Load Rating', value: 'Tested for 40+ kg wet laundry load' },
      { label: 'Rod Length', value: 'Available up to 8 ft wide spans' },
      { label: 'Hardware', value: 'Industrial grade anchor fasteners' },
    ],
    features: [
      'Reinforced construction built for heavy blankets, bedsheets and jeans',
      'Extra-mount heavy gauge brackets ensure zero sagging or bending',
      'Wider spacing between rods ensures superior air circulation and faster drying',
      'Engineered for large joint families and high-demand households',
    ],
    applications: [
      'Large apartment balconies',
      'Dedicated laundry rooms and rooftop utility sheds',
      'Villas and independent bungalows',
    ],
    photos: [
      { src: '/services/cloth-hangers/cloth-hangers-06.jpg', caption: 'Extra-mount heavy-duty stainless steel clothes drying rods', alt: 'Extra mount cloth hangers in Bangalore' },
      { src: '/services/cloth-hangers/cloth-hangers-01.jpg', caption: 'High-capacity ceiling drying system installation', alt: 'Heavy duty clothes drying installation' },
    ],
  },

  // 13. Pigeon Safety Nets
  'pigeon-safety-nets': {
    badge: 'HDPE Pigeon Safety',
    specifications: [
      { label: 'Material', value: 'HDPE Nylon / Monofilament' },
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Mesh Gap', value: '30 mm × 30 mm' },
      { label: 'Expected Lifespan', value: '4 to 5 years' },
      { label: 'Colours', value: 'White, Green and Black' },
      { label: 'Fixing', value: 'Stainless steel hooks & perimeter anchoring' },
    ],
    features: [
      'Stops pigeons and small birds from entering balconies and duct shafts',
      'Prevents health hazards and droppings while maintaining fresh air',
      'UV-stabilised formulation resists degradation from harsh sunlight',
      'Discreet appearance that does not block views or natural daylight',
      'Tension-fitted with perimeter stainless steel hooks for lasting tautness',
    ],
    applications: [
      'Apartment balconies and French doors',
      'Window ledges and AC outdoor unit shafts',
      'Building duct areas and ventilation shafts',
      'Courtyards and open lightwells',
    ],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'HDPE pigeon safety net installed across residential balcony', alt: 'Pigeon safety nets in Bangalore installed on balcony' },
      { src: '/services/hdpe-nylon/hdpe-nylon-02.jpg', caption: '30 mm x 30 mm precision mesh preventing bird entry', alt: 'Pigeon safety net mesh close-up detail' },
      { src: '/services/hdpe-nylon/hdpe-nylon-05.jpg', caption: 'Open building duct area pigeon protection netting', alt: 'Building duct area netting installation' },
    ],
  },

  // 14. Cricket Practice Nets
  'cricket-practice-nets': {
    badge: 'Heavy-Duty Sports Enclosure',
    specifications: [
      { label: 'Material', value: 'Braided HDPE / Nylon twine' },
      { label: 'Thickness', value: '2.5 mm / 3 mm heavy gauge' },
      { label: 'Mesh Gap', value: '40 mm / 50 mm square mesh' },
      { label: 'Border', value: 'Reinforced 8 mm perimeter border rope' },
      { label: 'UV Stabilisation', value: '100% UV-stabilised polymer' },
    ],
    features: [
      'Absorbs high-velocity cricket ball impacts with zero tearing',
      'Custom tailored to terrace pitches, backyard enclosures, and grounds',
      'Heavy-duty border rope reinforcement prevents edge fraying',
      'Long-lasting outdoor weather resistance against sun and monsoon rains',
      'Full box enclosures or modular side and roof netting options',
    ],
    applications: [
      'Rooftop and terrace cricket practice pitches',
      'Cricket coaching academies and school sports facilities',
      'Apartment community sports areas and box cricket turfs',
    ],
    photos: [
      { src: '/services/cricket-sports-net/cricket-sports-net-01.jpg', caption: 'Outdoor cricket practice pitch netting enclosure', alt: 'Cricket nets installation in Bangalore' },
      { src: '/services/cricket-sports-net/cricket-sports-net-02.jpg', caption: 'Terrace cricket practice netting with reinforced border', alt: 'Terrace cricket practice net Bangalore' },
      { src: '/services/cricket-sports-net/cricket-sports-net-03.jpg', caption: 'High-impact cricket sports netting frame', alt: 'Cricket practice net with durable structure' },
    ],
  },

  // 15. Child Safety Nets
  'child-safety-nets': {
    badge: 'Certified Child Protection',
    specifications: [
      { label: 'Material', value: 'GARWARE high-density braided HDPE' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Gap', value: '30 mm or 40 mm options' },
      { label: 'Load Capacity', value: 'High load tested for toddler fall prevention' },
      { label: 'Fasteners', value: 'Heavy-duty stainless steel anchor hooks' },
    ],
    features: [
      'Engineered specifically to prevent toddlers and young children from balcony falls',
      'High breaking strength withstands active physical body pressure',
      'Uniform knotted mesh structure ensures reliable load distribution',
      'Weather-resistant and UV-treated for 8–10 years outdoor life',
      'Anchored firmly into concrete reveals with zero loose edges',
    ],
    applications: [
      'High-rise residential balconies',
      'Stairwell voids and open banisters',
      'Low window sills in children\'s bedrooms',
    ],
    photos: [
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg', caption: 'High-density child safety net installed across balcony opening', alt: 'Child safety nets in Bangalore balcony installation' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-02.jpg', caption: 'Close detail of 2.5 mm braided HDPE child safety mesh', alt: 'Child safety net mesh close-up' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-03.jpg', caption: 'Heavy-duty balcony child protection barrier', alt: 'Balcony child safety net Bangalore' },
    ],
  },

  // 16. Pet Safety Nets
  'pet-safety-nets': {
    badge: 'Bite-Resistant Pet Protection',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon braided twine' },
      { label: 'Thickness', value: '2 mm and 2.5 mm options' },
      { label: 'Mesh Gap', value: '25 mm / 30 mm tight mesh' },
      { label: 'UV Resistance', value: 'UV-stabilised for long outdoor resilience' },
      { label: 'Colours', value: 'Black, White and Green' },
    ],
    features: [
      'Bite-resistant, strong braided construction prevents chewing through',
      'Small 25 mm / 30 mm mesh gap prevents paws and kittens from slipping through',
      'UV-stabilised for long outdoor resilience in hot and wet climates',
      'Maintains ventilation and clear viewing angles for pets and owners',
      'Secure edge anchor ropes and stainless steel hooks',
    ],
    applications: [
      'Cat and kitten safety on high-rise balconies',
      'Dog safety nets for open railings',
      'Window protection nets for indoor pets',
    ],
    photos: [
      { src: '/services/pet-safety-nets/pet-safety-nets-01.jpg', caption: 'High-rise balcony pet safety net protecting cats and dogs', alt: 'Pet safety nets for balconies in Bangalore' },
      { src: '/services/pet-safety-nets/pet-safety-nets-02.jpg', caption: 'Window pet protection netting with tight mesh gap', alt: 'Window pet safety netting' },
      { src: '/services/pet-safety-nets/pet-safety-nets-03.jpg', caption: 'Close-up of durable bite-resistant braided net fixing', alt: 'Durable pet safety net border fastening' },
    ],
  },

  // 17. Coconut Safety Nets
  'coconut-safety-nets': {
    badge: 'Heavy-Duty Impact Netting',
    specifications: [
      { label: 'Material', value: 'Heavy braided nylon / HDPE rope mesh' },
      { label: 'Thickness', value: '3 mm to 4 mm high impact twine' },
      { label: 'Mesh Gap', value: '40 mm to 50 mm square mesh' },
      { label: 'Perimeter', value: '10 mm heavy-duty shock absorption rope' },
      { label: 'Mounting', value: 'High-tensile steel wire cable framework' },
    ],
    features: [
      'Safely cushions and catches falling coconuts before reaching ground level',
      'Protects parked cars, pedestrians, building roofs and garden pathways',
      'Withstands high-velocity heavy impacts without breaking or sagging',
      'Tensioned across wire ropes for easy clearance and maintenance',
      'Weather-resistant materials built for continuous sun and rain exposure',
    ],
    applications: [
      'Residential apartment parking lots and driveways',
      'Villa gardens and pedestrian pathways beneath coconut palms',
      'Clubhouses, resorts and commercial premises with coconut trees',
    ],
    photos: [
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-04.jpg', caption: 'Heavy-duty impact safety net installation catching tree falls', alt: 'Coconut safety nets installation in Bangalore' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg', caption: 'High tensile shock-absorbing mesh structure', alt: 'Heavy impact net for falling coconuts' },
    ],
  },

  // 18. Balcony Nets
  'balcony-nets': {
    badge: 'Full Balcony Coverage',
    specifications: [
      { label: 'Material', value: 'UV-stabilised HDPE nylon' },
      { label: 'Thickness', value: '1.5 mm / 2 mm options' },
      { label: 'Mesh Size', value: '30 mm × 30 mm' },
      { label: 'Lifespan', value: '4 to 6 years' },
      { label: 'Fixing', value: 'Stainless steel anchor hooks' },
    ],
    features: [
      'Planned around balcony geometry, floor height and family routine',
      'Reliable barrier preventing accidental falls and bird entry',
      'Allows unobstructed air breeze and daylight into the home',
      'Neat, professional edge finish with concealed tie-lines',
    ],
    applications: ['Apartment balconies', 'High-rise residential towers', 'Villa balconies'],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-03.jpg', caption: 'Full balcony safety net installation on high-rise building', alt: 'Balcony safety nets in Bangalore' },
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'Neat perimeter hook anchoring along balcony frame', alt: 'Balcony net installation detail' },
    ],
  },

  // 19. Transparent Copolymer Safety Nets
  'transparent-copolymer-safety-nets': {
    badge: 'Crystal-Clear Visibility',
    specifications: [
      { label: 'Material', value: 'Transparent Copolymer' },
      { label: 'Thickness', value: '1 mm' },
      { label: 'Mesh Gap', value: '30 mm' },
      { label: 'Expected Lifespan', value: '5 years' },
      { label: 'Fixing', value: 'Edge-anchored perimeter system' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
    ],
    features: [
      'Crystal-clear transparency that does not obscure scenic views',
      'Lightweight and durable copolymer material',
      'UV-stabilised formulation preventing yellowing in sunlight',
      'Excellent airflow and natural light penetration',
      'Weather-resistant material with neat perimeter anchoring',
    ],
    applications: ['Balcony safety', 'Window protection', 'Pigeon protection', 'Pet safety'],
    photos: [
      { src: '/services/transparent-copolymer/transparent-copolymer-01.jpg', caption: 'Transparent copolymer net fitted across apartment balcony', alt: 'Transparent copolymer safety net installed on modern residential balcony' },
      { src: '/services/transparent-copolymer/transparent-copolymer-02.jpg', caption: 'High-clarity 1 mm copolymer mesh detail', alt: 'Close-up of 1 mm transparent copolymer safety net mesh' },
    ],
  },

  // 20. Garware TUF Rope Safety Nets
  'garware-tuf-rope-safety-nets': {
    badge: 'GARWARE TUF Rope',
    specifications: [
      { label: 'Brand', value: 'GARWARE' },
      { label: 'Material', value: 'HDPE braided net' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Gap', value: '40 mm' },
      { label: 'Expected Lifespan', value: '8–10 years' },
      { label: 'Colours', value: 'White, Green and Black' },
    ],
    features: [
      'Genuine GARWARE high-density braided netting',
      'High-durability construction resisting 8–10 years of outdoor weather',
      'Uniform mesh structure for consistent load distribution',
      'Effective protection against monkeys, pigeons and fall hazards',
    ],
    applications: ['Balconies', 'Child safety areas', 'Monkey protection', 'Duct voids'],
    photos: [
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-03.jpg', caption: 'Heavy-duty balcony protection against monkeys and falls', alt: 'Garware TUF rope safety netting on balcony' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg', caption: 'Garware braided safety net installed across balcony opening', alt: 'Garware braided net detail' },
    ],
  },

  // 21. Sports Nets
  'sports-nets': {
    badge: 'Multi-Sport Enclosures',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Size', value: 'Customised options for sport' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
    ],
    features: [
      'Heavy-duty impact absorption for cricket, football and golf',
      'High tensile braided HDPE mesh with reinforced borders',
      'Customised dimensions tailored to school and academy facilities',
    ],
    applications: ['Cricket grounds', 'Football cages', 'Golf nets', 'Volleyball enclosures'],
    photos: [
      { src: '/services/cricket-sports-net/cricket-sports-net-02.jpg', caption: 'Terrace sports practice netting enclosure', alt: 'Sports net enclosure' },
      { src: '/services/cricket-sports-net/cricket-sports-net-01.jpg', caption: 'Outdoor pitch practice enclosure', alt: 'Outdoor sports net' },
    ],
  },

  // 22. Staircase Safety Nets
  'staircase-safety-nets': {
    badge: 'Staircase & Fall Protection',
    specifications: [
      { label: 'Material', value: '2.5 mm braided safety net' },
      { label: 'Construction', value: 'Strong braided construction' },
      { label: 'UV Resistance', value: 'UV-stabilised options' },
      { label: 'Mesh Sizes', value: 'Customised mesh sizes' },
    ],
    features: [
      'Customised geometry tailored to staircase angles and railings',
      'Protective barrier preventing toddlers and pets from falling through banisters',
      'Clean tensioning that preserves staircase design aesthetics',
    ],
    applications: ['Staircase banisters', 'Duplex stairs', 'Mezzanine voids', 'Indoor railings'],
    photos: [
      { src: '/services/staircase-safety-nets/staircase-safety-nets-01.jpg', caption: 'Indoor duplex staircase safety net installation', alt: 'Staircase safety netting fitted along open railings' },
      { src: '/services/staircase-safety-nets/staircase-safety-nets-02.jpg', caption: 'Banister fall protection netting for child safety', alt: 'Child safety netting for staircase banister' },
    ],
  },

  // 23. Mosquito Velcro Nets
  'mosquito-velcro-nets': {
    badge: 'No-Drill Insect Protection',
    specifications: [
      { label: 'Material', value: 'Fibreglass or polyester mosquito mesh' },
      { label: 'Fixing', value: 'Self-adhesive Velcro tape' },
      { label: 'Mesh', value: 'Fine woven mesh to block mosquitoes & insects' },
      { label: 'Maintenance', value: 'Removable and washable' },
    ],
    features: [
      'Fine woven insect-proof mesh blocking mosquitoes and small insects',
      'Self-adhesive industrial Velcro perimeter with zero frame drilling',
      'Allows 100% natural ventilation and fresh airflow',
      'Easily detachable for washing and window cleaning',
    ],
    applications: ['Residential windows', 'Kitchen windows', 'Bedroom windows'],
    photos: [
      { src: '/services/mosquito/mosquito-01.jpg', caption: 'Window fitted with self-adhesive Velcro mosquito net', alt: 'Self-adhesive Velcro mosquito mesh on bedroom window' },
      { src: '/services/mosquito/mosquito-02.jpg', caption: 'Fine woven mosquito mesh blocking insects while allowing fresh air', alt: 'Fine mosquito net mesh detail' },
    ],
  },

  // 24. Bird Nets
  'bird-nets': {
    badge: 'Bird Protection Systems',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Mesh Gap', value: '30 mm' },
      { label: 'Lifespan', value: '4 to 5 years' },
    ],
    features: [
      'Humanely prevents pigeons, crows and birds from entering balconies and duct areas',
      'Prevents nesting, feathers and droppings accumulation',
      'UV-stabilised netting withstanding harsh summer temperatures',
    ],
    applications: ['Balconies', 'Window ledges', 'Duct shafts', 'Courtyards'],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-04.jpg', caption: 'Bird protection netting installed across residential duct shaft', alt: 'Bird protection nets in Bangalore' },
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'Balcony bird net installation', alt: 'Balcony bird netting' },
    ],
  },

  // 25. Bird Spikes
  'bird-spikes': {
    badge: 'Stainless Steel Ledge Deterrent',
    specifications: [
      { label: 'Spike Material', value: '304 Stainless steel' },
      { label: 'Base', value: 'UV-resistant virgin polycarbonate' },
      { label: 'Spike Angle', value: 'Multi-directional deterrent pattern' },
      { label: 'Fixing', value: 'High-strength silicone adhesive / screw fix' },
    ],
    features: [
      'Discreet deterrent strips preventing birds from landing or perching on ledges',
      'Humane design that discourages birds without causing physical injury',
      'Zero maintenance with rust-free stainless steel pins',
    ],
    applications: ['Window ledges', 'AC outdoor compressors', 'Parapet edges', 'Signage boards'],
    photos: [
      { src: '/images/grill-detail.png', caption: 'Precision stainless steel deterrent installation on residential ledge', alt: 'Stainless steel bird spikes on window ledge' },
    ],
  },

  // 26. Safety Nets
  'safety-nets': {
    badge: 'HDPE Braided & Nylon Safety',
    specifications: [
      { label: 'Material', value: 'HDPE Nylon / Braided net options' },
      { label: 'Thickness Options', value: '1.5 mm, 2 mm, 2.5 mm' },
      { label: 'Mesh Gap Options', value: '25 mm, 30 mm, 40 mm' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
      { label: 'Fixing', value: 'Stainless steel anchor hooks and perimeter cords' },
    ],
    features: [
      'High tensile strength with load-bearing safety margins',
      'UV-resistant and weather-proof formulation',
      'Good ventilation and clear visibility',
      'Safe for children, household pets, and open residential voids',
      'Professional installation by trained safety technicians',
    ],
    applications: [
      'Balcony safety boundaries',
      'Window protection',
      'Duct areas and building voids',
      'Pet and child fall prevention',
    ],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-05.jpg', caption: 'Residential safety net installation across opening', alt: 'Safety net installation in Bangalore' },
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'Balcony perimeter safety netting', alt: 'Balcony safety net' },
    ],
  },

  // Legacy route fallbacks
  'invisible-grills': {
    badge: 'High-Tensile Cable System',
    specifications: [
      { label: 'Cable Grade', value: 'High-tensile 316 marine-grade stainless steel' },
      { label: 'Coating', value: 'Transparent nylon protective sheath' },
      { label: 'Thickness Options', value: '2 mm, 2.5 mm and 3 mm' },
      { label: 'Spacing Options', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Track Channel', value: 'Heavy-gauge powder-coated aluminium track' },
      { label: 'Tensile Capacity', value: 'Engineered for high load resistance' },
    ],
    features: [
      'Unobstructed panoramic views without heavy visual bars',
      'Marine-grade 316 stainless steel resisting corrosion and rust',
      'Precision mechanical tensioning preventing cable sag',
      'Child and pet safety compliant for high-rise balconies',
      'Low maintenance with simple wipe-down care',
      'Emergency cuttable in case of rescue needs',
    ],
    applications: [
      'Balconies in high-rise apartments and condominiums',
      'Residential windows and French doors',
      'Villas, duplex homes and penthouses',
      'Child safety and pet protection barriers',
    ],
    photos: [
      { src: '/services/invisible-grills/invisible-grills-01.jpg', caption: 'Balcony invisible grill installation with open horizon view', alt: 'Balcony invisible grill installation' },
      { src: '/services/invisible-grills/invisible-grills-02.jpg', caption: 'High-tensile vertical cable tensioning detail', alt: 'Discreet invisible grill cable detailing' },
      { src: '/services/invisible-grills/invisible-grills-06.jpg', caption: 'High-rise balcony safety boundary with uninterrupted sky view', alt: 'High rise apartment invisible grill' },
    ],
    video: {
      src: '/services/invisible-grills/invisible-grills-video-01.mp4',
      caption: 'Completed balcony invisible grill installation walkthrough',
    },
  },
  'cloth-hangers': {
    badge: 'Space-Saving Drying Solutions',
    specifications: [
      { label: 'Type', value: 'Ceiling pulley & wall-mounted foldable racks' },
      { label: 'Material Options', value: 'Stainless steel & high-grade aluminium' },
      { label: 'Mechanism', value: 'Smooth nylon pulley system with individual pipe lowering' },
      { label: 'Capacity', value: 'Heavy-duty daily household laundry capacity' },
      { label: 'Mounting', value: 'Ceiling or wall anchored with robust fasteners' },
    ],
    features: [
      'Premium-quality clothes hangers',
      'Wall-mounted and foldable designs',
      'Stainless steel options',
      'Space-saving solutions',
      'Strong, durable and easy to use',
      'Professional installation',
    ],
    applications: [
      'Apartment balconies',
      'Utility rooms and wash areas',
      'Terraces and covered drying areas',
    ],
    photos: [
      { src: '/services/cloth-hangers/cloth-hangers-01.jpg', caption: 'Ceiling-mounted pulley clothes drying hanger in balcony', alt: 'Ceiling pulley cloth hanger installed in apartment balcony' },
      { src: '/services/cloth-hangers/cloth-hangers-02.jpg', caption: 'Wall-mounted foldable stainless steel drying rack', alt: 'Foldable wall clothes drying rack' },
    ],
  },
  'pigeon-nets': {
    badge: 'HDPE Pigeon Safety',
    specifications: [
      { label: 'Material', value: 'HDPE Nylon' },
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Mesh Gap', value: '30 mm × 30 mm' },
      { label: 'Expected Lifespan', value: '4 years' },
      { label: 'Colours', value: 'White, Green and Black' },
      { label: 'Fixing', value: 'Stainless steel hooks & perimeter anchoring' },
    ],
    features: [
      'Strong and lightweight material',
      'UV-resistant options',
      'Weather-resistant',
      'Good ventilation and visibility',
      'Easy maintenance',
    ],
    applications: ['Balconies', 'Windows', 'Duct areas', 'Open spaces'],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'HDPE pigeon safety net installed across residential balcony', alt: 'HDPE pigeon safety netting installation on balcony' },
      { src: '/services/hdpe-nylon/hdpe-nylon-02.jpg', caption: '30 mm x 30 mm precision mesh preventing bird entry', alt: 'Pigeon safety net mesh close-up detail' },
    ],
  },
}

export function getServiceDetailInfo(slug: string): ServiceDetailInfo | null {
  if (serviceDetailData[slug]) return serviceDetailData[slug]

  // Fallback checks by keyword
  if (slug.includes('glass-balcony')) return serviceDetailData['invisible-grills-for-glass-balcony']
  if (slug.includes('plain-balcony')) return serviceDetailData['invisible-grills-for-plain-balcony']
  if (slug.includes('utility') || slug.includes('utilities')) return serviceDetailData['invisible-grills-for-utilities']
  if (slug.includes('compound-wall')) return serviceDetailData['invisible-grills-for-compound-walls']
  if (slug.includes('open-area') || slug.includes('open-space')) return serviceDetailData['invisible-grills-for-open-areas']
  if (slug.includes('terrace')) return serviceDetailData['invisible-grills-for-terraces']
  if (slug.includes('staircase') && slug.includes('grill')) return serviceDetailData['invisible-grills-for-staircases']
  if (slug.includes('staircase')) return serviceDetailData['staircase-safety-nets']
  if (slug.includes('window') && (slug.includes('grill') || slug.includes('invisible'))) return serviceDetailData['invisible-grills-for-windows']
  if (slug.includes('balcony') && (slug.includes('grill') || slug.includes('invisible'))) return serviceDetailData['invisible-grills-for-balcony']
  if (slug.includes('invisible-grill')) return serviceDetailData['invisible-grills-for-balcony']

  if (slug.includes('wall-mount') || slug.includes('wall-cloth')) return serviceDetailData['wall-mounted-cloth-hangers']
  if (slug.includes('ceiling-mount') || slug.includes('ceiling-cloth')) return serviceDetailData['ceiling-mounted-cloth-hangers']
  if (slug.includes('extra-mount')) return serviceDetailData['extra-mount-cloth-hangers']
  if (slug.includes('hanger') || slug.includes('drying')) return serviceDetailData['wall-mounted-cloth-hangers']

  if (slug.includes('coconut')) return serviceDetailData['coconut-safety-nets']
  if (slug.includes('pigeon')) return serviceDetailData['pigeon-safety-nets']
  if (slug.includes('cricket')) return serviceDetailData['cricket-practice-nets']
  if (slug.includes('child') || slug.includes('kids')) return serviceDetailData['child-safety-nets']
  if (slug.includes('pet') || slug.includes('cat') || slug.includes('dog')) return serviceDetailData['pet-safety-nets']
  if (slug.includes('garware') || slug.includes('tuf')) return serviceDetailData['garware-tuf-rope-safety-nets']
  if (slug.includes('mosquito')) return serviceDetailData['mosquito-velcro-nets']
  if (slug.includes('sports')) return serviceDetailData['sports-nets']
  if (slug.includes('transparent')) return serviceDetailData['transparent-copolymer-safety-nets']
  if (slug.includes('bird-spike')) return serviceDetailData['bird-spikes']
  if (slug.includes('bird')) return serviceDetailData['bird-nets']
  if (slug.includes('balcony-net')) return serviceDetailData['balcony-nets']
  if (slug.includes('safety-net')) return serviceDetailData['safety-nets']

  return null
}
