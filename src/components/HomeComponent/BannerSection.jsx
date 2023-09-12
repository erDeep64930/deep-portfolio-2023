import hero from "../../images/hero.jpg";
import { useTypewriter } from "react-simple-typewriter";
import world from "../../images/world.png";

export const BannerSection = () => {
    const [text] = useTypewriter({
        words: ["React Developer", "Frontend Developer", "FullStack Developer", "WordPress Developer", "Logo Designer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 20,
        delaySpeed: 2000,
    })
    return (
        <div className="border border-blue-300 mt-2 max-w-[1280px] w-[90%] mx-auto">
            <section className="flex flex-col md:flex-row relative ">
                {/* this is for svg image  */}
                <div>
                    <img src={world} className="absolute hidden md:block" alt=""/>
                </div>
                {/* this is for image */}
                <div className="w-full md:w-[50%] h-[25rem] border border-blue-400 flex justify-center items-center z-20">
                    <img src={hero} alt="hero" className="w-full h-full  bg-cover rounded-full py-2 px-2 md:py-[2rem] md:px-[4rem] mx-auto shrink-0" />
                </div>
                {/* this is intro */}
                <div className="w-full md:w-[50%] h-[25rem] border border-blue-400 flex flex-col  items-center mt-6 py-12 z-20">
                    <h1 className="text-center md:text-left py-2 mt-2  text-2xl font-semibold font-mont">Hey There ..</h1>
                    <h2 className="text-center md:text-left py-2 mt-2 text-3xl font-bold font-meri">I'm Deepak</h2>
                    <h3 className="text-center md:text-left py-2 mt-2 text-2xl font-roboto">and i'm a </h3>
                    <h1 className="text-center md:text-left py-2 mt-2 text-3xl font-bold font-meri">{text}</h1>
                </div>
            </section>

        </div>
    )
}
