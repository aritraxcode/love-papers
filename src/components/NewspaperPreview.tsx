import { forwardRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import ChronicleTheme from './ChronicleTheme';
import GazetteTheme from './GazetteTheme';

export interface NewspaperPreviewProps {
  yourName: string;
  partnerName: string;
  date: string;
  message: string;
  image: string | null;
  forceDesktop?: boolean;
}

const NewspaperPreview = forwardRef<HTMLDivElement, NewspaperPreviewProps>(
  ({ yourName, partnerName, date, message, image, forceDesktop }, ref) => {
    const { theme } = useTheme();

    return (
      <div ref={ref}>
        {theme === 'chronicle' ? (
          <ChronicleTheme
            yourName={yourName}
            partnerName={partnerName}
            date={date}
            message={message}
            image={image}
            forceDesktop={forceDesktop}
          />
        ) : (
          <GazetteTheme
            yourName={yourName}
            partnerName={partnerName}
            date={date}
            message={message}
            image={image}
            forceDesktop={forceDesktop}
          />
        )}
      </div>
    );
  }
);

NewspaperPreview.displayName = 'NewspaperPreview';

export default NewspaperPreview;
