export interface QuizQuestion {
  options?: string[];
  correct: string;
}

export interface TopicQuiz {
  q1: QuizQuestion;
  q2: QuizQuestion;
  q3: QuizQuestion;
}

export interface StepConfig {
  id: number;
  title: string;
  icon: string;
  color: string;
  description: string;
}

export interface OutlineSlotItem {
  key: string;
  label: string;
}

export interface OutlineSubSectionRow {
  liLe: string;
  bangChung: string;
  num: number;
}

export interface OutlineSubSection {
  label: string;
  rows: OutlineSubSectionRow[];
}

export interface OutlineSectionConfig {
  section: string;
  color: string;
  items: OutlineSlotItem[];
  subSection?: OutlineSubSection;
}

export interface ChecklistItem {
  key: string;
  label: string;
  description: string;
}

export interface WritingSectionOutlineItem {
  label: string;
  value: string;
}

export interface WritingSection {
  key: string;
  title: string;
  color: string;
  prompt: string;
  hints: string[];
  outlineItems: WritingSectionOutlineItem[];
}

export interface TopicSpecificHintSet {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5_1: string;
  q5_2: string;
  q5_3: string;
  q6_1: string;
  q6_2: string;
  q6_3: string;
  q7: string;
  q8: string;
}

export interface OutlineSlots {
  gioiThieu: string;
  yKien: string;
  thaiDo: string;
  thucChat: string;
  liLe1: string;
  bangChung1: string;
  liLe2: string;
  bangChung2: string;
  liLe3: string;
  bangChung3: string;
  khangDinh: string;
  yNghia: string;
}

// Mock data: Tất cả 20 đề (gộp đạo lí + hiện tượng)
export const allTopics: string[] = [
  // Đề đạo lí
  'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Trung thực là phẩm chất quý giá nhất của con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Sống có trách nhiệm là biểu hiện của người trưởng thành". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  // Đề hiện tượng
  'Có ý kiến cho rằng: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Hiện tượng gian lận trong thi cử đang làm mất đi giá trị thực sự của giáo dục". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Ô nhiễm môi trường là thách thức lớn nhất mà nhân loại đang phải đối mặt". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Hiện tượng sống ảo trên mạng xã hội khiến con người đánh mất chính mình". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Hiện tượng lãng phí thực phẩm là vấn đề đáng báo động trong xã hội hiện đại". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Văn hóa ứng xử nơi công cộng đang xuống cấp nghiêm trọng". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Hiện tượng học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Biến đổi khí hậu đang tác động trực tiếp đến đời sống con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó',
];

// Xác định loại đề dựa trên vị trí (0-9: đạo lí, 10-19: hiện tượng)
export function getTopicType(topic: string): string {
  const idx = allTopics.indexOf(topic);
  return idx >= 0 && idx < 10 ? "dao-ly" : "hien-tuong";
}

