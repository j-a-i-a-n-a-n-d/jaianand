import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
export default function Home() {
    const now = new Date();
    const timeZoneIndia = 'Asia/Kolkata';
    const dateTimeFormatIndia = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZoneIndia,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    const formattedDateTimeIndia = dateTimeFormatIndia.format(now);
    const [hours, merdian] = [formattedDateTimeIndia.slice(0, 2), formattedDateTimeIndia.slice(9)];
    
    const _dayStyles = "bg-[rgb(255,255,255)] text-[rgb(38,38,38)] h-screen snap-y snap-mandatory z-0 overflow-scroll overflow-x-hidden";
    const _nightstyles = "bg-[rgb(38,38,38)] text-[rgb(255,255,255)] h-screen snap-y snap-mandatory z-0 overflow-scroll overflow-x-hidden";
    return (
        <div className={_nightstyles} > { /*(parseInt(hours) > 5 && merdian == "PM") ? _dayStyles : */}
            <Navbar />
            <section className="snap-start">
                <Hero />
            </section>
            <section id="aboutme" className="snap-center">
                <About />
            </section>
            <h2>Projects</h2>
            <h2>Contact Me</h2>
        </div>
    );
}
