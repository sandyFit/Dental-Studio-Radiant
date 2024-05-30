import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';
import Reviews from './Reviews';
import Faqs from './Faqs';

const Home = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoother scroll
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".section");
        const colors = [ '#cbd5e1', '#6366f1', '#cbd5e1', '#6366f1', '#cbd5e1']; // Colors for about, services, team, reviews, faqs

        sections.forEach((section, index) => {
            if (index === 0) return; // Skip the first section (Hero)
            
            // console.log(`Section ${index}:`, section); // Debugging line

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.to('.container', {
                        backgroundColor: colors[index - 1], // Offset by one to align with sections
                        duration: .5,
                        ease: "power2.inOut",
                    });
                },
                onEnterBack: () => {
                    gsap.to('.container', {
                        backgroundColor: colors[index - 1], // Offset by one to align with sections
                        duration: .5,
                        ease: "power2.inOut",
                    });
                },
            });
        });

        // Create a ScrollTrigger for the Hero section to reset the background color
        ScrollTrigger.create({
            trigger: "#index",
            start: "top top",
            end: "bottom top",
            onEnter: () => {
                gsap.to('.container', {
                    backgroundColor: '#cbd5e1',
                    duration: .5,
                    ease: "power2.inOut",
                });
            },
            onEnterBack: () => {
                gsap.to('.container', {
                    backgroundColor: '#cbd5e1',
                    duration: .5,
                    ease: "power2.inOut",
                });
            },
        });

    }, []);

    return (
        <div className="container" style={{ backgroundColor: '#cbd5e1' }}>
            <section id="index" className="section">
                <Hero />
            </section>
            <section id="about" className="section">
                <About />
            </section>
            <section id="services" className="section">
                <Services />
            </section>
            <section id="team" className="section">
                <Team />
            </section>
            <section id="reviews" className="section">
                <Reviews />
            </section>
            <section id="faq" className="section">
                <Faqs />
            </section>
        </div>
    );
};

export default Home;