// Mock data: Dữ liệu trắc nghiệm cho phần Hiểu đề (3 câu hỏi cho mỗi đề)
export const topicQuizData: Record<string, TopicQuiz> = {
  // ===== ĐỀ ĐẠO LÍ =====
  'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Lòng hiếu thảo", "Đức hạnh", "Nền tảng"],
        correct: "Lòng hiếu thảo",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về vai trò của lòng hiếu thảo đối với việc hình thành đạo đức con người",
          "Bàn về cách thể hiện sự kính trọng với người lớn tuổi",
          "Bàn về truyền thống gia đình trong xã hội hiện đại",
        ],
        correct:
          "Bàn về vai trò của lòng hiếu thảo đối với việc hình thành đạo đức con người",
      },
    },
  'Có ý kiến cho rằng: "Trung thực là phẩm chất quý giá nhất của con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Trung thực", "Phẩm chất", "Con người"],
        correct: "Trung thực",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về giá trị và ý nghĩa của tính trung thực trong cuộc sống",
          "Bàn về cách rèn luyện đạo đức cho học sinh",
          "Bàn về tầm quan trọng của giáo dục nhân cách",
        ],
        correct:
          "Bàn về giá trị và ý nghĩa của tính trung thực trong cuộc sống",
      },
    },
  'Có ý kiến cho rằng: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Lòng khoan dung", "Hạnh phúc", "Thanh thản"],
        correct: "Lòng khoan dung",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về vai trò của lòng khoan dung trong việc mang lại hạnh phúc cho con người",
          "Bàn về cách sống lạc quan, tích cực",
          "Bàn về ý nghĩa của sự tha thứ trong tình bạn",
        ],
        correct:
          "Bàn về vai trò của lòng khoan dung trong việc mang lại hạnh phúc cho con người",
      },
    },
  'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Sự kiên trì", "Thành công", "Chìa khóa"],
        correct: "Sự kiên trì",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về vai trò của sự kiên trì trên con đường đạt đến thành công",
          "Bàn về những yếu tố giúp con người thành đạt trong cuộc sống",
          "Bàn về tầm quan trọng của việc đặt mục tiêu",
        ],
        correct:
          "Bàn về vai trò của sự kiên trì trên con đường đạt đến thành công",
      },
    },
  'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Tình yêu thương", "Sức mạnh", "Thế giới"],
        correct: "Tình yêu thương",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về sức mạnh và ý nghĩa của tình yêu thương trong việc thay đổi thế giới",
          "Bàn về cách xây dựng một xã hội văn minh",
          "Bàn về tầm quan trọng của lòng nhân ái trong gia đình",
        ],
        correct:
          "Bàn về sức mạnh và ý nghĩa của tình yêu thương trong việc thay đổi thế giới",
      },
    },
  'Có ý kiến cho rằng: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Lòng dũng cảm", "Nỗi sợ hãi", "Vượt qua"],
        correct: "Lòng dũng cảm",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về bản chất thực sự của lòng dũng cảm - vượt qua nỗi sợ hãi",
          "Bàn về cách rèn luyện ý chí cho học sinh",
          "Bàn về vai trò của sự tự tin trong cuộc sống",
        ],
        correct:
          "Bàn về bản chất thực sự của lòng dũng cảm - vượt qua nỗi sợ hãi",
      },
    },
  'Có ý kiến cho rằng: "Sống có trách nhiệm là biểu hiện của người trưởng thành". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Trách nhiệm", "Trưởng thành", "Biểu hiện"],
        correct: "Trách nhiệm",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về mối quan hệ giữa tinh thần trách nhiệm và sự trưởng thành của con người",
          "Bàn về cách giáo dục thanh niên sống tự lập",
          "Bàn về vai trò của gia đình trong việc hình thành nhân cách",
        ],
        correct:
          "Bàn về mối quan hệ giữa tinh thần trách nhiệm và sự trưởng thành của con người",
      },
    },
  'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Lòng biết ơn", "Tâm hồn", "Cao đẹp"],
        correct: "Lòng biết ơn",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về ý nghĩa của lòng biết ơn đối với nhân cách con người",
          "Bàn về truyền thống uống nước nhớ nguồn của dân tộc",
          "Bàn về cách thể hiện tình cảm với thầy cô giáo",
        ],
        correct:
          "Bàn về ý nghĩa của lòng biết ơn đối với nhân cách con người",
      },
    },
  'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Sự tự tin", "Bước đầu tiên", "Thành công"],
        correct: "Sự tự tin",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về vai trò của sự tự tin như điều kiện khởi đầu để đạt thành công",
          "Bàn về những bí quyết để thành công trong học tập",
          "Bàn về cách vượt qua sự tự ti ở tuổi học trò",
        ],
        correct:
          "Bàn về vai trò của sự tự tin như điều kiện khởi đầu để đạt thành công",
      },
    },
  'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Đoàn kết", "Sức mạnh", "Chia rẽ"],
        correct: "Đoàn kết",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về vai trò của đoàn kết trong việc tạo nên sức mạnh tập thể",
          "Bàn về cách xây dựng tinh thần đồng đội trong lớp học",
          "Bàn về tầm quan trọng của hợp tác quốc tế",
        ],
        correct:
          "Bàn về vai trò của đoàn kết trong việc tạo nên sức mạnh tập thể",
      },
    },
  // ===== ĐỀ HIỆN TƯỢNG =====
  'Có ý kiến cho rằng: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Nghiện mạng xã hội", "Giới trẻ", "Ảnh hưởng"],
        correct: "Nghiện mạng xã hội",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về tác hại của việc nghiện mạng xã hội đối với thế hệ trẻ",
          "Bàn về lợi ích của công nghệ trong đời sống",
          "Bàn về cách sử dụng internet hiệu quả",
        ],
        correct:
          "Bàn về tác hại của việc nghiện mạng xã hội đối với thế hệ trẻ",
      },
    },
  'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Bạo lực học đường", "Nhức nhối", "Giải quyết"],
        correct: "Bạo lực học đường",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về mức độ nghiêm trọng của bạo lực học đường và sự cần thiết phải giải quyết triệt để",
          "Bàn về cách xây dựng trường học thân thiện",
          "Bàn về vai trò của giáo viên trong việc quản lý lớp học",
        ],
        correct:
          "Bàn về mức độ nghiêm trọng của bạo lực học đường và sự cần thiết phải giải quyết triệt để",
      },
    },
  'Có ý kiến cho rằng: "Hiện tượng gian lận trong thi cử đang làm mất đi giá trị thực sự của giáo dục". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Gian lận thi cử", "Giáo dục", "Giá trị thực sự"],
        correct: "Gian lận thi cử",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về tác hại của gian lận thi cử đối với giá trị đích thực của giáo dục",
          "Bàn về cách cải cách hệ thống thi cử ở Việt Nam",
          "Bàn về tầm quan trọng của việc đánh giá học sinh",
        ],
        correct:
          "Bàn về tác hại của gian lận thi cử đối với giá trị đích thực của giáo dục",
      },
    },
  'Có ý kiến cho rằng: "Ô nhiễm môi trường là thách thức lớn nhất mà nhân loại đang phải đối mặt". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Ô nhiễm môi trường", "Nhân loại", "Thách thức"],
        correct: "Ô nhiễm môi trường",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về mức độ nghiêm trọng của ô nhiễm môi trường như thách thức lớn nhất của nhân loại",
          "Bàn về cách phát triển năng lượng tái tạo",
          "Bàn về trách nhiệm của doanh nghiệp đối với môi trường",
        ],
        correct:
          "Bàn về mức độ nghiêm trọng của ô nhiễm môi trường như thách thức lớn nhất của nhân loại",
      },
    },
  'Có ý kiến cho rằng: "Hiện tượng sống ảo trên mạng xã hội khiến con người đánh mất chính mình". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Sống ảo", "Mạng xã hội", "Đánh mất chính mình"],
        correct: "Sống ảo",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về tác hại của lối sống ảo trên mạng xã hội khiến con người mất đi giá trị thật",
          "Bàn về cách xây dựng hình ảnh cá nhân trên mạng",
          "Bàn về ảnh hưởng của truyền thông đến giới trẻ",
        ],
        correct:
          "Bàn về tác hại của lối sống ảo trên mạng xã hội khiến con người mất đi giá trị thật",
      },
    },
  'Có ý kiến cho rằng: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Đọc sách", "Thiết bị điện tử", "Thói quen"],
        correct: "Đọc sách",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về thực trạng thói quen đọc sách đang suy giảm do sự phát triển của thiết bị điện tử",
          "Bàn về lợi ích của việc học trực tuyến",
          "Bàn về cách phát triển văn hóa đọc cho học sinh",
        ],
        correct:
          "Bàn về thực trạng thói quen đọc sách đang suy giảm do sự phát triển của thiết bị điện tử",
      },
    },
  'Có ý kiến cho rằng: "Hiện tượng lãng phí thực phẩm là vấn đề đáng báo động trong xã hội hiện đại". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Lãng phí thực phẩm", "Xã hội hiện đại", "Đáng báo động"],
        correct: "Lãng phí thực phẩm",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về mức độ nghiêm trọng của hiện tượng lãng phí thực phẩm trong xã hội ngày nay",
          "Bàn về cách tiết kiệm chi tiêu trong gia đình",
          "Bàn về vấn đề an toàn vệ sinh thực phẩm",
        ],
        correct:
          "Bàn về mức độ nghiêm trọng của hiện tượng lãng phí thực phẩm trong xã hội ngày nay",
      },
    },
  'Có ý kiến cho rằng: "Văn hóa ứng xử nơi công cộng đang xuống cấp nghiêm trọng". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Văn hóa ứng xử", "Công cộng", "Xuống cấp"],
        correct: "Văn hóa ứng xử",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về thực trạng văn hóa ứng xử nơi công cộng đang suy giảm nghiêm trọng",
          "Bàn về cách giáo dục nếp sống văn minh cho học sinh",
          "Bàn về vai trò của pháp luật trong việc duy trì trật tự xã hội",
        ],
        correct:
          "Bàn về thực trạng văn hóa ứng xử nơi công cộng đang suy giảm nghiêm trọng",
      },
    },
  'Có ý kiến cho rằng: "Hiện tượng học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Thiếu kỹ năng sống", "Giáo dục", "Lý thuyết"],
        correct: "Thiếu kỹ năng sống",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về mối liên hệ giữa việc học sinh thiếu kỹ năng sống và nền giáo dục thiên về lý thuyết",
          "Bàn về cách cải cách chương trình học ở trường phổ thông",
          "Bàn về tầm quan trọng của hoạt động ngoại khóa",
        ],
        correct:
          "Bàn về mối liên hệ giữa việc học sinh thiếu kỹ năng sống và nền giáo dục thiên về lý thuyết",
      },
    },
  'Có ý kiến cho rằng: "Biến đổi khí hậu đang tác động trực tiếp đến đời sống con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: {
        options: ["Biến đổi khí hậu", "Đời sống", "Con người"],
        correct: "Biến đổi khí hậu",
      },
      q2: { correct: "tan-thanh" },
      q3: {
        options: [
          "Bàn về ảnh hưởng trực tiếp của biến đổi khí hậu đến cuộc sống con người",
          "Bàn về cách bảo vệ rừng và tài nguyên thiên nhiên",
          "Bàn về trách nhiệm của các nước phát triển đối với môi trường",
        ],
        correct:
          "Bàn về ảnh hưởng trực tiếp của biến đổi khí hậu đến cuộc sống con người",
      },
    },
};

// Mock data: 5 từ khóa gợi ý tương ứng cho từng đề cụ thể
export const topicKeywords: Record<string, string[]> = {
  // Đề đạo lí
  'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "bổn phận con cái",
      "tôn kính cha mẹ",
      "chăm sóc phụng dưỡng",
      "truyền thống gia đình",
      "cội nguồn tổ tiên",
    ],
  'Có ý kiến cho rằng: "Trung thực là phẩm chất quý giá nhất của con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    ["thành thật", "ngay thẳng", "tín nhiệm", "liêm khiết", "đáng tin cậy"],
  'Có ý kiến cho rằng: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    ["bao dung", "tha thứ", "vị tha", "cảm thông", "tâm hồn rộng mở"],
  'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "nhẫn nại",
      "bền bỉ",
      "không bỏ cuộc",
      "vượt khó khăn",
      "ý chí bền vững",
    ],
  'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    ["yêu thương", "chăm sóc", "chia sẻ", "gắn kết", "đồng cảm"],
  'Có ý kiến cho rằng: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "can đảm",
      "vượt khó",
      "dám hành động",
      "khẳng định bản thân",
      "đối mặt thực tại",
    ],
  'Có ý kiến cho rằng: "Sống có trách nhiệm là biểu hiện của người trưởng thành". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "nghĩa vụ",
      "trách nhiệm bản thân",
      "trách nhiệm xã hội",
      "cam kết",
      "chấp nhận hậu quả",
    ],
  'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    ["tri ân", "nhớ ơn", "ghi nhớ công ơn", "trân trọng", "đền đáp"],
  'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "tin vào bản thân",
      "khẳng định cá nhân",
      "tự lực tự chủ",
      "can đảm thể hiện",
      "vượt qua tự ti",
    ],
  'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    ["đoàn kết", "hợp tác", "cộng đồng", "tương trợ", "sức mạnh tập thể"],
  // Đề hiện tượng
  'Có ý kiến cho rằng: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "lãng phí thời gian",
      "sống ảo",
      "ảnh hưởng học tập",
      "sức khỏe tinh thần",
      "tương tác thực",
    ],
  'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "bạo lực thể chất",
      "bắt nạt",
      "tổn thương tâm lý",
      "môi trường học tập",
      "giáo dục nhân cách",
    ],
  'Có ý kiến cho rằng: "Hiện tượng gian lận trong thi cử đang làm mất đi giá trị thực sự của giáo dục". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "đạo đức học đường",
      "năng lực thực sự",
      "công bằng thi cử",
      "học thực chất",
      "tính liêm chính",
    ],
  'Có ý kiến cho rằng: "Ô nhiễm môi trường là thách thức lớn nhất mà nhân loại đang phải đối mặt". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "ô nhiễm không khí",
      "rác thải",
      "biến đổi khí hậu",
      "phát triển bền vững",
      "ý thức bảo vệ",
    ],
  'Có ý kiến cho rằng: "Hiện tượng sống ảo trên mạng xã hội khiến con người đánh mất chính mình". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "hình ảnh ảo",
      "áp lực so sánh",
      "bản sắc cá nhân",
      "thực tế cuộc sống",
      "định giá bản thân",
    ],
  'Có ý kiến cho rằng: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "văn hóa đọc",
      "kiến thức chiều sâu",
      "tư duy phân tích",
      "sự kiên nhẫn",
      "giải trí lành mạnh",
    ],
  'Có ý kiến cho rằng: "Hiện tượng lãng phí thực phẩm là vấn đề đáng báo động trong xã hội hiện đại". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "lãng phí tài nguyên",
      "ý thức cộng đồng",
      "an ninh lương thực",
      "hành vi tiêu dùng",
      "tôn trọng lao động",
    ],
  'Có ý kiến cho rằng: "Văn hóa ứng xử nơi công cộng đang xuống cấp nghiêm trọng". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "lịch sự văn minh",
      "trật tự công cộng",
      "ý thức cộng đồng",
      "tôn trọng người khác",
      "chuẩn mực xã hội",
    ],
  'Có ý kiến cho rằng: "Hiện tượng học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "kỹ năng thực hành",
      "giáo dục toàn diện",
      "trải nghiệm thực tế",
      "kỹ năng giao tiếp",
      "tư duy phản biện",
    ],
  'Có ý kiến cho rằng: "Biến đổi khí hậu đang tác động trực tiếp đến đời sống con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    [
      "hiệu ứng nhà kính",
      "thiên tai",
      "sinh kế người dân",
      "bảo vệ môi trường",
      "trách nhiệm toàn cầu",
    ],
};

