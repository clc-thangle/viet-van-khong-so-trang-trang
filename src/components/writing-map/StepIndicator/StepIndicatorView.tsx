import { CheckCircle, type LucideIcon } from "lucide-react";

interface StepItem {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

interface StepIndicatorViewProps {
  steps: StepItem[];
  activeStep: number;
  completedSteps: number[];
  isStepUnlocked: (index: number) => boolean;
  isStepComplete: (index: number) => boolean;
  onStepClick: (index: number) => void;
}

const StepIndicatorView = ({ steps, activeStep, completedSteps: _completedSteps, isStepUnlocked, isStepComplete, onStepClick }: StepIndicatorViewProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      {steps.map((step, index) => {
        const unlocked = isStepUnlocked(index);
        const complete = isStepComplete(index);
        const isCurrent = activeStep === index;
        const Icon = step.icon;

        return (
          <button
            key={step.id}
            onClick={() => onStepClick(index)}
            disabled={!unlocked}
            className={`p-4 rounded-xl text-left transition-all relative ${
              isCurrent
                ? "bg-white shadow-xl ring-2 ring-primary-500 scale-105"
                : complete
                  ? "bg-green-50 border-2 border-green-500"
                  : unlocked
                    ? "bg-white border-2 border-gray-200 hover:shadow-md"
                    : "bg-gray-100 border-2 border-gray-200 opacity-50 cursor-not-allowed"
            }`}
          >
            {complete && !isCurrent && (
              <div className="absolute top-2 right-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            )}
            {!unlocked && (
              <div className="absolute top-2 right-2">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className={`${step.color} p-2 rounded-lg inline-block mb-2 ${!unlocked && "opacity-50"}`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className={`font-bold text-sm mb-1 ${unlocked ? "text-gray-900" : "text-gray-400"}`}>
              Bước {index + 1}
            </h3>
            <p className={`text-xs ${unlocked ? "text-gray-600" : "text-gray-400"}`}>
              {step.title}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default StepIndicatorView;
