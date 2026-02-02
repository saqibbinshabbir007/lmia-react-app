import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const SmoothScroll = () => {
    useEffect(() => {
        // Initialize Lenis with optimized performance settings
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
            // Prevent jerky behavior on small scrolls
            wheelMultiplier: 1,
            lerp: 0.1, // Using lerp for that "butter" feel
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Global synchronization
        window.lenis = lenis;

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            window.lenis = null;
        };
    }, []);

    return null;
};

export default SmoothScroll;
