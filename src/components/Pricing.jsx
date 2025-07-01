function Pricing(){
    return(
        <>
            <section id="pricing" className="w-full min-h-screen flex flex-col justify-center">
                <h3 className="font-sans h-20 md:h-14 mt-20 md:mt-0 font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">Simple Pricing for Any Stage</h3>
                <div className="flex flex-col md:flex-row w-[80%] mt-10 mx-auto gap-10 items-center justify-center">
                    <div className="flex flex-col justify-between w-[300px] h-[400px] shadow-2xl text-gray-700 bg-[linear-gradient(to_bottom,_#c9d6ff,_#e2e2e2)] transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-[linear-gradient(to_bottom,_#c33764,_#1d2671)] rounded-xl">
                        <div>
                            <h6 className="font-semibold text-2xl text-center p-3.5">Starter</h6>
                            <h6 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] px-3.5">$29/month</h6>
                            <ol className="list-disc list-inside p-5">
                                <li className="text-lg font-medium">Basic CRM</li>
                                <li className="text-lg font-medium">Appointment Scheduling</li>
                                <li className="text-lg font-medium">Email Reminders</li>
                                <li className="text-lg font-medium">Basic Automation</li>
                            </ol>
                        </div>
                        <button className="bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] cursor-pointer transition hover:border-2 hover:border-white text-white w-[80%] p-1.5 my-3.5 text-xl font-semibold mx-auto rounded-xl">Start</button>
                    </div>
                    <div className="flex flex-col justify-between w-[300px] h-[400px] shadow-2xl text-gray-700 bg-[linear-gradient(to_bottom,_#c9d6ff,_#e2e2e2)] transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-[linear-gradient(to_bottom,_#c33764,_#1d2671)] rounded-xl">
                        <div>
                            <h6 className="font-semibold text-2xl text-center p-3.5">Professional</h6>
                            <h6 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] px-3.5">$79/month</h6>
                            <ol className="list-disc list-inside p-5">
                                <li className="text-lg font-medium">Everything in Starter</li>
                                <li className="text-lg font-medium">Advanced Automation</li>
                                <li className="text-lg font-medium">Invoicing & Payments</li>
                                <li className="text-lg font-medium">Integration Hub</li>
                                <li className="text-lg font-medium">Analytics Dashboard</li>
                            </ol>
                        </div>
                        <button className="bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] cursor-pointer transition hover:border-2 hover:border-white text-white w-[80%] p-1.5 my-3.5 text-xl font-semibold mx-auto rounded-xl">Start</button>
                    </div>
                    <div className="flex flex-col justify-between w-[300px] h-[400px] shadow-2xl text-gray-700 bg-[linear-gradient(to_bottom,_#c9d6ff,_#e2e2e2)] transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-[linear-gradient(to_bottom,_#c33764,_#1d2671)] rounded-xl">
                        <div>
                            <h6 className="font-semibold text-2xl text-center p-3.5">Enterprise</h6>
                            <h6 className="font-bold text-3xl text-center text-transparent bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] px-3.5">$199/month</h6>
                            <ol className="list-disc list-inside p-5">
                                <li className="text-lg font-medium">Everything in Professional</li>
                                <li className="text-lg font-medium">Priority Support</li>
                                <li className="text-lg font-medium">Team Collaboration</li>
                                <li className="text-lg font-medium">Custom Workflows</li>
                                <li className="text-lg font-medium">Advanced Reporting</li>
                                <li className="text-lg font-medium">White-Label Branding</li>
                                <li className="text-lg font-medium">Custom Integrations</li>
                            </ol>
                        </div>
                        <button className="bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] cursor-pointer transition hover:border-2 hover:border-white text-white w-[80%] p-1.5 my-3.5 text-xl font-semibold mx-auto rounded-xl">Start</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing