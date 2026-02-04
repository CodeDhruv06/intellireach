export function Contact() {
    return (
        <>
            <section>
                <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen w-full">
                    <div className="flex w-full justify-center gap-4 items-center pt-16 text-gray-800 text-5xl md:text-7xl font-semibold">
                        <span>Contact</span>
                        <span className="font-manrope font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Us</span>
                    </div>
                    <div className="flex mt-2 justify-center items-center">
                        <svg width="70%" height="9" viewBox="0 0 430 7">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="39%" x2="100%" y2="55%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                                    <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <rect x="0" y="6" width="430" height="4" rx="2" fill="url(#lineGradient)" />
                        </svg>
                    </div>
                    <div className="relative flex justify-center">
                        <div className=" absolute w-[40vw] h-32 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),rgba(59,130,246,0.08),transparent)] blur-2xl" />
                        <div className="relative text-gray-600 text-xl font-medium">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}