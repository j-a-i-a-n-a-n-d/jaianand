export default interface CommonMotionProperties {
    initial: { y: number; opacity: number; scale: number };
    whileInView: { y: number; opacity: number; scale: number };
    transition: { duration: number };
}
