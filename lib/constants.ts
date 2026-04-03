// ============================================================
// IEG Vidaka Powers — Content Constants
// All data sourced from content.pdf and presentation.pptx
// NO LOREM IPSUM — every value is real company data
// ============================================================

// ---- BRAND ----
export const BRAND = {
  name: 'IEG Vidaka Powers',
  shortName: 'IEG',
  fullName: 'IEG — Internal Energy Generate',
  tagline: 'The Power Within',
  tagline2: 'Empowering the Future',
  mission: 'Provide clean, renewable, self-sustaining energy with zero external power dependency.',
  vision: 'Making the globe more ecologically sustainable for future generations',
  email: 'connect@iegvidaka.com',
  founderEmail: 'ajaykumarchoudhary07@gmail.com',
  phone: '+91 77395 44789',
  website: 'www.iegvidaka.com',
  hq: 'Dahisar East, Mumbai, Maharashtra, India',
  factory: 'Vapi, Gujarat, India',
  cin: 'U35106MH2024PLC418794',
  incorporatedDate: 'February 8, 2024',
  patent1: { number: '391051', title: 'Internal Energy Generating System', filed: '13/12/2011', granted: '03/03/2022', patentee: 'Ajay Choudhary' },
  patent2: { number: '557845', title: 'A System for Regeneration of Internal Energy', filed: '08/06/2022', granted: '13/01/2025', patentee: 'Ajay Choudhary' },
};

// ---- NAVIGATION ----
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Technology', href: '/technology' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Investors', href: '/investors' },
  { name: 'Subsidiaries', href: '/subsidiaries' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '/contact' },
];

// ---- WHY IEG (Homepage cards) ----
export const WHY_IEG = [
  { icon: '⚡', title: 'No External Charging', desc: 'Generates electricity internally. No grid, no fuel dependency.' },
  { icon: '🌱', title: 'Zero Carbon Footprint', desc: 'Clean energy with negligible environmental impact.' },
  { icon: '∞', title: 'Unlimited Range', desc: 'For EVs: no range anxiety, no charging stops.' },
  { icon: '4.5×', title: 'More Efficient', desc: '4.5x more power output vs conventional solar systems.' },
];

// ---- STATS (Homepage counters) ----
export const STATS = [
  { value: 1993, label: 'Year Research Began', suffix: '' },
  { value: 2, label: 'Patents Granted', suffix: '' },
  { value: 5, label: 'Business Verticals', suffix: '' },
  { value: 120, label: 'Days to First Delivery', suffix: '' },
];

// ---- TIMELINE / JOURNEY ----
export const JOURNEY_MILESTONES = [
  { year: '1993', title: 'Research Begins', desc: 'Ajay Choudhary starts independent research into internal energy generation systems.' },
  { year: '2003', title: 'Breakthrough', desc: 'First self-charging generator created.' },
  { year: '2004', title: 'Presidential Recognition', desc: 'Meets Dr. APJ Abdul Kalam, presents the invention. Receives personal recognition from the President of India.' },
  { year: '2011', title: 'Patent Filed', desc: 'Working IEG prototype developed and tested. Patent application No. 391051 filed with the Indian Patent Office.' },
  { year: '2022', title: 'Patent Granted', desc: 'Indian Patent No. 391051 officially granted by the Controller General of Patents. 20-year protection secured.' },
  { year: '2024', title: 'Company Incorporated', desc: 'IEG Vidaka Powers Ltd. formally incorporated on February 8, 2024. Production facility established in Vapi, Gujarat.' },
  { year: '2025', title: '2nd Patent Granted', desc: 'Patent No. 557845 — A System for Regeneration of Internal Energy — officially granted January 13, 2025.' },
];

// ---- SOLUTION HIGHLIGHTS ----
export const SOLUTION_HIGHLIGHTS = [
  { title: 'No Fossil Fuel', desc: 'Zero reliance on petrol, diesel, gas, or any conventional fuel source.' },
  { title: 'No Grid Required', desc: 'Operates completely independent of electrical grid infrastructure.' },
  { title: 'Zero Pollution', desc: 'Negligible carbon footprint with no emissions during operation.' },
  { title: '100% Portable', desc: 'Compact, lightweight systems that work anywhere — even remote locations.' },
  { title: 'Negligible Cost', desc: 'Near-zero infrastructure and maintenance expenses after deployment.' },
  { title: 'Always Reliable', desc: '100% safe and reliable continuous power generation.' },
];

