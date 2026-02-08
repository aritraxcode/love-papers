import NewspaperPreview from "@/components/NewspaperPreview";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useCallback, useRef, useState } from "react";
import LoveInputForm from "@/components/LoveInputForm";
import { toPng } from "html-to-image";

function IndexContext() {
  // -------------STATE-------------
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const previewRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = useCallback(async () => {
    if (!previewRef.current) {
      console.error("Preview element not found");
      alert("Error: Preview element not found. Please reload the page.");
      return;
    }
    setIsDownloading(true);

    try {
      const element = previewRef.current;

      // Save original styles
      const originalWidth = element.style.width;
      const originalMaxWidth = element.style.maxWidth;
      const originalHeight = element.style.height;
      const originalMinHeight = element.style.minHeight;
      const originalMargin = element.style.margin;
      const originalPadding = element.style.padding;
      const originalTransform = element.style.transform;

      // Force desktop styles on the LIVE element temporarily
      // This ensures 100% accurate rendering context (fonts, bg, etc.)
      element.style.width = "794px";
      element.style.maxWidth = "none";
      element.style.height = "auto";
      element.style.minHeight = "1123px";
      element.style.margin = "0";
      element.style.padding = "0"; // Removed padding to eliminate border
      element.style.transform = "scale(1)";

      // Small delay to let layout settle
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(element, {
        cacheBust: true, // Ensure fresh capture
        width: 768, // Base width at 3x = 2304px
        height: 761, // Base height at 3x = 2283px
        pixelRatio: 3, // Higher resolution (3x) for superior quality
        // PNG is lossless - no quality parameter needed
      });

      // Restore original styles
      element.style.width = originalWidth;
      element.style.maxWidth = originalMaxWidth;
      element.style.height = originalHeight;
      element.style.minHeight = originalMinHeight;
      element.style.margin = originalMargin;
      element.style.padding = originalPadding;
      element.style.transform = originalTransform;

      // Trigger download via invisible anchor element
      const link = document.createElement("a");
      link.download = `love-letter-${partnerName || "valentine"}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again. Error: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsDownloading(false);
    }
  }, [partnerName]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="text-center py-8 sm:p-12 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="inline-block text-ornament text-2xl scale-x-[-1]">
            ❧
          </span>
          <span className="text-love-red text-4xl">♥</span>
          <span className="text-ornament text-2xl">❧</span>
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-headline uppercase tracking-tight">
          Love Papers
        </h1>
        <p className="font-decorative text-ink-faded italic text-xl mt-4">
          Create vintage love letters for your Valentine
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px bg-ornament w-16" />
          <span className="text-love-red">♥ ♥ ♥</span>
          <div className="h-px bg-ornament w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Input Form */}
          <div
            className="order-2 lg:order-1 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <ThemeSwitcher />
            <LoveInputForm
              yourName={yourName}
              setYourName={setYourName}
              partnerName={partnerName}
              setPartnerName={setPartnerName}
              date={date}
              setDate={setDate}
              message={message}
              setMessage={setMessage}
              image={image}
              setImage={setImage}
              onDownload={handleDownload}
              isDownloading={isDownloading}
            />
          </div>

          <div
            className="order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="sticky top-4">
              <p className="font-headline text-center text-sm uppercase tracking-widest text-ink-faded mb-4">
                Live Preview
              </p>
              <div ref={previewRef} className="w-full">
                <NewspaperPreview
                  yourName={yourName}
                  partnerName={partnerName}
                  date={date}
                  message={message}
                  image={image}
                  forceDesktop={isDownloading}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-ornament">
        <p className="font-decorative text-ink-faded  tracking-wider">
          Designed & developed with <span className="text-love-red">♥</span> by
          Aritra Samanta <br /> GitHub:{" "}
          <a
            href="https://github.com/aritraxcode"
            target="_blank"
            className="text-love-red"
          >
            aritraxcode
          </a>
        </p>
      </footer>
    </div>
  );
}

const Index = () => (
  <ThemeProvider>
    <IndexContext />
  </ThemeProvider>
);

export default Index;
