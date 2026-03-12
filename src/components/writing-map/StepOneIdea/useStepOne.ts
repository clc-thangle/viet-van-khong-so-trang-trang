import { useState } from "react";

interface IdeaAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5_1: string;
  q5_2: string;
  q5_3: string;
  q6_1: string;
  q6_2: string;
  q6_3: string;
  q7: string;
  q8: string;
}

export const useStepOne = () => {
  const [ideaAnswers, setIdeaAnswers] = useState<IdeaAnswers>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5_1: "",
    q5_2: "",
    q5_3: "",
    q6_1: "",
    q6_2: "",
    q6_3: "",
    q7: "",
    q8: "",
  });
  const [activeIdeaHint, setActiveIdeaHint] = useState<string | null>(null);
  const [activeTopicHint, setActiveTopicHint] = useState<string | null>(null);

  const updateIdeaAnswer = (field: keyof IdeaAnswers, value: string) => {
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

  const isComplete =
    ideaAnswers.q1.trim() !== "" &&
    ideaAnswers.q2.trim() !== "" &&
    ideaAnswers.q3.trim() !== "" &&
    ideaAnswers.q4.trim() !== "" &&
    ideaAnswers.q5_1.trim() !== "" &&
    ideaAnswers.q5_2.trim() !== "" &&
    ideaAnswers.q5_3.trim() !== "" &&
    ideaAnswers.q6_1.trim() !== "" &&
    ideaAnswers.q6_2.trim() !== "" &&
    ideaAnswers.q6_3.trim() !== "" &&
    ideaAnswers.q7.trim() !== "" &&
    ideaAnswers.q8.trim() !== "";

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
