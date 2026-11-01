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
  // Transparent Copolymer Safety Net
  'transparent-copolymer-safety-nets': {
    badge: 'Transparent Copolymer',
    specifications: [
      { label: 'Material', value: 'Transparent Copolymer' },
      { label: 'Thickness', value: '1 mm' },
      { label: 'Mesh Gap', value: '30 mm' },
      { label: 'Expected Lifespan', value: '5 years' },
      { label: 'Fixing', value: 'Edge-anchored perimeter system' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
    ],
    features: [
      'Crystal-clear transparency',
      'Lightweight and durable material',
      'UV-stabilised options',
      'Excellent airflow and natural light',
      'Weather-resistant material',
      'Neat and professional installation',
    ],
    applications: [
      'Balcony safety',
      'Window protection',
      'Pigeon protection',
      'Cat and pet protection',
      'Home safety',
    ],
    photos: [
      { src: '/services/transparent-copolymer/transparent-copolymer-01.jpg', caption: 'Transparent copolymer net fitted across apartment balcony', alt: 'Transparent copolymer safety net installed on modern residential balcony' },
      { src: '/services/transparent-copolymer/transparent-copolymer-02.jpg', caption: 'High-clarity 1 mm copolymer mesh detail', alt: 'Close-up of 1 mm transparent copolymer safety net mesh' },
      { src: '/services/transparent-copolymer/transparent-copolymer-05.jpg', caption: 'Unobtrusive boundary preserving open light and ventilation', alt: 'Transparent copolymer net preserving outdoor daylight and open sky views' },
      { src: '/services/transparent-copolymer/transparent-copolymer-06.jpg', caption: 'Precision edge-tensioned transparent window net', alt: 'Transparent copolymer window safety netting installation' },
    ],
  },

  // Premium HDPE Pigeon Safety Net
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
      'Professional installation',
    ],
    applications: [
      'Balconies',
      'Windows',
      'Duct areas',
      'Open spaces',
    ],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'HDPE pigeon safety net installed across residential balcony', alt: 'HDPE pigeon safety netting installation on balcony' },
      { src: '/services/hdpe-nylon/hdpe-nylon-02.jpg', caption: '30 mm x 30 mm precision mesh preventing bird entry', alt: 'Pigeon safety net mesh close-up detail' },
      { src: '/services/hdpe-nylon/hdpe-nylon-05.jpg', caption: 'Open building duct area pigeon protection netting', alt: 'Building duct area netting installation' },
      { src: '/services/hdpe-nylon/hdpe-nylon-06.jpg', caption: 'Neat perimeter anchoring with stainless steel fixings', alt: 'Secure perimeter hook fixing on apartment balcony' },
    ],
  },
  'pigeon-safety-nets': {
    badge: 'HDPE Pigeon Safety',
    specifications: [
      { label: 'Material', value: 'HDPE Nylon' },
      { label: 'Thickness', value: '1.5 mm' },
      { label: 'Mesh Gap', value: '30 mm × 30 mm' },
      { label: 'Expected Lifespan', value: '4 years' },
      { label: 'Colours', value: 'White, Green and Black' },
    ],
    features: [
      'Strong and lightweight material',
      'UV-resistant options',
      'Weather-resistant',
      'Good ventilation and visibility',
      'Easy maintenance',
      'Professional installation',
    ],
    applications: ['Balconies', 'Windows', 'Duct areas', 'Open spaces'],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'HDPE pigeon safety net installed across residential balcony', alt: 'HDPE pigeon safety netting installation on balcony' },
      { src: '/services/hdpe-nylon/hdpe-nylon-02.jpg', caption: '30 mm x 30 mm precision mesh preventing bird entry', alt: 'Pigeon safety net mesh close-up detail' },
    ],
  },

  // Premium Cricket Sports Nets
  'sports-nets': {
    badge: 'Heavy-Duty Sports Enclosure',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Size', value: 'Customised options' },
      { label: 'Colours', value: 'Green, Black and White' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
      { label: 'Construction', value: 'Heavy-duty construction' },
    ],
    features: [
      'Heavy-duty impact absorption',
      'High tensile braided HDPE / Nylon',
      'UV-stabilised for harsh outdoor weather',
      'Customised mesh sizes tailored to sport',
      'Long-lasting border rope reinforcement',
      'Professional pitch & enclosure installation',
    ],
    applications: [
      'Cricket academies',
      'Cricket grounds',
      'Schools and colleges',
      'Terrace cricket practice',
      'Indoor and outdoor sports facilities',
    ],
    photos: [
      { src: '/services/cricket-sports-net/cricket-sports-net-01.jpg', caption: 'Outdoor cricket practice pitch netting enclosure', alt: 'Heavy-duty outdoor cricket net enclosure' },
      { src: '/services/cricket-sports-net/cricket-sports-net-02.jpg', caption: 'Terrace cricket practice netting with reinforced border', alt: 'Terrace cricket netting setup' },
      { src: '/services/cricket-sports-net/cricket-sports-net-03.jpg', caption: 'High-impact cricket sports netting frame', alt: 'Cricket practice net with durable structure' },
      { src: '/services/cricket-sports-net/cricket-sports-net-05.jpg', caption: 'Heavy-duty boundary netting for sports academy', alt: 'Sports academy cricket net installation' },
    ],
  },
  'cricket-nets': {
    badge: 'Heavy-Duty Cricket Enclosure',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Size', value: 'Customised options' },
      { label: 'Colours', value: 'Green, Black and White' },
      { label: 'UV Resistance', value: 'UV-stabilised formulation' },
      { label: 'Construction', value: 'Heavy-duty construction' },
    ],
    applications: ['Cricket academies', 'Cricket grounds', 'Schools and colleges', 'Terrace cricket practice', 'Indoor and outdoor sports facilities'],
    photos: [
      { src: '/services/cricket-sports-net/cricket-sports-net-01.jpg', caption: 'Outdoor cricket practice pitch netting enclosure', alt: 'Outdoor cricket net enclosure' },
      { src: '/services/cricket-sports-net/cricket-sports-net-02.jpg', caption: 'Terrace cricket practice netting with reinforced border', alt: 'Terrace cricket practice net' },
    ],
  },

  // Premium Garware / TUF Rope Safety Nets
  'garware-tuf-rope-safety-nets': {
    badge: 'GARWARE TUF Rope',
    specifications: [
      { label: 'Brand', value: 'GARWARE' },
      { label: 'Material', value: 'HDPE braided net' },
      { label: 'Thickness', value: '2.5 mm' },
      { label: 'Mesh Gap', value: '40 mm' },
      { label: 'Expected Lifespan', value: '8–10 years' },
      { label: 'Colours', value: 'White, Green and Black' },
      { label: 'UV Stabilisation', value: 'UV-stabilised material' },
      { label: 'Construction', value: 'Strong braided construction' },
      { label: 'Mesh Structure', value: 'Uniform mesh structure' },
      { label: 'Sizing', value: 'Customised sizes available' },
    ],
    features: [
      'Genuine GARWARE high-density braided netting',
      'Strong and durable construction',
      'UV-stabilised for 8–10 years outdoor lifespan',
      'Uniform mesh structure for consistent load distribution',
      'Sunlight-resistant and weather-proof',
      'Neat professional installation with heavy anchors',
    ],
    applications: [
      'Balcony safety',
      'Child safety',
      'Cat safety',
      'Monkey protection',
      'Pigeon protection',
      'Window protection',
      'Open duct areas',
    ],
    benefits: [
      'Premium quality material',
      'Strong and durable construction',
      'Sunlight-resistant',
      'Good ventilation',
      'Neat professional installation',
    ],
    photos: [
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg', caption: 'Garware braided safety net installed across balcony opening', alt: 'Garware TUF rope safety netting on balcony' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-02.jpg', caption: 'Close detail of 2.5 mm braided HDPE mesh structure', alt: 'Close-up of Garware braided safety net' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-03.jpg', caption: 'Heavy-duty balcony protection against monkeys and falls', alt: 'High strength balcony netting installation' },
      { src: '/services/tuf-ropes-garware/tuf-ropes-garware-04.jpg', caption: 'Customised open duct area safety net coverage', alt: 'Duct area safety netting by Garware' },
    ],
  },

  // Premium Pet Safety Nets
  'pet-safety-nets': {
    badge: 'Pet & Child Protection',
    specifications: [
      { label: 'Material', value: 'HDPE / Nylon' },
      { label: 'Thickness', value: '2 mm and 2.5 mm options' },
      { label: 'Mesh Gap', value: '25 mm / 30 mm options' },
      { label: 'UV Stabilisation', value: 'UV-stabilised material options' },
      { label: 'Construction', value: 'Strong braided construction' },
      { label: 'Colours', value: 'Black, White and Green' },
    ],
    features: [
      'Bite-resistant, strong braided construction',
      'Small 25 mm / 30 mm mesh gap prevents paws and kittens from slipping through',
      'UV-stabilised for long outdoor resilience',
      'Maintains ventilation and clear viewing angles',
      'Secure edge anchor ropes and stainless steel hooks',
    ],
    applications: [
      'Cat safety nets',
      'Dog safety nets',
      'Kitten protection',
      'Balcony protection',
      'Window protection',
      'Open duct areas',
    ],
    photos: [
      { src: '/services/pet-safety-nets/pet-safety-nets-01.jpg', caption: 'High-rise balcony pet safety net protecting cats and dogs', alt: 'Pet safety net installation for balcony' },
      { src: '/services/pet-safety-nets/pet-safety-nets-02.jpg', caption: 'Window pet protection netting with tight mesh gap', alt: 'Window pet safety netting' },
      { src: '/services/pet-safety-nets/pet-safety-nets-03.jpg', caption: 'Close-up of durable bite-resistant braided net fixing', alt: 'Durable pet safety net border fastening' },
    ],
  },

  // Premium Staircase and Safety Nets
  'staircase-safety-nets': {
    badge: 'Staircase & Fall Protection',
    specifications: [
      { label: 'Material', value: '2.5 mm braided safety net' },
      { label: 'Construction', value: 'Strong braided construction' },
      { label: 'UV Resistance', value: 'UV-stabilised options' },
      { label: 'Mesh Sizes', value: 'Customised mesh sizes' },
      { label: 'Application Scope', value: 'Indoor and outdoor applications' },
      { label: 'Fixing System', value: 'Professional fixing system' },
    ],
    features: [
      'Strong 2.5 mm braided safety net construction',
      'Customised geometry tailored to staircase angles and railings',
      'Protective barrier preventing toddlers and pets from falling through banisters',
      'Clean architectural tensioning that preserves staircase design',
      'Indoor and outdoor compatible fixing anchors',
    ],
    applications: [
      'Staircase safety nets',
      'Open staircase protection',
      'Railing protection',
      'Children\'s safety barriers',
      'Open floor areas',
      'Selected fall protection applications',
    ],
    benefits: [
      'Strong and durable construction',
      'Customised installation',
      'Neat finishing',
      'Additional protection for open spaces',
    ],
    photos: [
      { src: '/services/staircase-safety-nets/staircase-safety-nets-01.jpg', caption: 'Indoor duplex staircase safety net installation', alt: 'Staircase safety netting fitted along open railings' },
      { src: '/services/staircase-safety-nets/staircase-safety-nets-02.jpg', caption: 'Banister fall protection netting for child safety', alt: 'Child safety netting for staircase banister' },
      { src: '/services/staircase-safety-nets/staircase-safety-nets-04.jpg', caption: 'Floor-to-ceiling stairwell void protection net', alt: 'Open stairwell fall protection netting' },
      { src: '/services/staircase-safety-nets/staircase-safety-nets-05.jpg', caption: 'Custom-anchored railing barrier with clean finishing', alt: 'Railing protection net installation detail' },
    ],
  },

  // Mosquito Velcro Nets
  'mosquito-velcro-nets': {
    badge: 'No-Drill Insect Protection',
    specifications: [
      { label: 'Material', value: 'Fibreglass or polyester mosquito mesh' },
      { label: 'Fixing', value: 'Self-adhesive Velcro tape' },
      { label: 'Mesh', value: 'Fine woven mesh to block mosquitoes, flies & small insects' },
      { label: 'Colours', value: 'Black, White and Grey (subject to availability)' },
      { label: 'Installation', value: 'Easy to install and remove' },
      { label: 'Maintenance', value: 'Removable and washable' },
    ],
    features: [
      'Fine woven insect-proof mesh',
      'Self-adhesive industrial Velcro perimeter',
      'Zero drilling or damage to window frames',
      'Allows 100% natural ventilation and fresh breeze',
      'Easily detachable for washing and window maintenance',
      'Budget-friendly window protection solution',
    ],
    applications: [
      'Residential windows',
      'Kitchen windows',
      'Ventilation areas',
    ],
    benefits: [
      'Helps prevent mosquitoes and insects from entering',
      'Allows fresh air and natural ventilation',
      'Does not require drilling or permanent fixtures',
      'Easy to remove for cleaning',
      'Neat and simple appearance',
      'Budget-friendly window protection solution',
    ],
    installationSteps: [
      'Measure the complete window frame.',
      'Clean the frame and remove dust.',
      'Fix self-adhesive Velcro tape around all four sides.',
      'Attach the stitched mosquito mesh.',
      'Press firmly around the edges to prevent gaps.',
    ],
    importantNote: 'Lifespan depends on mesh quality, adhesive quality, sunlight exposure and maintenance.',
    photos: [
      { src: '/services/mosquito/mosquito-01.jpg', caption: 'Window fitted with self-adhesive Velcro mosquito net', alt: 'Self-adhesive Velcro mosquito mesh on bedroom window' },
      { src: '/services/mosquito/mosquito-02.jpg', caption: 'Fine woven mosquito mesh blocking insects while allowing fresh air', alt: 'Fine mosquito net mesh detail' },
      { src: '/services/mosquito/mosquito-03.jpg', caption: 'Removable and washable mosquito mesh border detail', alt: 'Removable Velcro mosquito screen border' },
      { src: '/services/mosquito/mosquito-04.jpg', caption: 'Clean, no-drill frame finish on residential window', alt: 'Neat window frame insect screen installation' },
    ],
  },

  // Clothes Hangers
  'cloth-hangers': {
    badge: 'Space-Saving Drying Solutions',
    specifications: [
      { label: 'Type', value: 'Ceiling pulley & wall-mounted foldable racks' },
      { label: 'Material Options', value: 'Stainless steel & high-grade aluminium' },
      { label: 'Mechanism', value: 'Smooth nylon pulley system with individual pipe lowering' },
      { label: 'Capacity', value: 'Heavy-duty daily household laundry capacity' },
      { label: 'Mounting', value: 'Ceiling or wall anchored with robust fasteners' },
      { label: 'Installation', value: 'Professional installation by skilled technicians' },
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
      'Compact residential spaces',
    ],
    benefits: [
      'Maximises floor space in balconies and utility areas',
      'Individual rod lowering mechanism for effortless hanging',
      'Rust-proof stainless steel construction for long life',
      'Neat, modern aesthetic for contemporary homes',
    ],
    photos: [
      { src: '/services/cloth-hangers/cloth-hangers-01.jpg', caption: 'Ceiling-mounted pulley clothes drying hanger in balcony', alt: 'Ceiling pulley cloth hanger installed in apartment balcony' },
      { src: '/services/cloth-hangers/cloth-hangers-02.jpg', caption: 'Wall-mounted foldable stainless steel drying rack', alt: 'Foldable wall clothes drying rack' },
      { src: '/services/cloth-hangers/cloth-hangers-04.jpg', caption: 'Space-conscious individual rod pulley lowering mechanism', alt: 'Individual rod cloth drying mechanism' },
      { src: '/services/cloth-hangers/cloth-hangers-06.jpg', caption: 'Durable stainless steel drying rods in utility balcony', alt: 'Stainless steel clothes hanger rods in utility room' },
    ],
  },

  // Invisible Grills
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
      { src: '/services/invisible-grills/invisible-grills-10.jpg', caption: 'Corner balcony cable profile framing lush urban greenery', alt: 'Corner balcony invisible grill' },
    ],
    video: {
      src: '/services/invisible-grills/invisible-grills-video-01.mp4',
      caption: 'Completed balcony invisible grill installation walkthrough',
    },
  },
  'window-invisible-grills': {
    badge: 'Discreet Window Protection',
    specifications: [
      { label: 'Cable Grade', value: '316 Marine-grade stainless steel' },
      { label: 'Coating', value: 'Nylon protective sheath' },
      { label: 'Spacing', value: '2 inches (50 mm) or 3 inches (75 mm)' },
      { label: 'Track', value: 'Slim profile aluminium channel' },
    ],
    features: [
      'Custom fitted into window reveals without bulky grilles',
      'Maintains daylight and outdoor visibility',
      'Safe for children and household pets',
      'Zero rust with 316 marine-grade cable cores',
    ],
    applications: ['Residential sliding windows', 'Openable casement windows', 'Kitchen & bedroom windows'],
    photos: [
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-01.jpg', caption: 'Window invisible grill installation in residential apartment', alt: 'Window invisible grill installation' },
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-05.jpg', caption: 'Discreet window safety grill fitting with slim channel', alt: 'Discreet window safety grill' },
      { src: '/services/invisible-grills-for-windows/invisible-grills-for-windows-12.jpg', caption: 'Wide window invisible grill with aluminium track anchors', alt: 'Wide window invisible grill track' },
    ],
  },

  // General Safety Nets
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
      'High tensile strength',
      'UV-resistant and weather-proof',
      'Good ventilation and visibility',
      'Safe for children and household pets',
      'Professional installation',
    ],
    applications: [
      'Balcony safety',
      'Window protection',
      'Duct areas and building voids',
      'Pet and child fall prevention',
    ],
    photos: [
      { src: '/services/hdpe-nylon/hdpe-nylon-01.jpg', caption: 'Balcony safety net installation', alt: 'Balcony safety net installation' },
      { src: '/services/pet-safety-nets/pet-safety-nets-01.jpg', caption: 'Pet safety net installation across balcony', alt: 'Pet safety net' },
      { src: '/services/hdpe-nylon/hdpe-nylon-05.jpg', caption: 'Open duct area net coverage', alt: 'Duct area safety net' },
    ],
  },
}

