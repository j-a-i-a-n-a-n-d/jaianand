import { skillDataProperties, CommonMotionProperties, projectDataProperties } from "./types";

export const skillData: skillDataProperties[] = [
    {
        id: 1,
        image_id: "./skills/python.png",
        proficiency: 90,
        animationDirection: true,
    },
    {
        id: 3,
        image_id: "./skills/cpp.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 2,
        image_id: "./skills/sql.png",
        proficiency: 90,
        animationDirection: false,
    },
    {
        id: 4,
        image_id: "./skills/javascript.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 5,
        image_id: "./skills/django.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 6,
        image_id: "./skills/fastapi.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 7,
        image_id: "./skills/node.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 8,
        image_id: "./skills/react.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 9,
        image_id: "./skills/git.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 10,
        image_id: "./skills/github.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 11,
        image_id: "./skills/docker.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 12,
        image_id: "./skills/azure.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 14,
        image_id: "./skills/postgre.png",
        proficiency: 50,
        animationDirection: false,
    },
    {
        id: 15,
        image_id: "./skills/mongodb.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 13,
        image_id: "./skills/redis.png",
        proficiency: 60,
        animationDirection: false,
    },
    {
        id: 16,
        image_id: "./skills/kafka.png",
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
        image_id: "./projects/fashiongpt.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/FlipkartGrid5.0",
        skills: ["#Django REST", "#Python", "#React", "#OpenAI", "#Azure"]
    },
    {
        id: 1,
        title: "Portfolio Website",
        description: "My personal portfolio website built using Next.js and Tailwind CSS.",
        image_id: "./projects/portfolio.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/jaianand",
        skills: ["#Nextjs", "#Tailwind", "#TypeScript", "#Framer Motion"]
    },
    {
        id: 4,
        title: "SADE",
        description: "Face detection and recognition using OpenCV and Python part of Intern Project under IEEE",
        image_id: "./projects/sade.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/SADE-face-detection-and-recognition",
        skills: ["#Python", "#OpenCV", "#Sendgrid"]
    },
    {
        id: 2,
        title: "Toy Pot",
        description: "A dummy SSH Honeypot built with Python's Paramiko.",
        image_id: "./projects/honeypot.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/Toy-Pot",
        skills: ["#Python", "#Paramiko"]
    },
    {
        id: 3,
        title: "Jobify Me",
        description: "A clone of a leading freelance website built using React18.",
        image_id: "./projects/jobifyme.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d/Jobify-Me",
        skills: ["#ReactJS", "#Bootstrap"]
    },
    {
        id: 6,
        title: "fast-type",
        description: "A multiplayer typing game built as a part of TCB Hackathon.",
        image_id: "./projects/fasttype.png",
        gihtub_link: "https://github.com/j-a-i-a-n-a-n-d",
        skills: ["#Typescript", "#Socket.io", "#ExpressJS", "#MongoDB", "#React"]
    },



]