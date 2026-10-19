export interface Doctor {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  education: string;
  specialties: string[];
  image: string;
  quote: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: 'General' | 'Cosmetic' | 'Restorative' | 'Orthodontics' | 'Emergency';
  image: string;
  duration: string;
  benefits: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  date: string;
  quote: string;
  verified: boolean;
}

export const CLINIC_INFO = {
  name: "Downtown Dental Jax",
  tagline: "Modern, compassionate dentistry in the heart of Downtown Jacksonville.",
  address: {
    street: "6 E Bay St, Suite 101",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    landmarks: "Located at the corner of Bay St & Main St, minutes from the St. Johns Riverwalk.",
    mapsUrl: "https://maps.google.com/?q=6+E+Bay+St+Ste+101+Jacksonville+FL+32202"
  },
  phone: "(904) 356-0072",
  altPhone: "(904) 734-6837",
  email: "care@downtowndentaljax.com",
  rating: 4.8,
  totalReviews: 1492,
  hours: [
    { day: "Monday", hours: "7:00 AM – 5:00 PM", note: "Early morning appointments available" },
    { day: "Tuesday", hours: "7:00 AM – 6:00 PM", note: "Evening hours for busy professionals" },
    { day: "Wednesday", hours: "7:00 AM – 5:00 PM", note: "Early morning appointments available" },
    { day: "Thursday", hours: "7:30 AM – 5:00 PM", note: "Convenient downtown access" },
    { day: "Friday", hours: "7:30 AM – 4:00 PM", note: "Weekend-ready emergency care" },
    { day: "Saturday & Sunday", hours: "Closed", note: "On-call emergency triage for existing patients" }
  ],
  insuranceAccepted: [
    "Aetna PPO",
    "Blue Cross Blue Shield Florida",
    "Cigna Dental",
    "Careington",
    "Delta Dental Premier / PPO",
    "GEHA Connection Dental",
    "Guardian DentalGuard",
    "Humana Dental",
    "MetLife PDP Plus",
    "UnitedHealthcare Dental"
  ],
  financingOptions: [
    "CareCredit 0% APR promotional financing",
    "In-House Downtown Dental Wellness Plan (no deductibles, no waiting periods)",
    "HSA & FSA debit cards accepted",
    "Phased treatment scheduling"
  ]
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-witten",
    name: "Dr. Andrew L. Witten, DMD",
    title: "Lead Restorative & Cosmetic Dentist",
    role: "Clinical Director",
    bio: "Dr. Andrew L. Witten brings extensive post-doctoral training in comprehensive restorative dentistry, cosmetic veneers, and digital dental implants. Known throughout Jacksonville for his gentle bedside manner and meticulous eye for facial balance, Dr. Witten designs treatments that preserve natural tooth structure while enhancing long-term oral health.",
    education: "Doctor of Dental Medicine (DMD) · Active Member of ADA & Florida Dental Association",
    specialties: ["Smile Rehabilitation", "Implant Restoration", "Cosmetic Porcelain Veneers", "Complex Restorations"],
    image: "/assets/images/dr_witten.jpg",
    quote: "Our priority is creating a quiet, reassuring space where dental care is unhurried, technically exceptional, and tailored to each patient's lifestyle."
  },
  {
    id: "dr-portalatin",
    name: "Dr. Eric Portalatin, DMD",
    title: "General & Restorative Dentist",
    role: "Associate Dentist",
    bio: "Dr. Eric Portalatin is dedicated to patient education and anxiety-free preventive dentistry. He focuses on early diagnosis, minimally invasive restorations, and gentle emergency relief. Patients appreciate his clear explanations and calm, reassuring approach during every visit.",
    education: "Doctor of Dental Medicine (DMD) · Member of Academy of General Dentistry",
    specialties: ["Minimally Invasive Dentistry", "Emergency Dental Relief", "Preventive Care", "Digital Diagnostics"],
    image: "/assets/images/dr_portalatin.jpg",
    quote: "We believe an informed patient is a confident patient. There is never pressure—just clear guidance, gentle hands, and lasting care."
  },
  {
    id: "dr-chammas",
    name: "Dr. Maria Al Chammas, DMD",
    title: "Cosmetic & Orthodontic Specialist",
    role: "Associate Dentist",
    bio: "Dr. Maria Al Chammas combines aesthetic artistry with modern orthodontic technology. Certified in Invisalign® clear aligner therapy and gentle aesthetic restorations, she works closely with Downtown professionals to achieve radiant, harmonious smiles with minimal disruption to their daily routine.",
    education: "Doctor of Dental Medicine (DMD) · Certified Invisalign® Provider",
    specialties: ["Invisalign® Clear Aligners", "Aesthetic Bonding", "Gentle Periodontal Therapy", "Teeth Whitening"],
    image: "/assets/images/dr_chammas.jpg",
    quote: "A healthy, beautiful smile elevates your entire presence. Watching patients regain their natural confidence is the most rewarding part of what we do."
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "preventive-care",
    title: "Comprehensive Preventive Exams & Cleanings",
    tagline: "Proactive care that protects your health before complications arise.",
    shortDesc: "Gentle ultrasonic cleanings, 3D digital imaging, periodontal screening, and customized preventative wellness plans.",
    fullDesc: "Our comprehensive hygiene visits are designed around total oral and systemic wellness. Using low-radiation digital radiography and comfortable ultrasonic scaling, our team removes calculus, monitors gum pocket health, and identifies microscopic structural changes before they require invasive treatment.",
    category: "General",
    image: "/assets/images/preventive.jpg",
    duration: "45–60 minutes",
    benefits: [
      "Low-radiation HD digital radiography & intraoral scans",
      "Gentle ultrasonic calculus removal with polish",
      "Comprehensive periodontal pocket mapping and oral cancer screening",
      "Personalized at-home preventive guidance"
    ],
    steps: [
      "Medical & oral history assessment",
      "Comprehensive digital imaging & intraoral photographic review",
      "Gentle ultrasonic cleaning and therapeutic polishing",
      "Doctor examination and personal treatment consultation"
    ],
    faqs: [
      {
        question: "How often should I schedule a preventive cleaning?",
        answer: "For most patients in good oral health, every six months is ideal. If you have a history of gum inflammation or periodontal maintenance, a 3 to 4 month interval provides the best protection."
      },
      {
        question: "Do you accommodate patients with dental anxiety?",
        answer: "Yes, our team is known for gentle dentistry. We provide comfortable blankets, noise-canceling headphones, and unhurried appointments where you are in complete control."
      }
    ]
  },
  {
    id: "invisalign",
    title: "Invisalign® Clear Aligners & Orthodontics",
    tagline: "Discreet, comfortable teeth straightening tailored to your routine.",
    shortDesc: "Custom-milled transparent aligners that gently straighten crowded teeth, close gaps, and optimize your bite without metal brackets.",
    fullDesc: "Downtown Dental Jax utilizes cutting-edge 3D digital intraoral scanning to map your entire treatment trajectory before your first aligner is even printed. Invisalign clear aligners are virtually invisible, removable for dining and hygiene, and engineered to fit seamlessly into busy professional lives.",
    category: "Orthodontics",
    image: "/assets/images/invisalign.jpg",
    duration: "Average 6–14 months",
    benefits: [
      "No messy putty impressions—fast 3D digital scan",
      "Removable for effortless eating, flossing, and client meetings",
      "Smooth, medical-grade BPA-free plastic with zero bracket abrasions",
      "Predictable digital simulation showing your target smile before starting"
    ],
    steps: [
      "Complimentary digital scan and smile simulation",
      "Custom aligner fabrication via Align Technology",
      "Regular check-ins (in-person or periodic digital tracking)",
      "Protective retainer phase to lock in your final alignment"
    ],
    faqs: [
      {
        question: "How many hours a day do I need to wear the aligners?",
        answer: "For predictable results, aligners should be worn 20 to 22 hours per day, removing them only when eating, drinking anything other than cool water, and brushing."
      },
      {
        question: "Is Invisalign covered by insurance?",
        answer: "Many dental insurance policies with orthodontic benefits cover a significant portion of Invisalign therapy. Our billing team will verify your exact benefits and explain flexible payment options."
      }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants & Restorative Crowns",
    tagline: "Permanent, natural-looking replacement for missing or fractured teeth.",
    shortDesc: "Titanium biocompatible fixtures and handcrafted porcelain crowns that restore full chewing strength and facial harmony.",
    fullDesc: "A missing tooth affects more than just your smile—it causes adjacent teeth to drift and leads to jawbone resorption over time. Our restorative implant solutions replicate the root structure with surgical precision, topped with custom ceramic crowns color-matched to your surrounding enamel.",
    category: "Restorative",
    image: "/assets/images/implants.jpg",
    duration: "Customized multi-phase plan",
    benefits: [
      "Prevents bone loss and preserves facial bone structure",
      "Restores 100% of natural bite strength and chewing function",
      "Looks, feels, and brushes just like your natural tooth",
      "Designed to last decades with standard oral hygiene"
    ],
    steps: [
      "3D Cone Beam CT imaging and bone density evaluation",
      "Precise guided placement of medical-grade titanium fixture",
      "Healing period (osseointegration) with temporary aesthetic tooth",
      "Placement of handcrafted permanent zirconia or porcelain crown"
    ],
    faqs: [
      {
        question: "Is the implant placement painful?",
        answer: "Most patients report minimal discomfort, often comparing it favorably to a simple filling. Local anesthesia ensures you feel zero pain during the procedure, and over-the-counter pain relievers are typically sufficient the next day."
      },
      {
        question: "Can I replace multiple teeth with implants?",
        answer: "Yes, we design single-tooth implants, implant-supported bridges, and full-arch solutions depending on your anatomical needs."
      }
    ]
  },
  {
    id: "cosmetic-veneers",
    title: "Porcelain Veneers & Smile Makeovers",
    tagline: "Custom-crafted ceramic artistry designed for natural radiance.",
    shortDesc: "Ultra-thin, luminous porcelain shells that correct discoloration, minor misalignments, chips, and irregular spacing.",
    fullDesc: "We approach cosmetic dentistry with architectural restraint. Rather than monochromatic 'fake white' teeth, Dr. Witten and Dr. Chammas design veneers with natural surface micro-textures, incisal translucency, and proportions that complement your facial contours.",
    category: "Cosmetic",
    image: "/assets/images/smile_result.jpg",
    duration: "2–3 visits",
    benefits: [
      "Stain-resistant porcelain that retains its luster for 15+ years",
      "Custom tooth shade matching tailored to your skin tone and lip line",
      "Minimally invasive enamel preservation techniques",
      "Comprehensive diagnostic mock-up before final bonding"
    ],
    steps: [
      "Aesthetic consultation & digital photographic study",
      "Conservative tooth preparation and temporary veneer placement",
      "Master lab fabrication with hand-layered ceramic porcelain",
      "Meticulous clinical bonding and final bite calibration"
    ],
    faqs: [
      {
        question: "Do porcelain veneers look natural?",
        answer: "Yes. Our philosophy focuses strictly on natural aesthetic harmony. We incorporate subtle gradients and translucency so your teeth reflect light exactly like healthy natural enamel."
      },
      {
        question: "How long do porcelain veneers last?",
        answer: "With routine cleanings and nighttime protection if you grind your teeth, high-quality porcelain veneers typically last 15 to 20 years or longer."
      }
    ]
  },
  {
    id: "emergency-dentistry",
    title: "Same-Day Emergency Dental Care",
    tagline: "Immediate relief when unexpected pain or trauma strikes.",
    shortDesc: "Prompt appointments for severe toothaches, broken teeth, lost restorations, and dental abscesses in Downtown Jacksonville.",
    fullDesc: "Dental emergencies are stressful and painful. At Downtown Dental Jax, we reserve daily emergency slots specifically to treat acute dental infections, cracked molars, knocked-out teeth, and dislodged crowns. We focus first on relieving your pain and stabilizing the tooth.",
    category: "Emergency",
    image: "/assets/images/lounge.jpg",
    duration: "Same-day priority evaluation",
    benefits: [
      "Same-day appointments for acute dental emergencies",
      "Rapid pain diagnosis with digital imaging",
      "Gentle treatment protocols focused on tooth preservation",
      "Early 7:00 AM weekday openings to treat you before your workday"
    ],
    steps: [
      "Immediate triage by our Jacksonville dental team",
      "Targeted digital radiograph to identify the underlying cause",
      "Gentle localized numbing for instant pain relief",
      "Definitive restorative treatment or stabilization"
    ],
    faqs: [
      {
        question: "What counts as a true dental emergency?",
        answer: "Severe or throbbing pain, sudden facial swelling, a knocked-out tooth, a bleeding laceration, a broken tooth causing sharp pain, or a dislodged crown causing sensitivity are all urgent emergencies."
      },
      {
        question: "Can I walk in without an appointment?",
        answer: "We strongly recommend calling us at (904) 356-0072 so our staff can prepare a sterile suite for your arrival and minimize your wait time."
      }
    ]
  },
  {
    id: "digital-technology",
    title: "3D Digital Imaging & Precision Diagnostics",
    tagline: "Cutting-edge technology for clearer diagnoses and comfortable visits.",
    shortDesc: "High-definition intraoral scanners, digital radiography, and precision software eliminating uncomfortable putty impressions.",
    fullDesc: "We invest in modern dental technology because it fundamentally improves patient comfort and clinical precision. You can view high-magnification intraoral scans on an ultra-wide screen in real time, making treatment decisions transparent, visual, and collaborative.",
    category: "General",
    image: "/assets/images/scanner.jpg",
    duration: "Integrated into every appointment",
    benefits: [
      "Instant 3D digital dental scans with no gag-inducing trays",
      "Over 80% reduction in radiation compared to traditional film X-rays",
      "Precision computer-guided restorative fit for crowns and bridges",
      "Transparent visualization of your oral health on HD screens"
    ],
    steps: [
      "Quick wand pass across tooth surfaces (under 3 minutes)",
      "Instant high-resolution 3D color model generation",
      "Chairside interactive review with your dentist",
      "Seamless digital transfer to premier dental laboratories"
    ],
    faqs: [
      {
        question: "Is 3D digital scanning safe?",
        answer: "Completely safe. The intraoral scanner uses optical light (similar to a camera) without any ionizing radiation whatsoever."
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Sarah M.",
    location: "Downtown Jacksonville Professional",
    rating: 5,
    treatment: "Routine Care & Invisalign",
    date: "Verified Patient",
    quote: "Working in downtown Jax, finding a practice open at 7:00 AM was a lifesaver. Dr. Witten and Dr. Chammas are both so attentive and never rush. My Invisalign journey was seamless, and the clinic feels like a boutique retreat rather than a traditional medical office.",
    verified: true
  },
  {
    id: "review-2",
    name: "David K.",
    location: "San Marco Resident",
    rating: 5,
    treatment: "Crown & Dental Implant",
    date: "Verified Patient",
    quote: "I cracked a molar on a Tuesday afternoon and was in excruciating pain. Downtown Dental Jax got me in first thing Wednesday morning. Dr. Portalatin explained every step, made the entire procedure painless, and the new crown fits perfectly. Couldn't recommend them higher.",
    verified: true
  },
  {
    id: "review-3",
    name: "Elena R.",
    location: "Riverside Jacksonville",
    rating: 5,
    treatment: "Porcelain Veneers & Whitening",
    date: "Verified Patient",
    quote: "I had been self-conscious about fluorosis stains on my front teeth for a decade. Dr. Witten's aesthetic eye is unmatched—the porcelain veneers look completely natural and match my smile flawlessly. The front desk team also handled my insurance details transparently.",
    verified: true
  },
  {
    id: "review-4",
    name: "Marcus T.",
    location: "Southbank Jacksonville",
    rating: 5,
    treatment: "Preventive Hygiene Exam",
    date: "Verified Patient",
    quote: "Over 1,400 positive reviews are genuinely deserved. Pristine clinic on Bay Street, gentle hygienists, and state-of-the-art digital scanners. You can see your teeth on the monitor and understand exactly what is happening.",
    verified: true
  }
];

export const FAQ_LIST = [
  {
    category: "Appointments & Visits",
    question: "Do you offer early morning or evening appointments?",
    answer: "Yes! Downtown Dental Jax opens at 7:00 AM on Mondays, Tuesdays, and Wednesdays, and stays open until 6:00 PM on Tuesdays. This allows downtown professionals and families to complete appointments before or after standard work hours without taking personal leave."
  },
  {
    category: "Location & Parking",
    question: "Where are you located and where should I park?",
    answer: "Our office is located at 6 E Bay St, Suite 101, at the corner of Bay Street and Main Street in Downtown Jacksonville. Ample street metered parking and nearby garage parking are located right across from the building, with easy ground-floor elevator accessibility."
  },
  {
    category: "Insurance & Payment",
    question: "What insurance plans do you accept?",
    answer: "We accept most major PPO dental insurances including Aetna, Blue Cross Blue Shield, Cigna, Delta Dental, Guardian, Humana, and MetLife. Our insurance coordinators submit all claims directly on your behalf to maximize your benefits."
  },
  {
    category: "No Insurance",
    question: "What if I don't have dental insurance?",
    answer: "We offer an in-house Downtown Dental Wellness Membership Plan with zero waiting periods, no deductibles, and no maximums. It includes two comprehensive preventative cleanings, all necessary exams and digital X-rays, plus exclusive savings on restorative and cosmetic procedures."
  },
  {
    category: "Patient Comfort",
    question: "I have high dental anxiety. How can you help me?",
    answer: "You are not alone—many patients feel uneasy about dental visits. We practice anxiety-conscious dentistry: we explain each step before starting, take frequent pauses, use topical numbing prior to local anesthesia, and provide cozy blankets and music so you feel relaxed throughout."
  }
];
