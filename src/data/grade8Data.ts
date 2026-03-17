import type {
  GradeData,
  TopicQuiz,
  TimYQuestion,
  OutlineSectionConfig,
  ChecklistItem,
  WritingSection,
} from "./writingMapConstants";
import { STEPS_CONFIG } from "./writingMapConstants";

// ============================================
// GRADE 8 DATA
// Nghị luận về một vấn đề đời sống
// (Con người trong mối quan hệ với cộng đồng, đất nước)
// ============================================

const GRADE = 8;
const LABEL = "Lớp 8";
const ESSAY_TYPE =
  "VIẾT MỘT BÀI VĂN NGHỊ LUẬN VỀ MỘT VẤN ĐỀ ĐỜI SỐNG (CON NGƯỜI TRONG MỐI QUAN HỆ VỚI CỘNG ĐỒNG, ĐẤT NƯỚC)";
const WORD_COUNT = 500;

// ============================================
// 10 TOPICS
// ============================================

const topics: string[] = [
  "Tinh thần tình nguyện của thanh niên là động lực phát triển cộng đồng",
  "Mỗi người dân đều có trách nhiệm bảo vệ môi trường sống",
  "Lòng yêu nước được thể hiện qua những hành động nhỏ hằng ngày",
  "Sự đoàn kết trong cộng đồng giúp vượt qua mọi khó khăn",
  "Giữ gìn bản sắc văn hóa dân tộc trong thời kì hội nhập",
  "Vai trò của thế hệ trẻ trong việc xây dựng đất nước",
  "Tinh thần tương thân tương ái là truyền thống quý báu của dân tộc Việt Nam",
  "Ý thức chấp hành pháp luật là biểu hiện của công dân có trách nhiệm",
  "Sự sẻ chia trong cộng đồng giúp xã hội trở nên tốt đẹp hơn",
  "Bảo vệ chủ quyền lãnh thổ là trách nhiệm thiêng liêng của mỗi công dân",
];

// ============================================
// TÌM Ý QUESTIONS (10 questions)
// ============================================

const timYQuestions: TimYQuestion[] = [
  { id: "q1", label: "Vấn đề cần bàn luận là gì?", placeholder: "Nhập vấn đề cần bàn luận..." },
  { id: "q2", label: "Nêu ý kiến về vấn đề được bàn luận", placeholder: "Nhập ý kiến của em..." },
  { id: "q3", label: "Giải thích thực chất của vấn đề được bàn luận", placeholder: "Giải thích thực chất..." },
  { id: "q4", label: "Ý kiến trên muốn khẳng định điều gì?", placeholder: "Nhập điều muốn khẳng định..." },
  {
    id: "q5",
    label: "Vì sao lại có ý kiến như vậy?",
    placeholder: "Nhập lí do...",
    subInputs: 2,
    subLabels: ["Lí do 1", "Lí do 2"],
  },
  {
    id: "q6",
    label: "Vì sao em cho rằng những điều nói trên là đúng?",
    placeholder: "Nhập lập luận...",
    subInputs: 2,
    subLabels: ["Lập luận 1", "Lập luận 2"],
  },
  {
    id: "q7",
    label: "Có ví dụ nào chứng minh cho những điều đó không?",
    placeholder: "Nhập ví dụ...",
    subInputs: 3,
    subLabels: ["Ví dụ 1", "Ví dụ 2", "Ví dụ 3"],
  },
  { id: "q8", label: "Có ý kiến nào khác không?", placeholder: "Nhập ý kiến khác (phản biện)..." },
  { id: "q9", label: "Vấn đề được bàn luận có ý nghĩa gì?", placeholder: "Nhập ý nghĩa..." },
  {
    id: "q10",
    label: "Có những phương hướng hành động nào?",
    placeholder: "Nhập phương hướng hành động...",
    subInputs: 2,
    subLabels: ["Phương hướng 1", "Phương hướng 2"],
  },
];

// ============================================
// TOPIC QUIZ DATA (3 quiz questions per topic)
// ============================================

