import {
  BookOpen,
  PenTool,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import {
  topicSpecificHints,
  generalHints,
} from "../../../data/writingMapConstants";

interface StepOneViewProps {
  selectedTopic: string;
  ideaAnswers: Record<string, string>;
  activeIdeaHint: string | null;
  activeTopicHint: string | null;
  isComplete: boolean;
  updateIdeaAnswer: (field: string, value: string) => void;
  toggleIdeaHint: (hintId: string) => void;
  toggleTopicHint: (hintId: string) => void;
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
}: StepOneViewProps) => {
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
          {/* Câu hỏi 1 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Vấn đề đời sống cần bàn luận là gì?
              </label>
              <button
                onClick={() => toggleIdeaHint("q1")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q1" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q1")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q1" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q1" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q1.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q1" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q1}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q1}
              onChange={(e) => updateIdeaAnswer("q1", e.target.value)}
              placeholder="Nhập vấn đề đời sống cần bàn luận..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>

          {/* Câu hỏi 2 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Ý kiến nào cần được tán thành/phản đối?
              </label>
              <button
                onClick={() => toggleIdeaHint("q2")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q2" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q2")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q2" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q2" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q2.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q2" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q2}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q2}
              onChange={(e) => updateIdeaAnswer("q2", e.target.value)}
              placeholder="Nhập ý kiến cần tán thành hoặc phản đối..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>

          {/* Câu hỏi 3 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Nêu suy nghĩ của em về ý kiến đó?
              </label>
              <button
                onClick={() => toggleIdeaHint("q3")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q3" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q3")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q3" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q3" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q3.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q3" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q3}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q3}
              onChange={(e) => updateIdeaAnswer("q3", e.target.value)}
              placeholder="Nhập suy nghĩ của em..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>

          {/* Câu hỏi 4 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Trình bày thực chất của ý kiến.
              </label>
              <button
                onClick={() => toggleIdeaHint("q4")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q4" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q4")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q4" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q4" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q4.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    • {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q4" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q4}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q4}
              onChange={(e) => updateIdeaAnswer("q4", e.target.value)}
              placeholder="Nhập thực chất của ý kiến..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>

          {/* Câu hỏi 5 - 3 ô input */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Theo em, những khía cạnh nào của vấn đề khiến em tán
                thành/phản đối ý kiến trên?
              </label>
              <button
                onClick={() => toggleIdeaHint("q5")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q5" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q5")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q5" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q5" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q5.map((hint, i) => (
                  <p
                    key={i}
                    className={`text-amber-800 ${i === 0 ? "font-medium" : ""}`}
                  >
                    {i > 0 ? `• ${hint}` : hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q5" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q5_1}
                  </p>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q5_2}
                  </p>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q5_3}
                  </p>
                </div>
              )}
            <p className="text-xs text-gray-500 mb-3 ml-8">
              (nêu ít nhất 2 khía cạnh)
            </p>
            <div className="space-y-3 pl-8">
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q5_1}
                  onChange={(e) =>
                    updateIdeaAnswer("q5_1", e.target.value)
                  }
                  placeholder="Nhập khía cạnh thứ nhất..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q5_2}
                  onChange={(e) =>
                    updateIdeaAnswer("q5_2", e.target.value)
                  }
                  placeholder="Nhập khía cạnh thứ hai..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q5_3}
                  onChange={(e) =>
                    updateIdeaAnswer("q5_3", e.target.value)
                  }
                  placeholder="Nhập khía cạnh thứ ba..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Câu hỏi 6 - 3 ô input */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Có ví dụ nào chứng minh điều đó không?
              </label>
              <button
                onClick={() => toggleIdeaHint("q6")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q6" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q6")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q6" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q6" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q6.map((hint, i) => (
                  <p
                    key={i}
                    className={`text-amber-800 ${i === 0 ? "font-medium" : ""}`}
                  >
                    {i > 0 ? `• ${hint}` : hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q6" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q6_1}
                  </p>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q6_2}
                  </p>
                  <p className="text-blue-800">
                    • {topicSpecificHints[selectedTopic].q6_3}
                  </p>
                </div>
              )}
            <p className="text-xs text-gray-500 mb-3 ml-8">
              Tìm bằng chứng cho mỗi ý kiến ở trên
            </p>
            <div className="space-y-3 pl-8">
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q6_1}
                  onChange={(e) =>
                    updateIdeaAnswer("q6_1", e.target.value)
                  }
                  placeholder="Nhập bằng chứng cho ý kiến 1..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q6_2}
                  onChange={(e) =>
                    updateIdeaAnswer("q6_2", e.target.value)
                  }
                  placeholder="Nhập bằng chứng cho ý kiến 2..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={ideaAnswers.q6_3}
                  onChange={(e) =>
                    updateIdeaAnswer("q6_3", e.target.value)
                  }
                  placeholder="Nhập bằng chứng cho ý kiến 3..."
                  className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Câu hỏi 7 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Từ những điều đã phân tích, em có thể khẳng định điều gì
                về ý kiến này?
              </label>
              <button
                onClick={() => toggleIdeaHint("q7")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q7" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q7")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q7" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q7" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q7.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q7" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q7}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q7}
              onChange={(e) => updateIdeaAnswer("q7", e.target.value)}
              placeholder="Nhập kết luận khẳng định của em..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>

          {/* Câu hỏi 8 */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              <label className="font-semibold text-gray-800 flex-1">
                Việc tán thành này có ý nghĩa gì?
              </label>
              <button
                onClick={() => toggleIdeaHint("q8")}
                className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeIdeaHint === "q8" ? "bg-amber-100 ring-2 ring-amber-300" : "hover:bg-amber-50"}`}
                title="Gợi ý chung"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
              </button>
              {selectedTopic && topicSpecificHints[selectedTopic] && (
                <button
                  onClick={() => toggleTopicHint("q8")}
                  className={`flex-shrink-0 p-1.5 rounded-lg transition-all hover:scale-110 ${activeTopicHint === "q8" ? "bg-blue-100 ring-2 ring-blue-300" : "hover:bg-blue-50"}`}
                  title="Gợi ý theo đề bài"
                >
                  <BookOpen className="w-4 h-4 text-blue-500" />
                </button>
              )}
            </div>
            {activeIdeaHint === "q8" && (
              <div className="mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-sm animate-slide-up">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-amber-700 text-xs uppercase">
                    Gợi ý
                  </span>
                </div>
                {generalHints.q8.map((hint, i) => (
                  <p key={i} className="text-amber-800">
                    • {hint}
                  </p>
                ))}
              </div>
            )}
            {activeTopicHint === "q8" &&
              topicSpecificHints[selectedTopic] && (
                <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm animate-slide-up">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-semibold text-blue-700 text-xs uppercase">
                      Gợi ý theo đề
                    </span>
                  </div>
                  <p className="text-blue-800">
                    {topicSpecificHints[selectedTopic].q8}
                  </p>
                </div>
              )}
            <input
              type="text"
              value={ideaAnswers.q8}
              onChange={(e) => updateIdeaAnswer("q8", e.target.value)}
              placeholder="Nhập ý nghĩa của việc tán thành..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Kết quả tìm ý */}
        {isComplete && (
          <div className="mt-6 bg-white rounded-xl p-5 border-2 border-green-300 shadow-sm animate-slide-up">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h5 className="font-bold text-gray-900">
                Dàn ý bài văn nghị luận của em
              </h5>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Vấn đề bàn luận:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q1}"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Ý kiến tán thành/phản đối:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q2}"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Suy nghĩ của em:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q3}"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Thực chất ý kiến:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q4}"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Lí do tán thành/phản đối:
                </span>
                <div className="text-gray-800">
                  <p>• Ý 1: "{ideaAnswers.q5_1}"</p>
                  <p>• Ý 2: "{ideaAnswers.q5_2}"</p>
                  <p>• Ý 3: "{ideaAnswers.q5_3}"</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Bằng chứng:
                </span>
                <div className="text-gray-800">
                  <p>• BC 1: "{ideaAnswers.q6_1}"</p>
                  <p>• BC 2: "{ideaAnswers.q6_2}"</p>
                  <p>• BC 3: "{ideaAnswers.q6_3}"</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Khẳng định:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q7}"</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600 min-w-[180px]">
                  📌 Ý nghĩa:
                </span>
                <span className="text-gray-800">"{ideaAnswers.q8}"</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOneView;
