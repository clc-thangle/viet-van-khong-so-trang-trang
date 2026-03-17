import { type DragEvent, useState, useMemo, useEffect, useRef } from "react";
import type { TimYQuestion, OutlineSectionConfig } from "../../../data/writingMapConstants";

interface DragItem {
  id: string;
  label: string;
  value: string;
}

export const useStepTwo = (
  ideaAnswers: Record<string, string>,
  timYQuestions: TimYQuestion[],
  outlineSlotConfig: OutlineSectionConfig[]
) => {
  // Build initial slots from outline config
  const initialSlots = useMemo(() => {
    const slots: Record<string, string> = {};
    for (const section of outlineSlotConfig) {
      for (const item of section.items) {
        slots[item.key] = "";
      }
      if (section.subSection) {
        for (const row of section.subSection.rows) {
          slots[row.liLe] = "";
          slots[row.bangChung] = "";
        }
      }
    }
    return slots;
  }, [outlineSlotConfig]);

  const [outlineSlots, setOutlineSlots] = useState<Record<string, string>>(initialSlots);
  const [usedDragItems, setUsedDragItems] = useState<string[]>([]);
  const [selectedDragItem, setSelectedDragItem] = useState<DragItem | null>(null);

  // Reset state when outlineSlotConfig changes (grade switch)
  const prevConfigRef = useRef(outlineSlotConfig);
  useEffect(() => {
    if (prevConfigRef.current !== outlineSlotConfig) {
      prevConfigRef.current = outlineSlotConfig;
      setOutlineSlots(initialSlots);
      setUsedDragItems([]);
      setSelectedDragItem(null);
    }
  }, [outlineSlotConfig, initialSlots]);

  // Build outline items from idea answers dynamically
  const outlineItems = useMemo(() => {
    const items: DragItem[] = [];
    for (const q of timYQuestions) {
      if (q.subInputs && q.subInputs > 0) {
        for (let i = 1; i <= q.subInputs; i++) {
          const key = `${q.id}_${i}`;
          items.push({
            id: key,
            label: q.subLabels?.[i - 1] || `${q.label} ${i}`,
            value: ideaAnswers[key] || "",
          });
        }
      } else {
        items.push({
          id: q.id,
          label: q.label,
          value: ideaAnswers[q.id] || "",
        });
      }
    }
    return items;
  }, [timYQuestions, ideaAnswers]);

  const availableItems = outlineItems.filter(
    (item) => !usedDragItems.includes(item.id)
  );

  const filledCount = Object.values(outlineSlots).filter(
    (v) => v.trim() !== ""
  ).length;
  const totalSlots = Object.keys(outlineSlots).length;

  const handleDragStart = (e: DragEvent<HTMLDivElement>, item: DragItem) => {
    e.dataTransfer.setData("application/json", JSON.stringify(item));
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, slotKey: string) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    if (!data) return;
    const item = JSON.parse(data);
    setOutlineSlots((prev) => ({ ...prev, [slotKey]: item.value }));
    setUsedDragItems((prev) =>
      prev.includes(item.id) ? prev : [...prev, item.id]
    );
    setSelectedDragItem(null);
  };

  const handleItemClick = (item: DragItem) => {
    if (selectedDragItem && selectedDragItem.id === item.id) {
      setSelectedDragItem(null);
    } else {
      setSelectedDragItem(item);
    }
  };

  const handleSlotClick = (slotKey: string) => {
    if (selectedDragItem) {
      setOutlineSlots((prev) => ({
        ...prev,
        [slotKey]: selectedDragItem.value,
      }));
      setUsedDragItems((prev) =>
        prev.includes(selectedDragItem.id)
          ? prev
          : [...prev, selectedDragItem.id]
      );
      setSelectedDragItem(null);
    }
  };

  const updateOutlineSlot = (slotKey: string, value: string) => {
    setOutlineSlots((prev) => ({ ...prev, [slotKey]: value }));
  };

  const isComplete = (() => {
    const values = Object.values(outlineSlots);
    return values.length > 0 && values.every((value) => value.trim() !== "");
  })();

  return {
    outlineSlots,
    usedDragItems,
    selectedDragItem,
    outlineItems,
    availableItems,
    filledCount,
    totalSlots,
    isComplete,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleItemClick,
    handleSlotClick,
    updateOutlineSlot,
  };
};