const topicQuizData: Record<string, TopicQuiz> = {
  // Topic 1: Tinh thần tình nguyện
  "Tinh thần tình nguyện của thanh niên là động lực phát triển cộng đồng": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Nghị luận văn học",
        "Kể chuyện sáng tạo",
        "Tả cảnh sinh hoạt",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Vai trò của tinh thần tình nguyện đối với sự phát triển cộng đồng",
        "Kể về một chuyến đi tình nguyện",
        "Miêu tả hoạt động tình nguyện",
        "Hướng dẫn cách tổ chức hoạt động tình nguyện",
      ],
      correct: "Vai trò của tinh thần tình nguyện đối với sự phát triển cộng đồng",
    },
    q3: {
      options: [
        "Giải thích, chứng minh, bàn luận về tinh thần tình nguyện",
        "Kể lại các hoạt động tình nguyện",
        "Nêu cảm xúc khi tham gia tình nguyện",
        "Liệt kê các tổ chức tình nguyện",
      ],
      correct: "Giải thích, chứng minh, bàn luận về tinh thần tình nguyện",
    },
  },

  // Topic 2: Bảo vệ môi trường sống
  "Mỗi người dân đều có trách nhiệm bảo vệ môi trường sống": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Nghị luận văn học",
        "Thuyết minh",
        "Biểu cảm",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Trách nhiệm bảo vệ môi trường của mỗi công dân",
        "Kể về một lần dọn dẹp vệ sinh",
        "Mô tả tình trạng ô nhiễm môi trường",
        "Hướng dẫn cách phân loại rác thải",
      ],
      correct: "Trách nhiệm bảo vệ môi trường của mỗi công dân",
    },
    q3: {
      options: [
        "Giải thích, chứng minh trách nhiệm bảo vệ môi trường của mỗi người",
        "Kể lại việc trồng cây xanh",
        "Mô tả cảnh thiên nhiên đẹp",
        "Nêu cảm xúc về thiên nhiên",
      ],
      correct: "Giải thích, chứng minh trách nhiệm bảo vệ môi trường của mỗi người",
    },
  },

  // Topic 3: Lòng yêu nước
  "Lòng yêu nước được thể hiện qua những hành động nhỏ hằng ngày": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Tự sự",
        "Miêu tả",
        "Thuyết minh",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Lòng yêu nước được thể hiện qua hành động nhỏ hằng ngày",
        "Kể về một vị anh hùng dân tộc",
        "Mô tả vẻ đẹp quê hương",
        "Giới thiệu lịch sử đất nước",
      ],
      correct: "Lòng yêu nước được thể hiện qua hành động nhỏ hằng ngày",
    },
    q3: {
      options: [
        "Giải thích và chứng minh lòng yêu nước thể hiện qua hành động nhỏ",
        "Kể lại câu chuyện lịch sử",
        "Miêu tả cảnh đẹp đất nước",
        "Bày tỏ tình cảm với quê hương",
      ],
      correct: "Giải thích và chứng minh lòng yêu nước thể hiện qua hành động nhỏ",
    },
  },

  // Topic 4: Sự đoàn kết trong cộng đồng
  "Sự đoàn kết trong cộng đồng giúp vượt qua mọi khó khăn": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Nghị luận văn học",
        "Kể chuyện",
        "Biểu cảm",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Vai trò của sự đoàn kết giúp cộng đồng vượt qua khó khăn",
        "Kể về một lần giúp đỡ hàng xóm",
        "Mô tả không khí ngày hội",
        "Nêu cảm nghĩ về tình làng xóm",
      ],
      correct: "Vai trò của sự đoàn kết giúp cộng đồng vượt qua khó khăn",
    },
    q3: {
      options: [
        "Giải thích, chứng minh sức mạnh đoàn kết trong cộng đồng",
        "Kể lại một sự kiện cộng đồng",
        "Mô tả lễ hội truyền thống",
        "Bày tỏ niềm vui khi giúp đỡ người khác",
      ],
      correct: "Giải thích, chứng minh sức mạnh đoàn kết trong cộng đồng",
    },
  },

  // Topic 5: Giữ gìn bản sắc văn hóa
  "Giữ gìn bản sắc văn hóa dân tộc trong thời kì hội nhập": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Thuyết minh",
        "Miêu tả",
        "Tự sự",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Tầm quan trọng của việc giữ gìn bản sắc văn hóa dân tộc khi hội nhập",
        "Giới thiệu một lễ hội truyền thống",
        "Kể về phong tục tập quán",
        "Mô tả trang phục dân tộc",
      ],
      correct: "Tầm quan trọng của việc giữ gìn bản sắc văn hóa dân tộc khi hội nhập",
    },
    q3: {
      options: [
        "Giải thích và bàn luận về việc giữ gìn bản sắc văn hóa trong hội nhập",
        "Liệt kê các di sản văn hóa",
        "Kể lại trải nghiệm tại lễ hội",
        "Mô tả một làng nghề truyền thống",
      ],
      correct: "Giải thích và bàn luận về việc giữ gìn bản sắc văn hóa trong hội nhập",
    },
  },

  // Topic 6: Vai trò thế hệ trẻ
  "Vai trò của thế hệ trẻ trong việc xây dựng đất nước": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Nghị luận văn học",
        "Biểu cảm",
        "Thuyết minh",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Vai trò quan trọng của thế hệ trẻ đối với sự phát triển đất nước",
        "Kể về ước mơ của em",
        "Miêu tả hình ảnh tuổi trẻ",
        "Giới thiệu các ngành nghề cho thanh niên",
      ],
      correct: "Vai trò quan trọng của thế hệ trẻ đối với sự phát triển đất nước",
    },
    q3: {
      options: [
        "Giải thích, chứng minh vai trò của thế hệ trẻ trong xây dựng đất nước",
        "Kể về một tấm gương thanh niên",
        "Mô tả các hoạt động thanh niên",
        "Nêu cảm xúc về tuổi trẻ",
      ],
      correct: "Giải thích, chứng minh vai trò của thế hệ trẻ trong xây dựng đất nước",
    },
  },

  // Topic 7: Tương thân tương ái
  "Tinh thần tương thân tương ái là truyền thống quý báu của dân tộc Việt Nam": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Kể chuyện sáng tạo",
        "Tả cảnh sinh hoạt",
        "Thuyết minh",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Tinh thần tương thân tương ái là truyền thống quý báu cần gìn giữ",
        "Kể về một lần giúp đỡ người khác",
        "Mô tả hoạt động từ thiện",
        "Giới thiệu các tổ chức nhân đạo",
      ],
      correct: "Tinh thần tương thân tương ái là truyền thống quý báu cần gìn giữ",
    },
    q3: {
      options: [
        "Giải thích, chứng minh giá trị truyền thống tương thân tương ái",
        "Kể lại câu chuyện cảm động",
        "Miêu tả cảnh giúp đỡ nhau",
        "Nêu cảm xúc khi được giúp đỡ",
      ],
      correct: "Giải thích, chứng minh giá trị truyền thống tương thân tương ái",
    },
  },

  // Topic 8: Ý thức chấp hành pháp luật
  "Ý thức chấp hành pháp luật là biểu hiện của công dân có trách nhiệm": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Thuyết minh",
        "Biểu cảm",
        "Tự sự",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Ý thức chấp hành pháp luật thể hiện trách nhiệm công dân",
        "Kể về một vụ vi phạm pháp luật",
        "Giới thiệu các điều luật cơ bản",
        "Mô tả hoạt động tuyên truyền pháp luật",
      ],
      correct: "Ý thức chấp hành pháp luật thể hiện trách nhiệm công dân",
    },
    q3: {
      options: [
        "Giải thích, chứng minh ý thức chấp hành pháp luật là biểu hiện trách nhiệm",
        "Liệt kê các hình phạt vi phạm",
        "Kể lại vụ xử án",
        "Hướng dẫn cách tìm hiểu pháp luật",
      ],
      correct: "Giải thích, chứng minh ý thức chấp hành pháp luật là biểu hiện trách nhiệm",
    },
  },

  // Topic 9: Sự sẻ chia trong cộng đồng
  "Sự sẻ chia trong cộng đồng giúp xã hội trở nên tốt đẹp hơn": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Nghị luận văn học",
        "Miêu tả",
        "Tự sự",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Vai trò của sự sẻ chia trong việc xây dựng xã hội tốt đẹp",
        "Kể về một lần chia sẻ với bạn",
        "Mô tả hoạt động quyên góp",
        "Hướng dẫn cách tổ chức từ thiện",
      ],
      correct: "Vai trò của sự sẻ chia trong việc xây dựng xã hội tốt đẹp",
    },
    q3: {
      options: [
        "Giải thích, chứng minh sự sẻ chia giúp xã hội tốt đẹp hơn",
        "Kể lại chuyến đi từ thiện",
        "Miêu tả niềm vui khi cho đi",
        "Nêu cảm xúc khi được giúp đỡ",
      ],
      correct: "Giải thích, chứng minh sự sẻ chia giúp xã hội tốt đẹp hơn",
    },
  },

  // Topic 10: Bảo vệ chủ quyền lãnh thổ
  "Bảo vệ chủ quyền lãnh thổ là trách nhiệm thiêng liêng của mỗi công dân": {
    q1: {
      options: [
        "Nghị luận về một vấn đề đời sống",
        "Tự sự",
        "Miêu tả",
        "Thuyết minh",
      ],
      correct: "Nghị luận về một vấn đề đời sống",
    },
    q2: {
      options: [
        "Trách nhiệm thiêng liêng của công dân trong bảo vệ chủ quyền lãnh thổ",
        "Kể về cuộc đời một chiến sĩ biên phòng",
        "Mô tả vẻ đẹp biển đảo Việt Nam",
        "Giới thiệu lịch sử bảo vệ đất nước",
      ],
      correct: "Trách nhiệm thiêng liêng của công dân trong bảo vệ chủ quyền lãnh thổ",
    },
    q3: {
      options: [
        "Giải thích, chứng minh bảo vệ chủ quyền là trách nhiệm thiêng liêng",
        "Kể lại sự kiện lịch sử",
        "Miêu tả cảnh biên giới",
        "Bày tỏ tình yêu biển đảo",
      ],
      correct: "Giải thích, chứng minh bảo vệ chủ quyền là trách nhiệm thiêng liêng",
    },
  },
};

