// import React from "react";
// import { useState, useMemo, useCallback } from "react";

// const courses = [
//   {
//     id: "wd", icon: "💻", title: "Web Development", subtitle: "FULL STACK",
//     color: "blue", badge: "14 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Web & Internet Basics", objective: "Understand how the web works", items: ["What is Internet & Web?", "How websites work (Client vs Server)", "Domain, Hosting & DNS", "HTTP & HTTPS", "Web Browsers", "Frontend vs Backend"] },
//       { title: "MODULE 2: HTML5", objective: "Build structure of websites", items: ["HTML Structure", "Tags, Elements, Attributes", "Links, Images, Lists", "Tables & Forms", "Semantic HTML", "Audio, Video, iFrame"] },
//       { title: "MODULE 3: CSS3", objective: "Make websites attractive", items: ["Selectors & Properties", "Box Model", "Flexbox & Grid", "Responsive Design", "Animations"] },
//       { title: "MODULE 4: JavaScript", objective: "Add interactivity", items: ["Variables & Data Types", "Functions & Loops", "DOM & Events", "Form Validation", "ES6 Concepts"] },
//       { title: "MODULES 5–14: Advanced Development", objective: "Full-stack mastery", items: ["Bootstrap & UI Frameworks", "React.js", "Node.js & Express", "MongoDB / MySQL", "MERN Stack", "Deployment & Hosting", "Testing & Security", "Capstone Projects", "Interview Preparation"] },
//     ],
//     tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "MySQL", "Git & GitHub", "VS Code", "Postman"],
//     projects: [],
//   },
//   {
//     id: "ds", icon: "📊", title: "Data Science", subtitle: "FULL COURSE",
//     color: "emerald", badge: "16 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Data Science", items: ["What is Data Science?", "Data Science Life Cycle", "Roles: Analyst, Scientist, ML Engineer", "Applications of Data Science", "Tools Overview & Setup"] },
//       { title: "MODULE 2: Python for Data Science", items: ["Python Basics", "Conditional Statements & Loops", "Functions & OOP", "File & Exception Handling", "NumPy, Pandas, Matplotlib, Seaborn"] },
//       { title: "MODULE 3: Statistics & Mathematics", items: ["Descriptive Statistics", "Probability & Distributions", "Hypothesis Testing", "Correlation & Covariance", "Linear Algebra & Calculus Basics"] },
//       { title: "MODULES 5–8: Machine Learning", items: ["ML Fundamentals & Workflow", "Supervised Learning (Regression & Classification)", "Unsupervised Learning (Clustering, PCA)", "Ensemble & Boosting Methods", "Hyperparameter Tuning & Model Evaluation"] },
//       { title: "MODULES 9–13: Deep Learning", items: ["Neural Network Basics", "ANN using TensorFlow & Keras", "Convolutional Neural Networks", "Recurrent Neural Networks (LSTM, GRU)", "Transfer Learning, GAN & NLP"] },
//       { title: "MODULE 15: Big Data & Deployment", items: ["Hadoop & Spark Basics", "Model Deployment", "Flask / Streamlit", "API Creation", "AWS Basics"] },
//     ],
//     tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Power BI", "SQL", "Jupyter", "AWS"],
//     projects: ["House Price Prediction", "Customer Segmentation", "Sales Forecasting", "Image Classification", "Sentiment Analysis", "End-to-End Deployment"],
//   },
//   {
//     id: "da", icon: "🔍", title: "Data Analytics", subtitle: "FULL COURSE",
//     color: "violet", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Data Analytics", items: ["What is Data Analytics?", "Types: Descriptive, Diagnostic, Predictive, Prescriptive", "Data Analytics Life Cycle", "Roles & Career Opportunities", "Industry Applications"] },
//       { title: "MODULE 2: Excel for Data Analysis", items: ["Excel Basics & Shortcuts", "Formulas & Functions", "Pivot Tables", "Data Cleaning in Excel", "Charts & Visualization"] },
//       { title: "MODULE 3: SQL for Data Analytics", items: ["Introduction to Databases", "SQL Basics (SELECT, WHERE, ORDER BY)", "Joins & Subqueries", "Group By & Aggregate Functions", "Real-world Query Practice"] },
//       { title: "MODULE 4: Python for Data Analytics", items: ["Python Basics", "NumPy & Pandas", "Data Cleaning", "Exploratory Data Analysis", "Matplotlib & Seaborn"] },
//       { title: "MODULE 5: Power BI & Visualization", items: ["Power BI Basics", "Data Modeling", "DAX Fundamentals", "Dashboard Creation", "Interactive Reports"] },
//       { title: "MODULE 6–7: Statistics & Business Analytics", items: ["Descriptive Statistics", "Correlation & Regression", "Hypothesis Testing", "KPI & Metrics Understanding", "Data-driven Decision Making"] },
//     ],
//     tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau", "Git & GitHub"],
//     projects: ["Sales Dashboard", "HR Analytics", "Customer Churn Analysis", "Financial Data Analysis", "End-to-End Analytics Project"],
//   },
//   {
//     id: "eh", icon: "🔐", title: "Ethical Hacking", subtitle: "FULL COURSE",
//     color: "red", badge: "9 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Ethical Hacking", items: ["What is Ethical Hacking?", "Types of Hackers (White, Black, Grey)", "Hacking Life Cycle", "Legal & Ethical Guidelines", "Tools Overview"] },
//       { title: "MODULE 2: Footprinting & Reconnaissance", items: ["Information Gathering Techniques", "Domain & IP Lookup", "Network Scanning", "Social Engineering Basics"] },
//       { title: "MODULE 3: Scanning & Enumeration", items: ["Port Scanning", "Vulnerability Scanning", "Network Enumeration", "Nmap & Nessus Tools"] },
//       { title: "MODULE 4: System Hacking & Exploitation", items: ["Password Cracking Techniques", "Privilege Escalation", "Trojans & Backdoors", "Patch Management & Mitigation"] },
//       { title: "MODULE 5: Web Application Hacking", items: ["SQL Injection", "XSS & CSRF", "File Inclusion", "OWASP Top 10"] },
//       { title: "MODULE 6–8: Network, Wireless & Cryptography", items: ["Wi-Fi Hacking", "Man-in-the-Middle Attacks", "Packet Sniffing", "Encryption & Hashing", "Secure Communication"] },
//     ],
//     tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP"],
//     projects: ["Penetration Testing", "Web Hacking Lab", "Network Security Audit", "Real-world Case Studies"],
//   },
//   {
//     id: "dm", icon: "📣", title: "Digital Marketing", subtitle: "FULL COURSE",
//     color: "amber", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Digital Marketing", items: ["Overview of Digital Marketing", "Traditional vs Digital Marketing", "Digital Marketing Channels", "Trends & Career Opportunities"] },
//       { title: "MODULE 2: SEO", items: ["Introduction to SEO", "On-page & Off-page SEO", "Keyword Research", "Backlinking & Link Building", "SEO Tools & Analytics"] },
//       { title: "MODULE 3: Social Media Marketing", items: ["Social Media Platforms Overview", "Content Strategy & Planning", "Facebook, Instagram, LinkedIn Marketing", "Engagement & Analytics"] },
//       { title: "MODULE 4: Paid Advertising (PPC)", items: ["Introduction to Google Ads", "Pay-Per-Click Campaigns", "Ad Targeting & Bidding", "Campaign Optimization & Analytics"] },
//       { title: "MODULE 5–6: Email & Content Marketing", items: ["Email Campaign Strategy", "Segmentation & Targeting", "Email Automation", "Blog Writing & SEO Content", "Video & Multimedia Content"] },
//       { title: "MODULE 7: Analytics & Reporting", items: ["Google Analytics Basics", "Traffic & Conversion Tracking", "Performance Metrics & KPIs", "Data-driven Marketing Decisions"] },
//     ],
//     tools: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "Mailchimp", "Canva", "Ahrefs", "SEMrush"],
//     projects: ["SEO Campaign Project", "Social Media Marketing Project", "PPC Campaign Simulation", "Email & Content Campaign"],
//   },
//   {
//     id: "id", icon: "🏠", title: "Interior Design", subtitle: "DIPLOMA",
//     color: "orange", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Interior Design", items: ["What is Interior Design?", "History & Evolution", "Role of an Interior Designer", "Design Principles & Elements"] },
//       { title: "MODULE 2: Space Planning & Layouts", items: ["Understanding Space & Function", "Residential & Commercial Layouts", "Furniture Planning & Zoning", "Circulation & Flow"] },
//       { title: "MODULE 3: Color Theory & Materials", items: ["Color Psychology", "Color Schemes & Combinations", "Materials & Finishes (Wood, Fabric, Tiles)", "Surface Textures & Patterns"] },
//       { title: "MODULE 4: Furniture & Lighting Design", items: ["Furniture Styles & Selection", "Custom Furniture Design Basics", "Lighting Types & Techniques", "Accent & Ambient Lighting"] },
//       { title: "MODULE 5: CAD & Design Software", items: ["AutoCAD Basics", "SketchUp & 3D Modeling", "Floor Plan Drafting", "Rendering & Visualization"] },
//       { title: "MODULE 6–7: Textiles, Furnishing & Styles", items: ["Fabric Selection & Drapery", "Upholstery & Soft Furnishings", "Modern, Minimalist & Scandinavian Styles", "Traditional, Classical & Eclectic Styles"] },
//     ],
//     tools: ["AutoCAD", "SketchUp", "3ds Max", "Adobe Photoshop", "PowerPoint", "Rendering Tools"],
//     projects: ["Residential Project Design", "Commercial Project Design", "3D Rendering & Mockups", "Portfolio Building & Presentation"],
//   },
//   {
//     id: "fa", icon: "💰", title: "Finance & Accounting", subtitle: "ADVANCED",
//     color: "cyan", badge: "7 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Advanced Accounting", items: ["Overview of Financial Accounting", "Accounting Standards & Regulations", "Role of an Accountant", "Financial Statements & Reports"] },
//       { title: "MODULE 2: Corporate Financial Reporting", items: ["Balance Sheet & Income Statement", "Cash Flow Statements", "Share Capital & Reserves Accounting", "IFRS / GAAP Standards"] },
//       { title: "MODULE 3: Financial Analysis & Ratio", items: ["Financial Ratio Analysis", "Liquidity & Solvency Analysis", "Profitability & Efficiency Ratios", "Trend & Comparative Analysis"] },
//       { title: "MODULE 4: Cost & Management Accounting", items: ["Cost Classification & Allocation", "Budgeting & Variance Analysis", "Break-even Analysis", "Cost Control & Decision Making"] },
//       { title: "MODULE 5: Advanced Taxation & Compliance", items: ["Corporate Taxation", "GST & Indirect Taxes", "Tax Planning & Compliance", "Audit & Regulatory Requirements"] },
//       { title: "MODULE 6: Investment & Financial Management", items: ["Capital Budgeting", "Working Capital Management", "Investment Appraisal Techniques", "Risk Management & Financial Planning"] },
//     ],
//     tools: ["MS Excel (Advanced)", "Tally ERP", "QuickBooks", "ERP Accounting Software"],
//     projects: ["Financial Statement Analysis", "Cost Management Case Study", "Tax Planning Case Study", "Corporate Financial Simulation"],
//   },
//   {
//     id: "hr", icon: "👥", title: "Human Resource Management", subtitle: "DIPLOMA",
//     color: "pink", badge: "6 Modules",
//     modules: [
//       { title: "Introduction to HR Management", items: ["Overview of HR Functions", "Role of Technology in Modern HR", "Legal and Ethical Considerations"] },
//       { title: "HR Information Systems (HRIS)", items: ["HRIS Fundamentals & Key Features", "SAP SuccessFactors & Workday Basics", "Employee Data Management", "Creating & Managing Employee Records"] },
//       { title: "Recruitment & ATS", items: ["Recruitment & Selection Process", "LinkedIn Recruiter & Zoho Recruit", "Screening & Interview Scheduling", "Recruitment Analytics"] },
//       { title: "Performance, Payroll & Engagement", items: ["KPIs & OKRs (BambooHR, Lattice)", "Payroll Processing (ADP, QuickBooks)", "Tax Compliance & Reporting", "Employee Surveys & Feedback"] },
//       { title: "HR Analytics & L&D", items: ["HR Metrics & Workforce Analysis", "Excel & Power BI Basics", "LMS Platforms (Moodle, TalentLMS)", "Training ROI Measurement"] },
//       { title: "Strategic HRM & Cloud Tools", items: ["Workforce & Succession Planning", "Aligning HR with Business Goals", "MS Teams, Slack, Google Workspace", "Asana & Trello for HR Projects"] },
//     ],
//     tools: ["SAP SuccessFactors", "Workday", "LinkedIn Recruiter", "BambooHR", "Power BI", "Slack"],
//     projects: ["Strategic HR Plan Development", "Recruitment Pipeline Simulation", "Payroll Processing Practice", "Capstone: Full HR System Integration"],
//   },
//   {
//     id: "py", icon: "🐍", title: "Python Programming", subtitle: "FULL COURSE",
//     color: "indigo", badge: "10 Modules",
//     modules: [
//       { title: "MODULE 1: Python Fundamentals", objective: "Master Python basics", items: ["Introduction to Python", "Installation & Setup", "Variables & Data Types", "Input/Output Operations", "Comments & Indentation"] },
//       { title: "MODULE 2: Control Flow", objective: "Write decision-making programs", items: ["if / elif / else Statements", "for & while Loops", "break, continue, pass", "Nested Conditions & Loops", "Pattern Programs"] },
//       { title: "MODULE 3: Functions & Modules", objective: "Write reusable code", items: ["Defining & Calling Functions", "Arguments & Return Values", "Lambda Functions", "Built-in Modules (math, os, sys)", "Creating Custom Modules"] },
//       { title: "MODULE 4: Data Structures", objective: "Manage data efficiently", items: ["Lists & Tuples", "Dictionaries & Sets", "List Comprehensions", "Nested Data Structures", "Stacks & Queues using Python"] },
//       { title: "MODULE 5: OOP in Python", objective: "Think in objects", items: ["Classes & Objects", "Constructors & Destructors", "Inheritance & Polymorphism", "Encapsulation & Abstraction", "Dunder Methods"] },
//       { title: "MODULES 6–10: Advanced Python", objective: "Build real-world apps", items: ["File Handling & CSV/JSON", "Exception Handling", "Regular Expressions", "Database with SQLite", "Web Scraping (BeautifulSoup)", "API Requests", "GUI with Tkinter", "Automation Projects", "Interview Prep"] },
//     ],
//     tools: ["Python 3", "VS Code", "PyCharm", "Jupyter Notebook", "Git & GitHub", "SQLite", "Tkinter"],
//     projects: ["Calculator App", "File Organizer Script", "Web Scraper", "Student Management System", "To-Do CLI App", "API Data Fetcher"],
//   },
//   {
//     id: "uiux", icon: "🎨", title: "UI/UX Design", subtitle: "FULL COURSE",
//     color: "teal", badge: "9 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to UI/UX", objective: "Understand design thinking", items: ["What is UI vs UX?", "Design Thinking Process", "User-Centered Design", "Career Paths in UI/UX", "Industry Tools Overview"] },
//       { title: "MODULE 2: Design Principles", objective: "Apply visual fundamentals", items: ["Typography Basics", "Color Theory in UI", "Grid & Layout Systems", "White Space & Hierarchy", "Visual Balance & Contrast"] },
//       { title: "MODULE 3: User Research", objective: "Know your users", items: ["Qualitative vs Quantitative Research", "User Interviews & Surveys", "Personas & Empathy Maps", "User Journey Mapping", "Affinity Diagrams"] },
//       { title: "MODULE 4: Wireframing & Prototyping", objective: "Bring ideas to life", items: ["Low-fidelity Wireframes", "High-fidelity Mockups", "Interactive Prototypes in Figma", "Clickable Flows", "Usability Testing Basics"] },
//       { title: "MODULE 5: Figma Mastery", objective: "Master the industry tool", items: ["Figma Interface & Components", "Auto Layout & Constraints", "Design Systems & Tokens", "Collaborative Design", "Handoff to Developers"] },
//       { title: "MODULES 6–9: Advanced UX & Portfolio", objective: "Land a design job", items: ["Information Architecture", "Accessibility (WCAG Standards)", "Motion & Micro-interactions", "Mobile-first & Responsive Design", "Case Study Writing", "Portfolio Building", "Design Reviews & Critique", "Interview Preparation"] },
//     ],
//     tools: ["Figma", "Adobe XD", "InVision", "Notion", "Miro", "Maze (User Testing)", "Zeplin"],
//     projects: ["Mobile App Redesign", "E-commerce Website UI", "Dashboard Design", "Design System Creation", "End-to-End UX Case Study"],
//   },
//   {
//     id: "cc", icon: "☁️", title: "Cloud Computing", subtitle: "FULL COURSE",
//     color: "sky", badge: "9 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Cloud Computing", objective: "Understand cloud fundamentals", items: ["What is Cloud Computing?", "Types: IaaS, PaaS, SaaS", "Public, Private & Hybrid Cloud", "Cloud Providers Overview", "Cloud Architecture Basics"] },
//       { title: "MODULE 2: AWS Core Services", objective: "Work with Amazon Web Services", items: ["AWS Console & IAM", "EC2 (Virtual Machines)", "S3 (Storage Buckets)", "RDS (Managed Databases)", "VPC & Networking Basics"] },
//       { title: "MODULE 3: Microsoft Azure", objective: "Use Azure cloud services", items: ["Azure Portal & Subscriptions", "Azure Virtual Machines", "Azure Blob Storage", "Azure App Service", "Azure AD & Security"] },
//       { title: "MODULE 4: Google Cloud Platform", objective: "Explore GCP services", items: ["GCP Console & Projects", "Compute Engine & GKE", "Cloud Storage & BigQuery", "Firebase & Firestore", "GCP IAM & Billing"] },
//       { title: "MODULE 5: DevOps & CI/CD", objective: "Automate deployments", items: ["What is DevOps?", "Docker & Containerization", "Kubernetes Basics", "CI/CD Pipelines (GitHub Actions)", "Infrastructure as Code (Terraform)"] },
//       { title: "MODULES 6–9: Advanced Cloud & Certification Prep", objective: "Get cloud certified", items: ["Serverless Computing (Lambda, Functions)", "Cloud Security & Compliance", "Cost Optimization Strategies", "Monitoring & Logging (CloudWatch)", "AWS Solutions Architect Prep", "Azure Fundamentals (AZ-900)", "Real-world Cloud Projects", "Interview Preparation"] },
//     ],
//     tools: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux CLI"],
//     projects: ["Static Website on S3", "Scalable App on EC2", "Serverless API with Lambda", "Containerized App with Docker", "Multi-cloud Deployment Project"],
//   },
//   {
//     id: "ai", icon: "🤖", title: "Artificial Intelligence", subtitle: "FULL COURSE",
//     color: "fuchsia", badge: "12 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to AI", objective: "Understand AI fundamentals", items: ["What is AI?", "History & Evolution of AI", "Types of AI (Narrow, General, Super)", "AI vs ML vs Deep Learning", "Real-world Applications", "Ethical Concerns in AI"] },
//       { title: "MODULE 2: Python for AI", objective: "Set up your AI toolkit", items: ["Python Refresher", "NumPy & Pandas for AI", "Data Visualization", "Environment Setup (Anaconda, Colab)", "Jupyter Notebooks for AI"] },
//       { title: "MODULE 3: Search & Problem Solving", objective: "Classic AI techniques", items: ["State Space Search", "BFS & DFS Algorithms", "A* Algorithm", "Heuristic Search", "Game Trees & Minimax"] },
//       { title: "MODULE 4: Knowledge Representation", objective: "Encode world knowledge", items: ["Logic & Propositional Calculus", "First-Order Logic", "Semantic Networks", "Ontologies & Knowledge Graphs", "Expert Systems"] },
//       { title: "MODULES 5–8: Machine Learning for AI", objective: "Build intelligent models", items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Evaluation & Tuning", "SVM, KNN, Decision Trees", "Ensemble Methods", "Recommendation Systems", "Time Series Forecasting", "AutoML Tools"] },
//       { title: "MODULES 9–12: Generative AI & LLMs", objective: "Work with modern AI", items: ["Transformer Architecture", "Large Language Models (LLMs)", "Prompt Engineering", "Fine-tuning Models", "LangChain & RAG", "AI Agents & Tools", "Responsible AI", "AI in Industry & Capstone"] },
//     ],
//     tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "HuggingFace", "Google Colab", "Jupyter"],
//     projects: ["AI Chatbot", "Image Recognition System", "Recommendation Engine", "Fraud Detection Model", "LLM-Powered App", "AI Agent Automation"],
//   },
//   {
//     id: "mad", icon: "📱", title: "Mobile App Development", subtitle: "FULL COURSE",
//     color: "green", badge: "10 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Mobile Development", objective: "Understand the mobile ecosystem", items: ["Native vs Cross-platform vs Hybrid", "iOS vs Android Overview", "App Development Life Cycle", "App Store & Play Store Guidelines", "Tools & Environment Setup"] },
//       { title: "MODULE 2: React Native Fundamentals", objective: "Build cross-platform apps", items: ["React Native Architecture", "JSX & Components", "State & Props", "Navigation (React Navigation)", "Styling with StyleSheet"] },
//       { title: "MODULE 3: Core Mobile UI Components", objective: "Design mobile interfaces", items: ["FlatList & ScrollView", "TextInput & Forms", "Modal & Alerts", "Bottom Tabs & Drawer Navigation", "Responsive Layouts"] },
//       { title: "MODULE 4: State Management", objective: "Manage app data", items: ["useState & useEffect Hooks", "Context API", "Redux Toolkit", "Async Storage", "Data Fetching with Axios"] },
//       { title: "MODULE 5: Backend Integration", objective: "Connect apps to servers", items: ["REST API Integration", "Firebase Realtime Database", "Firebase Authentication", "Push Notifications (FCM)", "File Upload & Media Handling"] },
//       { title: "MODULES 6–10: Advanced & Deployment", objective: "Ship production apps", items: ["Maps & Geolocation", "Camera & Gallery Access", "In-App Purchases", "App Performance Optimization", "Testing (Jest, Detox)", "Publishing to Play Store", "Publishing to App Store", "CI/CD for Mobile", "Capstone Project", "Interview Preparation"] },
//     ],
//     tools: ["React Native", "Expo", "Android Studio", "Xcode", "Firebase", "Redux", "VS Code", "Postman", "Git & GitHub"],
//     projects: ["Todo App", "E-commerce Mobile App", "Chat Application", "Food Delivery UI Clone", "Full-stack Mobile App with Auth"],
//   },
//   {
//     id: "pd", icon: "🌟", title: "Personality Development", subtitle: "FULL COURSE",
//     color: "rose", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Personality Development", objective: "Understand yourself better", items: ["What is Personality?", "Types of Personality (MBTI, Big Five)", "Self-Awareness & Self-Assessment", "Growth Mindset vs Fixed Mindset", "Setting Personal Goals"] },
//       { title: "MODULE 2: Communication Skills", objective: "Communicate with confidence", items: ["Verbal & Non-verbal Communication", "Active Listening Skills", "Clarity & Conciseness in Speech", "Tone, Pace & Body Language", "Overcoming Communication Barriers"] },
//       { title: "MODULE 3: Confidence & Public Speaking", objective: "Speak fearlessly in public", items: ["Building Self-Confidence", "Overcoming Stage Fear", "Presentation Skills", "Impromptu Speaking Techniques", "Voice Modulation & Eye Contact"] },
//       { title: "MODULE 4: Emotional Intelligence", objective: "Master your emotions", items: ["What is EQ vs IQ?", "Self-regulation & Empathy", "Managing Stress & Anxiety", "Emotional Awareness in Workplace", "Building Positive Relationships"] },
//       { title: "MODULE 5: Leadership & Team Skills", objective: "Lead and inspire others", items: ["Leadership Styles", "Team Building & Collaboration", "Conflict Resolution", "Decision Making Skills", "Motivating Others"] },
//       { title: "MODULE 6: Professional Etiquette", objective: "Excel in professional settings", items: ["Corporate Etiquette & Grooming", "Email & Phone Etiquette", "Meeting & Interview Etiquette", "Networking Skills", "LinkedIn & Personal Branding"] },
//       { title: "MODULE 7–8: Goal Setting & Life Skills", objective: "Design your success roadmap", items: ["SMART Goal Framework", "Time Management Techniques", "Habit Building (Atomic Habits)", "Positive Thinking & Attitude", "Work-Life Balance", "Resume & Interview Preparation"] },
//     ],
//     tools: ["Zoom (Presentations)", "Canva (Personal Branding)", "LinkedIn", "Notion (Goal Tracking)", "Grammarly"],
//     projects: ["Personal Brand Portfolio", "Public Speaking Session", "Leadership Case Study", "30-Day Habit Challenge", "Mock Interview & Feedback"],
//   },
//   {
//     id: "se", icon: "🗣️", title: "Spoken English", subtitle: "FULL COURSE",
//     color: "lime", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Foundation of English Language", objective: "Build a strong English base", items: ["Parts of Speech", "Basic Sentence Structure", "Common Vocabulary Building", "Pronunciation Basics", "Phonetics & Sound System"] },
//       { title: "MODULE 2: Grammar for Speaking", objective: "Speak grammatically correct", items: ["Tenses (Present, Past, Future)", "Articles & Prepositions", "Modal Verbs", "Question Formation", "Common Grammar Mistakes to Avoid"] },
//       { title: "MODULE 3: Everyday Conversation", objective: "Talk confidently in daily life", items: ["Greetings & Introductions", "Shopping, Travel & Restaurant Conversations", "Asking for Directions", "Telephone & Email Conversations", "Small Talk & Social Phrases"] },
//       { title: "MODULE 4: Vocabulary Enhancement", objective: "Expand your word power", items: ["Synonyms, Antonyms & Homophones", "Idioms & Phrases", "Formal vs Informal Vocabulary", "Topic-based Word Lists", "Word Formation & Prefixes/Suffixes"] },
//       { title: "MODULE 5: Fluency & Pronunciation", objective: "Speak smoothly and clearly", items: ["Connected Speech Techniques", "Stress & Intonation Patterns", "Accent Reduction Basics", "Tongue Twisters & Drills", "Listening & Mimicking Native Speakers"] },
//       { title: "MODULE 6: Business English", objective: "Excel in professional English", items: ["Office & Workplace Communication", "Business Meetings & Presentations", "Email Writing in English", "Negotiation Language", "Job Interview in English"] },
//       { title: "MODULE 7–8: Advanced Speaking & Practice", objective: "Master English fluency", items: ["Group Discussions & Debates", "Story Telling Techniques", "Extempore Speaking", "Reading Comprehension", "Role Plays & Real-world Scenarios", "Final Fluency Assessment"] },
//     ],
//     tools: ["Google Meet / Zoom (Practice Sessions)", "Grammarly", "Google Translate", "BBC Learning English", "Duolingo"],
//     projects: ["Self-Introduction Video", "Business Email Writing Task", "Group Discussion Participation", "Presentation in English", "Fluency Test & Certification"],
//   },
//   {
//     id: "mso", icon: "📋", title: "Microsoft Office Professional", subtitle: "FULL COURSE",
//     color: "yellow", badge: "7 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Microsoft Office Suite", objective: "Get started with MS Office", items: ["Overview of MS Office Applications", "MS Office Interface & Navigation", "File Management & Cloud Sync (OneDrive)", "Keyboard Shortcuts & Productivity Tips", "Office 365 vs Desktop Version"] },
//       { title: "MODULE 2: Microsoft Word (Advanced)", objective: "Create professional documents", items: ["Document Formatting & Styles", "Tables, Images & SmartArt", "Mail Merge", "Track Changes & Comments", "Table of Contents & Indexing", "Templates & Macros Basics"] },
//       { title: "MODULE 3: Microsoft Excel (Professional)", objective: "Analyze data with Excel", items: ["Advanced Formulas & Functions", "Pivot Tables & Charts", "Data Validation & Conditional Formatting", "VLOOKUP, HLOOKUP, INDEX-MATCH", "Data Sorting, Filtering & Slicers"] },
//       { title: "MODULE 4: Microsoft PowerPoint (Advanced)", objective: "Design impactful presentations", items: ["Slide Design & Layouts", "Custom Animations & Transitions", "Embedding Media (Audio/Video)", "Presenter Mode & Speaker Notes", "Exporting & Sharing Presentations"] },
//       { title: "MODULE 5: Microsoft Outlook", objective: "Manage emails professionally", items: ["Email Management & Folders", "Calendar & Scheduling Meetings", "Tasks & Reminders", "Contacts & Address Book", "Out-of-Office & Email Rules"] },
//       { title: "MODULE 6: Microsoft Teams & OneNote", objective: "Collaborate effectively", items: ["MS Teams Channels & Meetings", "File Sharing & Collaboration", "OneNote for Note-taking", "Task Management with Planner", "Integration with Office Apps"] },
//       { title: "MODULE 7: Capstone & Certification Prep", objective: "Prove your Office skills", items: ["Real-world Office Projects", "MOS (Microsoft Office Specialist) Exam Prep", "Portfolio of Work", "Interview Tips for Office Skills", "Final Assessment"] },
//     ],
//     tools: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook", "Microsoft Teams", "OneNote", "OneDrive"],
//     projects: ["Professional Report in Word", "Data Dashboard in Excel", "Corporate Presentation in PowerPoint", "Email Campaign in Outlook", "Team Collaboration Project"],
//   },
//   {
//     id: "vba", icon: "📈", title: "Microsoft Excel (VBA + Macros)", subtitle: "ADVANCED",
//     color: "purple", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Excel Advanced Revision", objective: "Solidify Excel foundations", items: ["Advanced Formulas Revision", "Pivot Tables & Power Query", "Named Ranges & Dynamic Arrays", "Data Validation & Protection", "Excel Tables & Structured References"] },
//       { title: "MODULE 2: Introduction to VBA", objective: "Start programming in Excel", items: ["What is VBA & Why Use It?", "VBA Editor (Alt + F11)", "Modules, Procedures & Functions", "Variables, Data Types & Constants", "MsgBox & InputBox"] },
//       { title: "MODULE 3: Macros in Excel", objective: "Automate repetitive tasks", items: ["Recording Macros", "Editing Recorded Macros", "Assigning Macros to Buttons", "Absolute vs Relative Recording", "Macro Security Settings"] },
//       { title: "MODULE 4: VBA Control Structures", objective: "Write logical VBA programs", items: ["If / ElseIf / Else Statements", "Select Case", "For Next & For Each Loops", "Do While / Do Until Loops", "Nested Loops & Conditions"] },
//       { title: "MODULE 5: Working with Excel Objects", objective: "Control Excel with code", items: ["Workbook & Worksheet Objects", "Range & Cells Object", "Formatting Cells via VBA", "Copy, Paste & Delete via Code", "Working with Multiple Sheets"] },
//       { title: "MODULE 6: UserForms & Custom Dialogs", objective: "Build Excel-based apps", items: ["Creating UserForms", "TextBox, ComboBox, ListBox", "Command Buttons & Events", "Data Entry Forms", "Form Validation in VBA"] },
//       { title: "MODULE 7: Advanced VBA & Automation", objective: "Build powerful automation", items: ["Error Handling (On Error GoTo)", "File System Operations", "Automating Charts & Reports", "Sending Emails via VBA (Outlook)", "Connecting Excel to Databases"] },
//       { title: "MODULE 8: Projects & Real-world Applications", objective: "Apply skills to real tasks", items: ["Automated Invoice Generator", "Student Report Card System", "Inventory Management Tool", "Payroll Automation", "Dashboard with VBA Controls"] },
//     ],
//     tools: ["Microsoft Excel", "VBA Editor", "Microsoft Outlook (for automation)", "Windows File System"],
//     projects: ["Automated Invoice Generator", "Payroll Processing System", "Inventory Tracker with VBA", "Student Report Generator", "Dynamic Dashboard with Macros"],
//   },
//   {
//     id: "mac", icon: "🗃️", title: "Microsoft Access", subtitle: "FULL COURSE",
//     color: "stone", badge: "7 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to Microsoft Access", objective: "Understand database basics", items: ["What is a Database?", "Relational Database Concepts", "MS Access Interface Overview", "Types of Objects in Access", "Planning a Database"] },
//       { title: "MODULE 2: Tables & Data Entry", objective: "Create and manage data tables", items: ["Creating Tables in Design View", "Field Data Types & Properties", "Primary Keys & Indexes", "Input Masks & Validation Rules", "Importing Data from Excel/CSV"] },
//       { title: "MODULE 3: Relationships & Referential Integrity", objective: "Link tables correctly", items: ["One-to-One, One-to-Many, Many-to-Many", "Creating Relationships in Access", "Enforcing Referential Integrity", "Cascade Update & Delete", "Entity-Relationship Diagrams"] },
//       { title: "MODULE 4: Queries", objective: "Retrieve and analyze data", items: ["Select Queries", "Parameter Queries", "Crosstab Queries", "Action Queries (Update, Append, Delete, Make-Table)", "SQL View in Access"] },
//       { title: "MODULE 5: Forms", objective: "Build user-friendly data entry", items: ["Creating Forms with Wizard", "Form Design View", "Subforms & Combo Boxes", "Form Navigation & Buttons", "Conditional Formatting in Forms"] },
//       { title: "MODULE 6: Reports", objective: "Generate professional reports", items: ["Creating Reports with Wizard", "Report Design View", "Grouping, Sorting & Totals", "Charts in Reports", "Printing & Exporting Reports (PDF)"] },
//       { title: "MODULE 7: Macros, Automation & Projects", objective: "Automate and deploy databases", items: ["Access Macros Basics", "Autoexec Macro", "Switchboard & Navigation Forms", "Database Security & Password", "Capstone: Full Database Application"] },
//     ],
//     tools: ["Microsoft Access", "Microsoft Excel (for imports)", "SQL", "OneDrive"],
//     projects: ["Student Management Database", "Library Management System", "Inventory Control Database", "Hospital Records Database", "Complete Business Database App"],
//   },
//   {
//     id: "adfa", icon: "🏦", title: "Advanced Diploma in Finance & Accounting", subtitle: "DIPLOMA",
//     color: "slate", badge: "10 Modules",
//     modules: [
//       { title: "MODULE 1: Financial Accounting Fundamentals", objective: "Build a strong accounting base", items: ["Accounting Concepts & Principles", "Double Entry System", "Journal, Ledger & Trial Balance", "Bank Reconciliation Statement", "Rectification of Errors"] },
//       { title: "MODULE 2: Financial Statements & Reporting", objective: "Prepare and read financials", items: ["Trading & Profit/Loss Account", "Balance Sheet Preparation", "Cash Flow Statements", "Notes to Accounts", "IFRS & GAAP Overview"] },
//       { title: "MODULE 3: Corporate Accounting", objective: "Handle company-level accounts", items: ["Company Formation & Share Capital", "Issue & Forfeiture of Shares", "Debentures & Redemption", "Amalgamation & Mergers", "Holding Company Accounts"] },
//       { title: "MODULE 4: Cost & Management Accounting", objective: "Control costs and plan budgets", items: ["Cost Classification & Elements", "Job, Process & Batch Costing", "Marginal Costing & CVP Analysis", "Standard Costing & Variance Analysis", "Budgetary Control"] },
//       { title: "MODULE 5: Taxation — Direct & Indirect", objective: "Master Indian taxation", items: ["Income Tax — Heads of Income", "TDS & Advance Tax", "GST — Basics to Filing", "GST Returns (GSTR-1, 3B)", "Tax Planning & Compliance"] },
//       { title: "MODULE 6: Auditing & Internal Control", objective: "Ensure financial accuracy", items: ["Principles & Types of Audit", "Internal Control Systems", "Audit Planning & Documentation", "Vouching & Verification", "Audit Report Writing"] },
//       { title: "MODULE 7: Financial Management", objective: "Make smart financial decisions", items: ["Capital Structure & Leverages", "Capital Budgeting (NPV, IRR, Payback)", "Working Capital Management", "Dividend Policy", "Risk & Return Analysis"] },
//       { title: "MODULE 8: Tally Prime & Accounting Software", objective: "Work on industry-standard tools", items: ["Tally Prime — Complete Setup", "Voucher Entry & Ledger Management", "GST in Tally", "Inventory Management in Tally", "MIS Reports & Payroll in Tally"] },
//       { title: "MODULE 9: Advanced Excel for Finance", objective: "Analyze financials with Excel", items: ["Financial Functions (NPV, IRR, PMT)", "Financial Modeling Basics", "Sensitivity & Scenario Analysis", "Dashboard Creation", "Automated Reports with Formulas"] },
//       { title: "MODULE 10: Capstone & Interview Preparation", objective: "Be industry-ready", items: ["End-to-End Financial Project", "Case Study: Company Financial Analysis", "Mock Interviews & HR Questions", "Resume Building for Finance Roles", "Certification & Portfolio Prep"] },
//     ],
//     tools: ["Tally Prime", "MS Excel (Advanced)", "QuickBooks", "Zoho Books", "Google Sheets", "PowerPoint"],
//     projects: ["Complete Set of Books for a Company", "GST Filing Simulation", "Financial Statement Analysis Report", "Cost Sheet & Budget Preparation", "Audit Report Writing", "Financial Model in Excel"],
//   },
//   {
//     id: "aml", icon: "📘", title: "Anti-Money Laundering (AML)", subtitle: "CERTIFICATION COURSE",
//     color: "teal2", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to AML & Financial Crimes", objective: "Understand money laundering fundamentals", items: ["What is Money Laundering?", "Stages: Placement, Layering & Integration", "Types of Financial Crimes (Fraud, Terrorist Financing, Corruption)", "Importance of AML Compliance", "Global AML Overview"] },
//       { title: "MODULE 2: Regulatory Framework & Guidelines", objective: "Know the laws and regulators", items: ["PMLA — Prevention of Money Laundering Act (India)", "FIU-IND — Financial Intelligence Unit India", "RBI AML Guidelines", "FATF — Financial Action Task Force", "Compliance Requirements & Penalties"] },
//       { title: "MODULE 3: KYC & Customer Due Diligence (CDD)", objective: "Verify and profile customers correctly", items: ["KYC (Know Your Customer) Basics", "Customer Identification Process (CIP)", "Simplified Due Diligence (SDD)", "Enhanced Due Diligence (EDD)", "Risk-Based Approach (RBA)", "Customer Risk Profiling"] },
//       { title: "MODULE 4: Transaction Monitoring & Red Flags", objective: "Detect suspicious activity", items: ["What are Suspicious Transactions?", "Red Flag Indicators", "Unusual Transaction Patterns", "Structuring / Smurfing", "Monitoring Techniques", "Overview of AML Software Tools"] },
//       { title: "MODULE 5: Reporting & Documentation", objective: "File reports accurately and on time", items: ["Suspicious Transaction Report (STR)", "Cash Transaction Report (CTR)", "Record Keeping Requirements", "Reporting Process to FIU-IND", "Case Documentation Best Practices"] },
//       { title: "MODULE 6: AML Investigation & Case Handling", objective: "Handle real-world AML cases", items: ["Investigation Process Overview", "Case Studies & Real-life Scenarios", "Evidence Collection Techniques", "Internal Reporting Procedures", "Escalation Matrix"] },
//       { title: "MODULE 7: Technology in AML", objective: "Use tech tools for AML compliance", items: ["Transaction Monitoring Systems", "Name Screening & Watchlist Tools", "Introduction to Data Analytics in AML", "Role of AI & Machine Learning in AML", "Basics of SQL & Excel for AML Analysts"] },
//       { title: "MODULE 8: Risk Management & Final Assessment", objective: "Build a complete AML risk framework", items: ["AML Risk Management Framework", "Enterprise Risk Assessment", "Compliance Audits", "Final Project / Case Study", "Certification Test"] },
//     ],
//     tools: ["MS Excel (Data Analysis)", "SQL Basics", "Transaction Monitoring Software (Overview)", "KYC Verification Tools", "FIU Reporting Portal"],
//     projects: ["KYC Form Analysis Exercise", "Suspicious Transaction Identification", "Excel-based AML Data Analysis", "Mock STR / CTR Filing", "Real-world AML Case Study"],
//   },
//   {
//     id: "tally", icon: "🧾", title: "Tally Prime + GST Professional", subtitle: "PROFESSIONAL COURSE",
//     color: "teal3", badge: "6 Modules",
//     modules: [
//       { title: "MODULE 1: Accounting Fundamentals & Introduction to Tally", objective: "Build accounting knowledge before touching software", items: ["Basic Accounting Concepts & Principles", "Types of Accounts & Accounting Rules", "Debit & Credit Fundamentals", "Overview of TallyPrime Interface & Navigation", "Creating & Managing Company Data", "Understanding Gateways & Menus", "Company Creation & Configuration", "Setting Financial Year & Company Details", "Configuring Accounting Features"] },
//       { title: "MODULE 2: Ledgers, Groups & Voucher Entries", objective: "Record daily business transactions accurately", items: ["Understanding Ledger Accounts", "Creating & Organizing Ledger Groups", "Party, Expense & Income Ledgers", "Payment Voucher", "Receipt Voucher", "Contra Voucher", "Journal Voucher", "Recording Purchase & Sales Transactions", "Handling Credit & Cash Transactions"] },
//       { title: "MODULE 3: Inventory Management in Tally", objective: "Manage goods and stock alongside accounting", items: ["Stock Groups & Stock Items", "Units of Measurement", "Inventory Categories", "Purchase Orders & Sales Orders", "Delivery Notes & Receipt Notes", "Managing Stock Movement", "Stock Summary Reports", "Inventory Valuation Methods"] },
//       { title: "MODULE 4: GST Configuration & Transactions", objective: "Handle GST compliance inside TallyPrime", items: ["Overview of GST Taxation System", "Types of GST: CGST, SGST & IGST", "Enabling GST Features in Tally", "Setting GST Rates & Tax Ledgers", "GST Purchase Entries", "GST Sales Entries", "Input Tax Credit (ITC) Concept", "Creating GST Invoices"] },
//       { title: "MODULE 5: GST Returns & Tax Compliance", objective: "Prepare and file GST returns correctly", items: ["GST Summary Reports", "Input & Output Tax Reports", "GSTR-1 Report Generation", "GSTR-3B Overview", "Understanding E-Invoicing System", "Generating E-Way Bills", "Checking Tax Liabilities"] },
//       { title: "MODULE 6: Financial Reports & Data Management", objective: "Extract financial insights and secure data", items: ["Balance Sheet in Tally", "Profit & Loss Account", "Trial Balance", "Ledger Reports", "Cash Flow & Fund Flow Statements", "Backup & Restore Company Data", "Exporting Reports to Excel & PDF"] },
//     ],
//     tools: ["TallyPrime", "Microsoft Excel (for exports)", "GST Portal (Overview)", "E-Way Bill Portal", "E-Invoice System"],
//     projects: ["Company Setup with Full Accounting Entries", "GST Invoice Creation & ITC Tracking", "Inventory System for a Trading Business", "Complete GST Return Preparation (GSTR-1 & 3B)", "Financial Reports & Year-end Closing"],
//   },

