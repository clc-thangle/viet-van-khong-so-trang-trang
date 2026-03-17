import {
  BookOpen,
  PenTool,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import type { TimYQuestion } from "../../../data/writingMapConstants";

interface StepOneViewProps {
  selectedTopic: string;
  ideaAnswers: Record<string, string>;
  activeIdeaHint: string | null;
  activeTopicHint: string | null;
  isComplete: boolean;
  updateIdeaAnswer: (field: string, value: string) => void;
  toggleIdeaHint: (hintId: string) => void;
  toggleTopicHint: (hintId: string) => void;
  timYQuestions: TimYQuestion[];
  topicSpecificHints: Record<string, Record<string, string>>;
  generalHints: Record<string, string[]>;
}

const StepOneView = ({
  selectedTopic,
  ideaAnswers,
  activeIdeaHint,
  activeTopicHint,
  isComplete,
  updateIdeaAnswer,
  toggleIdeaHint,
  toggleTopicHint,
  timYQuestions,
  topicSpecificHints,
  generalHints,
}: StepOneViewProps) => {
  const currentTopicHints = topicSpecificHints[selectedTopic];

  return (
    <div className="space-y-6">
      {/* Hiển thị lại đề đã chọn */}
      {selectedTopic && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">
                Đề bài đã chọn
              </p>
              <p className="text-gray-800 font-medium leading-relaxed">
                {selectedTopic}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tìm ý */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <PenTool className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Tìm ý</h4>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Trả lời các câu hỏi sau để tìm ý cho bài văn
        </p>

        <div className="space-y-6">
          {timYQuestions.map((question, qIndex) => (
            <div key={question.id} className="relative">
              {/* Question header with hints */}
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {qIndex + 1}
                </span>
                <label className="font-semibold text-gray-800 flex-1">
                  {question.label}
                </label>
                {/* General hint button */}
                <button
                  onClick={() => toggleIdeaHint(question.id)}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === question.id ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                  title="Gợi ý chung"
                >
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                </button>
                {/* Topic-specific hint button */}
                {currentTopicHints && (
                  <button
                    onClick={() => toggleTopicHint(question.id)}
                    className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === question.id ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                    title="Gợi ý theo đề bài"
                  >
                    <BookOpen className="w-4 h-4 text-blue-500" />
                  </button>
                )}
              </div>

              {/* General hint content */}
              {activeIdeaHint === question.id && generalHints[question.id] && (
                <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-semibold text-amber-700 text-xs uppercase">
                      Gợi ý
                    </span>
                  </div>
                  {generalHints[question.id].map((hint, i) => (
                    <p key={i} className="text-amber-800">
                      {generalHints[question.id].length > 1 ? `• ${hint}` : hint}
                    </p>
                  ))}
                </div>
              )}

              {/* Topic-specific hint content */}
              {activeTopicHint === question.id && currentTopicHints && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  {question.subInputs ? (
                    // Show multiple hints for sub-input questions
                    Array.from({ length: question.subInputs }).map((_, i) => {
                      const hintKey = `${question.id}_${i + 1}`;
                      return currentTopicHints[hintKey] ? (
                        <p key={i} className="text-blue-800">
                          • {currentTopicHints[hintKey]}
                        </p>
                      ) : null;
                    })
                  ) : (
                    currentTopicHints[question.id] && (
                      <p className="text-blue-800">
                        {currentTopicHints[question.id]}
                      </p>
                    )
                  )}
                </div>
              )}

              {/* Input fields */}
              {question.subInputs ? (
                <div className="space-y-3 pl-8">
                  {question.subLabels ? (
                    question.subLabels.map((subLabel, i) => (
                      <div key={i}>
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          {subLabel}:
                        </p>
                        <input
                          type="text"
                          value={ideaAnswers[`${question.id}_${i + 1}`] || ""}
                          onChange={(e) =>
                            updateIdeaAnswer(`${question.id}_${i + 1}`, e.target.value)
                          }
                          placeholder={question.placeholder}
                          className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    ))
                  ) : (
                    Array.from({ length: question.subInputs }).map((_, i) => (
                      <div key={i}>
                        <input
                          type="text"
                          value={ideaAnswers[`${question.id}_${i + 1}`] || ""}
                          onChange={(e) =>
                            updateIdeaAnswer(`${question.id}_${i + 1}`, e.target.value)
                          }
                          placeholder={`${question.placeholder} (${i + 1})`}
                          className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  value={ideaAnswers[question.id] || ""}
                  onChange={(e) =>
                    updateIdeaAnswer(question.id, e.target.value)
                  }
                  placeholder={question.placeholder}
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              )}
            </div>
          ))}
        </div>

        {/* Kết quả tìm ý */}
        {isComplete && (
          <div className="mt-6 bg-white rounded-xl p-5 border-2 border-green-300 shadow-sm animate-slide-up">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h5 className="font-bold text-gray-900">
                Tuyệt vời! Em đã hoàn thành phần tìm ý
              </h5>
            </div>
            <div className="space-y-2 text-sm">
              {timYQuestions.map((question) => (
                <div key={question.id}>
                  {question.subInputs ? (
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px] flex-shrink-0">
                        📌 {question.label}:
                      </span>
                      <div className="text-gray-800">
                        {Array.from({ length: question.subInputs }).map((_, i) => (
                          <p key={i}>
                            • {question.subLabels?.[i] || `Ý ${i + 1}`}: "{ideaAnswers[`${question.id}_${i + 1}`]}"
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">
                        📌 {question.label}:
                      </span>
                      <span className="text-gray-800">
                        "{ideaAnswers[question.id]}"
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOneView;
