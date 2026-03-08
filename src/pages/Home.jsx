import { Link } from "react-router-dom";
import { Map, ClipboardList, Bot, CheckSquare, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Bản đồ viết văn",
      description: "Hướng dẫn 4 bước: Hiểu đề - Tạo ý - Viết - Tự kiểm tra",
      icon: Map,
      path: "/writing-map",
      color: "bg-blue-500",
    },
    {
      title: "Thẻ nhiệm vụ",
      description: "Bài tập phân hóa 3 mức độ: Dễ - Trung bình - Khó",
      icon: ClipboardList,
      path: "/tasks",
      color: "bg-green-500",
    },
    {
      title: "AI trợ lý viết văn",
      description: "Gợi ý và hướng dẫn, không viết thay bạn",
      icon: Bot,
      path: "/ai-assistant",
      color: "bg-purple-500",
    },
    {
      title: "Tự đánh giá",
      description: "Đánh giá năng lực viết văn của bản thân",
      icon: CheckSquare,
      path: "/self-assessment",
      color: "bg-orange-500",
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
            className="text-lg lg:text-xl text-blue-50 mb-6 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Học liệu số hỗ trợ học sinh lớp 7-9 rèn luyện kỹ năng viết đoạn văn
            nghị luận theo phương pháp bài bản và khoa học.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/writing-map"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
            >
              Bắt đầu học
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/tasks"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 border-2 border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
            >
              Xem thẻ nhiệm vụ
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          Các mô-đun học tập
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="card p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>

              <div className="relative flex items-start gap-4">
                <div
                  className={`${feature.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
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
              <span className="text-primary-600 font-bold mt-0.5">✓</span>
              <span>Phù hợp với Chương trình Giáo dục phổ thông 2018</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-0.5">✓</span>
              <span>Hướng đến phát triển năng lực viết văn nghị luận</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-0.5">✓</span>
              <span>Học sinh tự học, tự khám phá theo hướng dẫn</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-0.5">✓</span>
              <span>Không cung cấp bài văn mẫu hoàn chỉnh</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold mt-0.5">✓</span>
              <span>AI chỉ gợi ý, không viết thay học sinh</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
