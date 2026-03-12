import { useState } from "react";

interface EssayParagraphs {
  moBai: string;
  thanBai1: string;
  thanBai2: string;
  thanBai3: string;
  ketBai: string;
}

export const useStepThree = () => {
  const [essayParagraphs, setEssayParagraphs] = useState<EssayParagraphs>({
    moBai: "",
    thanBai1: "",
    thanBai2: "",
    thanBai3: "",
    ketBai: "",
  });
  const [activeWritingHint, setActiveWritingHint] = useState<string | null>(null);

  const updateParagraph = (key: keyof EssayParagraphs, value: string) => {
    setEssayParagraphs((prev) => ({ ...prev, [key]: value }));
  };

  const toggleWritingHint = (hintId: string) => {
    setActiveWritingHint((prev) => (prev === hintId ? null : hintId));
  };

  const getWordCount = (text: string): number => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const filledParagraphs = Object.values(essayParagraphs).filter(
    (v) => v.trim() !== ""
  ).length;
  const totalParagraphs = Object.keys(essayParagraphs).length;

  const isComplete =
    essayParagraphs.moBai.trim() !== "" &&
    essayParagraphs.thanBai1.trim() !== "" &&
    essayParagraphs.thanBai2.trim() !== "" &&
    essayParagraphs.thanBai3.trim() !== "" &&
    essayParagraphs.ketBai.trim() !== "";

  return {
    essayParagraphs,
    activeWritingHint,
    filledParagraphs,
    totalParagraphs,
    isComplete,
    updateParagraph,
    toggleWritingHint,
    getWordCount,
  };
};
