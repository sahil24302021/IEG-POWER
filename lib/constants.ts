// ============================================================
// IEG Vidaka Powers — Content Constants
// All data sourced from content.pdf and presentation.pptx
// ============================================================

// ---- BRAND ----
export const BRAND = {
  name: 'IEG Vidaka Powers',
  shortName: 'IEG',
  tagline: 'The Power Within',
  vision: 'Making the globe more ecologically sustainable for future generations',
  email: 'connect@iegvidaka.com',
  phone: '+91 77395 44789',
  website: 'www.iegvidaka.com',
  hq: 'Dahisar East, Mumbai, Maharashtra, India',
  factory: 'Vapi, Gujarat, India',
  patent: 'Patent No. 391051',
  patent2: 'Regeneration of Internal Energy — Granted 2025',
};

// ---- NAVIGATION ----
export const NAV_LINKS = [
  { name: 'Technology', href: '/technology' },
  { name: 'Products', href: '/products' },
  { name: 'Company', href: '/company' },
  { name: 'Investors', href: '/investor' },
  { name: 'Contact', href: '/contact' },
];

// ---- TIMELINE / JOURNEY ----
export const JOURNEY_MILESTONES = [
  { year: '1993', title: 'Research Begins', desc: 'Ajay Choudhary starts research on Internal Energy Generation.' },
  { year: '2003', title: 'Breakthrough', desc: 'First self-charging generator created. Presented to Dr. Abdul Kalam.' },
  { year: '2011', title: 'Prototype Built', desc: 'Working IEG prototype developed and tested successfully.' },
  { year: '2022', title: 'Patent Granted', desc: 'Indian Patent No. 391051 officially granted (effective from 2011).' },
  { year: '2024', title: 'Company Formed', desc: 'IEG Vidaka Powers Ltd. formally incorporated.' },
  { year: '2025', title: '2nd Patent', desc: 'Regeneration of Internal Energy patent granted.' },
];

// ---- PROBLEMS ----
export const PROBLEMS = [
  {
    number: '01',
    title: 'Fossil Fuel Scarcity',
    description: 'Energy systems rely heavily on finite fuels, exposing economies to price shocks, scarcity, and geopolitical instability.',
  },
  {
    number: '02',
    title: 'Grid Dependency',
    description: 'Electric mobility and modern appliances remain tied to centralized grids that are unreliable, expensive, and inaccessible in many regions.',
  },
  {
    number: '03',
    title: 'Environmental Cost',
    description: 'Conventional power generation produces massive carbon emissions with exorbitant production & maintenance costs.',
  },
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
    description: 'Self-powered charging system for e-rickshaws. Battery life extends 2-2.5x. No external charging required.',
    specs: { batteryLife: '2-2.5x Extended', charging: 'Self-Powered', mileage: 'Unlimited' },
    image: '/assets/pdf_page22_img1.png',
  },
  {
    id: 'scooty',
    name: 'IEG E-Scooty Charger',
    category: 'Electric Mobility',
    description: 'Self-refilling battery charge whenever parked or ignition switched off. Prevents deep discharge and overcharging.',
    specs: { batteryLife: '2x Cycles', charging: 'Auto-Refill', savings: 'Zero Electricity Bill' },
    image: '/assets/pdf_page21_img1.png',
  },
  {
    id: 'chula',
    name: 'IEG Electric Chula',
    category: 'Home Appliance',
    description: 'Clean electric cooking stove powered by IEG technology. No gas, no grid, no compromises.',
    specs: { power: 'Self-Sustained', fuel: 'None', use: 'Cooking' },
    image: '/assets/pdf_page24_img3.png',
  },
  {
    id: 'generator',
    name: 'IEG Power Generator',
    category: 'Power Generation',
    description: 'Fuel-less power station. Start generating electricity with a flip of a switch. Silent, clean, portable.',
    specs: { models: '1KVA / 2KVA', runtime: '18 hrs/day', noise: '68-72 DB' },
    image: '/assets/pdf_page17_img1.png',
  },
  {
    id: 'battery-charger',
    name: 'IEG Battery Charger',
    category: 'Energy Storage',
    description: 'Self-power battery charging system. Enhances backup time 3-4x with 96% efficiency.',
    specs: { efficiency: '96%', backup: '3-4x Enhanced', models: '600W to 5000W' },
    image: '/assets/pdf_page20_img1.png',
  },
];