// ---- PRODUCTS ----
export const PRODUCTS_READY = [
  {
    id: 'rickshaw',
    name: 'IEG E-Rickshaw Charger',
    category: 'Electric Mobility',
    description: 'Self-powered charging system for e-rickshaws. Battery life extends 2-2.5x. No external charging required. Unlimited range for drivers.',
    specs: { batteryLife: '2-2.5x Extended', charging: 'Self-Powered', mileage: 'Unlimited' },
    badge: 'ISO 9001:2015 Certified',
    image: '/assets/pdf_page22_img1.png',
  },
  {
    id: 'scooty',
    name: 'IEG E-Scooty Charger',
    category: 'Electric Mobility',
    description: 'Self-refilling battery charge whenever parked or ignition switched off. Prevents deep discharge and overcharging. Zero electricity bill for charging.',
    specs: { batteryLife: '2x Cycles', charging: 'Auto-Refill', savings: 'Zero Electricity Bill' },
    image: '/assets/pdf_page21_img1.png',
  },
  {
    id: 'battery-charger',
    name: 'IEG Vidaka Battery Charger',
    category: 'Energy Storage',
    description: 'Models BC48 (600W) to BC360 (5000W). 96% efficiency across all models. 24 hours backup time. Portable, clean, zero carbon.',
    specs: { efficiency: '96%', backup: '24hr Backup', models: '600W to 5000W' },
    image: '/assets/pdf_page20_img1.png',
  },
  {
    id: 'chula',
    name: 'IEG Electric Chullah',
    category: 'Home Appliance',
    description: 'Self-powered electric cooking stove. Rural electrification use case. No grid required. Clean cooking for every household.',
    specs: { power: 'Self-Sustained', fuel: 'None', use: 'Cooking' },
    image: '/assets/pdf_page24_img3.png',
  },
  {
    id: 'generator',
    name: 'IEG Generator',
    category: 'Power Generation',
    description: 'Fuelless power station. Models: 600W Solar, 3KVA, 5KVA. 18 hrs/day operation. Rural, urban backup, disaster relief.',
    specs: { models: '600W – 5KVA', runtime: '18 hrs/day', noise: '68-72 DB' },
    image: '/assets/pdf_page17_img1.png',
  },
];

export const PRODUCTS_UPCOMING = [
  { name: 'IEG Vidaka 36V Cycle Charger', category: 'Mobility' },
  { name: 'IEG Vidaka E-bike Charger 96V', category: 'Mobility' },
  { name: 'IEG Vidaka Mobile Battery Charger', category: 'Consumer Electronics' },
  { name: 'IEG Vidaka Ceiling Fan', category: 'Home Appliance' },
  { name: 'IEG Vidaka Laptop Charger', category: 'Consumer Electronics' },
  { name: 'IEG Vidaka Air Conditioner', category: 'Home Appliance' },
  { name: 'IEG Four-Wheeler Charger', category: 'Mobility' },
];

// ---- COMPARISON DATA ----
export const COMPARISON_TWO_WHEELER = {
  headers: ['Feature', 'Petrol Scooty', 'Electric Scooty', 'IEG Scooty'],
  rows: [
    ['Power Source', 'Fossil Fuel', 'Electric Battery', '∞ Internal Energy'],
    ['Charging Infra', 'Petrol Pumps', 'Electric Outlets', 'No Charging Needed'],
    ['Environmental Impact', '23,000 gm CO₂/liter', 'Grid-dependent', 'Zero Emissions'],
    ['Carbon Credit', 'None', 'Partial', 'Full Eligibility'],
    ['Range', 'Limited by fuel', 'Limited by battery', '∞ Unlimited'],
    ['Charging Time', '5 min fill', '4-6 hours', 'No Charging'],
    ['Running Cost', 'High (fuel prices)', '₹5,040/year', '₹0/year'],
    ['Grid Independence', 'Petroleum supply', 'Grid availability', 'Total Independence'],
  ],
};

export const COMPARISON_RUNNING_COST = {
  twoWheeler: {
    ev: { battery: '2 KW', range: '100 km', cost: '₹90', perKm: '₹0.90' },
    ieg: { battery: '2 KW', range: '200 km', cost: '₹24', perKm: '₹0.12' },
  },
  fourWheeler: {
    ev: { battery: '50 KW', range: '250 km', cost: '₹416', perKm: '₹1.60' },
    ieg: { battery: '50 KW', range: '500 km', cost: '₹208', perKm: '₹0.42' },
  },
  rickshaw: {
    ev: { battery: '5 KW', range: '100 km', cost: '₹45', perKm: '₹0.45' },
    ieg: { battery: '5 KW', range: '200 km', cost: '₹27', perKm: '₹0.27' },
  },
};

