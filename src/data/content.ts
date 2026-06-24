// Single source of site copy. Facts sourced from anandniketansatellite.edu.in,
// wording polished for a modern, professional voice.

export const school = {
  name: "Anand Niketan",
  campus: "Satellite Campus",
  city: "Ahmedabad",
  tagline: "Where Ambition Finds Direction",
  address: "Behind Novotel Hotel, Off S.G. Highway, Satellite, Ahmedabad",
  email: "ansatellite@anandniketan.org",
  phone: "9510358575",
  phoneHref: "tel:+919510358575",
  social: {
    linkedin: "https://www.linkedin.com/company/105382357/",
    instagram: "https://www.instagram.com/anandniketan_satellite/",
  },
  mapsQuery: "Anand Niketan School Satellite Ahmedabad",
};

export type NavLink = { label: string; to: string };

export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Admissions", to: "/admissions" },
  { label: "Student Board", to: "/student-board" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "25+", label: "Extra-curricular activities" },
  { value: "1:12", label: "Teacher–student ratio" },
  { value: "8", label: "Educational field trips a year" },
  { value: "55%", label: "Teachers with 10+ years' experience" },
  { value: "24x7", label: "Campus security" },
  { value: "60+", label: "Hours of teacher training a year" },
];

// The four elements — the school's signature theme.
export const elements = [
  {
    key: "agni",
    name: "Agni",
    meaning: "Fire",
    tagline: "Where Ambition Finds Direction",
    blurb:
      "The spark of curiosity and drive — we kindle the ambition that pushes every learner to reach further.",
  },
  {
    key: "vaayu",
    name: "Vaayu",
    meaning: "Air",
    tagline: "Where Every Minute is a Learner's Delight",
    blurb:
      "Freedom to think and explore — ideas move freely in classrooms designed for open, joyful learning.",
  },
  {
    key: "jal",
    name: "Jal",
    meaning: "Water",
    tagline: "Where Learning Becomes Exciting",
    blurb:
      "Adaptable and ever-flowing — our methodology shapes itself around how children genuinely learn.",
  },
  {
    key: "prithvi",
    name: "Prithvi",
    meaning: "Earth",
    tagline: "Where Elements Meet Education",
    blurb:
      "Rooted in values — grounded in Indian traditions while reaching for global standards of excellence.",
  },
] as const;

export const aims = [
  "Make quality education accessible to learners at every level.",
  "Offer a creative, challenging environment that stretches every child.",
  "Inspire critical thinking and confident problem-solving.",
  "Nurture creativity, teamwork, leadership and citizenship.",
  "Build understanding and respect for diverse cultures.",
];

export const figures = [
  {
    name: "Sri Aurobindo",
    quote:
      "True knowledge is not attained by thinking. It is what you are; it is what you become.",
  },
  {
    name: "J. Krishnamurti",
    quote: "Look within — you are the world.",
  },
  {
    name: "Gijubhai Badheka",
    quote:
      "Do not preach to children or keep finding faults — give them the freedom to grow.",
  },
];

export const facilities = [
  { key: "library", name: "Library", blurb: "A flexible, well-stocked space with an inclusive range of resources that support both learning and teaching." },
  { key: "browsing", name: "Browsing Room", blurb: "A warm, vibrant reading nook where students relax on mattresses and dive deep into curiosity and imagination." },
  { key: "classrooms", name: "Classrooms", blurb: "Spacious, well-ventilated classrooms spread across the four floors of the campus." },
  { key: "sports", name: "Sports Area", blurb: "Sport is woven into school life to build confidence, mental alertness and team spirit." },
  { key: "music", name: "Music, Dance & Drama", blurb: "Aesthetically designed studios that weave expression and the performing arts into the curriculum." },
  { key: "art", name: "Art & Craft Studio", blurb: "A studio to behold, where students hone their artistic skills and create magic with mixed media." },
  { key: "transport", name: "Transportation", blurb: "A fleet of school buses connects students safely from across the city." },
  { key: "medical", name: "Medical Cell", blurb: "An on-campus medical cell looks after the day-to-day health and safety of every student." },
  { key: "cctv", name: "24x7 CCTV Security", blurb: "The campus is monitored round the clock so children learn in a safe, secure environment." },
];

export const academics = [
  {
    title: "Primary School",
    grades: "Grades 1–5",
    blurb:
      "Building on a child's natural wonder, the early years introduce investigative, hands-on learning rooted in real environments and play.",
  },
  {
    title: "Secondary School",
    grades: "Grades 6–10",
    blurb:
      "A rich, structured curriculum that deepens conceptual understanding and prepares students for the academic demands ahead, leading to the ICSE examination.",
  },
  {
    title: "Higher Secondary",
    grades: "Grades 11–12",
    blurb:
      "Focused, future-ready streams that sharpen specialisation and independent thinking, culminating in the ISC examination.",
  },
];

export const methodology = [
  {
    stage: "Key Stage I",
    grades: "Grades 1–2",
    blurb:
      "Learners are introduced to investigative practices that build on their early experiences of exploring the world around them.",
  },
  {
    stage: "Key Stage II",
    grades: "Grades 3–6",
    blurb:
      "An engaging, comprehensive framework that prepares students for the academic demands of upper-level schooling.",
  },
];

export const admissionSteps = [
  { step: "01", title: "Enquiry", blurb: "Reach out by phone or email, or visit us to learn about the campus, curriculum and available seats." },
  { step: "02", title: "Application", blurb: "Complete the registration form and submit the required documents for your child's grade." },
  { step: "03", title: "Interaction", blurb: "An informal interaction with the child and parents helps us understand their needs and aspirations." },
  { step: "04", title: "Confirmation", blurb: "On selection, complete the admission formalities and welcome your child to the Anand Niketan family." },
];

export const studentBoard = [
  { title: "Code of Conduct", blurb: "Clear, fair expectations that build self-discipline, respect and responsibility." },
  { title: "Assessment", blurb: "Continuous, holistic assessment that values understanding over rote learning." },
  { title: "DEAR", blurb: "Drop Everything And Read — a daily ritual that makes reading a shared joy." },
  { title: "Uniform", blurb: "A neat, comfortable uniform that fosters belonging and equality." },
  { title: "School Timings", blurb: "A well-paced day balancing academics, activity and rest." },
  { title: "Achievements", blurb: "Celebrating student excellence across academics, sport and the arts." },
];

export const results = [
  { key: "icse", label: "ICSE Results 2026", grade: "Grade 10" },
  { key: "isc", label: "ISC Results 2026", grade: "Grade 12" },
];
