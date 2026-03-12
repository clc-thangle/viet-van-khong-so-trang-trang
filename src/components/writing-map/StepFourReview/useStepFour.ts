import { useState } from "react";

interface Checklist {
  hasClearOpinion: boolean;
  hasExplicitAgreement: boolean;
  hasConvincingArgument: boolean;
  hasClearSignificance: boolean;
  hasGoodExpression: boolean;
}

export const useStepFour = () => {
  const [checklist, setChecklist] = useState<Checklist>({
    hasClearOpinion: false,
    hasExplicitAgreement: false,
    hasConvincingArgument: false,
    hasClearSignificance: false,
    hasGoodExpression: false,
  });

  const toggleChecklist = (item: keyof Checklist) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;

  const isComplete = Object.values(checklist).every((value) => value === true);

  return {
    checklist,
    completedCount,
    isComplete,
    toggleChecklist,
  };
};