// ---- TEAM ----
export const TEAM_MEMBERS = [
  { name: 'Ajay Choudhary', role: 'Managing Director', focus: 'Inventor & Patent Owner' },
  { name: 'Mansukh Vaghasiya', role: 'Chairman', focus: 'Corporate Governance & Strategy' },
  { name: 'Rajesh Vaghasiya', role: 'Director Finance', focus: 'Capital Structure & Financial Control' },
  { name: 'Nitin Vyas', role: 'Director Production', focus: 'Mechanical Engineering' },
  { name: 'Vijay Gupta', role: 'Director Production', focus: 'Electronics' },
  { name: 'Vinay Salodkar', role: 'Director Marketing', focus: 'Technical' },
  { name: 'Rajeshwar Nagle', role: 'Director IT', focus: 'Technology Infrastructure' },
  { name: 'Neena Nagle', role: 'Director Operations', focus: 'Operations Management' },
  { name: 'Nilesh Vyas', role: 'Director Marketing', focus: 'Market Development' },
  { name: 'Manshuk Radadiya', role: 'Director Marketing', focus: 'Power Sector' },
  { name: 'Devashish Saraf', role: 'Director Business Development', focus: 'Strategic Partnerships' },
  { name: 'Ambarish Salodkar', role: 'Data Analyst', focus: 'Business Intelligence' },
];

// ---- ROADMAP ----
export const ROADMAP_STEPS = [
  { day: 'Day 0–30', title: 'MoU Signing & DPR', desc: 'Formal MoU signed. Detailed Project Report delivered within 30 days.' },
  { day: 'Day 30–60', title: 'SPV Formation', desc: 'Private Limited subsidiary incorporated. Corporate office secured in Mumbai CBD.' },
  { day: 'Within 120 days', title: 'Product Delivery', desc: 'Products delivered within 120 days of order confirmation. Samples deployed for testing.' },
  { day: 'Within 180 days', title: 'Manufacturing Live', desc: 'Large-scale manufacturing facility operational in Vapi, Gujarat.' },
  { day: '12 months', title: 'Full Commissioning', desc: 'Complete commissioning within 12 months of 100% funding. Full-scale operations begin.' },
];

// ---- SUBSIDIARY MODEL ----
export const SUBSIDIARIES = [
  {
    number: '01',
    name: 'Electric Vehicles',
    segment: 'EV Charging Solutions',
    products: ['2-Wheeler Chargers', '3-Wheeler Chargers', '4-Wheeler Chargers', 'Heavy Commercial EV Chargers'],
    desc: 'Self-charging, grid-independent, fast-charging, high-efficiency modules for all electric vehicle segments.',
  },
  {
    number: '02',
    name: 'Home Appliances',
    segment: 'Domestic Power',
    products: ['IEG Electric Chullah', 'Portable IEG Generator (up to 5kW)'],
    desc: 'Rural electrification, urban backup, and disaster relief solutions. Clean cooking and reliable home power.',
  },
  {
    number: '03',
    name: 'Consumer Electronics',
    segment: 'Personal Devices',
    products: ['Mobile Chargers', 'Laptop Chargers', 'IEG-Powered Air Conditioners', 'Ceiling Fans'],
    desc: 'Portable, eco-friendly, self-powered consumer electronics that eliminate electricity bills.',
  },
  {
    number: '04',
    name: 'Commercial Power',
    segment: 'Industrial Solutions',
    products: ['Industrial Electric Generator Units', 'Utility-Scale Solar Energy Plants'],
    desc: 'Large-scale power generation for commercial and industrial applications.',
  },
  {
    number: '05',
    name: 'Motor Efficiency',
    segment: 'Retrofit Technology',
    products: ['Motor Retrofit Technology', 'Pumps', 'HVAC Systems', 'Industrial Motors'],
    desc: 'Energy savings and reduced operational costs through IEG motor retrofit technology.',
  },
];

export const SUBSIDIARY_STRUCTURE = {
  parentShare: 55,
  investorShare: 45,
  loanPercent: 20,
  investorFund: 80,
};

