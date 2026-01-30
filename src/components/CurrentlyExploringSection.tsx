import { Lightbulb, TrendingUp, BarChart3, Brain } from "lucide-react";

const exploringItems = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data Analytics & Business Intelligence",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Data Storytelling & Visualization",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Scalable Full-Stack Applications",
  },
];

const CurrentlyExploringSection = () => {
  return (
    <section id="exploring" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Currently Exploring
            </h2>
            <p className="text-muted-foreground text-sm">
              Continuously learning and growing
            </p>
          </div>

          {/* Exploring Grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {exploringItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full px-6 py-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift"
              >
                <div className="text-primary">{item.icon}</div>
                <span className="font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploringSection;