// ============================================
// TOPIC KEYWORDS (5 per topic)
// ============================================

const topicKeywords: Record<string, string[]> = {
  "Tinh thần tình nguyện của thanh niên là động lực phát triển cộng đồng": [
    "tình nguyện",
    "thanh niên",
    "cộng đồng",
    "phát triển",
    "đóng góp",
  ],
  "Mỗi người dân đều có trách nhiệm bảo vệ môi trường sống": [
    "trách nhiệm",
    "môi trường",
    "bảo vệ",
    "ý thức",
    "hành động",
  ],
  "Lòng yêu nước được thể hiện qua những hành động nhỏ hằng ngày": [
    "yêu nước",
    "hành động",
    "hằng ngày",
    "thể hiện",
    "trách nhiệm",
  ],
  "Sự đoàn kết trong cộng đồng giúp vượt qua mọi khó khăn": [
    "đoàn kết",
    "cộng đồng",
    "khó khăn",
    "sức mạnh",
    "tương trợ",
  ],
  "Giữ gìn bản sắc văn hóa dân tộc trong thời kì hội nhập": [
    "bản sắc",
    "văn hóa",
    "dân tộc",
    "hội nhập",
    "giữ gìn",
  ],
  "Vai trò của thế hệ trẻ trong việc xây dựng đất nước": [
    "thế hệ trẻ",
    "xây dựng",
    "đất nước",
    "vai trò",
    "cống hiến",
  ],
  "Tinh thần tương thân tương ái là truyền thống quý báu của dân tộc Việt Nam": [
    "tương thân tương ái",
    "truyền thống",
    "dân tộc",
    "yêu thương",
    "giúp đỡ",
  ],
  "Ý thức chấp hành pháp luật là biểu hiện của công dân có trách nhiệm": [
    "pháp luật",
    "chấp hành",
    "công dân",
    "trách nhiệm",
    "ý thức",
  ],
  "Sự sẻ chia trong cộng đồng giúp xã hội trở nên tốt đẹp hơn": [
    "sẻ chia",
    "cộng đồng",
    "xã hội",
    "tốt đẹp",
    "yêu thương",
  ],
  "Bảo vệ chủ quyền lãnh thổ là trách nhiệm thiêng liêng của mỗi công dân": [
    "chủ quyền",
    "lãnh thổ",
    "bảo vệ",
    "thiêng liêng",
    "công dân",
  ],
};

// ============================================
// TOPIC SPECIFIC HINTS
// (q1, q2, q3, q4, q5_1, q5_2, q6_1, q6_2, q7_1, q7_2, q7_3, q8, q9, q10_1, q10_2)
// ============================================

