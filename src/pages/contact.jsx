export function Contact() {
    return (
        <>
            <section>
                <div className="bg-black min-h-screen w-full">
                    <div className="flex w-full justify-center gap-4 items-center pt-16 text-white text-5xl md:text-7xl font-semibold">
                        <span>Contact</span>
                        <span className="font-manrope font-bold">Us</span>
                    </div>
                    <div className="flex mt-2 justify-center items-center">
                        <svg width="70%" height="9" viewBox="0 0 430 7">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="39%" x2="100%" y2="55%">
                                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                                    <stop offset="30%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="white" stopOpacity="1" />
                                    <stop offset="70%" stopColor="white" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <rect x="0" y="6" width="430" height="4" rx="2" fill="url(#lineGradient)" />
                        </svg>
                    </div>
                    <div className="relative flex justify-center">
                        <div className=" absolute w-[40vw] h-32 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35),rgba(255,255,255,0.12),transparent)] blur-2xl" />
                        <div className="relative text-white text-xl font-medium">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}