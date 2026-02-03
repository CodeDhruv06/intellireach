import LoadingScreen from "../components/loading_screen"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import gsap from "gsap";
import { Navbar } from "../components/navbar.jsx";
export default function Home() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const revealOverlayRef = useRef(null);
    useEffect(() => {
        if (loading) return;
        const overlay = revealOverlayRef.current;
        if (!overlay) return;

        gsap.set(overlay, {
            opacity: 1,
            clipPath: "circle(150% at 50% 50%)",
        });

        gsap.to(overlay, {
            delay: 1.5,
            duration: 1.1,
            ease: "power3.inOut",
            clipPath: "circle(0% at 12% 10%)",
            opacity: 0,
            onComplete: () => {
                gsap.set(overlay, { display: "none" });
            },
        });
    }, [loading]);

    if (loading) {
        return (
            <LoadingScreen onComplete={() => setLoading(false)} />
        );
    }

    return (
        <>
            <section>
                <div className="relative min-h-screen overflow-hidden bg-black">
                    {/* Navbar Title */}
                    <Navbar loading={loading} />
                    <div
                        ref={revealOverlayRef}
                        className="fixed inset-0 z-40 bg-black pointer-events-none"
                    />
                    <img
                        src="main.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover opacity-35 z-0"
                    />
                    {/* gradient overlay */}
                    {/* <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/20 via-transparent to-black pointer-events-none" /> */}
                    <div className="p-6 relative font-manrope font-bold mt-16 tracking-tight text-7xl flex w-full bg-gradient-to-r from-white via-white via-gray-200 to-gray-400 bg-clip-text text-transparent justify-center z-30">
                        <div className="">Transform Your Digital Presence</div>
                    </div>
                    <p className="p-6 font-inter relative mt-2 md:mx-16 text-2xl text-white text-center leading-snug z-30">
                        We build high-impact digital solutions with modern web development, smart SEO, powerful
                        <br/>
                         content, and visually striking design that delivers measurable growth.
                    </p>
                    <div className="flex gap-8 justify-center items-center">
                    <button className="hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] flex rounded-[35px] z-30 relative font-inter p-4 pl-5 mt-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black transition-transform duration-200 font-bold rounded-lg hover:bg-blue-700 transition hover:scale-110 ">Get Started   <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
                    <button className="hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] z-30 flex bg-[#020e14] rounded-[32px] text-cyan-500 font-bold border border-cyan-500 transition-transform duration-200 hover:scale-110 mt-4 p-4 pl-5">Learn More<svg className='pl-1'xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
                    </div>


                </div>
            </section>
            <section>
                <div className="w-full min-h-screen">hello</div>

            </section>
        </>
    )
}