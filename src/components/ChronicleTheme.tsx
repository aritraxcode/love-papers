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
      style={{ minHeight: '500px' }}
    >
      {/* Header */}
      <header className={`text-center px-4 sm:px-6 ${forceDesktop ? 'pt-6 pb-4' : 'pt-4 sm:pt-6 pb-3 sm:pb-4'}`}>
        <p className={`font-decorative text-chronicle-ink/70 tracking-widest mb-2 leading-relaxed ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
          This vintage edition captures the essence of a bygone era, celebrating the spirit and simplicity of 1884
        </p>

        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2">
          <h1 className="font-chronicle text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-chronicle-ink tracking-tighter uppercase">
            The Daily
          </h1>
          <div className={`text-chronicle-ornament ${forceDesktop ? 'text-3xl' : 'text-xl sm:text-3xl'}`}>❧</div>
          <h1 className={`font-chronicle font-black text-chronicle-ink tracking-tighter uppercase ${forceDesktop ? 'text-6xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'}`}>
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
          <div className="text-center py-3 border-t border-b border-chronicle-ink/30">
            <p className="font-chronicle text-xs uppercase tracking-widest text-chronicle-ink/60">
              Forever & Always
            </p>
            <p className="font-headline text-2xl font-bold text-chronicle-ink mt-1">
              Est. {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-chronicle-ink px-4 sm:px-6 py-3 text-center">
        <span className={`font-decorative text-chronicle-ink/60 ${forceDesktop ? 'text-xs' : 'text-[10px] sm:text-xs'}`}>
          ❧ Printed with Love on the Finest Parchment ❧
        </span>
      </footer>
    </div>
  );
};

export default ChronicleTheme;
