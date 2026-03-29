import { skillDataProperties, CommonMotionProperties, projectDataProperties } from "./types";

export const skillData: skillDataProperties[] = [
    {
        id: 1,
        image_id: "/skills/python.png",
        proficiency: 90,
        animationDirection: true,
    },
    {
        id: 3,
        image_id: "/skills/cpp.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 2,
        image_id: "/skills/sql.png",
        proficiency: 90,
        animationDirection: false,
    },
    {
        id: 4,
        image_id: "/skills/javascript.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 5,
        image_id: "/skills/django.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 6,
        image_id: "/skills/fastapi.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 7,
        image_id: "/skills/node.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 8,
        image_id: "/skills/react.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 9,
        image_id: "/skills/git.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 10,
        image_id: "/skills/github.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 11,
        image_id: "/skills/docker.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 12,
        image_id: "/skills/azure.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 14,
        image_id: "/skills/postgre.png",
        proficiency: 50,
        animationDirection: false,
    },
    {
        id: 15,
        image_id: "/skills/mongodb.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 13,
        image_id: "/skills/redis.png",
        proficiency: 60,
        animationDirection: false,
    },
    {
        id: 16,
        image_id: "/skills/kafka.png",
        proficiency: 50,
        animationDirection: true,
    },
]

export const commonMotionProperties: CommonMotionProperties = {
    initial: { y: 0, opacity: 0, scale: 0 },
    whileInView: { y: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
};

export const projectData: projectDataProperties[] = [

    {
        id: 5,
        title: "Fashion GPT",
        description: "A GenAI based fashion recommendation system using GPT-3.5 and azure, part of Flipkart Grid 5.0.",
        image_id: "/projects/fashiongpt.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/FlipkartGrid5.0",
        skills: ["#Django REST", "#Python", "#React", "#OpenAI", "#Azure"]
    },
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio website built using Next.js and Tailwind CSS.",
        image_id: "/projects/portfolio.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/jaianand",
        skills: ["#Nextjs", "#Tailwind", "#TypeScript", "#Framer Motion"]
    },
    {
        id: 4,
        title: "SADE",
        description: "Face detection and recognition using OpenCV and Python part of Intern Project under IEEE",
        image_id: "/projects/sade.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/SADE-face-detection-and-recognition",
        skills: ["#Python", "#OpenCV", "#Sendgrid"]
    },
    {
        id: 2,
        title: "Toy Pot",
        description: "A dummy SSH Honeypot built with Python's Paramiko.",
        image_id: "/projects/honeypot.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/Toy-Pot",
        skills: ["#Python", "#Paramiko"]
    },
    {
        id: 3,
        title: "Jobify Me",
        description: "A clone of a leading freelance website built using React18.",
        image_id: "/projects/jobifyme.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/Jobify-Me",
        skills: ["#ReactJS", "#Bootstrap"]
    },
    {
        id: 6,
        title: "fast-type",
        description: "A multiplayer typing game built as a part of TCB Hackathon.",
        image_id: "/projects/fasttype.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d",
        skills: ["#Typescript", "#Socket.io", "#ExpressJS", "#MongoDB", "#React"]
    },
];

export const experienceData = [
    {
        id: 1,
        title: "Associate Software Engineer",
        company: "Yamaha Motors India",
        date: "July 2024 - Present",
        description: [
            "Designed and built highly scalable architectures handling millions of records to support generic procurement operations across <b>Factory</b> and <b>Dealer</b> networks.",
            "Structured high-performance databases and managed end-to-end <b>CI/CD</b> workflows using modern cloud infrastructure.",
            "Implemented secure authentication layers to ensure robust access control and system integrity."
        ],
        skills: ["Angular", "Java", "Spring Boot", "Amazon Web Services", "Docker", "GitHub Actions", "ECS Fargate", "SAML", "PostgreSQL"],
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        company: "vXecute Inc",
        date: "December 2023 - July 2024",
        description: [
            "Architected robust data ingestion pipelines using <b>Python</b>, <b>Apache Kafka</b>, and <b>Pinecone</b> vector databases for <b>GenAI</b> tools.",
            "Engineered complex database schemas using <b>Ecto ORM</b> in <b>Elixir Phoenix Liveview</b>.",
            "Integrated background job processing with <b>Oban</b>, radically improving overall product performance and system reliability."
        ],
        skills: ["Python", "Apache Kafka", "Elixir", "Phoenix Liveview", "Pinecone", "GenAI", "Ecto ORM", "Oban", "LLMs"],
    },
    {
        id: 3,
        title: "Backend Developer Intern",
        company: "HealthSphere",
        date: "June 2023 - November 2023",
        description: [
            "Developed and deployed scalable RESTful APIs utilizing Python's <b>Django REST Framework</b>.",
            "Implemented secure middleware operations with <b>JWT Authentication</b> for robust user session management.",
            "Successfully <b>Dockerized</b> backend services using <b>Nginx</b> as a reverse proxy with <b>Gunicorn</b> to deliver a high-performance web server setup."
        ],
        skills: ["Django", "React", "Docker", "Azure", "Nginx", "OpenAI", "Gunicorn", "REST APIs", "JWT"],
    }
];