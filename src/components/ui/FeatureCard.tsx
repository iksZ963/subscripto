import { Card, CardHeader, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-accent text-accent-foreground hover:shadow-lg transition-all">
      <CardHeader>
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

