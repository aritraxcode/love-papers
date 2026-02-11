import type { NewspaperPreviewProps } from './NewspaperPreview';

const SimpleLoveTheme = ({ yourName, partnerName, date, message, image, forceDesktop }: NewspaperPreviewProps) => {
    const displayDate = date || new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const displayYourName = yourName || 'Your Name';
    const displayPartnerName = partnerName || 'Your Love';
    const displayMessage = message || 'Write your heartfelt message here...';

    // --- Doodles & Decorations ---

    const HandDrawnHeart = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 88.5C50 88.5 15 65 15 35C15 18.5 28.5 10 40 10C46 10 50 15 50 15C50 15 54 10 60 10C71.5 10 85 18.5 85 35C85 65 50 88.5 50 88.5Z" className="animate-[draw_1s_ease-out_forwards]" />
            <path d="M50 88.5C50 88.5 18 68 18 38C18 21.5 31.5 13 43 13C49 13 53 18 53 18" strokeOpacity="0.3" strokeWidth="1.5" />
        </svg>
    );

    const SwirlDivider = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 200 20" className={`w-full h-auto overflow-visible ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M10 10 C 30 0, 50 20, 70 10 S 110 20, 130 10 S 170 20, 190 10" />
            <path d="M15 12 C 35 2, 55 22, 75 12 S 115 22, 135 12 S 175 22, 195 12" strokeOpacity="0.4" />
        </svg>
    );

    const CornerVine = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`w-16 h-16 sm:w-20 sm:h-20 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M20 100 Q 20 20 100 20" />
            <path d="M20 80 Q 20 40 60 20" />
            <path d="M30 90 Q 30 50 70 30" />
            {/* Leaves */}
            <path d="M20 60 Q 10 50 20 40 Q 30 50 20 60" fill="currentColor" fillOpacity="0.1" />
            <path d="M40 20 Q 50 10 60 20 Q 50 30 40 20" fill="currentColor" fillOpacity="0.1" />
        </svg>
    );

    const ArrowDoodle = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 100 30" className={`w-24 h-8 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 15 Q 50 5 90 15" />
            <path d="M80 5 L 90 15 L 80 25" />
        </svg>
    );

    const Sparkle = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 20 20" className={`w-4 h-4 ${className}`} fill="currentColor">
            <path d="M10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" />
        </svg>
    );

    const TinyHeart = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={`w-4 h-4 ${className}`} fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    );

    const SwirlDecoration = ({ className }: { className?: string }) => (
        <svg viewBox="0 0 50 50" className={`w-12 h-12 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M10 40 Q 5 10 25 10 T 40 40" />
        </svg>
    );

    return (
        <div
            className={`relative bg-[#fffdf7] text-ink w-full max-w-2xl mx-auto overflow-hidden ${forceDesktop ? 'p-8' : 'p-4 sm:p-8 md:p-12'}`}
            style={{
                minHeight: forceDesktop ? 'auto' : '650px',
                fontFamily: '"Lora", serif' // Base font
            }}
        >
            {/* --- Background Textures --- */}
            {/* Subtle paper grain */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`
                }}
            />
            {/* Dotted Grid (Subtle) */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* --- Corner Decorations --- */}
            <div className="absolute top-0 left-0 text-love-red/20 opacity-80 p-2">
                <CornerVine />
            </div>
            <div className="absolute top-0 right-0 text-love-red/20 opacity-80 transform scale-x-[-1] p-2">
                <CornerVine />
            </div>
            <div className="absolute bottom-0 left-0 text-love-red/20 opacity-80 transform scale-y-[-1] p-2">
                <CornerVine />
            </div>
            <div className="absolute bottom-0 right-0 text-love-red/20 opacity-80 transform scale-[-1] p-2">
                <CornerVine />
            </div>

            <div className="relative z-10 flex flex-col items-center">

                {/* --- Header --- */}
                <header className="text-center mb-6 sm:mb-8 w-full">
                    <div className="flex justify-center items-end gap-2 mb-3 text-love-red/80">
                        <Sparkle className="mb-1 opacity-70 animate-pulse" />
                        <span className={`font-['Dancing_Script'] tracking-wide ${forceDesktop ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>A Love Story</span>
                        <Sparkle className="mb-1 opacity-70 animate-pulse delay-75" />
                    </div>

                    <div className="relative inline-block">
                        <h1
                            className={`font-headline font-bold text-headline tracking-tight leading-none 
                 ${forceDesktop ? 'text-6xl md:text-7xl' : 'text-5xl sm:text-6xl md:text-7xl'}`}
                        >
                            The Two of Us
                        </h1>
                        <span className={`absolute -right-6 -top-4 text-love-red transform rotate-12 opacity-80 ${forceDesktop ? 'block' : 'hidden sm:block'}`}>
                            <HandDrawnHeart className={`w-8 h-8 ${forceDesktop ? 'w-10 h-10' : 'sm:w-10 sm:h-10'}`} />
                        </span>
                    </div>

                    <div className={`mt-3 flex flex-wrap items-center justify-center gap-3 text-ink-faded font-body italic
             ${forceDesktop ? 'text-sm' : 'text-xs sm:text-sm'}`}
                    >
                        <span className="border-b border-love-red/20 pb-0.5">{displayDate}</span>
                        <span className="text-love-red/40">•</span>
                        <span className="border-b border-love-red/20 pb-0.5">Written in the Stars</span>
                    </div>

                    <SwirlDivider className="text-love-red/20 mt-5 w-3/4 max-w-sm mx-auto" />
                </header>

                {/* --- Main Content --- */}
                <main className={`w-full ${forceDesktop ? 'space-y-8' : 'space-y-6 sm:space-y-8'}`}>

                    {/* Couple Names - Handwriting Style */}
                    <section className="text-center px-4">
                        <h2
                            className={`font-headline italic text-ink mb-2 leading-relaxed transform -rotate-1 
                 ${forceDesktop ? 'text-5xl' : 'text-3xl sm:text-4xl md:text-5xl'}`}
                        >
                            <span className={forceDesktop ? 'inline' : 'block sm:inline'}>{displayYourName}</span>
                            <span className={`text-love-red/60 mx-2 font-sans not-italic ${forceDesktop ? 'text-2xl mx-4' : 'text-xl sm:text-2xl sm:mx-4'}`}>&</span>
                            <span className={forceDesktop ? 'inline' : 'block sm:inline'}>{displayPartnerName}</span>
                        </h2>
                    </section>

                    {/* Photo Section - Polaroid Style */}
                    <section className="relative mx-auto w-full max-w-sm sm:max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out group">
                        <div className={`bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100 rounded-sm ${forceDesktop ? 'p-4 pb-16' : 'p-3 sm:p-4 pb-12 sm:pb-16'}`}>
                            {image ? (
                                <div className={`relative overflow-hidden w-full bg-gray-100 ${forceDesktop ? 'h-72' : 'h-64 sm:h-72'}`}>
                                    <img src={image} alt="Us" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none"></div>
                                </div>
                            ) : (
                                <div className={`w-full bg-gray-50 flex flex-col items-center justify-center text-ink-faded/40 border-2 border-dashed border-gray-200 ${forceDesktop ? 'h-72' : 'h-64 sm:h-72'}`}>
                                    <HandDrawnHeart className="w-16 h-16 mb-2 opacity-50" />
                                    <span className="text-sm font-['Dancing_Script'] text-xl">Add a photo here</span>
                                </div>
                            )}

                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <p className={`text-ink/70 ${forceDesktop ? 'text-xl' : 'text-lg sm:text-xl'}`}>
                                    Captured with Love
                                </p>
                            </div>
                        </div>

                        {/* Tape effect */}
                        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#ffffff]/60 rotate-[-2deg] pointer-events-none backdrop-blur-[1px] shadow-sm border border-white/40 ${forceDesktop ? 'w-32 h-8' : 'w-24 sm:w-32 h-6 sm:h-8'}`}></div>

                        {/* Extra Doodles around Image */}
                        <div className={`absolute text-love-red/30 transform rotate-12 ${forceDesktop ? '-right-8 -top-8' : '-right-6 -top-6 sm:-right-8 sm:-top-8'}`}>
                            <SwirlDecoration className={` ${forceDesktop ? 'w-16 h-16' : 'w-12 h-12 sm:w-16 sm:h-16'}`} />
                        </div>
                        <div className={`absolute text-love-red/20 transform -rotate-12 ${forceDesktop ? '-left-6 bottom-12' : '-left-4 bottom-8 sm:-left-6 sm:bottom-12'}`}>
                            <TinyHeart className={`animate-pulse ${forceDesktop ? 'w-6 h-6' : 'w-4 h-4 sm:w-6 sm:h-6'}`} />
                        </div>
                        <div className={`absolute text-love-red/20 transform rotate-45 ${forceDesktop ? '-right-4 bottom-2' : '-right-2 bottom-2 sm:-right-4 sm:bottom-2'}`}>
                            <TinyHeart className={`${forceDesktop ? 'w-4 h-4' : 'w-3 h-3 sm:w-4 sm:h-4'}`} />
                        </div>
                        <div className={`absolute text-love-red/20 transform -rotate-45 ${forceDesktop ? 'left-[-20px] top-[-10px]' : 'left-[-10px] top-[-5px] sm:left-[-20px] sm:top-[-10px]'}`}>
                            <Sparkle className={`animate-pulse delay-75 ${forceDesktop ? 'w-6 h-6' : 'w-4 h-4 sm:w-6 sm:h-6'}`} />
                        </div>
                    </section>

                    {/* Message Section */}
                    <section className={`max-w-xl mx-auto text-center relative ${forceDesktop ? 'px-8' : 'px-4 sm:px-8'}`}>
                        <div className={`hidden sm:block absolute top-0 left-0 -ml-4 transform -rotate-12 text-love-red/10 ${forceDesktop ? 'block' : 'hidden sm:block'}`}>
                            <ArrowDoodle className="w-16" />
                        </div>

                        <blockquote
                            className={`font-body text-ink leading-loose italic relative z-10
                ${forceDesktop ? 'text-xl' : 'text-base sm:text-lg md:text-xl'}`}
                        >
                            <span className="text-4xl text-love-red/20 font-serif absolute -top-4 left-0 -translate-x-2">“</span>
                            {displayMessage}
                            <span className="text-4xl text-love-red/20 font-serif absolute -bottom-8 right-0 translate-x-2">”</span>
                        </blockquote>
                    </section>
                </main>

                {/* --- Footer --- */}
                <footer className={`text-center w-full border-t border-love-red/10 bg-gradient-to-b from-transparent to-love-red/5 ${forceDesktop ? 'mt-14 pt-8' : 'mt-10 sm:mt-14 pt-6 sm:pt-8'}`}>

                    <div className={`grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6 ${forceDesktop ? 'text-sm' : 'text-xs sm:text-sm'}`}>
                        <div className="text-center p-2 rounded-lg bg-white/40 border border-love-red/5 shadow-sm">
                            <p className="font-['Dancing_Script'] text-xl text-love-red mb-1">Infinite</p>
                            <p className="text-[10px] uppercase tracking-widest text-ink-faded font-semibold">Love Meter</p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/40 border border-love-red/5 shadow-sm">
                            <p className="font-['Dancing_Script'] text-xl text-love-red mb-1">100%</p>
                            <p className="text-[10px] uppercase tracking-widest text-ink-faded font-semibold">Happiness</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 mb-2">
                        <HandDrawnHeart className="w-4 h-4 text-love-red animate-pulse" />
                        <p className="font-decorative text-xs text-ink-faded tracking-widest uppercase">
                            Est. {new Date().getFullYear()}
                        </p>
                        <HandDrawnHeart className="w-4 h-4 text-love-red animate-pulse delay-100" />
                    </div>

                    <p className={`font-decorative text-ink-faded/60 mt-1 ${forceDesktop ? 'text-sm' : 'text-xs sm:text-sm'}`}>
                        Sealed with a kiss
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default SimpleLoveTheme;