// Mock data: Gợi ý cụ thể theo từng đề bài cho phần Khai phá ý tưởng
export const topicSpecificHints: Record<string, TopicSpecificHintSet> = {
  // ===== ĐỀ ĐẠO LÍ (0-9) =====
  'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Lòng hiếu thảo",
      q2: "Lòng hiếu thảo là nền tảng của mọi đức hạnh.",
      q3: "Tán thành. Vì hiếu thảo là đức tính tốt đẹp nhất, là gốc rễ của mọi phẩm chất đạo đức.",
      q4: "Hiếu thảo là tình cảm yêu thương, kính trọng, biết ơn và chăm sóc cha mẹ. Ý kiến khẳng định hiếu thảo là nền tảng, là cơ sở để phát triển các đức tính tốt đẹp khác.",
      q5_1: "Người hiếu thảo biết yêu thương cha mẹ sẽ biết yêu thương mọi người xung quanh.",
      q5_2: "Hiếu thảo giúp gia đình hạnh phúc, gắn kết, tạo nền tảng vững chắc cho xã hội.",
      q5_3: "Người có lòng hiếu thảo luôn biết trân trọng công lao dưỡng dục, từ đó sống có trách nhiệm hơn.",
      q6_1: "Bác Hồ - vị lãnh tụ vĩ đại luôn nhớ về quê hương, gia đình, thể hiện lòng hiếu thảo sâu sắc.",
      q6_2: "Trong cuộc sống, những người con hiếu thảo như em học sinh giỏi chăm sóc mẹ bệnh vẫn luôn được mọi người yêu quý và tôn trọng.",
      q6_3: "Bản thân em luôn cố gắng học tập thật tốt và giúp đỡ cha mẹ việc nhà để cha mẹ vui lòng.",
      q7: "Lòng hiếu thảo thực sự là nền tảng của mọi đức hạnh. Mỗi chúng ta cần biết vâng lời, chăm ngoan để cha mẹ vui lòng.",
      q8: "Việc tán thành ý kiến này giúp mỗi người nhận ra giá trị cốt lõi của gia đình, từ đó sống có trách nhiệm hơn với cha mẹ và xây dựng xã hội trọng tình nghĩa.",
    },
  'Có ý kiến cho rằng: "Trung thực là phẩm chất quý giá nhất của con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Trung thực",
      q2: "Trung thực là phẩm chất quý giá nhất của con người.",
      q3: "Tán thành. Vì trung thực giúp con người tạo dựng niềm tin và sống đúng với lương tâm.",
      q4: "Trung thực là luôn nói thật, làm thật, không gian dối. Ý kiến khẳng định trung thực là phẩm chất quan trọng nhất, là nền tảng để xây dựng các mối quan hệ tốt đẹp.",
      q5_1: "Người trung thực được mọi người tin tưởng, tôn trọng và yêu quý.",
      q5_2: "Trung thực giúp xã hội công bằng, văn minh và phát triển bền vững.",
      q5_3: "Sống trung thực giúp con người thanh thản, không phải lo lắng che giấu sự thật.",
      q6_1: 'Tổng thống Abraham Lincoln được mệnh danh là "Abe trung thực" vì sự ngay thẳng, nhờ đó ông trở thành vị tổng thống vĩ đại.',
      q6_2: "Trong lớp học, những bạn luôn thành thật nhận lỗi khi mắc sai lầm luôn được thầy cô và bạn bè quý mến.",
      q6_3: "Bản thân em luôn nói thật và dám nhận lỗi khi sai, nhờ đó được bạn bè tin tưởng.",
      q7: "Trung thực quả thực là phẩm chất quý giá nhất. Học sinh cần rèn luyện tính trung thực từ những điều nhỏ nhất.",
      q8: "Tán thành ý kiến này có ý nghĩa trong việc xây dựng một xã hội minh bạch, nơi mọi người tin tưởng lẫn nhau và các mối quan hệ được dựa trên sự chân thành.",
    },
  'Có ý kiến cho rằng: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Lòng khoan dung",
      q2: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn.",
      q3: "Tán thành. Vì biết tha thứ giúp tâm hồn nhẹ nhàng, không bị thù hận chi phối.",
      q4: "Khoan dung là biết tha thứ, bao dung với lỗi lầm của người khác. Ý kiến khẳng định rằng khoan dung mang lại sự thanh thản và hạnh phúc cho chính mình.",
      q5_1: "Người khoan dung không mang nặng thù hận, tâm hồn luôn nhẹ nhàng và thanh thản.",
      q5_2: "Khoan dung giúp hàn gắn các mối quan hệ, tạo sự hòa hợp trong cộng đồng.",
      q5_3: "Biết tha thứ giúp con người trưởng thành hơn, nhìn nhận cuộc sống tích cực hơn.",
      q6_1: "Nelson Mandela sau 27 năm tù đày vẫn tha thứ cho kẻ giam cầm mình, trở thành biểu tượng hòa giải của cả thế giới.",
      q6_2: "Trong lớp, khi một bạn lỡ làm hỏng đồ của mình, nếu biết tha thứ thì cả hai vẫn giữ được tình bạn tốt đẹp.",
      q6_3: "Bản thân em từng giận một người bạn nhưng khi tha thứ, em cảm thấy nhẹ nhõm và tình bạn càng bền chặt hơn.",
      q7: "Lòng khoan dung thực sự giúp con người hạnh phúc hơn. Mỗi chúng ta cần học cách tha thứ và bao dung hơn.",
      q8: "Việc đồng tình với ý kiến này giúp con người học cách buông bỏ hận thù, xây dựng cuộc sống hòa hợp và lan tỏa lòng nhân ái trong cộng đồng.",
    },
  'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Sự kiên trì",
      q2: "Sự kiên trì là chìa khóa dẫn đến thành công.",
      q3: "Tán thành. Vì không có thành công nào đến dễ dàng nếu thiếu sự kiên trì, bền bỉ.",
      q4: "Kiên trì là sự bền bỉ, nhẫn nại theo đuổi mục tiêu dù gặp khó khăn. Ý kiến khẳng định kiên trì là yếu tố quyết định dẫn đến thành công.",
      q5_1: "Kiên trì giúp con người vượt qua thất bại, rút ra bài học và tiến gần hơn đến mục tiêu.",
      q5_2: "Người kiên trì tích lũy được kinh nghiệm, kỹ năng qua thời gian, tạo nền tảng vững chắc cho thành công.",
      q5_3: "Không có thành tựu nào đạt được chỉ sau một đêm, tất cả đều cần sự kiên trì lâu dài.",
      q6_1: 'Thomas Edison đã thất bại hàng nghìn lần trước khi phát minh ra bóng đèn điện, ông nói: "Tôi không thất bại, tôi đã tìm ra 10.000 cách không hiệu quả".',
      q6_2: "Nhiều vận động viên Olympic phải tập luyện hàng chục năm trời mới giành được huy chương vàng.",
      q6_3: "Bản thân em từng kiên trì luyện tập Toán mỗi ngày dù ban đầu rất yếu, sau một học kỳ đã đạt điểm cao.",
      q7: "Kiên trì chính là chìa khóa thành công. Học sinh cần đặt mục tiêu rõ ràng và kiên trì theo đuổi mỗi ngày.",
      q8: "Tán thành ý kiến này khuyến khích mỗi người không bỏ cuộc trước khó khăn, từ đó tạo động lực để đạt được những mục tiêu lớn lao trong cuộc sống.",
    },
  'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Tình yêu thương",
      q2: "Tình yêu thương là sức mạnh để thay đổi thế giới.",
      q3: "Tán thành. Vì yêu thương là sợi dây gắn kết con người, tạo nên sức mạnh to lớn.",
      q4: "Tình yêu thương là sự quan tâm, chia sẻ, đồng cảm với mọi người. Ý kiến khẳng định yêu thương có sức mạnh thay đổi thế giới theo hướng tốt đẹp hơn.",
      q5_1: "Yêu thương giúp con người xích lại gần nhau, xóa bỏ hận thù và xung đột.",
      q5_2: "Tình yêu thương tạo động lực để con người làm điều tốt đẹp, giúp đỡ người khó khăn.",
      q5_3: "Yêu thương lan tỏa từ người này sang người khác, tạo nên một xã hội nhân ái và văn minh.",
      q6_1: "Bác sĩ Đặng Thùy Trâm với tình yêu thương bệnh nhân đã hy sinh tuổi thanh xuân nơi chiến trường, trở thành biểu tượng cao đẹp.",
      q6_2: "Trong đại dịch COVID-19, hàng triệu người Việt Nam đã chung tay quyên góp, chia sẻ thực phẩm cho người khó khăn.",
      q6_3: "Bản thân em đã tham gia quyên góp sách vở cho các bạn vùng cao, cảm nhận được niềm vui khi giúp đỡ người khác.",
      q7: "Tình yêu thương thực sự có sức mạnh thay đổi thế giới. Mỗi chúng ta cần biết yêu thương, quan tâm người xung quanh.",
      q8: "Đồng tình với ý kiến này giúp mọi người nhận ra sức mạnh của tình yêu thương trong việc hàn gắn, kết nối và xây dựng một thế giới tốt đẹp hơn.",
    },
  'Có ý kiến cho rằng: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Lòng dũng cảm",
      q2: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi.",
      q3: "Tán thành. Vì dũng cảm thực sự là dám đối mặt và vượt qua nỗi sợ chứ không phải không biết sợ.",
      q4: "Dũng cảm là dám đối mặt với khó khăn, nguy hiểm. Ý kiến khẳng định bản chất thực sự của dũng cảm là vượt qua nỗi sợ hãi chứ không phải không có nỗi sợ.",
      q5_1: "Ai cũng có nỗi sợ, nhưng người dũng cảm biết kiểm soát và hành động đúng đắn dù sợ hãi.",
      q5_2: "Dũng cảm vượt qua sợ hãi giúp con người trưởng thành, mạnh mẽ và tự tin hơn.",
      q5_3: "Lòng dũng cảm truyền cảm hứng cho người khác, tạo nên những thay đổi tích cực trong cộng đồng.",
      q6_1: "Các chiến sĩ cứu hỏa dù biết nguy hiểm vẫn lao vào đám cháy để cứu người, họ sợ nhưng vẫn hành động.",
      q6_2: "Cô bé Malala Yousafzai dù bị Taliban đe dọa vẫn dũng cảm đấu tranh cho quyền được đi học của trẻ em gái.",
      q6_3: "Bản thân em từng rất sợ phát biểu trước lớp, nhưng đã dũng cảm giơ tay và dần tự tin hơn.",
      q7: "Lòng dũng cảm đích thực là khả năng vượt qua nỗi sợ hãi. Học sinh cần rèn luyện bằng cách dám thử thách bản thân.",
      q8: "Việc tán thành giúp mỗi người hiểu rằng sợ hãi là bình thường, điều quan trọng là dám đối mặt và vượt qua để trưởng thành hơn.",
    },
  'Có ý kiến cho rằng: "Sống có trách nhiệm là biểu hiện của người trưởng thành". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Sống có trách nhiệm",
      q2: "Sống có trách nhiệm là biểu hiện của người trưởng thành.",
      q3: "Tán thành. Vì trách nhiệm là thước đo quan trọng nhất của sự trưởng thành.",
      q4: "Trách nhiệm là ý thức về bổn phận, nghĩa vụ với bản thân và cộng đồng. Ý kiến khẳng định sống có trách nhiệm là dấu hiệu cho thấy một người đã thực sự trưởng thành.",
      q5_1: "Người có trách nhiệm biết hoàn thành tốt công việc, không đổ lỗi và dám chịu hậu quả.",
      q5_2: "Trách nhiệm giúp mỗi người đóng góp tích cực cho gia đình và xã hội.",
      q5_3: "Sống có trách nhiệm giúp con người được tin tưởng và tôn trọng trong mọi mối quan hệ.",
      q6_1: "Các bác sĩ trong đại dịch đã làm việc không ngừng nghỉ vì trách nhiệm với bệnh nhân và cộng đồng.",
      q6_2: "Những bạn học sinh biết tự giác học bài, làm việc nhà không cần nhắc nhở chính là biểu hiện của người có trách nhiệm.",
      q6_3: "Bản thân em tự giác hoàn thành bài tập và giữ gìn lớp học sạch sẽ mà không cần ai nhắc nhở.",
      q7: "Sống có trách nhiệm đúng là biểu hiện của sự trưởng thành. Học sinh cần rèn tính trách nhiệm từ việc nhỏ mỗi ngày.",
      q8: "Tán thành ý kiến này giúp giới trẻ ý thức về bổn phận với bản thân, gia đình và xã hội, từ đó trở thành công dân có ích.",
    },
  'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Lòng biết ơn",
      q2: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp.",
      q3: "Tán thành. Vì biết ơn thể hiện nhân cách và sự trân trọng những gì mình nhận được.",
      q4: "Lòng biết ơn là sự ghi nhớ, trân trọng công lao của người khác. Ý kiến khẳng định biết ơn là biểu hiện của tâm hồn cao đẹp, nhân cách tốt.",
      q5_1: "Người biết ơn luôn trân trọng cuộc sống, không sống ích kỷ và biết chia sẻ.",
      q5_2: "Lòng biết ơn tạo nên mối quan hệ tốt đẹp, lan tỏa giá trị nhân văn trong cộng đồng.",
      q5_3: "Biết ơn giúp con người luôn khiêm tốn, không kiêu ngạo và sống hòa hợp với mọi người.",
      q6_1: 'Truyền thống "Uống nước nhớ nguồn" của dân tộc ta - ngày 27/7 hàng năm cả nước tri ân các thương binh liệt sĩ.',
      q6_2: "Nhiều học sinh nghèo vượt khó khi thành đạt đã quay về giúp đỡ trường cũ, thể hiện lòng biết ơn sâu sắc.",
      q6_3: "Bản thân em luôn gửi lời cảm ơn thầy cô sau mỗi tiết học, đó là cách em thể hiện sự trân trọng.",
      q7: "Lòng biết ơn thực sự là dấu hiệu của tâm hồn cao đẹp. Mỗi chúng ta cần luôn nhớ ơn cha mẹ, thầy cô.",
      q8: "Đồng tình với ý kiến này nhắc nhở mỗi người sống có tình nghĩa, biết trân trọng những gì mình nhận được và đền đáp bằng hành động cụ thể.",
    },
  'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Sự tự tin",
      q2: "Sự tự tin là bước đầu tiên trên con đường thành công.",
      q3: "Tán thành. Vì tự tin giúp con người dám hành động, dám theo đuổi ước mơ.",
      q4: "Tự tin là tin vào năng lực, giá trị của bản thân. Ý kiến khẳng định tự tin là bước khởi đầu quan trọng nhất trên hành trình đạt đến thành công.",
      q5_1: "Người tự tin dám đặt mục tiêu cao và nỗ lực thực hiện, không ngại thất bại.",
      q5_2: "Tự tin giúp con người thể hiện tốt năng lực, tạo ấn tượng và nhận được sự tin tưởng từ người khác.",
      q5_3: "Thiếu tự tin khiến con người bỏ lỡ nhiều cơ hội dù có đủ năng lực để thành công.",
      q6_1: "Jack Ma từng bị từ chối hàng chục lần khi xin việc nhưng vẫn tự tin theo đuổi ước mơ, cuối cùng xây dựng đế chế Alibaba.",
      q6_2: "Trong lớp, những bạn tự tin phát biểu thường được thầy cô đánh giá cao và tiến bộ nhanh hơn.",
      q6_3: "Bản thân em từng tự tin đăng ký thi hùng biện dù chưa có kinh nghiệm, nhờ đó mà học được nhiều điều bổ ích.",
      q7: "Tự tin đúng là bước đầu tiên trên con đường thành công. Học sinh cần rèn luyện sự tự tin mỗi ngày.",
      q8: "Việc tán thành giúp mỗi người nhận ra rằng tin vào bản thân là bước đầu tiên để biến ước mơ thành hiện thực và khẳng định giá trị cá nhân.",
    },
  'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Đoàn kết",
      q2: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối.",
      q3: "Tán thành. Vì khi đoàn kết, sức mạnh tập thể luôn lớn hơn sức mạnh cá nhân.",
      q4: "Đoàn kết là sự gắn bó, hợp tác cùng nhau vì mục tiêu chung. Ý kiến khẳng định đoàn kết tạo nên sức mạnh, còn chia rẽ dẫn đến yếu đuối, thất bại.",
      q5_1: "Đoàn kết giúp chia sẻ công việc, phát huy thế mạnh của từng người để đạt kết quả tốt nhất.",
      q5_2: "Khi đoàn kết, mọi người hỗ trợ nhau vượt qua khó khăn mà một cá nhân không thể tự làm được.",
      q5_3: "Chia rẽ khiến tập thể mất sức mạnh, dễ bị thất bại trước những thử thách lớn.",
      q6_1: "Lịch sử Việt Nam cho thấy nhờ đoàn kết toàn dân mà chúng ta đã chiến thắng nhiều kẻ thù xâm lược hùng mạnh.",
      q6_2: "Trong lớp em, khi cả lớp cùng nhau chuẩn bị cho hội thi văn nghệ, nhờ đoàn kết mà lớp đạt giải nhất.",
      q6_3: "Bản thân em luôn cố gắng hòa đồng với bạn bè, sẵn sàng giúp đỡ khi nhóm cần để cùng hoàn thành tốt.",
      q7: "Đoàn kết thực sự là sức mạnh. Mỗi chúng ta cần biết hợp tác, tôn trọng và hỗ trợ lẫn nhau.",
      q8: "Tán thành ý kiến này khuyến khích tinh thần hợp tác, tương trợ lẫn nhau, tạo nên sức mạnh tập thể để vượt qua mọi thử thách.",
    },

  // ===== ĐỀ HIỆN TƯỢNG (10-19) =====
  'Có ý kiến cho rằng: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Nghiện mạng xã hội",
      q2: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ.",
      q3: "Tán thành. Vì mạng xã hội đang chiếm quá nhiều thời gian và ảnh hưởng tiêu cực đến học sinh.",
      q4: "Nghiện mạng xã hội là tình trạng dành quá nhiều thời gian cho Facebook, TikTok, Instagram... Ý kiến khẳng định đây là vấn đề nghiêm trọng đối với giới trẻ hiện nay.",
      q5_1: "Nghiện mạng xã hội khiến học sinh mất tập trung, kết quả học tập sa sút nghiêm trọng.",
      q5_2: "Sống ảo trên mạng khiến giới trẻ mất kỹ năng giao tiếp thực tế, ảnh hưởng sức khỏe tinh thần.",
      q5_3: "Thông tin sai lệch trên mạng xã hội dễ khiến giới trẻ bị lôi kéo vào những xu hướng tiêu cực.",
      q6_1: "Theo thống kê, thanh thiếu niên Việt Nam dành trung bình 3-5 giờ/ngày cho mạng xã hội, nhiều bạn thức khuya lướt TikTok ảnh hưởng sức khỏe.",
      q6_2: "Trong lớp em, có bạn vì nghiện Facebook mà không làm bài tập, điểm số giảm sút rõ rệt.",
      q6_3: "Bản thân em từng dành quá nhiều thời gian lướt mạng và nhận ra điểm số bị ảnh hưởng, nên đã tự giới hạn.",
      q7: "Nghiện mạng xã hội thực sự đang ảnh hưởng nghiêm trọng đến giới trẻ. Học sinh cần tự kiểm soát thời gian sử dụng.",
      q8: "Việc tán thành giúp cảnh tỉnh giới trẻ về tác hại của việc lạm dụng mạng xã hội, từ đó biết sử dụng công nghệ một cách thông minh và có kiểm soát.",
    },
  'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Bạo lực học đường",
      q2: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để.",
      q3: "Tán thành. Vì bạo lực học đường gây tổn thương nặng nề cho học sinh và cần được xử lý dứt điểm.",
      q4: "Bạo lực học đường là hành vi dùng sức mạnh để bắt nạt, đánh đập, xúc phạm bạn bè trong trường. Ý kiến khẳng định đây là vấn đề nhức nhối cần giải quyết triệt để.",
      q5_1: "Bạo lực học đường gây tổn thương thể chất và tinh thần nghiêm trọng cho nạn nhân, nhiều em bị trầm cảm.",
      q5_2: "Bạo lực học đường phá vỡ môi trường giáo dục an toàn, khiến học sinh sợ hãi khi đến trường.",
      q5_3: "Người gây bạo lực cũng bị ảnh hưởng xấu: hình thành tính cách hung hăng, có thể vi phạm pháp luật sau này.",
      q6_1: "Nhiều vụ bạo lực học đường được đưa lên báo chí, có em học sinh bị đánh hội đồng phải nhập viện, để lại sang chấn tâm lý lâu dài.",
      q6_2: "Trong trường em, nhà trường đã tổ chức các buổi tuyên truyền chống bạo lực, giúp các bạn hiểu được hậu quả nghiêm trọng.",
      q6_3: "Bản thân em luôn đối xử tốt với bạn bè và sẵn sàng lên tiếng khi thấy ai bị bắt nạt.",
      q7: "Bạo lực học đường thực sự là vấn đề nhức nhối. Mỗi học sinh cần nói không với bạo lực và bảo vệ bạn bè.",
      q8: "Đồng tình với ý kiến này thúc đẩy mọi người cùng hành động để xây dựng môi trường học tập an toàn, lành mạnh cho tất cả học sinh.",
    },
  'Có ý kiến cho rằng: "Hiện tượng gian lận trong thi cử đang làm mất đi giá trị thực sự của giáo dục". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Gian lận trong thi cử",
      q2: "Hiện tượng gian lận trong thi cử đang làm mất đi giá trị thực sự của giáo dục.",
      q3: "Tán thành. Vì gian lận thi cử là hành vi thiếu trung thực, làm mất công bằng trong giáo dục.",
      q4: "Gian lận thi cử là hành vi quay cóp, chép bài, sử dụng tài liệu trái phép trong kiểm tra. Ý kiến khẳng định hiện tượng này đang phá hủy giá trị thực sự của giáo dục.",
      q5_1: "Gian lận thi cử làm mất đi sự công bằng, người học thật bị thiệt thòi so với người gian lận.",
      q5_2: "Gian lận khiến học sinh không có kiến thức thực, ảnh hưởng nghiêm trọng đến tương lai.",
      q5_3: "Khi gian lận trở nên phổ biến, bằng cấp mất giá trị và xã hội mất niềm tin vào giáo dục.",
      q6_1: "Nhiều vụ gian lận thi THPT Quốc gia bị phát hiện gây chấn động dư luận, những người liên quan bị xử lý nghiêm.",
      q6_2: "Trong lớp em, những bạn quay cóp dù được điểm cao nhưng không hiểu bài, khi kiểm tra miệng lại không trả lời được.",
      q6_3: "Bản thân em luôn tự giác làm bài bằng năng lực thật của mình dù kết quả chưa cao.",
      q7: "Gian lận thi cử đúng là đang làm mất giá trị giáo dục. Học sinh cần trung thực trong kiểm tra, thi cử.",
      q8: "Tán thành ý kiến này giúp bảo vệ sự công bằng trong giáo dục, khuyến khích học sinh rèn luyện năng lực thực sự thay vì dựa vào gian lận.",
    },
  'Có ý kiến cho rằng: "Ô nhiễm môi trường là thách thức lớn nhất mà nhân loại đang phải đối mặt". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Ô nhiễm môi trường",
      q2: "Ô nhiễm môi trường là thách thức lớn nhất mà nhân loại đang phải đối mặt.",
      q3: "Tán thành. Vì ô nhiễm môi trường đang ảnh hưởng trực tiếp đến sức khỏe và sự sống của con người.",
      q4: "Ô nhiễm môi trường là tình trạng không khí, nước, đất bị nhiễm bẩn bởi chất thải. Ý kiến khẳng định đây là thách thức lớn nhất mà nhân loại phải đối mặt hiện nay.",
      q5_1: "Ô nhiễm không khí gây ra các bệnh hô hấp, ung thư, ảnh hưởng nghiêm trọng đến sức khỏe con người.",
      q5_2: "Ô nhiễm nguồn nước khiến hàng triệu người thiếu nước sạch, gây ra nhiều dịch bệnh nguy hiểm.",
      q5_3: "Ô nhiễm đất đai làm giảm năng suất nông nghiệp, đe dọa an ninh lương thực toàn cầu.",
      q6_1: "Nhiều thành phố lớn như Bắc Kinh, New Delhi thường xuyên chìm trong khói bụi, người dân phải đeo khẩu trang mỗi khi ra đường.",
      q6_2: "Ở Việt Nam, nhiều con sông bị ô nhiễm nặng do chất thải công nghiệp, cá chết hàng loạt.",
      q6_3: "Bản thân em thấy khu vực gần nhà có nhiều rác thải nhựa vứt bừa bãi, gây mất mỹ quan và ô nhiễm.",
      q7: "Ô nhiễm môi trường thực sự là thách thức lớn nhất. Mỗi người cần hành động bảo vệ môi trường từ những việc nhỏ nhất.",
      q8: "Việc đồng tình giúp nâng cao ý thức bảo vệ môi trường của mỗi người, thúc đẩy hành động thiết thực để bảo vệ hành tinh cho thế hệ tương lai.",
    },
  'Có ý kiến cho rằng: "Hiện tượng sống ảo trên mạng xã hội khiến con người đánh mất chính mình". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Sống ảo trên mạng xã hội",
      q2: "Hiện tượng sống ảo trên mạng xã hội khiến con người đánh mất chính mình.",
      q3: "Tán thành. Vì sống ảo khiến con người đánh mất giá trị thực và chạy theo những điều không có thật.",
      q4: "Sống ảo là tạo hình ảnh không thật về bản thân trên mạng xã hội để nhận được sự ngưỡng mộ. Ý kiến khẳng định hiện tượng này khiến con người đánh mất chính mình.",
      q5_1: "Sống ảo khiến con người tốn thời gian, tiền bạc để tạo hình ảnh giả tạo thay vì phát triển bản thân.",
      q5_2: 'Sống ảo tạo áp lực so sánh, khiến nhiều người tự ti, trầm cảm khi thấy cuộc sống người khác "hoàn hảo".',
      q5_3: "Khi mải chạy theo hình ảnh ảo, con người quên đi giá trị thực sự của bản thân và mất kết nối với cuộc sống thực.",
      q6_1: "Nhiều bạn trẻ vay tiền mua đồ hiệu, thuê xe sang chỉ để chụp ảnh đăng mạng xã hội khoe khoang.",
      q6_2: "Nghiên cứu cho thấy việc thường xuyên so sánh bản thân với hình ảnh hoàn hảo trên Instagram làm tăng tỷ lệ trầm cảm ở giới trẻ.",
      q6_3: "Bản thân em từng quá quan tâm đến lượt like trên mạng, sau đó nhận ra điều quan trọng là sống thật với chính mình.",
      q7: "Sống ảo thực sự khiến con người đánh mất chính mình. Mỗi người cần sống thật và trân trọng giá trị bên trong.",
      q8: "Tán thành ý kiến này giúp giới trẻ tỉnh ngộ, biết trân trọng giá trị thực của bản thân thay vì chạy theo hình ảnh ảo trên mạng xã hội.",
    },
  'Có ý kiến cho rằng: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Đọc sách bị thay thế",
      q2: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử.",
      q3: "Tán thành. Vì ngày càng nhiều người, đặc biệt là giới trẻ, dành thời gian cho điện thoại thay vì đọc sách.",
      q4: "Hiện tượng này là việc sách giấy mất dần vị trí khi con người chuyển sang dùng điện thoại, máy tính. Ý kiến cảnh báo về sự suy giảm của văn hóa đọc truyền thống.",
      q5_1: "Thiết bị điện tử với nội dung giải trí hấp dẫn khiến giới trẻ không còn kiên nhẫn đọc sách.",
      q5_2: "Việc bỏ đọc sách khiến khả năng tư duy sâu, vốn từ và trí tưởng tượng của giới trẻ bị hạn chế.",
      q5_3: "Văn hóa đọc suy giảm dẫn đến sự nghèo nàn về tri thức và nhân cách của thế hệ trẻ.",
      q6_1: "Khảo sát cho thấy người Việt Nam đọc trung bình chưa đến 1 cuốn sách/năm, trong khi dùng điện thoại 3-4 giờ/ngày.",
      q6_2: "Trong lớp em, rất ít bạn có thói quen đọc sách, đa số dùng giờ rảnh để xem video trên điện thoại.",
      q6_3: "Bản thân em nhận ra khi đọc sách nhiều hơn, khả năng viết văn và diễn đạt của em tiến bộ rõ rệt.",
      q7: "Đọc sách đúng là đang bị thay thế bởi thiết bị điện tử. Học sinh cần dành ít nhất 15-30 phút mỗi ngày để đọc sách.",
      q8: "Đồng tình với ý kiến này giúp khôi phục văn hóa đọc, khuyến khích mọi người tìm lại thói quen đọc sách để phát triển tư duy sâu sắc.",
    },
  'Có ý kiến cho rằng: "Hiện tượng lãng phí thực phẩm là vấn đề đáng báo động trong xã hội hiện đại". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Lãng phí thực phẩm",
      q2: "Hiện tượng lãng phí thực phẩm là vấn đề đáng báo động trong xã hội hiện đại.",
      q3: "Tán thành. Vì lãng phí thực phẩm không chỉ ảnh hưởng kinh tế mà còn tác động xấu đến môi trường.",
      q4: "Lãng phí thực phẩm là việc vứt bỏ thức ăn còn dùng được, mua quá nhiều không sử dụng hết. Ý kiến khẳng định đây là vấn đề đáng báo động trong xã hội hiện đại.",
      q5_1: "Lãng phí thực phẩm gây thiệt hại kinh tế lớn trong khi nhiều người vẫn đang thiếu ăn.",
      q5_2: "Thức ăn thừa gây ô nhiễm môi trường, phát thải khí nhà kính khi phân hủy.",
      q5_3: "Lãng phí thực phẩm còn thể hiện sự thiếu ý thức, không trân trọng công sức lao động của người nông dân.",
      q6_1: "Theo FAO, mỗi năm thế giới lãng phí khoảng 1.3 tỷ tấn thức ăn, trong khi hàng triệu người chết vì đói.",
      q6_2: "Ở căng tin trường em, nhiều bạn lấy nhiều cơm nhưng ăn không hết rồi đổ đi, rất lãng phí.",
      q6_3: "Bản thân em luôn lấy thức ăn vừa đủ và ăn hết phần cơm, không bao giờ bỏ thừa.",
      q7: "Lãng phí thực phẩm thực sự là vấn đề đáng báo động. Mỗi người cần lấy thức ăn vừa đủ và bảo quản đúng cách.",
      q8: "Việc tán thành giúp thay đổi thói quen tiêu dùng, hướng đến lối sống tiết kiệm và có trách nhiệm hơn với tài nguyên và cộng đồng.",
    },
  'Có ý kiến cho rằng: "Văn hóa ứng xử nơi công cộng đang xuống cấp nghiêm trọng". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Văn hóa ứng xử nơi công cộng",
      q2: "Văn hóa ứng xử nơi công cộng đang xuống cấp nghiêm trọng.",
      q3: "Tán thành. Vì ngày càng nhiều hành vi thiếu văn minh xuất hiện ở nơi công cộng.",
      q4: "Văn hóa ứng xử nơi công cộng là cách con người cư xử tại những nơi chung. Ý kiến khẳng định thực trạng ứng xử thiếu văn minh đang trở nên nghiêm trọng.",
      q5_1: "Nói tục chửi thề, chen lấn xô đẩy, xả rác bừa bãi đang trở thành hiện tượng phổ biến nơi công cộng.",
      q5_2: "Ứng xử thiếu văn minh làm xấu hình ảnh đất nước trong mắt bạn bè quốc tế.",
      q5_3: "Khi văn hóa ứng xử xuống cấp, xã hội trở nên lộn xộn, con người mất niềm tin vào nhau.",
      q6_1: "Trên mạng xã hội, nhiều video ghi lại cảnh người Việt chen lấn, tranh giành tại các sự kiện được chia sẻ rộng rãi, gây phản cảm.",
      q6_2: "Trong sân trường, em thường nghe các bạn nói tục như một thói quen, kể cả trước mặt thầy cô.",
      q6_3: "Bản thân em luôn cố gắng xếp hàng trật tự, nói năng lịch sự và nhường chỗ cho người lớn tuổi.",
      q7: "Văn hóa ứng xử nơi công cộng thực sự đang xuống cấp. Mỗi người cần ý thức cư xử văn minh, lịch sự.",
      q8: "Tán thành ý kiến này giúp mỗi người nhìn nhận lại cách ứng xử của mình, từ đó góp phần xây dựng xã hội văn minh, lịch sự hơn.",
    },
  'Có ý kiến cho rằng: "Hiện tượng học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Học sinh thiếu kỹ năng sống",
      q2: "Hiện tượng học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết.",
      q3: "Tán thành. Vì nhiều học sinh giỏi kiến thức nhưng lại thiếu các kỹ năng cơ bản trong cuộc sống.",
      q4: "Thiếu kỹ năng sống là tình trạng học sinh không biết tự chăm sóc bản thân, giao tiếp kém, không biết xử lý tình huống. Ý kiến cho rằng đây là hệ quả của nền giáo dục nặng lý thuyết.",
      q5_1: "Thiếu kỹ năng sống khiến học sinh khó thích nghi với môi trường mới, dễ bị lôi kéo vào tệ nạn.",
      q5_2: "Học sinh thiếu kỹ năng sống sẽ gặp khó khăn trong công việc và cuộc sống sau này.",
      q5_3: "Nền giáo dục chỉ tập trung vào điểm số mà bỏ qua kỹ năng thực hành khiến học sinh thiếu sự chuẩn bị cho đời sống thực tế.",
      q6_1: "Nhiều sinh viên đại học không biết nấu cơm, giặt đồ hay quản lý chi tiêu khi sống xa gia đình.",
      q6_2: "Trong lớp em, khi gặp xung đột, nhiều bạn không biết cách giải quyết mà chỉ biết cãi nhau hoặc khóc.",
      q6_3: "Bản thân em nhờ tham gia hoạt động ngoại khóa mà học được kỹ năng làm việc nhóm và giao tiếp tự tin hơn.",
      q7: "Thiếu kỹ năng sống thực sự là hệ quả của giáo dục nặng lý thuyết. Học sinh cần chủ động rèn luyện kỹ năng sống mỗi ngày.",
      q8: "Đồng tình với ý kiến này thúc đẩy cải cách giáo dục, kết hợp dạy kiến thức với rèn luyện kỹ năng thực tế cho học sinh.",
    },
  'Có ý kiến cho rằng: "Biến đổi khí hậu đang tác động trực tiếp đến đời sống con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
    {
      q1: "Biến đổi khí hậu",
      q2: "Biến đổi khí hậu đang tác động trực tiếp đến đời sống con người.",
      q3: "Tán thành. Vì biến đổi khí hậu đang gây ra nhiều hậu quả nghiêm trọng trên toàn thế giới.",
      q4: "Biến đổi khí hậu là sự thay đổi bất thường của thời tiết do hoạt động con người gây ra. Ý kiến khẳng định hiện tượng này đang tác động trực tiếp đến đời sống con người.",
      q5_1: "Biến đổi khí hậu gây ra thời tiết cực đoan: bão lũ, hạn hán, nắng nóng kỷ lục ảnh hưởng đến đời sống và sản xuất.",
      q5_2: "Nước biển dâng cao đe dọa các vùng đồng bằng ven biển, hàng triệu người có nguy cơ mất nhà cửa.",
      q5_3: "Biến đổi khí hậu ảnh hưởng đến nông nghiệp, an ninh lương thực và sức khỏe cộng đồng.",
      q6_1: "Đồng bằng sông Cửu Long của Việt Nam đang bị nước biển xâm nhập mặn nghiêm trọng, ảnh hưởng đến hàng triệu nông dân.",
      q6_2: "Năm 2024, nhiều quốc gia trải qua đợt nắng nóng kỷ lục, gây cháy rừng và thiệt hại lớn về người và tài sản.",
      q6_3: "Bản thân em nhận thấy thời tiết ngày càng bất thường: mùa đông ấm hơn, mùa hè nóng hơn so với trước đây.",
      q7: "Biến đổi khí hậu thực sự đang tác động trực tiếp đến con người. Mỗi người cần hành động bảo vệ môi trường ngay từ hôm nay.",
      q8: "Việc tán thành giúp mọi người ý thức được tính cấp bách của biến đổi khí hậu, từ đó hành động ngay để giảm thiểu tác động tiêu cực.",
    },
};

