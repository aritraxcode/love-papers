
import { IconCalendar } from "@tabler/icons-react";
import ImageUpload from "./ImageUpload";
import { Label } from "./ui/label";

interface LoveInputFormProps {
  yourName: string;
  setYourName: (value: string) => void;
  partnerName: string;
  setPartnerName: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  image: string | null;
  setImage: (image: string | null) => void;
  onDownload: () => void;
  isDownloading: boolean;
}

const LoveInputForm = ({
  yourName,
  setYourName,
  partnerName,
  setPartnerName,
  date,
  setDate,
  message,
  setMessage,
  image,
  setImage,
  onDownload,
  isDownloading,
}: LoveInputFormProps) => {
  return (
    <div className="vintage-paper paper-shadow p-6 sm:p-8 w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <span className="text-love-red text-3xl">♥</span>
        <h2 className="font-headline text-2xl font-bold text-headline uppercase tracking-wide mt-2">
          Create Your Love Letter
        </h2>
        <p className="font-decorative text-ink-faded italic text-sm mt-1">
          Fill in the details below
        </p>
      </div>

      <div className="space-y-5">
        {/* Your Name */}
        <div className="space-y-2">
          <Label htmlFor="yourName" className="font-headline text-sm uppercase tracking-wide text-ink">
            Your Name
          </Label>
          <input
            id="yourName"
            type="text"
            placeholder="Enter your name"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="vintage-input w-full"
          />
        </div>

        {/* Partner Name */}
        <div className="space-y-2">
          <Label htmlFor="partnerName" className="font-headline text-sm uppercase tracking-wide text-ink">
            Your Partner's Name
          </Label>
          <input
            id="partnerName"
            type="text"
            placeholder="Enter their name"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="vintage-input w-full"
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="font-headline text-sm uppercase tracking-wide text-ink">
            Date of Affection
          </Label>
          <div className="relative">
            <input
              id="date"
              type="text"
              placeholder={`E.g. ${new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="vintage-input w-full pr-10"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faded hover:text-love-red transition-colors cursor-pointer">
              <div className="relative">
                <IconCalendar size={20} />
                <input
                  type="date"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={(e) => {
                    if (e.target.value) {
                      const selectedDate = new Date(e.target.value);
                      /* Adjust for timezone offset to prevent one-day-off errors */
                      const userTimezoneOffset = selectedDate.getTimezoneOffset() * 60000;
                      const adjustedDate = new Date(selectedDate.getTime() + userTimezoneOffset);

                      const formattedDate = adjustedDate.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      });
                      setDate(formattedDate);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Image Upload */}
        <ImageUpload image={image} setImage={setImage} />

        {/* Love Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-headline text-sm uppercase tracking-wide text-ink">
            Your Message of Love
          </Label>
          <textarea
            id="message"
            placeholder="Write your heartfelt message, poem, or declaration of love..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="vintage-input w-full resize-none"
          />
        </div>

        {/* Download Button */}
        <button
          type="button"
          onClick={onDownload}
          disabled={isDownloading}
          className="download-button cursor-pointer w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span>♥</span>
              Download Love Letter
              <span>♥</span>
            </span>
          )}
        </button>
      </div>

      {/* Footer Note */}
      <p className="text-center font-decorative text-xs text-ink-faded mt-6 italic">
        Your love letter will be saved as an image
      </p>
    </div>
  );
};

export default LoveInputForm;
