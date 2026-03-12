import { useState } from 'react';
import { Target, Star, Flame } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Task {
  id: number;
  level: string;
  title: string;
  description: string;
  objective: string;
  estimatedTime: string;
}

interface Level {
  value: string;
  label: string;
  icon: LucideIcon;
}

const Tasks = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const tasks: Task[] = [
    {
      id: 1,
      level: 'easy',
      title: 'Phân tích đề: "Nói không với rác thải nhựa"',
      description: 'Xác định từ khóa và yêu cầu của đề bài',
      objective: 'Rèn kỹ năng hiểu đề',
      estimatedTime: '15 phút',
    },
    {
      id: 2,
      level: 'easy',
      title: 'Tạo dàn ý cho đề: "Lợi ích của việc đọc sách"',
      description: 'Liệt kê 3-4 luận điểm chính và sắp xếp thứ tự hợp lý',
      objective: 'Rèn kỹ năng lập dàn ý',
      estimatedTime: '20 phút',
    },
    {
      id: 3,
      level: 'medium',
      title: 'Viết câu mở đoạn cho nhiều đề bài khác nhau',
      description: 'Thực hành viết câu chủ đề cho 5 đề bài mẫu',
      objective: 'Thành thạo cách viết câu mở đoạn',
      estimatedTime: '30 phút',
    },
    {
      id: 4,
      level: 'medium',
      title: 'Tìm dẫn chứng cho luận điểm',
      description: 'Với luận điểm cho trước, tìm 2-3 ví dụ minh họa phù hợp',
      objective: 'Rèn kỹ năng tìm dẫn chứng',
      estimatedTime: '25 phút',
    },
    {
      id: 5,
      level: 'medium',
      title: 'Phân tích và sửa lỗi đoạn văn mẫu',
      description: 'Tìm lỗi về logic, mạch văn trong đoạn văn cho trước',
      objective: 'Rèn tư duy phản biện',
      estimatedTime: '30 phút',
    },
    {
      id: 6,
      level: 'hard',
      title: 'Viết đoạn văn hoàn chỉnh: "Vai trò của gia đình"',
      description: 'Viết đoạn văn nghị luận hoàn chỉnh với đủ 4 bước',
      objective: 'Vận dụng tổng hợp các kỹ năng',
      estimatedTime: '45 phút',
    },
    {
      id: 7,
      level: 'hard',
      title: 'So sánh và đối chiếu hai quan điểm',
      description: 'Viết đoạn văn phân tích ưu nhược điểm của 2 quan điểm khác nhau',
      objective: 'Rèn tư duy biện chứng',
      estimatedTime: '50 phút',
    },
    {
      id: 8,
      level: 'hard',
      title: 'Viết đoạn văn với đề bài tự chọn',
      description: 'Tự đặt đề và viết đoạn văn nghị luận về chủ đề em quan tâm',
      objective: 'Phát triển tư duy sáng tạo',
      estimatedTime: '60 phút',
    },
  ];

  const levels: Level[] = [
    { value: 'all', label: 'Tất cả', icon: Target },
    { value: 'easy', label: 'Dễ', icon: Star },
    { value: 'medium', label: 'Trung bình', icon: Target },
    { value: 'hard', label: 'Khó', icon: Flame },
  ];

  const filteredTasks = selectedLevel === 'all'
    ? tasks
    : tasks.filter(task => task.level === selectedLevel);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'easy':
        return <span className="badge-easy">Dễ</span>;
      case 'medium':
        return <span className="badge-medium">Trung bình</span>;
      case 'hard':
        return <span className="badge-hard">Khó</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thẻ nhiệm vụ số
        </h1>
        <p className="text-gray-600">
          Bài tập phân hóa theo 3 mức độ: Dễ - Trung bình - Khó
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {levels.map((level) => (
          <button
            key={level.value}
            onClick={() => setSelectedLevel(level.value)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
              ${selectedLevel === level.value
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <level.icon className="w-4 h-4" />
            {level.label}
          </button>
        ))}
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTasks.map((task) => (
          <div key={task.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {getLevelBadge(task.level)}
                  <span className="text-sm text-gray-500">
                    ⏱️ {task.estimatedTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {task.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              {task.description}
            </p>

            <div className="bg-blue-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Mục tiêu:</span> {task.objective}
              </p>
            </div>

            <button className="btn-primary w-full">
              Bắt đầu làm bài
            </button>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
        <h3 className="font-semibold text-gray-900 mb-2">
          📌 Hướng dẫn sử dụng
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Mức Dễ:</strong> Phù hợp khi mới bắt đầu học viết văn nghị luận</li>
          <li>• <strong>Mức Trung bình:</strong> Dành cho em đã nắm cơ bản và muốn rèn kỹ năng</li>
          <li>• <strong>Mức Khó:</strong> Thử thách cho em đã thành thạo và muốn phát triển cao hơn</li>
          <li>• Nên làm theo thứ tự từ dễ đến khó để tiến bộ từng bước</li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
