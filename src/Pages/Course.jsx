import React from "react";
import { useState, useMemo } from "react";
import { FaCode } from "react-icons/fa";
import { Si365Datascience } from "react-icons/si";
import { TbBrandDatabricks } from "react-icons/tb";
import { SiHackaday } from "react-icons/si";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
import { FaPython } from "react-icons/fa";
import { DiSizzlejs } from "react-icons/di";
import { TbCloudComputing } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { SiGreatlearning } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { GiDiploma } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { SiBmcsoftware } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { MdOutlineBusAlert } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdGraphicEq } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoPlayCircleSharp } from "react-icons/io5";
import { IoCubeSharp } from "react-icons/io5";
import { IoFilmSharp } from "react-icons/io5";
import { IoSparklesSharp } from "react-icons/io5";
import { IoPencilSharp } from "react-icons/io5";
import { IoLayersSharp } from "react-icons/io5";
import { IoVideocamSharp } from "react-icons/io5";
import { IoPlaySharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoBriefcaseSharp } from "react-icons/io5";

// ─── DATA ────────────────────────────────────────────────────────────────────

const masterDiplomaCourses = [
  {
    id: "DOAP",
    icon: <IoBriefcaseSharp />,
    title: "Diploma in Office Automation & Publishing",
    subtitle: "6 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Computer Fundamentals & Office Productivity",
        items: [
          "Operating System Basics & File/Folder Management",
          "Keyboard Shortcuts",
          "Email Usage & Online File Sharing",
          "Basic Cybersecurity Awareness",
        ],
      },
      {
        title: "MODULE 2: Microsoft Word (Document Creation)",
        items: [
          "Text Formatting, Paragraph & Page Layout",
          "Professional Documents — Letters, Reports, Resumes",
          "Templates & Styles",
          "Mail Merge",
          "Headers, Footers & Tables",
        ],
      },
      {
        title: "MODULE 3: Microsoft Excel (Data Handling & Analysis)",
        items: [
          "Spreadsheet Basics & Data Organization",
          "Formulas & Functions — SUM, IF, VLOOKUP",
          "Logical Calculations",
          "Pivot Tables & Charts",
          "Data Reports & Analysis",
        ],
      },
      {
        title: "MODULE 4: Microsoft PowerPoint (Presentation Skills)",
        items: [
          "Layouts, Themes & Adding Text/Visuals",
          "Slide Design Principles",
          "Transitions & Animations",
          "Structuring Presentations & Visual Storytelling",
        ],
      },
      {
        title: "MODULE 5: Outlook & Office Communication",
        items: [
          "Writing Professional Emails & Organizing Inbox",
          "Calendar Management & Meeting Scheduling",
          "Task Scheduling",
          "Communication Etiquette & Collaboration Basics",
        ],
      },
      {
        title: "MODULE 6: Microsoft Access (Database Basics)",
        items: [
          "Tables, Records & Fields",
          "Creating Simple Databases",
          "Queries & Data Retrieval",
          "Form-Based Data Entry",
        ],
      },
      {
        title: "MODULE 7: Desktop Publishing (DTP & Design Basics)",
        items: [
          "Designing Brochures, Cards & Flyers (CorelDRAW)",
          "Layout Design",
          "Page Setup, Margins & Print-Ready Files",
          "Typography & Color Usage Basics",
        ],
      },
      {
        title: "MODULE 8: Office Automation & Productivity Tools",
        items: [
          "Using Templates & Basic Macros (Intro Level)",
          "Time-Saving Techniques & Task Management",
          "Sharing Documents & Cloud Platform Collaboration",
        ],
      },
      {
        title: "MODULE 9: Practical Projects & Office Simulation",
        items: [
          "Document Handling & Data Reporting",
          "Multi-Tool Projects — Word, Excel & PowerPoint Combined",
          "Speed & Accuracy Training Under Deadlines",
        ],
      },
      {
        title: "MODULE 10: Career & Job Preparation",
        items: [
          "Job Roles — Office Executive, Data Entry Operator, MIS Executive",
          "Resume Building & Interview Preparation",
          "Professional Behavior & Office Etiquette",
          "Mock Interviews & Resume Review",
        ],
      },
    ],
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Outlook",
      "Microsoft Access",
      "CorelDRAW / DTP Tools",
    ],
    projects: [
      "File Organization & Email Communication Practice",
      "Report Creation & Resume Design (Word)",
      "Budget Sheet & Sales Report (Excel)",
      "Business Presentation & Educational Slideshow (PowerPoint)",
      "Email Drafting & Meeting Scheduling (Outlook)",
      "Small Database & Query-Based Data Extraction (Access)",
      "Visiting Card & Brochure Design (CorelDRAW)",
      "Office Automation & Workflow Improvement Project",
      "Complete Office Project & Multi-Task Assignment",
      "Mock Interviews & Resume Review",
    ],
  },
  {
    id: "ZBRUSH",
    icon: <IoPencilSharp />,
    title: "ZBrush 3D Sculpting",
    subtitle: "4 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Digital Sculpting & ZBrush Interface",
        items: [
          "What is 3D Sculpting & How It Differs from Modeling",
          "Industry Applications — Films, Games, Collectibles",
          "ZBrush Workspace, Navigation & Palettes",
          "Brushes & Tools Overview",
          "Standard, Move & Clay Brushes",
          "Understanding Mesh & Subdivisions",
        ],
      },
      {
        title: "MODULE 2: Sculpting Fundamentals (Form & Anatomy Basics)",
        items: [
          "Primary, Secondary & Tertiary Forms",
          "Volume & Proportions",
          "Human Body Proportions & Facial Structure Basics",
          "Blocking Out Forms",
          "Refining Details",
        ],
      },
      {
        title: "MODULE 3: Advanced Sculpting & Detailing",
        items: [
          "Skin Textures & Fine Surface Details",
          "Hard Surface Sculpting — Mechanical Shapes",
          "Clean Edges & Surfaces",
          "Custom Brushes & Using Alphas for Detailing",
        ],
      },
      {
        title: "MODULE 4: Retopology & Optimization",
        items: [
          "Creating Clean Topology",
          "Preparing Models for Animation",
          "Reducing Mesh Complexity",
          "Efficient Geometry Management",
          "UV Mapping Basics for Texturing",
        ],
      },
      {
        title: "MODULE 5: Texturing & Polypaint",
        items: [
          "Polypaint — Painting Directly on Models",
          "Color Detailing Techniques",
          "Exporting & Applying Textures in Pipelines",
          "Realistic Material Appearance & Surface Detailing",
        ],
      },
      {
        title: "MODULE 6: Rendering & Presentation",
        items: [
          "Lighting, Materials & Render Passes in ZBrush",
          "Exporting to Maya / Blender",
          "Final Rendering Pipeline",
          "Showcasing Models Professionally",
          "Turntable Renders",
        ],
      },
      {
        title: "MODULE 7: Character Design & Portfolio Development",
        items: [
          "Concept to Final Sculpt Workflow",
          "Designing Unique Characters",
          "Showcasing Best Work in Portfolio",
          "Game vs Film Industry Requirements",
          "Understanding Production Pipelines",
        ],
      },
      {
        title: "MODULE 8: Career & Freelancing Preparation",
        items: [
          "Career Paths — Character Artist, Creature Designer, 3D Sculptor",
          "Finding Freelance Clients & Pricing 3D Work",
          "Working with Studios & Understanding Pipelines",
          "Portfolio Presentation & Mock Client Pitch",
        ],
      },
    ],
    tools: ["ZBrush"],
    projects: [
      "Basic Shapes & Simple Organic Forms",
      "Character Bust & Face Sculpt",
      "Detailed Character Face & Hard Surface Object",
      "Retopology & Optimized Model",
      "Textured & Color-Detailed Character Model",
      "Final Rendered Model & Turntable Presentation",
      "Final Character Project & Portfolio Development",
      "Portfolio Presentation & Mock Client Pitch",
    ],
  },
  {
    id: "DTP",
    icon: <IoNewspaperSharp />,
    title: "DTP (Desktop Publishing) ",
    subtitle: "3 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to DTP & Design Basics",
        items: [
          "What is DTP & Its Applications",
          "Print vs Digital Design",
          "Role of DTP Operator in Industry",
          "Typography Fundamentals",
          "Layout, Alignment, Margins & Grids",
          "RGB vs CMYK — Color Modes & Printing Accuracy",
        ],
      },
      {
        title: "MODULE 2: Adobe PageMaker / InDesign (Layout Design)",
        items: [
          "Understanding Workspace & Tools",
          "Working with Text & Frames",
          "Creating Multi-page Documents",
          "Master Pages & Templates",
          "Text Formatting & Styles",
          "Columns, Grids & Linking Text Across Pages",
          "Managing Large Documents",
        ],
      },
      {
        title: "MODULE 3: CorelDRAW (Graphic & Print Design)",
        items: [
          "Tools, Interface & Working with Shapes",
          "Visiting Cards & Letterheads",
          "Banners & Poster Design",
          "Flex & Hoarding Designs",
          "Setting Page Size & Bleed",
          "Exporting Print-Ready Files",
        ],
      },
      {
        title: "MODULE 4: Photoshop (Basic Image Editing)",
        items: [
          "Cropping, Resizing & Color Correction",
          "Background Removal",
          "Preparing Images for Print",
          "Resolution & Quality Settings",
          "Editing Images for Brochures",
        ],
      },
      {
        title: "MODULE 5: Print Production & File Handling",
        items: [
          "Page Setup, Bleed, Resolution & DPI Settings",
          "File Formats — PDF, JPEG, PNG, CDR",
          "Exporting for Print vs Digital",
          "Offset Printing vs Digital Printing",
          "Paper Types & Finishing",
          "Preparing Print-Ready Files",
        ],
      },
      {
        title: "MODULE 6: Practical Projects & Real Work Simulation",
        items: [
          "Brochures, Flyers & ID Cards",
          "Certificates, Books & Booklets",
          "Understanding Design Briefs",
          "Making Revisions Based on Client Feedback",
          "Working Under Deadlines",
          "Avoiding Common Printing Errors",
        ],
      },
      {
        title: "MODULE 7: Career & Freelancing Basics",
        items: [
          "Printing Press Job Opportunities",
          "Office DTP Operator Roles",
          "Finding Clients for Freelancing",
          "Pricing Small Design Jobs",
          "Showcasing Print Designs in Portfolio",
          "Mock Client Interaction & Portfolio Preparation",
        ],
      },
    ],
    tools: [
      "Adobe PageMaker / InDesign",
      "CorelDRAW",
      "Adobe Photoshop (Basic)",
    ],
    projects: [
      "Magazine & Newsletter Layout (InDesign)",
      "Visiting Card & Banner Design (CorelDRAW)",
      "Image Editing for Brochures (Photoshop)",
      "Print-Ready File Preparation",
      "Full Brochure / Booklet Project",
      "Portfolio Preparation & Mock Client Interaction",
    ],
  },

  {
    id: "wd",
    icon: <FaCode />,
    title: "Web Development",
    subtitle: "FULL STACK",
    badge: "🔥 Most Popular",
    modules: [
      {
        title: "MODULE 1: Introduction to Web & Internet Basics",
        objective: "Understand how the web works",
        items: [
          "What is Internet & Web?",
          "How websites work (Client vs Server)",
          "Domain, Hosting & DNS",
          "HTTP & HTTPS",
          "Web Browsers",
          "Frontend vs Backend",
        ],
      },
      {
        title: "MODULE 2: HTML5",
        objective: "Build structure of websites",
        items: [
          "HTML Structure",
          "Tags, Elements, Attributes",
          "Links, Images, Lists",
          "Tables & Forms",
          "Semantic HTML",
          "Audio, Video, iFrame",
        ],
      },
      {
        title: "MODULE 3: CSS3",
        objective: "Make websites attractive",
        items: [
          "Selectors & Properties",
          "Box Model",
          "Flexbox & Grid",
          "Responsive Design",
          "Animations",
        ],
      },
      {
        title: "MODULE 4: JavaScript",
        objective: "Add interactivity",
        items: [
          "Variables & Data Types",
          "Functions & Loops",
          "DOM & Events",
          "Form Validation",
          "ES6 Concepts",
        ],
      },
      {
        title: "MODULES 5-14: Advanced Development",
        objective: "Full-stack mastery",
        items: [
          "Bootstrap & UI Frameworks",
          "React.js",
          "Node.js & Express",
          "MongoDB / MySQL",
          "MERN Stack",
          "Deployment & Hosting",
          "Testing & Security",
          "Capstone Projects",
          "Interview Preparation",
        ],
      },
    ],
    tools: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "Git & GitHub",
      "VS Code",
      "Postman",
    ],
    projects: [],
  },

  {
    id: "DAMD",
    icon: <IoLayersSharp />,
    title: "Diploma in Animation, Multimedia & Designing",
    subtitle: "9–12 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Design Fundamentals & Visual Communication",
        items: [
          "Color Theory & Psychology",
          "Typography & Layout",
          "Composition & Visual Hierarchy",
          "Idea Generation Techniques",
          "Understanding Client Briefs",
          "Visual Storytelling Basics",
        ],
      },
      {
        title: "MODULE 2: Graphic Designing (Photoshop & Illustrator)",
        items: [
          "Image Editing & Retouching (Photoshop)",
          "Poster & Social Media Design (Photoshop)",
          "Logo Design (Illustrator)",
          "Branding Materials — Cards & Stationery (Illustrator)",
        ],
      },
      {
        title: "MODULE 3: 2D Animation & Motion Graphics",
        items: [
          "Timeline Animation (Adobe Animate)",
          "Character Animation Basics (Adobe Animate)",
          "Animated Text & Visuals (After Effects)",
          "Transitions & Motion Effects (After Effects)",
        ],
      },
      {
        title: "MODULE 4: Video Editing & Multimedia Production",
        items: [
          "Cutting & Arranging Clips (Premiere Pro)",
          "Transitions & Effects (Premiere Pro)",
          "Background Music Integration",
          "Voice-Over Sync & Audio-Visual Production",
        ],
      },
      {
        title: "MODULE 5: 3D Animation Basics (Blender)",
        items: [
          "Creating Objects & Scenes in Blender",
          "Basic Environment Setup",
          "Texturing Models & Scene Lighting",
          "Keyframe Animation",
          "Product Animation",
        ],
      },
      {
        title: "MODULE 6: UI/UX Basics & Digital Design",
        items: [
          "User Experience Principles",
          "Wireframing Basics",
          "Designing App & Website Layouts (Figma)",
          "Creating UI Screens in Figma",
        ],
      },
      {
        title: "MODULE 7: Advanced Projects & Specialization",
        items: [
          "Specialization Track — Graphic Design",
          "Specialization Track — Animation & Motion Graphics",
          "Specialization Track — Video Editing",
          "Specialization Track — UI/UX Design",
          "Real-World Client-Based Projects",
          "Multi-Format Content Creation",
        ],
      },
      {
        title: "MODULE 8: Portfolio Development & Industry Preparation",
        items: [
          "Selecting Best Work & Structuring Portfolio",
          "Animation / Video Demo Reel Development",
          "Presentation Techniques",
          "Understanding Production Pipelines",
          "Team Collaboration Basics",
        ],
      },
      {
        title: "MODULE 9: Career & Freelancing Preparation",
        items: [
          "Career Paths — Graphic Designer, Animator, Video Editor, UI/UX Designer",
          "Finding Freelance Clients & Pricing Projects",
          "Resume Building & Portfolio Presentation",
          "Mock Interviews & Client Pitch Simulation",
        ],
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Animate",
      "Blender",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Figma",
    ],
    projects: [
      "Poster Design & Typography Projects",
      "Logo Design & Social Media Campaign",
      "Animated Advertisement & Motion Graphics Video",
      "Promotional Video & Social Media Content",
      "3D Product Model & Simple Animation Clip",
      "Mobile App Design & Website Layout (Figma)",
      "Major Specialization Project",
      "Portfolio Creation & Showreel Development",
      "Mock Interview & Client Pitch Simulation",
    ],
  },

  {
    id: "ds",
    icon: <Si365Datascience />,
    title: "Data Science",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Data Science",
        items: [
          "What is Data Science?",
          "Data Science Life Cycle",
          "Roles: Analyst, Scientist, ML Engineer",
          "Applications of Data Science",
          "Tools Overview & Setup",
        ],
      },
      {
        title: "MODULE 2: Python for Data Science",
        items: [
          "Python Basics",
          "Conditional Statements & Loops",
          "Functions & OOP",
          "File & Exception Handling",
          "NumPy, Pandas, Matplotlib, Seaborn",
        ],
      },
      {
        title: "MODULE 3: Statistics & Mathematics",
        items: [
          "Descriptive Statistics",
          "Probability & Distributions",
          "Hypothesis Testing",
          "Correlation & Covariance",
          "Linear Algebra & Calculus Basics",
        ],
      },
      {
        title: "MODULES 5-8: Machine Learning",
        items: [
          "ML Fundamentals & Workflow",
          "Supervised Learning (Regression & Classification)",
          "Unsupervised Learning (Clustering, PCA)",
          "Ensemble & Boosting Methods",
          "Hyperparameter Tuning & Model Evaluation",
        ],
      },
      {
        title: "MODULES 9-13: Deep Learning",
        items: [
          "Neural Network Basics",
          "ANN using TensorFlow & Keras",
          "Convolutional Neural Networks",
          "Recurrent Neural Networks (LSTM, GRU)",
          "Transfer Learning, GAN & NLP",
        ],
      },
      {
        title: "MODULE 15: Big Data & Deployment",
        items: [
          "Hadoop & Spark Basics",
          "Model Deployment",
          "Flask / Streamlit",
          "API Creation",
          "AWS Basics",
        ],
      },
    ],
    tools: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Power BI",
      "SQL",
      "Jupyter",
      "AWS",
    ],
    projects: [
      "House Price Prediction",
      "Customer Segmentation",
      "Sales Forecasting",
      "Image Classification",
      "Sentiment Analysis",
      "End-to-End Deployment",
    ],
  },

  {
    id: "da",
    icon: <TbBrandDatabricks />,
    title: "Data Analytics",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Data Analytics",
        items: [
          "What is Data Analytics?",
          "Types: Descriptive, Diagnostic, Predictive, Prescriptive",
          "Data Analytics Life Cycle",
          "Roles & Career Opportunities",
          "Industry Applications",
        ],
      },
      {
        title: "MODULE 2: Excel for Data Analysis",
        items: [
          "Excel Basics & Shortcuts",
          "Formulas & Functions",
          "Pivot Tables",
          "Data Cleaning in Excel",
          "Charts & Visualization",
        ],
      },
      {
        title: "MODULE 3: SQL for Data Analytics",
        items: [
          "Introduction to Databases",
          "SQL Basics (SELECT, WHERE, ORDER BY)",
          "Joins & Subqueries",
          "Group By & Aggregate Functions",
          "Real-world Query Practice",
        ],
      },
      {
        title: "MODULE 4: Python for Data Analytics",
        items: [
          "Python Basics",
          "NumPy & Pandas",
          "Data Cleaning",
          "Exploratory Data Analysis",
          "Matplotlib & Seaborn",
        ],
      },
      {
        title: "MODULE 5: Power BI & Visualization",
        items: [
          "Power BI Basics",
          "Data Modeling",
          "DAX Fundamentals",
          "Dashboard Creation",
          "Interactive Reports",
        ],
      },
      {
        title: "MODULE 6-7: Statistics & Business Analytics",
        items: [
          "Descriptive Statistics",
          "Correlation & Regression",
          "Hypothesis Testing",
          "KPI & Metrics Understanding",
          "Data-driven Decision Making",
        ],
      },
    ],
    tools: [
      "Microsoft Excel",
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Git & GitHub",
    ],
    projects: [
      "Sales Dashboard",
      "HR Analytics",
      "Customer Churn Analysis",
      "Financial Data Analysis",
      "End-to-End Analytics Project",
    ],
  },

  {
    id: "eh",
    icon: <SiHackaday />,
    title: "Ethical Hacking",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Ethical Hacking",
        items: [
          "What is Ethical Hacking?",
          "Types of Hackers (White, Black, Grey)",
          "Hacking Life Cycle",
          "Legal & Ethical Guidelines",
          "Tools Overview",
        ],
      },
      {
        title: "MODULE 2: Footprinting & Reconnaissance",
        items: [
          "Information Gathering Techniques",
          "Domain & IP Lookup",
          "Network Scanning",
          "Social Engineering Basics",
        ],
      },
      {
        title: "MODULE 3: Scanning & Enumeration",
        items: [
          "Port Scanning",
          "Vulnerability Scanning",
          "Network Enumeration",
          "Nmap & Nessus Tools",
        ],
      },
      {
        title: "MODULE 4: System Hacking & Exploitation",
        items: [
          "Password Cracking Techniques",
          "Privilege Escalation",
          "Trojans & Backdoors",
          "Patch Management & Mitigation",
        ],
      },
      {
        title: "MODULE 5: Web Application Hacking",
        items: [
          "SQL Injection",
          "XSS & CSRF",
          "File Inclusion",
          "OWASP Top 10",
        ],
      },
      {
        title: "MODULE 6-8: Network, Wireless & Cryptography",
        items: [
          "Wi-Fi Hacking",
          "Man-in-the-Middle Attacks",
          "Packet Sniffing",
          "Encryption & Hashing",
          "Secure Communication",
        ],
      },
    ],
    tools: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Metasploit",
      "Burp Suite",
      "OWASP ZAP",
    ],
    projects: [
      "Penetration Testing",
      "Web Hacking Lab",
      "Network Security Audit",
      "Real-world Case Studies",
    ],
  },

  {
    id: "dm",
    icon: <LiaDigitalTachographSolid />,
    title: "Digital Marketing",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Digital Marketing",
        items: [
          "Overview of Digital Marketing",
          "Traditional vs Digital Marketing",
          "Digital Marketing Channels",
          "Trends & Career Opportunities",
        ],
      },
      {
        title: "MODULE 2: SEO",
        items: [
          "Introduction to SEO",
          "On-page & Off-page SEO",
          "Keyword Research",
          "Backlinking & Link Building",
          "SEO Tools & Analytics",
        ],
      },
      {
        title: "MODULE 3: Social Media Marketing",
        items: [
          "Social Media Platforms Overview",
          "Content Strategy & Planning",
          "Facebook, Instagram, LinkedIn Marketing",
          "Engagement & Analytics",
        ],
      },
      {
        title: "MODULE 4: Paid Advertising (PPC)",
        items: [
          "Introduction to Google Ads",
          "Pay-Per-Click Campaigns",
          "Ad Targeting & Bidding",
          "Campaign Optimization & Analytics",
        ],
      },
      {
        title: "MODULE 5-6: Email & Content Marketing",
        items: [
          "Email Campaign Strategy",
          "Segmentation & Targeting",
          "Email Automation",
          "Blog Writing & SEO Content",
          "Video & Multimedia Content",
        ],
      },
      {
        title: "MODULE 7: Analytics & Reporting",
        items: [
          "Google Analytics Basics",
          "Traffic & Conversion Tracking",
          "Performance Metrics & KPIs",
          "Data-driven Marketing Decisions",
        ],
      },
    ],
    tools: [
      "Google Analytics",
      "Google Ads",
      "Facebook Ads Manager",
      "Mailchimp",
      "Canva",
      "Ahrefs",
      "SEMrush",
    ],
    projects: [
      "SEO Campaign Project",
      "Social Media Marketing Project",
      "PPC Campaign Simulation",
      "Email & Content Campaign",
    ],
  },

  {
    id: "id",
    icon: <SiMaterialdesignicons />,
    title: "Interior Design",
    subtitle: "DIPLOMA",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Interior Design",
        items: [
          "What is Interior Design?",
          "History & Evolution",
          "Role of an Interior Designer",
          "Design Principles & Elements",
        ],
      },
      {
        title: "MODULE 2: Space Planning & Layouts",
        items: [
          "Understanding Space & Function",
          "Residential & Commercial Layouts",
          "Furniture Planning & Zoning",
          "Circulation & Flow",
        ],
      },
      {
        title: "MODULE 3: Color Theory & Materials",
        items: [
          "Color Psychology",
          "Color Schemes & Combinations",
          "Materials & Finishes (Wood, Fabric, Tiles)",
          "Surface Textures & Patterns",
        ],
      },
      {
        title: "MODULE 4: Furniture & Lighting Design",
        items: [
          "Furniture Styles & Selection",
          "Custom Furniture Design Basics",
          "Lighting Types & Techniques",
          "Accent & Ambient Lighting",
        ],
      },
      {
        title: "MODULE 5: CAD & Design Software",
        items: [
          "AutoCAD Basics",
          "SketchUp & 3D Modeling",
          "Floor Plan Drafting",
          "Rendering & Visualization",
        ],
      },
      {
        title: "MODULE 6-7: Textiles, Furnishing & Styles",
        items: [
          "Fabric Selection & Drapery",
          "Upholstery & Soft Furnishings",
          "Modern, Minimalist & Scandinavian Styles",
          "Traditional, Classical & Eclectic Styles",
        ],
      },
    ],
    tools: [
      "AutoCAD",
      "SketchUp",
      "3ds Max",
      "Adobe Photoshop",
      "PowerPoint",
      "Rendering Tools",
    ],
    projects: [
      "Residential Project Design",
      "Commercial Project Design",
      "3D Rendering & Mockups",
      "Portfolio Building & Presentation",
    ],
  },

  {
    id: "fa",
    icon: <MdAccountBalance />,
    title: "Finance & Accounting",
    subtitle: "ADVANCED",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Advanced Accounting",
        items: [
          "Overview of Financial Accounting",
          "Accounting Standards & Regulations",
          "Role of an Accountant",
          "Financial Statements & Reports",
        ],
      },
      {
        title: "MODULE 2: Corporate Financial Reporting",
        items: [
          "Balance Sheet & Income Statement",
          "Cash Flow Statements",
          "Share Capital & Reserves Accounting",
          "IFRS / GAAP Standards",
        ],
      },
      {
        title: "MODULE 3: Financial Analysis & Ratio",
        items: [
          "Financial Ratio Analysis",
          "Liquidity & Solvency Analysis",
          "Profitability & Efficiency Ratios",
          "Trend & Comparative Analysis",
        ],
      },
      {
        title: "MODULE 4: Cost & Management Accounting",
        items: [
          "Cost Classification & Allocation",
          "Budgeting & Variance Analysis",
          "Break-even Analysis",
          "Cost Control & Decision Making",
        ],
      },
      {
        title: "MODULE 5: Advanced Taxation & Compliance",
        items: [
          "Corporate Taxation",
          "GST & Indirect Taxes",
          "Tax Planning & Compliance",
          "Audit & Regulatory Requirements",
        ],
      },
      {
        title: "MODULE 6: Investment & Financial Management",
        items: [
          "Capital Budgeting",
          "Working Capital Management",
          "Investment Appraisal Techniques",
          "Risk Management & Financial Planning",
        ],
      },
    ],
    tools: [
      "MS Excel (Advanced)",
      "Tally ERP",
      "QuickBooks",
      "ERP Accounting Software",
    ],
    projects: [
      "Financial Statement Analysis",
      "Cost Management Case Study",
      "Tax Planning Case Study",
      "Corporate Financial Simulation",
    ],
  },

  {
    id: "hr",
    icon: <GiHumanPyramid />,
    title: "Human Resource Management",
    subtitle: "DIPLOMA",
    badge: "",
    modules: [
      {
        title: "Introduction to HR Management",
        items: [
          "Overview of HR Functions",
          "Role of Technology in Modern HR",
          "Legal and Ethical Considerations",
        ],
      },
      {
        title: "HR Information Systems (HRIS)",
        items: [
          "HRIS Fundamentals & Key Features",
          "SAP SuccessFactors & Workday Basics",
          "Employee Data Management",
          "Creating & Managing Employee Records",
        ],
      },
      {
        title: "Recruitment & ATS",
        items: [
          "Recruitment & Selection Process",
          "LinkedIn Recruiter & Zoho Recruit",
          "Screening & Interview Scheduling",
          "Recruitment Analytics",
        ],
      },
      {
        title: "Performance, Payroll & Engagement",
        items: [
          "KPIs & OKRs (BambooHR, Lattice)",
          "Payroll Processing (ADP, QuickBooks)",
          "Tax Compliance & Reporting",
          "Employee Surveys & Feedback",
        ],
      },
      {
        title: "HR Analytics & L&D",
        items: [
          "HR Metrics & Workforce Analysis",
          "Excel & Power BI Basics",
          "LMS Platforms (Moodle, TalentLMS)",
          "Training ROI Measurement",
        ],
      },
      {
        title: "Strategic HRM & Cloud Tools",
        items: [
          "Workforce & Succession Planning",
          "Aligning HR with Business Goals",
          "MS Teams, Slack, Google Workspace",
          "Asana & Trello for HR Projects",
        ],
      },
    ],
    tools: [
      "SAP SuccessFactors",
      "Workday",
      "LinkedIn Recruiter",
      "BambooHR",
      "Power BI",
      "Slack",
    ],
    projects: [
      "Strategic HR Plan Development",
      "Recruitment Pipeline Simulation",
      "Payroll Processing Practice",
      "Capstone: Full HR System Integration",
    ],
  },

  {
    id: "py",
    icon: <FaPython />,
    title: "Python Programming",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Python Fundamentals",
        objective: "Master Python basics",
        items: [
          "Introduction to Python",
          "Installation & Setup",
          "Variables & Data Types",
          "Input/Output Operations",
          "Comments & Indentation",
        ],
      },
      {
        title: "MODULE 2: Control Flow",
        objective: "Write decision-making programs",
        items: [
          "if / elif / else Statements",
          "for & while Loops",
          "break, continue, pass",
          "Nested Conditions & Loops",
          "Pattern Programs",
        ],
      },
      {
        title: "MODULE 3: Functions & Modules",
        objective: "Write reusable code",
        items: [
          "Defining & Calling Functions",
          "Arguments & Return Values",
          "Lambda Functions",
          "Built-in Modules (math, os, sys)",
          "Creating Custom Modules",
        ],
      },
      {
        title: "MODULE 4: Data Structures",
        objective: "Manage data efficiently",
        items: [
          "Lists & Tuples",
          "Dictionaries & Sets",
          "List Comprehensions",
          "Nested Data Structures",
          "Stacks & Queues using Python",
        ],
      },
      {
        title: "MODULE 5: OOP in Python",
        objective: "Think in objects",
        items: [
          "Classes & Objects",
          "Constructors & Destructors",
          "Inheritance & Polymorphism",
          "Encapsulation & Abstraction",
          "Dunder Methods",
        ],
      },
      {
        title: "MODULES 6-10: Advanced Python",
        objective: "Build real-world apps",
        items: [
          "File Handling & CSV/JSON",
          "Exception Handling",
          "Regular Expressions",
          "Database with SQLite",
          "Web Scraping (BeautifulSoup)",
          "API Requests",
          "GUI with Tkinter",
          "Automation Projects",
          "Interview Prep",
        ],
      },
    ],
    tools: [
      "Python 3",
      "VS Code",
      "PyCharm",
      "Jupyter Notebook",
      "Git & GitHub",
      "SQLite",
      "Tkinter",
    ],
    projects: [
      "Calculator App",
      "File Organizer Script",
      "Web Scraper",
      "Student Management System",
      "To-Do CLI App",
      "API Data Fetcher",
    ],
  },

  {
    id: "uiux",
    icon: <DiSizzlejs />,
    title: "UI/UX Design",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to UI/UX",
        objective: "Understand design thinking",
        items: [
          "What is UI vs UX?",
          "Design Thinking Process",
          "User-Centered Design",
          "Career Paths in UI/UX",
          "Industry Tools Overview",
        ],
      },
      {
        title: "MODULE 2: Design Principles",
        objective: "Apply visual fundamentals",
        items: [
          "Typography Basics",
          "Color Theory in UI",
          "Grid & Layout Systems",
          "White Space & Hierarchy",
          "Visual Balance & Contrast",
        ],
      },
      {
        title: "MODULE 3: User Research",
        objective: "Know your users",
        items: [
          "Qualitative vs Quantitative Research",
          "User Interviews & Surveys",
          "Personas & Empathy Maps",
          "User Journey Mapping",
          "Affinity Diagrams",
        ],
      },
      {
        title: "MODULE 4: Wireframing & Prototyping",
        objective: "Bring ideas to life",
        items: [
          "Low-fidelity Wireframes",
          "High-fidelity Mockups",
          "Interactive Prototypes in Figma",
          "Clickable Flows",
          "Usability Testing Basics",
        ],
      },
      {
        title: "MODULE 5: Figma Mastery",
        objective: "Master the industry tool",
        items: [
          "Figma Interface & Components",
          "Auto Layout & Constraints",
          "Design Systems & Tokens",
          "Collaborative Design",
          "Handoff to Developers",
        ],
      },
      {
        title: "MODULES 6-9: Advanced UX & Portfolio",
        objective: "Land a design job",
        items: [
          "Information Architecture",
          "Accessibility (WCAG Standards)",
          "Motion & Micro-interactions",
          "Mobile-first & Responsive Design",
          "Case Study Writing",
          "Portfolio Building",
          "Design Reviews & Critique",
          "Interview Preparation",
        ],
      },
    ],
    tools: [
      "Figma",
      "Adobe XD",
      "InVision",
      "Notion",
      "Miro",
      "Maze (User Testing)",
      "Zeplin",
    ],
    projects: [
      "Mobile App Redesign",
      "E-commerce Website UI",
      "Dashboard Design",
      "Design System Creation",
      "End-to-End UX Case Study",
    ],
  },

  {
    id: "cc",
    icon: <TbCloudComputing />,
    title: "Cloud Computing",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Cloud Computing",
        items: [
          "What is Cloud Computing?",
          "Types: IaaS, PaaS, SaaS",
          "Public, Private & Hybrid Cloud",
          "Cloud Providers Overview",
          "Cloud Architecture Basics",
        ],
      },
      {
        title: "MODULE 2: AWS Core Services",
        items: [
          "AWS Console & IAM",
          "EC2 (Virtual Machines)",
          "S3 (Storage Buckets)",
          "RDS (Managed Databases)",
          "VPC & Networking Basics",
        ],
      },
      {
        title: "MODULE 3: Microsoft Azure",
        items: [
          "Azure Portal & Subscriptions",
          "Azure Virtual Machines",
          "Azure Blob Storage",
          "Azure App Service",
          "Azure AD & Security",
        ],
      },
      {
        title: "MODULE 4: Google Cloud Platform",
        items: [
          "GCP Console & Projects",
          "Compute Engine & GKE",
          "Cloud Storage & BigQuery",
          "Firebase & Firestore",
          "GCP IAM & Billing",
        ],
      },
      {
        title: "MODULE 5: DevOps & CI/CD",
        items: [
          "What is DevOps?",
          "Docker & Containerization",
          "Kubernetes Basics",
          "CI/CD Pipelines (GitHub Actions)",
          "Infrastructure as Code (Terraform)",
        ],
      },
      {
        title: "MODULES 6-9: Advanced Cloud & Certification Prep",
        items: [
          "Serverless Computing (Lambda, Functions)",
          "Cloud Security & Compliance",
          "Cost Optimization Strategies",
          "Monitoring & Logging (CloudWatch)",
          "AWS Solutions Architect Prep",
          "Azure Fundamentals (AZ-900)",
          "Real-world Cloud Projects",
          "Interview Preparation",
        ],
      },
    ],
    tools: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Linux CLI",
    ],
    projects: [
      "Static Website on S3",
      "Scalable App on EC2",
      "Serverless API with Lambda",
      "Containerized App with Docker",
      "Multi-cloud Deployment Project",
    ],
  },

  {
    id: "ai",
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    subtitle: "",
    badge: "🚀 Trending",
    modules: [
      {
        title: "MODULE 1: Introduction to AI",
        items: [
          "What is AI?",
          "History & Evolution of AI",
          "Types of AI (Narrow, General, Super)",
          "AI vs ML vs Deep Learning",
          "Real-world Applications",
          "Ethical Concerns in AI",
        ],
      },
      {
        title: "MODULE 2: Python for AI",
        items: [
          "Python Refresher",
          "NumPy & Pandas for AI",
          "Data Visualization",
          "Environment Setup (Anaconda, Colab)",
          "Jupyter Notebooks for AI",
        ],
      },
      {
        title: "MODULE 3: Search & Problem Solving",
        items: [
          "State Space Search",
          "BFS & DFS Algorithms",
          "A* Algorithm",
          "Heuristic Search",
          "Game Trees & Minimax",
        ],
      },
      {
        title: "MODULE 4: Knowledge Representation",
        items: [
          "Logic & Propositional Calculus",
          "First-Order Logic",
          "Semantic Networks",
          "Ontologies & Knowledge Graphs",
          "Expert Systems",
        ],
      },
      {
        title: "MODULES 5-8: Machine Learning for AI",
        items: [
          "Supervised & Unsupervised Learning",
          "Feature Engineering",
          "Model Evaluation & Tuning",
          "SVM, KNN, Decision Trees",
          "Ensemble Methods",
          "Recommendation Systems",
          "Time Series Forecasting",
          "AutoML Tools",
        ],
      },
      {
        title: "MODULES 9-12: Generative AI & LLMs",
        items: [
          "Transformer Architecture",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "LangChain & RAG",
          "AI Agents & Tools",
          "Responsible AI",
          "AI in Industry & Capstone",
        ],
      },
    ],
    tools: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
      "LangChain",
      "HuggingFace",
      "Google Colab",
      "Jupyter",
    ],
    projects: [
      "AI Chatbot",
      "Image Recognition System",
      "Recommendation Engine",
      "Fraud Detection Model",
      "LLM-Powered App",
      "AI Agent Automation",
    ],
  },

  {
    id: "mad",
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Mobile Development",
        items: [
          "Native vs Cross-platform vs Hybrid",
          "iOS vs Android Overview",
          "App Development Life Cycle",
          "App Store & Play Store Guidelines",
          "Tools & Environment Setup",
        ],
      },
      {
        title: "MODULE 2: React Native Fundamentals",
        items: [
          "React Native Architecture",
          "JSX & Components",
          "State & Props",
          "Navigation (React Navigation)",
          "Styling with StyleSheet",
        ],
      },
      {
        title: "MODULE 3: Core Mobile UI Components",
        items: [
          "FlatList & ScrollView",
          "TextInput & Forms",
          "Modal & Alerts",
          "Bottom Tabs & Drawer Navigation",
          "Responsive Layouts",
        ],
      },
      {
        title: "MODULE 4: State Management",
        items: [
          "useState & useEffect Hooks",
          "Context API",
          "Redux Toolkit",
          "Async Storage",
          "Data Fetching with Axios",
        ],
      },
      {
        title: "MODULE 5: Backend Integration",
        items: [
          "REST API Integration",
          "Firebase Realtime Database",
          "Firebase Authentication",
          "Push Notifications (FCM)",
          "File Upload & Media Handling",
        ],
      },
      {
        title: "MODULES 6-10: Advanced & Deployment",
        items: [
          "Maps & Geolocation",
          "Camera & Gallery Access",
          "In-App Purchases",
          "App Performance Optimization",
          "Testing (Jest, Detox)",
          "Publishing to Play Store",
          "Publishing to App Store",
          "CI/CD for Mobile",
          "Capstone Project",
          "Interview Preparation",
        ],
      },
    ],
    tools: [
      "React Native",
      "Expo",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Redux",
      "VS Code",
      "Postman",
      "Git & GitHub",
    ],
    projects: [
      "Todo App",
      "E-commerce Mobile App",
      "Chat Application",
      "Food Delivery UI Clone",
      "Full-stack Mobile App with Auth",
    ],
  },

  {
    id: "ANIM",
    icon: <IoPlayCircleSharp />,
    title: "Adobe Animate",
    subtitle: "3 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Animation & Interface",
        items: [
          "What is Animation & Its Types (2D, 3D, Motion Graphics)",
          "Applications of Animation",
          "Adobe Animate Workspace & Tools",
          "Timeline & Layers",
          "Drawing Tools — Shapes, Vector Drawing",
          "Working with Colors & Strokes",
        ],
      },
      {
        title: "MODULE 2: Timeline & Frame Animation",
        items: [
          "Frames, Keyframes & Frame-by-Frame Animation",
          "Creating Motion Animation",
          "Position, Scale & Rotation Animation",
          "Shape Tweening & Morphing",
          "Creating Transformation Effects",
        ],
      },
      {
        title: "MODULE 3: Symbols & Animation Techniques",
        items: [
          "Graphic, Button & Movie Clip Symbols",
          "Library Management",
          "Easing & Motion Paths",
          "Masking Techniques",
          "Creating Simple Characters",
          "Basic Character Movement",
        ],
      },
      {
        title: "MODULE 4: Interactive Animation (Basic)",
        items: [
          "Buttons & Navigation Basics",
          "Basic Interaction Concepts",
          "Controlling Animation Flow",
          "Scene Management",
          "Simple Interactive & Click-Based Elements",
        ],
      },
      {
        title: "MODULE 5: Sound & Multimedia Integration",
        items: [
          "Importing Audio & Syncing Sound with Animation",
          "Working with Images & Video",
          "Exporting Animated Content",
          "Animated Story with Sound Project",
        ],
      },
      {
        title: "MODULE 6: Real Projects & Creative Work",
        items: [
          "Animated Advertisements",
          "Educational & Social Media Animations",
          "Storyboarding & Planning Animation Sequences",
          "Visual Storytelling",
          "Exporting Animations (GIF, Video)",
          "Optimizing Animations for Web",
        ],
      },
      {
        title: "MODULE 7: Portfolio & Career Guidance",
        items: [
          "Showcasing Animation Work",
          "Building Demo Reels",
          "Career Paths — Animator, Motion Graphics Designer, Freelancer",
          "Finding Animation Clients",
          "Pricing Animation Projects",
          "Demo Reel Creation & Portfolio Presentation",
        ],
      },
    ],
    tools: ["Adobe Animate"],
    projects: [
      "Ball Bouncing & Simple Motion Animation",
      "Character Animation & Masking Project",
      "Interactive Banner & Click-Based Animation",
      "Animated Story with Sound",
      "Complete Animation Project (Ad / Educational)",
      "Demo Reel & Portfolio Presentation",
    ],
  },

  {
    id: "mso",
    icon: <FaMicrosoft />,
    title: "Microsoft Office",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Microsoft Office Suite",
        items: [
          "Overview of MS Office Applications",
          "MS Office Interface & Navigation",
          "File Management & Cloud Sync (OneDrive)",
          "Keyboard Shortcuts & Productivity Tips",
          "Office 365 vs Desktop Version",
        ],
      },
      {
        title: "MODULE 2: Microsoft Word (Advanced)",
        items: [
          "Document Formatting & Styles",
          "Tables, Images & SmartArt",
          "Mail Merge",
          "Track Changes & Comments",
          "Table of Contents & Indexing",
          "Templates & Macros Basics",
        ],
      },
      {
        title: "MODULE 3: Microsoft Excel (Professional)",
        items: [
          "Advanced Formulas & Functions",
          "Pivot Tables & Charts",
          "Data Validation & Conditional Formatting",
          "VLOOKUP, HLOOKUP, INDEX-MATCH",
          "Data Sorting, Filtering & Slicers",
        ],
      },
      {
        title: "MODULE 4: Microsoft PowerPoint (Advanced)",
        items: [
          "Slide Design & Layouts",
          "Custom Animations & Transitions",
          "Embedding Media (Audio/Video)",
          "Presenter Mode & Speaker Notes",
          "Exporting & Sharing Presentations",
        ],
      },
      {
        title: "MODULE 5: Microsoft Outlook",
        items: [
          "Email Management & Folders",
          "Calendar & Scheduling Meetings",
          "Tasks & Reminders",
          "Contacts & Address Book",
          "Out-of-Office & Email Rules",
        ],
      },
      {
        title: "MODULE 6: Microsoft Teams & OneNote",
        items: [
          "MS Teams Channels & Meetings",
          "File Sharing & Collaboration",
          "OneNote for Note-taking",
          "Task Management with Planner",
          "Integration with Office Apps",
        ],
      },
      {
        title: "MODULE 7: Capstone & Certification Prep",
        items: [
          "Real-world Office Projects",
          "MOS (Microsoft Office Specialist) Exam Prep",
          "Portfolio of Work",
          "Interview Tips for Office Skills",
          "Final Assessment",
        ],
      },
    ],
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Outlook",
      "Microsoft Teams",
      "OneNote",
      "OneDrive",
    ],
    projects: [
      "Professional Report in Word",
      "Data Dashboard in Excel",
      "Corporate Presentation in PowerPoint",
      "Email Campaign in Outlook",
      "Team Collaboration Project",
    ],
  },

  {
    id: "GD",
    icon: <MdGraphicEq />,
    title: "Graphic Designing",
    subtitle: "4 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Design Fundamentals & Visual Thinking",
        items: [
          "What Graphic Design Actually Is",
          "Role of a Designer in Business",
          "Types of Design (Print, Digital, Branding)",
          "Color Theory (Psychology of Colors)",
          "Typography Basics",
          "Layout, Composition & Visual Hierarchy",
          "How to Generate Design Ideas",
          "Understanding Client Requirements",
          "Converting Ideas into Visuals",
        ],
      },
      {
        title: "MODULE 2: Adobe Photoshop (Image Editing & Raster Design)",
        items: [
          "Interface, Tools & Working with Layers",
          "Image Resizing & Cropping",
          "Color Correction & Background Removal",
          "Image Enhancement & Retouching",
          "Poster & Banner Design",
          "Social Media Creatives",
          "Manipulation Basics",
        ],
      },
      {
        title: "MODULE 3: Adobe Illustrator (Vector Design & Branding)",
        items: [
          "Interface, Tools & Working with Shapes",
          "Pen Tool Mastery",
          "Logo Types & Concepts",
          "Creating Vector Logos",
          "Brand Identity Basics",
          "Icons & Illustrations",
          "Business Cards & Stationery Design",
        ],
      },
      {
        title: "MODULE 4: CorelDRAW / Canva (Practical Design Tools)",
        items: [
          "Layout Design for Print Media",
          "Working with Text & Objects in CorelDRAW",
          "Creating Fast Social Media Designs in Canva",
          "Templates & Brand Kits",
          "Brochures, Flyers & Banners",
          "Preparing Files for Printing",
        ],
      },
      {
        title: "MODULE 5: Branding & Advertising Design",
        items: [
          "Logo Systems & Brand Guidelines",
          "Color & Typography Consistency",
          "Designing for Marketing Campaigns",
          "Social Media Ads",
          "Visual Storytelling",
          "UI Basics — Layout for Web/App Screens (Optional)",
        ],
      },
      {
        title: "MODULE 6: Portfolio Development & Real Projects",
        items: [
          "Selecting Best Work for Portfolio",
          "Presenting Designs Professionally",
          "Understanding Client Briefs",
          "Delivering Client-Ready Designs",
          "Finding Clients as a Freelancer",
          "Pricing & Negotiation Basics",
        ],
      },
      {
        title: "MODULE 7: Career Preparation",
        items: [
          "Creating a Designer Resume",
          "Building Online Portfolio (Behance, etc.)",
          "Design Interview Questions",
          "Presenting Your Work in Interviews",
          "Career Paths — Graphic Designer, UI Designer, Freelancer",
          "Portfolio Presentation & Mock Interviews",
        ],
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Canva",
      "Behance (Portfolio)",
    ],
    projects: [
      "Social Media Post & Poster Design (Photoshop)",
      "Logo Design & Business Card (Illustrator)",
      "Flyer & Brochure Design (CorelDRAW)",
      "Social Media Ad Campaign",
      "Brand Identity Project",
      "Final Portfolio Presentation & Mock Interview",
    ],
  },

  {
    id: "ANIM2D3D",
    icon: <IoFilmSharp />,
    title: "2D & 3D Animation",
    subtitle: "6 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Fundamentals of Animation & Visual Storytelling",
        items: [
          "Squash & Stretch, Timing & Spacing",
          "Anticipation & Follow-Through",
          "Storyboarding & Scene Planning",
          "Visual Narrative Basics",
          "Differences Between 2D & 3D Animation",
          "Industry Use Cases & Applications",
        ],
      },
      {
        title: "MODULE 2: 2D Animation using Adobe Animate",
        items: [
          "Workspace, Timeline & Drawing Tools",
          "Shapes & Vector Drawing",
          "Frame-by-Frame Animation",
          "Motion & Shape Tweening",
          "Simple Character Design",
          "Basic Movements & Expressions",
        ],
      },
      {
        title: "MODULE 3: 2D Advanced Animation & Motion Design",
        items: [
          "Masking, Layering & Smooth Transitions",
          "Easing Techniques",
          "Animated Text & Motion Graphics",
          "Social Media Animation",
          "Adding Audio & Syncing Sound with Visuals",
        ],
      },
      {
        title: "MODULE 4: 3D Animation using Blender (Modeling & Texturing)",
        items: [
          "Blender Interface, Navigation & Object Manipulation",
          "Hard Surface & Basic Character Modeling",
          "Applying Materials & Textures",
          "Scene Lighting Setup",
        ],
      },
      {
        title: "MODULE 5: 3D Animation & Rigging",
        items: [
          "Keyframe Animation & Timeline Control",
          "Object Animation & Motion Control",
          "Creating Skeleton Structures (Rigging)",
          "Binding Models for Animation",
          "Walk Cycles & Basic Character Actions",
        ],
      },
      {
        title: "MODULE 6: Rendering & Final Output",
        items: [
          "Eevee vs Cycles — Rendering Techniques",
          "Render Settings Optimization",
          "Camera Angles & Cinematic Presentation",
          "Scene Composition",
          "Video Formats & Output Quality Settings",
        ],
      },
      {
        title: "MODULE 7: Real Projects & Portfolio Development",
        items: [
          "2D Animated Short Video",
          "3D Product Animation",
          "Combined 2D + 3D Animation Project",
          "Showreel Development",
          "Animation for Ads, Films & Social Media",
          "Understanding Client Requirements",
        ],
      },
      {
        title: "MODULE 8: Career & Freelancing Preparation",
        items: [
          "Career Paths — Animator (2D/3D), Motion Graphics Designer, Video Creator",
          "Finding Animation Projects & Freelancing",
          "Pricing & Negotiation",
          "Introduction to After Effects & Maya",
          "Portfolio Presentation & Mock Client Pitch",
        ],
      },
    ],
    tools: ["Adobe Animate", "Blender"],
    projects: [
      "Storyboard Creation & Basic Animation Exercises",
      "Bouncing Ball & Short 2D Animation Clip",
      "Animated Advertisement & Motion Graphic Video",
      "Product Model & Textured 3D Scene",
      "Product Animation & Character Animation Clip",
      "Final Animation Render & Scene Presentation",
      "Demo Reel & Portfolio Presentation",
    ],
  },
];

