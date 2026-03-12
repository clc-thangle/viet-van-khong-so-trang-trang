import { Link } from "react-router-dom";
import {
  Map,
  /* ClipboardList, Bot, CheckSquare, */ ArrowRight,
  BookOpen,
  Lightbulb,
  PenTool,
  CheckCircle,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface StepInfo {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const Home = () => {
  const steps: StepInfo[] = [
    {
      step: 1,
      title: "Hiểu đề",
      description: "Phân tích đề bài, xác định yêu cầu và phạm vi nghị luận",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: 2,
      title: "Tạo ý",
      description: "Hình thành luận điểm, tìm dẫn chứng và lý lẽ thuyết phục",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
    },
    {
      step: 3,
      title: "Lập dàn ý",
      description: "Sắp xếp các ý theo trình tự logic, xây dựng bố cục bài văn",
      icon: Map,
      color: "from-green-500 to-emerald-600",
    },
    {
      step: 4,
      title: "Viết bài",
      description: "Viết từng đoạn văn hoàn chỉnh theo dàn ý đã lập",
      icon: PenTool,
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="relative">
          <h1 className="text-3xl lg:text-5xl leading-normal font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 animate-slide-up">
            VIẾT VĂN KHÔNG SỢ TRẮNG TRANG
          </h1>
          <p
            className="text-lg lg:text-xl text-blue-50 mb-6 leading-relaxed max-w-2xl animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Học liệu số hỗ trợ học sinh lớp 6-9 rèn luyện kỹ năng viết đoạn văn
            nghị luận theo phương pháp bài bản và khoa học.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/writing-map"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
            >
              <Map className="w-5 h-5" />
              Bắt đầu với Bản đồ viết văn
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Writing Map Feature - Highlighted */}
      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Quy trình 4 bước viết văn nghị luận
        </h2>
        <p className="text-gray-500 mb-6">
          Bản đồ viết văn giúp bạn đi từ hiểu đề đến hoàn thành bài viết một
          cách có hệ thống
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, index) => (
            <Link
              key={item.step}
              to="/writing-map"
              className="card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Step number badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors duration-300">
                {item.step}
              </div>

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA to Writing Map */}
        <div className="mt-6 text-center">
          <Link
            to="/writing-map"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
          >
            <Map className="w-5 h-5" />
            Khám phá Bản đồ viết văn
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div
        className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg animate-slide-up"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl"></div>
        <div className="relative">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span> Về học liệu này
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span>Phù hợp với Chương trình Giáo dục phổ thông 2018</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span>Hướng đến phát triển năng lực viết văn nghị luận</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span>Học sinh tự học, tự khám phá theo hướng dẫn</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span>Không cung cấp bài văn mẫu hoàn chỉnh</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
              <span>Hướng dẫn từng bước để học sinh tự viết bài</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
