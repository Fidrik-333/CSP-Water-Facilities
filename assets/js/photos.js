/**
 * Central Visual & Map Verification Registry
 * Rebala Village Community Service Project (Weeks 1–8).
 */

/* eslint-disable no-unused-vars */

const heroPhoto = {
  src: "assets/images/week-1/week1.1.jpg",
  alt: "CSP fieldwork team with the operator outside the Government RWSS Mineral Water Plant in Rebala Village",
  caption: "Government RWSS Mineral Water Plant (మినరల్ వాటర్ ప్లాంట్, రేబాల) — 24×7 ₹5 coin-operated drinking water dispensing and mobile tanker supply documented during Week 1 fieldwork.",
  facility: "rwss-plant",
  location: "Rebala Village",
  objectPosition: "center 35%",
  orientation: "portrait"
};

const weeklyPhotos = {
  week1: [
    {
      src: "assets/images/week-1/week1.jpg",
      alt: "CSP team in front of Rebala Gram Sachivalayam (Swarna Rebala 1 and 2)",
      caption: "Week 1 fieldwork visit at Rebala Gram Sachivalayam (Swarna Rebala 1 & 2).",
      facility: "sachivalayam",
      date: "02 June 2026",
      location: "Rebala Gram Sachivalayam",
      objectPosition: "center center",
      orientation: "portrait"
    },
    {
      src: "assets/images/week-1/week1.1.jpg",
      alt: "Government RWSS Mineral Water Plant in Rebala Village",
      caption: "Week 1 visit to the Government RWSS Mineral Water Plant, Rebala.",
      facility: "rwss-plant",
      location: "Rebala Village",
      objectPosition: "center 35%",
      orientation: "portrait"
    },
    {
      src: "assets/images/week-1/week1.2.jpg",
      alt: "Water container filling observed at the Mineral Water Plant in Rebala",
      caption: "Observing water container filling at the Mineral Water Plant in Rebala.",
      facility: "rwss-plant",
      location: "Rebala Village",
      objectPosition: "center 65%",
      orientation: "portrait"
    }
  ],
  week2: [
    {
      src: "assets/images/week-2/week2.jpg",
      alt: "Adarsha High School (ఆదర్శ ఉన్నత పాఠశాల) in Rebala visited for the Week 2 awareness programme",
      caption: "Week 2 — Adarsha High School, Rebala (ఆదర్శ ఉన్నత పాఠశాల) visited for the drinking water awareness programme.",
      facility: "school-awareness",
      date: "09 June 2026",
      location: "Adarsha High School, Rebala",
      objectPosition: "center center",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-2/week2.1.jpg",
      alt: "CSP team with Adarsha High School students near indoor water storage tanks and taps",
      caption: "Interaction with students at Adarsha High School, Rebala water storage and tap area.",
      facility: "school-awareness",
      date: "09 June 2026",
      location: "Adarsha High School, Rebala",
      objectPosition: "center 36%",
      orientation: "portrait"
    }
  ],
  week3: [
    {
      src: "assets/images/week-3/week3.jpg",
      alt: "CSP team at the elevated overhead water storage tank and spiral staircase in Rebala Village",
      caption: "Week 3 observation of the elevated overhead water storage tank, supporting columns, and external spiral staircase.",
      facility: "overhead-tank",
      date: "16 June 2026",
      location: "Rebala Village",
      objectPosition: "center center",
      orientation: "portrait"
    }
  ],
  week4: [
    {
      src: "assets/images/week-4/week4.jpg",
      alt: "CSP team beside the shared tiled washing platform with multiple water taps in Rebala Village",
      caption: "Week 4 inspection of the shared multi-tap washing platform and sequential water outlets.",
      facility: "washing-platform",
      date: "25 June 2026",
      location: "Rebala Village",
      objectPosition: "center 35%",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-4/week4.1.jpg",
      alt: "CSP team inside an indoor tap room showing wall-mounted taps on a common pipeline and storage tank",
      caption: "Observing an indoor multi-tap facility where wall-mounted taps connect via a common pipeline to a storage tank.",
      facility: "standposts",
      location: "Rebala Village",
      objectPosition: "center 42%",
      orientation: "portrait"
    }
  ],
  week5: [
    {
      src: "assets/images/week-5/week5.jpg",
      alt: "CSP team member interviewing an elderly resident near a residential hand pump in Rebala Village",
      caption: "Week 5 residential field survey and interaction with an elderly resident near a hand pump.",
      facility: "hand-pumps",
      location: "Rebala Village",
      objectPosition: "center 20%",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-5/week5.1.jpg",
      alt: "CSP team members observing water discharging from an outdoor pipe outlet toward an adjacent channel",
      caption: "Observing an outdoor pipe outlet discharging water toward a nearby channel during Week 5 fieldwork.",
      facility: "pumping-installation",
      location: "Rebala Village",
      objectPosition: "center 60%",
      orientation: "portrait"
    }
  ],
  week6: [
    {
      // Optimized web version (364 KB WebP); full-resolution original preserved at assets/images/week-6/week6.png
      src: "assets/images/week-6/week6.webp",
      alt: "CSP team members beside an outdoor water-pumping installation with covered upper section and outlet pipe",
      caption: "Week 6 inspection of an outdoor water-pumping installation, noting its covered upper section and connected outlet pipe.",
      facility: "pumping-installation",
      date: "07 July 2026",
      location: "Rebala Village",
      objectPosition: "center center",
      orientation: "portrait"
    }
  ],
  week7: [
    {
      src: "assets/images/week-7/week7.png",
      alt: "Screenshot of the completed Rebala Field Monograph website homepage hero section featuring the RWSS Mineral Water Plant cover photograph",
      caption: "Website Documentation (Week 7): Completed homepage hero section displaying project overview metadata, Verification Notice, and Week 1 Mineral Water Plant cover plate.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-7/week7.1.png",
      alt: "Screenshot of Chapter 01 Genesis, Study Area and Field Methodology section on the completed CSP website",
      caption: "Website Documentation (Week 7): Chapter 01 — Project Genesis and Study Area overview summarizing Rebala Village jurisdiction and documented water sources.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-7/week7.2.png",
      alt: "Screenshot of Chapter 01.A Core Project Objectives listing five numbered objectives on the completed CSP website",
      caption: "Website Documentation (Week 7): Chapter 01.A — Core Project Objectives detailing infrastructure inventory, community engagement, school awareness, and digital synthesis.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-7/week7.3.png",
      alt: "Screenshot of Chapter 02 Our Fieldwork Journey displaying the eight-week timeline sidebar and Week 1 chapter",
      caption: "Website Documentation (Week 7): Chapter 02 — Eight-week Fieldwork Journey interface displaying the sticky chapter navigation (W1–W8) and Week 1 preliminary survey.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    }
  ],
  week8: [
    {
      src: "assets/images/week-8/week8.png",
      alt: "Screenshot of Chapter 04 Interactive Geographical Map with OpenStreetMap background, 650 m reference circle, six facility markers, and filter controls",
      caption: "Website Documentation (Week 8): Chapter 04 — Interactive Geographical Map showing OpenStreetMap background tiles, 650 m reference ring, 1 GPS ground-truth pin, 5 approximate markers, and slot filters.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-8/week8.1.png",
      alt: "Screenshot of Chapter 05 Photo Documentary Archive header, week and category filters, and Week 1 cards on the completed CSP website",
      caption: "Website Documentation (Week 8): Chapter 05 — Photo Documentary Archive view presenting week/category filters and Week 1 Gram Sachivalayam and RWSS plant entries.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-8/week8.2.png",
      alt: "Screenshot of Photo Documentary Archive grid showing fieldwork photographs from Weeks 1 to 4 on the completed CSP website",
      caption: "Website Documentation (Week 8): Photo Documentary Archive grid displaying fieldwork plates from Weeks 1–4 (Mineral Water Plant, Adarsha High School, Overhead Tank, and Washing Platform).",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-8/week8.3.png",
      alt: "Screenshot of Photo Documentary Archive continuation showing Week 4 indoor taps, Week 5 hand pump and pipe outlet, and Week 6 pumping installation",
      caption: "Website Documentation (Week 8): Photo Documentary Archive continuation displaying Week 4 indoor taps, Week 5 residential hand-pump interview and pipe outlet, and Week 6 pumping installation.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    },
    {
      src: "assets/images/week-8/week8.4.png",
      alt: "Screenshot of Project Team, Academic Credits and Acknowledgments section on the completed CSP website",
      caption: "Website Documentation (Week 8): Project Team, Academic Credits, and institutional Acknowledgments displaying verified student, faculty guide, and college details.",
      facility: "website-documentation",
      location: "Completed CSP Website",
      orientation: "landscape"
    }
  ]
};

/**
 * Interactive Map Registry (OpenStreetMap)
 * ---------------------------------------------------------------------------
 * Coordinates recovered from the previously published CSP website
 * (https://csp-project-water-facilities.netlify.app/assets/js/fieldwork-data.js):
 *   - 1 GPS ground-truth coordinate (`status: "verified"`): India Mark II Hand Pump
 *     (14.520941, 79.904295, Plus Code Gwc4+43, Rebala).
 *   - 5 approximate field-referenced locations (`status: "approximate"`),
 *     strictly preserved as approximate (~150-250m) rather than GPS-verified.
 */
const mapStudyContext = {
  villageName: "Rebala Village",
  mandal: "Buchireddypalem Mandal",
  district: "SPSR Nellore District",
  state: "Andhra Pradesh, India",
  // Approximate study-corridor reference center framing all 6 facility points (not an official village boundary):
  approxCenterLat: 14.5202,
  approxCenterLng: 79.9056,
  defaultZoom: 15,
  approxRadiusMeters: 650
};

const mapLocations = [
  {
    id: "loc-1",
    slotNumber: "01",
    name: "Rebala Gram Sachivalayam (Swarna Rebala 1 & 2)",
    category: "Administrative Base",
    facilityKey: "sachivalayam",
    weekRef: "Week 1",
    status: "approximate",
    lat: 14.5185,
    lng: 79.9072,
    uncertaintyMeters: 150,
    sourceRef: "ZONE-02 · zone-village-secretariat (Administrative Baseline, ~150m)",
    description: "Initial administrative coordination and project introduction with local Sachivalayam officials.",
    photoSrc: null
  },
  {
    id: "loc-2",
    slotNumber: "02",
    name: "Government RWSS Mineral Water Plant",
    category: "Community Purification & Dispensing",
    facilityKey: "rwss-plant",
    weekRef: "Week 1",
    status: "approximate",
    lat: 14.5198,
    lng: 79.9056,
    uncertaintyMeters: 250,
    sourceRef: "ZONE-03 · zone-ro-mineral-plant (Surveyed Facility, ~250m)",
    description: "Community mineral water facility observed for container filling, ₹5 coin-operated 20L dispensing, and mobile tanker operations.",
    photoSrc: null
  },
  {
    id: "loc-3",
    slotNumber: "03",
    name: "Overhead Water Storage Reservoir (OHT)",
    category: "Elevated Storage Infrastructure",
    facilityKey: "overhead-tank",
    weekRef: "Week 3",
    status: "approximate",
    lat: 14.5215,
    lng: 79.9038,
    uncertaintyMeters: 150,
    sourceRef: "ZONE-04 · zone-overhead-reservoir (Visual Landmark, ~150m)",
    description: "Elevated storage tank with supporting column framework, spiral staircase access, and compound enclosure.",
    photoSrc: null
  },
  {
    id: "loc-4",
    slotNumber: "04",
    name: "Public Standposts & Indoor Multi-Tap Facility",
    category: "Shared Distribution Outlets",
    facilityKey: "standposts",
    weekRef: "Week 4",
    status: "approximate",
    lat: 14.5222,
    lng: 79.9062,
    uncertaintyMeters: 200,
    sourceRef: "ZONE-05 · zone-public-standposts (Distribution Standpost, ~200m)",
    description: "Public water tap outlets and indoor wall-mounted multi-tap arrangement connected via a common supply pipeline.",
    photoSrc: null
  },
  {
    id: "loc-5",
    slotNumber: "05",
    name: "Multi-Tap Washing Platform",
    category: "Common Utility Platform",
    facilityKey: "washing-platform",
    weekRef: "Week 4",
    status: "approximate",
    lat: 14.5178,
    lng: 79.9085,
    uncertaintyMeters: 250,
    sourceRef: "ZONE-06 · zone-school-wash-point (Institutional Facility, ~250m)",
    description: "Long shared washing platform equipped with multiple water outlets serving simultaneous community use.",
    photoSrc: null
  },
  {
    id: "loc-6",
    slotNumber: "06",
    name: "Residential Hand Pumps & Water-Pumping Installation",
    category: "Groundwater & Pumping Infrastructure",
    facilityKey: "hand-pumps",
    weekRef: "Weeks 5–6",
    status: "verified",
    lat: 14.520941,
    lng: 79.904295,
    plusCode: "Gwc4+43, Rebala",
    uncertaintyMeters: 5,
    sourceRef: "ZONE-01 · zone-hand-pump-gps (India Mark II Hand Pump GPS Ground-Truth)",
    pinNote: "Marker pins the specific Week 6 India Mark II hand-pump installation (Plus Code Gwc4+43), not every residential hand pump in the village.",
    description: "Residential hand-pump points documented alongside resident interviews and the outdoor covered water-pumping installation.",
    photoSrc: null
  }
];

window.CSP_MEDIA = {
  heroPhoto,
  weeklyPhotos,
  mapStudyContext,
  mapLocations
};
