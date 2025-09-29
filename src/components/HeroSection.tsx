import { ArrowDown } from "lucide-react";
import ProfileImage from "@/assets/profile.jpg"; // adjust path if needed

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Martin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Erickson
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Hard-working with a desire to learn new experiences in a professional
            environment. Currently a third-year computer science student in Binus
            University with experiences on several programming languages such as
            Python, Typescript, NodeJS and more.
          </p>

          {/* Buttons */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#skills"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              My Skills
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <div className="card rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            <img
              src={ProfileImage}
              alt="Martin Erickson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
