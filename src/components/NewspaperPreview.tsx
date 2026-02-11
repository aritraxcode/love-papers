import { forwardRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import SimpleLoveTheme from './SimpleLoveTheme';
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

    const renderTheme = () => {
      switch (theme) {
        case 'simple':
          return (
            <SimpleLoveTheme
              yourName={yourName}
              partnerName={partnerName}
              date={date}
              message={message}
              image={image}
              forceDesktop={forceDesktop}
            />
          );
        case 'chronicle':
          return (
            <ChronicleTheme
              yourName={yourName}
              partnerName={partnerName}
              date={date}
              message={message}
              image={image}
              forceDesktop={forceDesktop}
            />
          );
        case 'gazette':
        default:
          return (
            <GazetteTheme
              yourName={yourName}
              partnerName={partnerName}
              date={date}
              message={message}
              image={image}
              forceDesktop={forceDesktop}
            />
          );
      }
    };

    return (
      <div ref={ref}>
        {renderTheme()}
      </div>
    );
  }
);

NewspaperPreview.displayName = 'NewspaperPreview';

export default NewspaperPreview;
