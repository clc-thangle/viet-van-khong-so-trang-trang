import { useState, useMemo, useEffect, useRef } from "react";
import type { WritingSection } from "../../../data/writingMapConstants";

export const useStepThree = (writingSections: WritingSection[]) => {
  // Track section keys to detect grade changes (not content changes)
  const sectionKeys = useMemo(
    () => writingSections.map((s) => s.key).join(","),
    [writingSections]
  );

  const initialParagraphs = useMemo(() => {
    const paragraphs: Record<string, string> = {};
    for (const section of writingSections) {
      paragraphs[section.key] = "";
    }
    return paragraphs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionKeys]);

  const [essayParagraphs, setEssayParagraphs] = useState<Record<string, string>>(initialParagraphs);
  const [activeWritingHint, setActiveWritingHint] = useState<string | null>(null);

  // Reset state only when section structure changes (grade switch), not content
  const prevKeysRef = useRef(sectionKeys);
  useEffect(() => {
    if (prevKeysRef.current !== sectionKeys) {
      prevKeysRef.current = sectionKeys;
      setEssayParagraphs(initialParagraphs);
      setActiveWritingHint(null);
    }
  }, [sectionKeys, initialParagraphs]);

  const updateParagraph = (key: string, value: string) => {
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

  const isComplete = (() => {
    const values = Object.values(essayParagraphs);
    return values.length > 0 && values.every((v) => v.trim() !== "");
  })();

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
