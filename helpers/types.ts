export interface skillDataProperties {
    id: number,
    image_id: string,
    proficiency: number,
    animationDirection: boolean,
}
export interface CommonMotionProperties {
    initial: { y: number; opacity: number; scale: number };
    whileInView: { y: number; opacity: number; scale: number };
    transition: { duration: number };
}

export interface projectDataProperties {
    id: number,
    title: string,
    description: string,
    image_id: string,
    gihtub_link: string,
    skills: string[],
}