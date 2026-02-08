import type { NewspaperPreviewProps } from './NewspaperPreview';

const ChronicleTheme = ({ yourName, partnerName, date, message, image, forceDesktop }: NewspaperPreviewProps) => {
  const displayDate = date || new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  const displayYourName = yourName || 'Your Name';
  const displayPartnerName = partnerName || 'Your Love';
  const displayMessage = message || 'Write your heartfelt message here...';

  return (
    <div
      className={`chronicle-paper paper-shadow w-full max-w-2xl mx-auto ${forceDesktop ? '' : ''}`}
      style={forceDesktop ? {} : { minHeight: '500px' }}
    >
      {/* Header */}
      <header className={`text-center px-4 sm:px-6 ${forceDesktop ? 'pt-4 pb-3' : 'pt-4 sm:pt-6 pb-3 sm:pb-4'}`}>
        <p className={`font-decorative text-chronicle-ink/70 tracking-widest mb-2 leading-relaxed ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
          This vintage edition captures the essence of a bygone era, celebrating the spirit and simplicity of 1884
        </p>

        <div className={`flex items-center justify-center mb-2 ${forceDesktop ? 'flex-row gap-4' : 'flex-col md:flex-row gap-1 md:gap-2 lg:gap-4'}`}>
          <h1 className={`font-chronicle font-black text-chronicle-ink tracking-tighter uppercase text-center ${forceDesktop ? 'text-5xl' : 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'}`}>
            The Daily
          </h1>
          <div className={`text-chronicle-ornament my-1 md:my-0 ${forceDesktop ? 'text-3xl' : 'text-2xl md:text-2xl lg:text-3xl'}`}>❦</div>
          <h1 className={`font-chronicle font-black text-chronicle-ink tracking-tighter uppercase text-center ${forceDesktop ? 'text-5xl' : 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'}`}>
            Valentine
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 my-3">
          <div className="h-1 bg-chronicle-ink flex-1" />
          <span className="font-headline text-sm uppercase tracking-[0.3em] text-chronicle-ink px-4 text-center">
            Stories of Affection • True Love
          </span>
          <div className="h-1 bg-chronicle-ink flex-1" />
        </div>

        <div className={`flex flex-col sm:flex-row flex-wrap items-center justify-between text-chronicle-ink/60 font-body border-b-2 border-chronicle-ink pb-2 gap-2 sm:gap-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <span>Vol. CXLII No. 14</span>
            <span className="font-semibold">{displayDate}</span>
          </div>
          <span>Price: A Smile</span>
        </div>
      </header>

      {/* Breaking Bulletin */}
      <div className="mx-4 sm:mx-6 mb-4 border-2 border-chronicle-ink/30 bg-chronicle-paper/50 p-2 text-center">
        <p className={`font-chronicle uppercase tracking-widest font-bold text-chronicle-ink ${forceDesktop ? 'text-sm' : 'text-[10px] sm:text-xs md:text-sm'}`}>
          ★ SPECIAL EDITION ★ Romance Declared ★ Hearts United ★
        </p>
      </div>

      {/* Three-column content */}
      <div className={`grid gap-0 px-3 sm:px-4 pb-4 sm:pb-6 ${forceDesktop ? 'grid-cols-3' : 'grid-cols-1 md:grid-cols-3'}`}>
        {/* Left: Portrait + Name */}
        <div className={`${forceDesktop ? 'border-r-2 pr-3' : 'md:border-r-2 border-chronicle-ink/30 md:pr-3'} py-3`}>
          {image && (
            <div className="mb-3">
              <img src={image} alt="Portrait" className="w-full vintage-portrait mx-auto" />
              <p className="text-center font-decorative text-xs text-chronicle-ink/70 mt-1 italic">
                Portrait of the Beloved
              </p>
            </div>
          )}
          <h2 className="font-chronicle text-xl font-black text-chronicle-ink uppercase text-center leading-tight mb-2">
            {displayPartnerName}
          </h2>
          <p className="font-decorative text-xs text-chronicle-ink/70 text-center italic mb-3">
            The One Who Holds My Heart: {displayYourName}'s Beloved
          </p>
          <p className="font-body text-xs text-chronicle-ink leading-relaxed text-justify first-letter:text-3xl first-letter:font-chronicle first-letter:font-bold first-letter:float-left first-letter:mr-1 first-letter:mt-0.5">
            By {displayYourName} – Today we celebrate a love that shines brighter than the stars.
            There is no one else in the world quite like {displayPartnerName}.
          </p>

          {/* Weather Box */}
          <div className="mt-4 border border-chronicle-ink/30 p-2 text-center">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink/60 mb-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Love Forecast</p>
            <p className={`font-decorative text-chronicle-ink ${forceDesktop ? 'text-xl' : 'text-lg sm:text-xl'}`}>☀</p>
            <p className={`font-body text-chronicle-ink/70 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Sunny with a 100% chance of happiness</p>
          </div>
        </div>

        {/* Center: The Declaration */}
        <div className={`${forceDesktop ? 'border-r-2 px-3' : 'md:border-r-2 border-chronicle-ink/30 md:px-3'} py-3`}>
          {!image && (
            <div className="vintage-frame bg-chronicle-paper/50 p-4 mb-3 text-center">
              <div className="text-chronicle-ornament text-4xl mb-2">♥</div>
              <p className="font-decorative text-xs text-chronicle-ink/50 italic">
                Add a photo to appear here
              </p>
            </div>
          )}
          <h3 className="font-chronicle text-lg font-black text-chronicle-ink uppercase text-center mb-2">
            A Truly Special Bond
          </h3>
          <div className="h-0.5 bg-chronicle-ink/30 mb-3" />
          <h4 className="font-headline text-sm font-bold text-chronicle-ink uppercase text-center tracking-wide mb-2">
            Written With Love
          </h4>
          <blockquote className="font-body text-xs text-chronicle-ink leading-relaxed text-justify italic">
            "{displayMessage}"
          </blockquote>

          {/* Quote of the Day */}
          <div className="mt-4 border-t border-b border-chronicle-ink/30 py-3">
            <p className="font-chronicle text-xs uppercase tracking-widest text-chronicle-ink/60 text-center mb-2">Quote of the Day</p>
            <p className="font-decorative text-xs italic text-chronicle-ink text-center">
              "In all the world, there is no heart for me like yours."
            </p>
            <p className="font-body text-xs text-chronicle-ink/60 text-center mt-1">— Maya Angelou</p>
          </div>

          {/* Love Meter */}
          <div className="mt-3 text-center">
            <p className="font-chronicle text-xs uppercase tracking-widest text-chronicle-ink/60 mb-1">Love Meter</p>
            <div className="flex justify-center gap-1">
              <span className="text-love-red">♥</span>
              <span className="text-love-red">♥</span>
              <span className="text-love-red">♥</span>
              <span className="text-love-red">♥</span>
              <span className="text-love-red">♥</span>
            </div>
            <p className="font-decorative text-xs text-chronicle-ink/70 italic mt-1">Off the Charts!</p>
          </div>
        </div>

        {/* Right: Story continuation */}
        <div className={`${forceDesktop ? 'pl-3' : 'md:pl-3'} py-3`}>
          <h2 className="font-chronicle text-xl font-black text-chronicle-ink uppercase text-center leading-tight mb-2">
            A Beautiful Story
          </h2>
          <p className="font-decorative text-xs text-chronicle-ink/70 text-center italic mb-3">
            Together: {displayYourName} & {displayPartnerName}
          </p>
          <p className="font-body text-xs text-chronicle-ink leading-relaxed text-justify mb-3">
            <span className="italic">{displayDate}</span> –
            Everyone who knows them can see the happiness they bring to each other.
            It is a joy to witness such a wonderful connection.
          </p>

          {/* Romance Facts */}
          <div className="border border-chronicle-ink/30 p-2 mb-3">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink/60 text-center mb-2 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Romance Facts</p>
            <ul className={`font-decorative text-chronicle-ink space-y-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
              <li>✦ Eyes meet: Sparks fly</li>
              <li>✦ Hearts beat: In perfect sync</li>
              <li>✦ Future: Unbelievably bright</li>
            </ul>
          </div>

          {/* Vintage Ad Box */}
          <div className="border-2 border-chronicle-ink p-2 text-center bg-chronicle-paper/50">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink mb-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Advertisement</p>
            <p className={`font-headline font-bold text-chronicle-ink ${forceDesktop ? 'text-sm' : 'text-xs sm:text-sm'}`}>TIMELESS LOVE</p>
            <p className={`font-decorative italic text-chronicle-ink/70 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
              "Connecting hearts across all time and space"
            </p>
            <p className={`font-body text-chronicle-ink/60 mt-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>♥ Proven since the dawn of time ♥</p>
          </div>

          <div className="text-center py-3 border-t border-b border-chronicle-ink/30 mt-3">
            <p className="font-chronicle text-xs uppercase tracking-widest text-chronicle-ink/60">
              Forever & Always
            </p>
            <p className="font-headline text-2xl font-bold text-chronicle-ink mt-1">
              Est. {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Announcements */}
      <div className="mx-4 sm:mx-6 mb-4 border-t-2 border-chronicle-ink pt-3">
        <div className={`grid gap-3 sm:gap-4 ${forceDesktop ? 'grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
          <div className="text-center p-2">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink/60 mb-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Society Notes</p>
            <p className={`font-decorative text-chronicle-ink ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
              {displayYourName} & {displayPartnerName} spotted looking adorable at local café
            </p>
          </div>
          <div className="text-center p-2">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink/60 mb-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Public Notice</p>
            <p className={`font-decorative text-chronicle-ink ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
              It is hereby declared that love is in the air
            </p>
          </div>
          <div className="text-center p-2">
            <p className={`font-chronicle uppercase tracking-widest text-chronicle-ink/60 mb-1 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>Weather</p>
            <p className={`font-decorative text-chronicle-ink ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
              Warm hearts expected throughout the region
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-chronicle-ink px-4 sm:px-6 py-3 text-center">
        <span className={`font-decorative text-chronicle-ink/60 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
          ❧ Printed with Love on the Finest Parchment ❧
        </span>
        <p className="font-body text-xs text-chronicle-ink/50 mt-1">
          © {new Date().getFullYear()} The Daily Valentine • All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default ChronicleTheme;