const topicSpecificHints: Record<string, Record<string, string>> = {
  // ---- Topic 1 ----
  "Tinh thần tình nguyện của thanh niên là động lực phát triển cộng đồng": {
    q1: "Vấn đề bàn luận: vai trò của tinh thần tình nguyện của thanh niên đối với sự phát triển cộng đồng.",
    q2: "Tinh thần tình nguyện của thanh niên thực sự là động lực quan trọng thúc đẩy sự phát triển của cộng đồng.",
    q3: "Tinh thần tình nguyện là sự tự nguyện đóng góp sức lực, thời gian, trí tuệ cho cộng đồng mà không vì lợi ích cá nhân.",
    q4: "Khẳng định thanh niên với tinh thần tình nguyện chính là lực lượng nòng cốt tạo nên sự thay đổi tích cực cho cộng đồng.",
    q5_1: "Thanh niên là lực lượng trẻ, khỏe, năng động, sáng tạo, có khả năng lan tỏa năng lượng tích cực đến mọi người.",
    q5_2: "Hoạt động tình nguyện giúp giải quyết nhiều vấn đề xã hội mà chính quyền chưa thể bao quát hết.",
    q6_1: "Khi thanh niên tình nguyện, họ mang đến sức trẻ, ý tưởng mới và nhiệt huyết giúp cộng đồng phát triển bền vững hơn.",
    q6_2: "Tinh thần tình nguyện tạo ra hiệu ứng lan tỏa, khích lệ nhiều người cùng hành động vì cộng đồng.",
    q7_1: "Các chiến dịch Mùa hè xanh của sinh viên giúp xây cầu, làm đường, dạy học ở vùng sâu vùng xa.",
    q7_2: "Đội thanh niên tình nguyện giúp đỡ người dân vùng lũ lụt miền Trung, quyên góp và phân phát nhu yếu phẩm.",
    q7_3: "Nhóm tình nguyện dạy tiếng Anh miễn phí cho trẻ em nông thôn, giúp các em có thêm cơ hội học tập.",
    q8: "Có người cho rằng hoạt động tình nguyện chỉ mang tính hình thức, nhưng thực tế nhiều chương trình đã tạo ra thay đổi lâu dài và thực chất cho cộng đồng.",
    q9: "Tinh thần tình nguyện không chỉ giúp cộng đồng phát triển mà còn rèn luyện nhân cách, kĩ năng cho chính người tham gia.",
    q10_1: "Tích cực tham gia các hoạt động tình nguyện tại trường và địa phương.",
    q10_2: "Lan tỏa tinh thần tình nguyện bằng cách rủ bạn bè, người thân cùng tham gia các chương trình vì cộng đồng.",
  },

  // ---- Topic 2 ----
  "Mỗi người dân đều có trách nhiệm bảo vệ môi trường sống": {
    q1: "Vấn đề bàn luận: trách nhiệm bảo vệ môi trường sống của mỗi người dân.",
    q2: "Bảo vệ môi trường không phải việc của riêng ai mà là trách nhiệm chung của mỗi công dân.",
    q3: "Bảo vệ môi trường sống là giữ gìn sự trong sạch của không khí, nguồn nước, đất đai và hệ sinh thái quanh ta.",
    q4: "Khẳng định mỗi người dân đều phải có ý thức và hành động cụ thể để bảo vệ môi trường sống.",
    q5_1: "Môi trường sống ảnh hưởng trực tiếp đến sức khỏe, chất lượng cuộc sống của mỗi người và cả cộng đồng.",
    q5_2: "Ô nhiễm môi trường ngày càng nghiêm trọng, nếu không hành động sớm sẽ gây hậu quả khôn lường cho thế hệ sau.",
    q6_1: "Mỗi hành động nhỏ như không xả rác, tiết kiệm nước, trồng cây đều góp phần tạo nên sự thay đổi lớn cho môi trường.",
    q6_2: "Khi mỗi người dân có ý thức, cộng đồng sẽ tạo thành sức mạnh tập thể to lớn trong việc bảo vệ môi trường.",
    q7_1: "Phong trào \"Ngày Chủ nhật xanh\" ở nhiều thành phố, người dân cùng nhau dọn rác, trồng cây xanh.",
    q7_2: "Nhiều trường học tổ chức hoạt động phân loại rác, tái chế đồ dùng, giáo dục ý thức bảo vệ môi trường cho học sinh.",
    q7_3: "Thảm họa ô nhiễm biển do xả thải công nghiệp ở Formosa (2016) cho thấy hậu quả khi con người không bảo vệ môi trường.",
    q8: "Có người cho rằng bảo vệ môi trường là việc của nhà nước, nhưng thực tế mỗi cá nhân đều có vai trò quan trọng trong việc này.",
    q9: "Bảo vệ môi trường là bảo vệ chính cuộc sống của chúng ta và tương lai của con cháu mai sau.",
    q10_1: "Thực hiện các thói quen xanh hằng ngày: tiết kiệm điện nước, phân loại rác, hạn chế đồ nhựa.",
    q10_2: "Tuyên truyền, vận động gia đình và bạn bè cùng chung tay bảo vệ môi trường.",
  },

  // ---- Topic 3 ----
  "Lòng yêu nước được thể hiện qua những hành động nhỏ hằng ngày": {
    q1: "Vấn đề bàn luận: lòng yêu nước không chỉ thể hiện ở những việc lớn lao mà còn qua hành động nhỏ hằng ngày.",
    q2: "Lòng yêu nước hoàn toàn có thể được thể hiện qua những hành động nhỏ, bình dị trong cuộc sống hằng ngày.",
    q3: "Lòng yêu nước là tình cảm gắn bó, yêu thương, tự hào và sẵn sàng cống hiến cho quê hương, đất nước.",
    q4: "Khẳng định yêu nước không phải khái niệm xa vời mà rất gần gũi, thiết thực trong đời sống hằng ngày.",
    q5_1: "Yêu nước ở thời bình không cần phải ra chiến trường mà thể hiện qua trách nhiệm với cộng đồng, xã hội mỗi ngày.",
    q5_2: "Những hành động nhỏ khi được tích lũy sẽ tạo nên sức mạnh lớn, góp phần xây dựng đất nước giàu mạnh.",
    q6_1: "Học tập chăm chỉ, lao động cần cù chính là cách xây dựng bản thân, đóng góp cho sự phát triển của đất nước.",
    q6_2: "Giữ gìn vệ sinh nơi công cộng, tôn trọng pháp luật, sống có trách nhiệm đều là biểu hiện của lòng yêu nước.",
    q7_1: "Học sinh chăm chỉ học tập, đạt thành tích cao trong các kì thi quốc tế, mang vinh quang về cho Tổ quốc.",
    q7_2: "Người nông dân cần cù lao động, sản xuất nông sản chất lượng, góp phần phát triển kinh tế đất nước.",
    q7_3: "Mỗi người ý thức giữ gìn vệ sinh đường phố, không xả rác bừa bãi, góp phần xây dựng hình ảnh đẹp của đất nước.",
    q8: "Có người cho rằng yêu nước phải là những hành động lớn lao, nhưng thực tế mỗi hành động nhỏ đều có giá trị khi xuất phát từ tấm lòng chân thành.",
    q9: "Khi mỗi người thể hiện lòng yêu nước qua hành động cụ thể, đất nước sẽ ngày càng phát triển, văn minh hơn.",
    q10_1: "Học tập tốt, rèn luyện đạo đức, sống có trách nhiệm với bản thân và cộng đồng.",
    q10_2: "Tìm hiểu và giữ gìn truyền thống, văn hóa dân tộc, lan tỏa hình ảnh đẹp của Việt Nam.",
  },

  // ---- Topic 4 ----
  "Sự đoàn kết trong cộng đồng giúp vượt qua mọi khó khăn": {
    q1: "Vấn đề bàn luận: sức mạnh của sự đoàn kết trong cộng đồng khi đối mặt với khó khăn.",
    q2: "Sự đoàn kết chính là sức mạnh to lớn giúp cộng đồng vượt qua mọi thử thách, khó khăn trong cuộc sống.",
    q3: "Đoàn kết là sự gắn bó, đồng lòng, chung sức của mọi người trong cộng đồng cùng hướng tới mục tiêu chung.",
    q4: "Khẳng định đoàn kết là sức mạnh vô địch, là yếu tố quyết định giúp cộng đồng vượt qua nghịch cảnh.",
    q5_1: "Khi đoàn kết, mỗi cá nhân đều đóng góp một phần sức lực, tạo nên nguồn lực lớn gấp nhiều lần.",
    q5_2: "Tinh thần đoàn kết tạo niềm tin, sự động viên lẫn nhau, giúp mọi người không nản chí trước khó khăn.",
    q6_1: "Một cá nhân đơn lẻ khó vượt qua thử thách lớn, nhưng khi cả cộng đồng chung tay, không khó khăn nào là không thể vượt qua.",
    q6_2: "Lịch sử dân tộc Việt Nam đã chứng minh đoàn kết là truyền thống quý báu giúp đất nước chiến thắng mọi kẻ thù.",
    q7_1: "Người dân miền Trung đoàn kết giúp nhau vượt qua bão lũ, chia sẻ lương thực, nơi ở trong những ngày gian khó.",
    q7_2: "Trong đại dịch COVID-19, cả nước đồng lòng thực hiện giãn cách, quyên góp cho quỹ vaccine, hỗ trợ tuyến đầu chống dịch.",
    q7_3: "Cây ATM gạo, siêu thị 0 đồng ra đời trong mùa dịch, thể hiện tinh thần đoàn kết, sẻ chia của cộng đồng.",
    q8: "Có người cho rằng trong xã hội hiện đại, mỗi người tự lo cho mình là đủ, nhưng thực tế cho thấy không ai có thể sống tách biệt khỏi cộng đồng.",
    q9: "Đoàn kết không chỉ giúp vượt qua khó khăn mà còn tạo nên sức mạnh xây dựng cộng đồng phát triển bền vững.",
    q10_1: "Tích cực tham gia các hoạt động tập thể, sẵn sàng giúp đỡ những người xung quanh khi gặp khó khăn.",
    q10_2: "Xây dựng tinh thần đoàn kết ngay từ trong gia đình, lớp học, khu phố bằng sự tôn trọng và yêu thương lẫn nhau.",
  },

  // ---- Topic 5 ----
  "Giữ gìn bản sắc văn hóa dân tộc trong thời kì hội nhập": {
    q1: "Vấn đề bàn luận: tầm quan trọng của việc giữ gìn bản sắc văn hóa dân tộc trong bối cảnh hội nhập quốc tế.",
    q2: "Giữ gìn bản sắc văn hóa dân tộc là điều vô cùng cần thiết, nhất là trong thời kì hội nhập toàn cầu.",
    q3: "Bản sắc văn hóa dân tộc là những giá trị đặc trưng về phong tục, tập quán, ngôn ngữ, nghệ thuật, lối sống riêng của mỗi dân tộc.",
    q4: "Khẳng định bản sắc văn hóa là linh hồn của dân tộc, mất bản sắc là mất đi chính mình.",
    q5_1: "Bản sắc văn hóa là nền tảng tinh thần, là sợi dây gắn kết các thế hệ và tạo nên sức mạnh nội sinh cho dân tộc.",
    q5_2: "Trong hội nhập, nếu không giữ gìn bản sắc, ta dễ bị hòa tan, đánh mất những giá trị truyền thống quý báu.",
    q6_1: "Văn hóa dân tộc là \"căn cước\" để thế giới nhận biết và tôn trọng mỗi quốc gia, mỗi dân tộc.",
    q6_2: "Giữ gìn bản sắc không có nghĩa là đóng cửa mà là tiếp thu có chọn lọc tinh hoa văn hóa nhân loại trên nền tảng truyền thống.",
    q7_1: "Áo dài Việt Nam được thế giới yêu thích và ngưỡng mộ, trở thành biểu tượng văn hóa đặc trưng của Việt Nam.",
    q7_2: "Nhiều bạn trẻ tự hào quảng bá ẩm thực Việt Nam ra thế giới như phở, bánh mì, bún chả.",
    q7_3: "Lễ hội truyền thống như Tết Nguyên đán, Hội Gióng, Lễ hội đền Hùng vẫn được duy trì và phát huy giá trị.",
    q8: "Có người cho rằng hội nhập thì cần hiện đại hóa hoàn toàn, nhưng một quốc gia mạnh phải biết kết hợp hài hòa giữa truyền thống và hiện đại.",
    q9: "Giữ gìn bản sắc văn hóa là gìn giữ cội nguồn, tạo nền tảng vững chắc cho sự phát triển bền vững của đất nước.",
    q10_1: "Tìm hiểu, học hỏi về phong tục, tập quán, lịch sử, văn hóa dân tộc qua sách vở, bảo tàng, di tích.",
    q10_2: "Tích cực tham gia và quảng bá các hoạt động văn hóa truyền thống tại trường học và địa phương.",
  },

  // ---- Topic 6 ----
  "Vai trò của thế hệ trẻ trong việc xây dựng đất nước": {
    q1: "Vấn đề bàn luận: vai trò quan trọng của thế hệ trẻ trong sự nghiệp xây dựng và phát triển đất nước.",
    q2: "Thế hệ trẻ đóng vai trò vô cùng quan trọng, là lực lượng nòng cốt trong việc xây dựng đất nước.",
    q3: "Thế hệ trẻ là những người trẻ tuổi, đang trong độ tuổi học tập, lao động, có sức khỏe, tri thức và khát vọng cống hiến.",
    q4: "Khẳng định thế hệ trẻ là tương lai của đất nước, là nhân tố quyết định vận mệnh và sự phát triển của dân tộc.",
    q5_1: "Thế hệ trẻ có sức khỏe, trí tuệ, sự năng động và khả năng tiếp thu nhanh những kiến thức, công nghệ mới.",
    q5_2: "Đất nước đang trong thời kì đổi mới và hội nhập, cần sức trẻ để đưa đất nước phát triển ngang tầm quốc tế.",
    q6_1: "Thanh niên là người tiếp nối sự nghiệp của các thế hệ đi trước, nắm trong tay tương lai của đất nước.",
    q6_2: "Với tri thức và công nghệ, thế hệ trẻ có thể tạo ra những đột phá trong kinh tế, khoa học, văn hóa, xã hội.",
    q7_1: "Nhiều bạn trẻ Việt Nam đạt giải cao tại các kì thi Olympic quốc tế về Toán, Vật lí, Tin học.",
    q7_2: "Các bạn trẻ khởi nghiệp thành công, tạo ra sản phẩm công nghệ \"Made in Vietnam\" vươn ra thế giới.",
    q7_3: "Chủ tịch Hồ Chí Minh từng nói: \"Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.\"",
    q8: "Có người cho rằng thế hệ trẻ ngày nay chỉ biết hưởng thụ, nhưng thực tế có rất nhiều bạn trẻ tài năng, tâm huyết đang cống hiến cho đất nước.",
    q9: "Nhận thức vai trò của mình, thế hệ trẻ sẽ có ý thức hơn trong học tập, rèn luyện để trở thành công dân có ích.",
    q10_1: "Ra sức học tập, rèn luyện đạo đức, bồi dưỡng tài năng để trở thành người có ích cho xã hội.",
    q10_2: "Tham gia các hoạt động xã hội, đoàn thể, sẵn sàng đóng góp sức trẻ cho sự phát triển của đất nước.",
  },

  // ---- Topic 7 ----
  "Tinh thần tương thân tương ái là truyền thống quý báu của dân tộc Việt Nam": {
    q1: "Vấn đề bàn luận: giá trị truyền thống tương thân tương ái của dân tộc Việt Nam.",
    q2: "Tương thân tương ái là truyền thống vô cùng quý báu, cần được gìn giữ và phát huy trong đời sống.",
    q3: "Tương thân tương ái là tinh thần yêu thương, đùm bọc, giúp đỡ lẫn nhau, nhất là trong lúc khó khăn, hoạn nạn.",
    q4: "Khẳng định tương thân tương ái là truyền thống tốt đẹp, là sức mạnh tinh thần to lớn của dân tộc Việt Nam.",
    q5_1: "Truyền thống này được hình thành từ lịch sử hàng nghìn năm đấu tranh với thiên tai, địch họa của dân tộc ta.",
    q5_2: "Tương thân tương ái giúp gắn kết cộng đồng, tạo nên sức mạnh đoàn kết vượt qua mọi gian khó.",
    q6_1: "Con người không thể sống một mình, tinh thần giúp đỡ lẫn nhau giúp xã hội ấm áp, nhân văn hơn.",
    q6_2: "Khi giúp đỡ người khác, bản thân ta cũng nhận được niềm vui, sự thanh thản và ý nghĩa cuộc sống.",
    q7_1: "Ca dao \"Lá lành đùm lá rách\" phản ánh truyền thống giúp đỡ nhau từ xa xưa của người Việt Nam.",
    q7_2: "Phong trào \"Tết vì người nghèo\" mỗi dịp Tết Nguyên đán quyên góp hàng tỉ đồng giúp đỡ những hoàn cảnh khó khăn.",
    q7_3: "Trong đại dịch COVID-19, hàng triệu suất cơm miễn phí, ATM gạo, siêu thị 0 đồng đã giúp đỡ người lao động nghèo.",
    q8: "Có người lợi dụng lòng tốt để trục lợi, nhưng điều đó không làm mất đi giá trị cao đẹp của truyền thống tương thân tương ái.",
    q9: "Tương thân tương ái giúp xã hội bớt đi nỗi đau, thêm niềm vui, xây dựng một cộng đồng nhân ái, văn minh.",
    q10_1: "Sẵn sàng giúp đỡ bạn bè, người thân và những người xung quanh khi họ gặp khó khăn.",
    q10_2: "Tham gia các hoạt động từ thiện, quyên góp ủng hộ đồng bào vùng thiên tai, người có hoàn cảnh khó khăn.",
  },

  // ---- Topic 8 ----
  "Ý thức chấp hành pháp luật là biểu hiện của công dân có trách nhiệm": {
    q1: "Vấn đề bàn luận: mối quan hệ giữa ý thức chấp hành pháp luật và trách nhiệm công dân.",
    q2: "Chấp hành pháp luật là biểu hiện rõ ràng nhất của một công dân có ý thức, có trách nhiệm với cộng đồng và đất nước.",
    q3: "Ý thức chấp hành pháp luật là sự tự giác tuân thủ các quy định của pháp luật trong mọi hoạt động, mọi lĩnh vực đời sống.",
    q4: "Khẳng định người có ý thức chấp hành pháp luật là người biết sống có trách nhiệm, góp phần xây dựng xã hội trật tự, công bằng.",
    q5_1: "Pháp luật là công cụ bảo vệ quyền lợi chính đáng của mỗi người, chấp hành pháp luật chính là bảo vệ quyền lợi của bản thân.",
    q5_2: "Khi mọi người đều chấp hành pháp luật, xã hội sẽ có trật tự, kỉ cương, tạo môi trường sống an toàn, lành mạnh.",
    q6_1: "Pháp luật được xây dựng trên nền tảng đạo đức và lợi ích chung, nên chấp hành pháp luật cũng là hành động đúng đắn về mặt đạo đức.",
    q6_2: "Nếu mỗi người đều tự ý làm theo ý mình, bất chấp pháp luật, xã hội sẽ rối loạn, mất trật tự, ai cũng bị ảnh hưởng.",
    q7_1: "Chấp hành luật giao thông: đội mũ bảo hiểm, dừng đèn đỏ giúp giảm tai nạn, bảo vệ tính mạng con người.",
    q7_2: "Việc nộp thuế đầy đủ, đúng hạn giúp nhà nước có ngân sách đầu tư cho giáo dục, y tế, an sinh xã hội.",
    q7_3: "Nhiều bạn trẻ vi phạm luật an toàn giao thông (phóng nhanh, vượt ẩu) đã gây ra hậu quả đau lòng cho bản thân và gia đình.",
    q8: "Có người cho rằng pháp luật quá cứng nhắc, hạn chế tự do, nhưng thực tế pháp luật bảo vệ tự do chính đáng và giữ gìn trật tự xã hội.",
    q9: "Ý thức chấp hành pháp luật giúp xây dựng xã hội công bằng, văn minh, nơi mọi người được bảo vệ quyền lợi chính đáng.",
    q10_1: "Chủ động tìm hiểu các quy định pháp luật liên quan đến đời sống hằng ngày, nhất là luật giao thông, an ninh mạng.",
    q10_2: "Gương mẫu chấp hành pháp luật và nhắc nhở người thân, bạn bè cùng thực hiện.",
  },

  // ---- Topic 9 ----
  "Sự sẻ chia trong cộng đồng giúp xã hội trở nên tốt đẹp hơn": {
    q1: "Vấn đề bàn luận: vai trò của sự sẻ chia trong cộng đồng đối với việc xây dựng xã hội tốt đẹp.",
    q2: "Sự sẻ chia trong cộng đồng thực sự là yếu tố quan trọng giúp xã hội ngày càng tốt đẹp, nhân văn hơn.",
    q3: "Sẻ chia là biết quan tâm, giúp đỡ, đồng cảm với người khác, sẵn sàng cho đi cả về vật chất lẫn tinh thần.",
    q4: "Khẳng định sự sẻ chia là chất keo gắn kết cộng đồng, giúp mọi người sống gần nhau hơn và xã hội tốt đẹp hơn.",
    q5_1: "Khi sẻ chia, nỗi đau được chia bớt, niềm vui được nhân lên, cuộc sống trở nên có ý nghĩa hơn.",
    q5_2: "Xã hội có sự sẻ chia sẽ giảm bớt bất bình đẳng, khoảng cách giàu nghèo, tạo nên sự hòa thuận, ấm áp.",
    q6_1: "Con người là sinh vật xã hội, ai cũng cần sự quan tâm, giúp đỡ, nên sẻ chia là nhu cầu tất yếu của cuộc sống.",
    q6_2: "Một xã hội thiếu sự sẻ chia sẽ trở nên lạnh lẽo, vô cảm, con người sống cô đơn và bất hạnh.",
    q7_1: "Phong trào hiến máu nhân đạo \"Lễ hội Xuân hồng\" thu hút hàng triệu người tham gia, cứu sống nhiều bệnh nhân.",
    q7_2: "Các quỹ học bổng dành cho học sinh nghèo hiếu học giúp nhiều em có cơ hội tiếp tục con đường học tập.",
    q7_3: "Cộng đồng mạng quyên góp giúp đỡ những hoàn cảnh éo le, bệnh tật, thể hiện tinh thần sẻ chia mạnh mẽ.",
    q8: "Có người cho rằng sẻ chia chỉ là cho đi, sẽ bị thiệt thòi, nhưng thực tế khi cho đi ta nhận lại niềm vui, sự kính trọng và tình yêu thương.",
    q9: "Sự sẻ chia giúp xóa bỏ sự vô cảm, xây dựng một cộng đồng đầy tình người và sự nhân ái.",
    q10_1: "Bắt đầu sẻ chia từ những điều nhỏ nhất: một lời động viên, một cử chỉ quan tâm với người xung quanh.",
    q10_2: "Tham gia các hoạt động thiện nguyện, quyên góp, giúp đỡ cộng đồng do nhà trường và địa phương tổ chức.",
  },

  // ---- Topic 10 ----
  "Bảo vệ chủ quyền lãnh thổ là trách nhiệm thiêng liêng của mỗi công dân": {
    q1: "Vấn đề bàn luận: trách nhiệm thiêng liêng của mỗi công dân trong việc bảo vệ chủ quyền lãnh thổ.",
    q2: "Bảo vệ chủ quyền lãnh thổ là trách nhiệm cao cả, thiêng liêng mà mỗi công dân Việt Nam cần ý thức và thực hiện.",
    q3: "Chủ quyền lãnh thổ là quyền tối cao của một quốc gia đối với vùng đất, vùng biển, vùng trời thuộc về mình.",
    q4: "Khẳng định bảo vệ chủ quyền lãnh thổ không chỉ là nhiệm vụ của quân đội mà là trách nhiệm của mỗi công dân.",
    q5_1: "Lãnh thổ là nơi sinh sống, là quê hương, là Tổ quốc mà cha ông ta đã đổ xương máu để gìn giữ qua hàng nghìn năm.",
    q5_2: "Trong bối cảnh quốc tế phức tạp, chủ quyền lãnh thổ luôn bị đe dọa, đòi hỏi mỗi công dân phải có ý thức bảo vệ.",
    q6_1: "Mỗi tấc đất, mỗi vùng biển đều mang giá trị lịch sử, kinh tế, văn hóa và tâm linh của cả dân tộc.",
    q6_2: "Khi mỗi công dân đều có ý thức bảo vệ chủ quyền, đất nước sẽ có sức mạnh tổng hợp to lớn trước mọi thách thức.",
    q7_1: "Các chiến sĩ hải quân ngày đêm canh giữ biển đảo Trường Sa, Hoàng Sa, bảo vệ chủ quyền thiêng liêng của Tổ quốc.",
    q7_2: "Ngư dân Việt Nam kiên cường bám biển, vừa mưu sinh vừa góp phần khẳng định chủ quyền biển đảo.",
    q7_3: "Chương trình \"Vì Trường Sa thân yêu\" quyên góp hàng tỉ đồng hỗ trợ chiến sĩ và nhân dân trên các đảo tiền tiêu.",
    q8: "Có người cho rằng bảo vệ chủ quyền chỉ là việc của nhà nước và quân đội, nhưng thực tế mỗi công dân đều có thể đóng góp bằng nhiều cách khác nhau.",
    q9: "Ý thức bảo vệ chủ quyền lãnh thổ là thể hiện lòng yêu nước, giữ gìn thành quả mà cha ông đã gây dựng.",
    q10_1: "Tìm hiểu lịch sử, pháp lí về chủ quyền biển đảo của Việt Nam; nắm vững kiến thức quốc phòng an ninh.",
    q10_2: "Lan tỏa tình yêu biển đảo, quê hương qua các hoạt động tuyên truyền và ủng hộ lực lượng bảo vệ Tổ quốc.",
  },
};

