import { Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface HackathonExperience {
  title: string;
  subtitle?: string;
  points: string[];
}

const hackathons: HackathonExperience[] = [
  {
    title: "IBM Z Datathon 2025",
    subtitle: "Carbon Footprint Reduction Dashboard",
    points: [
      "Developed a full-stack carbon analytics dashboard to track and analyze emission data.",
      "Visualized sustainability trends using interactive charts for actionable insights.",
      "Integrated MongoDB with REST APIs for scalable, real-time data access.",
    ],
  },
  {
    title: "Hackotsava 2025",
    subtitle: "Karmic Solutions – Canteen Management System",
    points: [
      "Developed a smart canteen management system to automate daily meals and confirmations.",
      "Implemented secure user authentication with role-based access control.",
      "Built an admin dashboard for menu planning and analytics to reduce food wastage.",
    ],
  },
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

          {/* Hackathons & Competitions Card */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Hackathons & Competitions</h3>
                  <p className="text-muted-foreground">
                    Hands-on experience through competitive programming and innovation challenges
                  </p>
                </div>
              </div>

              {/* Hackathon Experiences */}
              <div className="space-y-6">
                {hackathons.map((hackathon, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {hackathon.title}
                    </h4>
                    {hackathon.subtitle && (
                      <p className="text-primary font-medium text-sm mb-3">
                        {hackathon.subtitle}
                      </p>
                    )}
                    <div className="space-y-2">
                      {hackathon.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