const advanceSpecializationCourses = [
  {
    id: "AEF",
    icon: <IoStarSharp />,
    title: "Adobe After Effects (VFX & Motion Graphics)",
    subtitle: "3–4 Months Program",
    badge: "🚀 Trending",
    modules: [
      {
        title: "MODULE 1: Introduction to After Effects & Motion Basics",
        items: [
          "What is VFX & Motion Design",
          "Applications — Films, Ads, YouTube, Reels",
          "After Effects Workspace, Panels & Composition",
          "Timeline Basics",
          "Understanding Layers & Basic Keyframe Animation",
        ],
      },
      {
        title: "MODULE 2: Motion Graphics & Text Animation",
        items: [
          "Animated Titles & Kinetic Typography",
          "Working with Shapes & Motion Design Basics",
          "Easing & Smooth Animations",
          "Speed Curves & Motion Principles",
        ],
      },
      {
        title: "MODULE 3: Visual Effects (VFX Basics)",
        items: [
          "Green Screen (Chroma Key) — Background Removal & Scene Replacement",
          "Masking & Rotoscoping — Cutting Objects from Video",
          "Frame-by-Frame Editing",
          "Motion Tracking",
          "Attaching Elements to Moving Objects",
        ],
      },
      {
        title: "MODULE 4: Advanced Effects & Compositing",
        items: [
          "Combining Multiple Layers & Scene Integration",
          "Using Built-in Effects & Creating Custom Effects",
          "Glows, Shadows & Light Effects",
          "Cinematic Transitions",
        ],
      },
      {
        title: "MODULE 5: Color, Lighting & Cinematic Look",
        items: [
          "Adjusting Exposure, Contrast & Matching Clips",
          "Creating Cinematic Tones & Using LUTs",
          "Adding Artificial Light & Creating Visual Mood",
        ],
      },
      {
        title: "MODULE 6: Advanced Motion & Animation Techniques",
        items: [
          "Expressions — Automating Animations & Linking Properties",
          "Advanced Smooth & Creative Transitions",
          "Scene Flow Design",
          "Working in 3D Space & Camera Movement",
        ],
      },
      {
        title: "MODULE 7: Real Projects & Portfolio Development",
        items: [
          "YouTube Intro / Outro Design",
          "Instagram Reel Effects",
          "Promotional Video Production",
          "Motion Graphics & VFX-Based Content",
          "Showreel Development & Professional Presentation",
        ],
      },
      {
        title: "MODULE 8: Career & Freelancing Preparation",
        items: [
          "Career Paths — Motion Graphics Designer, VFX Artist, Advanced Video Editor",
          "Finding Clients & Pricing VFX Work",
          "Working with Premiere Pro & Project Pipeline",
          "Portfolio Presentation & Client Simulation",
        ],
      },
    ],
    tools: ["Adobe After Effects"],
    projects: [
      "Simple Animation & Moving Objects on Timeline",
      "Animated Title Video & Motion Graphic Project",
      "Green Screen Project & Object Tracking",
      "VFX Scene Creation & Cinematic Edit",
      "Cinematic Color Grading & Lighting Enhancement",
      "Advanced Animation & Transition Design",
      "Final VFX Project — YouTube / Reel / Promo",
      "Demo Reel & Portfolio Presentation",
    ],
  },

  {
    id: "FILMORA",
    icon: <IoPlaySharp />,
    title: "Filmora Video Editing Course",
    subtitle: "2 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Video Editing & Filmora Interface",
        items: [
          "What is Video Editing & Types of Content (YouTube, Reels, Ads)",
          "Understanding Resolution & Formats",
          "Filmora Workspace, Tools & Timeline Basics",
          "Adding Videos, Images & Audio",
          "Project Setup & Media Organization",
        ],
      },
      {
        title: "MODULE 2: Basic Editing Techniques",
        items: [
          "Cutting, Trimming & Splitting Clips",
          "Arranging Sequences on Timeline",
          "Applying Smooth Transitions (Without Overuse)",
          "Speed Control — Slow & Fast Motion",
          "Cropping & Resizing Clips",
        ],
      },
      {
        title: "MODULE 3: Effects, Titles & Creative Editing",
        items: [
          "Adding Titles, Captions & Lower Thirds",
          "Using Built-in Effects & Color Filters",
          "Stickers & Visual Overlays",
          "Enhancing Storytelling with Visual Elements",
        ],
      },
      {
        title: "MODULE 4: Audio Editing & Background Music",
        items: [
          "Adjusting Volume Levels & Noise Removal",
          "Adding & Syncing Background Music",
          "Matching Music Mood with Visuals",
          "Recording & Editing Voice-Over",
        ],
      },
      {
        title: "MODULE 5: Color & Visual Enhancement",
        items: [
          "Adjusting Brightness, Contrast & Exposure",
          "Applying Color Filters & Visual Mood Effects",
          "Matching Colors Across Clips for Consistency",
        ],
      },
      {
        title: "MODULE 6: Exporting & Content Optimization",
        items: [
          "Export Settings — Resolution & Formats",
          "Optimizing for YouTube & Social Media",
          "File Compression — Quality vs Size Balance",
          "Platform-Specific Editing — Instagram, YouTube, Shorts",
        ],
      },
      {
        title: "MODULE 7: Real Projects & Portfolio Development",
        items: [
          "YouTube Video Editing",
          "Instagram Reel Editing",
          "Promotional Video Production",
          "Vlogs, Short-Form & Business Promotion Content",
          "Selecting Best Videos & Creating Demo Reel",
        ],
      },
      {
        title: "MODULE 8: Freelancing & Career Guidance",
        items: [
          "Finding Clients — YouTubers & Local Businesses",
          "Pricing Editing Services",
          "In-Demand Video Types & Short-Form Content Trends",
          "Growth Path — Moving from Filmora to Advanced Tools",
          "Client Simulation & Portfolio Presentation",
        ],
      },
    ],
    tools: ["Wondershare Filmora"],
    projects: [
      "First Project — Importing & Arranging Clips",
      "Basic Video Edit & YouTube-Style Video",
      "Social Media Reel & Creative Short Video",
      "Voice-Over Project & Audio Sync Exercise",
      "Color Correction & Visual Enhancement",
      "Exporting Videos for Multiple Platforms",
      "Final Project — YouTube / Reel / Promo Video",
      "Demo Reel & Portfolio Presentation",
    ],
  },

  {
    id: "PPRO",
    icon: <IoVideocamSharp />,
    title: "Adobe Premiere Pro Video Editing Course",
    subtitle: "3 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Video Editing & Interface",
        items: [
          "What is Video Editing & Types of Edits (Cut, Jump Cut, Montage)",
          "Understanding Video Formats & Resolution",
          "Premiere Pro Workspace, Panels & Timeline",
          "Sequence Settings",
          "Importing & Organizing Media",
          "Project Structure & File Management",
        ],
      },
      {
        title: "MODULE 2: Basic Editing Techniques",
        items: [
          "Cutting, Trimming & Splitting Clips",
          "Ripple Edit & Rolling Edit",
          "Arranging Clips & Maintaining Continuity",
          "Applying Basic Transitions",
          "Smooth Scene Changes",
        ],
      },
      {
        title: "MODULE 3: Audio Editing & Sound Design",
        items: [
          "Audio Levels, Balancing & Background Noise Removal",
          "Adding Music & Sound Effects",
          "Syncing Audio with Video",
          "Recording & Editing Voice-Over",
        ],
      },
      {
        title: "MODULE 4: Color Correction & Grading",
        items: [
          "Adjusting Brightness, Contrast & Exposure",
          "Creating Cinematic Looks",
          "Using LUTs (Look-Up Tables)",
          "Matching Colors Across Clips for Visual Consistency",
        ],
      },
      {
        title: "MODULE 5: Titles, Effects & Motion Basics",
        items: [
          "Creating Titles, Captions & Lower Thirds",
          "Applying Video Effects & Presets",
          "Basic Motion Effects",
          "Keyframe Animation — Text & Elements",
          "Smooth Animated Transitions",
        ],
      },
      {
        title: "MODULE 6: Advanced Editing & Workflow",
        items: [
          "Multi-Camera Editing & Syncing Clips",
          "Slow Motion, Fast Motion & Time Remapping",
          "Keyboard Shortcuts for Efficiency",
          "Project Organization Techniques",
        ],
      },
      {
        title: "MODULE 7: Real Projects & Portfolio Development",
        items: [
          "YouTube Video Editing",
          "Instagram Reel Editing",
          "Promotional Video Production",
          "Vlogs, Corporate Videos & Short-Form Content",
          "Selecting Best Edits & Showreel Creation",
        ],
      },
      {
        title: "MODULE 8: Career & Freelancing Preparation",
        items: [
          "Career Paths — Video Editor, Content Creator, Social Media Editor",
          "Finding Clients — YouTube & Instagram Creators",
          "Pricing Editing Work",
          "Introduction to After Effects for Motion Graphics",
          "Portfolio Presentation & Client Pitch Simulation",
        ],
      },
    ],
    tools: ["Adobe Premiere Pro"],
    projects: [
      "First Sequence & Footage Import",
      "Simple Video Edit & Short Sequence",
      "Audio Enhancement & Music Integration",
      "Color Correction & Cinematic Grading",
      "Title Animation & Social Media Video",
      "Multi-Camera Edit & Speed Ramping",
      "Final Video Project (YouTube / Promo / Reel)",
      "Showreel & Portfolio Presentation",
    ],
  },

  {
    id: "MAYA",
    icon: <IoSparklesSharp />,
    title: "Maya 3D Animation",
    subtitle: "6 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to 3D & Maya Interface",
        items: [
          "Applications — Films, VFX, Games, Ads",
          "Production Pipeline Overview",
          "Maya Workspace, Navigation & Viewports",
          "Tools Overview",
          "Move, Rotate & Scale Objects",
          "Working with Primitives",
        ],
      },
      {
        title: "MODULE 2: 3D Modeling",
        items: [
          "Vertices, Edges & Faces",
          "Mesh Editing Tools",
          "Hard Surface Modeling — Products & Environments",
          "Precision Modeling Techniques",
          "Simple Character Modeling (Organic)",
          "Sculpting Introduction",
        ],
      },
      {
        title: "MODULE 3: Texturing, Materials & Lighting",
        items: [
          "Assigning Materials & Shading Networks",
          "UV Unwrapping & UV Mapping",
          "Applying Textures to Models",
          "Types of Lights in Maya",
          "Creating Realistic Lighting for Scenes",
        ],
      },
      {
        title: "MODULE 4: Rigging",
        items: [
          "Creating Skeleton (Joints)",
          "Binding Models to Rigs",
          "Creating Animation Controls",
          "IK / FK Systems",
          "Smooth Skinning & Fixing Deformation Issues",
        ],
      },
      {
        title: "MODULE 5: Animation Principles & Execution",
        items: [
          "Keyframes, Timeline & Graph Editor",
          "Timing & Spacing",
          "Squash & Stretch, Anticipation, Follow-Through",
          "Walk Cycle Animation",
          "Facial Expressions & Acting Basics",
        ],
      },
      {
        title: "MODULE 6: Dynamics & Effects (Basic)",
        items: [
          "Rigid Body Simulation — Gravity & Collisions",
          "Particle Effects — Smoke & Fire Basics",
          "Simple Effects Animation",
          "Cloth & Hair Simulation Basics",
        ],
      },
      {
        title: "MODULE 7: Rendering & Final Output",
        items: [
          "Arnold Renderer Basics & Render Settings",
          "Scene Optimization — Quality & Render Time",
          "Image & Video Rendering",
          "File Formats & Export Settings",
        ],
      },
      {
        title: "MODULE 8: Projects & Portfolio Development",
        items: [
          "Product Animation Project",
          "Short Animated Scene",
          "Character Animation Project",
          "Showreel — Compiling & Presenting Best Work",
          "Understanding Studio Pipeline",
          "Team-Based Production Basics",
        ],
      },
      {
        title: "MODULE 9: Career & Industry Preparation",
        items: [
          "Career Paths — 3D Animator, Character Animator, VFX Artist",
          "Finding Freelance Projects & Pricing Work",
          "Portfolio Presentation for Interviews",
          "Technical Interview Questions",
          "Mock Interviews & Portfolio Review",
        ],
      },
    ],
    tools: ["Autodesk Maya", "Arnold Renderer"],
    projects: [
      "Basic Object Creation & Scene Navigation",
      "Product Model & Basic Character Model",
      "Textured Object & Lighting Setup",
      "Character Rig Setup & Testing",
      "Bouncing Ball & Walk Cycle Animation",
      "Physics Simulation & Effects Animation",
      "Final Rendered Scene & Animation Export",
      "Demo Reel & Portfolio Presentation",
    ],
  },

  {
    id: "UIUX",
    icon: <IoPhonePortraitSharp />,
    title: "UI/UX Design (Figma Advanced Tool)",
    subtitle: "4 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: UX Fundamentals & Design Thinking",
        items: [
          "Difference Between UI and UX",
          "Role of a UI/UX Designer",
          "Product vs Visual Design",
          "Design Thinking Process — Empathize, Define, Ideate, Prototype, Test",
          "Understanding User Problems & Problem-Solving Mindset",
          "User Personas & User Journeys",
          "Pain Point Identification",
        ],
      },
      {
        title: "MODULE 2: Wireframing & Information Architecture",
        items: [
          "Organizing Content Logically",
          "Navigation Structure",
          "Low-Fidelity Wireframes & Layout Planning",
          "Mapping User Journeys",
          "Task Flow Design",
        ],
      },
      {
        title: "MODULE 3: Figma Tool Mastery",
        items: [
          "Interface, Tools, Frames & Layouts",
          "Creating Reusable Components",
          "Styles — Colors & Typography Systems",
          "Auto Layout & Constraints",
          "Responsive Design in Figma",
          "Prototyping Basics",
        ],
      },
      {
        title: "MODULE 4: UI Design Principles",
        items: [
          "Typography, Readability & Color Systems",
          "Contrast, Spacing & Alignment",
          "Mobile App Design",
          "Web Design Basics",
          "Designing for Usability & Accessibility",
          "Basic Accessibility Principles",
        ],
      },
      {
        title: "MODULE 5: Prototyping & Interaction Design",
        items: [
          "Linking Screens & Navigation Flow",
          "Button States & Micro Interactions",
          "Animations & Transitions",
          "Usability Testing Basics",
          "Testing Prototypes & Collecting Feedback",
        ],
      },
      {
        title: "MODULE 6: Real Projects & Case Studies",
        items: [
          "E-commerce App Design Project",
          "Banking / Service App Design Project",
          "Case Study — Problem → Solution → Result",
          "Documenting the Design Process",
          "Structuring & Presenting Portfolio Work Professionally",
        ],
      },
      {
        title: "MODULE 7: Career & Freelancing Preparation",
        items: [
          "UI/UX Portfolio Building",
          "Creating Behance / Dribbble Profiles",
          "UI/UX Interview Questions",
          "Portfolio Presentation Practice",
          "Finding Freelance Clients",
          "Pricing UI/UX Projects",
          "Mock Interviews & Portfolio Presentation",
        ],
      },
    ],
    tools: [
      "Figma",
      "FigJam",
      "Adobe Photoshop (Basic, Optional)",
      "Behance / Dribbble (Portfolio)",
    ],
    projects: [
      "User Persona & Problem-Solving Case Study",
      "Wireframe & User Flow Design",
      "App Screen & Component System (Figma)",
      "Mobile App UI + Website Landing Page",
      "Clickable App Prototype",
      "Full App Design Project & Case Study Documentation",
      "Portfolio Presentation & Mock Interview",
    ],
  },

  {
    id: "BA",
    icon: <LiaBusinessTimeSolid />,
    title: "Business Analyst",
    subtitle: "4 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Fundamentals of Business Analysis",
        items: [
          "Role of a Business Analyst",
          "Business vs Data vs System Analyst",
          "Real-world Responsibilities",
          "Understanding Business Workflows",
          "Identifying Problems & Inefficiencies",
          "Process Mapping Basics",
          "Types of Requirements (Functional, Non-functional)",
          "Stakeholder Identification",
          "Requirement Elicitation Techniques",
        ],
      },
      {
        title: "MODULE 2: Excel for Business Analysis",
        items: [
          "Lookup Functions (VLOOKUP, XLOOKUP)",
          "Logical Functions (IF, Nested IF)",
          "Data Cleaning Techniques",
          "Pivot Tables & Pivot Charts",
          "Conditional Formatting & Data Validation",
          "Creating Interactive Dashboards",
          "Data Visualization Basics",
        ],
      },
      {
        title: "MODULE 3: SQL for Data Analysis",
        items: [
          "Tables, Rows, Columns & Relational Database Concepts",
          "SELECT, WHERE, ORDER BY",
          "JOIN Operations",
          "Aggregations (SUM, COUNT, AVG)",
          "Writing Queries for Business Insights",
          "Filtering & Grouping Data",
        ],
      },
      {
        title: "MODULE 4: Data Visualization (Power BI / Tableau)",
        items: [
          "Importance of Visual Storytelling",
          "Choosing the Right Charts",
          "Importing Data in Power BI / Tableau",
          "Creating Reports & Dashboards",
          "Filters, Slicers & Interactive Dashboards",
          "Data Storytelling Techniques",
        ],
      },
      {
        title: "MODULE 5: Business Analysis Tools & Techniques",
        items: [
          "BRD (Business Requirement Document)",
          "FRD (Functional Requirement Document)",
          "Flowcharts & Process Diagrams",
          "Use Case Diagrams",
          "Agile Methodology Basics",
          "Scrum Framework",
          "Role of BA in Agile Teams",
        ],
      },
      {
        title: "MODULE 6: Basic Python for Data Analysis (Optional)",
        items: [
          "Variables & Data Types",
          "Working with Datasets",
          "Introduction to Pandas",
          "Basic Data Manipulation",
          "Simple Data Analysis Scripts",
          "Data Cleaning Using Python",
        ],
      },
      {
        title: "MODULE 7: Domain Knowledge & Case Studies",
        items: [
          "Banking & Finance Use Cases",
          "E-commerce Use Cases",
          "Operations & Supply Chain Use Cases",
          "Root Cause Analysis",
          "SWOT Analysis",
          "Decision-Making Models",
        ],
      },
      {
        title: "MODULE 8: Capstone Project & Career Preparation",
        items: [
          "End-to-End Business Analysis Project",
          "Data Collection → Analysis → Reporting",
          "Creating a Strong BA Resume",
          "Building Project Portfolio",
          "Common BA Interview Questions",
          "Case-based Interview Practice",
          "Final Project Presentation & Mock Interviews",
        ],
      },
    ],
    tools: [
      "Microsoft Excel",
      "SQL (MySQL / PostgreSQL)",
      "Power BI",
      "Tableau",
      "Basic Python (Pandas)",
      "Documentation Tools (BRD/FRD)",
    ],
    projects: [
      "Sales Dashboard (Excel)",
      "Business Data Extraction (SQL)",
      "Business Performance Dashboard (Power BI)",
      "BRD & FRD Documentation",
      "End-to-End Capstone Project",
      "Mock Interview & Portfolio Review",
    ],
  },

  {
    id: "PD",
    icon: <IoManSharp />,
    title: "Personality Development",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Personality Development",
        items: [
          "What is Personality?",
          "Types of Personality (MBTI, Big Five)",
          "Self-Awareness & Self-Assessment",
          "Growth Mindset vs Fixed Mindset",
          "Setting Personal Goals",
        ],
      },
      {
        title: "MODULE 2: Communication Skills",
        items: [
          "Verbal & Non-verbal Communication",
          "Active Listening Skills",
          "Clarity & Conciseness in Speech",
          "Tone, Pace & Body Language",
          "Overcoming Communication Barriers",
        ],
      },
      {
        title: "MODULE 3: Confidence & Public Speaking",
        items: [
          "Building Self-Confidence",
          "Overcoming Stage Fear",
          "Presentation Skills",
          "Impromptu Speaking Techniques",
          "Voice Modulation & Eye Contact",
        ],
      },
      {
        title: "MODULE 4: Emotional Intelligence",
        items: [
          "What is EQ vs IQ?",
          "Self-regulation & Empathy",
          "Managing Stress & Anxiety",
          "Emotional Awareness in Workplace",
          "Building Positive Relationships",
        ],
      },
      {
        title: "MODULE 5: Leadership & Team Skills",
        items: [
          "Leadership Styles",
          "Team Building & Collaboration",
          "Conflict Resolution",
          "Decision Making Skills",
          "Motivating Others",
        ],
      },
      {
        title: "MODULE 6: Professional Etiquette",
        items: [
          "Corporate Etiquette & Grooming",
          "Email & Phone Etiquette",
          "Meeting & Interview Etiquette",
          "Networking Skills",
          "LinkedIn & Personal Branding",
        ],
      },
      {
        title: "MODULE 7-8: Goal Setting & Life Skills",
        items: [
          "SMART Goal Framework",
          "Time Management Techniques",
          "Habit Building (Atomic Habits)",
          "Positive Thinking & Attitude",
          "Work-Life Balance",
          "Resume & Interview Preparation",
        ],
      },
    ],
    tools: [
      "Zoom (Presentations)",
      "Canva (Personal Branding)",
      "LinkedIn",
      "Notion (Goal Tracking)",
      "Grammarly",
    ],
    projects: [
      "Personal Brand Portfolio",
      "Public Speaking Session",
      "Leadership Case Study",
      "30-Day Habit Challenge",
      "Mock Interview & Feedback",
    ],
  },

  {
    id: "se",
    icon: <SiGreatlearning />,
    title: "Spoken English",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Foundation of English Language",
        items: [
          "Parts of Speech",
          "Basic Sentence Structure",
          "Common Vocabulary Building",
          "Pronunciation Basics",
          "Phonetics & Sound System",
        ],
      },
      {
        title: "MODULE 2: Grammar for Speaking",
        items: [
          "Tenses (Present, Past, Future)",
          "Articles & Prepositions",
          "Modal Verbs",
          "Question Formation",
          "Common Grammar Mistakes to Avoid",
        ],
      },
      {
        title: "MODULE 3: Everyday Conversation",
        items: [
          "Greetings & Introductions",
          "Shopping, Travel & Restaurant Conversations",
          "Asking for Directions",
          "Telephone & Email Conversations",
          "Small Talk & Social Phrases",
        ],
      },
      {
        title: "MODULE 4: Vocabulary Enhancement",
        items: [
          "Synonyms, Antonyms & Homophones",
          "Idioms & Phrases",
          "Formal vs Informal Vocabulary",
          "Topic-based Word Lists",
          "Word Formation & Prefixes/Suffixes",
        ],
      },
      {
        title: "MODULE 5: Fluency & Pronunciation",
        items: [
          "Connected Speech Techniques",
          "Stress & Intonation Patterns",
          "Accent Reduction Basics",
          "Tongue Twisters & Drills",
          "Listening & Mimicking Native Speakers",
        ],
      },
      {
        title: "MODULE 6: Business English",
        items: [
          "Office & Workplace Communication",
          "Business Meetings & Presentations",
          "Email Writing in English",
          "Negotiation Language",
          "Job Interview in English",
        ],
      },
      {
        title: "MODULE 7-8: Advanced Speaking & Practice",
        items: [
          "Group Discussions & Debates",
          "Story Telling Techniques",
          "Extempore Speaking",
          "Reading Comprehension",
          "Role Plays & Real-world Scenarios",
          "Final Fluency Assessment",
        ],
      },
    ],
    tools: [
      "Google Meet / Zoom (Practice Sessions)",
      "Grammarly",
      "Google Translate",
      "BBC Learning English",
      "Duolingo",
    ],
    projects: [
      "Self-Introduction Video",
      "Business Email Writing Task",
      "Group Discussion Participation",
      "Presentation in English",
      "Fluency Test & Certification",
    ],
  },

  {
    id: "vba",
    icon: <PiMicrosoftExcelLogoFill />,
    title: "Microsoft Excel (VBA + Macros)",
    subtitle: "ADVANCED",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Excel Advanced Revision",
        items: [
          "Advanced Formulas Revision",
          "Pivot Tables & Power Query",
          "Named Ranges & Dynamic Arrays",
          "Data Validation & Protection",
          "Excel Tables & Structured References",
        ],
      },
      {
        title: "MODULE 2: Introduction to VBA",
        items: [
          "What is VBA & Why Use It?",
          "VBA Editor (Alt + F11)",
          "Modules, Procedures & Functions",
          "Variables, Data Types & Constants",
          "MsgBox & InputBox",
        ],
      },
      {
        title: "MODULE 3: Macros in Excel",
        items: [
          "Recording Macros",
          "Editing Recorded Macros",
          "Assigning Macros to Buttons",
          "Absolute vs Relative Recording",
          "Macro Security Settings",
        ],
      },
      {
        title: "MODULE 4: VBA Control Structures",
        items: [
          "If / ElseIf / Else Statements",
          "Select Case",
          "For Next & For Each Loops",
          "Do While / Do Until Loops",
          "Nested Loops & Conditions",
        ],
      },
      {
        title: "MODULE 5: Working with Excel Objects",
        items: [
          "Workbook & Worksheet Objects",
          "Range & Cells Object",
          "Formatting Cells via VBA",
          "Copy, Paste & Delete via Code",
          "Working with Multiple Sheets",
        ],
      },
      {
        title: "MODULE 6: UserForms & Custom Dialogs",
        items: [
          "Creating UserForms",
          "TextBox, ComboBox, ListBox",
          "Command Buttons & Events",
          "Data Entry Forms",
          "Form Validation in VBA",
        ],
      },
      {
        title: "MODULE 7: Advanced VBA & Automation",
        items: [
          "Error Handling (On Error GoTo)",
          "File System Operations",
          "Automating Charts & Reports",
          "Sending Emails via VBA (Outlook)",
          "Connecting Excel to Databases",
        ],
      },
      {
        title: "MODULE 8: Projects & Real-world Applications",
        items: [
          "Automated Invoice Generator",
          "Student Report Card System",
          "Inventory Management Tool",
          "Payroll Automation",
          "Dashboard with VBA Controls",
        ],
      },
    ],

    tools: [
      "Microsoft Excel",
      "VBA Editor",
      "Microsoft Outlook (for automation)",
      "Windows File System",
    ],
    projects: [
      "Automated Invoice Generator",
      "Payroll Processing System",
      "Inventory Tracker with VBA",
      "Student Report Generator",
      "Dynamic Dashboard with Macros",
    ],
  },

  {
    id: "mac",
    icon: <BiLogoMicrosoftTeams />,
    title: "Microsoft Access",
    subtitle: "",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to Microsoft Access",
        items: [
          "What is a Database?",
          "Relational Database Concepts",
          "MS Access Interface Overview",
          "Types of Objects in Access",
          "Planning a Database",
        ],
      },
      {
        title: "MODULE 2: Tables & Data Entry",
        items: [
          "Creating Tables in Design View",
          "Field Data Types & Properties",
          "Primary Keys & Indexes",
          "Input Masks & Validation Rules",
          "Importing Data from Excel/CSV",
        ],
      },
      {
        title: "MODULE 3: Relationships & Referential Integrity",
        items: [
          "One-to-One, One-to-Many, Many-to-Many",
          "Creating Relationships in Access",
          "Enforcing Referential Integrity",
          "Cascade Update & Delete",
          "Entity-Relationship Diagrams",
        ],
      },
      {
        title: "MODULE 4: Queries",
        items: [
          "Select Queries",
          "Parameter Queries",
          "Crosstab Queries",
          "Action Queries (Update, Append, Delete, Make-Table)",
          "SQL View in Access",
        ],
      },
      {
        title: "MODULE 5: Forms",
        items: [
          "Creating Forms with Wizard",
          "Form Design View",
          "Subforms & Combo Boxes",
          "Form Navigation & Buttons",
          "Conditional Formatting in Forms",
        ],
      },
      {
        title: "MODULE 6: Reports",
        items: [
          "Creating Reports with Wizard",
          "Report Design View",
          "Grouping, Sorting & Totals",
          "Charts in Reports",
          "Printing & Exporting Reports (PDF)",
        ],
      },
      {
        title: "MODULE 7: Macros, Automation & Projects",
        items: [
          "Access Macros Basics",
          "Autoexec Macro",
          "Switchboard & Navigation Forms",
          "Database Security & Password",
          "Capstone: Full Database Application",
        ],
      },
    ],
    tools: [
      "Microsoft Access",
      "Microsoft Excel (for imports)",
      "SQL",
      "OneDrive",
    ],
    projects: [
      "Student Management Database",
      "Library Management System",
      "Inventory Control Database",
      "Hospital Records Database",
      "Complete Business Database App",
    ],
  },

  {
    id: "adfa",
    icon: <GiDiploma />,
    title: "Advanced Diploma in Finance & Accounting",
    subtitle: "DIPLOMA",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Financial Accounting Fundamentals",
        items: [
          "Accounting Concepts & Principles",
          "Double Entry System",
          "Journal, Ledger & Trial Balance",
          "Bank Reconciliation Statement",
          "Rectification of Errors",
        ],
      },
      {
        title: "MODULE 2: Financial Statements & Reporting",
        items: [
          "Trading & Profit/Loss Account",
          "Balance Sheet Preparation",
          "Cash Flow Statements",
          "Notes to Accounts",
          "IFRS & GAAP Overview",
        ],
      },
      {
        title: "MODULE 3: Corporate Accounting",
        items: [
          "Company Formation & Share Capital",
          "Issue & Forfeiture of Shares",
          "Debentures & Redemption",
          "Amalgamation & Mergers",
          "Holding Company Accounts",
        ],
      },
      {
        title: "MODULE 4: Cost & Management Accounting",
        items: [
          "Cost Classification & Elements",
          "Job, Process & Batch Costing",
          "Marginal Costing & CVP Analysis",
          "Standard Costing & Variance Analysis",
          "Budgetary Control",
        ],
      },
      {
        title: "MODULE 5: Taxation - Direct & Indirect",
        items: [
          "Income Tax - Heads of Income",
          "TDS & Advance Tax",
          "GST - Basics to Filing",
          "GST Returns (GSTR-1, 3B)",
          "Tax Planning & Compliance",
        ],
      },
      {
        title: "MODULE 6: Auditing & Internal Control",
        items: [
          "Principles & Types of Audit",
          "Internal Control Systems",
          "Audit Planning & Documentation",
          "Vouching & Verification",
          "Audit Report Writing",
        ],
      },
      {
        title: "MODULE 7: Financial Management",
        items: [
          "Capital Structure & Leverages",
          "Capital Budgeting (NPV, IRR, Payback)",
          "Working Capital Management",
          "Dividend Policy",
          "Risk & Return Analysis",
        ],
      },
      {
        title: "MODULE 8: Tally Prime & Accounting Software",
        items: [
          "Tally Prime - Complete Setup",
          "Voucher Entry & Ledger Management",
          "GST in Tally",
          "Inventory Management in Tally",
          "MIS Reports & Payroll in Tally",
        ],
      },
      {
        title: "MODULE 9: Advanced Excel for Finance",
        items: [
          "Financial Functions (NPV, IRR, PMT)",
          "Financial Modeling Basics",
          "Sensitivity & Scenario Analysis",
          "Dashboard Creation",
          "Automated Reports with Formulas",
        ],
      },
      {
        title: "MODULE 10: Capstone & Interview Preparation",
        items: [
          "End-to-End Financial Project",
          "Case Study: Company Financial Analysis",
          "Mock Interviews & HR Questions",
          "Resume Building for Finance Roles",
          "Certification & Portfolio Prep",
        ],
      },
    ],
    tools: [
      "Tally Prime",
      "MS Excel (Advanced)",
      "QuickBooks",
      "Zoho Books",
      "Google Sheets",
      "PowerPoint",
    ],
    projects: [
      "Complete Set of Books for a Company",
      "GST Filing Simulation",
      "Financial Statement Analysis Report",
      "Cost Sheet & Budget Preparation",
      "Audit Report Writing",
      "Financial Model in Excel",
    ],
  },

  {
    id: "aml",
    icon: <GiTakeMyMoney />,
    title: "Anti-Money Laundering (AML)",
    subtitle: "CERTIFICATION COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to AML & Financial Crimes",
        items: [
          "What is Money Laundering?",
          "Stages: Placement, Layering & Integration",
          "Types of Financial Crimes",
          "Importance of AML Compliance",
          "Global AML Overview",
        ],
      },
      {
        title: "MODULE 2: Regulatory Framework & Guidelines",
        items: [
          "PMLA - Prevention of Money Laundering Act (India)",
          "FIU-IND - Financial Intelligence Unit India",
          "RBI AML Guidelines",
          "FATF - Financial Action Task Force",
          "Compliance Requirements & Penalties",
        ],
      },
      {
        title: "MODULE 3: KYC & Customer Due Diligence (CDD)",
        items: [
          "KYC (Know Your Customer) Basics",
          "Customer Identification Process (CIP)",
          "Simplified & Enhanced Due Diligence",
          "Risk-Based Approach (RBA)",
          "Customer Risk Profiling",
        ],
      },
      {
        title: "MODULE 4: Transaction Monitoring & Red Flags",
        items: [
          "What are Suspicious Transactions?",
          "Red Flag Indicators",
          "Unusual Transaction Patterns",
          "Structuring / Smurfing",
          "Overview of AML Software Tools",
        ],
      },
      {
        title: "MODULE 5: Reporting & Documentation",
        items: [
          "Suspicious Transaction Report (STR)",
          "Cash Transaction Report (CTR)",
          "Record Keeping Requirements",
          "Reporting Process to FIU-IND",
          "Case Documentation Best Practices",
        ],
      },
      {
        title: "MODULE 6: AML Investigation & Case Handling",
        items: [
          "Investigation Process Overview",
          "Case Studies & Real-life Scenarios",
          "Evidence Collection Techniques",
          "Internal Reporting Procedures",
          "Escalation Matrix",
        ],
      },
      {
        title: "MODULE 7: Technology in AML",
        items: [
          "Transaction Monitoring Systems",
          "Name Screening & Watchlist Tools",
          "Data Analytics in AML",
          "Role of AI & Machine Learning in AML",
          "Basics of SQL & Excel for AML Analysts",
        ],
      },
      {
        title: "MODULE 8: Risk Management & Final Assessment",
        items: [
          "AML Risk Management Framework",
          "Enterprise Risk Assessment",
          "Compliance Audits",
          "Final Project / Case Study",
          "Certification Test",
        ],
      },
    ],
    tools: [
      "MS Excel (Data Analysis)",
      "SQL Basics",
      "Transaction Monitoring Software (Overview)",
      "KYC Verification Tools",
      "FIU Reporting Portal",
    ],
    projects: [
      "KYC Form Analysis Exercise",
      "Suspicious Transaction Identification",
      "Excel-based AML Data Analysis",
      "Mock STR / CTR Filing",
      "Real-world AML Case Study",
    ],
  },

  {
    id: "tally",
    icon: <FaIndustry />,
    title: "Tally Prime + GST",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Accounting Fundamentals & Introduction to Tally",
        items: [
          "Basic Accounting Concepts & Principles",
          "Types of Accounts & Accounting Rules",
          "Debit & Credit Fundamentals",
          "Overview of TallyPrime Interface & Navigation",
          "Company Creation & Configuration",
        ],
      },
      {
        title: "MODULE 2: Ledgers, Groups & Voucher Entries",
        items: [
          "Understanding Ledger Accounts",
          "Creating & Organizing Ledger Groups",
          "Payment, Receipt, Journal & Contra Vouchers",
          "Recording Purchase & Sales Transactions",
        ],
      },
      {
        title: "MODULE 3: Inventory Management in Tally",
        items: [
          "Stock Groups & Stock Items",
          "Units of Measurement",
          "Purchase Orders & Sales Orders",
          "Managing Stock Movement",
          "Inventory Valuation Methods",
        ],
      },
      {
        title: "MODULE 4: GST Configuration & Transactions",
        items: [
          "Overview of GST Taxation System",
          "Types of GST: CGST, SGST & IGST",
          "Enabling GST Features in Tally",
          "GST Purchase & Sales Entries",
          "Input Tax Credit (ITC) Concept",
        ],
      },
      {
        title: "MODULE 5: GST Returns & Tax Compliance",
        items: [
          "GST Summary Reports",
          "GSTR-1 Report Generation",
          "GSTR-3B Overview",
          "Understanding E-Invoicing System",
          "Generating E-Way Bills",
        ],
      },
      {
        title: "MODULE 6: Financial Reports & Data Management",
        items: [
          "Balance Sheet in Tally",
          "Profit & Loss Account",
          "Trial Balance",
          "Cash Flow & Fund Flow Statements",
          "Exporting Reports to Excel & PDF",
        ],
      },
    ],
    tools: [
      "TallyPrime",
      "Microsoft Excel (for exports)",
      "GST Portal (Overview)",
      "E-Way Bill Portal",
      "E-Invoice System",
    ],
    projects: [
      "Company Setup with Full Accounting Entries",
      "GST Invoice Creation & ITC Tracking",
      "Inventory System for a Trading Business",
      "Complete GST Return Preparation",
      "Financial Reports & Year-end Closing",
    ],
  },

  {
    id: "cia",
    icon: <SiBmcsoftware />,
    title: "Certified Industrial Accountant (CIA)",
    subtitle: "CERTIFICATION COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Fundamentals of Accounting & Business Finance",
        items: [
          "Basic Accounting Concepts & Conventions",
          "Types of Accounts & Golden Rules",
          "Debit & Credit System",
          "Journal Entries & Ledger Posting",
          "Trial Balance, Profit & Loss Account",
          "Balance Sheet Preparation",
        ],
      },
      {
        title: "MODULE 2: Advanced Excel for Finance & MIS",
        items: [
          "Data Entry & Spreadsheet Management",
          "Logical & Lookup Functions (IF, VLOOKUP, XLOOKUP)",
          "Financial Formulas",
          "Pivot Tables & Pivot Charts",
          "Creating Dashboards",
          "Automated MIS Reports",
        ],
      },
      {
        title: "MODULE 3: Computerized Accounting using Tally",
        items: [
          "Setting Up Companies in Tally",
          "Creating Ledger Accounts",
          "Recording Business Transactions",
          "Stock Groups & Stock Items",
          "Inventory Tracking & Valuation",
        ],
      },
      {
        title: "MODULE 4: GST & Taxation Compliance",
        items: [
          "GST Structure & Taxation System",
          "Types of GST: CGST, SGST & IGST",
          "GST Purchase & Sales Entries",
          "Input Tax Credit (ITC)",
          "Preparation of GSTR-1 & GSTR-3B",
        ],
      },
      {
        title: "MODULE 5: Cost Accounting & Industrial Accounting",
        items: [
          "Types of Costs & Cost Classification",
          "FIFO, LIFO & Weighted Average Methods",
          "Cost Tracking for Inventory",
          "Budget Preparation",
          "Variance Analysis",
        ],
      },
      {
        title: "MODULE 6: Financial Analysis & Business Reporting",
        items: [
          "Liquidity, Profitability & Efficiency Ratios",
          "Preparing Cash Flow Statements",
          "Preparing Management Reports",
          "Financial Decision Support",
        ],
      },
      {
        title: "MODULE 7: Professional Skills & Interview Preparation",
        items: [
          "Business Communication Skills",
          "Resume Building for Accounting Roles",
          "Interview Question Practice",
          "Job Roles in Accounting & Finance",
        ],
      },
    ],
    tools: [
      "Advanced Excel",
      "Tally Prime",
      "GST Portal",
      "Power BI (Basics)",
      "MS Word (Reports)",
    ],
    projects: [
      "Financial MIS Dashboard",
      "Budget & Expense Analysis Sheet",
      "Full Accounting Records in Tally",
      "GST Invoice & Return Preparation",
      "Financial Ratio Analysis Report",
    ],
  },

  {
    id: "busy",
    icon: <MdOutlineBusAlert />,
    title: "BUSY Accounting Software",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Accounting Fundamentals & Introduction to BUSY",
        items: [
          "Basic Accounting Concepts & Principles",
          "Types of Accounts & Accounting Rules",
          "Debit & Credit System",
          "Overview of BUSY Interface & Features",
          "Creating a New Company in BUSY",
        ],
      },
      {
        title: "MODULE 2: Ledger Management & Voucher Entries",
        items: [
          "Creating Ledger Accounts",
          "Organizing Accounts into Groups",
          "Payment, Receipt, Journal & Contra Vouchers",
          "Recording Purchase & Sales Entries",
        ],
      },
      {
        title: "MODULE 3: Inventory Management & Billing",
        items: [
          "Creating Stock Groups & Items",
          "Creating Purchase & Sales Invoices",
          "Managing Discount & Tax Settings",
          "Inventory Valuation Methods",
        ],
      },
      {
        title: "MODULE 4: GST Configuration & Transactions",
        items: [
          "Structure of GST Taxation System",
          "Types of GST: CGST, SGST & IGST",
          "Enabling GST Features in BUSY",
          "GST Purchase & Sales Entries",
          "Input Tax Credit Management",
        ],
      },
      {
        title: "MODULE 5: GST Returns & Tax Reports",
        items: [
          "GST Summary Reports",
          "GSTR-1 Report Generation",
          "GSTR-3B Overview",
          "E-Way Bill System",
        ],
      },
      {
        title: "MODULE 6: Financial Reports & Data Management",
        items: [
          "Balance Sheet",
          "Profit & Loss Account",
          "Trial Balance",
          "Sales & Purchase Analysis Reports",
          "Exporting Reports to Excel & PDF",
        ],
      },
    ],
    tools: [
      "BUSY Accounting Software",
      "Microsoft Excel (for exports)",
      "GST Portal (Overview)",
      "E-Way Bill Portal",
    ],
    projects: [
      "Company Account Setup in BUSY",
      "GST Invoice Generation & ITC Tracking",
      "Inventory Billing System",
      "Complete GST Return Preparation",
      "Financial Statements & Reports",
    ],
  },

  {
    id: "sapfico",
    icon: <FaBriefcase />,
    title: "SAP FICO Professional",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to ERP & SAP Environment",
        items: [
          "What is Enterprise Resource Planning?",
          "Business Process Integration",
          "SAP Architecture & System Landscape",
          "SAP Navigation & Interface",
          "SAP Transaction Codes",
        ],
      },
      {
        title: "MODULE 2: SAP Financial Accounting (FI) Fundamentals",
        items: [
          "Chart of Accounts",
          "Posting Transactions",
          "Vendor Master Creation & Invoice Processing",
          "Payment Processing",
          "Customer Master Data & Invoicing",
        ],
      },
      {
        title: "MODULE 3: Asset Accounting",
        items: [
          "Asset Creation & Classification",
          "Asset Acquisition, Transfer & Retirement",
          "Depreciation Calculation & Posting",
        ],
      },
      {
        title: "MODULE 4: SAP Controlling (CO)",
        items: [
          "Creating Cost Centers",
          "Cost Allocation & Planning",
          "Budget Monitoring",
          "Profitability Analysis",
        ],
      },
      {
        title: "MODULE 5: Financial Reporting & Analysis",
        items: [
          "Balance Sheet & P&L Statements",
          "General Ledger Reporting",
          "Cost & Profitability Reports",
          "Decision-support Reporting",
        ],
      },
      {
        title: "MODULE 6: Integration with Other SAP Modules",
        items: [
          "Financial Impact of Procurement (MM)",
          "Accounting Entries from Sales Activities (SD)",
          "Cost Tracking for Manufacturing (PP)",
        ],
      },
      {
        title: "MODULE 7: SAP Implementation Basics & Career Preparation",
        items: [
          "SAP Project Lifecycle Stages",
          "Configuration vs End-user Roles",
          "Testing Financial Processes",
          "SAP FICO Consultant Roles",
          "Resume Preparation & Interview Guidance",
        ],
      },
    ],
    tools: [
      "SAP FICO (ECC / S/4HANA)",
      "SAP GUI",
      "MS Excel (for reporting)",
      "SAP Fiori (Overview)",
    ],
    projects: [
      "General Ledger Posting Exercise",
      "Accounts Payable & Receivable Simulation",
      "Asset Lifecycle Management",
      "Cost Center Allocation Project",
      "Financial Report Generation",
    ],
  },

  {
    id: "sapmm",
    icon: <BsBoxSeamFill />,
    title: "SAP MM (Materials Management)",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to ERP & SAP Environment",
        items: [
          "What ERP Systems Do in Organizations",
          "Integration of Finance, Procurement & Operations",
          "SAP System Architecture",
          "SAP Navigation & Interface",
        ],
      },
      {
        title: "MODULE 2: Organizational Structure in SAP MM",
        items: [
          "Client, Company Code, Plant & Storage Location",
          "Purchasing Organization & Purchasing Group",
          "Material Master Records",
          "Material Types & Material Groups",
        ],
      },
      {
        title: "MODULE 3: Procurement Process in SAP",
        items: [
          "Creating Purchase Requisitions",
          "Approval & Release Process",
          "Vendor Quotation Management",
          "Creating & Managing Purchase Orders",
        ],
      },
      {
        title: "MODULE 4: Inventory Management",
        items: [
          "Recording Goods Received from Vendors",
          "Issuing Materials for Production or Sale",
          "Managing Stock Movements",
          "Inventory Adjustments",
        ],
      },
      {
        title: "MODULE 5: Invoice Verification",
        items: [
          "Vendor Invoice Verification",
          "Three-way Matching (PO, Goods Receipt, Invoice)",
          "Financial Accounting Integration",
          "Handling Invoice Discrepancies",
        ],
      },
      {
        title: "MODULE 6: Reporting & Inventory Analysis",
        items: [
          "Purchase Order Reports",
          "Vendor Performance Analysis",
          "Stock Overview Reports",
          "Inventory Optimization Insights",
        ],
      },
      {
        title: "MODULE 7: Integration with Other SAP Modules",
        items: [
          "Financial Impact of Procurement (FI)",
          "Material Planning for Manufacturing (PP)",
          "Inventory Availability for Sales (SD)",
        ],
      },
      {
        title: "MODULE 8: SAP Implementation Basics & Career Preparation",
        items: [
          "SAP Project Lifecycle & Business Blueprinting",
          "Configuration vs End-user Roles",
          "SAP MM Consultant Roles",
          "Resume Preparation & Interview Guidance",
        ],
      },
    ],
    tools: [
      "SAP MM (ECC / S/4HANA)",
      "SAP GUI",
      "MS Excel (for reporting)",
      "SAP Fiori (Overview)",
    ],
    projects: [
      "Material Master Data Creation",
      "Purchase Requisition to PO Workflow",
      "Goods Receipt Simulation",
      "Invoice Verification Exercise",
      "Procurement Report Generation",
    ],
  },

  {
    id: "sapsd",
    icon: <LuConstruction />,
    title: "SAP SD (Sales & Distribution)",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to ERP & SAP Environment",
        items: [
          "Understanding ERP Systems & Their Role",
          "Integration of Sales, Finance & Logistics",
          "SAP Interface & Navigation",
          "SAP Organizational Hierarchy",
        ],
      },
      {
        title: "MODULE 2: Organizational Structure in SAP SD",
        items: [
          "Client & Company Code",
          "Sales Organization",
          "Distribution Channel & Division",
          "Customer & Material Master Data",
        ],
      },
      {
        title: "MODULE 3: Sales Order Processing",
        items: [
          "Customer Inquiries & Quotation Creation",
          "Creating Sales Orders",
          "Pricing Procedures",
          "Discounts & Special Pricing Conditions",
        ],
      },
      {
        title: "MODULE 4: Delivery & Shipping Process",
        items: [
          "Creating Outbound Deliveries",
          "Picking & Packing Processes",
          "Posting Goods Issue",
          "Updating Inventory & Financial Records",
        ],
      },
      {
        title: "MODULE 5: Billing & Invoice Processing",
        items: [
          "Creating Billing Documents",
          "Invoice Generation",
          "Credit & Debit Memos",
          "Financial Impact of Billing",
        ],
      },
      {
        title: "MODULE 6: Reporting & Sales Analysis",
        items: [
          "Sales Order Reports",
          "Customer Sales Performance",
          "Monitoring Sales Trends",
          "Sales Forecasting Basics",
        ],
      },
      {
        title: "MODULE 7: Integration with Other SAP Modules",
        items: [
          "Inventory Updates After Sales (MM)",
          "Billing Impact on Financial Accounting (FI)",
          "Sales Demand Influencing Production (PP)",
        ],
      },
      {
        title: "MODULE 8: SAP Implementation Basics & Career Preparation",
        items: [
          "SAP Project Planning & Business Blueprinting",
          "Configuration & System Testing",
          "SAP SD Consultant Roles",
          "Resume Building & Interview Preparation",
        ],
      },
    ],
    tools: [
      "SAP SD (ECC / S/4HANA)",
      "SAP GUI",
      "MS Excel (for reporting)",
      "SAP Fiori (Overview)",
    ],
    projects: [
      "Customer Master Data Setup",
      "Sales Order to Billing Workflow",
      "Delivery & Shipment Simulation",
      "Invoice Processing Exercise",
      "Sales Performance Report",
    ],
  },

  {
    id: "sappp",
    icon: <MdOutlineManageAccounts />,
    title: "SAP PP (Production Planning)",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to ERP & SAP Environment",
        items: [
          "What ERP Systems Do in Organizations",
          "Integration of Manufacturing, Finance & Procurement",
          "SAP Interface & Navigation",
          "Transaction Codes & Menu Structure",
        ],
      },
      {
        title: "MODULE 2: Organizational Structure & Master Data",
        items: [
          "Client & Company Code",
          "Plant & Storage Locations",
          "Work Centers & Production Lines",
          "Material Master Records",
          "Creating Bill of Materials (BOM)",
        ],
      },
      {
        title: "MODULE 3: Work Centers & Routing",
        items: [
          "Defining Work Centers",
          "Assigning Capacity & Resources",
          "Defining Production Operations",
          "Machine Capacity Planning",
        ],
      },
      {
        title: "MODULE 4: Production Planning Process",
        items: [
          "Forecasting Product Demand",
          "Understanding MRP Logic",
          "Creating Planned Orders",
          "Converting Planned Orders into Production Orders",
        ],
      },
      {
        title: "MODULE 5: Production Execution",
        items: [
          "Creating Production Orders",
          "Scheduling Manufacturing Operations",
          "Goods Issue for Production",
          "Goods Receipt of Finished Products",
        ],
      },
      {
        title: "MODULE 6: Quality Control & Production Monitoring",
        items: [
          "Monitoring Production Status",
          "Quality Checks in Production Processes",
          "Production Performance Reports",
          "Capacity Utilization Reports",
        ],
      },
      {
        title: "MODULE 7: Integration with Other SAP Modules",
        items: [
          "Procurement of Raw Materials (MM)",
          "Sales Orders Triggering Production Demand (SD)",
          "Production Costs Affecting Financial Accounting (FI)",
        ],
      },
      {
        title: "MODULE 8: SAP Implementation Basics & Career Preparation",
        items: [
          "SAP Project Planning & Configuration",
          "Testing & Deployment Stages",
          "SAP PP Consultant Roles",
          "Resume Preparation & Interview Guidance",
        ],
      },
    ],
    tools: [
      "SAP PP (ECC / S/4HANA)",
      "SAP GUI",
      "MS Excel (for reporting)",
      "SAP Fiori (Overview)",
    ],
    projects: [
      "Material Master & BOM Creation",
      "Work Center & Routing Setup",
      "MRP Simulation Exercise",
      "Production Order Processing",
      "Manufacturing Report Generation",
    ],
  },

  {
    id: "saphcm",
    icon: <FaIndustry />,
    title: "SAP HCM (Human Capital Management)",
    subtitle: "PROFESSIONAL COURSE",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to ERP & SAP Environment",
        items: [
          "What ERP Systems Do in Organizations",
          "Integration of HR, Finance & Operations",
          "SAP Interface & Navigation",
          "Transaction Codes & Menu Structure",
        ],
      },
      {
        title: "MODULE 2: Organizational Management",
        items: [
          "Creating Organizational Units",
          "Defining Positions & Jobs",
          "Employee Reporting Structure",
          "Organizational Hierarchy Visualization",
        ],
      },
      {
        title: "MODULE 3: Personnel Administration",
        items: [
          "Creating Employee Master Records",
          "Hiring Employees",
          "Promotions & Transfers",
          "Employee Separation Processes",
        ],
      },
      {
        title: "MODULE 4: Time Management",
        items: [
          "Attendance Tracking",
          "Leave & Absence Management",
          "Creating Work Schedules",
          "Shift Planning",
          "Calculating Overtime",
        ],
      },
      {
        title: "MODULE 5: Payroll Management",
        items: [
          "Salary Components & Wage Types",
          "Running Payroll Cycles",
          "Salary Calculation",
          "Payslip Generation",
        ],
      },
      {
        title: "MODULE 6: Recruitment & Talent Management",
        items: [
          "Managing Job Vacancies",
          "Candidate Application Tracking",
          "Training Programs",
          "Performance Evaluations",
          "Succession Planning Basics",
        ],
      },
      {
        title: "MODULE 7: Reporting & HR Analytics",
        items: [
          "Employee Information Reports",
          "Workforce Analysis Reports",
          "Employee Performance Tracking",
          "HR Decision-support Reporting",
        ],
      },
      {
        title: "MODULE 8: Integration with Other SAP Modules",
        items: [
          "Payroll Impact on Financial Accounting (FI)",
          "Employee Allocation to Projects (PS)",
          "Cross-module HR Transaction Simulations",
        ],
      },
      {
        title: "MODULE 9: SAP Implementation Basics & Career Preparation",
        items: [
          "SAP Project Phases & Configuration Basics",
          "Testing & Deployment Processes",
          "SAP HCM Consultant Roles",
          "Resume Building & Interview Preparation",
        ],
      },
    ],
    tools: [
      "SAP HCM (ECC / S/4HANA)",
      "SAP GUI",
      "MS Excel (for HR reporting)",
      "SAP Fiori (Overview)",
    ],
    projects: [
      "Organizational Structure Setup",
      "Employee Lifecycle Management",
      "Payroll Processing Simulation",
      "Time & Attendance Management",
      "HR Reports & Workforce Analytics",
    ],
  },

  {
    id: "BLENDER",
    icon: <IoCubeSharp />,
    title: "Blender 3D Animation",
    subtitle: "4–6 Months Program",
    badge: "",
    modules: [
      {
        title: "MODULE 1: Introduction to 3D & Blender Basics",
        items: [
          "What is 3D Modeling & Animation",
          "Applications — Films, Games, Ads, Architecture",
          "Blender Workspace, Navigation & Viewports",
          "Tools & Panels Overview",
          "Move, Rotate & Scale Objects",
          "Working with Primitives (Cube, Sphere, etc.)",
        ],
      },
      {
        title: "MODULE 2: 3D Modeling (Object Creation)",
        items: [
          "Edit Mode & Mesh Structure",
          "Vertices, Edges & Faces",
          "Hard Surface Modeling — Furniture, Products",
          "Precision Modeling Techniques",
          "Organic Modeling — Simple Characters & Shapes",
          "Sculpting Basics",
        ],
      },
      {
        title: "MODULE 3: Materials, Texturing & Shading",
        items: [
          "Applying Materials & Understanding Shaders",
          "UV Mapping Basics",
          "Applying Textures to Models",
          "Types of Lights in Blender",
          "Creating Realistic Lighting for Scenes",
        ],
      },
      {
        title: "MODULE 4: Animation Fundamentals",
        items: [
          "Timeline & Keyframe Animation",
          "Basic Object Animation",
          "Timing, Spacing & Motion Principles",
          "Ease In / Ease Out",
          "Camera Animation & Cinematic Shots",
        ],
      },
      {
        title: "MODULE 5: Rigging & Character Animation",
        items: [
          "Creating Armatures (Skeletons)",
          "Binding Models to Rigs",
          "Basic Walk Cycle",
          "Simple Character Actions",
          "Smoothing Movements & Improving Realism",
        ],
      },
      {
        title: "MODULE 6: Rendering & Output",
        items: [
          "Eevee vs Cycles Rendering Engines",
          "Render Settings & Scene Optimization",
          "Improving Render Quality & Reducing Render Time",
          "Image & Video Export",
          "Output Formats for Different Platforms",
        ],
      },
      {
        title: "MODULE 7: Real Projects & Portfolio Development",
        items: [
          "Product Advertisement Animation",
          "Short Animated Scene Project",
          "Showreel Development",
          "Presenting Projects Professionally",
          "Animation for Ads, Game Assets & Social Media Content",
        ],
      },
      {
        title: "MODULE 8: Career & Freelancing Guidance",
        items: [
          "Career Paths — 3D Animator, Motion Graphics Artist, Game Designer",
          "Finding Freelance Clients",
          "Pricing Animation Work",
          "Introduction to Industry Tools (Maya, Unreal Engine)",
          "Portfolio Presentation & Mock Client Pitch",
        ],
      },
    ],
    tools: ["Blender"],
    projects: [
      "Simple Object & Basic Scene Setup",
      "Product Model & Simple Character Model",
      "Textured & Lit Scene",
      "Bouncing Ball & Product Animation",
      "Character Rigging & Walk Cycle",
      "Final Render Project",
      "Product Advertisement Animation",
      "Demo Reel & Portfolio Presentation",
    ],
  },
];