// ============================================
// GENERAL HINTS (for getWritingSections)
// ============================================

const generalHints: Record<string, string[]> = {
  moBai: [
    "Giới thiệu vấn đề cần bàn luận một cách tự nhiên, hấp dẫn.",
    "Nêu rõ ý kiến, quan điểm của bản thân về vấn đề.",
    "Có thể mở bài bằng một câu danh ngôn, ca dao hoặc tình huống thực tế.",
    "Mở bài nên ngắn gọn, súc tích, khoảng 3-4 câu.",
  ],
  thanBai: [
    "Giải thích rõ ràng thực chất của vấn đề được bàn luận.",
    "Nêu khẳng định và lí lẽ thuyết phục, có dẫn chứng cụ thể minh họa.",
    "Đưa ra ít nhất 2-3 ví dụ thực tế để chứng minh cho lập luận.",
    "Phản biện ý kiến trái chiều để bài viết thêm sâu sắc, toàn diện.",
    "Sắp xếp các luận điểm theo trình tự logic, mạch lạc.",
  ],
  ketBai: [
    "Khẳng định lại ý nghĩa, giá trị của vấn đề đã bàn luận.",
    "Nêu phương hướng hành động cụ thể, thiết thực cho bản thân và mọi người.",
    "Kết bài nên có sức gợi, để lại ấn tượng cho người đọc.",
    "Kết bài khoảng 3-4 câu, tránh lặp lại nguyên văn mở bài.",
  ],
};