//   // ─── 7 NEW COURSES ────────────────────────────────────────────────────────────

//   {
//     id: "cia", icon: "🏭", title: "Certified Industrial Accountant (CIA)", subtitle: "CERTIFICATION COURSE",
//     color: "ciacolor", badge: "7 Modules",
//     modules: [
//       { title: "MODULE 1: Fundamentals of Accounting & Business Finance", objective: "Build a solid conceptual accounting base", items: ["Basic Accounting Concepts & Conventions", "Types of Accounts & Golden Rules", "Debit & Credit System", "Journal Entries & Ledger Posting", "Trial Balance Preparation", "Rectification of Errors", "Profit & Loss Account", "Balance Sheet Preparation", "Understanding Financial Position of a Business"] },
//       { title: "MODULE 2: Advanced Excel for Finance & MIS", objective: "Master Excel for financial analysis and reporting", items: ["Data Entry & Spreadsheet Management", "Formatting & Worksheet Structure", "Logical Functions (IF, AND, OR)", "Lookup Functions (VLOOKUP, HLOOKUP, XLOOKUP)", "Financial Formulas", "Pivot Tables & Pivot Charts", "Data Sorting & Filtering", "Conditional Formatting", "Creating Dashboards", "Financial Data Visualization", "Automated MIS Reports"] },
//       { title: "MODULE 3: Computerized Accounting using Tally", objective: "Handle real-world accounting in Tally", items: ["Setting Up Companies in Tally", "Configuring Accounting Features", "Creating Ledger Accounts", "Recording Business Transactions", "Stock Groups & Stock Items", "Inventory Tracking & Valuation"] },
//       { title: "MODULE 4: GST & Taxation Compliance", objective: "Handle tax compliance as an accountant", items: ["GST Structure & Taxation System", "Types of GST: CGST, SGST & IGST", "GST Purchase & Sales Entries", "Input Tax Credit (ITC)", "GST Reports & Summaries", "Preparation of GSTR-1 & GSTR-3B"] },
//       { title: "MODULE 5: Cost Accounting & Industrial Accounting", objective: "Understand cost control and business efficiency", items: ["Types of Costs & Cost Classification", "Cost Analysis", "FIFO, LIFO & Weighted Average Methods", "Cost Tracking for Inventory", "Budget Preparation", "Variance Analysis"] },
//       { title: "MODULE 6: Financial Analysis & Business Reporting", objective: "Interpret financial data for decisions", items: ["Liquidity, Profitability & Efficiency Ratios", "Understanding Cash Movement in Business", "Preparing Cash Flow Statements", "Preparing Management Reports", "Financial Decision Support", "Business Performance Evaluation"] },
//       { title: "MODULE 7: Professional Skills & Interview Preparation", objective: "Be workplace and interview ready", items: ["Business Communication Skills", "Email & Workplace Etiquette", "Resume Building for Accounting Roles", "Interview Question Practice", "Job Roles in Accounting & Finance", "Industry Expectations & Career Guidance"] },
//     ],
//     tools: ["Advanced Excel", "Tally Prime", "GST Portal", "Power BI (Basics)", "MS Word (Reports)"],
//     projects: ["Financial MIS Dashboard", "Budget & Expense Analysis Sheet", "Full Accounting Records in Tally", "GST Invoice & Return Preparation", "Financial Ratio Analysis Report", "Cost Analysis & Budget Planning Project"],
//   },

