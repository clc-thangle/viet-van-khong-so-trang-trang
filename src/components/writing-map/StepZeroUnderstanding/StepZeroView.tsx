import {
  BookOpen,
  Sparkles,
  Lightbulb,
  CheckCircle,
  X,
} from "lucide-react";
import type { TopicQuiz } from "../../../data/writingMapConstants";

interface StepZeroViewProps {
  selectedTopic: string;
  understandingAnswers: Record<string, string>;
  randomTopics: string[];
  topicQuizData: Record<string, TopicQuiz>;
  handleSelectTopic: (topic: string) => void;
  handleRefreshTopics: () => void;
  updateUnderstandingAnswer: (field: string, value: string) => void;
  setUnderstandingAnswers: (answers: Record<string, string>) => void;
  essayType: string;
}

const StepZeroView = ({
  selectedTopic,
  understandingAnswers,
  randomTopics,
  topicQuizData,
  handleSelectTopic,
  handleRefreshTopics,
  updateUnderstandingAnswer,
  setUnderstandingAnswers,
  essayType,
}: StepZeroViewProps) => {
  const currentQuiz = topicQuizData[selectedTopic];

  return (
    <div className="space-y-6">
      {/* Dạng bài */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
        <p className="text-sm font-bold text-indigo-700 uppercase tracking-wide">
          {essayType}
        </p>
      </div>

      {/* Chọn đề bài - random 5 đề từ tổng 10 đề */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h4 className="font-bold text-gray-900">
              Em hãy chọn 1 trong các đề
            </h4>
          </div>
          <button
            onClick={handleRefreshTopics}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            title="Đổi đề khác"
          >
            <Sparkles className="w-4 h-4" />
            Đổi đề khác
          </button>
        </div>
        <ul className="space-y-3">
          {randomTopics.map((topic, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleSelectTopic(topic)}
                className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                  selectedTopic === topic
                    ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-300"
                    : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      selectedTopic === topic
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span
                    className={`leading-relaxed ${
                      selectedTopic === topic
                        ? "text-blue-900 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {topic}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
        {selectedTopic && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 animate-slide-up">
            <p className="text-sm text-green-800">
              ✓ Đề đã chọn: <strong>{selectedTopic}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Phần Hiểu đề - 3 câu trắc nghiệm */}
      {selectedTopic &&
        currentQuiz &&
        (() => {
          const allAnswered =
            understandingAnswers.q1 !== "" &&
            understandingAnswers.q2 !== "" &&
            understandingAnswers.q3 !== "";
          const q1Correct =
            understandingAnswers.q1 === currentQuiz.q1.correct;
          const q2Correct =
            understandingAnswers.q2 === currentQuiz.q2.correct;
          const q3Correct =
            understandingAnswers.q3 === currentQuiz.q3.correct;
          const allCorrect =
            allAnswered && q1Correct && q2Correct && q3Correct;
          const hasWrong = allAnswered && !allCorrect;

          return (
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 animate-slide-up">
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Hiểu đề
                  </h4>
                  <p className="text-sm text-gray-500">
                    Trả lời 3 câu hỏi trắc nghiệm dưới đây để phân tích đề
                    bài
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Câu 1: Từ khóa quan trọng nhất */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold ${allAnswered ? (q1Correct ? "bg-green-500" : "bg-red-400") : "bg-amber-500"}`}
                    >
                      1
                    </span>
                    <label className="font-semibold text-gray-800">
                      Từ khóa quan trọng nhất ở đề bài này là gì?
                    </label>
                    {allAnswered && q1Correct && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {allAnswered && !q1Correct && (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="space-y-2 ml-8">
                    {currentQuiz.q1.options?.map((option, idx) => {
                      const isSelected =
                        understandingAnswers.q1 === option;
                      const isCorrect = option === currentQuiz.q1.correct;
                      let optionStyle =
                        "border-gray-200 bg-white hover:border-amber-300";
                      if (allAnswered) {
                        if (isSelected && isCorrect) {
                          optionStyle =
                            "border-green-500 bg-green-50 ring-2 ring-green-300";
                        } else if (isSelected && !isCorrect) {
                          optionStyle =
                            "border-red-400 bg-red-50 ring-2 ring-red-300";
                        } else if (isCorrect) {
                          optionStyle = "border-green-400 bg-green-50";
                        }
                      } else if (isSelected) {
                        optionStyle =
                          "border-amber-500 bg-amber-50 ring-2 ring-amber-300";
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() =>
                            !allAnswered &&
                            updateUnderstandingAnswer("q1", option)
                          }
                          disabled={allAnswered}
                          className={`w-full text-left p-3 rounded-xl transition-all border-2 flex items-center gap-3 ${optionStyle}`}
                        >
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                              allAnswered
                                ? isSelected && isCorrect
                                  ? "bg-green-500 border-green-500 text-white"
                                  : isSelected && !isCorrect
                                    ? "bg-red-400 border-red-400 text-white"
                                    : isCorrect
                                      ? "bg-green-400 border-green-400 text-white"
                                      : "border-gray-300 text-gray-500"
                                : isSelected
                                  ? "bg-amber-500 border-amber-500 text-white"
                                  : "border-gray-300 text-gray-500"
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span
                            className={`text-sm ${isSelected ? "font-semibold" : ""} ${
                              allAnswered
                                ? isSelected && !isCorrect
                                  ? "text-red-700"
                                  : isSelected && isCorrect
                                    ? "text-green-700"
                                    : isCorrect
                                      ? "text-green-700"
                                      : "text-gray-700"
                                : isSelected
                                  ? "text-amber-800"
                                  : "text-gray-700"
                            }`}
                          >
                            {option}
                          </span>
                          {allAnswered && isSelected && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {allAnswered && isSelected && !isCorrect && (
                            <X className="w-5 h-5 text-red-400 ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Câu 2: Xác định yêu cầu của đề */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold ${allAnswered ? (q2Correct ? "bg-green-500" : "bg-red-400") : "bg-amber-500"}`}
                    >
                      2
                    </span>
                    <label className="font-semibold text-gray-800">
                      Xác định yêu cầu của đề
                    </label>
                    {allAnswered && q2Correct && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {allAnswered && !q2Correct && (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="space-y-2 ml-8">
                    {(currentQuiz.q2.options || []).map((option, idx) => {
                      const isSelected = understandingAnswers.q2 === option;
                      const isCorrect = option === currentQuiz.q2.correct;
                      let optionStyle =
                        "border-gray-200 bg-white hover:border-amber-300";
                      if (allAnswered) {
                        if (isSelected && isCorrect) {
                          optionStyle =
                            "border-green-500 bg-green-50 ring-2 ring-green-300";
                        } else if (isSelected && !isCorrect) {
                          optionStyle =
                            "border-red-400 bg-red-50 ring-2 ring-red-300";
                        } else if (isCorrect) {
                          optionStyle = "border-green-400 bg-green-50";
                        }
                      } else if (isSelected) {
                        optionStyle =
                          "border-amber-500 bg-amber-50 ring-2 ring-amber-300";
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() =>
                            !allAnswered &&
                            updateUnderstandingAnswer("q2", option)
                          }
                          disabled={allAnswered}
                          className={`w-full text-left p-3 rounded-xl transition-all border-2 flex items-center gap-3 ${optionStyle}`}
                        >
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                              allAnswered
                                ? isSelected && isCorrect
                                  ? "bg-green-500 border-green-500 text-white"
                                  : isSelected && !isCorrect
                                    ? "bg-red-400 border-red-400 text-white"
                                    : isCorrect
                                      ? "bg-green-400 border-green-400 text-white"
                                      : "border-gray-300 text-gray-500"
                                : isSelected
                                  ? "bg-amber-500 border-amber-500 text-white"
                                  : "border-gray-300 text-gray-500"
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span
                            className={`text-sm ${isSelected ? "font-semibold" : ""} ${
                              allAnswered
                                ? isSelected && !isCorrect
                                  ? "text-red-700"
                                  : isSelected && isCorrect
                                    ? "text-green-700"
                                    : isCorrect
                                      ? "text-green-700"
                                      : "text-gray-700"
                                : isSelected
                                  ? "text-amber-800"
                                  : "text-gray-700"
                            }`}
                          >
                            {option}
                          </span>
                          {allAnswered && isSelected && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {allAnswered && isSelected && !isCorrect && (
                            <X className="w-5 h-5 text-red-400 ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Câu 3: Vấn đề đề bài muốn bàn luận */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 text-white rounded-full flex items-center justify-center text-sm font-bold ${allAnswered ? (q3Correct ? "bg-green-500" : "bg-red-400") : "bg-amber-500"}`}
                    >
                      3
                    </span>
                    <label className="font-semibold text-gray-800">
                      Câu nào dưới đây diễn đạt đúng về vấn đề mà đề bài
                      muốn bàn luận?
                    </label>
                    {allAnswered && q3Correct && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {allAnswered && !q3Correct && (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                  <div className="space-y-2 ml-8">
                    {currentQuiz.q3.options?.map((option, idx) => {
                      const isSelected =
                        understandingAnswers.q3 === option;
                      const isCorrect = option === currentQuiz.q3.correct;
                      let optionStyle =
                        "border-gray-200 bg-white hover:border-amber-300";
                      if (allAnswered) {
                        if (isSelected && isCorrect) {
                          optionStyle =
                            "border-green-500 bg-green-50 ring-2 ring-green-300";
                        } else if (isSelected && !isCorrect) {
                          optionStyle =
                            "border-red-400 bg-red-50 ring-2 ring-red-300";
                        } else if (isCorrect) {
                          optionStyle = "border-green-400 bg-green-50";
                        }
                      } else if (isSelected) {
                        optionStyle =
                          "border-amber-500 bg-amber-50 ring-2 ring-amber-300";
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() =>
                            !allAnswered &&
                            updateUnderstandingAnswer("q3", option)
                          }
                          disabled={allAnswered}
                          className={`w-full text-left p-3 rounded-xl transition-all border-2 flex items-center gap-3 ${optionStyle}`}
                        >
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                              allAnswered
                                ? isSelected && isCorrect
                                  ? "bg-green-500 border-green-500 text-white"
                                  : isSelected && !isCorrect
                                    ? "bg-red-400 border-red-400 text-white"
                                    : isCorrect
                                      ? "bg-green-400 border-green-400 text-white"
                                      : "border-gray-300 text-gray-500"
                                : isSelected
                                  ? "bg-amber-500 border-amber-500 text-white"
                                  : "border-gray-300 text-gray-500"
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span
                            className={`text-sm ${isSelected ? "font-semibold" : ""} ${
                              allAnswered
                                ? isSelected && !isCorrect
                                  ? "text-red-700"
                                  : isSelected && isCorrect
                                    ? "text-green-700"
                                    : isCorrect
                                      ? "text-green-700"
                                      : "text-gray-700"
                                : isSelected
                                  ? "text-amber-800"
                                  : "text-gray-700"
                            }`}
                          >
                            {option}
                          </span>
                          {allAnswered && isSelected && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {allAnswered && isSelected && !isCorrect && (
                            <X className="w-5 h-5 text-red-400 ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Kết quả */}
              {allAnswered && (
                <div
                  className={`mt-6 bg-white rounded-xl p-5 border-2 shadow-sm animate-slide-up ${allCorrect ? "border-green-300" : "border-red-300"}`}
                >
                  {allCorrect ? (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <h5 className="font-bold text-green-700">
                          Xuất sắc! Em đã hiểu đề bài rồi!
                        </h5>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                            ✅ Từ khóa quan trọng:
                          </span>
                          <span className="text-sm text-gray-800 font-medium">
                            {understandingAnswers.q1}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                            ✅ Yêu cầu của đề:
                          </span>
                          <span className="text-sm text-gray-800 font-medium">
                            {understandingAnswers.q2}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                            ✅ Vấn đề bàn luận:
                          </span>
                          <span className="text-sm text-gray-800 font-medium">
                            {understandingAnswers.q3}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <X className="w-5 h-5 text-red-500" />
                        <h5 className="font-bold text-red-700">
                          Có câu trả lời chưa đúng, em hãy xem lại nhé!
                        </h5>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Em đã trả lời đúng{" "}
                        {
                          [q1Correct, q2Correct, q3Correct].filter(
                            Boolean,
                          ).length
                        }
                        /3 câu. Hãy nhấn nút bên dưới để thử lại.
                      </p>
                      <button
                        onClick={() =>
                          setUnderstandingAnswers({
                            q1: "",
                            q2: "",
                            q3: "",
                          })
                        }
                        className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all text-sm font-semibold"
                      >
                        Thử lại
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })()}
    </div>
  );
};

export default StepZeroView;