// ─── ICON BG COLORS ──────────────────────────────────────────────────────────
const iconBgMap = {
  BLENDER: "bg-blue-600",

  GD: "bg-black",
  BA: "bg-yellow-500",
  wd: "bg-blue-400",
  ds: "bg-purple-900",
  da: "bg-cyan-900",
  eh: "bg-red-900",
  dm: "bg-orange-900",
  id: "bg-pink-900",
  fa: "bg-green-900",
  hr: "bg-blue-900",
  py: "bg-green-600",
  uiux: "bg-fuchsia-600",
  cc: "bg-sky-600",
  ai: "bg-violet-600",
  mad: "bg-rose-900",
  mso: "bg-indigo-900",
  pd: "bg-amber-900",
  se: "bg-lime-900",
  vba: "bg-emerald-900",
  mac: "bg-slate-800",
  adfa: "bg-green-900",
  aml: "bg-red-900",
  tally: "bg-blue-900",
  cia: "bg-purple-900",
  busy: "bg-orange-900",
  sapfico: "bg-cyan-900",
  sapmm: "bg-teal-900",
  sapsd: "bg-violet-900",
  DTP: "bg-pink-600",
  sappp: "bg-indigo-950",
  saphcm: "bg-rose-500",
  UIUX: "bg-green-600",
  MAYA: "bg-red-600",
  ZBRUSH: "bg-orange-500",
  DOAP: "bg-red-500",
  PPRO: "bg-blue-500",
  FILMORA: "bg-purple-600",
  AEF: "bg-orange-400",
  ANIM2D3D: "bg-red-600",
  ANIM: "bg-yellow-400",
};

