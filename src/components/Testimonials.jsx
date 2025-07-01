import A from "../assets/1.png"
import B from "../assets/2.png"
import C from "../assets/3.png"

function Testimonial() {
    return (
        <>
            <section id="review" className="bg-[url(./assets/review.jpg)] bg-center bg-cover w-full min-h-screen flex flex-col justify-center gap-5">
                <h3 className="font-sans h-14 mt-20 md:mt-0 font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">What Our Customers Say</h3>
                <div className="flex flex-col md:flex-row w-[80%] mx-auto gap-10 mt-3.5 items-center justify-center">
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <img className="w-[400px] md:w-[250px] rounded-2xl transition-all duration-300 ease-in-out hover:scale-105" src={A} alt="A" />
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <img className="w-[400px] md:w-[250px] rounded-2xl transition-all duration-300 ease-in-out hover:scale-105" src={B} alt="B" />
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <img className="w-[400px] md:w-[250px] rounded-2xl transition-all duration-300 ease-in-out hover:scale-105" src={C} alt="C" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial