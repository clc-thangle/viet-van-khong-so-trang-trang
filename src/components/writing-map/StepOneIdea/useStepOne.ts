import { useState, useMemo, useEffect, useRef } from "react";
import type { TimYQuestion } from "../../../data/writingMapConstants";

export const useStepOne = (timYQuestions: TimYQuestion[]) => {
  // Build initial state from timYQuestions config
  const initialAnswers = useMemo(() => {
    const answers: Record<string, string> = {};
    for (const q of timYQuestions) {
      if (q.subInputs && q.subInputs > 0) {
        for (let i = 1; i <= q.subInputs; i++) {
          answers[`${q.id}_${i}`] = "";
        }
      } else {
        answers[q.id] = "";
      }
    }
    return answers;
  }, [timYQuestions]);

  const [ideaAnswers, setIdeaAnswers] = useState<Record<string, string>>(initialAnswers);
  const [activeIdeaHint, setActiveIdeaHint] = useState<string | null>(null);
  const [activeTopicHint, setActiveTopicHint] = useState<string | null>(null);

  // Reset state when timYQuestions config changes (grade switch)
  const prevQuestionsRef = useRef(timYQuestions);
  useEffect(() => {
    if (prevQuestionsRef.current !== timYQuestions) {
      prevQuestionsRef.current = timYQuestions;
      setIdeaAnswers(initialAnswers);
      setActiveIdeaHint(null);
      setActiveTopicHint(null);
    }
  }, [timYQuestions, initialAnswers]);

  const updateIdeaAnswer = (field: string, value: string) => {
    setIdeaAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const toggleIdeaHint = (hintId: string) => {
    setActiveIdeaHint((prev) => (prev === hintId ? null : hintId));
    setActiveTopicHint(null);
  };

  const toggleTopicHint = (hintId: string) => {
    setActiveTopicHint((prev) => (prev === hintId ? null : hintId));
    setActiveIdeaHint(null);
  };

  const isComplete = useMemo(() => {
    const values = Object.values(ideaAnswers);
    return values.length > 0 && values.every((v) => v.trim() !== "");
  }, [ideaAnswers]);

  return {
    ideaAnswers,
    activeIdeaHint,
    activeTopicHint,
    isComplete,
    updateIdeaAnswer,
    toggleIdeaHint,
    toggleTopicHint,
  };
};
