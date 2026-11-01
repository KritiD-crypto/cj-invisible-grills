export type ServiceCategory = {
  title: string
  slug: string
  description: string
  detail: string
  image: string
  subservices: { title: string; slug: string }[]
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const serviceSource = [
  // 1. Priority 1: Invisible Grills (9 services in exact order)
  {
    title: 'Invisible Grills for Balcony',
    description: 'High-tensile 316 marine-grade invisible grills for balconies in Bangalore and Mysore, delivering panoramic open views with certified fall safety.',
    detail: 'Invisible grills for balconies use high-tensile 316 stainless steel vertical cables with transparent nylon protective sheathing. Designed to keep balcony vistas completely open while providing certified fall protection for high-rise apartments, villas, and modern residential homes.',
    image: '/services/invisible-grills/invisible-grills-01.jpg',
    subservices: ['Invisible Grills for Balcony', 'Invisible Grills', 'Balcony Invisible Grills', 'Apartment Balcony Grills', 'High Rise Balcony Invisible Grills', 'Invisible Grills for Child Safety', 'Invisible Grills for Pets']
  },
  {
    title: 'Invisible Grills for Glass Balcony',
    description: 'Specialised invisible grills for glass balconies in Bangalore, engineered seamlessly with glass railings and modern architectural facades.',
    detail: 'Glass balconies require specialised anchor profiles and mechanical tensioning systems that integrate seamlessly with toughened glass panels. Our glass balcony invisible grills provide secondary child and pet protection while retaining the modern architectural look of your building.',
    image: '/services/invisible-grills/invisible-grills-03.jpg',
    subservices: ['Invisible Grills for Glass Balcony', 'Glass Balcony Safety Grills', 'Frameless Glass Balcony Grills', 'Toughened Glass Railing Grills', 'Modern Glass Balcony Protection']
  },
  {
    title: 'Invisible Grills for Plain Balcony',
    description: 'Full-height and parapet-mounted invisible grill solutions designed for conventional, open-edge plain balconies in Bangalore and Mysore.',
    detail: 'Plain balconies with standard masonry parapets or metal railings can be secured floor-to-ceiling with slim, high-tensile cables. Our invisible grills for plain balconies ensure maximum safety without cage-like enclosures or blocked daylight.',
    image: '/services/invisible-grills/invisible-grills-04.jpg',
    subservices: ['Invisible Grills for Plain Balcony', 'Plain Balcony Safety Grills', 'Parapet Balcony Grills', 'Full Height Balcony Invisible Grills', 'Open Edge Balcony Protection']
  },
  {
    title: 'Invisible Grills for Windows',
    description: 'Modern invisible grills for windows in Bangalore, custom-fitted into sliding and openable window frames without blocking air or daylight.',
    detail: 'Invisible grills for windows provide reliable fall prevention and child safety for sliding and openable window frames without blocking fresh air, daylight, or outdoor vistas. Fitted with heavy-gauge slim aluminium track channels and rust-free 316 stainless steel cable cores.',
    image: '/services/invisible-grills-for-windows/invisible-grills-for-windows-01.jpg',
    subservices: ['Invisible Grills for Windows', 'Window Invisible Grills', 'Sliding Window Invisible Grills', 'Bedroom Window Safety Grills', 'Kitchen Window Grills', 'Casement Window Grills']
  },
  {
    title: 'Invisible Grills for Utilities',
    description: 'Protective safety cable barriers for utility balconies, washing areas and kitchen service yards in Bangalore apartments.',
    detail: 'Utility balconies and washing areas often need secure enclosures against birds and accidental falls while requiring continuous ventilation for appliances and drying clothes. Invisible grills for utilities deliver maximum airflow, safety, and hygiene.',
    image: '/services/invisible-grills/invisible-grills-08.jpg',
    subservices: ['Invisible Grills for Utilities', 'Utility Balcony Invisible Grills', 'Service Yard Invisible Grills', 'Kitchen Utility Safety Grills', 'Wash Area Cable Barriers']
  },
  {
    title: 'Invisible Grills for Staircases',
    description: 'Architectural vertical cable barriers for open staircases, banisters, duplex voids and mezzanine railings in Bangalore homes.',
    detail: 'Open staircases and multi-level floor voids present safety hazards for toddlers and pets. Our invisible grills for staircases provide elegant, architectural vertical cable barriers that secure banisters and voids while enhancing contemporary interior aesthetics.',
    image: '/services/invisible-grills/invisible-grills-11.jpg',
    subservices: ['Invisible Grills for Staircases', 'Staircase Invisible Grills', 'Duplex Void Safety Grills', 'Mezzanine Invisible Grills', 'Indoor Railing Safety Grills']
  },
  {
    title: 'Invisible Grills for Terraces',
    description: 'High-tensile perimeter safety cables for residential terraces, penthouses and rooftop leisure areas across Bangalore and Mysore.',
    detail: 'Terraces and rooftop sit-outs require sturdy, weather-resistant perimeter safety that withstands strong wind loads. Our invisible grills for terraces use marine-grade 316 stainless steel to secure terrace parapets without obstructing panoramic skyline views.',
    image: '/services/invisible-grills/invisible-grills-07.jpg',
    subservices: ['Invisible Grills for Terraces', 'Terrace Invisible Grills', 'Rooftop Safety Grills', 'Penthouse Terrace Grills', 'Open Terrace Boundary Grills']
  },
  {
    title: 'Invisible Grills for Compound Walls',
    description: 'Sleek, high-security perimeter cable barriers for compound walls, villas, and gated residential communities in Bangalore.',
    detail: 'Upgrade your compound walls with sleek vertical cable barriers that deter intrusion while preserving open roadside aesthetics. Invisible grills for compound walls provide high tensile strength and rust resistance across extensive outdoor perimeters.',
    image: '/services/invisible-grills/invisible-grills-09.jpg',
    subservices: ['Invisible Grills for Compound Walls', 'Compound Wall Invisible Grills', 'Villa Boundary Grills', 'Perimeter Safety Grills', 'Compound Wall Safety Cables']
  },
  {
    title: 'Invisible Grills for Open Areas',
    description: 'Custom-engineered cable installations for open spaces, central atriums, courtyards and large architectural spans in Bangalore.',
    detail: 'Large architectural openings, building courtyards, and central atrium spaces require tailored safety engineering. Invisible grills for open areas deliver heavy-duty structural anchoring and clean cable geometry across expansive vertical and horizontal spans.',
    image: '/services/invisible-grills/invisible-grills-12.jpg',
    subservices: ['Invisible Grills for Open Areas', 'Open Space Invisible Grills', 'Atrium Safety Grills', 'Courtyard Safety Grills', 'Architectural Cable Systems']
  },

  // 2. Priority 2: Cloth Hangers (3 services in exact order)
  {
    title: 'Wall-Mounted Cloth Hangers',
    description: 'Heavy-duty wall-mounted cloth hangers and foldable clothes drying racks for balconies and utility walls in Bangalore.',
    detail: 'Wall-mounted cloth hangers fold flat against the wall when not in use, freeing up valuable floor space in compact balconies and utility rooms. Manufactured from rust-proof stainless steel for long-lasting daily household laundry needs.',
    image: '/services/cloth-hangers/cloth-hangers-02.jpg',
    subservices: ['Wall-Mounted Cloth Hangers', 'Cloth Hangers', 'Wall Mounted Clothes Drying Racks', 'Foldable Clothes Hangers', 'Stainless Steel Wall Hangers', 'Balcony Wall Drying Racks']
  },
  {
    title: 'Ceiling-Mounted Cloth Hangers',
    description: 'Smooth pulley ceiling-mounted cloth hangers with independent rod lowering mechanisms for effortless drying in Bangalore.',
    detail: 'Ceiling-mounted cloth hangers utilise smooth nylon pulleys and high-tensile cords allowing each stainless steel drying rod to be lowered independently for effortless clothes hanging, then hoisted to the ceiling away from walking space.',
    image: '/services/cloth-hangers/cloth-hangers-01.jpg',
    subservices: ['Ceiling-Mounted Cloth Hangers', 'Ceiling Cloth Hangers', 'Pulley Cloth Hangers', 'Balcony Ceiling Hangers', 'Individual Pipe Hangers', 'Clothes Drying Hangers']
  },
  {
    title: 'Extra-Mount Cloth Hangers',
    description: 'High-capacity extra-mount cloth hangers engineered with heavy-duty brackets and reinforced stainless steel pipes for Bangalore homes.',
    detail: 'Extra-mount cloth hangers are engineered with heavy-duty structural mounting brackets and reinforced stainless steel pipes, ideal for large families, bed linens, and heavy daily laundry loads across spacious balconies and utility verandas.',
    image: '/services/cloth-hangers/cloth-hangers-06.jpg',
    subservices: ['Extra-Mount Cloth Hangers', 'Heavy Duty Cloth Hangers', 'Reinforced Clothes Hangers', 'Large Capacity Drying Racks', 'Wide Span Cloth Hangers']
  },

  // 3. Priority 3: Nets and Safety Solutions (5 services in exact order)
  {
    title: 'Pigeon Safety Nets',
    description: 'High-durability HDPE pigeon safety nets in Bangalore, preventing bird roosting and nesting across balconies, windows and ducts.',
    detail: 'Engineered with UV-stabilised HDPE nylon and a 30 mm mesh gap, our pigeon safety nets prevent pigeons and birds from entering balconies, window ledges, and open duct areas while maintaining 100% air circulation and daylight.',
    image: '/services/hdpe-nylon/hdpe-nylon-01.jpg',
    subservices: ['Pigeon Safety Nets', 'Pigeon Nets', 'Anti Pigeon Nets', 'Balcony Pigeon Nets', 'Window Pigeon Nets', 'Duct Area Pigeon Nets']
  },
  {
    title: 'Cricket Practice Nets',
    description: 'Heavy-duty cricket nets installation and sports practice enclosures for terraces, residential grounds and academies in Bangalore.',
    detail: 'Custom-built cricket practice netting enclosures constructed with high-tensile 2.5 mm braided HDPE mesh and reinforced border ropes. Built to withstand high-velocity ball impacts for terrace practice pitches and coaching academies.',
    image: '/services/cricket-sports-net/cricket-sports-net-01.jpg',
    subservices: ['Cricket Practice Nets', 'Cricket Nets', 'Terrace Cricket Nets', 'Cricket Enclosure Nets', 'Box Cricket Nets']
  },
  {
    title: 'Child Safety Nets',
    description: 'Certified fall-prevention child safety nets in Bangalore for high-rise apartment balconies, staircases and window openings.',
    detail: 'Child safety nets create a dependable, load-tested barrier across balcony railings, open stairwells, and wide windows. Crafted with UV-resistant braided polymers and heavy-duty anchor hooks to ensure complete peace of mind for families with young children.',
    image: '/services/tuf-ropes-garware/tuf-ropes-garware-01.jpg',
    subservices: ['Child Safety Nets', 'Kids Safety Nets', 'Balcony Child Safety Nets', 'Staircase Child Barriers', 'High Rise Child Safety']
  },
  {
    title: 'Pet Safety Nets',
    description: 'Bite-resistant pet safety nets in Bangalore, protecting cats, dogs and small pets from high-rise balcony falls.',
    detail: 'Designed specifically for households with cats and dogs, our pet safety nets feature bite-resistant braided twine and tight 25 mm/30 mm mesh gaps. Prevents curious pets from slipping through railings without obstructing ventilation or views.',
    image: '/services/pet-safety-nets/pet-safety-nets-01.jpg',
    subservices: ['Pet Safety Nets', 'Cat Safety Nets', 'Dog Safety Nets', 'Kitten Protection Nets', 'Balcony Pet Barriers']
  },
  {
    title: 'Coconut Safety Nets',
    description: 'Heavy-duty coconut safety nets in Bangalore, catching falling coconuts and protecting vehicles, parking spaces and pedestrians.',
    detail: 'Coconut safety nets provide critical overhead protection in residential societies, parking lots, walkways, and garden areas surrounded by coconut palms. Manufactured from heavy-gauge shock-absorbing netting that safely cushions falling coconuts.',
    image: '/services/tuf-ropes-garware/tuf-ropes-garware-04.jpg',
    subservices: ['Coconut Safety Nets', 'Coconut Fall Protection Nets', 'Tree Fall Safety Nets', 'Overhead Protection Nets', 'Parking Lot Coconut Nets']
  },

  // 4. Other Available Net and Safety Solutions (Retained existing services)
  {
    title: 'Balcony Nets',
    description: 'Reliable balcony safety nets in Bangalore, custom-fitted around your balcony layout for everyday home protection.',
    detail: 'Balcony net solutions are planned around the balcony shape, floor height, access and the needs of the household. A site discussion helps identify coverage and fixing requirements before work is confirmed.',
    image: '/services/hdpe-nylon/hdpe-nylon-03.jpg',
    subservices: ['Balcony Nets', 'Balcony Protection Nets', 'Balcony Children Safety Nets', 'Apartment Balcony Nets', 'High Rise Balcony Nets']
  },
  {
    title: 'Transparent Copolymer Safety Nets',
    description: 'Premium transparent safety net designed for modern homes with crystal-clear visibility and 1 mm copolymer mesh.',
    detail: 'Transparent copolymer safety nets offer an unobtrusive, high-clarity safety barrier for balconies, windows, and open residential spaces. With 1 mm thickness and 30 mm mesh gap, they combine discreet visual elegance with dependable safety.',
    image: '/services/transparent-copolymer/transparent-copolymer-01.jpg',
    subservices: ['Transparent Copolymer Safety Nets', 'Balcony Transparent Nets', 'Window Transparent Nets', 'Pigeon Transparent Nets', 'Pet Transparent Nets']
  },
  {
    title: 'Garware TUF Rope Safety Nets',
    description: 'Heavy-duty 2.5 mm braided HDPE safety nets by Garware with 8–10 years expected lifespan and UV stabilisation.',
    detail: 'Engineered with authentic GARWARE HDPE braided netting and 40 mm mesh gap, TUF rope safety nets provide heavy-duty durability against UV radiation, weather, and physical pressure across balconies, open ducts, and child safety areas.',
    image: '/services/tuf-ropes-garware/tuf-ropes-garware-03.jpg',
    subservices: ['Garware TUF Rope Safety Nets', 'Garware Balcony Nets', 'Garware Child Safety Nets', 'Garware Pigeon Nets', 'Garware Monkey Protection Nets']
  },
  {
    title: 'Sports Nets',
    description: 'Tailored netting for multi-sport practice enclosures, football goals, golf cages and academy grounds.',
    detail: 'Sports net requirements vary with the activity, available dimensions and intended use. Share the space and sport with us so we can discuss a suitable net layout and installation approach.',
    image: '/services/cricket-sports-net/cricket-sports-net-02.jpg',
    subservices: ['Sports Nets', 'Football Nets', 'Football Goal Nets', 'Golf Nets', 'Volleyball Nets']
  },
  {
    title: 'Staircase Safety Nets',
    description: 'Strong 2.5 mm braided safety nets custom-fitted for open staircases, railings and multi-level floor voids.',
    detail: 'Staircase and railing safety netting creates a secure barrier along open stairwells, banisters, and mezzanine voids. Custom-fitted with professional anchor points to protect children and pets without compromising architectural aesthetics.',
    image: '/services/staircase-safety-nets/staircase-safety-nets-01.jpg',
    subservices: ['Staircase Safety Nets', 'Open Staircase Nets', 'Railing Safety Nets', 'Child Staircase Barriers', 'Mezzanine Safety Nets']
  },
  {
    title: 'Mosquito Velcro Nets',
    description: 'Removable mosquito protection solution designed for windows with self-adhesive Velcro and fine insect mesh.',
    detail: 'Mosquito Velcro Net is a removable insect protection solution designed for windows. It uses a high-grade self-adhesive Velcro strip to attach fine woven mesh around the window frame without drilling or complicated installation, allowing fresh air while keeping insects out.',
    image: '/services/mosquito/mosquito-01.jpg',
    subservices: ['Mosquito Velcro Nets', 'Velcro Window Nets', 'Kitchen Window Mosquito Nets', 'Removable Mesh Screens']
  },
  {
    title: 'Bird Nets',
    description: 'A considered way to limit bird and pigeon access to selected balconies, windows, and building duct shafts.',
    detail: 'Bird netting can be fitted across selected openings to discourage birds from entering. We look at the access route, building surface and practical maintenance needs when discussing a suitable layout.',
    image: '/services/hdpe-nylon/hdpe-nylon-04.jpg',
    subservices: ['Bird Nets', 'Anti Bird Nets', 'Bird Protection Nets', 'Balcony Bird Nets', 'Window Bird Nets', 'Duct Area Bird Nets']
  },
  {
    title: 'Bird Spikes',
    description: 'Discreet stainless steel deterrent strips for ledges, AC units, and other bird landing surfaces.',
    detail: 'Bird spikes can discourage perching on suitable ledges when fitted to a clean, compatible surface. We review the location and access conditions and discuss maintenance before recommending placement.',
    image: '/images/grill-detail.png',
    subservices: ['Bird Spikes', 'Pigeon Spikes', 'Anti Bird Spikes', 'Anti Pigeon Spikes', 'Bird Control Spikes', 'Pigeon Control Spikes', 'Stainless Steel Bird Spikes']
  },
  {
    title: 'Safety Nets',
    description: 'Flexible netting options for balconies, windows and other open residential spaces across Bangalore.',
    detail: 'Safety netting can help create a defined barrier across an open edge or opening. We assess the location, fixing points and intended use with you, then explain suitable material and installation options for the property.',
    image: '/services/hdpe-nylon/hdpe-nylon-05.jpg',
    subservices: ['Safety Nets', 'General Safety Nets', 'Multi Purpose Safety Nets', 'Fall Protection Nets']
  },
].map((service) => ({
  ...service,
  slug: slugify(service.title),
  subservices: service.subservices.map((title) => ({ title, slug: slugify(title) })),
}))

export const services: ServiceCategory[] = serviceSource

export const serviceRoutes = [
  ...new Set([
    ...services.flatMap((category) => [category.slug, ...category.subservices.map((item) => item.slug)]),
    // Guarantee legacy URLs resolve seamlessly
    'invisible-grills',
    'cloth-hangers',
    'pigeon-nets',
  ]),
]

export function findService(slug: string) {
  for (const category of services) {
    if (category.slug === slug) return { ...category, pageTitle: category.title, isCategory: true }
    const subservice = category.subservices.find((item) => item.slug === slug)
    if (subservice) return { ...category, pageTitle: subservice.title, isCategory: false }
  }

  // Graceful fallback for legacy URLs
  if (slug === 'invisible-grills') {
    const primary = services[0]
    return { ...primary, pageTitle: 'Invisible Grills', isCategory: true }
  }
  if (slug === 'cloth-hangers') {
    const hanger = services.find((s) => s.slug === 'wall-mounted-cloth-hangers') || services[9]
    return { ...hanger, pageTitle: 'Cloth Hangers', isCategory: true }
  }
  if (slug === 'pigeon-nets') {
    const pigeon = services.find((s) => s.slug === 'pigeon-safety-nets') || services[12]
    return { ...pigeon, pageTitle: 'Pigeon Nets', isCategory: true }
  }

  return null
}

export const chennaiAreas = [
  'Kellambakkam', 'Navalur', 'Avadi', 'Mylapore', 'Thoraipakkam', 'Ennore',
  'Rajakilpakkam', 'Madipakkam', 'Koyambedu', 'Vadapalani', 'K.K. Nagar',
  'Valasaravakkam', 'Guindy', 'Poonamallee', 'Padur', 'Thiruverkadu',
  'Madhavaram', 'Tiruvottiyur', 'Kovilambakkam', 'Ambattur', 'Kadirvedu',
  'Mathur', 'Manali New Town', 'Vallur', 'Red Hills', 'Nandambakkam',
  'Thiruvanmiyur', 'George Town', 'Anna Nagar', 'Velachery', 'Pallikaranai',
  'T. Nagar', 'OMR Road'
]

export const bengaluruAreas = [
  'Whitefield', 'Electronic City Phase 1', 'Indiranagar', 'Hebbal', 'Jayanagar',
  'Bannerghatta Road', 'Malleshwaram', 'Mahadevapura', 'Marathahalli', 'HSR Layout',
  'Sarjapur Road', 'Yelahanka', 'RR Nagar', 'BTM Layout', 'Basavanagudi', 'Domlur',
  'Electronic City', 'Koramangala', 'Bellandur', 'JP Nagar', 'Rajarajeshwari Nagar',
  'Rajajinagar', 'KR Puram', 'Horamavu', 'Yeswanthapura', 'R.T. Nagar', 'M.G. Road',
  'Mallathahalli', 'Nagarbhavi', 'Nagavara', 'Thanisandra', 'Varthur', 'Gunjur',
  'Kengeri', 'Kanakapura', 'Vidyaranyapura', 'Sakar Nagar', 'Jakkur'
]

export const mysuruAreas = [
  'Vijayanagar', 'Kuvempunagar', 'Saraswathipuram', 'Siddarthanagar', 'Metagalli',
  'Hootagalli', 'Chamundi Hill Area', 'Chamrajpura', 'Gokulam', 'Hebbal', 'Nazarbad',
  'Lakshmipuram', 'Bannimantap', 'Vontikoppal', 'Nanjangud Road', 'Brindavan Extension',
  'Jayalakshmipuram', 'Bogadi', 'Siddhartha Layout', 'Yadavagiri', 'KC Layout',
  'Rajarajeshwari Nagar Mysuru', 'JP Nagar Mysuru', 'Dattagalli'
]

export const mysoreAreas = mysuruAreas

export const articles = [
  { slug: 'invisible-grills-or-conventional-grills', title: 'Invisible grills or conventional grills: what should you consider?', category: 'Choosing a solution', excerpt: 'Compare visibility, opening layout, upkeep and the practical questions to ask before choosing a balcony boundary.', image: '/images/grill-detail.png', read: 'A practical guide' },
  { slug: 'balcony-safety-for-children-and-pets', title: 'Thinking through balcony safety for children and pets', category: 'Home safety', excerpt: 'A room-by-room way to assess openings, supervision and barriers for the way your household uses a balcony.', image: '/images/hero-balcony.png', read: 'A practical guide' },
  { slug: 'how-to-select-balcony-safety-nets', title: 'How to select a balcony safety net', category: 'Choosing a solution', excerpt: 'The questions that help match a netting solution to your balcony, fixing surfaces and intended use.', image: '/images/safety-net-study.png', read: 'A practical guide' },
  { slug: 'preventing-pigeon-entry-at-home', title: 'Reducing pigeon entry around balconies and windows', category: 'Bird management', excerpt: 'Identify common access points and compare netting and ledge deterrents for your building.', image: '/images/grill-detail.png', read: 'A practical guide' },
  { slug: 'maintaining-safety-installations', title: 'Simple checks for maintaining safety installations', category: 'Care and maintenance', excerpt: 'A sensible visual-check routine and signs that it is time to ask for a professional assessment.', image: '/images/safety-net-study.png', read: 'A practical guide' },
]

export const articleBody: Record<string, { intro: string; sections: { heading: string; text: string }[]; service: string }> = {
  'invisible-grills-or-conventional-grills': { intro: 'Choosing a balcony boundary is a decision about the opening, the building and how you want the space to feel. Invisible grills and conventional grills each have trade-offs; the right fit depends on the actual site.', sections: [{ heading: 'Start with the opening', text: 'Look at the width and height, the surrounding concrete or masonry, existing railings, access for installation and any building guidelines. A site assessment can identify details that a product photo cannot show.' }, { heading: 'Think about appearance and upkeep', text: 'Slim cables can preserve a more open view, while conventional bars are a familiar and more visible option. Ask how each option is fixed, inspected and maintained for your particular building.' }, { heading: 'Make a site-specific choice', text: 'Discuss the intended use, household needs and constraints with an installer. No single configuration is suitable for every balcony, and an installation should not replace appropriate supervision or building guidance.' }], service: 'invisible-grills-for-balcony' },
  'balcony-safety-for-children-and-pets': { intro: 'Balcony safety is layered: the physical opening, access to the balcony and everyday supervision all matter. A barrier may be one part of a household plan, not a substitute for active adult supervision.', sections: [{ heading: 'Review access and routines', text: 'Notice when balcony doors are open, what furniture can be moved near an edge and whether a child or pet can access the area unsupervised.' }, { heading: 'Assess the barrier and fixing points', text: 'Measure the opening and check the surfaces around it. Ask an installer to explain the proposed coverage, fixing approach and how the installation should be checked over time.' }, { heading: 'Keep supervision central', text: 'Use child-safe door habits and keep climbable objects away from edges. Select a solution based on an in-person assessment and follow the building management requirements.' }], service: 'child-safety-nets' },
  'how-to-select-balcony-safety-nets': { intro: 'A net is only as useful as its fit, fixing points and suitability for the opening. Consider the context of the balcony before comparing materials or layouts.', sections: [{ heading: 'Map the area to cover', text: 'Note the balcony shape, open sides, nearby ducts and any access that should remain available for cleaning or maintenance.' }, { heading: 'Ask about material and installation', text: 'Ask what material is proposed, how it will be attached to your surfaces and what visual checks are appropriate. Requirements can differ between properties.' }, { heading: 'Confirm ongoing access', text: 'Discuss how the net can be inspected and whether it affects maintenance access. For high-rise properties, coordinate with building management where required.' }], service: 'balcony-nets' },
  'preventing-pigeon-entry-at-home': { intro: 'Bird access often comes from a specific opening or sheltered ledge. Identifying the route first makes it easier to compare a suitable deterrent with a broad, unnecessary installation.', sections: [{ heading: 'Find the entry and landing points', text: 'Check balconies, window ledges, ducts and service openings. Note where birds enter, perch or nest, and avoid disturbing active nests without checking applicable local guidance.' }, { heading: 'Compare suitable approaches', text: 'Netting can cover an opening, while spikes may be considered for compatible ledges. The shape, surface and maintenance access determine whether either option is appropriate.' }, { heading: 'Plan for cleaning and inspection', text: 'Ask how the area will be accessed after installation and what routine checks are needed. Keep the building rules and humane treatment in mind.' }], service: 'pigeon-safety-nets' },
  'maintaining-safety-installations': { intro: 'Regular visual checks can help identify wear or damage early. Follow the installer’s care guidance and ask for a professional assessment if anything looks loose or compromised.', sections: [{ heading: 'Look without putting yourself at risk', text: 'From a safe position, look for visible slack, fraying, corrosion, loose fixings or impact damage. Do not lean over an edge or climb to reach a component.' }, { heading: 'Keep the installation clear', text: 'Avoid attaching extra loads or objects unless the installer has confirmed they are suitable. Use gentle cleaning practices appropriate to the material.' }, { heading: 'Ask when something changes', text: 'After severe weather, building work or a visible impact, contact a qualified installer to assess the installation. Do not assume that a visual check proves performance.' }], service: 'invisible-grills-for-balcony' },
}

export const faqGroups = [
  { title: 'Choosing a solution', questions: [{ q: 'Which solution is right for my balcony?', a: 'It depends on the opening, fixing surfaces, building requirements and how the space is used. Share a few details and we can help arrange a case-specific discussion.' }, { q: 'Do invisible grills work for windows and villas?', a: 'Invisible grill systems can be considered for selected windows, apartments and villas. Suitability depends on site conditions and the proposed fixing points.' }, { q: 'Can I request a solution for pets?', a: 'Yes. Tell us about your pet and the opening you want to address. We can discuss available options, while noting that no barrier should replace supervision.' }] },
  { title: 'Installation and care', questions: [{ q: 'What happens before installation?', a: 'We first understand the property, location and requirement. Site details and measurements help determine the appropriate scope and estimate.' }, { q: 'How long does installation take?', a: 'Timing depends on the scope, access and site conditions. We confirm the expected schedule after understanding the work rather than quoting a universal time.' }, { q: 'How should I maintain an installation?', a: 'Follow the care guidance shared for the material and check visually from a safe position for looseness or visible damage. Contact us if something appears compromised.' }] },
  { title: 'Service and estimates', questions: [{ q: 'Do you serve my locality?', a: 'We coordinate enquiries across Chennai, Bengaluru and Mysore, including the localities listed on our Areas We Serve page. Coverage and scheduling are confirmed for each enquiry.' }, { q: 'How is an estimate prepared?', a: 'An estimate depends on the opening or area, site conditions, selected solution and installation scope. Share photos or request a site discussion for a relevant estimate.' }, { q: 'How do I contact the team?', a: 'Call +91 9886577746 or use WhatsApp. You can also email cjgrillsind@gmail.com or prepare an enquiry on the Contact page.' }] },
]
