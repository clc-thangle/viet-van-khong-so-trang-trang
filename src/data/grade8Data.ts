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
// (Hiện tượng đời sống)
// ============================================

const GRADE = 8;
const LABEL = "Lớp 8";
const ESSAY_TYPE =
  "VIẾT MỘT BÀI VĂN NGHỊ LUẬN VỀ MỘT VẤN ĐỀ ĐỜI SỐNG (HIỆN TƯỢNG ĐỜI SỐNG)";
const WORD_COUNT = 500;

// ============================================
// 10 TOPICS (Hiện tượng đời sống)
// ============================================

const topics: string[] = [
  'Có ý kiến cho rằng: "Nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Gian lận trong thi cử là hành vi đáng lên án". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Lãng phí thức ăn đang trở thành vấn đề đáng báo động". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Thói quen đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Nói tục chửi thề trong giới trẻ ngày càng phổ biến và đáng lo ngại". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Sống ảo trên mạng xã hội đang làm méo mó giá trị thực của cuộc sống". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Xả rác bừa bãi đang hủy hoại môi trường sống". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Học sinh thiếu kỹ năng sống là vấn đề đáng quan tâm". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
  'Có ý kiến cho rằng: "Nghiện game online ảnh hưởng nghiêm trọng đến học tập và sức khỏe của học sinh". Em hãy viết một bài văn (khoảng 500 chữ) trình bày suy nghĩ của em về ý kiến đó',
];

// ============================================
// TÌM Ý QUESTIONS (10 questions)
// ============================================

