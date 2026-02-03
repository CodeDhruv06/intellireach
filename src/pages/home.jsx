import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridMotion from "../components/GridMotion.jsx";

gsap.registerPlugin(ScrollTrigger);

const items = [
    // Team & Collaboration
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    'Our Mission',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    'Innovation',
    // Office & Workspace
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    'Teamwork',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
    'Excellence',
    // Digital & Tech
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
    'Creativity',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop',
    'Growth',
    // Strategy & Planning
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
    'Vision',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop',
    'Leadership',
    // Development & Code
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop',
    'Technology',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
    'Passion',
    // Meetings & Collaboration
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    'Integrity',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
    'Success',
    // More Team Photos
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop',
    'Community',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
    'Trust',
];

// Module-level variable - persists across navigation but resets on page refresh
let hasRevealedOnce = false;

export default function Home() {
    const navigate = useNavigate();
    const revealOverlayRef = useRef(null);
    const maintitleref = useRef(null);
    const subtitleref = useRef(null);
    const section2title = useRef(null);
    const section2subtitle = useRef(null);
    const section2Ref = useRef(null);

    //reveal animation - runs only once
    useEffect(() => {
        const overlay = revealOverlayRef.current;
        if (!overlay) return;
        
        // Skip animation if already played
        if (hasRevealedOnce) {
            gsap.set(overlay, { display: "none", opacity: 0 });
            return;
        }

        gsap.set(overlay, {
            opacity: 1,
            clipPath: "circle(150% at 50% 50%)",
        });

        gsap.to(overlay, {
            delay: 1.2,
            duration: 1.1,
            ease: "power3.inOut",
            clipPath: "circle(0% at 12% 10%)",
            opacity: 0,
            onComplete: () => {
                gsap.set(overlay, { display: "none" });
                hasRevealedOnce = true;
            },
        });
    }, []);

    //main title animation
    useEffect(() => {
        const el = maintitleref.current;
        if (!el) return;
        gsap.fromTo(el, {
            y: -50,
            opacity: 0,
        }, {
            delay: 1.5,
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out",
            stagger: 0.1,
        })
    }, [])

    //subtitle animation
    useEffect(() => {
        const e = subtitleref.current;
        if (!e) return;
        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            delay: 1.8,
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
        })
    }, [])

    //section2 title animation - triggered on scroll
    useEffect(() => {
        const e = section2title.current;
        const trigger = section2Ref.current;
        if (!e || !trigger) return;
        
        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: trigger,
                start: "top 50%",
                toggleActions: "play none none none",
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        }
    }, [])

    //section2 subtitle animation - triggered on scroll
    useEffect(() => {
        const e = section2subtitle.current;
        const trigger = section2Ref.current;
        if (!e || !trigger) return;
        
        gsap.fromTo(e, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: trigger,
                start: "top 50%",
                toggleActions: "play none none none",
            }
        })
    }, [])

    return (
        <>
            <section>
                <div className="relative min-h-screen overflow-hidden bg-black">
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
                    <div ref={maintitleref} className="p-6 relative font-manrope font-bold mt-16 tracking-tight text-7xl flex w-full bg-gradient-to-r from-white via-white via-gray-200 to-gray-400 bg-clip-text text-transparent justify-center z-30">
                        <div className="" >Transform Your Digital Presence</div>
                    </div>
                    <p ref={subtitleref} className="p-6 font-inter relative mt-2 md:mx-16 text-2xl text-white text-center leading-snug z-30">
                        We build high-impact digital solutions with modern web development, smart SEO, powerful
                        <br />
                        content, and visually striking design that delivers measurable growth.
                    </p>
                    <div className="flex gap-8 justify-center items-center">
                        <button className="hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] flex rounded-[36px] z-30 relative font-inter p-4 pl-5 mt-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black transition-transform duration-200 font-bold hover:bg-blue-700 transition hover:scale-110 ">Get Started   <svg className='pl-2' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></button>
                        <button className="hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] z-30 flex bg-[#020e14] rounded-[32px] text-cyan-500 font-bold border border-cyan-500 transition-transform duration-200 hover:scale-110 mt-4 p-4 pl-5">Learn More<svg className='pl-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg></button>
                    </div>

                    {/* Animated Scroll Indicator */}
                    <div className="flex flex-col items-center justify-center mt-4 z-30 relative">
                        <span className="text-gray-400 text-sm font-inter mb-2 tracking-wider"></span>
                        <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex justify-center p-1">
                            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"
                                style={{
                                    animation: "scrollBounce 1.5s ease-in-out infinite"
                                }}
                            />
                        </div>
                        <svg
                            className="mt-2 text-cyan-400/60 animate-pulse"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </div>

                    <style>{`
                        @keyframes scrollBounce {
                            0%, 100% {
                                transform: translateY(0);
                                opacity: 1;
                            }
                            50% {
                                transform: translateY(12px);
                                opacity: 0.3;
                            }
                        }
                    `}</style>

                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-20"></div>
                </div>

            </section>
            <section ref={section2Ref}>
                <div className="w-full min-h-screen bg-black text-white relative">
                    {/* GridMotion as background */}
                    <div className="absolute inset-0 z-0">
                        <GridMotion items={items} gradientColor="black" />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10 flex min-h-screen pointer-events-none">
                        <div className="mt-20 ml-12 md:mt-28 md:ml-20 pointer-events-auto">
                            <div ref={section2title}>
                                <h2 className="text-5xl font-bold">Design That Speaks.</h2>
                                <h2 className="text-5xl font-bold mb-12">Delivery That Converts.</h2>
                            </div>
                            <div ref={section2subtitle}>
                            <p className="font-inter mt-4 w-[40vw] text-xl mb-2 text-gray-300">Crafting Digital Success Stories Since 2022. Today, we're proud to be a trusted partner for companies worldwide. </p>
                            <p className="font-inter mt-4 w-[48vw] text-xl text-gray-300"> Our team blends technical expertise with creative vision to deliver solutions that not only look stunning but also drive measurable business growth.</p>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => { navigate('/about') }} className="ml-1 mt-12 flex text-black bg-white/80 px-6 py-1 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-white/50">About Us</button>
                                <button onClick={() => { navigate('/services') }} className="text-white mt-12 bg-white/30 px-6 py-1 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-white/10">Our Work</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-black min-h-screen w-full flex flex-col justify-center items-center">
                    <div className="flex w-full justify-center gap-4 items-center pt-16 text-white text-5xl md:text-7xl font-semibold">
                        <span>More</span>
                        <span className="font-manrope font-bold">Coming Soon...</span>
                    </div>
                </div>
            </section>
        </>
    )
}