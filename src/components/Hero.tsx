
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToModels = () => {
    const modelsSection = document.getElementById("models-section");
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />
        <div className="absolute h-56 w-56 rounded-full bg-purple-300 blur-3xl opacity-30 -top-10 -left-10" />
        <div className="absolute h-56 w-56 rounded-full bg-blue-300 blur-3xl opacity-30 bottom-10 right-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in">
            <span className="block">Fashion MNIST</span>
            <span className="block mt-2 text-primary">Machine Learning Explorer</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-gray-500 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Compare multiple machine learning models trained on the Fashion MNIST dataset and explore their predictions on fashion items.
          </p>
          <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-3 text-lg shadow-lg shadow-primary/20"
              onClick={scrollToModels}
            >
              Explore Models <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