export const PRODUCTS_UPCOMING = [
  'IEG 36V Cycle Charger',
  'IEG E-Bike Charger 96V',
  'IEG Mobile Battery Charger',
  'IEG Ceiling Fan',
  'IEG Laptop Charger',
  'IEG Air Conditioner',
  'IEG Four-Wheeler Charger',
];

// ---- COMPARISON DATA ----
export const COMPARISON_TWO_WHEELER = {
  headers: ['Feature', 'Petrol Scooty', 'Electric Scooty', 'IEG Scooty'],
  rows: [
    ['Power Source', 'Fossil Fuel', 'Electric Battery', '∞ Internal Energy'],
    ['Charging', 'Petrol Pumps', 'Electric Outlets', 'No Charging Needed'],
    ['Carbon Footprint', '23,000 gm CO₂/liter', 'Grid-dependent', 'Zero Emissions'],
    ['Range', 'Limited by fuel', 'Limited by battery', '∞ Unlimited'],
    ['Running Cost', 'High (fuel prices)', '₹5,040/year', '₹0/year'],
    ['Grid Dependence', 'Petroleum supply', 'Grid availability', 'Total Independence'],
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
export const EXECUTIVE_BOARD = [
  { name: 'Mansukh Vaghasiya', role: 'Chairman', focus: 'Corporate Governance & Strategy' },
  { name: 'Ajay Choudhary', role: 'Managing Director', focus: 'Inventor & Patent Owner' },
  { name: 'Rajesh Vaghasiya', role: 'Director Finance', focus: 'Capital Structure & Financial Control' },
];

export const OPERATIONAL_DIRECTORS = [
  { name: 'Neena Nagle', role: 'Director Operations' },
  { name: 'Vijay Gupta', role: 'Director Production (Electronics)' },
  { name: 'Nitin Vyas', role: 'Director Production (Mechanical)' },
  { name: 'Rajeshwar Nagle', role: 'Director IT' },
  { name: 'Vinay Salodkar', role: 'Director Marketing (Technical)' },
  { name: 'Nilesh Vyas', role: 'Director Marketing' },
  { name: 'Devashish Saraf', role: 'Director Business Development' },
  { name: 'Ambarish Salodkar', role: 'Data Analyst' },
  { name: 'Manshuk Radadiya', role: 'Director Marketing (Power Sector)' },
];

// ---- ROADMAP ----
export const ROADMAP_STEPS = [
  { day: 'Day 0', title: 'MoU Signing', desc: 'Formal agreement signed with strategic investor.' },
  { day: 'Day 30', title: 'DPR + SPV Formation', desc: 'Detailed Project Report delivered. Private Limited subsidiary incorporated.' },
  { day: 'Day 60', title: 'HQ Acquisition', desc: 'Corporate office secured in Mumbai CBD for brand visibility.' },
  { day: 'Day 120', title: 'Sample Deployment', desc: 'Product samples distributed to identified buyers for testing.' },
  { day: 'Day 180', title: 'Manufacturing Live', desc: 'Large-scale facility operational in Vapi, Gujarat.' },
];

// ---- INVESTOR / SUBSIDIARY MODEL ----
export const SUBSIDIARY_STRUCTURE = {
  parentShare: 55,
  investorShare: 45,
  subsidiaries: [
    { name: 'Subsidiary 1', segment: 'Electric Vehicles', products: ['2-Wheeler Chargers', '3-Wheeler Chargers', '4-Wheeler Chargers', 'Heavy Commercial EVs'] },
    { name: 'Subsidiary 2', segment: 'Home Appliances', products: ['Electric Stove (Chullah)', 'Portable Generator up to 5kW'] },
    { name: 'Subsidiary 3', segment: 'Consumer Electronics', products: ['Mobile Chargers', 'Laptop Chargers', 'Air Conditioners'] },
    { name: 'Subsidiary 4', segment: 'Commercial Power', products: ['Industrial Generators', 'Solar Energy Plants'] },
    { name: 'Subsidiary 5', segment: 'Motor Efficiency', products: ['Retrofitting Motors', 'Pumps', 'HVAC', 'Industrial Motors'] },
  ],
};

// ---- VALUE PROPOSITIONS ----
export const VALUE_PROPS = [
  { icon: 'leaf', title: 'No Pollution', desc: 'Zero emissions, zero carbon footprint' },
  { icon: 'cloud', title: 'Low Carbon', desc: 'Promotes green revolution with carbon credits' },
  { icon: 'shield', title: 'No Harm', desc: 'Safe for environment and mother nature' },
  { icon: 'coins', title: 'Very Low Cost', desc: 'Negligible infrastructure and maintenance' },
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
