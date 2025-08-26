export interface Translation {
  // Site
  siteTitle: string;
  
  // Navigation
  home: string;
  writing: string;
  projects: string;
  resume: string;
  
  // Home page
  welcomeHeading: string;
  latestPosts: string;
  recentProjects: string;
  getInTouch: string;
  getInTouchDesc: string;
  seeAllPosts: string;
  seeAllProjects: string;
  
  // Common
  email: string;
  personalEmail: string;
  academicEmail: string;
  readMore: string;
  backToTop: string;
  search: string;
  
  // Resume
  education: string;
  publications: string;
  skills: string;
  teachingExperience: string;
  saveCVPDF: string;
  present: string;
  
  // Meta
  homeDescription: string;
  writingDescription: string;
  projectsDescription: string;
  resumeDescription: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Site
    siteTitle: "Ali AlSaibie",
    
    // Navigation
    home: "Home",
    writing: "Writing", 
    projects: "Projects",
    resume: "Resume",
    
    // Home page
    welcomeHeading: "Thoughts, projects, and everything in between",
    latestPosts: "Latest posts",
    recentProjects: "Recent projects", 
    getInTouch: "Get in Touch",
    getInTouchDesc: "I'm always open to discussing research collaborations, academic opportunities, or simply connecting with fellow engineers and researchers.",
    seeAllPosts: "See all posts",
    seeAllProjects: "See all projects",
    
    // Common
    email: "Email",
    personalEmail: "Personal:",
    academicEmail: "Academic:",
    readMore: "Read more",
    backToTop: "Back to top",
    search: "Search",
    
    // Resume  
    education: "Education",
    publications: "Publications",
    skills: "Skills",
    teachingExperience: "Teaching Experience",
    saveCVPDF: "Save CV PDF",
    present: "Present",
    
    // Meta
    homeDescription: "Welcome to Ali AlSaibie's personal site and blog.",
    writingDescription: "Robotics, mechatronics, and other engineering related articles",
    projectsDescription: "A collection of my projects with links to repositories and live demos.",
    resumeDescription: "Professional experience, education, and publications of Ali AlSaibie."
  },
  
  ar: {
    // Site
    siteTitle: "علي الصيبعي",
    
    // Navigation
    home: "الرئيسية",
    writing: "المقالات",
    projects: "المشاريع", 
    resume: "السيرة الذاتية",
    
    // Home page
    welcomeHeading: "أفكار ومشاريع وكل ما بينهما",
    latestPosts: "أحدث المقالات",
    recentProjects: "المشاريع الحديثة",
    getInTouch: "تواصل معي", 
    getInTouchDesc: "أنا دائماً مستعد لمناقشة التعاون البحثي والفرص الأكاديمية أو ببساطة التواصل مع زملائي المهندسين والباحثين.",
    seeAllPosts: "عرض جميع المقالات",
    seeAllProjects: "عرض جميع المشاريع",
    
    // Common
    email: "البريد الإلكتروني",
    personalEmail: "البريد الشخصي:",
    academicEmail: "البريد الأكاديمي:",
    readMore: "اقرأ المزيد",
    backToTop: "العودة للأعلى",
    search: "بحث",
    
    // Resume
    education: "التعليم",
    publications: "المنشورات البحثية",
    skills: "المهارات",
    teachingExperience: "الخبرة التدريسية", 
    saveCVPDF: "تحميل السيرة الذاتية",
    present: "مستمر",
    
    // Meta
    homeDescription: "مرحباً بكم في الموقع الشخصي والمدونة الخاصة بعلي الصيبي.",
    writingDescription: "مقالات حول الروبوتات والميكاترونكس وغيرها من المواضيع الهندسية",
    projectsDescription: "مجموعة من مشاريعي مع روابط للمستودعات والعروض التوضيحية.",
    resumeDescription: "الخبرة المهنية والتعليم والمنشورات الخاصة بعلي الصيبي."
  }
};

export function getTranslation(locale: string): Translation {
  return translations[locale] || translations.en;
}
