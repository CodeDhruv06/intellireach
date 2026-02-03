
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar({ loading = false }) {
    const titleRef = useRef(null);
    const drawerRef = useRef(null);
    const navbarRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading === true) return; // wait until content is shown
        const el = titleRef.current;
        if (!el) return;
        const a = window.innerWidth;
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        // Scope animations to this element and clean up on unmount
        const ctx = gsap.context(() => {
            // Center relative to the viewport so Y movement is visible
            gsap.set(el, {
                position: 'absolute',
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
                scale: 3,
            });

            gsap.to(el, {
                delay: 1.5,
                duration: 1,
                ease: 'power3.inOut',
                top: 30,
                left: a * 0.065,
                xPercent: 0,
                yPercent: 0,
                scale: 1.2,
            });
        }, el);

        return () => ctx.revert();
    }, [loading]);
    useEffect(() => {
        if (loading) return;
        const navbar = navbarRef.current;
        if (!navbar) return;
        gsap.fromTo(navbar, {
            y: -100,
            opacity: 0,
        }, {
            delay: 2.5,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
        });
    }, [loading]);
    useEffect(() => {
        const el = drawerRef.current;
        if (!el) return;

        if (menuOpen) {
            gsap.to(el, {
                x: 0,
                duration: 0.6,
                ease: "power3.out",
            });
        } else {
            gsap.to(el, {
                x: "100%",
                duration: 0.6,
                ease: "power3.in",
            });
        }
    }, [menuOpen]);

    return (
        <>
            <div className='flex items-center justify-between px-4 py-3 md:py-4'>
                <div
                    onClick={() => { navigate('/') }}
                    ref={titleRef}
                    className="cursor-pointer fixed top-1/2 left-1/2 z-50 flex text-white font-bold text-3xl select-none md:static md:top-auto md:left-auto "
                >
                    <div> Intelli</div>
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent "> Reach</div>
                </div>
                <nav ref={navbarRef} className='hidden md:flex items-center mt-3 gap-9 z-30 text-white/80 text-lg flex-1 justify-center'>
                    <span className='pl-56'></span>
                    <span className='hover:rotate-6 hover:text-cyan-400 cursor-pointer transition' onClick={() => { navigate('/') }}>Home</span>
                    <span className='hover:rotate-6 hover:text-cyan-400 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/about') }}>About</span>
                    <span className='hover:rotate-6 hover:text-cyan-400 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/services') }}>Services</span>
                    <span className='hover:rotate-6 hover:text-cyan-400 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/blogs') }}>Blogs</span>
                    <span className='hover:rotate-6 hover:text-cyan-400 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/contact') }}>Contact</span>
                </nav>
                <div className='hidden md:block text-md mt-3 pr-4 z-40'>
                    <button className='hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] px-6 py-2 rounded-full text-white border border-b-4 drop-shadow-[0_0_4px_rgba(0,255,255,0.7)] border-cyan-500 hover:bg-white/5 transition'>Get In Touch</button>
                </div>
                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden fixed top-8 right-5 z-40 text-white"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" >
                        <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
                        <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
                        <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" />
                    </svg>
                </button>
            </div >

            {/* ---------------- BACKDROP ---------------- */}
            {
                menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 z-30 md:hidden"
                    />
                )
            }

            {/* ---------------- MOBILE DRAWER ---------------- */}
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-screen w-[50vw] bg-black z-40
                   translate-x-full md:hidden flex flex-col gap-8 p-10 text-white text-2xl"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="self-end text-sm opacity-70"
                >
                    Close ✕
                </button>

                <span className='text-center'>Home</span>
                <span className='text-center'>About</span>
                <span className='text-center'>Services</span>
                <span className='text-center'>Blogs</span>
                <span className='text-center'>Contact</span>
            </div>
        </>
    );
}