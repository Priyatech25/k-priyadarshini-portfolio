import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "OCR Food Safety Scanner App",
    description:
      "A mobile application that scans food product labels using OCR and identifies harmful ingredients to improve food safety awareness.",
    techStack: ["Flutter", "Google ML Kit", "Firebase"],
    features: [
      "OCR text extraction",
      "Ingredient safety analysis",
      "Firebase authentication",
    ],
  },
  {
    title: "Real-Time Carbon Emission Predictor",
    description:
      "A data-driven application that predicts carbon emissions in real time based on energy consumption and transportation data to promote environmental awareness.",
    techStack: ["Python", "Machine Learning", "Pandas", "NumPy", "FastAPI", "Power BI"],
    features: [
      "ML-based prediction model",
      "REST API",
      "Data preprocessing",
      "Emission trend visualization",
    ],
    githubLink: "https://github.com/Priyatech25/Carbonpulse",
  },
  {
    title: "Unique Food Recipes Application",
    description:
      "A full-stack application that provides users with unique and personalized food recipes based on ingredients and dietary preferences.",
    techStack: ["React.js", "FastAPI", "Firebase", "MongoDB"],
    features: [
      "Ingredient-based recommendations",
      "User authentication",
      "Save favorite recipes",
      "Responsive UI",
    ],
    githubLink: "https://github.com/Priyatech25/AI-Mood-Based-Unique-Recipe-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills
              in data analysis, full-stack development, and mobile applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden"
              >
                {/* Project Header with gradient */}
                <div className="h-2 bg-gradient-to-r from-primary to-blue-400" />

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button size="sm" className="gap-2" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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

export default ProjectsSection;