// ============================================
// OUTLINE SLOT CONFIG
// ============================================

const outlineSlotConfig: OutlineSectionConfig[] = [
  {
    section: "MỞ BÀI",
    color: "blue",
    items: [
      { key: "gioiThieu", label: "Giới thiệu vấn đề" },
      { key: "yKien", label: "Nêu ý kiến" },
    ],
  },
  {
    section: "THÂN BÀI",
    color: "purple",
    items: [
      { key: "giaiThich", label: "Giải thích vấn đề" },
      { key: "khangDinh", label: "Khẳng định" },
    ],
    subSection: {
      label: "Lí lẽ, bằng chứng và ví dụ",
      rows: [
        { liLe: "liLe1", bangChung: "bangChung1", num: 1 },
        { liLe: "liLe2", bangChung: "bangChung2", num: 2 },
        { liLe: "liLe3", bangChung: "bangChung3", num: 3 },
      ],
    },
  },
  {
    section: "THÂN BÀI (tiếp)",
    color: "purple",
    items: [{ key: "phanBien", label: "Phản biện" }],
  },
  {
    section: "KẾT BÀI",
    color: "orange",
    items: [
      { key: "yNghia", label: "Ý nghĩa" },
      { key: "phuongHuong", label: "Phương hướng hành động" },
    ],
  },
];

