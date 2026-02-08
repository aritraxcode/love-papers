
import { useTheme, type PaperTheme } from "@/contexts/ThemeContext";
const themes: { id: PaperTheme; name: string; description: string }[] = [
  {
    id: "gazette",
    name: "Love Gazette",
    description: "Romantic vintage style",
  },
  {
    id: "chronicle",
    name: "Daily Valentine",
    description: "Classic romantic style",
  },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div className="vintage-paper paper-shadow p-4 w-full max-w-md mx-auto mb-6">
        <h3 className="font-headline text-sm uppercase tracking-widest text-ink-faded text-center mb-3">
          Choose Your Style
        </h3>
        <div className="flex gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`flex-1 p-3 border-2 transition-all duration-200 ${theme === t.id
                ? "border-love-red bg-love-red/10"
                : "border-ornament hover:border-headline"
                }`}
            >
              <p className="font-headline text-sm font-bold text-headline uppercase">
                {t.name}
              </p>
              <p className="font-decorative text-xs text-ink-faded italic mt-1">
                {t.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
