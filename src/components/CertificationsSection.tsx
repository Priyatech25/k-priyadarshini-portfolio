import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  title: string;
  type: "hackathon" | "course";
  issuer?: string;
}

const certifications: Certification[] = [
  {
    title: "IBM Z Datathon 2025",
    type: "hackathon",
    issuer: "Participation Certificate",
  },
  {
    title: "Hackotsava 2025",
    type: "hackathon",
    issuer: "Hackathon Participation",
  },
  {
    title: "Data Science with Python",
    type: "course",
    issuer: "Online Certification",
  },
  {
    title: "Machine Learning Fundamentals",
    type: "course",
    issuer: "Online Course",
  },
  {
    title: "SQL & Data Analytics",
    type: "course",
    issuer: "Certification",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Courses
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
