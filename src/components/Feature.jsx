import A from "../assets/icons/crm.png"
import B from "../assets/icons/workflow.png"
import C from "../assets/icons/appointment.png"
import D from "../assets/icons/invoice.png"
import E from "../assets/icons/analytics.png"
import F from "../assets/icons/link.png"

function Feature(){
    return(
        <>
            <section id="feature" className="bg-[url(./assets/feat-bg.jpg)] bg-center bg-cover w-full min-h-screen flex flex-col justify-center">
                <h3 className="font-sans mx-2.5 md:mx-0 font-bold text-transparent text-3xl md:text-5xl bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)] text-center">Powerful Features to Boost Your Business</h3>
                <h4 className="text-lg md:text-xl font-sans py-5 text-gray-700 text-center">Discover how our all-in-one platform simplifies your daily operations and helps you grow.</h4>
                <div className="grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4 place-items-center cursor-default">
                    <div className="md:w-[350px] w-full transition-all duration-300 ease-in-out bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={A} alt="CRM" />
                            <h6 className="text-lg font-bold text-gray-700">Client Management</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Easily track leads, clients, and sales pipelines with our built-in CRM system.</p>
                        </div>
                    </div>
                    <div className="md:w-[350px] w-full bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={B} alt="workflow" />
                            <h6 className="text-lg font-bold text-gray-700">Automation & Workflows</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Automate repetitive tasks and integrate your favorite apps with just a few clicks.</p>
                        </div>
                    </div>
                    <div className="md:w-[350px] w-full bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={C} alt="appointment" />
                            <h6 className="text-lg font-bold text-gray-700">Appointment Scheduling</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Let clients book appointments online with automatic reminders and confirmations.</p>
                        </div>
                    </div>
                    <div className="md:w-[350px] w-full bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={D} alt="invoices" />
                            <h6 className="text-lg font-bold text-gray-700">Invoicing & Payments</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Create professional invoices and get paid faster with built-in payment processing.</p>
                        </div>
                    </div>
                    <div className="md:w-[350px] w-full bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={E} alt="analytics" />
                            <h6 className="text-lg font-bold text-gray-700">Business Analytics</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Monitor key metrics and get actionable insights from your real-time dashboard.</p>
                        </div>
                    </div>
                    <div className="md:w-[350px] w-full bg-[#e0e0e0] h-36 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-xl flex flex-col hover:text-black hover:bg-[linear-gradient(to_right,_#12c2e9,_#c471ed,_#f64f59)]">
                        <div className="flex items-center gap-2.5 p-2">
                            <img className="w-14" src={F} alt="link" />
                            <h6 className="text-lg font-bold text-gray-700">Integration Hub</h6>
                        </div>
                        <div className="w-full">
                            <p className="px-2.5 text-gray-700 ">Connect to tools you already use like Gmail, Google Calendar, Slack, Stripe, and more.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature