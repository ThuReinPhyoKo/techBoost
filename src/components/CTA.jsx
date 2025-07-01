function CTA(){
    return(
        <>
            <section id="CTA" className="w-full min-h-screen bg-[url(./assets/call-to-action.jpg)] bg-center bg-cover flex flex-col justify-center">
                <h3 className="font-sans leading-[1.3] font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">Start Growing Your Business Today</h3>
                <h4 className="text-xl mx-6 md:mx-0 font-sans py-5 text-gray-700 text-center">Get started with a free <strong>14-day trial</strong>. No credit card required.</h4>
                <div className="flex flex-col items-center md:flex-row border-2 my-5 border-red-400 mx-auto w-[90%] md:w-[40%] p-0.5 bg-[#ebebeb] rounded-full h-14">
                    <input className="text-lg px-2.5 w-full outline-0" type="email" required />
                    <button className="text-lg md:text-lg mt-10 md:mt-0 p-2.5 font-medium text-white w-56 rounded-full bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] cursor-pointer transition hover:border-2 hover:border-gray-400">Start your trial</button>
                </div>
            </section>
        </>
    )
}

export default CTA