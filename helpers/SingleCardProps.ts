export default interface SingleCardProps {
    id: number,
    image: string,
    title: string,
    description: string,
    role: string,
    techStack: string[] | undefined,
    duration: string
}
