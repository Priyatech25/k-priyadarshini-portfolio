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
                {/* Subtle outer ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-sm scale-105" />
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-2 border-primary/40 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl ring-4 ring-primary/20 ring-offset-2 ring-offset-background bg-muted/30 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={profilePhoto}
                      alt="K Priyadarshini"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              {/* Greeting */}
              <p className="text-primary font-medium mb-4 animate-fade-in">
                Hello, I'm
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                K Priyadarshini
              </h1>

              {/* Professional Headline */}
              <p className="text-lg md:text-xl text-primary font-medium mb-4 animate-fade-in max-w-xl">
                Data Analytics & Full-Stack Developer | Seeking Internship Opportunities
              </p>

              {/* Title */}
              <div className="text-base md:text-lg text-muted-foreground mb-6 animate-fade-in">
                <span>Computer Science (Data Science) Student</span>
              </div>

              {/* Tagline */}
              <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in">
                Building data-driven dashboards & full-stack applications that solve
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
