import NewspaperPreview from "@/components/NewspaperPreview";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useCallback, useRef, useState } from "react";
import LoveInputForm from "@/components/LoveInputForm";
import BackToTop from "@/components/BackToTop";
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

    let container: HTMLDivElement | null = null;

    try {
      // 1. Create a container for the clone
      container = document.createElement("div");
      container.style.position = "absolute";
      container.style.top = "-9999px";
      container.style.left = "-9999px";
      container.style.zIndex = "-9999";
      // Force the container to be the target width
      container.style.width = "794px";
      document.body.appendChild(container);

      // 2. Wait for React to render 'forceDesktop' styles (triggered by setIsDownloading(true))
      await new Promise((resolve) => setTimeout(resolve, 200));

      // 3. Clone the element NOW, after it has been updated in the DOM
      const originalElement = previewRef.current;
      if (!originalElement) {
        throw new Error("Preview element lost during render");
      }
      const clone = originalElement.cloneNode(true) as HTMLElement;

      // 4. Apply styles to the CLONE to ensure it renders correctly for A4
      clone.style.width = "794px";
      clone.style.maxWidth = "none";
      clone.style.height = "auto";
      clone.style.minHeight = "1123px";
      clone.style.margin = "0";
      clone.style.padding = "0";
      clone.style.transform = "none";
      clone.style.boxShadow = "none";
      clone.style.overflow = "visible";

      // IMPORTANT: Find the inner theme wrapper and remove its max-width constraint
      // chronicle-paper and vintage-paper have max-w-2xl usually
      const themeWrapper = clone.querySelector('.chronicle-paper, .vintage-paper') as HTMLElement;
      if (themeWrapper) {
        themeWrapper.style.maxWidth = "none";
        themeWrapper.style.width = "100%";
        themeWrapper.style.margin = "0";
        // Also ensure internal grids don't break
      }

      container.appendChild(clone);

      // 5. Wait slightly for the clone to settle in the new container
      await new Promise((resolve) => setTimeout(resolve, 100));

      // 6. Generate Image
      const dataUrl = await toPng(clone, {
        cacheBust: true,
        pixelRatio: 2, // 2x resolution is sufficient for clear text without being huge
        width: 794,
        // Calculate height based on the clone's actual rendered height
        height: clone.scrollHeight,
        style: {
          // Ensure no transform issues in capture
          transform: 'none',
        }
      });

      // 7. Download
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
      // Safe cleanup
      if (container && document.body.contains(container)) {
        document.body.removeChild(container);
      }
      setIsDownloading(false);
    }
  }, [partnerName]);

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: 'smooth' }}>
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
            id="love-input-form"
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
            <div className="lg:sticky lg:top-4">
              <p className="font-headline text-center text-sm uppercase tracking-widest text-ink-faded mb-4">
                Live Preview
              </p>
              <div ref={previewRef} className="w-full max-w-2xl mx-auto">
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
      <footer className="text-center py-8 px-4 border-t border-ornament">
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

      {/* Mobile Navigation Enhancements */}
      <BackToTop />
    </div>
  );
}

const Index = () => (
  <ThemeProvider>
    <IndexContext />
  </ThemeProvider>
);

export default Index;
