import { type DragEvent, useState } from "react";

interface OutlineSlots {
  gioiThieu: string;
  yKien: string;
  thaiDo: string;
  thucChat: string;
  liLe1: string;
  bangChung1: string;
  liLe2: string;
  bangChung2: string;
  liLe3: string;
  bangChung3: string;
  khangDinh: string;
  yNghia: string;
}

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
  [key: string]: string;
}

interface DragItem {
  id: string;
  label: string;
  value: string;
}

export const useStepTwo = (ideaAnswers: IdeaAnswers) => {
  const [outlineSlots, setOutlineSlots] = useState<OutlineSlots>({
    gioiThieu: "",
    yKien: "",
    thaiDo: "",
    thucChat: "",
    liLe1: "",
    bangChung1: "",
    liLe2: "",
    bangChung2: "",
    liLe3: "",
    bangChung3: "",
    khangDinh: "",
    yNghia: "",
  });
  const [usedDragItems, setUsedDragItems] = useState<string[]>([]);
  const [selectedDragItem, setSelectedDragItem] = useState<DragItem | null>(null);

  const outlineItems = [
    { id: "q1", label: "Vấn đề bàn luận", value: ideaAnswers.q1 },
    { id: "q2", label: "Ý kiến", value: ideaAnswers.q2 },
    { id: "q3", label: "Thái độ của em", value: ideaAnswers.q3 },
    { id: "q4", label: "Thực chất ý kiến", value: ideaAnswers.q4 },
    { id: "q5_1", label: "Lí lẽ 1", value: ideaAnswers.q5_1 },
    { id: "q5_2", label: "Lí lẽ 2", value: ideaAnswers.q5_2 },
    { id: "q5_3", label: "Lí lẽ 3", value: ideaAnswers.q5_3 },
    { id: "q6_1", label: "Bằng chứng 1", value: ideaAnswers.q6_1 },
    { id: "q6_2", label: "Bằng chứng 2", value: ideaAnswers.q6_2 },
    { id: "q6_3", label: "Bằng chứng 3", value: ideaAnswers.q6_3 },
    { id: "q7", label: "Khẳng định", value: ideaAnswers.q7 },
    { id: "q8", label: "Ý nghĩa", value: ideaAnswers.q8 },
  ];

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

  const handleDrop = (e: DragEvent<HTMLDivElement>, slotKey: keyof OutlineSlots) => {
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

  const handleSlotClick = (slotKey: keyof OutlineSlots) => {
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

  const updateOutlineSlot = (slotKey: keyof OutlineSlots, value: string) => {
    setOutlineSlots((prev) => ({ ...prev, [slotKey]: value }));
  };

  const isComplete = Object.values(outlineSlots).every(
    (value) => value.trim() !== ""
  );

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