//   {
//     id: "busy", icon: "🖥️", title: "BUSY Accounting Software", subtitle: "PROFESSIONAL COURSE",
//     color: "busycolor", badge: "6 Modules",
//     modules: [
//       { title: "MODULE 1: Accounting Fundamentals & Introduction to BUSY", objective: "Learn accounting logic before using the software", items: ["Basic Accounting Concepts & Principles", "Types of Accounts & Accounting Rules", "Debit & Credit System", "Overview of BUSY Interface & Features", "Understanding Company Data & Menus", "Navigating the Accounting Environment", "Creating a New Company in BUSY", "Setting Financial Year & Company Details", "Configuring Accounting Features"] },
//       { title: "MODULE 2: Ledger Management & Voucher Entries", objective: "Record daily accounting transactions accurately", items: ["Creating Ledger Accounts", "Organizing Accounts into Groups", "Party, Income & Expense Ledgers", "Payment Voucher", "Receipt Voucher", "Journal Voucher", "Contra Voucher", "Recording Purchase & Sales Entries", "Handling Cash & Credit Transactions"] },
//       { title: "MODULE 3: Inventory Management & Billing", objective: "Manage stock and billing in BUSY", items: ["Creating Stock Groups & Items", "Units of Measurement", "Managing Product Categories", "Creating Purchase Invoices", "Creating Sales Invoices", "Managing Discount & Tax Settings", "Stock Movement Tracking", "Inventory Valuation Methods"] },
//       { title: "MODULE 4: GST Configuration & Transactions", objective: "Handle GST compliance in BUSY", items: ["Structure of GST Taxation System", "Types of GST: CGST, SGST & IGST", "Enabling GST Features in BUSY", "Creating GST Tax Categories & Rates", "GST Purchase Entries", "GST Sales Entries", "Input Tax Credit Management"] },
//       { title: "MODULE 5: GST Returns & Tax Reports", objective: "Prepare and file GST compliance reports", items: ["GST Summary Reports", "Input & Output Tax Reports", "GSTR-1 Report Generation", "GSTR-3B Overview", "Understanding E-Way Bill System", "Generating E-Way Bill Data", "Checking Tax Liabilities"] },
//       { title: "MODULE 6: Financial Reports & Data Management", objective: "Extract business insights and manage data", items: ["Balance Sheet", "Profit & Loss Account", "Trial Balance", "Ledger Reports", "Sales & Purchase Analysis Reports", "Backup & Restore Company Data", "Exporting Reports to Excel & PDF"] },
//     ],
//     tools: ["BUSY Accounting Software", "Microsoft Excel (for exports)", "GST Portal (Overview)", "E-Way Bill Portal"],
//     projects: ["Company Account Setup in BUSY", "GST Invoice Generation & ITC Tracking", "Inventory Billing System", "Complete GST Return Preparation", "Financial Statements & Reports"],
//   },

//   {
//     id: "sapfico", icon: "💼", title: "SAP FICO Professional", subtitle: "PROFESSIONAL COURSE",
//     color: "sapfico", badge: "7 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to ERP & SAP Environment", objective: "Understand enterprise systems before SAP FICO", items: ["What is Enterprise Resource Planning?", "Business Process Integration", "Role of ERP in Modern Organizations", "SAP Architecture & System Landscape", "SAP Navigation & Interface", "Organizational Structure in SAP", "SAP Transaction Codes"] },
//       { title: "MODULE 2: SAP Financial Accounting (FI) Fundamentals", objective: "Record and manage financial transactions in SAP", items: ["Chart of Accounts", "Posting Transactions", "Financial Document Structure", "Vendor Master Creation", "Vendor Invoice Processing", "Payment Processing", "Customer Master Data", "Customer Invoicing", "Incoming Payments"] },
//       { title: "MODULE 3: Asset Accounting", objective: "Manage fixed assets and depreciation", items: ["Asset Creation & Classification", "Asset Accounting Structure", "Asset Acquisition", "Asset Transfer & Retirement", "Depreciation Calculation Methods", "Depreciation Posting"] },
//       { title: "MODULE 4: SAP Controlling (CO)", objective: "Track internal costs and profitability", items: ["Creating Cost Centers", "Cost Allocation & Planning", "Tracking Project & Department Costs", "Budget Monitoring", "Profit Center Structure", "Profitability Analysis"] },
//       { title: "MODULE 5: Financial Reporting & Analysis", objective: "Generate accurate financial insights in SAP", items: ["Balance Sheet & Profit & Loss Statements", "General Ledger Reporting", "Cost Reports", "Profitability Reports", "Financial Data Interpretation", "Decision-support Reporting"] },
//       { title: "MODULE 6: Integration with Other SAP Modules", objective: "Understand SAP cross-department integration", items: ["Financial Impact of Procurement (MM)", "Accounting Entries from Sales Activities (SD)", "Cost Tracking for Manufacturing (PP)", "Cross-module Business Process Simulations"] },
//       { title: "MODULE 7: SAP Implementation Basics & Career Preparation", objective: "Prepare for SAP projects and interviews", items: ["SAP Project Lifecycle Stages", "Configuration vs End-user Roles", "Understanding Configuration Settings", "Testing Financial Processes", "SAP FICO Consultant Roles", "Resume Preparation & Interview Guidance"] },
//     ],
//     tools: ["SAP FICO (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"],
//     projects: ["General Ledger Posting Exercise", "Accounts Payable & Receivable Simulation", "Asset Lifecycle Management", "Cost Center Allocation Project", "Financial Report Generation", "Integrated Business Process Case Study"],
//   },

//   {
//     id: "sapmm", icon: "📦", title: "SAP MM (Materials Management)", subtitle: "PROFESSIONAL COURSE",
//     color: "sapmm", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to ERP & SAP Environment", objective: "Understand ERP systems before SAP MM", items: ["What ERP Systems Do in Organizations", "Integration of Finance, Procurement & Operations", "Business Process Automation", "SAP System Architecture", "SAP Navigation & Interface", "Transaction Codes & Menus"] },
//       { title: "MODULE 2: Organizational Structure in SAP MM", objective: "Set up SAP structure for procurement and inventory", items: ["Client, Company Code, Plant & Storage Location", "Purchasing Organization & Purchasing Group", "Creating & Maintaining Material Master Records", "Material Types & Material Groups"] },
//       { title: "MODULE 3: Procurement Process in SAP", objective: "Master the core procurement workflow", items: ["Creating Purchase Requisitions", "Approval & Release Process", "Vendor Quotation Management", "Comparing Vendor Offers", "Creating & Managing Purchase Orders", "Vendor Selection & Procurement Process"] },
//       { title: "MODULE 4: Inventory Management", objective: "Manage stock within the organization", items: ["Recording Goods Received from Vendors", "Stock Updating in SAP", "Issuing Materials for Production or Sale", "Managing Stock Movements", "Moving Stock Between Storage Locations", "Inventory Adjustments"] },
//       { title: "MODULE 5: Invoice Verification", objective: "Ensure financial accuracy in procurement", items: ["Vendor Invoice Verification", "Three-way Matching (PO, Goods Receipt, Invoice)", "Financial Accounting Integration", "Handling Invoice Discrepancies"] },
//       { title: "MODULE 6: Reporting & Inventory Analysis", objective: "Analyze procurement and inventory data", items: ["Purchase Order Reports", "Vendor Performance Analysis", "Stock Overview Reports", "Material Movement Reports", "Procurement Cost Analysis", "Inventory Optimization Insights"] },
//       { title: "MODULE 7: Integration with Other SAP Modules", objective: "Understand SAP MM cross-module connections", items: ["Financial Impact of Procurement (FI)", "Material Planning for Manufacturing (PP)", "Inventory Availability for Sales (SD)", "Cross-module Transaction Flow Analysis"] },
//       { title: "MODULE 8: SAP Implementation Basics & Career Preparation", objective: "Prepare for real SAP project environments", items: ["SAP Project Lifecycle & Business Blueprinting", "Configuration vs End-user Roles", "Unit Testing & Integration Testing", "Troubleshooting SAP Transactions", "SAP MM Consultant Roles", "Resume Preparation & Interview Guidance"] },
//     ],
//     tools: ["SAP MM (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"],
//     projects: ["Material Master Data Creation", "Purchase Requisition to PO Workflow", "Goods Receipt Simulation", "Invoice Verification Exercise", "Procurement Report Generation", "Cross-module Business Process Case Study"],
//   },

