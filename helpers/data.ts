import { skillDataProperties, CommonMotionProperties } from "./types";

export const skillData: skillDataProperties[] = [
    {
        id: 1,
        image_id: "./skills/azure.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 2,
        image_id: "./skills/cpp.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 3,
        image_id: "./skills/django.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 4,
        image_id: "./skills/docker.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 5,
        image_id: "./skills/fastapi.png",
        proficiency: 60,
        animationDirection: true,
    },
    {
        id: 6,
        image_id: "./skills/git.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 7,
        image_id: "./skills/github.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 8,
        image_id: "./skills/javascript.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 9,
        image_id: "./skills/kafka.png",
        proficiency: 50,
        animationDirection: true,
    },
    {
        id: 10,
        image_id: "./skills/mongodb.png",
        proficiency: 70,
        animationDirection: true,
    },
    {
        id: 11,
        image_id: "./skills/node.png",
        proficiency: 80,
        animationDirection: false,
    },
    {
        id: 12,
        image_id: "./skills/postgre.png",
        proficiency: 50,
        animationDirection: false,
    },
    {
        id: 13,
        image_id: "./skills/python.png",
        proficiency: 90,
        animationDirection: true,
    },
    {
        id: 14,
        image_id: "./skills/react.png",
        proficiency: 80,
        animationDirection: true,
    },
    {
        id: 15,
        image_id: "./skills/redis.png",
        proficiency: 60,
        animationDirection: false,
    },
    {
        id: 16,
        image_id: "./skills/sql.png",
        proficiency: 90,
        animationDirection: false,
    },
]

export const commonMotionProperties: CommonMotionProperties = {
    initial: { y: 0, opacity: 0, scale: 0 },
    whileInView: { y: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
};