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
    title: "🏥 Hospital-AI-Analytics",
    description:
      "A data-driven healthcare analytics project that analyzes hospital appointment data to identify no-show patterns, evaluate doctor performance, and generate actionable insights using Python and Power BI.",
    techStack: ["Python", "Pandas", "NumPy", "Power BI", "DAX", "Jupyter Notebook"],
    features: [
      "Cleaned raw hospital data; calculated No-Show Rate (26.0%) & Cancellation Rate (25.5%)",
      "Built doctor-wise performance comparison & KPI dashboards",
      "Designed interactive visualizations for data-backed scheduling decisions",
    ],
    githubLink: "https://github.com/Priyatech25/Hospital-AI-Analytics",
  },
  {
    title: "Carbon Footprint Dashboard",
    description:
      "A comprehensive analytics dashboard for tracking and reducing carbon emissions.",
    techStack: ["React", "MongoDB", "REST APIs", "Chart.js"],
    features: [
      "Real-time emission tracking and visualization",
      "Interactive sustainability trend analysis",
      "Actionable insights for environmental impact",
    ],
    githubLink: "https://github.com/Priyatech25/Carbonpulse",
  },
  {
    title: "Food Inflation Data Analysis",
    description:
      "Data-driven analysis of food price trends to uncover economic patterns.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Comprehensive trend analysis across regions",
      "Visual storytelling with interactive charts",
      "Actionable insights for policy decisions",
    ],
    githubLink: "https://github.com/Priyatech25/Food-Inflation-Analysis",
  },
  {
    title: "Unique Food Recipes Application",
    description:
      "Smart recipe recommendation system based on available ingredients.",
    techStack: ["React", "Firebase", "APIs"],
    features: [
      "AI-powered ingredient-based suggestions",
      "Personalized recipe recommendations",
      "User preference learning system",
    ],
    githubLink: "https://github.com/Priyatech25/AI-Mood-Based-Unique-Recipe-App",
  },
  {
    title: "Real-Time Carbon Emission Predictor",
    description:
      "Predictive analytics tool for environmental monitoring and awareness.",
    techStack: ["Python", "Machine Learning", "APIs"],
    features: [
      "Real-time emission forecasting",
      "ML-powered analytical modeling",
      "Environmental impact awareness tools",
    ],
    githubLink: "https://github.com/Priyatech25/Carbonpulse",
  },
  {
    title: "Karmic Canteen Management System",
    description:
      "Smart canteen automation to reduce food waste and streamline operations.",
    techStack: ["React", "MongoDB", "Node.js", "Auth"],
    features: [
      "Automated meal planning and confirmations",
      "Role-based access with secure authentication",
      "Analytics dashboard for waste reduction",
    ],
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
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />

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