//   {
//     id: "sapsd", icon: "🚚", title: "SAP SD (Sales & Distribution)", subtitle: "PROFESSIONAL COURSE",
//     color: "sapsd", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to ERP & SAP Environment", objective: "Understand ERP before learning SAP SD", items: ["Understanding ERP Systems & Their Role", "Integration of Sales, Finance, Logistics & Procurement", "Business Process Automation", "SAP Interface & Navigation", "Transaction Codes & Menu Structure", "SAP Organizational Hierarchy"] },
//       { title: "MODULE 2: Organizational Structure in SAP SD", objective: "Set up SAP for efficient sales management", items: ["Client & Company Code", "Sales Organization", "Distribution Channel & Division", "Customer Master Data", "Material Master Data", "Customer-Material Information Records"] },
//       { title: "MODULE 3: Sales Order Processing", objective: "Master the core sales workflow in SAP", items: ["Customer Inquiries", "Quotation Creation", "Creating Sales Orders", "Order Confirmation Process", "Managing Order Changes", "Pricing Procedures", "Discounts & Special Pricing Conditions"] },
//       { title: "MODULE 4: Delivery & Shipping Process", objective: "Manage delivery logistics in SAP", items: ["Creating Outbound Deliveries", "Picking & Packing Processes", "Shipment Scheduling", "Transportation Management Basics", "Posting Goods Issue", "Updating Inventory & Financial Records"] },
//       { title: "MODULE 5: Billing & Invoice Processing", objective: "Convert deliveries into financial transactions", items: ["Creating Billing Documents", "Invoice Generation", "Standard Invoices", "Credit & Debit Memos", "Sales Accounting Integration", "Financial Impact of Billing"] },
//       { title: "MODULE 6: Reporting & Sales Analysis", objective: "Analyze sales performance in SAP", items: ["Sales Order Reports", "Delivery Status Reports", "Customer Sales Performance", "Customer Profitability Analysis", "Monitoring Sales Trends", "Sales Forecasting Basics"] },
//       { title: "MODULE 7: Integration with Other SAP Modules", objective: "Understand SAP SD cross-module flow", items: ["Inventory Updates After Sales (MM)", "Billing Impact on Financial Accounting (FI)", "Sales Demand Influencing Production (PP)", "Cross-module Transaction Flow Analysis"] },
//       { title: "MODULE 8: SAP Implementation Basics & Career Preparation", objective: "Prepare for SAP SD roles in industry", items: ["SAP Project Planning & Business Blueprinting", "Configuration & System Testing", "Unit Testing & Integration Testing", "Resolving Transaction Errors", "SAP SD Consultant Roles", "Resume Building & Interview Preparation"] },
//     ],
//     tools: ["SAP SD (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"],
//     projects: ["Customer Master Data Setup", "Sales Order to Billing Workflow", "Delivery & Shipment Simulation", "Invoice Processing Exercise", "Sales Performance Report", "Integrated SD-MM-FI Case Study"],
//   },

//   {
//     id: "sappp", icon: "🏗️", title: "SAP PP (Production Planning)", subtitle: "PROFESSIONAL COURSE",
//     color: "sappp", badge: "8 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to ERP & SAP Environment", objective: "Understand ERP before SAP PP", items: ["What ERP Systems Do in Organizations", "Integration of Manufacturing, Finance, Procurement & Sales", "Business Process Automation", "SAP Interface & Navigation", "Transaction Codes & Menu Structure", "SAP Enterprise Organizational Structure"] },
//       { title: "MODULE 2: Organizational Structure & Master Data", objective: "Set up accurate master data for production", items: ["Client & Company Code", "Plant & Storage Locations", "Work Centers & Production Lines", "Material Types & Material Master Records", "Production-related Material Settings", "Creating Bill of Materials (BOM)", "Managing Component Structures"] },
//       { title: "MODULE 3: Work Centers & Routing", objective: "Organize production activities logically", items: ["Defining Work Centers", "Assigning Capacity & Resources", "Defining Production Operations", "Sequencing Manufacturing Activities", "Setup Time & Processing Time", "Machine Capacity Planning"] },
//       { title: "MODULE 4: Production Planning Process", objective: "Plan manufacturing activities in SAP", items: ["Forecasting Product Demand", "Managing Planned Independent Requirements", "Understanding MRP Logic", "Generating Procurement Proposals", "Creating Planned Orders", "Converting Planned Orders into Production Orders"] },
//       { title: "MODULE 5: Production Execution", objective: "Execute and monitor production orders", items: ["Creating Production Orders", "Scheduling Manufacturing Operations", "Goods Issue for Production", "Goods Receipt of Finished Products", "Recording Production Progress", "Updating Order Status"] },
//       { title: "MODULE 6: Quality Control & Production Monitoring", objective: "Monitor and improve manufacturing performance", items: ["Monitoring Production Status", "Identifying Production Bottlenecks", "Quality Checks in Production Processes", "Handling Defective Materials", "Production Performance Reports", "Capacity Utilization Reports"] },
//       { title: "MODULE 7: Integration with Other SAP Modules", objective: "Understand SAP PP cross-module connections", items: ["Procurement of Raw Materials (MM)", "Sales Orders Triggering Production Demand (SD)", "Production Costs Affecting Financial Accounting (FI)", "Cross-module Process Simulations"] },
//       { title: "MODULE 8: SAP Implementation Basics & Career Preparation", objective: "Prepare for SAP PP consultant roles", items: ["SAP Project Planning & Configuration", "Testing & Deployment Stages", "Unit Testing Production Processes", "Resolving Configuration Issues", "SAP PP Consultant Roles", "Resume Preparation & Interview Guidance"] },
//     ],
//     tools: ["SAP PP (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"],
//     projects: ["Material Master & BOM Creation", "Work Center & Routing Setup", "MRP Simulation Exercise", "Production Order Processing", "Manufacturing Report Generation", "Cross-module PP-MM-FI Case Study"],
//   },

//   {
//     id: "saphcm", icon: "👔", title: "SAP HCM (Human Capital Management)", subtitle: "PROFESSIONAL COURSE",
//     color: "saphcm", badge: "9 Modules",
//     modules: [
//       { title: "MODULE 1: Introduction to ERP & SAP Environment", objective: "Understand ERP architecture before SAP HCM", items: ["What ERP Systems Do in Organizations", "Integration of HR, Finance & Operations", "Role of ERP in Business Management", "SAP Interface & Navigation", "Transaction Codes & Menu Structure", "SAP Organizational Hierarchy"] },
//       { title: "MODULE 2: Organizational Management", objective: "Structure the organization logically in SAP", items: ["Creating Organizational Units", "Defining Positions & Jobs", "Employee Reporting Structure", "Position Assignments", "Workforce Structure Management", "Organizational Hierarchy Visualization"] },
//       { title: "MODULE 3: Personnel Administration", objective: "Manage employee records and HR data", items: ["Creating Employee Master Records", "Managing Employee Information", "Hiring Employees", "Promotions & Transfers", "Employee Separation Processes", "Maintaining HR Records"] },
//       { title: "MODULE 4: Time Management", objective: "Track employee working hours and attendance", items: ["Attendance Tracking", "Leave & Absence Management", "Creating Work Schedules", "Shift Planning", "Monitoring Working Hours", "Calculating Overtime"] },
//       { title: "MODULE 5: Payroll Management", objective: "Ensure accurate employee payroll processing", items: ["Salary Components & Wage Types", "Payroll Configuration Basics", "Running Payroll Cycles", "Salary Calculation", "Payslip Generation", "Payroll Analysis Reports"] },
//       { title: "MODULE 6: Recruitment & Talent Management", objective: "Manage hiring and employee development", items: ["Managing Job Vacancies", "Candidate Application Tracking", "Training Programs", "Performance Evaluations", "Employee Growth Tracking", "Succession Planning Basics"] },
//       { title: "MODULE 7: Reporting & HR Analytics", objective: "Analyze workforce data in SAP", items: ["Employee Information Reports", "Workforce Analysis Reports", "Employee Performance Tracking", "HR Decision-support Reporting", "Workforce Statistics", "HR Planning Insights"] },
//       { title: "MODULE 8: Integration with Other SAP Modules", objective: "Understand SAP HCM cross-module connections", items: ["Payroll Impact on Financial Accounting (FI)", "Employee Allocation to Projects (PS)", "Workforce Scheduling & Productivity Tracking", "Cross-module HR Transaction Simulations"] },
//       { title: "MODULE 9: SAP Implementation Basics & Career Preparation", objective: "Prepare for SAP HCM consultant roles", items: ["SAP Project Phases & Configuration Basics", "Testing & Deployment Processes", "Identifying & Resolving System Errors", "Validating HR Workflows", "SAP HCM Consultant Roles", "Resume Building & Interview Preparation"] },
//     ],
//     tools: ["SAP HCM (ECC / S/4HANA)", "SAP GUI", "MS Excel (for HR reporting)", "SAP Fiori (Overview)"],
//     projects: ["Organizational Structure Setup", "Employee Lifecycle Management", "Payroll Processing Simulation", "Time & Attendance Management", "HR Reports & Workforce Analytics", "Cross-module HCM-FI Case Study"],
//   },
// ];

// // ─── Theme map ────────────────────────────────────────────────────────────────

// const colorMap = {
//   blue:      { ring: "ring-blue-400",    bg: "bg-blue-50",     text: "text-blue-700",    badge: "bg-blue-100 text-blue-700",       tool: "bg-blue-50 text-blue-800 border-blue-200",         dot: "bg-blue-400",    glow: "shadow-blue-200",    modBg: "bg-blue-50",     modBorder: "border-blue-300",    modText: "text-blue-700"    },
//   emerald:   { ring: "ring-emerald-400", bg: "bg-emerald-50",  text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", tool: "bg-emerald-50 text-emerald-800 border-emerald-200", dot: "bg-emerald-400", glow: "shadow-emerald-200", modBg: "bg-emerald-50",  modBorder: "border-emerald-300", modText: "text-emerald-700" },
//   violet:    { ring: "ring-violet-400",  bg: "bg-violet-50",   text: "text-violet-700",  badge: "bg-violet-100 text-violet-700",   tool: "bg-violet-50 text-violet-800 border-violet-200",   dot: "bg-violet-400",  glow: "shadow-violet-200",  modBg: "bg-violet-50",   modBorder: "border-violet-300",  modText: "text-violet-700"  },
//   red:       { ring: "ring-red-400",     bg: "bg-red-50",      text: "text-red-700",     badge: "bg-red-100 text-red-700",         tool: "bg-red-50 text-red-800 border-red-200",           dot: "bg-red-400",     glow: "shadow-red-200",     modBg: "bg-red-50",      modBorder: "border-red-300",     modText: "text-red-700"     },
//   amber:     { ring: "ring-amber-400",   bg: "bg-amber-50",    text: "text-amber-700",   badge: "bg-amber-100 text-amber-700",     tool: "bg-amber-50 text-amber-800 border-amber-200",     dot: "bg-amber-400",   glow: "shadow-amber-200",   modBg: "bg-amber-50",    modBorder: "border-amber-300",   modText: "text-amber-700"   },
//   orange:    { ring: "ring-orange-400",  bg: "bg-orange-50",   text: "text-orange-700",  badge: "bg-orange-100 text-orange-700",   tool: "bg-orange-50 text-orange-800 border-orange-200",   dot: "bg-orange-400",  glow: "shadow-orange-200",  modBg: "bg-orange-50",   modBorder: "border-orange-300",  modText: "text-orange-700"  },
//   cyan:      { ring: "ring-cyan-400",    bg: "bg-cyan-50",     text: "text-cyan-700",    badge: "bg-cyan-100 text-cyan-700",       tool: "bg-cyan-50 text-cyan-800 border-cyan-200",         dot: "bg-cyan-400",    glow: "shadow-cyan-200",    modBg: "bg-cyan-50",     modBorder: "border-cyan-300",    modText: "text-cyan-700"    },
//   pink:      { ring: "ring-pink-400",    bg: "bg-pink-50",     text: "text-pink-700",    badge: "bg-pink-100 text-pink-700",       tool: "bg-pink-50 text-pink-800 border-pink-200",         dot: "bg-pink-400",    glow: "shadow-pink-200",    modBg: "bg-pink-50",     modBorder: "border-pink-300",    modText: "text-pink-700"    },
//   indigo:    { ring: "ring-indigo-400",  bg: "bg-indigo-50",   text: "text-indigo-700",  badge: "bg-indigo-100 text-indigo-700",   tool: "bg-indigo-50 text-indigo-800 border-indigo-200",   dot: "bg-indigo-400",  glow: "shadow-indigo-200",  modBg: "bg-indigo-50",   modBorder: "border-indigo-300",  modText: "text-indigo-700"  },
//   teal:      { ring: "ring-teal-400",    bg: "bg-teal-50",     text: "text-teal-700",    badge: "bg-teal-100 text-teal-700",       tool: "bg-teal-50 text-teal-800 border-teal-200",         dot: "bg-teal-400",    glow: "shadow-teal-200",    modBg: "bg-teal-50",     modBorder: "border-teal-300",    modText: "text-teal-700"    },
//   sky:       { ring: "ring-sky-400",     bg: "bg-sky-50",      text: "text-sky-700",     badge: "bg-sky-100 text-sky-700",         tool: "bg-sky-50 text-sky-800 border-sky-200",           dot: "bg-sky-400",     glow: "shadow-sky-200",     modBg: "bg-sky-50",      modBorder: "border-sky-300",     modText: "text-sky-700"     },
//   fuchsia:   { ring: "ring-fuchsia-400", bg: "bg-fuchsia-50",  text: "text-fuchsia-700", badge: "bg-fuchsia-100 text-fuchsia-700", tool: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200", dot: "bg-fuchsia-400", glow: "shadow-fuchsia-200", modBg: "bg-fuchsia-50",  modBorder: "border-fuchsia-300", modText: "text-fuchsia-700" },
//   green:     { ring: "ring-green-400",   bg: "bg-green-50",    text: "text-green-700",   badge: "bg-green-100 text-green-700",     tool: "bg-green-50 text-green-800 border-green-200",     dot: "bg-green-400",   glow: "shadow-green-200",   modBg: "bg-green-50",    modBorder: "border-green-300",   modText: "text-green-700"   },
//   rose:      { ring: "ring-rose-400",    bg: "bg-rose-50",     text: "text-rose-700",    badge: "bg-rose-100 text-rose-700",       tool: "bg-rose-50 text-rose-800 border-rose-200",         dot: "bg-rose-400",    glow: "shadow-rose-200",    modBg: "bg-rose-50",     modBorder: "border-rose-300",    modText: "text-rose-700"    },
//   lime:      { ring: "ring-lime-400",    bg: "bg-lime-50",     text: "text-lime-700",    badge: "bg-lime-100 text-lime-700",       tool: "bg-lime-50 text-lime-800 border-lime-200",         dot: "bg-lime-400",    glow: "shadow-lime-200",    modBg: "bg-lime-50",     modBorder: "border-lime-300",    modText: "text-lime-700"    },
//   yellow:    { ring: "ring-yellow-400",  bg: "bg-yellow-50",   text: "text-yellow-700",  badge: "bg-yellow-100 text-yellow-700",   tool: "bg-yellow-50 text-yellow-800 border-yellow-200",   dot: "bg-yellow-400",  glow: "shadow-yellow-200",  modBg: "bg-yellow-50",   modBorder: "border-yellow-300",  modText: "text-yellow-700"  },
//   purple:    { ring: "ring-purple-400",  bg: "bg-purple-50",   text: "text-purple-700",  badge: "bg-purple-100 text-purple-700",   tool: "bg-purple-50 text-purple-800 border-purple-200",   dot: "bg-purple-400",  glow: "shadow-purple-200",  modBg: "bg-purple-50",   modBorder: "border-purple-300",  modText: "text-purple-700"  },
//   stone:     { ring: "ring-stone-400",   bg: "bg-stone-50",    text: "text-stone-700",   badge: "bg-stone-100 text-stone-700",     tool: "bg-stone-50 text-stone-800 border-stone-200",     dot: "bg-stone-400",   glow: "shadow-stone-200",   modBg: "bg-stone-50",    modBorder: "border-stone-300",   modText: "text-stone-700"   },
//   slate:     { ring: "ring-slate-400",   bg: "bg-slate-50",    text: "text-slate-700",   badge: "bg-slate-100 text-slate-700",     tool: "bg-slate-50 text-slate-800 border-slate-200",     dot: "bg-slate-400",   glow: "shadow-slate-200",   modBg: "bg-slate-50",    modBorder: "border-slate-300",   modText: "text-slate-700"   },
//   teal2:     { ring: "ring-cyan-600",    bg: "bg-cyan-100",    text: "text-cyan-800",    badge: "bg-cyan-200 text-cyan-800",       tool: "bg-cyan-100 text-cyan-900 border-cyan-300",       dot: "bg-cyan-600",    glow: "shadow-cyan-300",    modBg: "bg-cyan-100",    modBorder: "border-cyan-400",    modText: "text-cyan-800"    },
//   teal3:     { ring: "ring-emerald-600", bg: "bg-emerald-100", text: "text-emerald-800", badge: "bg-emerald-200 text-emerald-800", tool: "bg-emerald-100 text-emerald-900 border-emerald-300", dot: "bg-emerald-600", glow: "shadow-emerald-300", modBg: "bg-emerald-100", modBorder: "border-emerald-400", modText: "text-emerald-800" },
//   // ─── 7 New Course Colors ──────────────────────────────────────────────────
//   ciacolor:  { ring: "ring-orange-500",  bg: "bg-orange-100",  text: "text-orange-800",  badge: "bg-orange-200 text-orange-800",   tool: "bg-orange-100 text-orange-900 border-orange-300",  dot: "bg-orange-500",  glow: "shadow-orange-300",  modBg: "bg-orange-100",  modBorder: "border-orange-400",  modText: "text-orange-800"  },
//   busycolor: { ring: "ring-teal-500",    bg: "bg-teal-100",    text: "text-teal-800",    badge: "bg-teal-200 text-teal-800",       tool: "bg-teal-100 text-teal-900 border-teal-300",       dot: "bg-teal-500",    glow: "shadow-teal-300",    modBg: "bg-teal-100",    modBorder: "border-teal-400",    modText: "text-teal-800"    },
//   sapfico:   { ring: "ring-blue-600",    bg: "bg-blue-100",    text: "text-blue-800",    badge: "bg-blue-200 text-blue-800",       tool: "bg-blue-100 text-blue-900 border-blue-300",       dot: "bg-blue-600",    glow: "shadow-blue-300",    modBg: "bg-blue-100",    modBorder: "border-blue-400",    modText: "text-blue-800"    },
//   sapmm:     { ring: "ring-amber-500",   bg: "bg-amber-100",   text: "text-amber-800",   badge: "bg-amber-200 text-amber-800",     tool: "bg-amber-100 text-amber-900 border-amber-300",     dot: "bg-amber-500",   glow: "shadow-amber-300",   modBg: "bg-amber-100",   modBorder: "border-amber-400",   modText: "text-amber-800"   },
//   sapsd:     { ring: "ring-violet-500",  bg: "bg-violet-100",  text: "text-violet-800",  badge: "bg-violet-200 text-violet-800",   tool: "bg-violet-100 text-violet-900 border-violet-300",  dot: "bg-violet-500",  glow: "shadow-violet-300",  modBg: "bg-violet-100",  modBorder: "border-violet-400",  modText: "text-violet-800"  },
//   sappp:     { ring: "ring-green-600",   bg: "bg-green-100",   text: "text-green-800",   badge: "bg-green-200 text-green-800",     tool: "bg-green-100 text-green-900 border-green-300",     dot: "bg-green-600",   glow: "shadow-green-300",   modBg: "bg-green-100",   modBorder: "border-green-400",   modText: "text-green-800"   },
//   saphcm:    { ring: "ring-pink-500",    bg: "bg-pink-100",    text: "text-pink-800",    badge: "bg-pink-200 text-pink-800",       tool: "bg-pink-100 text-pink-900 border-pink-300",       dot: "bg-pink-500",    glow: "shadow-pink-300",    modBg: "bg-pink-100",    modBorder: "border-pink-400",    modText: "text-pink-800"    },
// };

