import { Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experienceItems = [
  "Analyzed datasets using Python and SQL for actionable insights",
  "Built interactive dashboards using Power BI and Tableau",
  "Performed data cleaning and visualization for exploratory data analysis",
  "Developed full-stack applications with React.js, FastAPI, and Firebase",
  "Created mobile applications using Flutter and integrated ML capabilities",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Academic Projects</h3>
                  <p className="text-muted-foreground">
                    Hands-on experience through coursework and personal projects
                  </p>
                </div>
              </div>

              {/* Experience Points */}
              <div className="space-y-4">
                {experienceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-muted-foreground text-center">
                  🚀 Actively seeking internship and entry-level opportunities in 
                  <span className="text-primary font-medium"> Data Analytics </span>
                  and
                  <span className="text-primary font-medium"> Full-Stack Development</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
