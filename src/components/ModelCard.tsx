
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ModelCardProps {
  name: string;
  accuracy: number;
  description: string;
  strengths: string[];
  weaknesses: string[];
  trainingTime: string;
  color?: string;
}

const ModelCard = ({
  name,
  accuracy,
  description,
  strengths,
  weaknesses,
  trainingTime,
  color = "bg-primary"
}: ModelCardProps) => {
  return (
    <Card className="model-card transition-all duration-300 h-full border-t-4 hover:border-primary">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-display">{name}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge variant="secondary">{trainingTime}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Accuracy</span>
              <span className="text-sm font-medium">{accuracy}%</span>
            </div>
            <Progress value={accuracy} className={cn("h-2", color)} />
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {strengths.map((strength, i) => (
                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {strength}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Weaknesses</h4>
            <div className="flex flex-wrap gap-2">
              {weaknesses.map((weakness, i) => (
                <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  {weakness}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelCard;