// // ─── Shared UI primitives ─────────────────────────────────────────────────────

// const SectionDivider = ({ label, c }) => (
//   <div className="flex items-center gap-2">
//     <span className={`text-[10px] font-bold uppercase tracking-widest ${c.text}`}>{label}</span>
//     <div className="flex-1 h-px bg-gray-100" />
//   </div>
// );

// const TagList = ({ items, className }) => (
//   <div className="flex flex-wrap gap-2">
//     {items.map((item, i) => (
//       <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-xl border ${className}`}>{item}</span>
//     ))}
//   </div>
// );

// const ChevronIcon = ({ open }) => (
//   <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
//     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//   </svg>
// );

// // ─── ModuleCard ───────────────────────────────────────────────────────────────

// function ModuleCard({ mod, isActive, onClick, c }) {
//   return (
//     <div onClick={onClick}
//       className={`rounded-2xl border-2 cursor-pointer transition-all duration-200 overflow-hidden
//         ${isActive ? `${c.modBorder} ${c.modBg} shadow-md` : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"}`}>
//       <div className="p-4">
//         <div className={`text-sm font-bold uppercase tracking-wide mb-1 ${isActive ? c.modText : "text-black"}`}>{mod.title}</div>
//         {mod.objective && <div className="text-sm text-black italic mb-2">🎯 {mod.objective}</div>}
//         {isActive ? (
//           <ul className="mt-2 space-y-2 pl-5 list-disc">
//             {mod.items.map((item, j) => <li key={j} className="text-sm text-black leading-relaxed">{item}</li>)}
//           </ul>
//         ) : (
//           <div className="text-sm text-black flex items-center gap-1 mt-1">
//             <span className={`inline-block w-2 h-2 rounded-full ${c.dot}`} />
//             {mod.items.length} topics · tap to expand
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ─── CourseCard ───────────────────────────────────────────────────────────────

// function CourseCard({ course }) {
//   const [open, setOpen] = useState(false);
//   const [activeModule, setActiveModule] = useState(null);
//   const c = colorMap[course.color];
//   const toggleModule = useCallback((i) => setActiveModule(prev => prev === i ? null : i), []);

//   return (
//     <div className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden bg-white
//       ${open ? `${c.ring} ring-1 shadow-2xl ${c.glow}` : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"}`}>

//       <button onClick={() => setOpen(v => !v)}
//         className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 ${open ? c.bg : "bg-white hover:bg-gray-50"}`}>
//         <div className={`text-2xl w-12 h-12 rounded-2xl flex items-center justify-center ${c.bg} border ${c.ring} ring-1`}>
//           {course.icon}
//         </div>
//         <div className="flex-1 min-w-0">
//           <div className="flex flex-wrap items-center gap-2 mb-1">
//             <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${c.badge}`}>{course.subtitle}</span>
//             <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">{course.badge}</span>
//           </div>
//           <div className="font-extrabold text-gray-900 text-base sm:text-lg leading-tight tracking-tight">{course.title}</div>
//         </div>
//         <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? `${c.bg} ${c.text}` : "bg-gray-100 text-gray-400"}`}>
//           <ChevronIcon open={open} />
//         </div>
//       </button>

//       {open && (
//         <div className="px-6 pb-6 pt-2 space-y-5">
//           <SectionDivider label="Course Modules" c={c} />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {course.modules.map((mod, i) => (
//               <ModuleCard key={i} mod={mod} isActive={activeModule === i} onClick={() => toggleModule(i)} c={c} />
//             ))}
//           </div>
//           {course.projects.length > 0 && (
//             <div>
//               <SectionDivider label="🚀 Real-World Projects" c={c} />
//               <div className="mt-3"><TagList items={course.projects} className={c.tool} /></div>
//             </div>
//           )}
//           <div>
//             <SectionDivider label="🛠 Tools Covered" c={c} />
//             <div className="mt-3"><TagList items={course.tools} className={c.tool} /></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── Root ─────────────────────────────────────────────────────────────────────

// const STATS = [["28", "Courses"], ["220+", "Modules"], ["120+", "Projects"], ["100%", "Job Ready"]];

// export default function CourseSyllabus() {
//   const [search, setSearch] = useState("");
//   const filtered = useMemo(() => {
//     const q = search.toLowerCase();
//     return q ? courses.filter(c => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)) : courses;
//   }, [search]);

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 font-sans">
//       <div className="relative overflow-hidden">
//         <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
//           <source src="Study.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/30" />
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight tracking-tight mb-4">
//             Explore Our Full<span className="block">Syllabus</span>
//           </h1>
//           <p className="text-yellow-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-10">
//             All industry-ready programs designed to launch your tech, design & business career.
//           </p>
//           <div className="flex justify-center gap-8 sm:gap-12 flex-wrap mb-10">
//             {STATS.map(([num, label]) => (
//               <div key={label} className="text-center">
//                 <div className="text-2xl sm:text-3xl font-extrabold text-white">{num}</div>
//                 <div className="text-[20px] uppercase tracking-widest text-black mt-0.5">{label}</div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <div className="flex items-center gap-3 bg-white text-black rounded-2xl px-4 py-3 w-full max-w-sm">
//               <svg className="w-4 h-4 text-black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
//               </svg>
//               <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..."
//                 className="bg-transparent border-none outline-none text-black placeholder-slate-500 text-sm w-full" />
//               {search && (
//                 <button onClick={() => setSearch("")} className="text-slate-400 hover:text-white transition-colors shrink-0">
//                   <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
//         {filtered.length === 0 ? (
//           <div className="text-center py-20 text-gray-400">
//             <div className="text-4xl mb-3">🔍</div>
//             <div className="font-semibold text-base text-gray-500 mb-1">No results found</div>
//             <div className="text-sm">No courses match "{search}"</div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
//             {filtered.map(course => <CourseCard key={course.id} course={course} />)}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




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