// ---- CERTIFICATES ----
export const CERTIFICATES = [
  {
    id: 'patent-1',
    title: 'Patent Certificate — No. 391051',
    subtitle: 'Internal Energy Generating System',
    details: 'Patentee: Ajay Choudhary | Date of Grant: 03/03/2022 | Filed: 13/12/2011',
    authority: 'Intellectual Property India — Government of India',
    image: '/assets/pdf_page10_img1.png',
  },
  {
    id: 'patent-2',
    title: 'Patent Certificate — No. 557845',
    subtitle: 'A System for Regeneration of Internal Energy',
    details: 'Patentee: Ajay Choudhary | Date of Grant: 13/01/2025 | Filed: 08/06/2022',
    authority: 'Intellectual Property India — Government of India',
    image: '/assets/pdf_page10_img1.png',
  },
  {
    id: 'iim-nagpur',
    title: 'Appreciation Letter — IIM Nagpur',
    subtitle: 'Director\'s Appreciation',
    details: 'Ref: IIMN/DIR SECTT/06/2024 | Date: 15-02-2024',
    authority: 'Dr. Bhimaraya Metri, Director, IIM Nagpur',
    quote: 'We truly appreciate the technology and wish you the best of luck in taking it forward to the nation.',
    image: '/assets/pdf_page28_img1.png',
  },
  {
    id: 'kalam',
    title: 'Presidential Secretariat Letter',
    subtitle: 'Dr. APJ Abdul Kalam Recognition',
    details: 'Communication from President\'s office, 2004-2005',
    authority: 'Office of the President of India',
    image: '/assets/pdf_page25_img1.png',
  },
  {
    id: 'incorporation',
    title: 'Certificate of Incorporation',
    subtitle: 'IEG Vidaka Powers Limited',
    details: 'CIN: U35106MH2024PLC418794 | Date: February 8, 2024',
    authority: 'Ministry of Corporate Affairs, Government of India',
    image: '/assets/pdf_page9_img1.png',
  },
];

// ---- RECOGNITIONS (Homepage) ----
export const RECOGNITIONS = [
  {
    name: 'Dr. APJ Abdul Kalam',
    title: 'Former President of India',
    year: '2004-05',
    quote: 'Personal recognition of the IEG technology during a presentation at the Presidential Secretariat.',
  },
  {
    name: 'Dr. Bhimaraya Metri',
    title: 'Director, IIM Nagpur',
    year: '2024',
    quote: 'We truly appreciate the technology and wish you the best of luck in taking it forward to the nation.',
  },
];

// ---- VALUE PROPOSITIONS ----
export const VALUE_PROPS = [
  { icon: '🌿', title: 'No Pollution', desc: 'Zero emissions, zero carbon footprint' },
  { icon: '🌍', title: 'Low Carbon', desc: 'Promotes green revolution with carbon credits' },
  { icon: '🛡️', title: 'No Harm to Nature', desc: 'Safe for environment and mother nature' },
  { icon: '💰', title: 'Very Low Cost', desc: 'Negligible infrastructure and maintenance' },
];

// ---- MARKET DATA ----
export const MARKET = {
  size2024: 'USD 34.80 Billion',
  size2029: 'USD 110.74 Billion',
  cagr: '26.05%',
  source: 'MORDOR Intelligence',
  market: 'India Electric Vehicle Market',
};

// ---- TECH SPECS ----
export const GENERATOR_SPECS = {
  models: [
    {
      name: 'IEG 1000',
      rating: '1 KVA / 0.9 KWe',
      harmonics: '4-5%',
      battery: '12V-60V / 80-100A × 4 Lead Acid',
      output1Phase: '2.3A / 220-240V',
      output3Phase: 'N/A',
      noise: '68-72 DB',
      runtime: '18 hrs/day',
    },
    {
      name: 'IEG 2000',
      rating: '2 KVA / 1.8 KWe',
      harmonics: '4-5%',
      battery: '12V-60V / 80-100A × 4 Lead Acid',
      output1Phase: '4.6A / 220-240V',
      output3Phase: '3.0A / 415V',
      noise: '68-72 DB',
      runtime: '18 hrs/day',
    },
  ],
};

// ---- MARQUEE TICKER ----
export const MARQUEE_TEXT = 'PATENT NO. 391051  ·  ZERO CARBON FOOTPRINT  ·  GRID INDEPENDENT  ·  PATENT NO. 557845  ·  RECOGNIZED BY DR. APJ ABDUL KALAM  ·  IIM NAGPUR APPRECIATED  ·  ';
