import { GraduationCap, BookOpen, Sparkles } from "lucide-react";

interface GradeSelectorProps {
  onSelectGrade: (grade: number) => void;
}

const gradeInfo = [
  {
    grade: 6,
    label: "Lớp 6",
    essayType: "Viết bài văn trình bày ý kiến về một hiện tượng đời sống",
    wordCount: "~400 chữ",
    description: "Trình bày ý kiến về các hiện tượng trong cuộc sống hằng ngày",
    color: "from-blue-500 to-cyan-500",
    bgLight: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-300",
    hoverBorder: "hover:border-blue-400",
    iconBg: "bg-blue-500",
  },
  {
    grade: 7,
    label: "Lớp 7",
    essayType: "Viết bài văn nghị luận – Trình bày ý kiến tán thành/phản đối",
    wordCount: "~400 chữ",
    description:
      "Nghị luận về một vấn đề đời sống, thể hiện quan điểm tán thành hoặc phản đối",
    color: "from-emerald-500 to-green-500",
    bgLight: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-300",
    hoverBorder: "hover:border-emerald-400",
    iconBg: "bg-emerald-500",
  },
  {
    grade: 8,
    label: "Lớp 8",
    essayType: "Viết bài văn nghị luận – Con người với cộng đồng, đất nước",
    wordCount: "~400 chữ",
    description:
      "Nghị luận về mối quan hệ giữa con người với cộng đồng và đất nước",
    color: "from-purple-500 to-violet-500",
    bgLight: "from-purple-50 to-violet-50",
    borderColor: "border-purple-300",
    hoverBorder: "hover:border-purple-400",
    iconBg: "bg-purple-500",
  },
  {
    grade: 9,
    label: "Lớp 9",
    essayType: "Viết bài văn nghị luận – Đề xuất giải pháp cho vấn đề",
    wordCount: "~600 chữ",
    description:
      "Nghị luận đề xuất các giải pháp khả thi cho một vấn đề cần giải quyết",
    color: "from-orange-500 to-red-500",
    bgLight: "from-orange-50 to-red-50",
    borderColor: "border-orange-300",
    hoverBorder: "hover:border-orange-400",
    iconBg: "bg-orange-500",
  },
];

const GradeSelector = ({ onSelectGrade }: GradeSelectorProps) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-4">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Em đang học lớp mấy?
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
          Chọn lớp để hiển thị đề bài và hướng dẫn phù hợp với chương trình học
          của em
        </p>
      </div>

      {/* Grade cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {gradeInfo.map((info) => (
          <button
            key={info.grade}
            onClick={() => onSelectGrade(info.grade)}
            className={`group relative bg-gradient-to-br ${info.bgLight} rounded-2xl p-5 border-2 ${info.borderColor} ${info.hoverBorder} hover:shadow-lg transition-all duration-300 text-left overflow-hidden`}
          >
            {/* Decorative sparkle */}
            <Sparkles className="absolute top-3 right-3 w-4 h-4 text-gray-300 group-hover:text-yellow-400 transition-colors" />

            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 ${info.iconBg} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {info.label}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 bg-gradient-to-r ${info.color} text-white rounded-full font-medium`}
                  >
                    {info.wordCount}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {info.essayType}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {info.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GradeSelector;
