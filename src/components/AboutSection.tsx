import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Bio Content */}
          <div className="space-y-4">
            {/* OPTION 1 – DATA ANALYTICS FOCUSED (Currently Active) */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Computer Science (Data Science) student with strong interest in <span className="text-primary font-medium">Data Analytics</span> and <span className="text-primary font-medium">Full-Stack Development</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Experienced in transforming real-world data into meaningful insights through dashboards, visualizations, and analytics-driven applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Passionate about building scalable, user-focused solutions and actively seeking internship opportunities in Data Analytics and Full-Stack Development.
            </p>

            {/* OPTION 2 – FULL-STACK + ANALYTICS BALANCE (Uncomment to use)
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Data Analytics and Full-Stack Developer with hands-on experience in building data-driven web applications, dashboards, and management systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Skilled in analyzing datasets, visualizing trends, and developing end-to-end solutions using modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Actively seeking internship opportunities to apply analytics and full-stack skills in real-world projects.
            </p>
            */}

            {/* Education Card */}
            <Card className="bg-secondary/50 border-primary/20 mt-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-foreground font-medium">
                      Bachelor of Engineering (B.E) in Computer Science
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Moodlakatte Institute of Technology, Kundapura
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Expected 2027
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
