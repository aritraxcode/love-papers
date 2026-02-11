import { IconFileUploadFilled, IconFileXFilled } from "@tabler/icons-react";
import { useRef, type ChangeEvent } from "react";

interface ImageUploadProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setImage(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label className="font-headline text-sm uppercase tracking-wide text-ink block">
        Add Your Photo or Partner Photo
      </label>

      {image ? (
        <div className="relative">
          <div className="vintage-frame p-2 bg-paper-aged">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-32 object-cover"
            />
          </div>

          <button
            onClick={handleRemove}
            type="button"
            className="absolute -top-2 -right-2 bg-love-red text-paper p-1 rounded-full hover:bg-headline transition-colors"
          >
            <IconFileXFilled size={14} />

          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed border-ornament hover:border-love-red 
                     p-6 flex flex-col items-center gap-2 transition-colors bg-paper-aged/50"
        >
          <IconFileUploadFilled className="text-ornament" />
          <span className="font-decorative text-sm text-ink-faded italic">
            Click to upload photo
          </span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