const timYQuestions: TimYQuestion[] = [
  {
    id: "q1",
    label: "Vấn đề cần bàn luận là gì?",
    placeholder: "Nhập vấn đề cần bàn luận...",
  },
  {
    id: "q2",
    label: "Nêu ý kiến về vấn đề được bàn luận",
    placeholder: "Nhập ý kiến của em...",
  },
  {
    id: "q3",
    label: "Giải thích thực chất của vấn đề được bàn luận",
    placeholder: "Giải thích thực chất...",
  },
  {
    id: "q4",
    label: "Ý kiến trên muốn khẳng định điều gì?",
    placeholder: "Nhập điều muốn khẳng định...",
  },
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
  {
    id: "q8",
    label: "Có ý kiến nào khác không?",
    placeholder: "Nhập ý kiến khác (phản biện)...",
  },
  {
    id: "q9",
    label: "Vấn đề được bàn luận có ý nghĩa gì?",
    placeholder: "Nhập ý nghĩa...",
  },
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
  // 1. Nghiện mạng xã hội
  [topics[0]]: {
    q1: {
      options: ["Nghiện mạng xã hội", "Giới trẻ", "Ảnh hưởng"],
      correct: "Nghiện mạng xã hội",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
    q3: {
      options: [
        "Bàn về tác hại của việc nghiện mạng xã hội đối với thế hệ trẻ",
        "Bàn về lợi ích của công nghệ trong đời sống",
        "Bàn về cách sử dụng internet hiệu quả",
      ],
      correct: "Bàn về tác hại của việc nghiện mạng xã hội đối với thế hệ trẻ",
    },
  },

  // 2. Bạo lực học đường
  [topics[1]]: {
    q1: {
      options: ["Bạo lực học đường", "Nhức nhối", "Giải quyết"],
      correct: "Bạo lực học đường",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 3. Gian lận thi cử
  [topics[2]]: {
    q1: {
      options: ["Gian lận thi cử", "Giáo dục", "Giá trị thực sự"],
      correct: "Gian lận thi cử",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 4. Lãng phí thức ăn
  [topics[3]]: {
    q1: {
      options: ["Lãng phí thức ăn", "Xã hội hiện đại", "Đáng báo động"],
      correct: "Lãng phí thức ăn",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
    q3: {
      options: [
        "Bàn về mức độ nghiêm trọng của hiện tượng lãng phí thức ăn trong xã hội ngày nay",
        "Bàn về cách tiết kiệm chi tiêu trong gia đình",
        "Bàn về vấn đề an toàn vệ sinh thực phẩm",
      ],
      correct:
        "Bàn về mức độ nghiêm trọng của hiện tượng lãng phí thức ăn trong xã hội ngày nay",
    },
  },

  // 5. Đọc sách bị thay thế
  [topics[4]]: {
    q1: {
      options: ["Đọc sách", "Thiết bị điện tử", "Thói quen"],
      correct: "Đọc sách",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 6. Nói tục chửi thề
  [topics[5]]: {
    q1: {
      options: ["Nói tục chửi thề", "Giới trẻ", "Văn hóa ứng xử"],
      correct: "Nói tục chửi thề",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
    q3: {
      options: [
        "Bàn về thực trạng nói tục chửi thề trong giới trẻ và tác hại của nó",
        "Bàn về cách giáo dục nếp sống văn minh cho học sinh",
        "Bàn về vai trò của ngôn ngữ trong giao tiếp hằng ngày",
      ],
      correct:
        "Bàn về thực trạng nói tục chửi thề trong giới trẻ và tác hại của nó",
    },
  },

  // 7. Sống ảo
  [topics[6]]: {
    q1: {
      options: ["Sống ảo", "Mạng xã hội", "Đánh mất chính mình"],
      correct: "Sống ảo",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 8. Xả rác bừa bãi
  [topics[7]]: {
    q1: {
      options: ["Xả rác bừa bãi", "Môi trường", "Ô nhiễm"],
      correct: "Xả rác bừa bãi",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
    q3: {
      options: [
        "Bàn về tác hại của thói quen xả rác bừa bãi đối với môi trường sống",
        "Bàn về cách phát triển năng lượng tái tạo",
        "Bàn về trách nhiệm của doanh nghiệp đối với môi trường",
      ],
      correct:
        "Bàn về tác hại của thói quen xả rác bừa bãi đối với môi trường sống",
    },
  },

  // 9. Thiếu kỹ năng sống
  [topics[8]]: {
    q1: {
      options: ["Thiếu kỹ năng sống", "Giáo dục", "Lý thuyết"],
      correct: "Thiếu kỹ năng sống",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 10. Nghiện game online
  [topics[9]]: {
    q1: {
      options: ["Nghiện game online", "Học tập", "Sức khỏe"],
      correct: "Nghiện game online",
    },
    q2: {
      options: ["Trình bày ý kiến tán thành", "Trình bày ý kiến phản đối"],
      correct: "Trình bày ý kiến tán thành",
    },
    q3: {
      options: [
        "Bàn về tác hại của việc nghiện game online đối với học tập và sức khỏe của học sinh",
        "Bàn về lợi ích của trò chơi điện tử đối với trí tuệ",
        "Bàn về cách quản lý thời gian hiệu quả cho học sinh",
      ],
      correct:
        "Bàn về tác hại của việc nghiện game online đối với học tập và sức khỏe của học sinh",
    },
  },
};

// ============================================
// TOPIC KEYWORDS
// ============================================

const topicKeywords: Record<string, string[]> = {
  [topics[0]]: [
    "lãng phí thời gian",
    "sống ảo",
    "ảnh hưởng học tập",
    "sức khỏe tinh thần",
    "tương tác thực",
  ],
  [topics[1]]: [
    "bạo lực thể chất",
    "bắt nạt",
    "tổn thương tâm lý",
    "môi trường học tập",
    "giáo dục nhân cách",
  ],
  [topics[2]]: [
    "đạo đức học đường",
    "năng lực thực sự",
    "công bằng thi cử",
    "học thực chất",
    "tính liêm chính",
  ],
  [topics[3]]: [
    "lãng phí tài nguyên",
    "ý thức cộng đồng",
    "an ninh lương thực",
    "hành vi tiêu dùng",
    "tôn trọng lao động",
  ],
  [topics[4]]: [
    "văn hóa đọc",
    "kiến thức chiều sâu",
    "tư duy phân tích",
    "sự kiên nhẫn",
    "giải trí lành mạnh",
  ],
  [topics[5]]: [
    "lịch sự văn minh",
    "ngôn ngữ đẹp",
    "ý thức giao tiếp",
    "văn hóa ứng xử",
    "nhân cách con người",
  ],
  [topics[6]]: [
    "hình ảnh ảo",
    "áp lực so sánh",
    "bản sắc cá nhân",
    "thực tế cuộc sống",
    "định giá bản thân",
  ],
  [topics[7]]: [
    "ô nhiễm môi trường",
    "rác thải",
    "ý thức công dân",
    "sức khỏe cộng đồng",
    "hệ sinh thái",
  ],
  [topics[8]]: [
    "kỹ năng tự lập",
    "giao tiếp xã hội",
    "xử lý tình huống",
    "giáo dục thực hành",
    "phát triển toàn diện",
  ],
  [topics[9]]: [
    "mất tập trung",
    "sa sút học tập",
    "sức khỏe giảm sút",
    "nghiện điện tử",
    "quản lý thời gian",
  ],
};

// ============================================
// TOPIC SPECIFIC HINTS
// (q1, q2, q3, q4, q5_1, q5_2, q6_1, q6_2, q7_1, q7_2, q7_3, q8, q9, q10_1, q10_2)
// ============================================

const topicSpecificHints: Record<string, Record<string, string>> = {
  // ---- 1. Nghiện mạng xã hội ----
  [topics[0]]: {
    q1: "Hiện tượng nghiện mạng xã hội trong giới trẻ hiện nay.",
    q2: "Tán thành. Vì mạng xã hội đang chiếm quá nhiều thời gian và ảnh hưởng tiêu cực đến học sinh.",
    q3: "Nghiện mạng xã hội là tình trạng dành quá nhiều thời gian cho Facebook, TikTok, Instagram... không kiểm soát được bản thân. Ý kiến khẳng định đây là vấn đề nghiêm trọng đối với giới trẻ hiện nay.",
    q4: "Khẳng định rằng nghiện mạng xã hội đang gây ra những hệ lụy nghiêm trọng cho sự phát triển toàn diện của giới trẻ.",
    q5_1: "Nghiện mạng xã hội khiến học sinh mất tập trung, kết quả học tập sa sút nghiêm trọng.",
    q5_2: "Sống ảo trên mạng khiến giới trẻ mất kỹ năng giao tiếp thực tế, ảnh hưởng sức khỏe tinh thần.",
    q6_1: "Khi dành quá nhiều thời gian lướt mạng, học sinh không còn thời gian cho việc học, vận động thể chất và các hoạt động bổ ích khác.",
    q6_2: "Các thuật toán của mạng xã hội được thiết kế để gây nghiện, khiến người dùng trẻ tuổi khó tự kiểm soát thời gian sử dụng.",
    q7_1: "Theo thống kê, thanh thiếu niên Việt Nam dành trung bình 3-5 giờ/ngày cho mạng xã hội, nhiều bạn thức khuya lướt TikTok ảnh hưởng sức khỏe.",
    q7_2: "Trong lớp em, có bạn vì nghiện Facebook mà không làm bài tập, điểm số giảm sút rõ rệt.",
    q7_3: "Nhiều vụ việc đáng tiếc xảy ra khi giới trẻ bắt chước các trào lưu nguy hiểm trên mạng xã hội.",
    q8: "Có người cho rằng mạng xã hội cũng có nhiều lợi ích như kết nối, học hỏi, nhưng vấn đề nằm ở việc sử dụng quá mức, mất kiểm soát mới thực sự nguy hại.",
    q9: "Nghiện mạng xã hội thực sự đang ảnh hưởng nghiêm trọng đến giới trẻ, đây là vấn đề cần được quan tâm giải quyết.",
    q10_1:
      "Tự đặt giới hạn thời gian sử dụng mạng xã hội, ưu tiên học tập và vận động ngoài trời.",
    q10_2:
      "Học sinh cần tìm hiểu và tham gia các hoạt động ngoại khóa bổ ích thay vì lướt mạng cả ngày.",
  },

  // ---- 2. Bạo lực học đường ----
  [topics[1]]: {
    q1: "Hiện tượng bạo lực học đường trong trường học hiện nay.",
    q2: "Tán thành. Vì bạo lực học đường gây tổn thương nặng nề cho học sinh và cần được xử lý dứt điểm.",
    q3: "Bạo lực học đường là hành vi dùng sức mạnh để bắt nạt, đánh đập, xúc phạm bạn bè trong trường. Ý kiến khẳng định đây là vấn đề nhức nhối cần giải quyết triệt để.",
    q4: "Khẳng định bạo lực học đường là hiện tượng nguy hiểm, cần sự vào cuộc của cả gia đình, nhà trường và xã hội.",
    q5_1: "Bạo lực học đường gây tổn thương thể chất và tinh thần nghiêm trọng cho nạn nhân, nhiều em bị trầm cảm.",
    q5_2: "Bạo lực học đường phá vỡ môi trường giáo dục an toàn, khiến học sinh sợ hãi khi đến trường.",
    q6_1: "Nạn nhân bạo lực học đường có thể bị sang chấn tâm lý kéo dài, ảnh hưởng đến sự phát triển nhân cách và tương lai.",
    q6_2: "Người gây bạo lực nếu không được uốn nắn kịp thời có thể hình thành tính cách hung hãn, dễ vi phạm pháp luật sau này.",
    q7_1: "Nhiều vụ bạo lực học đường được đưa lên báo chí, có em học sinh bị đánh hội đồng phải nhập viện, để lại sang chấn tâm lý lâu dài.",
    q7_2: "Trong trường em, nhà trường đã tổ chức các buổi tuyên truyền chống bạo lực, giúp các bạn hiểu được hậu quả nghiêm trọng.",
    q7_3: "Nhiều quốc gia đã ban hành luật chống bắt nạt học đường, cho thấy đây là vấn đề toàn cầu cần giải quyết quyết liệt.",
    q8: "Có người cho rằng bạo lực học đường chỉ là chuyện trẻ con, nhưng thực tế hậu quả của nó rất nghiêm trọng và lâu dài đối với cả nạn nhân lẫn người gây bạo lực.",
    q9: "Bạo lực học đường thực sự là vấn đề nhức nhối vì nó ảnh hưởng trực tiếp đến sự phát triển và tương lai của học sinh.",
    q10_1:
      "Mỗi học sinh cần nói không với bạo lực, biết bảo vệ bản thân và báo cho thầy cô khi bị bắt nạt.",
    q10_2:
      "Luôn đối xử tốt với bạn bè, lên tiếng khi thấy bất công và tham gia các hoạt động phòng chống bạo lực học đường.",
  },

  // ---- 3. Gian lận thi cử ----
  [topics[2]]: {
    q1: "Hiện tượng gian lận trong thi cử ở trường học hiện nay.",
    q2: "Tán thành. Vì gian lận thi cử là hành vi thiếu trung thực, làm mất công bằng trong giáo dục.",
    q3: "Gian lận thi cử là hành vi quay cóp, chép bài, sử dụng tài liệu trái phép trong kiểm tra. Ý kiến khẳng định đây là hành vi đáng bị phê phán.",
    q4: "Khẳng định gian lận thi cử là hành vi vi phạm đạo đức, phá hoại sự công bằng và giá trị thực của giáo dục.",
    q5_1: "Gian lận thi cử làm mất đi sự công bằng, người học thật bị thiệt thòi.",
    q5_2: "Gian lận khiến học sinh không có kiến thức thực, ảnh hưởng đến tương lai.",
    q6_1: "Khi gian lận trở thành thói quen, học sinh sẽ mất dần năng lực tự học và khả năng tư duy sáng tạo.",
    q6_2: "Nếu xã hội chấp nhận gian lận, giá trị của bằng cấp sẽ bị giảm sút, ảnh hưởng đến chất lượng nguồn nhân lực.",
    q7_1: "Nhiều vụ gian lận thi THPT Quốc gia bị phát hiện gây chấn động dư luận, những người liên quan bị xử lý nghiêm.",
    q7_2: "Trong lớp em, những bạn quay cóp dù được điểm cao nhưng không hiểu bài, khi kiểm tra miệng lại không trả lời được.",
    q7_3: "Nhiều nước trên thế giới xử lý rất nghiêm hành vi gian lận thi cử, thậm chí cấm thi vĩnh viễn.",
    q8: "Có người cho rằng gian lận chỉ là lỗi nhỏ, ai cũng có thể mắc phải, nhưng thực tế nó phản ánh sự thiếu trung thực trong nhân cách và gây hậu quả lâu dài.",
    q9: "Gian lận thi cử đúng là hành vi đáng lên án vì nó phá hoại sự công bằng và làm mất giá trị thực của giáo dục.",
    q10_1:
      "Học sinh cần tự giác học bài, trung thực trong kiểm tra, làm bài bằng năng lực thật của mình.",
    q10_2:
      "Nhắc nhở bạn bè không gian lận và ủng hộ các biện pháp chống gian lận của nhà trường.",
  },

  // ---- 4. Lãng phí thức ăn ----
  [topics[3]]: {
    q1: "Hiện tượng lãng phí thức ăn trong xã hội hiện nay.",
    q2: "Tán thành. Vì lãng phí thức ăn không chỉ ảnh hưởng kinh tế mà còn tác động xấu đến môi trường.",
    q3: "Lãng phí thức ăn là việc vứt bỏ thực phẩm còn ăn được, mua quá nhiều không dùng hết. Ý kiến khẳng định đây là vấn đề nghiêm trọng cần được quan tâm.",
    q4: "Khẳng định lãng phí thức ăn là vấn đề đáng báo động, ảnh hưởng đến kinh tế, xã hội và môi trường.",
    q5_1: "Lãng phí thức ăn gây thiệt hại kinh tế lớn trong khi nhiều người vẫn đang thiếu ăn.",
    q5_2: "Thức ăn thừa gây ô nhiễm môi trường, phát thải khí nhà kính khi phân hủy.",
    q6_1: "Sản xuất thực phẩm tiêu tốn rất nhiều tài nguyên (nước, đất, năng lượng), lãng phí thức ăn tức là lãng phí tất cả những tài nguyên đó.",
    q6_2: "Khi lãng phí thức ăn trở thành thói quen, con người mất đi ý thức trân trọng giá trị lao động và tài nguyên thiên nhiên.",
    q7_1: "Theo FAO, mỗi năm thế giới lãng phí khoảng 1.3 tỷ tấn thức ăn, trong khi hàng triệu người chết vì đói.",
    q7_2: "Ở căng tin trường em, nhiều bạn lấy nhiều cơm nhưng ăn không hết rồi đổ đi, rất lãng phí.",
    q7_3: "Nhiều nhà hàng, tiệc cưới ở Việt Nam thường thừa rất nhiều thức ăn, phần lớn bị vứt bỏ.",
    q8: "Có người cho rằng lãng phí thức ăn là chuyện nhỏ, nhưng khi nhìn vào con số thống kê toàn cầu, đây thực sự là vấn đề rất nghiêm trọng.",
    q9: "Lãng phí thức ăn thực sự là vấn đề đáng báo động vì nó ảnh hưởng đến cả kinh tế, xã hội và môi trường.",
    q10_1:
      "Mỗi người cần lấy thức ăn vừa đủ, bảo quản thực phẩm đúng cách, ăn hết phần cơm của mình.",
    q10_2:
      "Nhắc nhở gia đình không mua quá nhiều đồ ăn và tham gia các chương trình chia sẻ thực phẩm cho người nghèo.",
  },

  // ---- 5. Đọc sách bị thay thế ----
  [topics[4]]: {
    q1: "Hiện tượng thói quen đọc sách đang bị thay thế bởi thiết bị điện tử.",
    q2: "Tán thành. Vì ngày càng nhiều người, đặc biệt là giới trẻ, dành thời gian cho điện thoại thay vì đọc sách.",
    q3: "Hiện tượng này là việc sách giấy mất dần vị trí khi con người chuyển sang đọc trên điện thoại, máy tính. Ý kiến cảnh báo về sự suy giảm của văn hóa đọc truyền thống.",
    q4: "Khẳng định thói quen đọc sách đang bị đe dọa nghiêm trọng bởi sự phát triển của thiết bị điện tử.",
    q5_1: "Thiết bị điện tử với nội dung giải trí hấp dẫn khiến giới trẻ không còn kiên nhẫn đọc sách.",
    q5_2: "Việc bỏ đọc sách khiến khả năng tư duy sâu, vốn từ và trí tưởng tượng của giới trẻ bị hạn chế.",
    q6_1: "Đọc sách rèn luyện khả năng tập trung và tư duy logic, trong khi lướt mạng chỉ cung cấp thông tin rời rạc, nông cạn.",
    q6_2: "Sách mang lại kiến thức có hệ thống, chiều sâu, giúp phát triển nhân cách và trí tuệ toàn diện hơn các nội dung số.",
    q7_1: "Khảo sát cho thấy người Việt Nam đọc trung bình chưa đến 1 cuốn sách/năm, trong khi dùng điện thoại 3-4 giờ/ngày.",
    q7_2: "Trong lớp em, rất ít bạn có thói quen đọc sách, đa số dùng giờ rảnh để xem video trên điện thoại.",
    q7_3: "Nhiều quốc gia phát triển như Nhật Bản, Hàn Quốc có chương trình khuyến đọc mạnh mẽ vì họ hiểu giá trị của việc đọc sách.",
    q8: "Có người cho rằng sách điện tử cũng là đọc sách, nhưng vấn đề là giới trẻ dùng thiết bị điện tử chủ yếu để giải trí, mạng xã hội chứ không phải đọc sách.",
    q9: "Đọc sách đúng là đang bị thay thế bởi thiết bị điện tử, đây là thực trạng đáng lo ngại cần được khắc phục.",
    q10_1:
      "Học sinh cần dành ít nhất 15-30 phút mỗi ngày để đọc sách, xây dựng thói quen đọc trước khi ngủ.",
    q10_2:
      "Giảm thời gian dùng điện thoại cho giải trí và tham gia các câu lạc bộ đọc sách tại trường.",
  },

  // ---- 6. Nói tục chửi thề ----
  [topics[5]]: {
    q1: "Hiện tượng nói tục chửi thề trong giới trẻ hiện nay.",
    q2: "Tán thành. Vì nói tục chửi thề thể hiện sự thiếu văn hóa và đang trở nên đáng báo động.",
    q3: "Nói tục chửi thề là sử dụng những lời lẽ thô tục, thiếu văn hóa trong giao tiếp. Ý kiến khẳng định hiện tượng này ngày càng phổ biến và đáng lo ngại.",
    q4: "Khẳng định nói tục chửi thề đang trở thành thói quen xấu phổ biến trong giới trẻ, ảnh hưởng đến văn hóa ứng xử.",
    q5_1: "Nói tục chửi thề làm xấu đi hình ảnh bản thân, mất đi sự tôn trọng của người khác.",
    q5_2: "Khi nói tục trở thành thói quen, nó ảnh hưởng đến nhân cách và khả năng giao tiếp văn minh.",
    q6_1: "Ngôn ngữ phản ánh trình độ văn hóa và nhân cách con người, nói tục chửi thề cho thấy sự xuống cấp về đạo đức.",
    q6_2: "Thói quen nói tục dễ lây lan trong tập thể, tạo môi trường giao tiếp thiếu lành mạnh, ảnh hưởng đến mọi người xung quanh.",
    q7_1: "Trên mạng xã hội, nhiều video của giới trẻ chứa đầy lời tục tĩu lại được nhiều lượt xem, tạo xu hướng xấu.",
    q7_2: "Trong sân trường, em thường nghe các bạn nói tục như một thói quen, kể cả trước mặt thầy cô.",
    q7_3: "Nhiều công ty từ chối tuyển dụng ứng viên có cách nói chuyện thiếu lịch sự, cho thấy tác hại lâu dài của thói quen này.",
    q8: "Có người cho rằng nói tục chỉ là cách thể hiện cảm xúc, nhưng thực tế có rất nhiều cách diễn đạt văn minh hơn mà không cần dùng lời tục.",
    q9: "Nói tục chửi thề thực sự là hiện tượng đáng lo ngại vì nó phản ánh sự xuống cấp về văn hóa ứng xử của giới trẻ.",
    q10_1:
      "Học sinh cần ý thức sử dụng lời nói văn minh, lịch sự trong mọi tình huống giao tiếp.",
    q10_2:
      "Không nói tục và nhắc nhở bạn bè cùng sử dụng ngôn ngữ đẹp, tham gia các hoạt động rèn luyện kỹ năng giao tiếp.",
  },

  // ---- 7. Sống ảo ----
  [topics[6]]: {
    q1: "Hiện tượng sống ảo trên mạng xã hội trong giới trẻ hiện nay.",
    q2: "Tán thành. Vì sống ảo khiến con người đánh mất giá trị thực và chạy theo những điều không có thật.",
    q3: "Sống ảo là tạo hình ảnh không thật về bản thân trên mạng xã hội để nhận được sự ngưỡng mộ. Ý kiến khẳng định hiện tượng này đang làm méo mó giá trị thực.",
    q4: "Khẳng định sống ảo đang khiến con người đánh mất bản thân, chạy theo hào nhoáng bên ngoài thay vì phát triển giá trị thực.",
    q5_1: "Sống ảo khiến con người tốn thời gian, tiền bạc để tạo hình ảnh giả tạo thay vì phát triển bản thân.",
    q5_2: 'Sống ảo tạo áp lực so sánh, khiến nhiều người tự ti, trầm cảm khi thấy cuộc sống người khác "hoàn hảo".',
    q6_1: "Khi chạy theo lượt like và follow, con người dần đánh mất bản sắc cá nhân, sống theo kỳ vọng của người khác.",
    q6_2: "Sống ảo tạo ra một thế giới giả tạo, khiến con người không còn biết trân trọng những giá trị thực của cuộc sống.",
    q7_1: "Nhiều bạn trẻ vay tiền mua đồ hiệu, thuê xe sang chỉ để chụp ảnh đăng mạng xã hội khoe khoang.",
    q7_2: "Nghiên cứu cho thấy việc thường xuyên so sánh bản thân với hình ảnh hoàn hảo trên Instagram làm tăng tỷ lệ trầm cảm ở giới trẻ.",
    q7_3: 'Nhiều "influencer" bị phanh phui cuộc sống sang chảnh trên mạng chỉ là dàn dựng, gây mất niềm tin trong cộng đồng.',
    q8: "Có người cho rằng mạng xã hội là nơi thể hiện cá tính, nhưng thể hiện cá tính thật khác với tạo dựng hình ảnh giả tạo để đánh lừa người khác.",
    q9: "Sống ảo thực sự đang làm méo mó giá trị cuộc sống vì nó khiến con người chạy theo hào nhoáng bên ngoài mà quên đi giá trị bên trong.",
    q10_1:
      "Mỗi người cần sống thật với chính mình, trân trọng giá trị thực và không chạy theo lượt like.",
    q10_2:
      "Sử dụng mạng xã hội một cách lành mạnh, chia sẻ những điều tích cực và phát triển bản thân trong đời thực.",
  },

  // ---- 8. Xả rác bừa bãi ----
  [topics[7]]: {
    q1: "Hiện tượng xả rác bừa bãi gây ô nhiễm môi trường sống.",
    q2: "Tán thành. Vì xả rác bừa bãi gây ô nhiễm nghiêm trọng và ảnh hưởng đến sức khỏe con người.",
    q3: "Xả rác bừa bãi là vứt rác không đúng nơi quy định, gây mất vệ sinh. Ý kiến khẳng định thói quen này đang hủy hoại môi trường sống của chúng ta.",
    q4: "Khẳng định xả rác bừa bãi là thói quen xấu cần phải loại bỏ, vì nó đang hủy hoại môi trường sống của con người.",
    q5_1: "Rác thải gây ô nhiễm nguồn nước, đất đai, không khí, ảnh hưởng trực tiếp đến sức khỏe.",
    q5_2: "Rác nhựa cần hàng trăm năm để phân hủy, gây hại cho động vật và hệ sinh thái.",
    q6_1: "Xả rác bừa bãi gây ngập úng khi tắc cống thoát nước, tạo điều kiện cho muỗi và côn trùng gây bệnh phát triển.",
    q6_2: "Khi mỗi người đều xả rác bừa bãi, hậu quả tích tụ sẽ tạo ra ô nhiễm trên diện rộng, ảnh hưởng đến toàn cộng đồng.",
    q7_1: "Nhiều bãi biển đẹp của Việt Nam ngập trong rác sau mỗi kỳ nghỉ lễ, gây phản cảm với du khách quốc tế.",
    q7_2: "Trong khu phố em, có người xả rác xuống kênh rạch gây tắc nghẽn dòng chảy, mỗi khi mưa là ngập lụt.",
    q7_3: "Hình ảnh rùa biển chết vì nuốt phải túi nilon, cá voi mắc kẹt trong rác thải nhựa gây chấn động thế giới.",
    q8: "Có người cho rằng xả rác chỉ là hành vi nhỏ, không ảnh hưởng gì, nhưng thực tế nếu triệu người cùng xả rác, hậu quả sẽ vô cùng nghiêm trọng.",
    q9: "Xả rác bừa bãi thực sự đang hủy hoại môi trường sống và nếu không thay đổi, hậu quả sẽ rất nghiêm trọng.",
    q10_1:
      "Mỗi người cần bỏ rác đúng nơi quy định, phân loại rác và hạn chế dùng đồ nhựa.",
    q10_2:
      "Luôn mang theo túi để đựng rác, tham gia dọn vệ sinh khu phố và tuyên truyền ý thức bảo vệ môi trường.",
  },

  // ---- 9. Thiếu kỹ năng sống ----
  [topics[8]]: {
    q1: "Hiện tượng học sinh thiếu kỹ năng sống trong xã hội hiện nay.",
    q2: "Tán thành. Vì nhiều học sinh giỏi kiến thức nhưng lại thiếu các kỹ năng cơ bản trong cuộc sống.",
    q3: "Thiếu kỹ năng sống là tình trạng học sinh không biết tự chăm sóc bản thân, giao tiếp kém, không biết xử lý tình huống. Ý kiến khẳng định đây là vấn đề cần quan tâm.",
    q4: "Khẳng định việc học sinh thiếu kỹ năng sống là hệ quả của nền giáo dục nặng về lý thuyết, cần được khắc phục.",
    q5_1: "Thiếu kỹ năng sống khiến học sinh khó thích nghi với môi trường mới, dễ bị lôi kéo vào tệ nạn.",
    q5_2: "Học sinh thiếu kỹ năng sống sẽ gặp khó khăn trong công việc và cuộc sống sau này.",
    q6_1: "Nền giáo dục hiện tại quá tập trung vào điểm số, thi cử mà chưa chú trọng dạy kỹ năng sống cho học sinh.",
    q6_2: "Nhiều phụ huynh bao bọc con quá mức, không cho con tự làm, khiến trẻ mất đi cơ hội rèn luyện kỹ năng.",
    q7_1: "Nhiều sinh viên đại học không biết nấu cơm, giặt đồ hay quản lý chi tiêu khi sống xa gia đình.",
    q7_2: "Trong lớp em, khi gặp xung đột, nhiều bạn không biết cách giải quyết mà chỉ biết cãi nhau hoặc khóc.",
    q7_3: "Một số học sinh không biết cách tự bảo vệ bản thân trước những tình huống nguy hiểm như đuối nước, cháy nổ.",
    q8: "Có người cho rằng kỹ năng sống sẽ tự có khi lớn lên, nhưng thực tế nếu không được rèn luyện từ nhỏ, nhiều kỹ năng sẽ rất khó hình thành.",
    q9: "Thiếu kỹ năng sống thực sự là vấn đề đáng quan tâm vì kỹ năng sống quan trọng không kém kiến thức sách vở.",
    q10_1:
      "Học sinh cần chủ động rèn luyện kỹ năng sống: tự lập, giao tiếp, làm việc nhóm, xử lý tình huống.",
    q10_2:
      "Tự giác phụ việc nhà, tham gia hoạt động ngoại khóa và các khóa học kỹ năng sống do nhà trường tổ chức.",
  },

  // ---- 10. Nghiện game online ----
  [topics[9]]: {
    q1: "Hiện tượng nghiện game online trong học sinh hiện nay.",
    q2: "Tán thành. Vì nghiện game đang khiến nhiều học sinh sa sút học tập và sức khỏe giảm sút.",
    q3: "Nghiện game online là tình trạng dành quá nhiều thời gian chơi game, không kiểm soát được bản thân. Ý kiến khẳng định đây là vấn đề ảnh hưởng nghiêm trọng đến học sinh.",
    q4: "Khẳng định nghiện game online đang gây ra nhiều hệ lụy nghiêm trọng cho học tập, sức khỏe và tương lai của học sinh.",
    q5_1: "Nghiện game khiến học sinh mất tập trung, bỏ học, kết quả sa sút nghiêm trọng.",
    q5_2: "Chơi game quá nhiều ảnh hưởng sức khỏe: mắt kém, đau lưng, rối loạn giấc ngủ, béo phì.",
    q6_1: "Game online được thiết kế để gây nghiện với hệ thống phần thưởng liên tục, khiến người chơi khó dừng lại.",
    q6_2: "Nghiện game có thể dẫn đến bạo lực, vì nhiều game có nội dung đánh nhau, bắn giết ảnh hưởng đến tâm lý.",
    q7_1: "Có học sinh chơi game liên tục 48 giờ phải nhập viện vì kiệt sức, nhiều em bỏ ăn bỏ học vì game.",
    q7_2: "Trong lớp em, có bạn vì nghiện game mà thức khuya, đến lớp ngủ gật, từ học sinh khá xuống yếu.",
    q7_3: "Nhiều gia đình tan vỡ hạnh phúc vì con cái nghiện game, trộm tiền cha mẹ để nạp game.",
    q8: "Có người cho rằng game cũng rèn luyện trí tuệ, nhưng vấn đề nằm ở chỗ nghiện - tức là mất kiểm soát, dành quá nhiều thời gian cho game mà bỏ bê mọi thứ khác.",
    q9: "Nghiện game online thực sự ảnh hưởng nghiêm trọng đến học sinh vì nó cướp đi thời gian, sức khỏe và tương lai.",
    q10_1:
      "Học sinh cần tự giới hạn thời gian chơi game, ưu tiên học tập và vận động thể thao.",
    q10_2:
      "Chỉ chơi game tối đa 30 phút/ngày vào cuối tuần sau khi hoàn thành bài tập, tìm kiếm các hoạt động giải trí lành mạnh thay thế.",
  },
};

// ============================================
// GENERAL HINTS (for getWritingSections)
// ============================================

const generalHints: Record<string, string[]> = {
  q1: [
    "Đề bài đã nhắc đến vấn đề nào trong đời sống?",
  ],
  moBai: [
    "Giới thiệu vấn đề/hiện tượng đời sống cần bàn luận một cách tự nhiên, hấp dẫn.",
    "Nêu rõ ý kiến, quan điểm của bản thân về hiện tượng đó.",
    "Có thể mở bài bằng một câu hỏi, số liệu thống kê hoặc tình huống thực tế.",
    "Mở bài nên ngắn gọn, súc tích, khoảng 3-4 câu.",
  ],
  thanBai: [
    "Giải thích rõ ràng thực chất của hiện tượng đời sống được bàn luận.",
    "Nêu khẳng định và lí lẽ thuyết phục, có dẫn chứng cụ thể minh họa.",
    "Đưa ra ít nhất 2-3 ví dụ thực tế để chứng minh cho lập luận.",
    "Phản biện ý kiến trái chiều để bài viết thêm sâu sắc, toàn diện.",
    "Sắp xếp các luận điểm theo trình tự logic, mạch lạc.",
  ],
  ketBai: [
    "Khẳng định lại ý nghĩa, tác động của hiện tượng đã bàn luận.",
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
    description:
      "Bài viết có đủ 3 phần: mở bài, thân bài, kết bài với bố cục mạch lạc.",
  },
  {
    key: "argument",
    label: "Lập luận thuyết phục",
    description:
      "Các luận điểm rõ ràng, lí lẽ chặt chẽ, có dẫn chứng cụ thể minh họa.",
  },
  {
    key: "evidence",
    label: "Dẫn chứng phong phú",
    description: "Có ít nhất 2-3 ví dụ/dẫn chứng thực tế, cụ thể và phù hợp.",
  },
  {
    key: "counterargument",
    label: "Có phản biện",
    description:
      "Bài viết đề cập và phản biện ý kiến trái chiều để thêm sâu sắc.",
  },
  {
    key: "language",
    label: "Ngôn ngữ phù hợp",
    description:
      "Sử dụng từ ngữ chính xác, câu văn mạch lạc, giọng văn nghị luận rõ ràng.",
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
        "Viết phần mở bài: giới thiệu hiện tượng đời sống cần bàn luận và nêu ý kiến của bản thân (khoảng 3-4 câu).",
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
        "Viết phần giải thích hiện tượng và nêu khẳng định. Giải thích rõ các khái niệm, nội dung cốt lõi của vấn đề.",
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
      hints: [
        generalHints.thanBai[2],
        generalHints.thanBai[3],
        generalHints.thanBai[4],
      ],
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