// Gợi ý chung cho từng câu hỏi (icon bóng đèn)
export const generalHints: Record<string, string[]> = {
  q1: ["Đề bài đang nói về vấn đề gì trong đời sống?"],
  q2: ["Ý kiến được nêu ở đề bài là gì?"],
  q3: ["Em có đồng tình hay phản đối với ý kiến đó?"],
  q4: [
    "Giải thích ngắn gọn vấn đề",
    "Ý kiến ở đề bài muốn nhấn mạnh điều gì?",
  ],
  q5: [
    "Em có thể suy nghĩ theo các hướng sau:",
    "Vấn đề này có ý nghĩa gì với bản thân em?",
    "Nó ảnh hưởng như thế nào đến mọi người và xã hội?",
  ],
  q6: [
    "Em có thể lấy ví dụ từ:",
    "Những người nổi tiếng hoặc những tấm gương tốt",
    "Những câu chuyện trong cuộc sống",
    "Bạn bè trong lớp hoặc trong trường",
    "Bản thân em (việc em đã từng làm hoặc trải qua)",
  ],
  q7: ["Khẳng định lại việc tán thành hoặc phản đối là xác đáng"],
  q8: [
    "Ý kiến này giúp con người sống tốt hơn như thế nào?",
    "Nếu mọi người thực hiện theo ý kiến này thì cuộc sống sẽ ra sao?",
    "Điều đó mang lại lợi ích gì cho bản thân và xã hội?",
  ],
};

