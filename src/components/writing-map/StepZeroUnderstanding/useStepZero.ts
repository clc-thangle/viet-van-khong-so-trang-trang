import { useState, useMemo } from "react";
import {
  allTopics,
  topicQuizData,
  getTopicType,
} from "../../../data/writingMapConstants";

export const useStepZero = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [understandingAnswers, setUnderstandingAnswers] = useState<Record<string, string>>({
    q1: "",
    q2: "",
    q3: "",
  });
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [randomSeed, setRandomSeed] = useState<number>(0);

  const randomTopics = useMemo(() => {
    const shuffled = [...allTopics].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomSeed]);

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setUnderstandingAnswers({ q1: "", q2: "", q3: "" });
    setActiveHint(null);
  };

  const handleRefreshTopics = () => {
    setSelectedTopic("");
    setUnderstandingAnswers({ q1: "", q2: "", q3: "" });
    setActiveHint(null);
    setRandomSeed((prev) => prev + 1);
  };

  const updateUnderstandingAnswer = (field: string, value: string) => {
    setUnderstandingAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const toggleHint = (hintId: string) => {
    setActiveHint((prev) => (prev === hintId ? null : hintId));
  };

  const quizData = topicQuizData[selectedTopic];
  const isComplete =
    selectedTopic !== "" &&
    quizData &&
    understandingAnswers.q1 === quizData.q1.correct &&
    understandingAnswers.q2 === quizData.q2.correct &&
    understandingAnswers.q3 === quizData.q3.correct;

  const topicType = selectedTopic ? getTopicType(selectedTopic) : "";

  return {
    selectedTopic,
    understandingAnswers,
    activeHint,
    randomTopics,
    quizData,
    isComplete,
    topicType,
    handleSelectTopic,
    handleRefreshTopics,
    updateUnderstandingAnswer,
    toggleHint,
    setUnderstandingAnswers,
  };
};
