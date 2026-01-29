import { Star, Trophy, Rocket, Target } from "lucide-react";

const highlights = [
  {
    icon: <Trophy className="w-5 h-5" />,
    text: "Participated in national-level hackathons (IBM Z, Hackotsava)",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    text: "Built 6+ real-world projects across AI, data science, and full-stack development",
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Focused on sustainability, automation, and data-driven solutions",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Highlights
            </h2>
          </div>

          {/* Highlights List */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg px-5 py-4 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-primary flex-shrink-0">
                  {highlight.icon}
                </div>
                <p className="text-sm text-foreground font-medium">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
