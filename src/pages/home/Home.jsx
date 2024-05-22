import React, {useState, useEffect} from 'react'
import Hero from './Hero'
import About from './About';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import TransitionAbout from '../transitions/TransitionAbout';
import Services from './Services';
import TransitionTeam from '../transitions/TransitionTeam';

const Home = () => {

    useEffect(() => {
        //LENIS SMOOTH SCROLL
        const lenis = new Lenis({
            duration: 1.2
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        // Integration lenis on GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

    })

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".section");
        console.log("Sections found:", sections.length); // Check how many sections are detected

        sections.forEach((section, i) => {
            console.log("Animating section:", section.id); // Identify which section is being animated

            // Ensure initial visibility for testing
            gsap.set(section.children, { opacity: 1, y: 0 });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                onEnter: () => console.log("Entering:", section.id),
                onLeave: () => console.log("Leaving:", section.id),
            });

            gsap.from(section.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top top",
                    toggleActions: "play none none none",
                    onEnterBack: () => console.log("Entering back:", section.id),
                    onLeaveBack: () => console.log("Leaving back:", section.id),
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    

    return (
        <div>
            <section id='index'>
                <Hero/>
            </section>
            <section id='t1' className='section -z-10'>
                <TransitionAbout/>
            </section>
            <section id='about' className=''>
                <About/>
            </section>
            <section id='services'>
                <Services/>
            </section>
            <section id='t2' className='section'>
                <TransitionTeam/>
            </section>
        </div>
    )
}

export default Home;
