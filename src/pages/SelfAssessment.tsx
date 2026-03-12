import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface CriterionCategory {
  id: number;
  category: string;
  items: string[];
}

const SelfAssessment = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const criteria: CriterionCategory[] = [
    {
      id: 1,
      category: 'Hiểu đề',
      items: [
        'Em có xác định được từ khóa chính trong đề bài?',
        'Em hiểu rõ yêu cầu của đề bài (hỏi gì, viết về điều gì)?',
        'Em biết đề bài yêu cầu thể loại văn bản gì?',
      ],
    },
    {
      id: 2,
      category: 'Tạo ý',
      items: [
        'Em có lập dàn ý trước khi viết?',
        'Các ý trong dàn ý có liên quan đến đề bài?',
        'Em sắp xếp các ý theo thứ tự hợp lý?',
        'Em có tìm được dẫn chứng, ví dụ minh họa?',
      ],
    },
    {
      id: 3,
      category: 'Viết',
      items: [
        'Em viết câu mở đoạn (câu chủ đề) rõ ràng?',
        'Em trình bày đầy đủ luận điểm và dẫn chứng?',
        'Em giải thích, phân tích các luận điểm?',
        'Em viết câu kết đoạn khẳng định lại ý chính?',
      ],
    },
    {
      id: 4,
      category: 'Tự kiểm tra',
      items: [
        'Em kiểm tra lại chính tả, ngữ pháp?',
        'Bài viết có bám sát đề bài không?',
        'Mạch văn có logic, dễ hiểu không?',
        'Em đã hoàn thiện câu từ, từ ngữ?',
      ],
    },
  ];

  const handleAnswerChange = (categoryId: number, itemIndex: number, value: string) => {
    setAnswers({
      ...answers,
      [`${categoryId}-${itemIndex}`]: value,
    });
  };

  const calculateResult = () => {
    const totalQuestions = criteria.reduce((sum, cat) => sum + cat.items.length, 0);
    const answeredYes = Object.values(answers).filter(val => val === 'yes').length;
    const answeredNo = Object.values(answers).filter(val => val === 'no').length;
    const answeredPartial = Object.values(answers).filter(val => val === 'partial').length;

    const score = (answeredYes * 100 + answeredPartial * 50) / (totalQuestions * 100) * 100;

    return {
      totalQuestions,
      answeredYes,
      answeredNo,
      answeredPartial,
      score: Math.round(score),
    };
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: 'Xuất sắc', color: 'text-green-600', bg: 'bg-green-50' };
    if (score >= 60) return { level: 'Khá', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (score >= 40) return { level: 'Trung bình', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { level: 'Cần cố gắng', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const handleSubmit = () => {
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? calculateResult() : null;
  const scoreLevel = result ? getScoreLevel(result.score) : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Phiếu tự đánh giá năng lực viết văn
        </h1>
        <p className="text-gray-600">
          Đánh giá kỹ năng viết đoạn văn nghị luận của bản thân
        </p>
      </div>

      {/* Result Summary */}
      {showResult && result && (
        <div className={`card p-6 ${scoreLevel.bg} border-2 border-${scoreLevel.color}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Kết quả đánh giá</h2>
            <div className={`text-4xl font-bold ${scoreLevel.color}`}>
              {result.score}%
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tổng câu hỏi</p>
              <p className="text-2xl font-bold text-gray-900">{result.totalQuestions}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Làm được</p>
              <p className="text-2xl font-bold text-green-600">{result.answeredYes}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Làm được một phần</p>
              <p className="text-2xl font-bold text-yellow-600">{result.answeredPartial}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Chưa làm được</p>
              <p className="text-2xl font-bold text-red-600">{result.answeredNo}</p>
            </div>
          </div>

          <div className={`${scoreLevel.bg} rounded-lg p-4`}>
            <p className={`text-lg font-semibold ${scoreLevel.color}`}>
              Mức độ: {scoreLevel.level}
            </p>
            <p className="text-gray-700 mt-2">
              {result.score >= 80 && 'Xuất sắc! Em đã nắm vững các kỹ năng viết văn nghị luận.'}
              {result.score >= 60 && result.score < 80 && 'Tốt! Em đã làm được phần lớn, hãy tiếp tục rèn luyện.'}
              {result.score >= 40 && result.score < 60 && 'Em đang trên đường phát triển. Hãy tập trung vào các điểm còn yếu.'}
              {result.score < 40 && 'Đừng nản chí! Hãy xem lại từng bước và thực hành nhiều hơn.'}
            </p>
          </div>

          <button
            onClick={handleReset}
            className="btn-secondary mt-4 w-full"
          >
            Làm lại đánh giá
          </button>
        </div>
      )}

      {/* Assessment Form */}
      {!showResult && (
        <div className="space-y-6">
          {criteria.map((category) => (
            <div key={category.id} className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-900 mb-3">{item}</p>

                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`${category.id}-${index}`}
                          value="yes"
                          checked={answers[`${category.id}-${index}`] === 'yes'}
                          onChange={() => handleAnswerChange(category.id, index, 'yes')}
                          className="w-4 h-4 text-green-600"
                        />
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">Làm được</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`${category.id}-${index}`}
                          value="partial"
                          checked={answers[`${category.id}-${index}`] === 'partial'}
                          onChange={() => handleAnswerChange(category.id, index, 'partial')}
                          className="w-4 h-4 text-yellow-600"
                        />
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        <span className="text-gray-700">Làm được một phần</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`${category.id}-${index}`}
                          value="no"
                          checked={answers[`${category.id}-${index}`] === 'no'}
                          onChange={() => handleAnswerChange(category.id, index, 'no')}
                          className="w-4 h-4 text-red-600"
                        />
                        <XCircle className="w-5 h-5 text-red-600" />
                        <span className="text-gray-700">Chưa làm được</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn-primary text-lg px-12"
              disabled={Object.keys(answers).length === 0}
            >
              Xem kết quả đánh giá
            </button>
          </div>
        </div>
      )}

      {/* Guidelines */}
      <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
        <h3 className="font-semibold text-gray-900 mb-2">
          📋 Hướng dẫn sử dụng
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Trả lời trung thực để đánh giá đúng năng lực của mình</li>
          <li>• Chọn "Làm được" nếu em tự tin thực hiện tốt tiêu chí đó</li>
          <li>• Chọn "Làm được một phần" nếu em còn lúng túng hoặc chưa thành thạo</li>
          <li>• Chọn "Chưa làm được" nếu em chưa biết hoặc chưa làm được tiêu chí đó</li>
          <li>• Kết quả giúp em biết mình cần rèn luyện thêm ở đâu</li>
        </ul>
      </div>
    </div>
  );
};

export default SelfAssessment;