const masterDiplomaCourses = [
  { id: "wd", icon: <FaCode />, title: "Web Development", subtitle: "FULL STACK", badge: "🔥 Most Popular", modules: [{ title: "MODULE 1: Introduction to Web & Internet Basics", objective: "Understand how the web works", items: ["What is Internet & Web?", "How websites work (Client vs Server)", "Domain, Hosting & DNS", "HTTP & HTTPS", "Web Browsers", "Frontend vs Backend"] }, { title: "MODULE 2: HTML5", objective: "Build structure of websites", items: ["HTML Structure", "Tags, Elements, Attributes", "Links, Images, Lists", "Tables & Forms", "Semantic HTML", "Audio, Video, iFrame"] }, { title: "MODULE 3: CSS3", objective: "Make websites attractive", items: ["Selectors & Properties", "Box Model", "Flexbox & Grid", "Responsive Design", "Animations"] }, { title: "MODULE 4: JavaScript", objective: "Add interactivity", items: ["Variables & Data Types", "Functions & Loops", "DOM & Events", "Form Validation", "ES6 Concepts"] }, { title: "MODULES 5-14: Advanced Development", objective: "Full-stack mastery", items: ["Bootstrap & UI Frameworks", "React.js", "Node.js & Express", "MongoDB / MySQL", "MERN Stack", "Deployment & Hosting", "Testing & Security", "Capstone Projects", "Interview Preparation"] }], tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB", "MySQL", "Git & GitHub", "VS Code", "Postman"], projects: [] },
  { id: "ds", icon: <Si365Datascience />, title: "Data Science", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Data Science", items: ["What is Data Science?", "Data Science Life Cycle", "Roles: Analyst, Scientist, ML Engineer", "Applications of Data Science", "Tools Overview & Setup"] }, { title: "MODULE 2: Python for Data Science", items: ["Python Basics", "Conditional Statements & Loops", "Functions & OOP", "File & Exception Handling", "NumPy, Pandas, Matplotlib, Seaborn"] }, { title: "MODULE 3: Statistics & Mathematics", items: ["Descriptive Statistics", "Probability & Distributions", "Hypothesis Testing", "Correlation & Covariance", "Linear Algebra & Calculus Basics"] }, { title: "MODULES 5-8: Machine Learning", items: ["ML Fundamentals & Workflow", "Supervised Learning (Regression & Classification)", "Unsupervised Learning (Clustering, PCA)", "Ensemble & Boosting Methods", "Hyperparameter Tuning & Model Evaluation"] }, { title: "MODULES 9-13: Deep Learning", items: ["Neural Network Basics", "ANN using TensorFlow & Keras", "Convolutional Neural Networks", "Recurrent Neural Networks (LSTM, GRU)", "Transfer Learning, GAN & NLP"] }, { title: "MODULE 15: Big Data & Deployment", items: ["Hadoop & Spark Basics", "Model Deployment", "Flask / Streamlit", "API Creation", "AWS Basics"] }], tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Power BI", "SQL", "Jupyter", "AWS"], projects: ["House Price Prediction", "Customer Segmentation", "Sales Forecasting", "Image Classification", "Sentiment Analysis", "End-to-End Deployment"] },
  { id: "da", icon: <TbBrandDatabricks />, title: "Data Analytics", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Data Analytics", items: ["What is Data Analytics?", "Types: Descriptive, Diagnostic, Predictive, Prescriptive", "Data Analytics Life Cycle", "Roles & Career Opportunities", "Industry Applications"] }, { title: "MODULE 2: Excel for Data Analysis", items: ["Excel Basics & Shortcuts", "Formulas & Functions", "Pivot Tables", "Data Cleaning in Excel", "Charts & Visualization"] }, { title: "MODULE 3: SQL for Data Analytics", items: ["Introduction to Databases", "SQL Basics (SELECT, WHERE, ORDER BY)", "Joins & Subqueries", "Group By & Aggregate Functions", "Real-world Query Practice"] }, { title: "MODULE 4: Python for Data Analytics", items: ["Python Basics", "NumPy & Pandas", "Data Cleaning", "Exploratory Data Analysis", "Matplotlib & Seaborn"] }, { title: "MODULE 5: Power BI & Visualization", items: ["Power BI Basics", "Data Modeling", "DAX Fundamentals", "Dashboard Creation", "Interactive Reports"] }, { title: "MODULE 6-7: Statistics & Business Analytics", items: ["Descriptive Statistics", "Correlation & Regression", "Hypothesis Testing", "KPI & Metrics Understanding", "Data-driven Decision Making"] }], tools: ["Microsoft Excel", "SQL", "Python", "Power BI", "Tableau", "Git & GitHub"], projects: ["Sales Dashboard", "HR Analytics", "Customer Churn Analysis", "Financial Data Analysis", "End-to-End Analytics Project"] },
  { id: "eh", icon: <SiHackaday />, title: "Ethical Hacking", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Ethical Hacking", items: ["What is Ethical Hacking?", "Types of Hackers (White, Black, Grey)", "Hacking Life Cycle", "Legal & Ethical Guidelines", "Tools Overview"] }, { title: "MODULE 2: Footprinting & Reconnaissance", items: ["Information Gathering Techniques", "Domain & IP Lookup", "Network Scanning", "Social Engineering Basics"] }, { title: "MODULE 3: Scanning & Enumeration", items: ["Port Scanning", "Vulnerability Scanning", "Network Enumeration", "Nmap & Nessus Tools"] }, { title: "MODULE 4: System Hacking & Exploitation", items: ["Password Cracking Techniques", "Privilege Escalation", "Trojans & Backdoors", "Patch Management & Mitigation"] }, { title: "MODULE 5: Web Application Hacking", items: ["SQL Injection", "XSS & CSRF", "File Inclusion", "OWASP Top 10"] }, { title: "MODULE 6-8: Network, Wireless & Cryptography", items: ["Wi-Fi Hacking", "Man-in-the-Middle Attacks", "Packet Sniffing", "Encryption & Hashing", "Secure Communication"] }], tools: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP"], projects: ["Penetration Testing", "Web Hacking Lab", "Network Security Audit", "Real-world Case Studies"] },
  { id: "dm", icon: <LiaDigitalTachographSolid />, title: "Digital Marketing", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Digital Marketing", items: ["Overview of Digital Marketing", "Traditional vs Digital Marketing", "Digital Marketing Channels", "Trends & Career Opportunities"] }, { title: "MODULE 2: SEO", items: ["Introduction to SEO", "On-page & Off-page SEO", "Keyword Research", "Backlinking & Link Building", "SEO Tools & Analytics"] }, { title: "MODULE 3: Social Media Marketing", items: ["Social Media Platforms Overview", "Content Strategy & Planning", "Facebook, Instagram, LinkedIn Marketing", "Engagement & Analytics"] }, { title: "MODULE 4: Paid Advertising (PPC)", items: ["Introduction to Google Ads", "Pay-Per-Click Campaigns", "Ad Targeting & Bidding", "Campaign Optimization & Analytics"] }, { title: "MODULE 5-6: Email & Content Marketing", items: ["Email Campaign Strategy", "Segmentation & Targeting", "Email Automation", "Blog Writing & SEO Content", "Video & Multimedia Content"] }, { title: "MODULE 7: Analytics & Reporting", items: ["Google Analytics Basics", "Traffic & Conversion Tracking", "Performance Metrics & KPIs", "Data-driven Marketing Decisions"] }], tools: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "Mailchimp", "Canva", "Ahrefs", "SEMrush"], projects: ["SEO Campaign Project", "Social Media Marketing Project", "PPC Campaign Simulation", "Email & Content Campaign"] },
  { id: "id", icon: <SiMaterialdesignicons />, title: "Interior Design", subtitle: "DIPLOMA", badge: "", modules: [{ title: "MODULE 1: Introduction to Interior Design", items: ["What is Interior Design?", "History & Evolution", "Role of an Interior Designer", "Design Principles & Elements"] }, { title: "MODULE 2: Space Planning & Layouts", items: ["Understanding Space & Function", "Residential & Commercial Layouts", "Furniture Planning & Zoning", "Circulation & Flow"] }, { title: "MODULE 3: Color Theory & Materials", items: ["Color Psychology", "Color Schemes & Combinations", "Materials & Finishes (Wood, Fabric, Tiles)", "Surface Textures & Patterns"] }, { title: "MODULE 4: Furniture & Lighting Design", items: ["Furniture Styles & Selection", "Custom Furniture Design Basics", "Lighting Types & Techniques", "Accent & Ambient Lighting"] }, { title: "MODULE 5: CAD & Design Software", items: ["AutoCAD Basics", "SketchUp & 3D Modeling", "Floor Plan Drafting", "Rendering & Visualization"] }, { title: "MODULE 6-7: Textiles, Furnishing & Styles", items: ["Fabric Selection & Drapery", "Upholstery & Soft Furnishings", "Modern, Minimalist & Scandinavian Styles", "Traditional, Classical & Eclectic Styles"] }], tools: ["AutoCAD", "SketchUp", "3ds Max", "Adobe Photoshop", "PowerPoint", "Rendering Tools"], projects: ["Residential Project Design", "Commercial Project Design", "3D Rendering & Mockups", "Portfolio Building & Presentation"] },
  { id: "fa", icon: <MdAccountBalance />, title: "Finance & Accounting", subtitle: "ADVANCED", badge: "", modules: [{ title: "MODULE 1: Introduction to Advanced Accounting", items: ["Overview of Financial Accounting", "Accounting Standards & Regulations", "Role of an Accountant", "Financial Statements & Reports"] }, { title: "MODULE 2: Corporate Financial Reporting", items: ["Balance Sheet & Income Statement", "Cash Flow Statements", "Share Capital & Reserves Accounting", "IFRS / GAAP Standards"] }, { title: "MODULE 3: Financial Analysis & Ratio", items: ["Financial Ratio Analysis", "Liquidity & Solvency Analysis", "Profitability & Efficiency Ratios", "Trend & Comparative Analysis"] }, { title: "MODULE 4: Cost & Management Accounting", items: ["Cost Classification & Allocation", "Budgeting & Variance Analysis", "Break-even Analysis", "Cost Control & Decision Making"] }, { title: "MODULE 5: Advanced Taxation & Compliance", items: ["Corporate Taxation", "GST & Indirect Taxes", "Tax Planning & Compliance", "Audit & Regulatory Requirements"] }, { title: "MODULE 6: Investment & Financial Management", items: ["Capital Budgeting", "Working Capital Management", "Investment Appraisal Techniques", "Risk Management & Financial Planning"] }], tools: ["MS Excel (Advanced)", "Tally ERP", "QuickBooks", "ERP Accounting Software"], projects: ["Financial Statement Analysis", "Cost Management Case Study", "Tax Planning Case Study", "Corporate Financial Simulation"] },
  { id: "hr", icon: <GiHumanPyramid />, title: "Human Resource Management", subtitle: "DIPLOMA", badge: "", modules: [{ title: "Introduction to HR Management", items: ["Overview of HR Functions", "Role of Technology in Modern HR", "Legal and Ethical Considerations"] }, { title: "HR Information Systems (HRIS)", items: ["HRIS Fundamentals & Key Features", "SAP SuccessFactors & Workday Basics", "Employee Data Management", "Creating & Managing Employee Records"] }, { title: "Recruitment & ATS", items: ["Recruitment & Selection Process", "LinkedIn Recruiter & Zoho Recruit", "Screening & Interview Scheduling", "Recruitment Analytics"] }, { title: "Performance, Payroll & Engagement", items: ["KPIs & OKRs (BambooHR, Lattice)", "Payroll Processing (ADP, QuickBooks)", "Tax Compliance & Reporting", "Employee Surveys & Feedback"] }, { title: "HR Analytics & L&D", items: ["HR Metrics & Workforce Analysis", "Excel & Power BI Basics", "LMS Platforms (Moodle, TalentLMS)", "Training ROI Measurement"] }, { title: "Strategic HRM & Cloud Tools", items: ["Workforce & Succession Planning", "Aligning HR with Business Goals", "MS Teams, Slack, Google Workspace", "Asana & Trello for HR Projects"] }], tools: ["SAP SuccessFactors", "Workday", "LinkedIn Recruiter", "BambooHR", "Power BI", "Slack"], projects: ["Strategic HR Plan Development", "Recruitment Pipeline Simulation", "Payroll Processing Practice", "Capstone: Full HR System Integration"] },
  { id: "py", icon: <FaPython />, title: "Python Programming", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Python Fundamentals", objective: "Master Python basics", items: ["Introduction to Python", "Installation & Setup", "Variables & Data Types", "Input/Output Operations", "Comments & Indentation"] }, { title: "MODULE 2: Control Flow", objective: "Write decision-making programs", items: ["if / elif / else Statements", "for & while Loops", "break, continue, pass", "Nested Conditions & Loops", "Pattern Programs"] }, { title: "MODULE 3: Functions & Modules", objective: "Write reusable code", items: ["Defining & Calling Functions", "Arguments & Return Values", "Lambda Functions", "Built-in Modules (math, os, sys)", "Creating Custom Modules"] }, { title: "MODULE 4: Data Structures", objective: "Manage data efficiently", items: ["Lists & Tuples", "Dictionaries & Sets", "List Comprehensions", "Nested Data Structures", "Stacks & Queues using Python"] }, { title: "MODULE 5: OOP in Python", objective: "Think in objects", items: ["Classes & Objects", "Constructors & Destructors", "Inheritance & Polymorphism", "Encapsulation & Abstraction", "Dunder Methods"] }, { title: "MODULES 6-10: Advanced Python", objective: "Build real-world apps", items: ["File Handling & CSV/JSON", "Exception Handling", "Regular Expressions", "Database with SQLite", "Web Scraping (BeautifulSoup)", "API Requests", "GUI with Tkinter", "Automation Projects", "Interview Prep"] }], tools: ["Python 3", "VS Code", "PyCharm", "Jupyter Notebook", "Git & GitHub", "SQLite", "Tkinter"], projects: ["Calculator App", "File Organizer Script", "Web Scraper", "Student Management System", "To-Do CLI App", "API Data Fetcher"] },
  { id: "uiux", icon: <DiSizzlejs />, title: "UI/UX Design", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to UI/UX", objective: "Understand design thinking", items: ["What is UI vs UX?", "Design Thinking Process", "User-Centered Design", "Career Paths in UI/UX", "Industry Tools Overview"] }, { title: "MODULE 2: Design Principles", objective: "Apply visual fundamentals", items: ["Typography Basics", "Color Theory in UI", "Grid & Layout Systems", "White Space & Hierarchy", "Visual Balance & Contrast"] }, { title: "MODULE 3: User Research", objective: "Know your users", items: ["Qualitative vs Quantitative Research", "User Interviews & Surveys", "Personas & Empathy Maps", "User Journey Mapping", "Affinity Diagrams"] }, { title: "MODULE 4: Wireframing & Prototyping", objective: "Bring ideas to life", items: ["Low-fidelity Wireframes", "High-fidelity Mockups", "Interactive Prototypes in Figma", "Clickable Flows", "Usability Testing Basics"] }, { title: "MODULE 5: Figma Mastery", objective: "Master the industry tool", items: ["Figma Interface & Components", "Auto Layout & Constraints", "Design Systems & Tokens", "Collaborative Design", "Handoff to Developers"] }, { title: "MODULES 6-9: Advanced UX & Portfolio", objective: "Land a design job", items: ["Information Architecture", "Accessibility (WCAG Standards)", "Motion & Micro-interactions", "Mobile-first & Responsive Design", "Case Study Writing", "Portfolio Building", "Design Reviews & Critique", "Interview Preparation"] }], tools: ["Figma", "Adobe XD", "InVision", "Notion", "Miro", "Maze (User Testing)", "Zeplin"], projects: ["Mobile App Redesign", "E-commerce Website UI", "Dashboard Design", "Design System Creation", "End-to-End UX Case Study"] },
  { id: "cc", icon: <TbCloudComputing />, title: "Cloud Computing", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Cloud Computing", items: ["What is Cloud Computing?", "Types: IaaS, PaaS, SaaS", "Public, Private & Hybrid Cloud", "Cloud Providers Overview", "Cloud Architecture Basics"] }, { title: "MODULE 2: AWS Core Services", items: ["AWS Console & IAM", "EC2 (Virtual Machines)", "S3 (Storage Buckets)", "RDS (Managed Databases)", "VPC & Networking Basics"] }, { title: "MODULE 3: Microsoft Azure", items: ["Azure Portal & Subscriptions", "Azure Virtual Machines", "Azure Blob Storage", "Azure App Service", "Azure AD & Security"] }, { title: "MODULE 4: Google Cloud Platform", items: ["GCP Console & Projects", "Compute Engine & GKE", "Cloud Storage & BigQuery", "Firebase & Firestore", "GCP IAM & Billing"] }, { title: "MODULE 5: DevOps & CI/CD", items: ["What is DevOps?", "Docker & Containerization", "Kubernetes Basics", "CI/CD Pipelines (GitHub Actions)", "Infrastructure as Code (Terraform)"] }, { title: "MODULES 6-9: Advanced Cloud & Certification Prep", items: ["Serverless Computing (Lambda, Functions)", "Cloud Security & Compliance", "Cost Optimization Strategies", "Monitoring & Logging (CloudWatch)", "AWS Solutions Architect Prep", "Azure Fundamentals (AZ-900)", "Real-world Cloud Projects", "Interview Preparation"] }], tools: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux CLI"], projects: ["Static Website on S3", "Scalable App on EC2", "Serverless API with Lambda", "Containerized App with Docker", "Multi-cloud Deployment Project"] },
  { id: "ai", icon: <FaRobot />, title: "Artificial Intelligence", subtitle: "FULL COURSE", badge: "🚀 Trending", modules: [{ title: "MODULE 1: Introduction to AI", items: ["What is AI?", "History & Evolution of AI", "Types of AI (Narrow, General, Super)", "AI vs ML vs Deep Learning", "Real-world Applications", "Ethical Concerns in AI"] }, { title: "MODULE 2: Python for AI", items: ["Python Refresher", "NumPy & Pandas for AI", "Data Visualization", "Environment Setup (Anaconda, Colab)", "Jupyter Notebooks for AI"] }, { title: "MODULE 3: Search & Problem Solving", items: ["State Space Search", "BFS & DFS Algorithms", "A* Algorithm", "Heuristic Search", "Game Trees & Minimax"] }, { title: "MODULE 4: Knowledge Representation", items: ["Logic & Propositional Calculus", "First-Order Logic", "Semantic Networks", "Ontologies & Knowledge Graphs", "Expert Systems"] }, { title: "MODULES 5-8: Machine Learning for AI", items: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Evaluation & Tuning", "SVM, KNN, Decision Trees", "Ensemble Methods", "Recommendation Systems", "Time Series Forecasting", "AutoML Tools"] }, { title: "MODULES 9-12: Generative AI & LLMs", items: ["Transformer Architecture", "Large Language Models (LLMs)", "Prompt Engineering", "Fine-tuning Models", "LangChain & RAG", "AI Agents & Tools", "Responsible AI", "AI in Industry & Capstone"] }], tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "HuggingFace", "Google Colab", "Jupyter"], projects: ["AI Chatbot", "Image Recognition System", "Recommendation Engine", "Fraud Detection Model", "LLM-Powered App", "AI Agent Automation"] },
  { id: "mad", icon: <FaMobileAlt />, title: "Mobile App Development", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Mobile Development", items: ["Native vs Cross-platform vs Hybrid", "iOS vs Android Overview", "App Development Life Cycle", "App Store & Play Store Guidelines", "Tools & Environment Setup"] }, { title: "MODULE 2: React Native Fundamentals", items: ["React Native Architecture", "JSX & Components", "State & Props", "Navigation (React Navigation)", "Styling with StyleSheet"] }, { title: "MODULE 3: Core Mobile UI Components", items: ["FlatList & ScrollView", "TextInput & Forms", "Modal & Alerts", "Bottom Tabs & Drawer Navigation", "Responsive Layouts"] }, { title: "MODULE 4: State Management", items: ["useState & useEffect Hooks", "Context API", "Redux Toolkit", "Async Storage", "Data Fetching with Axios"] }, { title: "MODULE 5: Backend Integration", items: ["REST API Integration", "Firebase Realtime Database", "Firebase Authentication", "Push Notifications (FCM)", "File Upload & Media Handling"] }, { title: "MODULES 6-10: Advanced & Deployment", items: ["Maps & Geolocation", "Camera & Gallery Access", "In-App Purchases", "App Performance Optimization", "Testing (Jest, Detox)", "Publishing to Play Store", "Publishing to App Store", "CI/CD for Mobile", "Capstone Project", "Interview Preparation"] }], tools: ["React Native", "Expo", "Android Studio", "Xcode", "Firebase", "Redux", "VS Code", "Postman", "Git & GitHub"], projects: ["Todo App", "E-commerce Mobile App", "Chat Application", "Food Delivery UI Clone", "Full-stack Mobile App with Auth"] },
  { id: "mso", icon: <FaMicrosoft />, title: "Microsoft Office Professional", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Microsoft Office Suite", items: ["Overview of MS Office Applications", "MS Office Interface & Navigation", "File Management & Cloud Sync (OneDrive)", "Keyboard Shortcuts & Productivity Tips", "Office 365 vs Desktop Version"] }, { title: "MODULE 2: Microsoft Word (Advanced)", items: ["Document Formatting & Styles", "Tables, Images & SmartArt", "Mail Merge", "Track Changes & Comments", "Table of Contents & Indexing", "Templates & Macros Basics"] }, { title: "MODULE 3: Microsoft Excel (Professional)", items: ["Advanced Formulas & Functions", "Pivot Tables & Charts", "Data Validation & Conditional Formatting", "VLOOKUP, HLOOKUP, INDEX-MATCH", "Data Sorting, Filtering & Slicers"] }, { title: "MODULE 4: Microsoft PowerPoint (Advanced)", items: ["Slide Design & Layouts", "Custom Animations & Transitions", "Embedding Media (Audio/Video)", "Presenter Mode & Speaker Notes", "Exporting & Sharing Presentations"] }, { title: "MODULE 5: Microsoft Outlook", items: ["Email Management & Folders", "Calendar & Scheduling Meetings", "Tasks & Reminders", "Contacts & Address Book", "Out-of-Office & Email Rules"] }, { title: "MODULE 6: Microsoft Teams & OneNote", items: ["MS Teams Channels & Meetings", "File Sharing & Collaboration", "OneNote for Note-taking", "Task Management with Planner", "Integration with Office Apps"] }, { title: "MODULE 7: Capstone & Certification Prep", items: ["Real-world Office Projects", "MOS (Microsoft Office Specialist) Exam Prep", "Portfolio of Work", "Interview Tips for Office Skills", "Final Assessment"] }], tools: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook", "Microsoft Teams", "OneNote", "OneDrive"], projects: ["Professional Report in Word", "Data Dashboard in Excel", "Corporate Presentation in PowerPoint", "Email Campaign in Outlook", "Team Collaboration Project"] },
];

const advanceSpecializationCourses = [
  { id: "pd", icon: <IoManSharp />, title: "Personality Development", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Personality Development", items: ["What is Personality?", "Types of Personality (MBTI, Big Five)", "Self-Awareness & Self-Assessment", "Growth Mindset vs Fixed Mindset", "Setting Personal Goals"] }, { title: "MODULE 2: Communication Skills", items: ["Verbal & Non-verbal Communication", "Active Listening Skills", "Clarity & Conciseness in Speech", "Tone, Pace & Body Language", "Overcoming Communication Barriers"] }, { title: "MODULE 3: Confidence & Public Speaking", items: ["Building Self-Confidence", "Overcoming Stage Fear", "Presentation Skills", "Impromptu Speaking Techniques", "Voice Modulation & Eye Contact"] }, { title: "MODULE 4: Emotional Intelligence", items: ["What is EQ vs IQ?", "Self-regulation & Empathy", "Managing Stress & Anxiety", "Emotional Awareness in Workplace", "Building Positive Relationships"] }, { title: "MODULE 5: Leadership & Team Skills", items: ["Leadership Styles", "Team Building & Collaboration", "Conflict Resolution", "Decision Making Skills", "Motivating Others"] }, { title: "MODULE 6: Professional Etiquette", items: ["Corporate Etiquette & Grooming", "Email & Phone Etiquette", "Meeting & Interview Etiquette", "Networking Skills", "LinkedIn & Personal Branding"] }, { title: "MODULE 7-8: Goal Setting & Life Skills", items: ["SMART Goal Framework", "Time Management Techniques", "Habit Building (Atomic Habits)", "Positive Thinking & Attitude", "Work-Life Balance", "Resume & Interview Preparation"] }], tools: ["Zoom (Presentations)", "Canva (Personal Branding)", "LinkedIn", "Notion (Goal Tracking)", "Grammarly"], projects: ["Personal Brand Portfolio", "Public Speaking Session", "Leadership Case Study", "30-Day Habit Challenge", "Mock Interview & Feedback"] },
  { id: "se", icon: <SiGreatlearning />, title: "Spoken English", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Foundation of English Language", items: ["Parts of Speech", "Basic Sentence Structure", "Common Vocabulary Building", "Pronunciation Basics", "Phonetics & Sound System"] }, { title: "MODULE 2: Grammar for Speaking", items: ["Tenses (Present, Past, Future)", "Articles & Prepositions", "Modal Verbs", "Question Formation", "Common Grammar Mistakes to Avoid"] }, { title: "MODULE 3: Everyday Conversation", items: ["Greetings & Introductions", "Shopping, Travel & Restaurant Conversations", "Asking for Directions", "Telephone & Email Conversations", "Small Talk & Social Phrases"] }, { title: "MODULE 4: Vocabulary Enhancement", items: ["Synonyms, Antonyms & Homophones", "Idioms & Phrases", "Formal vs Informal Vocabulary", "Topic-based Word Lists", "Word Formation & Prefixes/Suffixes"] }, { title: "MODULE 5: Fluency & Pronunciation", items: ["Connected Speech Techniques", "Stress & Intonation Patterns", "Accent Reduction Basics", "Tongue Twisters & Drills", "Listening & Mimicking Native Speakers"] }, { title: "MODULE 6: Business English", items: ["Office & Workplace Communication", "Business Meetings & Presentations", "Email Writing in English", "Negotiation Language", "Job Interview in English"] }, { title: "MODULE 7-8: Advanced Speaking & Practice", items: ["Group Discussions & Debates", "Story Telling Techniques", "Extempore Speaking", "Reading Comprehension", "Role Plays & Real-world Scenarios", "Final Fluency Assessment"] }], tools: ["Google Meet / Zoom (Practice Sessions)", "Grammarly", "Google Translate", "BBC Learning English", "Duolingo"], projects: ["Self-Introduction Video", "Business Email Writing Task", "Group Discussion Participation", "Presentation in English", "Fluency Test & Certification"] },
  { id: "vba", icon: <PiMicrosoftExcelLogoFill />, title: "Microsoft Excel (VBA + Macros)", subtitle: "ADVANCED", badge: "", modules: [{ title: "MODULE 1: Excel Advanced Revision", items: ["Advanced Formulas Revision", "Pivot Tables & Power Query", "Named Ranges & Dynamic Arrays", "Data Validation & Protection", "Excel Tables & Structured References"] }, { title: "MODULE 2: Introduction to VBA", items: ["What is VBA & Why Use It?", "VBA Editor (Alt + F11)", "Modules, Procedures & Functions", "Variables, Data Types & Constants", "MsgBox & InputBox"] }, { title: "MODULE 3: Macros in Excel", items: ["Recording Macros", "Editing Recorded Macros", "Assigning Macros to Buttons", "Absolute vs Relative Recording", "Macro Security Settings"] }, { title: "MODULE 4: VBA Control Structures", items: ["If / ElseIf / Else Statements", "Select Case", "For Next & For Each Loops", "Do While / Do Until Loops", "Nested Loops & Conditions"] }, { title: "MODULE 5: Working with Excel Objects", items: ["Workbook & Worksheet Objects", "Range & Cells Object", "Formatting Cells via VBA", "Copy, Paste & Delete via Code", "Working with Multiple Sheets"] }, { title: "MODULE 6: UserForms & Custom Dialogs", items: ["Creating UserForms", "TextBox, ComboBox, ListBox", "Command Buttons & Events", "Data Entry Forms", "Form Validation in VBA"] }, { title: "MODULE 7: Advanced VBA & Automation", items: ["Error Handling (On Error GoTo)", "File System Operations", "Automating Charts & Reports", "Sending Emails via VBA (Outlook)", "Connecting Excel to Databases"] }, { title: "MODULE 8: Projects & Real-world Applications", items: ["Automated Invoice Generator", "Student Report Card System", "Inventory Management Tool", "Payroll Automation", "Dashboard with VBA Controls"] }], tools: ["Microsoft Excel", "VBA Editor", "Microsoft Outlook (for automation)", "Windows File System"], projects: ["Automated Invoice Generator", "Payroll Processing System", "Inventory Tracker with VBA", "Student Report Generator", "Dynamic Dashboard with Macros"] },
  { id: "mac", icon: <BiLogoMicrosoftTeams />, title: "Microsoft Access", subtitle: "FULL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to Microsoft Access", items: ["What is a Database?", "Relational Database Concepts", "MS Access Interface Overview", "Types of Objects in Access", "Planning a Database"] }, { title: "MODULE 2: Tables & Data Entry", items: ["Creating Tables in Design View", "Field Data Types & Properties", "Primary Keys & Indexes", "Input Masks & Validation Rules", "Importing Data from Excel/CSV"] }, { title: "MODULE 3: Relationships & Referential Integrity", items: ["One-to-One, One-to-Many, Many-to-Many", "Creating Relationships in Access", "Enforcing Referential Integrity", "Cascade Update & Delete", "Entity-Relationship Diagrams"] }, { title: "MODULE 4: Queries", items: ["Select Queries", "Parameter Queries", "Crosstab Queries", "Action Queries (Update, Append, Delete, Make-Table)", "SQL View in Access"] }, { title: "MODULE 5: Forms", items: ["Creating Forms with Wizard", "Form Design View", "Subforms & Combo Boxes", "Form Navigation & Buttons", "Conditional Formatting in Forms"] }, { title: "MODULE 6: Reports", items: ["Creating Reports with Wizard", "Report Design View", "Grouping, Sorting & Totals", "Charts in Reports", "Printing & Exporting Reports (PDF)"] }, { title: "MODULE 7: Macros, Automation & Projects", items: ["Access Macros Basics", "Autoexec Macro", "Switchboard & Navigation Forms", "Database Security & Password", "Capstone: Full Database Application"] }], tools: ["Microsoft Access", "Microsoft Excel (for imports)", "SQL", "OneDrive"], projects: ["Student Management Database", "Library Management System", "Inventory Control Database", "Hospital Records Database", "Complete Business Database App"] },
  { id: "adfa", icon: <GiDiploma />, title: "Advanced Diploma in Finance & Accounting", subtitle: "DIPLOMA", badge: "", modules: [{ title: "MODULE 1: Financial Accounting Fundamentals", items: ["Accounting Concepts & Principles", "Double Entry System", "Journal, Ledger & Trial Balance", "Bank Reconciliation Statement", "Rectification of Errors"] }, { title: "MODULE 2: Financial Statements & Reporting", items: ["Trading & Profit/Loss Account", "Balance Sheet Preparation", "Cash Flow Statements", "Notes to Accounts", "IFRS & GAAP Overview"] }, { title: "MODULE 3: Corporate Accounting", items: ["Company Formation & Share Capital", "Issue & Forfeiture of Shares", "Debentures & Redemption", "Amalgamation & Mergers", "Holding Company Accounts"] }, { title: "MODULE 4: Cost & Management Accounting", items: ["Cost Classification & Elements", "Job, Process & Batch Costing", "Marginal Costing & CVP Analysis", "Standard Costing & Variance Analysis", "Budgetary Control"] }, { title: "MODULE 5: Taxation - Direct & Indirect", items: ["Income Tax - Heads of Income", "TDS & Advance Tax", "GST - Basics to Filing", "GST Returns (GSTR-1, 3B)", "Tax Planning & Compliance"] }, { title: "MODULE 6: Auditing & Internal Control", items: ["Principles & Types of Audit", "Internal Control Systems", "Audit Planning & Documentation", "Vouching & Verification", "Audit Report Writing"] }, { title: "MODULE 7: Financial Management", items: ["Capital Structure & Leverages", "Capital Budgeting (NPV, IRR, Payback)", "Working Capital Management", "Dividend Policy", "Risk & Return Analysis"] }, { title: "MODULE 8: Tally Prime & Accounting Software", items: ["Tally Prime - Complete Setup", "Voucher Entry & Ledger Management", "GST in Tally", "Inventory Management in Tally", "MIS Reports & Payroll in Tally"] }, { title: "MODULE 9: Advanced Excel for Finance", items: ["Financial Functions (NPV, IRR, PMT)", "Financial Modeling Basics", "Sensitivity & Scenario Analysis", "Dashboard Creation", "Automated Reports with Formulas"] }, { title: "MODULE 10: Capstone & Interview Preparation", items: ["End-to-End Financial Project", "Case Study: Company Financial Analysis", "Mock Interviews & HR Questions", "Resume Building for Finance Roles", "Certification & Portfolio Prep"] }], tools: ["Tally Prime", "MS Excel (Advanced)", "QuickBooks", "Zoho Books", "Google Sheets", "PowerPoint"], projects: ["Complete Set of Books for a Company", "GST Filing Simulation", "Financial Statement Analysis Report", "Cost Sheet & Budget Preparation", "Audit Report Writing", "Financial Model in Excel"] },
  { id: "aml", icon: <GiTakeMyMoney />, title: "Anti-Money Laundering (AML)", subtitle: "CERTIFICATION COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to AML & Financial Crimes", items: ["What is Money Laundering?", "Stages: Placement, Layering & Integration", "Types of Financial Crimes", "Importance of AML Compliance", "Global AML Overview"] }, { title: "MODULE 2: Regulatory Framework & Guidelines", items: ["PMLA - Prevention of Money Laundering Act (India)", "FIU-IND - Financial Intelligence Unit India", "RBI AML Guidelines", "FATF - Financial Action Task Force", "Compliance Requirements & Penalties"] }, { title: "MODULE 3: KYC & Customer Due Diligence (CDD)", items: ["KYC (Know Your Customer) Basics", "Customer Identification Process (CIP)", "Simplified & Enhanced Due Diligence", "Risk-Based Approach (RBA)", "Customer Risk Profiling"] }, { title: "MODULE 4: Transaction Monitoring & Red Flags", items: ["What are Suspicious Transactions?", "Red Flag Indicators", "Unusual Transaction Patterns", "Structuring / Smurfing", "Overview of AML Software Tools"] }, { title: "MODULE 5: Reporting & Documentation", items: ["Suspicious Transaction Report (STR)", "Cash Transaction Report (CTR)", "Record Keeping Requirements", "Reporting Process to FIU-IND", "Case Documentation Best Practices"] }, { title: "MODULE 6: AML Investigation & Case Handling", items: ["Investigation Process Overview", "Case Studies & Real-life Scenarios", "Evidence Collection Techniques", "Internal Reporting Procedures", "Escalation Matrix"] }, { title: "MODULE 7: Technology in AML", items: ["Transaction Monitoring Systems", "Name Screening & Watchlist Tools", "Data Analytics in AML", "Role of AI & Machine Learning in AML", "Basics of SQL & Excel for AML Analysts"] }, { title: "MODULE 8: Risk Management & Final Assessment", items: ["AML Risk Management Framework", "Enterprise Risk Assessment", "Compliance Audits", "Final Project / Case Study", "Certification Test"] }], tools: ["MS Excel (Data Analysis)", "SQL Basics", "Transaction Monitoring Software (Overview)", "KYC Verification Tools", "FIU Reporting Portal"], projects: ["KYC Form Analysis Exercise", "Suspicious Transaction Identification", "Excel-based AML Data Analysis", "Mock STR / CTR Filing", "Real-world AML Case Study"] },
  { id: "tally", icon: <FaIndustry />, title: "Tally Prime + GST Professional", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Accounting Fundamentals & Introduction to Tally", items: ["Basic Accounting Concepts & Principles", "Types of Accounts & Accounting Rules", "Debit & Credit Fundamentals", "Overview of TallyPrime Interface & Navigation", "Company Creation & Configuration"] }, { title: "MODULE 2: Ledgers, Groups & Voucher Entries", items: ["Understanding Ledger Accounts", "Creating & Organizing Ledger Groups", "Payment, Receipt, Journal & Contra Vouchers", "Recording Purchase & Sales Transactions"] }, { title: "MODULE 3: Inventory Management in Tally", items: ["Stock Groups & Stock Items", "Units of Measurement", "Purchase Orders & Sales Orders", "Managing Stock Movement", "Inventory Valuation Methods"] }, { title: "MODULE 4: GST Configuration & Transactions", items: ["Overview of GST Taxation System", "Types of GST: CGST, SGST & IGST", "Enabling GST Features in Tally", "GST Purchase & Sales Entries", "Input Tax Credit (ITC) Concept"] }, { title: "MODULE 5: GST Returns & Tax Compliance", items: ["GST Summary Reports", "GSTR-1 Report Generation", "GSTR-3B Overview", "Understanding E-Invoicing System", "Generating E-Way Bills"] }, { title: "MODULE 6: Financial Reports & Data Management", items: ["Balance Sheet in Tally", "Profit & Loss Account", "Trial Balance", "Cash Flow & Fund Flow Statements", "Exporting Reports to Excel & PDF"] }], tools: ["TallyPrime", "Microsoft Excel (for exports)", "GST Portal (Overview)", "E-Way Bill Portal", "E-Invoice System"], projects: ["Company Setup with Full Accounting Entries", "GST Invoice Creation & ITC Tracking", "Inventory System for a Trading Business", "Complete GST Return Preparation", "Financial Reports & Year-end Closing"] },
  { id: "cia", icon: <SiBmcsoftware />, title: "Certified Industrial Accountant (CIA)", subtitle: "CERTIFICATION COURSE", badge: "", modules: [{ title: "MODULE 1: Fundamentals of Accounting & Business Finance", items: ["Basic Accounting Concepts & Conventions", "Types of Accounts & Golden Rules", "Debit & Credit System", "Journal Entries & Ledger Posting", "Trial Balance, Profit & Loss Account", "Balance Sheet Preparation"] }, { title: "MODULE 2: Advanced Excel for Finance & MIS", items: ["Data Entry & Spreadsheet Management", "Logical & Lookup Functions (IF, VLOOKUP, XLOOKUP)", "Financial Formulas", "Pivot Tables & Pivot Charts", "Creating Dashboards", "Automated MIS Reports"] }, { title: "MODULE 3: Computerized Accounting using Tally", items: ["Setting Up Companies in Tally", "Creating Ledger Accounts", "Recording Business Transactions", "Stock Groups & Stock Items", "Inventory Tracking & Valuation"] }, { title: "MODULE 4: GST & Taxation Compliance", items: ["GST Structure & Taxation System", "Types of GST: CGST, SGST & IGST", "GST Purchase & Sales Entries", "Input Tax Credit (ITC)", "Preparation of GSTR-1 & GSTR-3B"] }, { title: "MODULE 5: Cost Accounting & Industrial Accounting", items: ["Types of Costs & Cost Classification", "FIFO, LIFO & Weighted Average Methods", "Cost Tracking for Inventory", "Budget Preparation", "Variance Analysis"] }, { title: "MODULE 6: Financial Analysis & Business Reporting", items: ["Liquidity, Profitability & Efficiency Ratios", "Preparing Cash Flow Statements", "Preparing Management Reports", "Financial Decision Support"] }, { title: "MODULE 7: Professional Skills & Interview Preparation", items: ["Business Communication Skills", "Resume Building for Accounting Roles", "Interview Question Practice", "Job Roles in Accounting & Finance"] }], tools: ["Advanced Excel", "Tally Prime", "GST Portal", "Power BI (Basics)", "MS Word (Reports)"], projects: ["Financial MIS Dashboard", "Budget & Expense Analysis Sheet", "Full Accounting Records in Tally", "GST Invoice & Return Preparation", "Financial Ratio Analysis Report"] },
  { id: "busy", icon: <MdOutlineBusAlert />, title: "BUSY Accounting Software", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Accounting Fundamentals & Introduction to BUSY", items: ["Basic Accounting Concepts & Principles", "Types of Accounts & Accounting Rules", "Debit & Credit System", "Overview of BUSY Interface & Features", "Creating a New Company in BUSY"] }, { title: "MODULE 2: Ledger Management & Voucher Entries", items: ["Creating Ledger Accounts", "Organizing Accounts into Groups", "Payment, Receipt, Journal & Contra Vouchers", "Recording Purchase & Sales Entries"] }, { title: "MODULE 3: Inventory Management & Billing", items: ["Creating Stock Groups & Items", "Creating Purchase & Sales Invoices", "Managing Discount & Tax Settings", "Inventory Valuation Methods"] }, { title: "MODULE 4: GST Configuration & Transactions", items: ["Structure of GST Taxation System", "Types of GST: CGST, SGST & IGST", "Enabling GST Features in BUSY", "GST Purchase & Sales Entries", "Input Tax Credit Management"] }, { title: "MODULE 5: GST Returns & Tax Reports", items: ["GST Summary Reports", "GSTR-1 Report Generation", "GSTR-3B Overview", "E-Way Bill System"] }, { title: "MODULE 6: Financial Reports & Data Management", items: ["Balance Sheet", "Profit & Loss Account", "Trial Balance", "Sales & Purchase Analysis Reports", "Exporting Reports to Excel & PDF"] }], tools: ["BUSY Accounting Software", "Microsoft Excel (for exports)", "GST Portal (Overview)", "E-Way Bill Portal"], projects: ["Company Account Setup in BUSY", "GST Invoice Generation & ITC Tracking", "Inventory Billing System", "Complete GST Return Preparation", "Financial Statements & Reports"] },
  { id: "sapfico", icon: <FaBriefcase />, title: "SAP FICO Professional", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to ERP & SAP Environment", items: ["What is Enterprise Resource Planning?", "Business Process Integration", "SAP Architecture & System Landscape", "SAP Navigation & Interface", "SAP Transaction Codes"] }, { title: "MODULE 2: SAP Financial Accounting (FI) Fundamentals", items: ["Chart of Accounts", "Posting Transactions", "Vendor Master Creation & Invoice Processing", "Payment Processing", "Customer Master Data & Invoicing"] }, { title: "MODULE 3: Asset Accounting", items: ["Asset Creation & Classification", "Asset Acquisition, Transfer & Retirement", "Depreciation Calculation & Posting"] }, { title: "MODULE 4: SAP Controlling (CO)", items: ["Creating Cost Centers", "Cost Allocation & Planning", "Budget Monitoring", "Profitability Analysis"] }, { title: "MODULE 5: Financial Reporting & Analysis", items: ["Balance Sheet & P&L Statements", "General Ledger Reporting", "Cost & Profitability Reports", "Decision-support Reporting"] }, { title: "MODULE 6: Integration with Other SAP Modules", items: ["Financial Impact of Procurement (MM)", "Accounting Entries from Sales Activities (SD)", "Cost Tracking for Manufacturing (PP)"] }, { title: "MODULE 7: SAP Implementation Basics & Career Preparation", items: ["SAP Project Lifecycle Stages", "Configuration vs End-user Roles", "Testing Financial Processes", "SAP FICO Consultant Roles", "Resume Preparation & Interview Guidance"] }], tools: ["SAP FICO (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"], projects: ["General Ledger Posting Exercise", "Accounts Payable & Receivable Simulation", "Asset Lifecycle Management", "Cost Center Allocation Project", "Financial Report Generation"] },
  { id: "sapmm", icon: <BsBoxSeamFill />, title: "SAP MM (Materials Management)", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to ERP & SAP Environment", items: ["What ERP Systems Do in Organizations", "Integration of Finance, Procurement & Operations", "SAP System Architecture", "SAP Navigation & Interface"] }, { title: "MODULE 2: Organizational Structure in SAP MM", items: ["Client, Company Code, Plant & Storage Location", "Purchasing Organization & Purchasing Group", "Material Master Records", "Material Types & Material Groups"] }, { title: "MODULE 3: Procurement Process in SAP", items: ["Creating Purchase Requisitions", "Approval & Release Process", "Vendor Quotation Management", "Creating & Managing Purchase Orders"] }, { title: "MODULE 4: Inventory Management", items: ["Recording Goods Received from Vendors", "Issuing Materials for Production or Sale", "Managing Stock Movements", "Inventory Adjustments"] }, { title: "MODULE 5: Invoice Verification", items: ["Vendor Invoice Verification", "Three-way Matching (PO, Goods Receipt, Invoice)", "Financial Accounting Integration", "Handling Invoice Discrepancies"] }, { title: "MODULE 6: Reporting & Inventory Analysis", items: ["Purchase Order Reports", "Vendor Performance Analysis", "Stock Overview Reports", "Inventory Optimization Insights"] }, { title: "MODULE 7: Integration with Other SAP Modules", items: ["Financial Impact of Procurement (FI)", "Material Planning for Manufacturing (PP)", "Inventory Availability for Sales (SD)"] }, { title: "MODULE 8: SAP Implementation Basics & Career Preparation", items: ["SAP Project Lifecycle & Business Blueprinting", "Configuration vs End-user Roles", "SAP MM Consultant Roles", "Resume Preparation & Interview Guidance"] }], tools: ["SAP MM (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"], projects: ["Material Master Data Creation", "Purchase Requisition to PO Workflow", "Goods Receipt Simulation", "Invoice Verification Exercise", "Procurement Report Generation"] },
  { id: "sapsd", icon: <LuConstruction />, title: "SAP SD (Sales & Distribution)", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to ERP & SAP Environment", items: ["Understanding ERP Systems & Their Role", "Integration of Sales, Finance & Logistics", "SAP Interface & Navigation", "SAP Organizational Hierarchy"] }, { title: "MODULE 2: Organizational Structure in SAP SD", items: ["Client & Company Code", "Sales Organization", "Distribution Channel & Division", "Customer & Material Master Data"] }, { title: "MODULE 3: Sales Order Processing", items: ["Customer Inquiries & Quotation Creation", "Creating Sales Orders", "Pricing Procedures", "Discounts & Special Pricing Conditions"] }, { title: "MODULE 4: Delivery & Shipping Process", items: ["Creating Outbound Deliveries", "Picking & Packing Processes", "Posting Goods Issue", "Updating Inventory & Financial Records"] }, { title: "MODULE 5: Billing & Invoice Processing", items: ["Creating Billing Documents", "Invoice Generation", "Credit & Debit Memos", "Financial Impact of Billing"] }, { title: "MODULE 6: Reporting & Sales Analysis", items: ["Sales Order Reports", "Customer Sales Performance", "Monitoring Sales Trends", "Sales Forecasting Basics"] }, { title: "MODULE 7: Integration with Other SAP Modules", items: ["Inventory Updates After Sales (MM)", "Billing Impact on Financial Accounting (FI)", "Sales Demand Influencing Production (PP)"] }, { title: "MODULE 8: SAP Implementation Basics & Career Preparation", items: ["SAP Project Planning & Business Blueprinting", "Configuration & System Testing", "SAP SD Consultant Roles", "Resume Building & Interview Preparation"] }], tools: ["SAP SD (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"], projects: ["Customer Master Data Setup", "Sales Order to Billing Workflow", "Delivery & Shipment Simulation", "Invoice Processing Exercise", "Sales Performance Report"] },
  { id: "sappp", icon: <MdOutlineManageAccounts />, title: "SAP PP (Production Planning)", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to ERP & SAP Environment", items: ["What ERP Systems Do in Organizations", "Integration of Manufacturing, Finance & Procurement", "SAP Interface & Navigation", "Transaction Codes & Menu Structure"] }, { title: "MODULE 2: Organizational Structure & Master Data", items: ["Client & Company Code", "Plant & Storage Locations", "Work Centers & Production Lines", "Material Master Records", "Creating Bill of Materials (BOM)"] }, { title: "MODULE 3: Work Centers & Routing", items: ["Defining Work Centers", "Assigning Capacity & Resources", "Defining Production Operations", "Machine Capacity Planning"] }, { title: "MODULE 4: Production Planning Process", items: ["Forecasting Product Demand", "Understanding MRP Logic", "Creating Planned Orders", "Converting Planned Orders into Production Orders"] }, { title: "MODULE 5: Production Execution", items: ["Creating Production Orders", "Scheduling Manufacturing Operations", "Goods Issue for Production", "Goods Receipt of Finished Products"] }, { title: "MODULE 6: Quality Control & Production Monitoring", items: ["Monitoring Production Status", "Quality Checks in Production Processes", "Production Performance Reports", "Capacity Utilization Reports"] }, { title: "MODULE 7: Integration with Other SAP Modules", items: ["Procurement of Raw Materials (MM)", "Sales Orders Triggering Production Demand (SD)", "Production Costs Affecting Financial Accounting (FI)"] }, { title: "MODULE 8: SAP Implementation Basics & Career Preparation", items: ["SAP Project Planning & Configuration", "Testing & Deployment Stages", "SAP PP Consultant Roles", "Resume Preparation & Interview Guidance"] }], tools: ["SAP PP (ECC / S/4HANA)", "SAP GUI", "MS Excel (for reporting)", "SAP Fiori (Overview)"], projects: ["Material Master & BOM Creation", "Work Center & Routing Setup", "MRP Simulation Exercise", "Production Order Processing", "Manufacturing Report Generation"] },
  { id: "saphcm", icon: <FaIndustry />, title: "SAP HCM (Human Capital Management)", subtitle: "PROFESSIONAL COURSE", badge: "", modules: [{ title: "MODULE 1: Introduction to ERP & SAP Environment", items: ["What ERP Systems Do in Organizations", "Integration of HR, Finance & Operations", "SAP Interface & Navigation", "Transaction Codes & Menu Structure"] }, { title: "MODULE 2: Organizational Management", items: ["Creating Organizational Units", "Defining Positions & Jobs", "Employee Reporting Structure", "Organizational Hierarchy Visualization"] }, { title: "MODULE 3: Personnel Administration", items: ["Creating Employee Master Records", "Hiring Employees", "Promotions & Transfers", "Employee Separation Processes"] }, { title: "MODULE 4: Time Management", items: ["Attendance Tracking", "Leave & Absence Management", "Creating Work Schedules", "Shift Planning", "Calculating Overtime"] }, { title: "MODULE 5: Payroll Management", items: ["Salary Components & Wage Types", "Running Payroll Cycles", "Salary Calculation", "Payslip Generation"] }, { title: "MODULE 6: Recruitment & Talent Management", items: ["Managing Job Vacancies", "Candidate Application Tracking", "Training Programs", "Performance Evaluations", "Succession Planning Basics"] }, { title: "MODULE 7: Reporting & HR Analytics", items: ["Employee Information Reports", "Workforce Analysis Reports", "Employee Performance Tracking", "HR Decision-support Reporting"] }, { title: "MODULE 8: Integration with Other SAP Modules", items: ["Payroll Impact on Financial Accounting (FI)", "Employee Allocation to Projects (PS)", "Cross-module HR Transaction Simulations"] }, { title: "MODULE 9: SAP Implementation Basics & Career Preparation", items: ["SAP Project Phases & Configuration Basics", "Testing & Deployment Processes", "SAP HCM Consultant Roles", "Resume Building & Interview Preparation"] }], tools: ["SAP HCM (ECC / S/4HANA)", "SAP GUI", "MS Excel (for HR reporting)", "SAP Fiori (Overview)"], projects: ["Organizational Structure Setup", "Employee Lifecycle Management", "Payroll Processing Simulation", "Time & Attendance Management", "HR Reports & Workforce Analytics"] },
];

const STATS = [["28", "Courses"], ["120+", "Projects"], ["100%", "Job Ready"]];

// ── helpers ──────────────────────────────────────────────────────────────────
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
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </button>
      )}

      {/* Header */}
      <div className={`rounded-2xl p-6 mb-6 relative overflow-hidden ${master ? "bg-linear-to-br from-slate-900 via-blue-900 to-blue-700" : "bg-linear-to-br from-indigo-950 via-indigo-800 to-indigo-600"}`}>
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-5 left-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="flex items-center gap-4 relative">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur border border-white/25 flex items-center justify-center text-2xl text-white shrink-0">
            {course.icon}
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">{course.subtitle}</div>
            <div className="text-xl font-extrabold text-white leading-tight">{course.title}</div>
            {course.badge && (
              <div className="mt-2 inline-block text-xs font-bold bg-white/20 text-white rounded-full px-3 py-0.5 border border-white/25">
                {course.badge}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm">📚</span>
          <span className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}>Course Modules</span>
          <div className="flex-1 h-px bg-slate-200 ml-1" />
        </div>
        <div className="flex flex-col gap-2.5">
          {course.modules.map((mod, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-150">
              <div className="flex gap-2.5 items-start mb-2">
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold text-white shrink-0 mt-0.5 ${master ? "bg-linear-to-br from-blue-700 to-blue-500" : "bg-linear-to-br from-indigo-700 to-indigo-500"}`}>
                  {i + 1}
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-snug">{mod.title}</div>
              </div>
              {mod.objective && (
                <div className={`text-xs italic mb-2 ml-8 ${master ? "text-blue-600" : "text-indigo-600"}`}>🎯 {mod.objective}</div>
              )}
              <ul className="ml-8 flex flex-col gap-1">
                {mod.items.map((item, j) => (
                  <li key={j} className="text-xs text-slate-500 flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${master ? "bg-blue-300" : "bg-indigo-300"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      {course.tools?.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-sm">🛠</span>
            <span className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}>Tools Covered</span>
            <div className="flex-1 h-px bg-slate-200 ml-1" />
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tools.map((t, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-lg border ${master ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {course.projects?.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-sm">🚀</span>
            <span className={`text-xs font-bold tracking-widest uppercase ${master ? "text-blue-700" : "text-indigo-700"}`}>Real-World Projects</span>
            <div className="flex-1 h-px bg-slate-200 ml-1" />
          </div>
          <div className="flex flex-wrap gap-2">
            {course.projects.map((p, i) => (
              <span key={i} className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900 text-slate-100">
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileView({ search, setSearch }) {
  const [openId, setOpenId] = useState(null);

  const filteredM = useMemo(() => {
    const q = search.toLowerCase();
    return q ? masterDiplomaCourses.filter(c => c.title.toLowerCase().includes(q)) : masterDiplomaCourses;
  }, [search]);

  const filteredA = useMemo(() => {
    const q = search.toLowerCase();
    return q ? advanceSpecializationCourses.filter(c => c.title.toLowerCase().includes(q)) : advanceSpecializationCourses;
  }, [search]);

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  const Row = ({ course, type }) => {
    const isOpen = openId === course.id;
    const master = isMaster(type);
    return (
      <div className="border-b border-slate-100">
        <button
          onClick={() => toggle(course.id)}
          className={`w-full flex items-center gap-3 px-4 py-3.5 border-0 cursor-pointer text-left transition-all duration-150 ${isOpen ? (master ? "bg-linear-to-r from-blue-700 to-blue-600 shadow-[inset_4px_0_0_#93c5fd]" : "bg-linear-to-r from-indigo-700 to-indigo-600 shadow-[inset_4px_0_0_#a5b4fc]") : "bg-white"}`}
        >
          <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${isOpen ? "bg-white/20 text-white" : (master ? "bg-blue-50 text-blue-700" : "bg-indigo-50 text-indigo-700")}`}>
            {course.icon}
          </span>
          <div className="flex-1 min-w-0">
            <div className={`text-sm font-semibold truncate ${isOpen ? "text-white" : "text-black"}`}>{course.title}</div>
            <div className={`text-xs mt-0.5 ${isOpen ? "text-white/60" : "text-slate-400"}`}>{course.subtitle}</div>
          </div>
          {course.badge && (
            <span className={`text-xs font-bold rounded-full px-2 py-0.5 shrink-0 ${isOpen ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"}`}>
              {course.badge.replace(/[🔥🚀]/g, "").trim()}
            </span>
          )}
          <svg className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white/70" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="bg-slate-50 border-t border-slate-200">
            <CourseDetail course={course} type={type} />
          </div>
        )}
      </div>
    );
  };

  const SectionHead = ({ title, count, type }) => (
    <div className={`px-4 py-3 ${isMaster(type) ? "bg-linear-to-r from-slate-900 via-blue-900 to-blue-700" : "bg-linear-to-r from-indigo-950 via-indigo-800 to-indigo-600"}`}>
      <div className="text-xs font-extrabold tracking-widest uppercase text-white">{title}</div>
      <div className="text-xs text-white/50 mt-0.5">{count} courses</div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="px-4 py-3 bg-white border-b border-slate-100 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3.5 py-2.5 border border-slate-200">
          <svg className="w-3.5 h-3.5 text--black shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="bg-transparent border-0 outline-none text-sm text-black w-full placeholder-slate-400"
          />
          {search && (
            <button onClick={() => setSearch("")} className="bg-transparent border-0 cursor-pointer text-black p-0">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        {filteredM.length > 0 && (
          <>
            <SectionHead title="🎓 Master Diploma Course Multi Skills" count={filteredM.length} type="master" />
            {filteredM.map(c => <Row key={c.id} course={c} type="master" />)}
          </>
        )}
        {filteredA.length > 0 && (
          <>
            <SectionHead title="🏆 Advance Professional Specialization Course" count={filteredA.length} type="advance" />
            {filteredA.map(c => <Row key={c.id} course={c} type="advance" />)}
          </>
        )}
        {filteredM.length === 0 && filteredA.length === 0 && (
          <div className="py-10 text-center text-black text-sm">No courses found</div>
        )}
      </div>
    </div>
  );
}

function CourseBtn({ course, isActive, onClick, type }) {
  const master = isMaster(type);
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 px-3.5 py-3 border-b border-slate-100 border-0 cursor-pointer text-left transition-all duration-150 ${isActive ? (master ? "bg-linear-to-r from-blue-700 to-blue-600 shadow-[inset_4px_0_0_#93c5fd]" : "bg-linear-to-r from-indigo-700 to-indigo-600 shadow-[inset_4px_0_0_#a5b4fc]") : "bg-white hover:bg-slate-50"}`}
    >
      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0 ${isActive ? "bg-white/20 text-white" : (master ? "bg-blue-50 text-blue-700" : "bg-indigo-50 text-indigo-700")}`}>
        {course.icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className={`text-xs font-semibold truncate leading-snug ${isActive ? "text-white" : "text-black"}`}>{course.title}</div>
        <div className={`text-xs mt-0.5 truncate ${isActive ? "text-white/60" : "text-black"}`}>{course.subtitle}</div>
      </div>
      {course.badge && (
        <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"}`}>
          {course.badge.replace(/[🔥🚀]/g, "").trim()}
        </span>
      )}
    </button>
  );
}

function PanelHead({ title1, title2, count, type }) {
  const master = isMaster(type);
  return (
    <div className={`px-3.5 py-3 sticky top-0 z-5 ${master ? "bg-linear-to-b from-blue-900 to-blue-700" : "bg-linear-to-b from-indigo-900 to-indigo-700"}`}>
      <div className="text-xs font-extrabold tracking-widest uppercase text-white leading-relaxed">{title1}</div>
      <div className="text-xs font-extrabold tracking-widest uppercase text-white leading-relaxed">{title2}</div>
      <div className={`text-xs mt-1 ${master ? "text-blue-200/80" : "text-indigo-200/80"}`}>{count} courses</div>
    </div>
  );
}

function DefaultView({ onSelect }) {
  const fm = masterDiplomaCourses.filter(c => ["wd", "ai", "ds", "py"].includes(c.id));
  const fa = advanceSpecializationCourses.filter(c => ["adfa", "sapfico", "tally", "cia"].includes(c.id));

  return (
    <div className="p-6">
      {/* Hero */}
      <div className="rounded-3xl overflow-hidden mb-6 relative shadow-xl">
        <img src="/Hero1.jpeg" alt="IIOFT" className="w-full h-52 object-cover block" />
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-900/80 to-indigo-700/65 flex flex-col items-center justify-center p-6">
          <img src="/Logo.png" alt="IIOFT Logo" className="h-12 object-contain mb-3 drop-shadow-lg" />
          <p className="text-white text-lg font-extrabold tracking-wide text-center leading-relaxed m-0">
            <span className="text-red-300">Think Smart</span>
            <span className="text-white/40 mx-2.5">|</span>
            <span className="text-yellow-200">Learn Smart</span>
            <span className="text-white/40 mx-2.5">|</span>
            <span className="text-sky-300">Skill Up with IIOFT</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-linear-to-br from-slate-900 via-blue-900 to-blue-700 rounded-2xl p-5 mb-6 shadow-lg shadow-blue-900/30">
        <p className="text-xs text-blue-300/90 mb-3">28 expertly crafted courses across Tech, Design & Business</p>
        <div className="grid grid-cols-3 gap-2.5">
          {STATS.map(([num, label]) => (
            <div key={label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl text-center py-3 px-2">
              <div className="text-2xl font-black text-white leading-none">{num}</div>
              <div className="text-xs uppercase tracking-wider text-blue-200/80 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Master Featured */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-5 rounded-sm bg-linear-to-b from-blue-700 to-blue-400 inline-block" />
          <span className="text-xs font-extrabold tracking-widest uppercase text-blue-700">Master Diploma — Featured</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {fm.map(c => (
            <button key={c.id} onClick={() => onSelect(c, "master")} className="bg-white border border-slate-200 rounded-2xl p-4 text-left cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 w-full">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-lg">{c.icon}</span>
                {c.badge && <span className="text-xs font-bold bg-amber-100 text-amber-800 rounded-full px-2 py-0.5">{c.badge.replace(/[🔥🚀]/g, "").trim()}</span>}
              </div>
              <div className="text-sm font-bold text-black leading-snug mb-1">{c.title}</div>
              <div className="text-xs text-black mb-2.5">{c.subtitle}</div>
              <div className="text-xs font-semibold text-blue-700">View Syllabus →</div>
            </button>
          ))}
        </div>
      </div>

      {/* Advance Featured */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1 h-5 rounded-sm bg-linear-to-b from-indigo-700 to-indigo-400 inline-block" />
          <span className="text-xs font-extrabold tracking-widest uppercase text-indigo-700">Advance Specialization — Featured</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {fa.map(c => (
            <button key={c.id} onClick={() => onSelect(c, "advance")} className="bg-white border border-slate-200 rounded-2xl p-4 text-left cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 w-full">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg">{c.icon}</span>
              </div>
              <div className="text-sm font-bold text-slate-800 leading-snug mb-1">{c.title}</div>
              <div className="text-xs text-black mb-2.5">{c.subtitle}</div>
              <div className="text-xs font-semibold text-indigo-700">View Syllabus →</div>
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-black mt-4">← Select any course from the side panels →</p>
    </div>
  );
}

export default function CourseSyllabus() {
  const [selected, setSelected] = useState(null);
  const [selType, setSelType] = useState(null);
  const [search, setSearch] = useState("");
  const [mSearch, setMSearch] = useState("");

  const pick = (c, t) => { setSelected(c); setSelType(t); };

  const fm = useMemo(() => {
    const q = search.toLowerCase();
    return q ? masterDiplomaCourses.filter(c => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)) : masterDiplomaCourses;
  }, [search]);

  const fa = useMemo(() => {
    const q = search.toLowerCase();
    return q ? advanceSpecializationCourses.filter(c => c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)) : advanceSpecializationCourses;
  }, [search]);

  return (
    <div className="h-screen flex flex-col bg-slate-50">

      {/* Desktop Header */}
      <div className="hidden md:block bg-linear-to-r from-slate-900 via-blue-900 to-blue-700 px-6 py-3.5 shrink-0 shadow-lg shadow-black/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-blue-300/85 mb-2">All Industry-Ready Programs — Tech, Design & Business</p>
            <div className="flex gap-7">
              {STATS.map(([num, label]) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-white">{num}</span>
                  <span className="text-xs uppercase tracking-widest text-blue-200/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur rounded-2xl px-4 py-2.5 border border-white/20 min-w-56">
            <svg className="w-3.5 h-3.5 text-white/50 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="bg-transparent border-0 outline-none text-sm text-white placeholder-white/50 w-full"
            />
            {search && (
              <button onClick={() => setSearch("")} className="bg-transparent border-0 cursor-pointer text-white/50 p-0">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-linear-to-r from-slate-900 via-blue-900 to-blue-700 px-4 py-3 shrink-0">
        <div className="flex items-center justify-between">
          <p className="text-xs text-blue-300/85 m-0">Industry-Ready Programs</p>
          <div className="flex gap-4">
            {STATS.map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-sm font-black text-white">{num}</div>
                <div className="text-xs uppercase tracking-wider text-blue-200/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex-1 overflow-hidden">
        <MobileView search={mSearch} setSearch={setMSearch} />
      </div>

      {/* Desktop 3-Panel */}
      <div className="hidden md:flex flex-1 min-h-0 overflow-hidden">

        {/* LEFT panel */}
        <div className="w-56 shrink-0 bg-white border-r border-black overflow-y-auto h-full">
          <PanelHead title1="🎓 Master Diploma" title2="Course Multi Skills" count={fm.length} type="master" />
          {fm.length === 0
            ? <div className="p-4 text-center text-black text-xs">No results</div>
            : fm.map(c => <CourseBtn key={c.id} course={c} isActive={selected?.id === c.id} onClick={() => pick(c, "master")} type="master" />)
          }
        </div>

        {/* CENTER panel */}
        <div className="flex-1 overflow-y-auto bg-black min-w-0">
          {selected
            ? <CourseDetail course={selected} type={selType} onBack={() => { setSelected(null); setSelType(null); }} />
            : <DefaultView onSelect={pick} />
          }
        </div>

        {/* RIGHT panel */}
        <div className="w-56 shrink-0 bg-white border-l border-black overflow-y-auto h-full">
          <PanelHead title1="🏆 Advance Professional" title2="Specialization Course" count={fa.length} type="advance" />
          {fa.length === 0
            ? <div className="p-4 text-center text-black text-xs">No results</div>
            : fa.map(c => <CourseBtn key={c.id} course={c} isActive={selected?.id === c.id} onClick={() => pick(c, "advance")} type="advance" />)
          }
        </div>

      </div>
    </div>
  );
}