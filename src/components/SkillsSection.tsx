import { Code, Database, BarChart3, Wrench } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Frameworks & Libraries",
    skills: ["React.js", "Flutter", "FastAPI", "Flask", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data & Analytics",
    skills: ["Power BI", "Tableau", "Data Cleaning", "Data Visualization", "EDA"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Tools & Technologies",
    skills: ["Firebase", "MongoDB", "Git", "GitHub", "Docker"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