// Dữ liệu cho Bước 2: Tạo ý
export const keywordBank: Record<string, { keywords: string[]; evidenceTemplates: string[] }> = {
  "dao-ly": {
    keywords: [
      "trách nhiệm",
      "lòng hiếu thảo",
      "trung thực",
      "chia sẻ",
      "đoàn kết",
      "tự tin",
      "kiên trì",
    ],
    evidenceTemplates: [
      "📖 Ví dụ từ văn học: Nhân vật trong tác phẩm...",
      "🌍 Ví dụ thực tế: Trong cuộc sống...",
      "🏆 Gương điển hình: Các anh hùng, nhân vật nổi tiếng...",
      '💭 Câu tục ngữ, danh ngôn: "..."',
    ],
  },
  "hien-tuong": {
    keywords: [
      "biểu hiện",
      "nguyên nhân",
      "hậu quả",
      "tác động",
      "giải pháp",
      "xu hướng",
    ],
    evidenceTemplates: [
      "📊 Số liệu thống kê về hiện tượng",
      "📰 Ví dụ thực tế từ báo chí, truyền thông",
      "👥 Câu chuyện từ người xung quanh",
      "🔍 Phân tích nguyên nhân sâu xa",
    ],
  },
  "van-hoc": {
    keywords: [
      "hình ảnh",
      "biện pháp nghệ thuật",
      "thông điệp",
      "cảm xúc",
      "ý nghĩa",
      "giá trị",
    ],
    evidenceTemplates: [
      "📝 Trích dẫn đoạn văn, câu thơ nổi bật",
      "🎨 Phân tích biện pháp nghệ thuật",
      "💡 Liên hệ với cuộc sống",
      "🎭 So sánh với tác phẩm khác",
    ],
  },
};