// ─── COURSE DETAIL (unchanged) ────────────────────────────────────────────────
const isMaster = (type) => type === "master";

function CourseDetail({ course, type, onBack }) {
  const master = isMaster(type);
  return (
    <div className="p-5 md:p-7">
      {onBack && (
        <button
          onClick={onBack}
          className={`flex items-center gap-1.5 text-xs font-semibold mb-5 bg-transparent border-0 cursor-pointer ${master ? "text-blue-700" : "text-indigo-700"}`}
        >
          <svg
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Courses
        </button>
      )}
      <div
        className={`rounded-2xl p-6 mb-6 relative overflow-hidden ${master ? "bg-linear-to-br from-slate-900 via-blue-900 to-blue-700" : "bg-linear-to-br from-indigo-950 via-indigo-800 to-indigo-600"}`}
      >
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-5 left-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="flex items-center gap-4 relative">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur border border-white/25 flex items-center justify-center text-2xl text-white shrink-0">
            {course.icon}
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">
              {course.subtitle}
            </div>
            <div className="text-xl font-extrabold text-white leading-tight">
              {course.title}
            </div>
            {course.badge && (
              <div className="mt-2 inline-block text-xs font-bold bg-white/20 text-white rounded-full px-3 py-0.5 border border-white/25">
                {course.badge}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm">📚</span>
          <span
            className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}
          >
            Course Modules
          </span>
          <div className="flex-1 h-px bg-slate-200 ml-1" />
        </div>
        <div className="flex flex-col gap-2.5">
          {course.modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-150"
            >
              <div className="flex gap-2.5 items-start mb-2">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold text-white shrink-0 mt-0.5 ${master ? "bg-linear-to-br from-blue-700 to-blue-500" : "bg-linear-to-br from-indigo-700 to-indigo-500"}`}
                >
                  {i + 1}
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-snug">
                  {mod.title}
                </div>
              </div>
              {mod.objective && (
                <div
                  className={`text-xs italic mb-2 ml-8 ${master ? "text-blue-600" : "text-indigo-600"}`}
                >
                  🎯 {mod.objective}
                </div>
              )}
              <ul className="ml-8 flex flex-col gap-1">
                {mod.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-xs text-slate-500 flex items-start gap-2"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${master ? "bg-blue-300" : "bg-indigo-300"}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {course.tools?.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-sm">🛠</span>
            <span
              className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}
            >
              Tools Covered
            </span>
            <div className="flex-1 h-px bg-slate-200 ml-1" />
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tools.map((t, i) => (
              <span
                key={i}
                className={`text-xs font-semibold px-3 py-1 rounded-lg border ${master ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
      {course.projects?.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-sm">🚀</span>
            <span
              className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}
            >
              Real-World Projects
            </span>
            <div className="flex-1 h-px bg-slate-200 ml-1" />
          </div>
          <div className="flex flex-wrap gap-2">
            {course.projects.map((p, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900 text-slate-100"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ course, type, onViewDetails }) {
  const master = isMaster(type);
  const bg = iconBgMap[course.id] || "bg-slate-800";
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      {/* Image / Icon Area */}
      <div
        className={`relative ${bg} flex items-center justify-center`}
        style={{ height: "160px" }}
      >
        <div
          className="text-white opacity-80"
          style={{ fontSize: "56px", lineHeight: 1 }}
        >
          {course.icon}
        </div>
        {course.badge && (
          <span className="absolute top-3 left-3 text-xs font-bold bg-amber-400 text-amber-900 rounded-full px-2.5 py-1">
            {course.badge}
          </span>
        )}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30 text-white/80 backdrop-blur-sm ${master ? "bg-blue-700/60" : "bg-indigo-700/60"}`}
        >
          {course.subtitle}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {course.title}
        </h3>

        {/* Topics */}
        <ul className="flex flex-col gap-1 flex-1">
          {course.topics?.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-1.5 text-xs text-slate-500"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${master ? "bg-blue-400" : "bg-indigo-400"}`}
              />
              {t}
            </li>
          ))}
        </ul>

        {/* Duration + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" d="M12 6v6l4 2" />
            </svg>
            {course.duration}
          </div>
          <button
            onClick={() => onViewDetails(course, type)}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full border cursor-pointer transition-all duration-150 ${
              master
                ? "border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white"
                : "border-indigo-600 text-indigo-700 hover:bg-indigo-700 hover:text-white"
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function Modal({ course, type, onClose }) {
  if (!course) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 border-0 cursor-pointer transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <CourseDetail course={course} type={type} onBack={onClose} />
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const BATCH_SIZE = 6;

export default function CourseSyllabus() {
  const [activeTab, setActiveTab] = useState("master"); // "master" | "advance"
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [modalCourse, setModalCourse] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [search, setSearch] = useState("");

  const allCourses =
    activeTab === "master"
      ? masterDiplomaCourses
      : advanceSpecializationCourses;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allCourses;
    return allCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q),
    );
  }, [activeTab, search, allCourses]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleTab = (tab) => {
    setActiveTab(tab);
    setVisibleCount(BATCH_SIZE);
    setSearch("");
  };

  const openModal = (course, type) => {
    setModalCourse(course);
    setModalType(type);
  };
  const closeModal = () => {
    setModalCourse(null);
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ── FILTER TABS + SEARCH ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex rounded-xl overflow-hidden border border-slate-200 shrink-0">
            <button
              onClick={() => handleTab("master")}
              className={`px-5 py-2.5 text-sm font-semibold cursor-pointer border-0 transition-all duration-150 ${
                activeTab === "master"
                  ? "bg-linear-to-r from-blue-700 to-blue-600 text-white shadow-inner"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Master Diploma
            </button>
            <button
              onClick={() => handleTab("advance")}
              className={`px-5 py-2.5 text-sm font-semibold cursor-pointer border-0 border-l border-slate-200 transition-all duration-150 ${
                activeTab === "advance"
                  ? "bg-linear-to-r from-indigo-700 to-indigo-600 text-white shadow-inner"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Advance Professional
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-full sm:w-64">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(BATCH_SIZE);
              }}
              placeholder="Search courses..."
              className="bg-transparent border-0 outline-none text-sm text-black w-full placeholder-black"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="bg-transparent border-0 cursor-pointer text-slate-400 p-0"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── COURSE GRID ── */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Section heading */}
        <div className="mb-6 flex items-center gap-3">
          <span
            className={`w-1 h-6 rounded-sm ${activeTab === "master" ? "bg-blue-600" : "bg-indigo-600"}`}
          />
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-700">
            {activeTab === "master"
              ? "Master Diploma Course — Multi Skills"
              : "Advance Professional Specialization"}
          </h2>
          {/* <span className="text-xs text-slate-400 font-medium ml-1">
            ({filtered.length} courses)
          </span> */}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            No courses found for "{search}"
          </div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {visible.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                type={activeTab}
                onViewDetails={openModal}
              />
            ))}
          </div>
        )}

        {/* ── LOAD MORE ── */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + BATCH_SIZE)}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm border-2 cursor-pointer transition-all duration-150 ${
                activeTab === "master"
                  ? "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white"
                  : "border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Load More Courses ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </main>

      {/* ── MODAL ── */}
      <Modal course={modalCourse} type={modalType} onClose={closeModal} />
    </div>
  );
}
