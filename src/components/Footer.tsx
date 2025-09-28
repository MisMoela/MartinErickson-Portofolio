import { ArrowUp } from "lucide-react";

// A helper component to generate the repeating, colored text
const MarqueeContent = () => (
  <>
    {[...Array(15)].map((_, i) => (
      <span
        key={i}
        className={`text-4xl font-bold mx-4 ${
          i % 2 === 0 ? "text-secondary" : "text-primary"
        }`}
      >
        Martin Erickson
      </span>
    ))}
  </>
);

export const Footer = () => {
  return (
    <footer className="relative border-t border-border mt-12 pt-8 px-4 bg-card overflow-hidden">
      {/* Marquee */}
      <div className="marquee">
        <div className="track">
          <MarqueeContent />
          {/* duplicate for seamless loop */}
          <MarqueeContent />
        </div>
      </div>

      {/* Bottom row */}
      <div className="py-6 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} martinerickson.com, All Rights Reserved
        </p>

        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
};