// Cấu hình các bước (icon names as strings - map to actual icons in consuming component)
export const STEPS_CONFIG: StepConfig[] = [
  {
    id: 0,
    title: "Lựa chọn đề tài",
    icon: "Lightbulb",
    color: "bg-blue-500",
    description: "Xác định dạng đề và phân tích yêu cầu",
  },
  {
    id: 1,
    title: "Tìm ý",
    icon: "PenTool",
    color: "bg-green-500",
    description: "Trả lời các câu hỏi để tạo ý",
  },
  {
    id: 2,
    title: "Lập dàn ý",
    icon: "FileText",
    color: "bg-purple-500",
    description: "Sắp xếp ý tưởng thành dàn ý hoàn chỉnh",
  },
  {
    id: 3,
    title: "Viết bài",
    icon: "Edit3",
    color: "bg-pink-500",
    description: "Viết từng đoạn theo dàn ý đã lập",
  },
  {
    id: 4,
    title: "Kiểm tra",
    icon: "CheckCircle",
    color: "bg-orange-500",
    description: "Tự đánh giá và hoàn thiện bài viết",
  },
];

// Cấu hình các slot cho dàn ý
export const OUTLINE_SLOT_CONFIG: OutlineSectionConfig[] = [
  {
    section: "MỞ BÀI",
    color: "blue",
    items: [
      { key: "gioiThieu", label: "Giới thiệu vấn đề" },
      { key: "yKien", label: "Nêu ý kiến đáng quan tâm" },
      { key: "thaiDo", label: "Thái độ của em (tán thành/phản đối)" },
    ],
  },
  {
    section: "THÂN BÀI",
    color: "purple",
    items: [{ key: "thucChat", label: "Trình bày thực chất ý kiến" }],
    subSection: {
      label: "Thể hiện thái độ tán thành bằng lí lẽ & bằng chứng",
      rows: [
        { liLe: "liLe1", bangChung: "bangChung1", num: 1 },
        { liLe: "liLe2", bangChung: "bangChung2", num: 2 },
        { liLe: "liLe3", bangChung: "bangChung3", num: 3 },
      ],
    },
  },
  {
    section: "KẾT BÀI",
    color: "orange",
    items: [
      { key: "khangDinh", label: "Khẳng định" },
      { key: "yNghia", label: "Ý nghĩa của việc tán thành" },
    ],
  },
];

