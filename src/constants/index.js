export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const educationAchievements = [
    {
      id: 1,
      title: 'Bachelor of Technology, VIT Vellore',
      detail: '2021 - Present',
      img: 'assets/vit_logo.png',
      description:
        'Pursuing a B.Tech in Computer Science with a specialization in Information Security. Current CGPA: 9.19.',
        icon: '/assets/graduation.svg',
    },
    {
      id: 2,
      title: 'St. Joseph’s Public School, Bihar',
      detail: '2018 - 2020',
      img: 'assets/school.jpg',
      description:
        'Completed Class 12 (90.4%) and Class 10 (94.8%) under Central Board of Secondary Education (CBSE).',
      icon: '/assets/school.svg',
    },
    {
      id: 3,
      title: 'AWS Certified Cloud Practitioner (CP)',
      detail: 'December 2023 ',
      img: 'assets/aws-cp.png',
      description:
        'Earned AWS Certified Cloud Practitioner certification, demonstrating fundamental cloud expertise.',
      icon: '/assets/star.png',
    },
    {
      id: 4,
      title: 'AWS Certified Solutions Architect - Associate (SAA)',
      detail: 'January 2024',
      img: 'assets/aws-saa.png',
      description:
        'Achieved AWS Certified Solutions Architect - Associate, showcasing cloud architecture and design knowledge.',
      icon: '/assets/star.png',
    },
    {
      id: 5,
      title: '2nd Place - DEVSOC Hackathon',
      detail: 'June 2023',
      img: 'assets/codechef.svg',
      description:
        'Secured 2nd place in the DEVSOC hackathon among 108 teams, developing a real estate web app prototype.',
      icon: '/assets/star.png',
    },
  ];
  
  export const myProjects = [
    {
      title: 'RealtyVue - A Real Estate Application',
      desc: 'RealtyVue is an innovative real estate platform designed to streamline property discovery and communication. With interactive map pinning and real-time chat, it bridges the gap between buyers and sellers, creating a seamless experience.',
      subdesc:
        'Developed as a full-stack application using React, SCSS, MongoDB, and Leaflet, RealtyVue is built for responsiveness and user engagement. It includes JWT-based authentication, secure file handling with Cloudinary, and efficient data management with Prisma.',
      href: '',
      texture: '/textures/project/vid_realtyvue.mp4',
      logo: '/assets/realtyvue.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'MongoDB',
          path: 'assets/mongodb.svg',
        },
        {
          id: 3,
          name: 'Express.js',
          path: '/assets/express.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
        {
          id: 5,
          name: 'Socket.io',
          path: '/assets/socket.svg',
        },
        {
          id: 6,
          name: 'Prisma',
          path: '/assets/prisma.svg',
        },
        {
          id: 7,
          name: 'Cloudinary',
          path: '/assets/cloudinary.png',
        },
      ],
    },
    {
      title: '3D Portfolio - My Three.JS Showcase',
      desc: 'The 3D Portfolio app is an immersive and visually captivating developer portfolio designed to showcase skills and projects in an innovative way. With 3D elements and dynamic animations, it offers an engaging experience that leaves a lasting impression on visitors.',
      subdesc:
        'Built with React, Three.js, and Tailwind CSS, the 3D Portfolio app utilizes React Three Fiber and Drei to create responsive and interactive 3D components. It features an animated hero section, interactive project showcases, and a globe pinpointing user location, creating a unique and memorable user experience.',
      href: '',
      texture: '/textures/project/vid_3dPortfolio.mp4',
      logo: '/assets/logo.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Three.js',
          path: 'assets/Threejs.svg',
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'emailjs',
          path: '/assets/emailjs.png',
        },
      ],
    },
    {
      title: 'KBC Quiz App - Kaun Banega Crorepati Simulator',
      desc: 'KBC Quiz App is an engaging web-based quiz game that mimics the popular game show "Kaun Banega Crorepati". With a dynamic UI and real-time feedback, it delivers an immersive experience for users testing their knowledge.',
      subdesc:
        'Developed using React, React Hooks, and animations, the KBC Quiz App combines a responsive design with sound effects, scoring, and game-over logic, creating a seamless quiz experience for users.',
      href: '',
      texture: '/textures/project/vid_kbc.mp4',
      logo: '/assets/kbc.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'vite',
          path: 'assets/vite.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.svg',
        },
      ],
    },
    {
      title: 'MERN_ChatFire - Real-Time Chat Application',
      desc: 'MERN_ChatFire is a modern chat application that enables real-time communication with robust authentication and data handling. Built on the MERN stack, it integrates seamlessly with Firebase to ensure secure and instant messaging.',
      subdesc:
        'Utilizing MongoDB, Express, React, Node.js, and Firebase, MERN_ChatFire provides a scalable solution for real-time chat applications, featuring user-friendly authentication and real-time database synchronization for a smooth messaging experience.',
      href: '',
      texture: '/textures/project/vid_chatfire.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'MongoDB',
          path: 'assets/mongodb.svg',
        },
        {
          id: 3,
          name: 'Express.js',
          path: '/assets/express.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.svg',
        },
        {
          id: 5,
          name: 'firebase',
          path: '/assets/firebase.svg',
        },
      ],
    },
    {
      title: 'BizExtract - JustDial Business Data Extractor',
      desc: 'BizExtract is a Chrome extension designed for efficient business data extraction from JustDial. It enables users to collect detailed business information in seconds, enhancing data analysis and research capabilities.',
      subdesc: 'Powered by JavaScript and the Chrome Extension API, BizExtract seamlessly integrates with JustDial to provide an easy-to-use data extraction tool, complete with Excel export functionality for organized data handling.',
      href: '',
      texture: '/textures/project/vid_bizextract.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
        {
          id: 2,
          name: 'excel',
          path: 'assets/excel.svg',
        },
        {
          id: 3,
          name: 'CloudCode',
          path: '/assets/CloudCode.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
 
  export const workExperiences = [
    {
      id: 1,
      name: 'Samsung R&D Institute',
      pos: 'Research Intern',
      duration: 'Feb 2024 - Present',
      title: "At Samsung R&D, I developed and integrated GAN-based models to enhance video generation efficiency, achieving a 20% improvement in processing speed for reaction videos in chat applications. Worked in a remote team, utilizing Google Colab and Open Sora Plan for backend solutions.",
      icon: '/assets/samsung.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Clikin Tech',
      pos: 'Front End Developer Intern',
      duration: 'Oct 2023 - Nov 2023',
      title: "At Clikin Tech, I optimized front-end performance and collaborated with the team to improve website functionality, enhancing the overall user experience.",
      icon: '/assets/clikintech.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'LEO Club, VIT Vellore',
      pos: 'Design Lead',
      duration: 'Feb 2023 - Oct 2023',
      title: "Led a team of 20+ designers for on-campus and off-campus events, executing design strategies across 15+ events. Contributed to the club’s success as Best Outreach Club at RIVIERA’23.",
      icon: '/assets/leo.png',
      animation: 'salute',
    },
];


  // export const workExperiences = [
  //   {
  //     id: 1,
  //     name: 'Framer',
  //     pos: 'Lead Web Developer',
  //     duration: '2022 - Present',
  //     title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
  //     icon: '/assets/framer.svg',
  //     animation: 'victory',
  //   },
  //   {
  //     id: 2,
  //     name: 'Figma',
  //     pos: 'Web Developer',
  //     duration: '2020 - 2022',
  //     title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //     icon: '/assets/figma.svg',
  //     animation: 'clapping',
  //   },
  //   {
  //     id: 3,
  //     name: 'Notion',
  //     pos: 'Junior Web Developer',
  //     duration: '2019 - 2020',
  //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //     icon: '/assets/notion.svg',
  //     animation: 'salute',
  //   },
  // ];