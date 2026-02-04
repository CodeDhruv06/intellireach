
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Module-level variable - persists across re-renders/navigation but resets on page refresh
let hasAnimatedOnce = false;

export function Navbar({ loading = false }) {
    const titleRef = useRef(null);
    const drawerRef = useRef(null);
    const navbarRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // logo Animation - runs only once
    useEffect(() => {
        if (loading === true) return; // wait until content is shown
        const el = titleRef.current;
        if (!el) return;
        
        // Skip animation if already animated
        if (hasAnimatedOnce) {
            gsap.set(el, {
                position: 'relative',
                top: 'auto',
                left: 'auto',
                xPercent: 0,
                yPercent: 0,
                scale: 1.2,
            });
            return;
        }
        
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
                onComplete: () => {
                    hasAnimatedOnce = true;
                }
            });
        }, el);

        return () => ctx.revert();
    }, [loading]);


    //navbar items animation - runs only once
    useEffect(() => {
        if (loading) return;
        const navbar = navbarRef.current;
        if (!navbar) return;
        const navItems = navbar.querySelectorAll('span');
        
        // Skip animation if already animated
        if (hasAnimatedOnce) {
            gsap.set(navItems, { y: 0, opacity: 1 });
            return;
        }
        
        gsap.fromTo(navItems, {
            y: -50,
            opacity: 0,
        }, {
            delay: 1.8,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            overwrite: "auto",
            clearProps: "transform",
            onComplete: () => {
                gsap.set(navItems, { clearProps: "all" });
            }
        });
    }, [loading]);

    // Mobile Drawer Animation
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
            <div className='bg-gradient-to-b from-gray-300 via-gray-300/70 to-white flex items-center justify-between px-4 py-3 md:py-4 '>
                <div
                    onClick={() => { navigate('/') }}
                    ref={titleRef}
                    className="cursor-pointer z-50 fixed top-1/2 left-1/2 flex text-gray-800 font-bold text-3xl select-none md:static md:top-auto md:left-auto "
                >
                    <div> Intelli</div>
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent "> Reach</div>
                </div>
                <nav ref={navbarRef} className='hidden md:flex items-center mt-3 gap-9 z-30 text-gray-600 text-lg flex-1 justify-center'>
                    <span className='pl-56'></span>
                    <span className='hover:rotate-6 hover:text-blue-500 cursor-pointer transition' onClick={() => { navigate('/') }}>Home</span>
                    <span className='hover:rotate-6 hover:text-blue-500 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/about') }}>About</span>
                    <span className='hover:rotate-6 hover:text-blue-500 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/services') }}>Services</span>
                    <span className='hover:rotate-6 hover:text-blue-500 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/blogs') }}>Blogs</span>
                    <span className='hover:rotate-6 hover:text-blue-500 cursor-pointer transition hover:scale-110' onClick={() => { navigate('/contact') }}>Contact</span>
                </nav>
                <div className='hidden md:block text-md mt-3 pr-4 z-40'>
                    <button onClick={() => navigate('/contact')} className='hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 border-none shadow-lg hover:shadow-blue-300/50 transition'>Get In Touch</button>
                </div>
                {/* Hamburger (mobile only) */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden fixed backdrop-blur-md top-8 right-5 z-40 text-gray-800"
                >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" >
                        <line x1="3" y1="6" x2="21" y2="6" stroke="#1f2937" strokeWidth="2" />
                        <line x1="3" y1="12" x2="21" y2="12" stroke="#1f2937" strokeWidth="2" />
                        <line x1="3" y1="18" x2="21" y2="18" stroke="#1f2937" strokeWidth="2" />
                    </svg>
                </button>
            </div >

            {/* ---------------- BACKDROP ---------------- */}
            {
                menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-white/60 backdrop-blur-sm z-30 md:hidden"
                    />
                )
            }

            {/* ---------------- MOBILE DRAWER ---------------- */}
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-screen w-[50vw] bg-white/95 backdrop-blur-md shadow-2xl z-40
                   translate-x-full md:hidden flex flex-col gap-8 p-10 text-gray-700 text-2xl"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="self-end text-sm text-gray-500 hover:text-gray-800"
                >
                    Close ✕
                </button>

                <span className='text-center hover:text-blue-500 cursor-pointer transition'>Home</span>
                <span className='text-center'>About</span>
                <span className='text-center'>Services</span>
                <span className='text-center'>Blogs</span>
                <span className='text-center'>Contact</span>
            </div>
        </>
    );
}