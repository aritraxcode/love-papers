import { useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

interface ScrollIndicatorProps {
    targetId: string;
    text?: string;
}

const ScrollIndicator = ({ targetId, text = "Scroll down to create your letter" }: ScrollIndicatorProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const rect = targetElement.getBoundingClientRect();
                // Hide indicator when target is in view
                setIsVisible(rect.top > window.innerHeight);
            }
        };

        handleScroll(); // Check initially
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [targetId]);

    const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="lg:hidden flex flex-col items-center justify-center py-4 animate-fade-in">
            <button
                onClick={scrollToTarget}
                className="flex flex-col items-center gap-2 text-love-red hover:text-love-red/80 transition-colors group"
                aria-label={text}
            >
                <p className="font-decorative text-sm text-ink-faded text-center px-4">
                    {text}
                </p>
                <div className="animate-bounce">
                    <IconChevronDown size={32} className="text-love-red" strokeWidth={2.5} />
                </div>
            </button>
        </div>
    );
};

export default ScrollIndicator;
