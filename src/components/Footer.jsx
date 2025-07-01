import A from "../assets/footer-rocket.png"

function Footer() {
    return (
        <>
            <footer className="w-full h-auto md:h-[500px] rounded-t-2xl shadow-2xl bg-[linear-gradient(to_bottom,_#c9d6ff,_#e2e2e2)] flex flex-col items-center gap-5">
                <div className="w-[90%] h-[40%] flex items-center justify-between">
                    <div className="w-2/3">
                        <h4 className="font-bold text-4xl md:text-7xl mb-1.5 text-transparent bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)]">techBoost .</h4>
                        <h4 className="font-bold text-xl md:text-3xl mt-1.5 text-transparent bg-clip-text bg-[linear-gradient(to_right,_#ee0979,_#ff6a00)]">One Dashboard, Infinite Possibilities</h4>
                    </div>
                    <div className="w-1/3 flex justify-center">
                        <img className="w-2xs" src={A} alt="dashboard" />
                    </div>
                </div>
                <hr className="w-[95%] border-red-400"/>
                <div className="w-[90%] h-[60%] grid grid-cols-3 md:grid-cols-5 gap-2.5 mx-auto text-gray-600">
                    <div className="cursor-default">
                        <h6 className="text-lg md:text-xl py-2.5 font-medium">Company Info</h6>
                        <p className="hover:text-red-500 p-0.5 font-serif">About TechBoost</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Careers</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Blog</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Affiliate Program</p>
                    </div>
                    <div className="cursor-default">
                        <h6 className="text-lg md:text-xl py-2.5 font-medium">Product / Features</h6>
                        <p className="hover:text-red-500 p-0.5 font-serif">Pricing</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Integrations</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Automation</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Use Cases</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">What's New</p>
                    </div>
                    <div className="cursor-default">
                        <h6 className="text-lg md:text-xl py-2.5 font-medium">Support / Help</h6>
                        <p className="hover:text-red-500 p-0.5 font-serif">Help Center</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Getting Started</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Tutorials</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Community Forum</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">API Docs</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">System Status</p>
                    </div>
                    <div className="cursor-default">
                        <h6 className="text-lg md:text-xl py-2.5 font-medium">Legal</h6>
                        <p className="hover:text-red-500 p-0.5 font-serif">Terms of Service</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Privacy Policy</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Cookie Policy</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">GDPR Compliance</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Security</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Data Processing Agreement</p>
                    </div>
                    <div className="cursor-default">
                        <h6 className="text-lg md:text-xl py-2.5 font-medium">Follow Us</h6>
                        <p className="hover:text-red-500 p-0.5 font-serif">Twitter</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">LinkedIn</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">YouTube</p>
                        <p className="hover:text-red-500 p-0.5 font-serif">Instagram</p>
                        <p className="hover:text-red-500 font-serif p-0.5">Facebook</p>
                        <p className="hover:text-red-500 font-serif p-0.5">Discord</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer