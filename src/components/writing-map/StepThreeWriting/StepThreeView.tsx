import { Lightbulb } from "lucide-react";
import type { WritingSection } from "../../../data/writingMapConstants";

interface StepThreeViewProps {
  essayParagraphs: Record<string, string>;
  activeWritingHint: string | null;
  filledParagraphs: number;
  totalParagraphs: number;
  updateParagraph: (key: string, value: string) => void;
  toggleWritingHint: (hintId: string) => void;
  getWordCount: (text: string) => number;
  writingSections: WritingSection[];
}

const StepThreeView = ({
  essayParagraphs,
  activeWritingHint,
  filledParagraphs,
  totalParagraphs,
  updateParagraph,
  toggleWritingHint,
  getWordCount,
  writingSections,
}: StepThreeViewProps) => {
  const writingProgress = (filledParagraphs / totalParagraphs) * 100;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200">
        <h4 className="font-bold text-gray-900 mb-2">
          📊 Tiến độ viết bài
        </h4>
        <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-500"
            style={{ width: `${writingProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {filledParagraphs}/{totalParagraphs} đoạn đã viết (
          {Math.round(writingProgress)}%)
        </p>
      </div>

      {/* Hướng dẫn */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <p className="text-sm text-amber-800">
          <strong>💡 Hướng dẫn:</strong> Viết từng đoạn dựa vào dàn ý em
          đã lập ở bước trước. Mỗi đoạn hiển thị dàn ý tương ứng để em tham
          khảo.
        </p>
      </div>

      {/* Các section viết */}
      <div className="space-y-5">
        {writingSections.map((section) => {
          const allOutlineItems = section.outlineItems;

          const sectionBgColor =
            section.color === "blue"
              ? "bg-blue-500"
              : section.color === "purple"
                ? "bg-purple-500"
                : "bg-orange-500";

          const sectionBorderColor =
            section.color === "blue"
              ? "border-blue-200"
              : section.color === "purple"
                ? "border-purple-200"
                : "border-orange-200";

          const sectionLightBg =
            section.color === "blue"
              ? "bg-blue-50"
              : section.color === "purple"
                ? "bg-purple-50"
                : "bg-orange-50";

          const hasContent = (essayParagraphs[section.key] || "").trim() !== "";

          return (
            <div
              key={section.key}
              className={`bg-white rounded-xl border-2 ${sectionBorderColor} overflow-hidden shadow-sm`}
            >
              {/* Section header */}
              <div
                className={`px-4 py-2.5 ${sectionBgColor} text-white font-bold text-sm flex items-center justify-between`}
              >
                <div className="flex items-center gap-2">
                  <span>{section.title}</span>
                  <button
                    onClick={() => toggleWritingHint(section.key)}
                    className={`flex-shrink-0 p-1 rounded-lg transition-all hover:scale-110 ${activeWritingHint === section.key ? "bg-white/30 ring-2 ring-white/50" : "hover:bg-white/20"}`}
                    title="Gợi ý viết bài"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-200" />
                  </button>
                </div>
                {hasContent && (
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    ✓ Đã viết
                  </span>
                )}
              </div>

              {/* Hint popup */}
              {activeWritingHint === section.key && (
                <div className="mx-4 mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-semibold text-amber-700 text-xs uppercase">
                      Gợi ý cách viết
                    </span>
                  </div>
                  <div className="space-y-1">
                    {section.hints.map((hint, i) => (
                      <p key={i} className="text-amber-800">
                        • {hint}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 space-y-3">
                {/* Dàn ý tham khảo */}
                <div
                  className={`${sectionLightBg} rounded-lg p-3 border ${sectionBorderColor}`}
                >
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    📋 Dàn ý tham khảo
                  </p>
                  <div className="space-y-1.5">
                    {allOutlineItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="inline-block mt-0.5 px-1.5 py-0.5 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded flex-shrink-0">
                          {item.label}
                        </span>
                        <span className="text-sm text-gray-700">
                          {item.value || "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompt */}
                <p className="text-sm font-medium text-gray-700">
                  ✏️ {section.prompt}:
                </p>

                {/* Textarea */}
                <textarea
                  value={essayParagraphs[section.key] || ""}
                  onChange={(e) =>
                    updateParagraph(section.key, e.target.value)
                  }
                  placeholder={`Viết ${section.title.toLowerCase()} tại đây...`}
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none min-h-[120px] transition-all text-sm leading-relaxed resize-y"
                />

                {/* Word count */}
                {(essayParagraphs[section.key] || "").trim() && (
                  <p className="text-xs text-gray-400 text-right">
                    {getWordCount(essayParagraphs[section.key])} từ
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Xem trước bài viết hoàn chỉnh */}
      {filledParagraphs > 0 && (
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200">
          <h4 className="font-bold text-gray-900 mb-3">
            📄 Xem trước bài viết
          </h4>
          <div className="bg-white rounded-lg p-4 border border-pink-100 prose prose-sm max-w-none">
            {writingSections.map((section) =>
              (essayParagraphs[section.key] || "").trim() ? (
                <p key={section.key} className="text-gray-700 leading-relaxed mb-3 indent-8">
                  {essayParagraphs[section.key]}
                </p>
              ) : null
            )}
          </div>
          {filledParagraphs === totalParagraphs && (
            <p className="text-xs text-gray-500 mt-2 text-right">
              Tổng: ~
              {
                Object.values(essayParagraphs)
                  .join(" ")
                  .trim()
                  .split(/\s+/).length
              }{" "}
              từ
            </p>
          )}
        </div>
      )}

      {/* Thông báo hoàn thành */}
      {filledParagraphs === totalParagraphs && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center animate-scale-in shadow-xl">
          <div className="text-4xl mb-2">✍️</div>
          <h4 className="text-xl font-bold mb-1">Bài viết hoàn chỉnh!</h4>
          <p className="text-sm opacity-90">
            Em đã viết xong tất cả các đoạn. Hãy chuyển sang bước Kiểm
            tra!
          </p>
        </div>
      )}
    </div>
  );
};

export default StepThreeView;