// Danh sách kiểm tra cho bước tự kiểm tra
export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    key: "hasClearOpinion",
    label: "Đã nêu rõ ý kiến cần được tán thành chưa?",
    description:
      "Nếu ý kiến chưa nêu rõ trong phần mở bài thì quay lại bước 3 để bổ sung.",
  },
  {
    key: "hasExplicitAgreement",
    label:
      "Đã trình bày tường minh sự tán thành đối với ý kiến được nêu lên để bàn luận chưa?",
    description:
      "Nếu việc tán thành ý kiến chưa được thể hiện rõ thì phải bổ sung ý hoặc tìm phương án diễn đạt phù hợp hơn.",
  },
  {
    key: "hasConvincingArgument",
    label:
      "Việc tán thành ý kiến đã có sức thuyết phục chưa? Lí lẽ và bằng chứng được nêu lên làm cơ sở cho sự tán thành đã thật sự thuyết phục chưa?",
    description:
      "Bổ sung, thay đổi nếu thấy lí lẽ và bằng chứng chưa làm cho sự tán thành đủ sức thuyết phục.",
  },
  {
    key: "hasClearSignificance",
    label: "Đã nói rõ được ý nghĩa của việc tán thành ý kiến chưa?",
    description:
      "Bổ sung nếu thấy ý nghĩa của việc tán thành ý kiến còn được thể hiện mờ nhạt.",
  },
  {
    key: "hasGoodExpression",
    label:
      "Việc dùng từ ngữ, đặt câu, duy trì mạch lạc và liên kết trong bài viết đã đạt yêu cầu chưa?",
    description:
      "Chỉnh sửa những lỗi về từ ngữ, ngữ pháp. Bổ sung từ ngữ liên kết nếu thấy giữa các câu, các đoạn còn rời rạc.",
  },
];

