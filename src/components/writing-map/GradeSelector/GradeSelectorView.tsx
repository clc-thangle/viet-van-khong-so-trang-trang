import { BookOpen, GraduationCap, ArrowLeft } from "lucide-react";

interface GradeOption {
  grade: number;
  label: string;
  essayType: string;
  wordCount: number;
  color: string;
  bgGradient: string;
  description: string;
}

const GRADE_OPTIONS: GradeOption[] = [
  {
    grade: 6,
    label: "Lớp 6",
    essayType: "Trình bày ý kiến về hiện tượng đời sống",
    wordCount: 400,
    color: "text-emerald-600",
    bgGradient: "from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100",
    description: "Viết bài văn trình bày ý kiến của em về một hiện tượng trong đời sống hằng ngày",
  },
  {
    grade: 7,
    label: "Lớp 7",
    essayType: "Nghị luận xã hội",
    wordCount: 400,
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400 hover:shadow-blue-100",
    description: "Viết bài văn nghị luận trình bày suy nghĩ về một ý kiến liên quan đến đạo lí hoặc hiện tượng đời sống",
  },
  {
    grade: 8,
    label: "Lớp 8",
    essayType: "Nghị luận về vấn đề đời sống",
    wordCount: 500,
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-violet-50 border-purple-200 hover:border-purple-400 hover:shadow-purple-100",
    description: "Viết bài văn nghị luận về vấn đề đời sống — con người trong mối quan hệ với cộng đồng, đất nước",
  },
  {
    grade: 9,
    label: "Lớp 9",
    essayType: "Nghị luận về vấn đề cần giải quyết",
    wordCount: 600,
    color: "text-orange-600",
    bgGradient: "from-orange-50 to-amber-50 border-orange-200 hover:border-orange-400 hover:shadow-orange-100",
    description: "Viết bài văn nghị luận đề xuất giải pháp cho một vấn đề cần giải quyết trong đời sống",
  },
];

interface GradeSelectorViewProps {
  onSelectGrade: (grade: number) => void;
  selectedGrade?: number | null;
  onBack?: () => void;
}

const GradeSelectorView = ({ onSelectGrade, selectedGrade, onBack }: GradeSelectorViewProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-white/20 transition-all"
              title="Quay lại"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <GraduationCap className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Bản đồ viết bài văn số</h1>
        </div>
        <p className="text-blue-100 ml-11">
          Chọn lớp học của em để bắt đầu luyện viết văn nghị luận
        </p>
      </div>

      {/* Grade Selection */}
      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-500 p-3 rounded-xl">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Chọn lớp học</h2>
            <p className="text-gray-500">Mỗi lớp có dạng bài và yêu cầu khác nhau</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GRADE_OPTIONS.map((option) => (
            <button
              key={option.grade}
              onClick={() => onSelectGrade(option.grade)}
              className={`
                relative text-left p-6 rounded-2xl border-2 transition-all duration-300
                bg-gradient-to-br ${option.bgGradient}
                hover:shadow-lg hover:-translate-y-1
                ${selectedGrade === option.grade ? "ring-2 ring-offset-2 ring-indigo-500 scale-[1.02]" : ""}
              `}
            >
              {/* Grade badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-3xl font-extrabold ${option.color}`}>
                  {option.label}
                </span>
                <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                  ~{option.wordCount} chữ
                </span>
              </div>

              {/* Essay type */}
              <h3 className={`font-bold text-sm mb-2 ${option.color}`}>
                {option.essayType}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-400">
                <span>Bắt đầu</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-300">
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="text-2xl">💡</span> Lưu ý
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Hãy chọn đúng lớp học của em để luyện tập phù hợp</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Mỗi lớp có dạng đề, câu hỏi tìm ý và cấu trúc dàn ý riêng</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Em có thể quay lại để chọn lớp khác bất cứ lúc nào</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GradeSelectorView;