// ============================================
// CHECKLIST ITEMS
// ============================================

const checklistItems: ChecklistItem[] = [
  {
    key: "structure",
    label: "Bố cục rõ ràng",
    description: "Bài viết có đủ 3 phần: mở bài, thân bài, kết bài với bố cục mạch lạc.",
  },
  {
    key: "argument",
    label: "Lập luận thuyết phục",
    description: "Các luận điểm rõ ràng, lí lẽ chặt chẽ, có dẫn chứng cụ thể minh họa.",
  },
  {
    key: "evidence",
    label: "Dẫn chứng phong phú",
    description: "Có ít nhất 2-3 ví dụ/dẫn chứng thực tế, cụ thể và phù hợp.",
  },
  {
    key: "counterargument",
    label: "Có phản biện",
    description: "Bài viết đề cập và phản biện ý kiến trái chiều để thêm sâu sắc.",
  },
  {
    key: "language",
    label: "Ngôn ngữ phù hợp",
    description: "Sử dụng từ ngữ chính xác, câu văn mạch lạc, giọng văn nghị luận rõ ràng.",
  },
  {
    key: "wordcount",
    label: "Đủ dung lượng (~500 từ)",
    description: "Bài viết đạt khoảng 500 từ, đảm bảo triển khai đầy đủ các ý.",
  },
];

