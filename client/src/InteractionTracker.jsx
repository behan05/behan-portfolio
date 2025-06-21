import { useEffect } from 'react';

const InteractionTracker = () => {
    useEffect(() => {
        const handleClick = (e) => {
            const element = e.target.tagName;
            const page = window.location.pathname;
            const screen = `${window.innerWidth}x${window.innerHeight}`;

            fetch('http://localhost:8000/api/logs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ element, page, screen }),
            }).catch(err => console.error('Click log error:', err.message));
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return null;
};

export default InteractionTracker;