export function getServiceDetailInfo(slug: string): ServiceDetailInfo | null {
  if (serviceDetailData[slug]) return serviceDetailData[slug]

  // Fallback check: find if any key is contained in or related to the slug
  if (slug.includes('pigeon')) return serviceDetailData['pigeon-nets']
  if (slug.includes('pet') || slug.includes('cat') || slug.includes('dog')) return serviceDetailData['pet-safety-nets']
  if (slug.includes('cricket')) return serviceDetailData['sports-nets']
  if (slug.includes('garware') || slug.includes('tuf')) return serviceDetailData['garware-tuf-rope-safety-nets']
  if (slug.includes('staircase')) return serviceDetailData['staircase-safety-nets']
  if (slug.includes('mosquito')) return serviceDetailData['mosquito-velcro-nets']
  if (slug.includes('hanger') || slug.includes('drying')) return serviceDetailData['cloth-hangers']
  if (slug.includes('transparent')) return serviceDetailData['transparent-copolymer-safety-nets']
  if (slug.includes('window-invisible') || slug.includes('window-grill')) return serviceDetailData['window-invisible-grills']
  if (slug.includes('invisible-grill')) return serviceDetailData['invisible-grills']
  if (slug.includes('safety-net') || slug.includes('balcony-net')) return serviceDetailData['safety-nets']

  return null
}
