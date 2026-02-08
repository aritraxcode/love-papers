import { useEffect, useState } from 'react';
import { IconArrowUp } from '@tabler/icons-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-love-red text-paper rounded-full shadow-lg hover:bg-love-red/90 transition-all hover:scale-110 animate-fade-in lg:hidden"
            aria-label="Back to top"
        >
            <IconArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
};

export default BackToTop;
