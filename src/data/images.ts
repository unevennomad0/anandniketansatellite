import logo from "../assets/logo.png";
import logoInner from "../assets/logo-inner.png";
import footerLogo from "../assets/footer-logo.png";
import childPic from "../assets/child-pic.png";
import banner01 from "../assets/activity-banner01.jpg";
import banner02 from "../assets/activity-banner02.jpg";
import banner03 from "../assets/activity-banner03.jpg";
import banner04 from "../assets/activity-banner04.jpg";
import agni from "../assets/agni.jpg";
import vaayu from "../assets/vaayu.jpg";
import jal from "../assets/jal.jpg";
import prithvi from "../assets/prithvi.jpg";
import agniPic from "../assets/agni-pic.png";
import vaayuPic from "../assets/vaayu-pic.png";
import jalPic from "../assets/jal-pic.png";
import prithviPic from "../assets/prithvi-pic.png";
import resultIsc from "../assets/Result-ISC-2026.jpg";
import resultIcse from "../assets/Result-ICSE-2026.jpg";

import fLibrary from "../assets/facilities/library.jpg";
import fBrowsing from "../assets/facilities/browsing.jpg";
import fClassrooms from "../assets/facilities/classrooms.jpg";
import fSports from "../assets/facilities/sports.jpg";
import fMusic from "../assets/facilities/music.jpg";
import fArt from "../assets/facilities/art.jpg";
import fTransport from "../assets/facilities/transport.jpg";
import fMedical from "../assets/facilities/medical.jpg";
import fCctv from "../assets/facilities/cctv.jpg";

export const img = {
  logo,
  logoInner,
  footerLogo,
  childPic,
  banners: [banner01, banner02, banner03, banner04],
  resultIsc,
  resultIcse,
};

export const elementImg: Record<string, string> = {
  agni,
  vaayu,
  jal,
  prithvi,
};

export const elementPic: Record<string, string> = {
  agni: agniPic,
  vaayu: vaayuPic,
  jal: jalPic,
  prithvi: prithviPic,
};

export const facilityImg: Record<string, string> = {
  library: fLibrary,
  browsing: fBrowsing,
  classrooms: fClassrooms,
  sports: fSports,
  music: fMusic,
  art: fArt,
  transport: fTransport,
  medical: fMedical,
  cctv: fCctv,
};

// Convenient flat gallery list.
export const galleryImages: { src: string; alt: string }[] = [
  { src: banner01, alt: "Students engaged in a campus activity" },
  { src: fArt, alt: "Art and craft studio" },
  { src: fLibrary, alt: "School library" },
  { src: banner02, alt: "Learners at Anand Niketan" },
  { src: fMusic, alt: "Music, dance and drama studio" },
  { src: fSports, alt: "Sports area" },
  { src: banner03, alt: "Classroom learning in action" },
  { src: fBrowsing, alt: "Browsing room" },
  { src: fClassrooms, alt: "Spacious classrooms" },
  { src: banner04, alt: "Co-curricular activity" },
  { src: fTransport, alt: "School transport fleet" },
  { src: childPic, alt: "A happy young learner" },
];
