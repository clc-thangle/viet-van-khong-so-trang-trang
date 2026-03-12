import { type DragEvent } from "react";
import { OUTLINE_SLOT_CONFIG } from "../../../data/writingMapConstants";

interface DragItem {
  id: string;
  label: string;
  value: string;
}

interface StepTwoViewProps {
  outlineSlots: Record<string, string>;
  selectedDragItem: DragItem | null;
  availableItems: DragItem[];
  filledCount: number;
  totalSlots: number;
  handleDragStart: (e: DragEvent<HTMLDivElement>, item: DragItem) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>, slotKey: string) => void;
  handleItemClick: (item: DragItem) => void;
  handleSlotClick: (slotKey: string) => void;
  updateOutlineSlot: (slotKey: string, value: string) => void;
}

const StepTwoView = ({
  outlineSlots,
  selectedDragItem,
  availableItems,
  filledCount,
  totalSlots,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleItemClick,
  handleSlotClick,
  updateOutlineSlot,
}: StepTwoViewProps) => {
  const outlineProgress = (filledCount / totalSlots) * 100;

  const renderSlotInput = (slotKey: string, label: string) => {
    const hasValue = outlineSlots[slotKey].trim() !== "";
    return (
      <div
        key={slotKey}
        onClick={() => handleSlotClick(slotKey)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, slotKey)}
        className="relative"
      >
        <input
          type="text"
          value={outlineSlots[slotKey]}
          onChange={(e) => updateOutlineSlot(slotKey, e.target.value)}
          placeholder={
            selectedDragItem
              ? `👆 Nhấn để đặt "${selectedDragItem.label}" vào đây`
              : `Kéo hoặc nhập "${label}"...`
          }
          className={`w-full p-3 border-2 rounded-xl focus:outline-none transition-all text-sm ${
            hasValue
              ? "border-green-300 bg-green-50/50 focus:border-green-500"
              : selectedDragItem
                ? "border-purple-400 bg-purple-50 focus:border-purple-500 animate-pulse"
                : "border-gray-300 bg-white focus:border-purple-500"
          }`}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
        <h4 className="font-bold text-gray-900 mb-2">
          📊 Tiến độ lập dàn ý
        </h4>
        <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${outlineProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {filledCount}/{totalSlots} ô đã điền (
          {Math.round(outlineProgress)}%)
        </p>
      </div>

      {/* Hướng dẫn */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <p className="text-sm text-amber-800">
          <strong>💡 Hướng dẫn:</strong> Kéo thả (hoặc nhấn chọn) các ý từ
          Bước 2 vào đúng vị trí trong dàn ý bên dưới. Sau khi kéo xuống,
          em vẫn có thể sửa lại nội dung.
        </p>
      </div>

      {/* Pool: Draggable items */}
      <div className="bg-white rounded-xl p-4 border-2 border-purple-200 shadow-sm">
        <h4 className="font-bold text-gray-900 mb-3">
          🧩 Các ý từ Bước 2
        </h4>
        {availableItems.length === 0 ? (
          <p className="text-sm text-green-600 font-medium">
            ✅ Tất cả các ý đã được sắp xếp vào dàn ý!
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {availableItems.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onClick={() => handleItemClick(item)}
                className={`px-3 py-2 rounded-lg border-2 cursor-grab active:cursor-grabbing transition-all text-sm select-none max-w-full ${
                  selectedDragItem && selectedDragItem.id === item.id
                    ? "border-purple-500 bg-purple-100 ring-2 ring-purple-300 shadow-md"
                    : "border-gray-300 bg-white hover:border-purple-300 hover:shadow-sm"
                }`}
              >
                <span className="font-semibold text-purple-700">
                  {item.label}:
                </span>{" "}
                <span className="text-gray-600 line-clamp-1">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Khung dàn ý với input slots */}
      <div className="space-y-4">
        {OUTLINE_SLOT_CONFIG.map((section) => (
          <div
            key={section.section}
            className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-sm"
          >
            <div
              className={`px-4 py-2.5 ${
                section.color === "blue"
                  ? "bg-blue-500"
                  : section.color === "purple"
                    ? "bg-purple-500"
                    : "bg-orange-500"
              } text-white font-bold text-sm`}
            >
              {section.section}
            </div>
            <div className="p-4 space-y-3">
              {section.items.map((slot) => (
                <div key={slot.key}>
                  <p className="text-sm font-medium text-gray-700 mb-1.5">
                    + {slot.label}:
                  </p>
                  {renderSlotInput(slot.key, slot.label)}
                </div>
              ))}
              {section.subSection && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    + {section.subSection.label}:
                  </p>
                  <div className="space-y-3 pl-3 border-l-2 border-purple-200">
                    {section.subSection.rows.map((row) => (
                      <div
                        key={row.num}
                        className="grid grid-cols-1 md:grid-cols-2 gap-2"
                      >
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">
                            Lí lẽ {row.num}:
                          </p>
                          {renderSlotInput(row.liLe, `Lí lẽ ${row.num}`)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">
                            Bằng chứng {row.num}:
                          </p>
                          {renderSlotInput(
                            row.bangChung,
                            `Bằng chứng ${row.num}`,
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Thông báo hoàn thành */}
      {filledCount === totalSlots && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center animate-scale-in shadow-xl">
          <div className="text-4xl mb-2">🎯</div>
          <h4 className="text-xl font-bold mb-1">Dàn ý hoàn chỉnh!</h4>
          <p className="text-sm opacity-90">
            Em đã sắp xếp xong tất cả các ý. Hãy chuyển sang bước Kiểm
            tra!
          </p>
        </div>
      )}
    </div>
  );
};

export default StepTwoView;
