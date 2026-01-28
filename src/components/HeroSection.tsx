import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative group">
                <img
                  src={profilePhoto}
                  alt="K Priyadarshini"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary/30 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60 group-hover:shadow-2xl"
                />
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 transition-all duration-300 group-hover:border-primary/40" style={{ transform: "scale(1.1)" }} />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              {/* Greeting */}
              <p className="text-primary font-medium mb-4 animate-fade-in">
                Hello, I'm
              </p>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                K Priyadarshini
              </h1>

              {/* Title */}
              <div className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in">
                <span className="text-primary">Computer Science - Data Science Student</span>
                <span className="mx-3">|</span>
                <span>Data Analyst & Full-Stack Developer</span>
              </div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in">
                Building data-driven solutions & full-stack applications that solve
                real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12 animate-fade-in">
                <Button size="lg" className="gap-2 hover-lift" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 hover-lift" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-6 animate-fade-in">
                <a
                  href="https://github.com/Priyatech25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/k-priya-darshini-07ab932a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:kpriyadharshinircr@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
