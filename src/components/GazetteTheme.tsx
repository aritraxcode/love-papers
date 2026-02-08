import type { NewspaperPreviewProps } from './NewspaperPreview';

const GazetteTheme = ({ yourName, partnerName, date, message, image, forceDesktop }: NewspaperPreviewProps) => {
  const displayDate = date || new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const displayYourName = yourName || 'Your Name';
  const displayPartnerName = partnerName || 'Your Love';
  const displayMessage = message || 'Write your heartfelt message here...';

  return (
    <div
      className={`vintage-paper paper-shadow w-full max-w-2xl mx-auto ${forceDesktop ? 'p-8' : 'p-6 sm:p-8'}`}
      style={{ minHeight: '500px' }}
    >
      {/* Header */}
      <header className={`text-center border-b-2 border-headline ${forceDesktop ? 'pb-4 mb-4' : 'pb-4 mb-4'}`}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-ornament text-xl">☙</span>
          <div className="h-px bg-ornament flex-1 max-w-16" />
          <span className="text-love-red text-2xl">♥</span>
          <div className="h-px bg-ornament flex-1 max-w-16" />
          <span className="text-ornament text-xl">❧</span>
        </div>

        <h1 className={`font-headline font-black text-headline tracking-tight uppercase mb-1 ${forceDesktop ? 'text-6xl' : 'text-4xl sm:text-5xl md:text-6xl'}`}>
          The Love Gazette
        </h1>

        <p className="font-decorative text-ink-faded italic text-sm sm:text-base">
          "A Journal of Romance & True Love"
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 mt-3 text-xs text-ink-faded font-body">
          <div className="flex items-center gap-2">
            <span>Vol. MMXXV</span>
            <span className="text-ornament">✦</span>
            <span>{displayDate}</span>
          </div>
          <span className={`text-ornament ${forceDesktop ? 'inline' : 'hidden sm:inline'}`}>✦</span>
          <span>Special Valentine Edition</span>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-love-red/10 border-y border-love-red/30 py-2 mb-4 text-center">
        <p className={`font-headline uppercase tracking-widest text-love-red font-bold ${forceDesktop ? 'text-sm' : 'text-[10px] sm:text-xs md:text-sm'}`}>
          ⚡ BREAKING NEWS ⚡ Love Story of the Century Unfolds!
        </p>
      </div>

      {/* Headline */}
      <section className="text-center mb-4 sm:mb-6">
        <div className="flourish text-xl sm:text-2xl rotate-180">❦</div>
        <h2 className={`font-headline font-bold text-headline uppercase tracking-wide leading-tight ${forceDesktop ? 'text-4xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}>
          WONDERFUL NEWS: {displayYourName}
          <br />
          <span className="text-love-red">Declares Eternal Love</span>
          <br />
          For {displayPartnerName}
        </h2>
        <div className="flourish text-xl sm:text-2xl">❦</div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="h-px bg-ornament flex-1" />
        <span className="text-love-red text-lg">♥ ♥ ♥</span>
        <div className="h-px bg-ornament flex-1" />
      </div>

      {/* Article Content — 3 columns on desktop */}
      <article className="mb-6">
        <div className={`grid gap-4 ${forceDesktop ? 'grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
          {/* Left: Image + Introduction */}
          <div className={`${forceDesktop ? 'col-span-1' : 'md:col-span-1'}`}>
            {image && (
              <div className="vintage-frame p-2 bg-paper-aged mb-3">
                <img src={image} alt="Beloved" className="w-full sepia-image" />
                <p className="text-center font-decorative text-xs text-ink-faded mt-1 italic">
                  Portrait of My Love
                </p>
              </div>
            )}
            <p className="font-decorative text-sm text-ink-faded leading-relaxed first-letter:text-4xl first-letter:font-headline first-letter:font-bold first-letter:text-love-red first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              With great happiness and a full heart,
              <span className="font-semibold text-ink"> {displayYourName}</span> shares their
              deepest affection for the wonderful
              <span className="font-semibold text-ink"> {displayPartnerName}</span>.
            </p>

            {/* Sidebar Quote */}
            <div className="mt-4 p-3 bg-love-pink/10 border-l-4 border-love-red">
              <p className="font-decorative text-xs italic text-ink-faded">
                "Love is composed of a single soul inhabiting two bodies."
              </p>
              <p className="font-body text-xs text-ink-faded mt-1 text-right">— Aristotle</p>
            </div>
          </div>

          {/* Center + Right: Love Message */}
          <div className={`${forceDesktop ? 'col-span-2 border-l pl-4' : 'md:col-span-2 border-l-0 md:border-l border-ornament md:pl-4'}`}>
            <h3 className="font-headline text-lg font-bold text-headline uppercase mb-2 tracking-wide">
              A Letter From The Heart
            </h3>
            <blockquote className="font-body text-ink leading-relaxed italic border-l-4 border-love-pink pl-4 py-2 bg-paper-aged/50">
              "{displayMessage}"
            </blockquote>
            <p className="text-right font-decorative text-ink-faded mt-2">
              — With All My Love, {displayYourName}
            </p>

            {/* Additional Story Section */}
            <div className="mt-4 pt-4 border-t border-ornament/50">
              <h4 className="font-headline text-sm font-bold text-headline uppercase mb-2 tracking-wide">
                The Love Story Continues...
              </h4>
              <p className="font-body text-sm text-ink leading-relaxed">
                Friends and family have noted the remarkable bond between {displayYourName} and {displayPartnerName}.
                Their connection is truly one for the ages, inspiring all who witness it.
              </p>
            </div>

            {/* Love Facts Box */}
            <div className={`mt-4 grid gap-3 ${forceDesktop ? 'grid-cols-2' : 'grid-cols-2'}`}>
              <div className="text-center p-2 sm:p-3 bg-paper-aged/70 border border-ornament/30">
                <p className={`font-headline text-love-red font-bold ${forceDesktop ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>∞</p>
                <p className={`font-decorative text-ink-faded ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Years of Love Promised</p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-paper-aged/70 border border-ornament/30">
                <p className={`font-headline text-love-red font-bold ${forceDesktop ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>♥</p>
                <p className={`font-decorative text-ink-faded ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Hearts United as One</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Testimonials Section */}
      <div className="border-t-2 border-b-2 border-ornament/50 py-3 sm:py-4 my-4">
        <h3 className={`font-headline text-center font-bold text-headline uppercase tracking-widest mb-3 ${forceDesktop ? 'text-sm' : 'text-xs sm:text-sm'}`}>
          What People Are Saying
        </h3>
        <div className={`grid gap-3 sm:gap-4 ${forceDesktop ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
          <div className="text-center p-2">
            <p className={`font-decorative italic text-ink-faded ${forceDesktop ? 'text-xs' : 'text-xs'}`}>"A match made in heaven!"</p>
            <p className={`font-body text-ink-faded mt-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>— The Stars</p>
          </div>
          <div className="text-center p-2">
            <p className={`font-decorative italic text-ink-faded ${forceDesktop ? 'text-xs' : 'text-xs'}`}>"True love exists after all."</p>
            <p className={`font-body text-ink-faded mt-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>— Destiny</p>
          </div>
          <div className="text-center p-2">
            <p className={`font-decorative italic text-ink-faded ${forceDesktop ? 'text-xs' : 'text-xs'}`}>"An inspiration to us all!"</p>
            <p className={`font-body text-ink-faded mt-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>— Romance Weekly</p>
          </div>
        </div>
      </div>

      {/* Classifieds Section */}
      <div className="mb-6">
        <h3 className="font-headline text-center text-xs font-bold text-headline uppercase tracking-widest mb-2 border-b border-ornament/30 pb-1">
          ♥ Love Classifieds ♥
        </h3>
        <div className={`grid gap-2 ${forceDesktop ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
          <div className="p-2 bg-paper-aged/50 border border-ornament/20">
            <p className="font-decorative text-xs text-ink">
              <span className="font-bold">FOUND:</span> The most amazing person in the world.
              Answers to "{displayPartnerName}". Reward: Eternal Love. Contact: {displayYourName}
            </p>
          </div>
          <div className="p-2 bg-paper-aged/50 border border-ornament/20">
            <p className="font-decorative text-xs text-ink">
              <span className="font-bold">WANTED:</span> More moments together. More laughter.
              More adventures. Apply within at: Forever & Always Corp.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-headline pt-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-headline text-xs uppercase text-ink-faded tracking-widest">Forever Yours</p>
            <p className="font-decorative text-love-red text-lg">♥</p>
          </div>
          <div>
            <p className="font-headline text-xs uppercase text-ink-faded tracking-widest">Est.</p>
            <p className="font-headline text-xl text-headline font-bold">{new Date().getFullYear()}</p>
          </div>
          <div>
            <p className="font-headline text-xs uppercase text-ink-faded tracking-widest">Always & Forever</p>
            <p className="font-decorative text-love-red text-lg">♥</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="font-decorative text-ornament text-sm">
            ☙ Printed with Love on Fine Parchment ❧
          </span>
        </div>
        <div className="text-center mt-2">
          <p className="font-body text-xs text-ink-faded">
            © {new Date().getFullYear()} The Love Gazette • All Rights Reserved • Spread the Love
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GazetteTheme;
