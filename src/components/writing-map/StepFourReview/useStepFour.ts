import { useState, useMemo, useEffect, useRef } from "react";
import type { ChecklistItem } from "../../../data/writingMapConstants";

export const useStepFour = (checklistItems: ChecklistItem[]) => {
  const initialChecklist = useMemo(() => {
    const checklist: Record<string, boolean> = {};
    for (const item of checklistItems) {
      checklist[item.key] = false;
    }
    return checklist;
  }, [checklistItems]);

  const [checklist, setChecklist] = useState<Record<string, boolean>>(initialChecklist);

  // Reset state when checklistItems changes (grade switch)
  const prevItemsRef = useRef(checklistItems);
  useEffect(() => {
    if (prevItemsRef.current !== checklistItems) {
      prevItemsRef.current = checklistItems;
      setChecklist(initialChecklist);
    }
  }, [checklistItems, initialChecklist]);

  const toggleChecklist = (item: string) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;

  const isComplete = (() => {
    const values = Object.values(checklist);
    return values.length > 0 && values.every((value) => value === true);
  })();

  return {
    checklist,
    completedCount,
    isComplete,
    toggleChecklist,
  };
};
