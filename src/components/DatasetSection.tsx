
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download, Info } from "lucide-react";

const DatasetSection = () => {
  const fashionClasses = [
    "T-shirt/top", "Trouser", "Pullover", "Dress", "Coat", 
    "Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"
  ];
  
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About the Dataset
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Understanding the Fashion MNIST dataset
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold mb-4">Fashion MNIST</h3>
              <p className="text-gray-600 mb-4">
                Fashion MNIST is a dataset of Zalando's article images, consisting of 70,000 grayscale images in 10 categories. Each image is 28x28 pixels.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Training images:</span>
                  <span>60,000</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Test images:</span>
                  <span>10,000</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Image size:</span>
                  <span>28×28 pixels</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Classes:</span>
                  <span>10</span>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Learn More
                </Button>
                <Button className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Dataset
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold mb-4">Class Distribution</h3>
              <div className="grid grid-cols-2 gap-4">
                {fashionClasses.map((cls, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center text-xs font-bold">
                      {index}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{cls}</p>
                      <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: "90%" }} 
                        ></div>
                      </div>
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

export default DatasetSection;
