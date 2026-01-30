import { Github, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Connect!
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm actively seeking internship and entry-level opportunities in Data Science and Full-Stack Development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2 hover-lift shadow-lg shadow-primary/20" asChild>
              <a
                href="https://github.com/Priyatech25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover-lift" asChild>
              <a href="/K_Priyadarshini_Resume.pdf" target="_blank" rel="noopener noreferrer" download="K_Priyadarshini_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 hover-lift" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
