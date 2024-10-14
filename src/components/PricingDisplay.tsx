// components/PricingDisplay.tsx
import { CheckIcon } from "@heroicons/react/24/solid"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PricingPlan {
  plan: string;
  price: string;
  features: string[];
}

interface PricingDisplayProps {
  model: string;
  free?: {
    plan: string;
    features: string[];
  };
  paid?: PricingPlan | PricingPlan[] | { price: PricingPlan[] };}

function renderPlan(plan: PricingPlan) {
  return (
    <div className="mb-6 bg-background/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h5 className="text-xl font-semibold mb-2 text-gradient-secondary">{plan.plan}</h5>
      <p className="text-2xl font-bold mb-4">{plan.price}</p>
      {plan.features && (
        <ul className="space-y-2">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function PricingDisplay({ model, free, paid }: PricingDisplayProps) {
  let paidPlans: PricingPlan[] = [];
  
  if (Array.isArray(paid)) {
    paidPlans = paid;
  } else if (paid && 'price' in paid && Array.isArray(paid.price)) {
    paidPlans = paid.price;
  } else if (paid && 'plan' in paid) {
    paidPlans = [paid];
  }

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-gradient-primary">Pricing</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="mb-4">{model}</Badge>        
        {free && (
          <div className="mb-6 bg-background/80 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-2 text-gradient-secondary">Free Plan: {free.plan}</h4>
            <ul className="space-y-2">
              {free.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {paidPlans.length > 0 && (
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gradient-secondary">Paid Plans</h4>
            {paidPlans.map((plan, index) => (
              <div key={index}>
                {renderPlan(plan)}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}