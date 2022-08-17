import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            const position = window.scrollY;
            console.log("position:" + position);
            setScrollPosition(position);
        };

        window.addEventListener('scroll', updatePosition, { passive: true });

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);

        }, []);

        return scrollPosition;
    };