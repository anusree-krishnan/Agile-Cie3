
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ModelCard from "./ModelCard";

const ModelsSection = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  
  const models = [
    {
      name: "Logistic Regression",
      accuracy: 84,
      description: "A linear model that works well on simple classification tasks.",
      strengths: ["Fast", "Interpretable", "Low Resource"],
      weaknesses: ["Struggles with Complex Patterns", "Linear Boundaries"],
      trainingTime: "Fast",
    },
    {
      name: "Decision Tree",
      accuracy: 78,
      description: "Tree-based model that creates decision rules.",
      strengths: ["Handles Non-Linear Data", "Interpretable"],
      weaknesses: ["Overfitting", "Less Accurate"],
      trainingTime: "Medium",
    },
    {
      name: "SVM",
      accuracy: 86,
      description: "Finds the optimal hyperplane for classification.",
      strengths: ["Effective in High Dimensions", "Kernel Tricks"],
      weaknesses: ["Slow on Large Datasets", "Black Box"],
      trainingTime: "Slow",
    },
    {
      name: "Naive Bayes",
      accuracy: 70,
      description: "Uses Bayes theorem to predict the class of data points.",
      strengths: ["Fast", "Works with Small Data"],
      weaknesses: ["Assumes Independence", "Lower Accuracy"],
      trainingTime: "Very Fast",
    },
  ];

  return (
    <section id="models-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Model Comparison
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Explore different machine learning models trained on the Fashion MNIST dataset
          </p>
        </div>

        <Tabs 
          defaultValue="overview" 
          value={selectedTab} 
          onValueChange={setSelectedTab} 
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
              <TabsTrigger value="confusion">Confusion Matrix</TabsTrigger>
              <TabsTrigger value="samples">Sample Predictions</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {models.map((model, index) => (
                <ModelCard key={index} {...model} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="accuracy">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Accuracy Comparison</h3>
                <div className="h-72 flex items-end justify-between gap-4 pt-4">
                  {models.map((model, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-16 bg-primary rounded-t-md relative overflow-hidden transition-all duration-1000" 
                        style={{ 
                          height: `${model.accuracy * 2}px`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 skew-y-12"></div>
                      </div>
                      <div className="mt-2 text-sm font-medium text-center h-10 flex items-center">
                        {model.name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                      </div>
                      <span className="text-sm font-bold text-primary">{model.accuracy}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="confusion">
            <div className="text-center p-12 bg-white rounded-lg shadow-sm">
              <h3 className="font-display text-xl font-semibold mb-6">Confusion Matrices</h3>
              <p className="text-gray-500 mb-4">Select a model to view its confusion matrix</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {models.map((model, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 rounded-full text-sm bg-secondary hover:bg-primary hover:text-white transition-colors"
                  >
                    {model.name}
                  </button>
                ))}
              </div>
              <div className="py-12 flex justify-center">
                <p className="text-gray-400 italic">Select a model to display its confusion matrix</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="samples">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-6">Sample Predictions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div key={idx} className="image-prediction bg-gray-100 rounded-md p-2 text-center">
                      <div className="bg-gray-200 aspect-square rounded-md mb-2"></div>
                      <div className="text-xs">
                        <p className="font-semibold">True: Shirt</p>
                        <p className="text-primary">Pred: Shirt</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ModelsSection;