// Hàm tạo cấu hình các phần viết bài (phụ thuộc vào outlineSlots)
export function getWritingSections(outlineSlots: OutlineSlots): WritingSection[] {
  return [
    {
      key: "moBai",
      title: "Mở bài",
      color: "blue",
      prompt: "Hãy viết đoạn mở bài giới thiệu vấn đề và nêu ý kiến",
      hints: [
        '"Trong cuộc sống, ... là điều mà ai cũng từng suy nghĩ."',
        '"Có ý kiến cho rằng: ..."',
        '"Em hoàn toàn tán thành / không đồng tình với ý kiến trên vì ..."',
      ],
      outlineItems: [
        { label: "Giới thiệu vấn đề", value: outlineSlots.gioiThieu },
        { label: "Nêu ý kiến", value: outlineSlots.yKien },
        { label: "Thái độ của em", value: outlineSlots.thaiDo },
      ],
    },
    {
      key: "thanBai1",
      title: "Thân bài – Lí lẽ & Bằng chứng 1",
      color: "purple",
      prompt:
        "Hãy viết đoạn văn trình bày thực chất ý kiến, làm rõ lí lẽ thứ nhất kèm bằng chứng",
      hints: [
        '"Trước hết, ta cần hiểu ... nghĩa là ..."',
        '"Thật vậy, ... bởi vì ..."',
        '"Chẳng hạn như ... / Điều đó được thể hiện qua ..."',
      ],
      outlineItems: [
        { label: "Thực chất ý kiến", value: outlineSlots.thucChat },
        { label: "Lí lẽ 1", value: outlineSlots.liLe1 },
        { label: "Bằng chứng 1", value: outlineSlots.bangChung1 },
      ],
    },
    {
      key: "thanBai2",
      title: "Thân bài – Lí lẽ & Bằng chứng 2",
      color: "purple",
      prompt: "Hãy viết đoạn văn làm rõ lí lẽ thứ hai kèm bằng chứng",
      hints: [
        '"Không chỉ vậy, ... còn ..."',
        '"Hơn nữa, ... cho thấy ..."',
        '"Có thể thấy rõ điều đó qua câu chuyện / thực tế ..."',
      ],
      outlineItems: [
        { label: "Lí lẽ 2", value: outlineSlots.liLe2 },
        { label: "Bằng chứng 2", value: outlineSlots.bangChung2 },
      ],
    },
    {
      key: "thanBai3",
      title: "Thân bài – Lí lẽ & Bằng chứng 3",
      color: "purple",
      prompt: "Hãy viết đoạn văn làm rõ lí lẽ thứ ba kèm bằng chứng",
      hints: [
        '"Bên cạnh đó, ... cũng là điều đáng suy ngẫm."',
        '"Bản thân em / bạn bè em đã từng ..."',
        '"Từ đó cho thấy, trong xã hội ngày nay ..."',
      ],
      outlineItems: [
        { label: "Lí lẽ 3", value: outlineSlots.liLe3 },
        { label: "Bằng chứng 3", value: outlineSlots.bangChung3 },
      ],
    },
    {
      key: "ketBai",
      title: "Kết bài",
      color: "orange",
      prompt:
        "Hãy viết đoạn kết bài khẳng định lại ý kiến và nêu ý nghĩa",
      hints: [
        '"Tóm lại, ... là điều hoàn toàn đúng đắn / cần suy nghĩ lại."',
        '"Ý kiến trên mang đến cho chúng ta bài học ..."',
        '"Là học sinh, em sẽ ... / Em mong rằng mỗi người ..."',
      ],
      outlineItems: [
        { label: "Khẳng định", value: outlineSlots.khangDinh },
        { label: "Ý nghĩa", value: outlineSlots.yNghia },
      ],
    },
  ];
}
