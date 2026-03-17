import type { ChecklistItem, WritingSection } from "../../../data/writingMapConstants";

interface StepFourViewProps {
  checklist: Record<string, boolean>;
  completedCount: number;
  toggleChecklist: (item: string) => void;
  essayParagraphs: Record<string, string>;
  checklistItems: ChecklistItem[];
  writingSections: WritingSection[];
}

const StepFourView = ({
  checklist,
  completedCount,
  toggleChecklist,
  essayParagraphs,
  checklistItems,
  writingSections,
}: StepFourViewProps) => {
  const progress = (completedCount / checklistItems.length) * 100;

  return (
    <div className="space-y-6">
      {/* Bài viết để kiểm tra */}
      <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-5 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-3">📄 Bài viết của em</h4>
        <div className="bg-white rounded-lg p-4 border border-gray-100 prose prose-sm max-w-none">
          {writingSections.map((section) =>
            (essayParagraphs[section.key] || "").trim() ? (
              <p key={section.key} className="text-gray-700 leading-relaxed mb-3 indent-8">
                {essayParagraphs[section.key]}
              </p>
            ) : null
          )}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-right">
          Tổng: ~
          {Object.values(essayParagraphs).join(" ").trim().split(/\s+/).length}{" "}
          từ
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3">📊 Tiến độ kiểm tra</h4>
        <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-700 mt-2">
          {completedCount}/{checklistItems.length} tiêu chí đã kiểm tra (
          {Math.round(progress)}%)
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">
          ✅ Em hãy kiểm tra lại bài viết của mình, nếu chỗ nào chưa đạt thì
          quay lại bước trước để bổ sung, chỉnh sửa
        </h3>
        {checklistItems.map((item) => (
          <button
            key={item.key}
            onClick={() => toggleChecklist(item.key)}
            className={`w-full p-5 rounded-xl text-left transition-all border-2 ${
              checklist[item.key]
                ? "border-green-500 bg-green-50 shadow-md"
                : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  checklist[item.key]
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {checklist[item.key] && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">{item.label}</h5>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {completedCount === checklistItems.length && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center animate-scale-in shadow-xl">
          <div className="text-5xl mb-3">🎉</div>
          <h4 className="text-2xl font-bold mb-2">Xuất sắc!</h4>
          <p>
            Em đã hoàn thành tất cả các bước. Bài văn của em đã sẵn sàng. Em có
            thể Download bài viết của mình
          </p>
        </div>
      )}
    </div>
  );
};

export default StepFourView;
