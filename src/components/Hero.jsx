import heroImg from "../assets/hero-img.png"
import video from "../assets/video/video.mp4"

function Hero () {
    return (
        <div>
            <div id="hero" className="bg-[url(./assets/hero-bg.jpg)] bg-center bg-fixed w-full min-h-screen">
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-around min-h-screen lg:sticky lg:top-0 z-10">
                    <div className="md:w-1/2 w-[90%] p-5 h-80">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-serif leading-tight">Run Your Business with Ease, All-in-One Platform</h1>
                        <h3 className="md:text-xl text-lg my-2.5 font-sans">Simplify client management, automate tasks, schedule appointments, and get paid - all from one simple dashboard.</h3>
                        <a href="CTA" className="text-lg md:text-xl text-white font-bold"><button className="p-2.5 shadow-2xl hover:scale-105 transition cursor-pointer bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-xl my-5 border border-white">Start your free trial</button></a>
                    </div>
                    <div className="md:w-1/3 w-[80%] h-auto">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
                <div className="-mt-20 mx-auto w-[60%] hidden md:flex justify-center ">
                    <video className="z-20 rounded-xl shadow-lg border-4 border-white" src={video} autoPlay muted loop></video>
                </div>
                <div className="w-full h-24 hidden md:block"></div>
            </div>  
        </div>
    )
}

export default Hero