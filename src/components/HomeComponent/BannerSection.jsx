import hero from "../../images/hero.jpg";
import { useTypewriter } from "react-simple-typewriter";

export const BannerSection = () => {
    const [text]= useTypewriter({
        words:["React Developer" , "Frontend Developer" , "FullStack Developer" , "WordPress Developer","Logo Designer"],
        loop:true,
        typeSpeed:20,
        deleteSpeed:20,
        delaySpeed:2000,
    })
  return (
    <div className="border border-blue-300 mt-2 max-w-[1280px]">
        <section className="flex flex-col md:flex-row  w-[90%] mx-auto">
            {/* this is for image */}
            <div className="w-[31rem] h-[31rem] border border-blue-400">
                <img src={hero} alt="hero" className="w-full h-full bg-center bg-cover"/>
            </div>
            {/* this is intro */}
            <div className="w-[31rem] h-[31rem] border border-blue-400">
                <h1>Hey There ..</h1>
                <h2>I'm Deepak</h2>
                <h3>and i'm a </h3>
<h1>{text}</h1>
            </div>
        </section>
    
    </div>
  )
}
