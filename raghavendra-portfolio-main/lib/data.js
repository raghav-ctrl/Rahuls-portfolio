export const GENERAL_INFO = {
    email: 'manivenu16@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Raghvendra Rahul, I have shared my GitHub link.',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/raghav-ctrl' },
    { name: 'linkedin', url: 'https://in.linkedin.com/in/raghavendra-rahul-1b3b40283' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS (S3, EC2, API Gateway, DynamoDB, Textract)',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS = [
    {
        title: 'Epikcart',
        slug: 'epikcart',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
    },
    {
        title: 'AI Resume Screener',
        year: 2025,
        description:
            'A static website to upload resumes (PDF/DOC) and process them using AWS services like S3, Textract, DynamoDB, and API Gateway to extract and analyze key information for screening. (Not hosted)',
        role: 'Designed and built the solution architecture, implemented resume upload and processing pipeline using AWS services.',
        techStack: ['AWS S3', 'AWS Textract', 'DynamoDB', 'API Gateway', 'Static Website'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
        slug: 'ai-resume-screener',
    },
    {
        title: 'JR Events Portfolio',
        year: 2024,
        description:
            'A portfolio website for a balloon and flower decoration business to showcase event designs and services. (Not hosted)',
        role: 'Built static pages and galleries highlighting different event decoration categories.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Static Website'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
        slug: 'jr-events-portfolio',
    },
    {
        title: 'Budget Rooms Finder',
        year: 2025,
        description:
            'A static website concept to list budget rooms and small rental houses for middle-class and low-income families, addressing the lack of online listings for small rentals. (Not hosted)',
        role: 'Designed information architecture and listing layout tailored for quick discovery of affordable rentals.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Static Website'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
        slug: 'budget-rooms',
    },
    {
        title: 'IoT Portable Water Cooler & Heater',
        slug: 'iot-water-cooler-heater',
        year: 2024,
        description:
            'An IoT-based system that cools or heats water based on ambient room temperature using Peltier module, heat sink, thermistor/DHT11, and Arduino Uno. Potential use in industries, data centers, and servers. (Prototype; not hosted)',
        role: 'Built the hardware prototype and control logic, calibrated temperature thresholds and control.',
        techStack: ['Arduino Uno', 'Peltier Module', 'Heat Sink', 'DHT11', 'Thermistor'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
    },
    {
        title: 'AI Waste Segregation Bin',
        slug: 'ai-waste-segregation-bin',
        year: 2024,
        description:
            'A smart bin that classifies waste types such as metal, wet, dry, and plastic using AI-based image classification, aimed for use in restaurants and remote areas. (Prototype; not hosted)',
        role: 'Developed dataset and model pipeline for classification; designed bin workflow.',
        techStack: ['Computer Vision', 'Embedded', 'Arduino/RPi (concept)'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'AI & Cloud Virtual Intern',
        company: 'IBM',
        duration: 'Jun 2025 - Aug 2025',
    },
    {
        title: 'AWS re/Start Intern (Cloud/SRE)',
        company: 'Tech Mahindra Smart Academy',
        duration: 'Dec 2024 - Apr 2025',
    },
    {
        title: 'Marketing & Operations Intern',
        company: 'American Brew Crafts',
        duration: 'Aug 2024 - Dec 2024',
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Lead Hector',
        duration: 'Jun 2023 - Aug 2023',
    },
];

