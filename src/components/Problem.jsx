import idea from "../assets/idea.png"
import noti from "../assets/noti.png"

function Problem(){
    return (
        <>
            <section className="w-full min-h-screen flex flex-col justify-center gap-5">
                <div className="mx-auto w-full md:w-[80%] flex justify-around">
                    <div className="hidden md:block w-[20%] h-[210px] bg-[linear-gradient(to_right,_#c6ffdd,_#fbd786,_#f7797d)] rounded-[50%]">
                        <img src={noti} alt="notification" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="font-sans mx-2.5 md:mx-0 font-bold text-transparent text-3xl md:text-4xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">Too many tools? Too much chaos?</h3>
                        <ol className="text-gray-700 p-5">
                            <li className="p-2 text-xl md:text-2xl font-sans">Managing multiple subscriptions is a hassle.</li>
                            <li className="p-2 text-xl md:text-2xl font-sans">Switching between tools wastes time.</li>
                            <li className="p-2 text-lg md:text-2xl font-sans">Lack of clear data insights.</li>
                        </ol>
                    </div>
                </div>
                <div className="mx-auto w-full md:w-[80%] flex justify-around">
                    <div className="flex flex-col justify-center">
                        <h3 className="font-sans mx-2.5 md:mx-0 font-bold text-transparent text-3xl md:text-4xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">We have a solution for you</h3>
                        <ol className="text-gray-700 p-5">
                            <li className="p-2 text-xl md:text-2xl font-sans">One platform, all your tools</li>
                            <li className="p-2 text-xl md:text-2xl font-sans">Seamless All-in-One workflow</li>
                            <li className="p-2 text-xl md:text-2xl font-sans">Real-time data at your fingertips</li>
                        </ol>
                    </div>
                    <div className="hidden md:block w-[20%] h-[210px] bg-[linear-gradient(to_right,_#c6ffdd,_#fbd786,_#f7797d)] rounded-[50%]">
                        <img src={idea} alt="solution" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Problem