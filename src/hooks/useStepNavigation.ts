import { useState } from "react";

interface StepConfigItem {
  id: number;
  title: string;
  icon: string;
  color: string;
  description: string;
}

export const useStepNavigation = (steps: StepConfigItem[], isStepComplete: (stepIndex: number) => boolean) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const canProceedToNext = () => isStepComplete(activeStep);

  const isStepUnlocked = (stepIndex: number): boolean => {
    if (stepIndex === 0) return true;
    return isStepComplete(stepIndex - 1);
  };

  const handleNextStep = () => {
    if (canProceedToNext()) {
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps((prev) => [...prev, activeStep]);
      }
      setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
    }
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  const handleStepClick = (stepIndex: number) => {
    if (isStepUnlocked(stepIndex)) {
      setActiveStep(stepIndex);
    }
  };

  return {
    activeStep,
    completedSteps,
    canProceedToNext,
    isStepUnlocked,
    handleNextStep,
    handlePrevStep,
    handleStepClick,
  };
};