// ============================================
// GET WRITING SECTIONS
// ============================================

function getWritingSections(slots: Record<string, string>): WritingSection[] {
  return [
    {
      key: "moBai",
      title: "MỞ BÀI",
      color: "blue",
      prompt:
        "Viết phần mở bài: giới thiệu vấn đề cần bàn luận và nêu ý kiến của bản thân (khoảng 3-4 câu).",
      hints: generalHints.moBai,
      outlineItems: [
        { label: "Giới thiệu vấn đề", value: slots.gioiThieu || "" },
        { label: "Ý kiến", value: slots.yKien || "" },
      ],
    },
    {
      key: "thanBai1",
      title: "THÂN BÀI – Giải thích & Khẳng định",
      color: "purple",
      prompt:
        "Viết phần giải thích vấn đề và nêu khẳng định. Giải thích rõ các khái niệm, nội dung cốt lõi của vấn đề.",
      hints: [generalHints.thanBai[0], generalHints.thanBai[1]],
      outlineItems: [
        { label: "Giải thích", value: slots.giaiThich || "" },
        { label: "Khẳng định", value: slots.khangDinh || "" },
      ],
    },
    {
      key: "thanBai2",
      title: "THÂN BÀI – Lí lẽ, bằng chứng & ví dụ",
      color: "purple",
      prompt:
        "Viết phần triển khai các lí lẽ, bằng chứng và ví dụ minh họa. Mỗi lí lẽ nên đi kèm dẫn chứng cụ thể.",
      hints: [generalHints.thanBai[2], generalHints.thanBai[3], generalHints.thanBai[4]],
      outlineItems: [
        { label: "Lí lẽ 1", value: slots.liLe1 || "" },
        { label: "Bằng chứng 1", value: slots.bangChung1 || "" },
        { label: "Lí lẽ 2", value: slots.liLe2 || "" },
        { label: "Bằng chứng 2", value: slots.bangChung2 || "" },
        { label: "Lí lẽ 3", value: slots.liLe3 || "" },
        { label: "Bằng chứng 3", value: slots.bangChung3 || "" },
      ],
    },
    {
      key: "thanBai3",
      title: "THÂN BÀI – Phản biện",
      color: "purple",
      prompt:
        "Viết phần phản biện: nêu ý kiến trái chiều và phản bác một cách thuyết phục, lịch sự.",
      hints: [
        "Nêu ý kiến trái chiều một cách khách quan.",
        "Phản bác bằng lí lẽ và dẫn chứng cụ thể.",
        "Giữ giọng văn lịch sự, tôn trọng ý kiến khác.",
      ],
      outlineItems: [{ label: "Phản biện", value: slots.phanBien || "" }],
    },
    {
      key: "ketBai",
      title: "KẾT BÀI",
      color: "orange",
      prompt:
        "Viết phần kết bài: khẳng định lại ý nghĩa của vấn đề và nêu phương hướng hành động (khoảng 3-4 câu).",
      hints: generalHints.ketBai,
      outlineItems: [
        { label: "Ý nghĩa", value: slots.yNghia || "" },
        { label: "Phương hướng hành động", value: slots.phuongHuong || "" },
      ],
    },
  ];
}

// ============================================
// EXPORT GRADE 8 DATA
// ============================================

export const grade8Data: GradeData = {
  grade: GRADE,
  label: LABEL,
  essayType: ESSAY_TYPE,
  wordCount: WORD_COUNT,
  topics,
  topicQuizData,
  topicKeywords,
  timYQuestions,
  topicSpecificHints,
  generalHints,
  outlineSlotConfig,
  checklistItems,
  getWritingSections,
  stepsConfig: STEPS_CONFIG,
};

export default grade8Data;
