
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import ModelCard from "./ModelCard";

const ModelsSection = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [selectedModel, setSelectedModel] = useState("Logistic Regression");
  
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

  // Fashion MNIST class labels
  const labels = [
    "T-shirt/top", "Trouser", "Pullover", "Dress", "Coat",
    "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"
  ];

  // Mock confusion matrix data for each model
  const confusionMatrices = {
    "Logistic Regression": [
      [85, 0, 2, 3, 1, 0, 9, 0, 0, 0],
      [0, 94, 0, 1, 0, 0, 0, 0, 5, 0],
      [4, 0, 78, 2, 12, 0, 4, 0, 0, 0],
      [3, 0, 1, 86, 4, 0, 6, 0, 0, 0],
      [0, 0, 5, 0, 88, 0, 1, 0, 0, 6],
      [0, 0, 0, 0, 0, 92, 0, 3, 2, 3],
      [9, 0, 2, 5, 3, 0, 81, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 97, 0, 2],
      [1, 0, 0, 1, 1, 1, 0, 0, 96, 0],
      [0, 0, 0, 0, 3, 3, 0, 2, 0, 92]
    ],
    "Decision Tree": [
      [78, 0, 4, 5, 2, 0, 11, 0, 0, 0],
      [0, 90, 1, 2, 0, 0, 0, 0, 7, 0],
      [6, 0, 72, 3, 14, 0, 5, 0, 0, 0],
      [5, 0, 2, 80, 6, 0, 7, 0, 0, 0],
      [1, 0, 7, 0, 84, 0, 1, 0, 0, 7],
      [0, 0, 0, 0, 0, 88, 0, 5, 3, 4],
      [12, 0, 3, 7, 4, 0, 74, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 94, 0, 4],
      [2, 1, 0, 2, 1, 1, 0, 0, 93, 0],
      [0, 0, 0, 0, 4, 4, 0, 3, 0, 89]
    ],
    "SVM": [
      [87, 0, 1, 2, 1, 0, 9, 0, 0, 0],
      [0, 95, 0, 0, 0, 0, 0, 0, 5, 0],
      [3, 0, 81, 1, 11, 0, 4, 0, 0, 0],
      [2, 0, 0, 89, 3, 0, 6, 0, 0, 0],
      [0, 0, 4, 0, 90, 0, 1, 0, 0, 5],
      [0, 0, 0, 0, 0, 93, 0, 2, 2, 3],
      [7, 0, 1, 4, 2, 0, 86, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 98, 0, 2],
      [0, 0, 0, 0, 0, 1, 0, 0, 99, 0],
      [0, 0, 0, 0, 2, 2, 0, 1, 0, 95]
    ],
    "Naive Bayes": [
      [75, 0, 5, 5, 2, 0, 13, 0, 0, 0],
      [0, 85, 2, 3, 0, 0, 0, 0, 10, 0],
      [8, 0, 65, 5, 16, 0, 6, 0, 0, 0],
      [7, 0, 3, 75, 7, 0, 8, 0, 0, 0],
      [2, 0, 9, 0, 79, 0, 2, 0, 0, 8],
      [0, 0, 0, 0, 0, 82, 0, 7, 5, 6],
      [15, 0, 4, 9, 5, 0, 67, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 89, 0, 8],
      [3, 2, 0, 3, 2, 2, 0, 0, 88, 0],
      [0, 0, 0, 0, 6, 6, 0, 5, 0, 83]
    ]
  };

  // Mock sample predictions data
  const samplePredictions = [
    {
      image: "https://i.imgur.com/5isgDAA.png",
      true: "T-shirt/top",
      pred: "T-shirt/top",
      correct: true
    },
    {
      image: "https://i.imgur.com/1RxPYqe.png",
      true: "Trouser",
      pred: "Trouser",
      correct: true
    },
    {
      image: "https://i.imgur.com/n16sZLc.png",
      true: "Pullover",
      pred: "Coat",
      correct: false
    },
    {
      image: "https://i.imgur.com/VQbQTbh.png",
      true: "Dress",
      pred: "Dress",
      correct: true
    },
    {
      image: "https://i.imgur.com/63Qpx7K.png",
      true: "Coat",
      pred: "Coat",
      correct: true
    },
    {
      image: "https://i.imgur.com/hh2bHHJ.png",
      true: "Sandal",
      pred: "Sandal",
      correct: true
    },
    {
      image: "https://i.imgur.com/4jF5SQ5.png",
      true: "Shirt",
      pred: "T-shirt/top",
      correct: false
    },
    {
      image: "https://i.imgur.com/AUJVGu7.png",
      true: "Sneaker",
      pred: "Sneaker",
      correct: true
    },
    {
      image: "https://i.imgur.com/aB5BM7j.png",
      true: "Bag",
      pred: "Bag",
      correct: true
    },
    {
      image: "https://i.imgur.com/Gh3lddS.png",
      true: "Ankle boot",
      pred: "Ankle boot",
      correct: true
    }
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
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-display text-xl font-semibold mb-6 text-center">Confusion Matrix</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {models.map((model, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedModel === model.name 
                        ? 'bg-primary text-white' 
                        : 'bg-secondary hover:bg-primary hover:text-white'
                    }`}
                    onClick={() => setSelectedModel(model.name)}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
              
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Actual ↓ Pred →</TableHead>
                      {labels.map((label, i) => (
                        <TableHead key={i} className="text-center text-xs">
                          {i}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {confusionMatrices[selectedModel as keyof typeof confusionMatrices].map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium text-xs">
                          {i}: {labels[i].slice(0, 6)}
                        </TableCell>
                        {row.map((cell, j) => (
                          <TableCell 
                            key={j} 
                            className="text-center p-2"
                            style={{
                              backgroundColor: i === j ? 
                                `rgba(16, 185, 129, ${cell/100})` : 
                                cell > 0 ? `rgba(239, 68, 68, ${cell/100})` : '',
                              color: cell > 50 ? 'white' : 'inherit'
                            }}
                          >
                            {cell}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Diagonal cells (green) represent correct predictions. Off-diagonal cells (red) represent errors.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="samples">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-6">Sample Predictions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {samplePredictions.map((sample, idx) => (
                    <div key={idx} className="bg-gray-100 rounded-md p-2 text-center">
                      <div className="aspect-square mb-2 overflow-hidden rounded-md flex items-center justify-center">
                        <img 
                          src={sample.image} 
                          alt={`Fashion MNIST ${sample.true}`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="text-xs">
                        <p className="font-semibold">True: {sample.true}</p>
                        <p className={sample.correct ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                          Pred: {sample.pred}
                        </p>
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
