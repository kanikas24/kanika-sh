import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kanika Sharma",
  initials: "KS",
  url: "https://kanika.sh",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Mobile Developer (React Native) with full-stack & data engineering experience, building scalable apps powered by efficient backends and data pipelines.",
  summary:
    "Mobile Application Developer with experience in data engineering and frontend development, skilled in building high-performance cross-platform apps (React Native, Flutter). Leverages data pipeline expertise (Python, PySpark, ETL) to optimize app analytics and backend integrations. Proficient in full-stack development (React.js, Node.js) to deliver seamless, data-driven mobile experiences. Combines app development with scalable cloud solutions (AWS, Firebase) for end-to-end product delivery.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "SQL",
    "DBT",
    "PostgreSQL",
    "React Native",
    "React.js",
    "Node.js",
    "Tableau",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hi@kanika.sh",
    tel: "+91 8376064490",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kanika-sharma",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kanika-sharma-a66855118/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kanika24496@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kristal.AI",
      href: "https://kristal.ai",
      badges: [],
      location: "Bengaluru, India",
      title: "Application Developer / Data Engineer",
      logoUrl: "/kristal.png",
      start: "April 2022",
      end: "Present",
      description:
        "Streamlined tax and revenue report automation across India, Singapore, and Dubai using dbt and Python. Designed ETL pipelines, merged multi-source data, and delivered actionable insights. Built master reports and dashboards with PostgreSQL and Tableau.",
    },
    {
      company: "Cloudphysician Healthcare Pvt Ltd",
      href: "https://cloudphysician.net",
      badges: [],
      location: "Bengaluru, India",
      title: "Application Developer",
      logoUrl: "/cloudp.png",
      start: "December 2020",
      end: "April 2022",
      description:
        "Led UI enhancements and custom component development for RADAR, a Smart-ICU system. Collaborated with doctors to improve usability, optimized responsiveness, and developed critical modules for hospital billing, admissions, and overall user experience.",
    },
    {
      company: "INCUBSENCE",
      href: "#",
      badges: [],
      location: "Bengaluru, India",
      title: "Lead Application Developer",
      logoUrl: "/incubesense.png",
      start: "July 2019",
      end: "November 2020",
      description:
        "Led development of NFC and IoT-based mobile apps for attendance, visitor, and transport management using React Native and Node.js. Integrated QR scanning, GPS tracking, and NFC features. Handled project leadership and client coordination.",
    },
    {
      company: "Piana IT Solutions Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Bengaluru, India",
      title: "Application Developer",
      logoUrl: "/piana.png",
      start: "October 2018",
      end: "June 2019",
      description:
        "Designed and developed complete recruitment mobile applications using React.js and PHP. Built frontend interfaces, backend APIs, and interview scheduling features. Conducted research to align app functionality with hospital and ambulance service requirements.",
    },
    {
      company: "DutyFreeList",
      href: "#",
      badges: [],
      location: "Bengaluru, India",
      title: "Application Developer",
      logoUrl: "/duty_free_list.png",
      start: "December 2017",
      end: "May 2018",
      description:
        "Developed and optimized pre-order retail features for airport duty-free shopping platforms. Enhanced user experience for seamless browsing and checkout. Integrated payment gateways and APIs to support multi-currency transactions and personalized product recommendations.",
    },
    {
      company: "Sutra Tech Labs",
      href: "#",
      badges: [],
      location: "Bengaluru, India",
      title: "Data Analyst Intern",
      logoUrl: "/sutra_tech.png",
      start: "June 2017",
      end: "September 2017",
      description:
        "Contributed to the development of an AI-ML powered community engagement platform. Designed interactive features, improved user experience, and collaborated with cross-functional teams to build intelligent recommendation systems and drive personalized content delivery at scale.",
    },
    {
      company: "Adaan Digital Solutions Pvt. Ltd.",
      href: "#",
      badges: [],
      location: "Bengaluru, India",
      title: "Web Developer Intern",
      logoUrl: "/adaan.png",
      start: "May 2017",
      end: "June 2017",
      description:
        "Supported end-to-end web development for digital marketing platforms serving global SMB clients. Built responsive websites, optimized UI/UX for performance, and collaborated with design and SEO teams to deliver tailored, client-specific web solutions.",
    }
  ],
  education: [
    {
      school: "Apeejay Stya University",
      href: "https://university.apeejay.edu",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      logoUrl: "/apeejay.png",
      start: "2014",
      end: "2018",
    }
  ],
  projects: [
    {
      title: "ETL Pipelines for Financial Reporting",
      href: "#",
      dates: "2022 - 2023",
      active: true,
      description:
        "Designed and implemented data transformation pipelines for financial reporting across multiple jurisdictions. Used DBT, Python, and PostgreSQL to automate complex tax calculations and financial consolidations.",
      technologies: [
        "DBT",
        "Python",
        "PostgreSQL",
        "SQL",
        "Tableau"
      ],
      links: [
        {
          type: "Project",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/kristal.mp4"
    },
    {
      title: "RADAR - Smart ICU Management System",
      href: "#",
      dates: "2020 - 2022",
      active: false,
      description:
        "Enhanced critical components of a real-time ICU monitoring system that helps specialists remotely monitor patients. Improved UI responsiveness and developed custom medical charting and reporting features.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.IO"
      ],
      links: [
        {
          type: "Project",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/radar.mp4"
    },
    {
      title: "IoT-Based Attendance Management System",
      href: "#",
      dates: "2019 - 2020",
      active: false,
      description:
        "Led the development of a comprehensive NFC-based attendance tracking system with geofencing capabilities. Integrated with IoT devices for seamless data collection and real-time reporting.",
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "NFC Integration",
        "GPS Tracking"
      ],
      links: [
        {
          type: "Project",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/incubesence.mp4"
    }
  ],
  certificates: [
    {
      title: "Big Data Certification",
      organization: "APTRON Solutions Pvt Ltd",
      date: "June 2016",
      url: "#"
    },
    {
      title: "Advanced Java",
      organization: "CMS",
      date: "June 2016",
      url: "#"
    },
    {
      title: "ICCCS-2017",
      organization: "HMR Institute Of Technology And Management",
      date: "January 2017",
      url: "#"
    }
  ],
  interests: [
    "Dancing",
    "Event curation",
    "Art",
    "Reading fiction & psychology",
    "Music"
  ]
} as const;