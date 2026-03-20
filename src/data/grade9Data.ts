import type {
  GradeData,
  TopicQuiz,
  StepConfig,
  OutlineSectionConfig,
  ChecklistItem,
  WritingSection,
  TimYQuestion,
} from "./writingMapConstants";

// ─── 10 đề bài dành cho lớp 9 ─────────────────────────────────────────────────

const topics: string[] = [
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp khắc phục tình trạng ô nhiễm nguồn nước ở các vùng nông thôn",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp giảm thiểu bạo lực học đường",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp nâng cao ý thức bảo vệ môi trường trong cộng đồng",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp giúp học sinh quản lý thời gian sử dụng mạng xã hội hiệu quả",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp phát triển thói quen đọc sách ở học sinh",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp hạn chế rác thải nhựa trong đời sống hằng ngày",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp cải thiện kỹ năng giao tiếp cho học sinh trung học",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp nâng cao chất lượng bữa ăn bán trú tại trường học",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp khuyến khích học sinh tham gia hoạt động tình nguyện",
  "Hãy viết một bài văn nghị luận (khoảng 600 chữ) đề xuất một số giải pháp giảm thiểu tình trạng học sinh bỏ học ở vùng khó khăn",
];

// ─── Dữ liệu trắc nghiệm cho phần Hiểu đề (3 câu hỏi / đề) ─────────────────

const topicQuizData: Record<string, TopicQuiz> = {
  // 1. Ô nhiễm nguồn nước nông thôn
  [topics[0]]: {
    q1: {
      options: [
        "Ô nhiễm nguồn nước ở nông thôn",
        "Vùng nông thôn",
        "Bài văn nghị luận",
      ],
      correct: "Ô nhiễm nguồn nước ở nông thôn",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp khắc phục tình trạng ô nhiễm nguồn nước ở các vùng nông thôn",
        "Miêu tả tình trạng ô nhiễm nguồn nước ở Việt Nam",
        "Phân tích nguyên nhân gây ô nhiễm môi trường nói chung",
      ],
      correct:
        "Đề xuất giải pháp khắc phục tình trạng ô nhiễm nguồn nước ở các vùng nông thôn",
    },
  },

  // 2. Bạo lực học đường
  [topics[1]]: {
    q1: {
      options: [
        "Bạo lực học đường",
        "Giảm thiểu bạo lực",
        "Học sinh trung học",
      ],
      correct: "Bạo lực học đường",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp giảm thiểu tình trạng bạo lực học đường",
        "Phân tích tác hại của bạo lực trong xã hội hiện đại",
        "Trình bày ý kiến về kỷ luật trong nhà trường",
      ],
      correct:
        "Đề xuất giải pháp giảm thiểu tình trạng bạo lực học đường",
    },
  },

  // 3. Nâng cao ý thức bảo vệ môi trường
  [topics[2]]: {
    q1: {
      options: [
        "Ý thức bảo vệ môi trường",
        "Cộng đồng",
        "Bài văn nghị luận",
      ],
      correct: "Ý thức bảo vệ môi trường",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp nâng cao ý thức bảo vệ môi trường trong cộng đồng",
        "Phân tích thực trạng ô nhiễm môi trường ở Việt Nam",
        "Trình bày vai trò của môi trường đối với con người",
      ],
      correct:
        "Đề xuất giải pháp nâng cao ý thức bảo vệ môi trường trong cộng đồng",
    },
  },

  // 4. Quản lý thời gian sử dụng mạng xã hội
  [topics[3]]: {
    q1: {
      options: [
        "Quản lý thời gian sử dụng mạng xã hội",
        "Mạng xã hội",
        "Học sinh",
      ],
      correct: "Quản lý thời gian sử dụng mạng xã hội",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp giúp học sinh quản lý thời gian sử dụng mạng xã hội hiệu quả",
        "Phân tích tác hại của mạng xã hội đối với giới trẻ",
        "Trình bày ý kiến về việc cấm học sinh dùng mạng xã hội",
      ],
      correct:
        "Đề xuất giải pháp giúp học sinh quản lý thời gian sử dụng mạng xã hội hiệu quả",
    },
  },

  // 5. Phát triển thói quen đọc sách
  [topics[4]]: {
    q1: {
      options: [
        "Thói quen đọc sách ở học sinh",
        "Phát triển thói quen",
        "Văn hóa đọc",
      ],
      correct: "Thói quen đọc sách ở học sinh",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp phát triển thói quen đọc sách ở học sinh",
        "Phân tích vai trò của sách đối với đời sống con người",
        "Trình bày ý kiến về hiện tượng lười đọc sách ở giới trẻ",
      ],
      correct:
        "Đề xuất giải pháp phát triển thói quen đọc sách ở học sinh",
    },
  },

  // 6. Hạn chế rác thải nhựa
  [topics[5]]: {
    q1: {
      options: [
        "Rác thải nhựa trong đời sống",
        "Đời sống hằng ngày",
        "Hạn chế ô nhiễm",
      ],
      correct: "Rác thải nhựa trong đời sống",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp hạn chế rác thải nhựa trong đời sống hằng ngày",
        "Phân tích tác hại của rác thải nhựa đối với hệ sinh thái",
        "Trình bày ý kiến về lệnh cấm sử dụng đồ nhựa dùng một lần",
      ],
      correct:
        "Đề xuất giải pháp hạn chế rác thải nhựa trong đời sống hằng ngày",
    },
  },

  // 7. Cải thiện kỹ năng giao tiếp
  [topics[6]]: {
    q1: {
      options: [
        "Kỹ năng giao tiếp của học sinh trung học",
        "Học sinh trung học",
        "Cải thiện kỹ năng",
      ],
      correct: "Kỹ năng giao tiếp của học sinh trung học",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp cải thiện kỹ năng giao tiếp cho học sinh trung học",
        "Phân tích tầm quan trọng của giao tiếp trong cuộc sống",
        "Trình bày ý kiến về việc dạy kỹ năng mềm trong nhà trường",
      ],
      correct:
        "Đề xuất giải pháp cải thiện kỹ năng giao tiếp cho học sinh trung học",
    },
  },

  // 8. Nâng cao chất lượng bữa ăn bán trú
  [topics[7]]: {
    q1: {
      options: [
        "Chất lượng bữa ăn bán trú",
        "Trường học",
        "Nâng cao chất lượng",
      ],
      correct: "Chất lượng bữa ăn bán trú",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp nâng cao chất lượng bữa ăn bán trú tại trường học",
        "Phân tích vai trò của dinh dưỡng đối với sự phát triển của học sinh",
        "Trình bày ý kiến về việc tổ chức bữa ăn bán trú ở trường",
      ],
      correct:
        "Đề xuất giải pháp nâng cao chất lượng bữa ăn bán trú tại trường học",
    },
  },

  // 9. Khuyến khích hoạt động tình nguyện
  [topics[8]]: {
    q1: {
      options: [
        "Học sinh tham gia hoạt động tình nguyện",
        "Hoạt động tình nguyện",
        "Khuyến khích học sinh",
      ],
      correct: "Học sinh tham gia hoạt động tình nguyện",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp khuyến khích học sinh tham gia hoạt động tình nguyện",
        "Phân tích ý nghĩa của hoạt động tình nguyện trong xã hội",
        "Trình bày ý kiến về trách nhiệm của thanh niên đối với cộng đồng",
      ],
      correct:
        "Đề xuất giải pháp khuyến khích học sinh tham gia hoạt động tình nguyện",
    },
  },

  // 10. Giảm thiểu tình trạng bỏ học ở vùng khó khăn
  [topics[9]]: {
    q1: {
      options: [
        "Học sinh bỏ học ở vùng khó khăn",
        "Vùng khó khăn",
        "Giảm thiểu tình trạng bỏ học",
      ],
      correct: "Học sinh bỏ học ở vùng khó khăn",
    },
    q2: {
      options: [
        "Đề xuất giải pháp cho vấn đề",
        "Phân tích nguyên nhân của vấn đề",
        "Kể lại một vấn đề đáng quan tâm",
      ],
      correct: "Đề xuất giải pháp cho vấn đề",
    },
    q3: {
      options: [
        "Đề xuất giải pháp giảm thiểu tình trạng học sinh bỏ học ở vùng khó khăn",
        "Phân tích thực trạng giáo dục ở vùng sâu vùng xa",
        "Trình bày ý kiến về quyền được đi học của trẻ em",
      ],
      correct:
        "Đề xuất giải pháp giảm thiểu tình trạng học sinh bỏ học ở vùng khó khăn",
    },
  },
};

// ─── Từ khóa cho mỗi đề (5 từ khóa / đề) ─────────────────────────────────────

const topicKeywords: Record<string, string[]> = {
  [topics[0]]: ["ô nhiễm nguồn nước", "nông thôn", "giải pháp", "sức khỏe cộng đồng", "xử lý nước thải"],
  [topics[1]]: ["bạo lực học đường", "giải pháp", "an toàn trường học", "tâm lý học sinh", "phòng chống"],
  [topics[2]]: ["bảo vệ môi trường", "ý thức cộng đồng", "giải pháp", "phát triển bền vững", "tuyên truyền"],
  [topics[3]]: ["mạng xã hội", "quản lý thời gian", "giải pháp", "tự kiểm soát", "học sinh"],
  [topics[4]]: ["đọc sách", "thói quen", "giải pháp", "văn hóa đọc", "phát triển tư duy"],
  [topics[5]]: ["rác thải nhựa", "hạn chế", "giải pháp", "tái chế", "môi trường sống"],
  [topics[6]]: ["kỹ năng giao tiếp", "học sinh trung học", "giải pháp", "tự tin", "kỹ năng mềm"],
  [topics[7]]: ["bữa ăn bán trú", "chất lượng", "giải pháp", "dinh dưỡng", "an toàn thực phẩm"],
  [topics[8]]: ["hoạt động tình nguyện", "học sinh", "giải pháp", "cống hiến", "trách nhiệm xã hội"],
  [topics[9]]: ["bỏ học", "vùng khó khăn", "giải pháp", "hỗ trợ giáo dục", "cơ hội học tập"],
};

// ─── 8 câu hỏi Tìm ý (phức tạp nhất – lớp 9) ───────────────────────────────

const timYQuestions: TimYQuestion[] = [
  {
    id: "q1",
    label: "Vấn đề nào cần đưa ra giải pháp?",
    placeholder: "Nhập vấn đề cần giải quyết...",
  },
  {
    id: "q2",
    label: "Vấn đề đó có tầm quan trọng như thế nào?",
    placeholder: "Nhập tầm quan trọng...",
  },
  {
    id: "q3",
    label: "Giải thích vấn đề",
    placeholder: "Giải thích vấn đề...",
  },
  {
    id: "q4",
    label: "Thực trạng của vấn đề đó hiện nay như thế nào?",
    placeholder: "Nhập thực trạng...",
  },
  {
    id: "q5",
    label: "Theo em, nguyên nhân nào dẫn đến thực trạng đó?",
    placeholder: "Nhập nguyên nhân...",
    subInputs: 2,
    subLabels: ["Nguyên nhân 1", "Nguyên nhân 2"],
  },
  {
    id: "q6",
    label: "Thực trạng đó gây ra những hậu quả gì? Nêu một số ví dụ cụ thể.",
    placeholder: "Nhập hậu quả và ví dụ...",
    subInputs: 2,
    subLabels: ["Hậu quả 1 + ví dụ", "Hậu quả 2 + ví dụ"],
  },
  {
    id: "q7",
    label:
      "Có những giải pháp khả thi nào để giải quyết? (nêu giải pháp + tính khả thi + hiệu quả)",
    placeholder: "Nhập giải pháp...",
    subInputs: 3,
    subLabels: ["Giải pháp 1", "Giải pháp 2", "Giải pháp 3"],
  },
  {
    id: "q8",
    label:
      "Từ những phân tích trên, em khẳng định điều gì? Việc giải quyết vấn đề đó mang lại ý nghĩa gì?",
    placeholder: "Nhập khẳng định và ý nghĩa...",
  },
];

// ─── Gợi ý theo từng đề (10 đề × 12 hint keys) ─────────────────────────────

const topicSpecificHints: Record<string, Record<string, string>> = {
  // 1. Ô nhiễm nguồn nước nông thôn
  [topics[0]]: {
    q1: "Tình trạng ô nhiễm nguồn nước ở các vùng nông thôn Việt Nam đang ngày càng nghiêm trọng, ảnh hưởng trực tiếp đến đời sống và sức khỏe người dân.",
    q2: "Đây là vấn đề cấp bách vì nước là nguồn tài nguyên thiết yếu cho sinh hoạt, sản xuất nông nghiệp và sức khỏe cộng đồng. Nếu không giải quyết kịp thời, hậu quả sẽ rất nặng nề.",
    q3: "Ô nhiễm nguồn nước là tình trạng nước bị biến đổi về chất lượng do các chất thải từ sinh hoạt, chăn nuôi, sản xuất nông nghiệp xâm nhập vào sông, hồ, mạch nước ngầm, khiến nước không còn an toàn để sử dụng.",
    q4: "Hiện nay, nhiều vùng nông thôn đang đối mặt với nguồn nước bị ô nhiễm bởi thuốc trừ sâu, chất thải chăn nuôi, rác sinh hoạt. Nhiều con sông, kênh rạch đổi màu, bốc mùi hôi thối. Người dân phải dùng nước giếng khoan nhưng chất lượng cũng không đảm bảo.",
    q5_1: "Người dân thiếu ý thức trong việc xử lý rác thải sinh hoạt và chất thải chăn nuôi, xả trực tiếp ra sông hồ, kênh mương mà không qua xử lý.",
    q5_2: "Việc sử dụng thuốc bảo vệ thực vật, phân bón hóa học quá mức trong nông nghiệp khiến các chất độc hại ngấm vào đất và nguồn nước ngầm.",
    q6_1: "Nguồn nước ô nhiễm gây ra nhiều bệnh tật cho người dân như bệnh ngoài da, tiêu chảy, ung thư. Ví dụ, ở nhiều vùng quê, tỉ lệ người mắc bệnh ung thư tăng cao bất thường do sử dụng nguồn nước bị nhiễm hóa chất lâu năm.",
    q6_2: "Ô nhiễm nguồn nước ảnh hưởng đến sản xuất nông nghiệp và nuôi trồng thủy sản, gây thiệt hại kinh tế lớn. Ví dụ, nhiều hộ nuôi cá, tôm bị chết hàng loạt do nước sông bị ô nhiễm bởi chất thải công nghiệp, mất trắng cả vụ thu hoạch.",
    q7_1: "Tăng cường tuyên truyền, giáo dục ý thức bảo vệ nguồn nước cho người dân nông thôn thông qua các buổi họp thôn xóm, phát tờ rơi, loa phát thanh. Giải pháp này dễ thực hiện, chi phí thấp và giúp thay đổi nhận thức từ gốc.",
    q7_2: "Xây dựng hệ thống xử lý nước thải chăn nuôi và sinh hoạt quy mô hộ gia đình và cụm dân cư, hỗ trợ người dân lắp đặt bể biogas. Giải pháp này khả thi khi có sự hỗ trợ kinh phí từ nhà nước, mang lại hiệu quả lâu dài.",
    q7_3: "Kiểm soát chặt chẽ việc sử dụng thuốc bảo vệ thực vật, khuyến khích nông nghiệp hữu cơ và các phương pháp canh tác an toàn. Đây là giải pháp bền vững, vừa bảo vệ nguồn nước vừa nâng cao giá trị nông sản.",
    q8: "Ô nhiễm nguồn nước ở nông thôn là vấn đề nghiêm trọng nhưng hoàn toàn có thể khắc phục nếu có sự chung tay của cả cộng đồng và chính quyền. Giải quyết vấn đề này không chỉ bảo vệ sức khỏe người dân mà còn hướng đến sự phát triển bền vững của nông thôn Việt Nam.",
  },

  // 2. Bạo lực học đường
  [topics[1]]: {
    q1: "Tình trạng bạo lực học đường đang diễn ra ngày càng phổ biến và phức tạp, gây ảnh hưởng nghiêm trọng đến tâm lý, thể chất của học sinh và môi trường giáo dục.",
    q2: "Đây là vấn đề hết sức quan trọng vì nhà trường cần là nơi an toàn để học sinh học tập và phát triển. Bạo lực học đường phá vỡ môi trường giáo dục lành mạnh và để lại hậu quả lâu dài.",
    q3: "Bạo lực học đường là những hành vi gây tổn thương về thể chất hoặc tinh thần giữa các học sinh trong và ngoài trường học, bao gồm đánh nhau, bắt nạt, chửi bới, cô lập, lan truyền tin đồn hoặc bạo lực trên mạng.",
    q4: "Hiện nay, các vụ bạo lực học đường xuất hiện ở nhiều cấp học, từ tiểu học đến trung học phổ thông. Nhiều vụ việc được quay video, đăng lên mạng xã hội gây bức xúc trong dư luận. Bạo lực không chỉ là đánh nhau mà còn là bắt nạt tinh thần, cô lập bạn bè.",
    q5_1: "Nhiều học sinh thiếu kỹ năng kiểm soát cảm xúc và giải quyết mâu thuẫn, dễ dùng bạo lực để xử lý vấn đề thay vì đối thoại.",
    q5_2: "Sự thiếu quan tâm từ gia đình, ảnh hưởng của phim ảnh bạo lực trên mạng và sự giám sát chưa chặt chẽ của nhà trường cũng là nguyên nhân quan trọng.",
    q6_1: "Nạn nhân bị bạo lực thường mang tổn thương tâm lý nặng nề: sợ hãi, trầm cảm, tự ti, thậm chí có suy nghĩ tiêu cực. Ví dụ, có trường hợp học sinh bị bắt nạt liên tục đến mức không dám đến trường, kết quả học tập sa sút nghiêm trọng.",
    q6_2: "Người gây bạo lực cũng chịu hậu quả: bị kỷ luật, mất cơ hội học tập, hình thành tính cách hung hăng khó sửa đổi. Ví dụ, nhiều học sinh sau khi gây ra bạo lực bị đình chỉ học, bị bạn bè xa lánh và phải đối mặt với pháp luật.",
    q7_1: "Tổ chức các chương trình giáo dục kỹ năng sống, kỹ năng giải quyết mâu thuẫn và kiểm soát cảm xúc cho học sinh ngay từ đầu năm học. Giải pháp này khả thi vì có thể lồng ghép vào các tiết sinh hoạt, chi phí thấp, giúp học sinh chủ động phòng tránh bạo lực.",
    q7_2: "Thiết lập đường dây nóng và hộp thư góp ý để học sinh có thể báo cáo khi bị bắt nạt hoặc chứng kiến bạo lực mà không sợ bị trả thù. Giải pháp này hiệu quả vì giúp phát hiện sớm các vụ việc và can thiệp kịp thời.",
    q7_3: "Tăng cường phối hợp giữa nhà trường và gia đình trong việc giám sát, theo dõi biểu hiện bất thường của học sinh. Tổ chức họp phụ huynh định kỳ, tạo nhóm liên lạc giữa giáo viên và phụ huynh. Đây là giải pháp bền vững, tạo mạng lưới bảo vệ học sinh từ nhiều phía.",
    q8: "Bạo lực học đường là vấn đề cần được giải quyết triệt để bằng sự chung tay của nhà trường, gia đình và toàn xã hội. Khi môi trường học đường an toàn, học sinh sẽ được phát triển toàn diện cả về trí tuệ lẫn nhân cách.",
  },

  // 3. Nâng cao ý thức bảo vệ môi trường
  [topics[2]]: {
    q1: "Ý thức bảo vệ môi trường trong cộng đồng còn hạn chế, nhiều người vẫn thờ ơ với việc giữ gìn môi trường sống xung quanh, dẫn đến tình trạng ô nhiễm ngày càng nghiêm trọng.",
    q2: "Vấn đề này rất quan trọng vì môi trường là nền tảng của sự sống. Nếu ý thức bảo vệ môi trường không được nâng cao, hậu quả sẽ ảnh hưởng đến sức khỏe, kinh tế và tương lai của các thế hệ sau.",
    q3: "Ý thức bảo vệ môi trường là nhận thức và hành động tự giác của mỗi cá nhân trong việc giữ gìn, bảo vệ môi trường tự nhiên, từ những việc nhỏ như không xả rác đến những hành động lớn như tham gia trồng cây, phân loại rác.",
    q4: "Hiện nay, nhiều nơi vẫn xảy ra tình trạng xả rác bừa bãi, đốt rác gây khói bụi, chặt phá cây xanh, xả nước thải chưa xử lý ra môi trường. Nhiều người biết nhưng vẫn thờ ơ, cho rằng bảo vệ môi trường là trách nhiệm của nhà nước.",
    q5_1: "Người dân chưa được tuyên truyền đầy đủ về tầm quan trọng của bảo vệ môi trường, nhiều người thiếu kiến thức về cách bảo vệ môi trường đúng cách.",
    q5_2: "Thói quen sống tiện lợi, dùng đồ nhựa một lần, lười phân loại rác đã ăn sâu vào đời sống hằng ngày; đồng thời việc xử phạt các hành vi gây ô nhiễm chưa nghiêm.",
    q6_1: "Ô nhiễm không khí, nguồn nước và đất đai ảnh hưởng trực tiếp đến sức khỏe cộng đồng, gia tăng các bệnh hô hấp, dị ứng, ung thư. Ví dụ, tại nhiều thành phố lớn, chỉ số ô nhiễm không khí thường ở mức báo động, người dân phải đeo khẩu trang khi ra đường.",
    q6_2: "Hệ sinh thái bị phá hủy, nhiều loài động thực vật có nguy cơ tuyệt chủng, thiên tai ngày càng khốc liệt hơn. Ví dụ, rừng bị tàn phá khiến lũ lụt, sạt lở đất xảy ra thường xuyên hơn, gây thiệt hại lớn về người và tài sản.",
    q7_1: "Đẩy mạnh tuyên truyền bảo vệ môi trường qua mạng xã hội, truyền hình, trường học với nội dung sinh động, dễ hiểu, phù hợp với từng đối tượng. Giải pháp này chi phí thấp, phạm vi lan tỏa rộng và có thể thực hiện ngay.",
    q7_2: "Tổ chức các phong trào bảo vệ môi trường thiết thực như Ngày Chủ nhật xanh, trồng cây gây rừng, dọn rác tình nguyện tại các khu dân cư. Giải pháp này tạo thói quen hành động cụ thể, gắn kết cộng đồng và mang lại kết quả trực quan.",
    q7_3: "Đưa giáo dục môi trường vào chương trình học chính khóa, tổ chức các cuộc thi sáng tạo về bảo vệ môi trường cho học sinh. Giải pháp này mang tính lâu dài, giúp hình thành ý thức từ thế hệ trẻ, tạo nền tảng cho tương lai.",
    q8: "Nâng cao ý thức bảo vệ môi trường là trách nhiệm của mỗi người và cần sự chung tay của toàn xã hội. Khi mỗi cá nhân hành động có trách nhiệm, chúng ta sẽ xây dựng được một môi trường sống trong lành, bền vững cho hôm nay và mai sau.",
  },

  // 4. Quản lý thời gian sử dụng mạng xã hội
  [topics[3]]: {
    q1: "Nhiều học sinh hiện nay dành quá nhiều thời gian cho mạng xã hội, ảnh hưởng tiêu cực đến học tập, sức khỏe và các mối quan hệ trong cuộc sống thực.",
    q2: "Đây là vấn đề quan trọng vì mạng xã hội tuy mang lại nhiều lợi ích nhưng nếu không kiểm soát được thời gian, học sinh sẽ bị phụ thuộc, mất cân bằng cuộc sống và giảm sút kết quả học tập.",
    q3: "Quản lý thời gian sử dụng mạng xã hội là khả năng tự kiểm soát, phân bổ hợp lý thời gian dành cho các nền tảng như Facebook, TikTok, Instagram... để vừa tận dụng được lợi ích vừa không ảnh hưởng đến các hoạt động khác.",
    q4: "Hiện nay, theo nhiều khảo sát, học sinh trung học dành trung bình 3-5 giờ mỗi ngày cho mạng xã hội, nhiều bạn thức khuya lướt điện thoại, mang điện thoại vào lớp. Tình trạng nghiện mạng xã hội ngày càng phổ biến và trẻ hóa.",
    q5_1: "Học sinh thiếu kỹ năng tự quản lý bản thân, chưa nhận thức rõ tác hại của việc lạm dụng mạng xã hội. Các thuật toán của mạng xã hội được thiết kế để giữ chân người dùng càng lâu càng tốt.",
    q5_2: "Gia đình chưa có quy định rõ ràng về thời gian sử dụng thiết bị điện tử; nhà trường thiếu các chương trình giáo dục kỹ năng số cho học sinh.",
    q6_1: "Sử dụng mạng xã hội quá nhiều khiến học sinh giảm khả năng tập trung, kết quả học tập sa sút, thiếu ngủ, mắt kém. Ví dụ, nhiều bạn thức đến 1-2 giờ sáng để lướt TikTok, sáng hôm sau ngủ gật trong lớp, không tiếp thu được bài giảng.",
    q6_2: "Mạng xã hội khiến học sinh giảm giao tiếp trực tiếp, dễ bị ảnh hưởng bởi thông tin sai lệch, so sánh bản thân với người khác dẫn đến tự ti, trầm cảm. Ví dụ, có bạn vì bị bình luận tiêu cực trên mạng mà trở nên thu mình, không muốn đến trường.",
    q7_1: "Mỗi học sinh tự đặt ra giới hạn thời gian sử dụng mạng xã hội mỗi ngày (ví dụ: không quá 1 giờ) và sử dụng tính năng nhắc nhở thời gian trên điện thoại. Giải pháp này đơn giản, dễ thực hiện ngay và rèn luyện tính tự giác.",
    q7_2: "Nhà trường tổ chức các buổi ngoại khóa, câu lạc bộ thể thao, nghệ thuật để thu hút học sinh tham gia thay vì dành thời gian cho mạng xã hội. Giải pháp này hiệu quả vì tạo ra những hoạt động hấp dẫn, bổ ích thay thế.",
    q7_3: "Gia đình cùng con xây dựng thời gian biểu hợp lý, quy định giờ sử dụng điện thoại, tạo không gian gia đình không có thiết bị điện tử vào giờ ăn và trước khi ngủ. Giải pháp này bền vững vì tạo thói quen tốt từ gia đình.",
    q8: "Quản lý thời gian sử dụng mạng xã hội là kỹ năng cần thiết mà mỗi học sinh cần rèn luyện. Khi biết cách sử dụng mạng xã hội hợp lý, chúng ta vừa tận dụng được lợi ích của công nghệ vừa có đời sống học tập và tinh thần khỏe mạnh.",
  },

  // 5. Phát triển thói quen đọc sách
  [topics[4]]: {
    q1: "Thói quen đọc sách ở học sinh đang ngày càng mai một, nhiều bạn thờ ơ với sách và thay thế bằng các hình thức giải trí điện tử.",
    q2: "Vấn đề này rất quan trọng vì đọc sách là con đường ngắn nhất để mở mang kiến thức, phát triển tư duy sáng tạo và hoàn thiện nhân cách. Thế hệ trẻ không đọc sách đồng nghĩa với việc đánh mất một nguồn tri thức vô giá.",
    q3: "Thói quen đọc sách là việc dành thời gian đều đặn để đọc sách ở nhiều thể loại khác nhau, từ sách giáo khoa, sách tham khảo đến sách văn học, sách kỹ năng, biến việc đọc thành một phần tự nhiên trong cuộc sống.",
    q4: "Hiện nay, số lượng học sinh đọc sách ngoài giờ học rất ít. Thư viện trường vắng vẻ, nhiều bạn chỉ đọc sách khi bắt buộc. Theo thống kê, người Việt Nam đọc trung bình chưa đến 1 cuốn sách mỗi năm, con số này ở học sinh cũng không khả quan hơn.",
    q5_1: "Sự phát triển mạnh mẽ của Internet, mạng xã hội, game online mang đến nhiều hình thức giải trí hấp dẫn, nhanh chóng khiến học sinh mất hứng thú với việc đọc sách.",
    q5_2: "Nhà trường và gia đình chưa tạo được môi trường đọc sách hấp dẫn, thư viện trường còn nghèo nàn, phụ huynh ít làm gương trong việc đọc sách.",
    q6_1: "Không đọc sách khiến học sinh hạn chế vốn từ, khả năng diễn đạt kém, tư duy thiếu sâu sắc. Ví dụ, nhiều bạn gặp khó khăn khi viết bài văn nghị luận vì thiếu kiến thức nền tảng và vốn ngôn ngữ, bài viết sơ sài, thiếu thuyết phục.",
    q6_2: "Học sinh không đọc sách sẽ thiếu hiểu biết về cuộc sống, lịch sử, văn hóa, khó phát triển tư duy phản biện. Ví dụ, trong các cuộc thảo luận, tranh biện ở lớp, những bạn ít đọc sách thường không đưa ra được lập luận chặt chẽ, dẫn chứng thuyết phục.",
    q7_1: "Tổ chức các câu lạc bộ đọc sách trong trường học, mỗi tuần có buổi chia sẻ về sách hay, tạo không gian đọc sách thân thiện tại thư viện và các góc lớp. Giải pháp này dễ thực hiện, tạo cộng đồng đọc sách, giúp học sinh có động lực đọc cùng nhau.",
    q7_2: "Nhà trường phối hợp với gia đình xây dựng 'Giờ đọc sách mỗi ngày' (15-30 phút), đưa hoạt động đọc sách vào tiêu chí thi đua. Giải pháp này khả thi vì chỉ cần thời gian ngắn mỗi ngày nhưng tạo thói quen lâu dài.",
    q7_3: "Đổi mới hình thức tiếp cận sách: kết hợp sách giấy với sách nói, sách điện tử; tổ chức các cuộc thi review sách, thuyết trình về sách yêu thích trên mạng xã hội. Giải pháp này phù hợp với thế hệ trẻ, tận dụng công nghệ để thúc đẩy văn hóa đọc.",
    q8: "Phát triển thói quen đọc sách là đầu tư cho trí tuệ và tương lai. Khi mỗi học sinh yêu thích việc đọc, chúng ta sẽ có một thế hệ trẻ giàu tri thức, sáng tạo và có khả năng tư duy độc lập để đối mặt với thách thức của thời đại.",
  },

  // 6. Hạn chế rác thải nhựa
  [topics[5]]: {
    q1: "Rác thải nhựa đang trở thành vấn nạn trong đời sống hằng ngày, gây ô nhiễm môi trường nghiêm trọng và đe dọa sức khỏe con người lẫn hệ sinh thái.",
    q2: "Đây là vấn đề cấp bách vì rác thải nhựa mất hàng trăm năm để phân hủy, tích tụ trong đất, nước và đại dương, gây hậu quả không thể đảo ngược nếu không hành động ngay.",
    q3: "Rác thải nhựa bao gồm các sản phẩm nhựa dùng một lần như túi ni-lông, ống hút, chai nhựa, hộp xốp... sau khi sử dụng bị thải ra môi trường và rất khó phân hủy tự nhiên.",
    q4: "Hiện nay, Việt Nam nằm trong nhóm các quốc gia xả rác thải nhựa ra biển nhiều nhất thế giới. Mỗi ngày, hàng triệu túi ni-lông, chai nhựa được sử dụng và thải ra. Rác nhựa tràn ngập trên đường phố, sông ngòi, bãi biển.",
    q5_1: "Thói quen tiêu dùng tiện lợi của người dân: sử dụng túi ni-lông, đồ nhựa dùng một lần vì rẻ tiền, tiện lợi mà không nghĩ đến hậu quả lâu dài.",
    q5_2: "Hệ thống thu gom, xử lý, tái chế rác thải nhựa còn yếu kém; ý thức phân loại rác của người dân chưa cao; các sản phẩm thay thế nhựa chưa phổ biến và giá thành còn cao.",
    q6_1: "Rác thải nhựa gây ô nhiễm đất, nguồn nước, không khí (khi đốt nhựa sinh ra khí độc), ảnh hưởng trực tiếp đến sức khỏe con người. Ví dụ, vi nhựa đã được phát hiện trong nước uống, thực phẩm và thậm chí trong máu người, tiềm ẩn nguy cơ gây bệnh nghiêm trọng.",
    q6_2: "Rác nhựa trôi ra biển giết chết hàng triệu sinh vật biển mỗi năm, phá hủy hệ sinh thái. Ví dụ, các nhà khoa học phát hiện trong dạ dày cá voi, rùa biển chết dạt vào bờ có hàng chục kilogram túi ni-lông và mảnh nhựa.",
    q7_1: "Mỗi người hãy bắt đầu từ việc giảm sử dụng đồ nhựa dùng một lần: mang theo túi vải khi đi chợ, dùng bình nước cá nhân, ống hút inox. Giải pháp này đơn giản, ai cũng có thể thực hiện ngay và tạo hiệu ứng lan tỏa lớn.",
    q7_2: "Thực hiện phân loại rác tại nguồn, đẩy mạnh tái chế rác nhựa. Nhà trường và địa phương đặt các thùng rác phân loại, tổ chức thu gom rác tái chế. Giải pháp này giúp tận dụng lại nguồn nguyên liệu, giảm lượng rác chôn lấp.",
    q7_3: "Nhà nước ban hành chính sách hạn chế sản xuất và sử dụng đồ nhựa dùng một lần, hỗ trợ phát triển sản phẩm thân thiện môi trường như túi tự phân hủy, bao bì từ nguyên liệu tự nhiên. Giải pháp này mang tính hệ thống, tạo thay đổi ở quy mô lớn.",
    q8: "Hạn chế rác thải nhựa là trách nhiệm của mỗi cá nhân và toàn xã hội. Mỗi hành động nhỏ từ việc nói không với túi ni-lông đều góp phần bảo vệ hành tinh, bảo vệ sức khỏe thế hệ hôm nay và mai sau.",
  },

  // 7. Cải thiện kỹ năng giao tiếp
  [topics[6]]: {
    q1: "Nhiều học sinh trung học hiện nay gặp khó khăn trong giao tiếp: ngại phát biểu trước đám đông, không biết cách diễn đạt ý kiến, thiếu kỹ năng lắng nghe và thuyết phục.",
    q2: "Vấn đề này rất quan trọng vì kỹ năng giao tiếp là nền tảng để thành công trong học tập, công việc và cuộc sống. Thiếu kỹ năng giao tiếp khiến học sinh bỏ lỡ nhiều cơ hội phát triển bản thân.",
    q3: "Kỹ năng giao tiếp là khả năng truyền đạt suy nghĩ, ý kiến một cách rõ ràng, thuyết phục, đồng thời biết lắng nghe, thấu hiểu người khác. Nó bao gồm giao tiếp bằng lời nói, ngôn ngữ cơ thể và giao tiếp qua văn bản.",
    q4: "Hiện nay, nhiều học sinh trung học thiếu tự tin khi phát biểu ý kiến, trình bày trước lớp. Một số bạn giao tiếp thiếu lịch sự, không biết cách nói lời cảm ơn, xin lỗi. Ngược lại, nhiều bạn chỉ giao tiếp qua tin nhắn, mạng xã hội mà ngại nói chuyện trực tiếp.",
    q5_1: "Chương trình giáo dục chưa chú trọng đúng mức đến việc rèn luyện kỹ năng giao tiếp, phần lớn thời gian dành cho kiến thức lý thuyết, ít cơ hội thực hành.",
    q5_2: "Sự phụ thuộc vào thiết bị điện tử và mạng xã hội khiến học sinh ít giao tiếp trực tiếp, dần mất đi khả năng biểu đạt cảm xúc và phản ứng linh hoạt trong các tình huống thực tế.",
    q6_1: "Học sinh thiếu kỹ năng giao tiếp thường gặp khó khăn trong làm việc nhóm, thuyết trình, phỏng vấn, ảnh hưởng đến kết quả học tập và cơ hội trong tương lai. Ví dụ, nhiều bạn học giỏi nhưng khi thuyết trình trước lớp lại run, nói lắp, không truyền đạt được ý hay của mình.",
    q6_2: "Thiếu kỹ năng giao tiếp gây ra hiểu lầm, mâu thuẫn trong các mối quan hệ bạn bè, thầy trò, gia đình. Ví dụ, có bạn vì không biết cách bày tỏ cảm xúc nên khi buồn giận thì im lặng hoặc nổi nóng, khiến tình bạn rạn nứt mà không biết cách hàn gắn.",
    q7_1: "Tổ chức các câu lạc bộ hùng biện, tranh biện, MC trong trường học, tạo sân chơi để học sinh rèn luyện kỹ năng nói trước đám đông. Giải pháp này hấp dẫn, phù hợp lứa tuổi, giúp học sinh tự tin hơn qua thực hành thường xuyên.",
    q7_2: "Đổi mới phương pháp dạy học theo hướng tương tác: tăng hoạt động thảo luận nhóm, thuyết trình, đóng vai trong các tiết học. Giải pháp này khả thi vì lồng ghép vào chương trình hiện có, vừa học kiến thức vừa rèn kỹ năng.",
    q7_3: "Khuyến khích học sinh tham gia các hoạt động ngoại khóa, tình nguyện, giao lưu với các trường khác để mở rộng mối quan hệ và thực hành giao tiếp trong nhiều tình huống khác nhau. Giải pháp này mang lại trải nghiệm thực tế, giúp học sinh linh hoạt và tự tin hơn.",
    q8: "Cải thiện kỹ năng giao tiếp cho học sinh trung học là đầu tư cho tương lai. Khi biết cách giao tiếp hiệu quả, học sinh không chỉ học tập tốt hơn mà còn tự tin hội nhập, xây dựng các mối quan hệ tốt đẹp và sẵn sàng cho cuộc sống phía trước.",
  },

  // 8. Nâng cao chất lượng bữa ăn bán trú
  [topics[7]]: {
    q1: "Chất lượng bữa ăn bán trú tại nhiều trường học chưa đảm bảo dinh dưỡng, vệ sinh an toàn thực phẩm, ảnh hưởng đến sức khỏe và sự phát triển của học sinh.",
    q2: "Vấn đề này rất quan trọng vì bữa ăn bán trú chiếm một phần lớn trong chế độ dinh dưỡng hằng ngày của học sinh. Bữa ăn không đảm bảo sẽ ảnh hưởng trực tiếp đến sức khỏe, thể lực và khả năng học tập.",
    q3: "Chất lượng bữa ăn bán trú bao gồm: đảm bảo đủ chất dinh dưỡng theo lứa tuổi, vệ sinh an toàn thực phẩm trong khâu chế biến, nguồn nguyên liệu sạch, thực đơn đa dạng và phù hợp với khẩu vị học sinh.",
    q4: "Hiện nay, nhiều trường bữa ăn bán trú còn đơn điệu, thiếu dinh dưỡng, có nơi xảy ra sự cố mất vệ sinh an toàn thực phẩm khiến học sinh bị ngộ độc. Nhiều phụ huynh lo lắng về nguồn gốc thực phẩm và chất lượng chế biến nhưng thiếu kênh giám sát.",
    q5_1: "Kinh phí dành cho bữa ăn bán trú ở nhiều trường còn hạn hẹp, dẫn đến việc lựa chọn nguyên liệu rẻ, chất lượng không cao; nhân sự nhà bếp chưa được đào tạo bài bản.",
    q5_2: "Việc giám sát, kiểm tra chất lượng bữa ăn bán trú từ ban giám hiệu, phụ huynh và cơ quan chức năng chưa được thực hiện thường xuyên và nghiêm túc.",
    q6_1: "Bữa ăn thiếu dinh dưỡng khiến học sinh mệt mỏi, suy dinh dưỡng, ảnh hưởng đến sự phát triển thể chất và trí tuệ. Ví dụ, ở một số trường vùng nông thôn, bữa trưa chỉ có cơm và một món mặn đơn giản, thiếu rau xanh và trái cây, khiến nhiều em thấp còi hơn bạn bè cùng trang lứa.",
    q6_2: "Vấn đề vệ sinh an toàn thực phẩm không đảm bảo gây ra ngộ độc tập thể, ảnh hưởng sức khỏe và gây hoang mang cho phụ huynh. Ví dụ, đã có nhiều vụ hàng chục học sinh phải nhập viện sau bữa ăn bán trú vì thực phẩm không được bảo quản đúng cách.",
    q7_1: "Xây dựng thực đơn bữa ăn bán trú cân đối dinh dưỡng theo hướng dẫn của chuyên gia dinh dưỡng, đa dạng món ăn theo tuần, công khai thực đơn để phụ huynh giám sát. Giải pháp này đảm bảo tính khoa học, minh bạch và dễ thực hiện.",
    q7_2: "Thành lập ban giám sát bữa ăn bán trú gồm đại diện ban giám hiệu, phụ huynh và học sinh, kiểm tra đột xuất chất lượng thực phẩm và vệ sinh nhà bếp. Giải pháp này tạo cơ chế giám sát chặt chẽ, kịp thời phát hiện và xử lý sai phạm.",
    q7_3: "Liên kết với các nông trại, cơ sở sản xuất thực phẩm sạch để đảm bảo nguồn nguyên liệu an toàn; đào tạo nâng cao tay nghề cho đội ngũ nhân viên nhà bếp. Giải pháp này mang lại chất lượng bữa ăn tốt hơn từ gốc, đảm bảo sức khỏe lâu dài cho học sinh.",
    q8: "Nâng cao chất lượng bữa ăn bán trú là đầu tư cho sức khỏe và tương lai của thế hệ trẻ. Khi được ăn uống đầy đủ, an toàn, học sinh sẽ có thể lực tốt, tinh thần thoải mái và đạt kết quả học tập cao hơn.",
  },

  // 9. Khuyến khích hoạt động tình nguyện
  [topics[8]]: {
    q1: "Nhiều học sinh chưa tích cực tham gia các hoạt động tình nguyện, coi đó là việc phiền phức, mất thời gian thay vì nhận ra giá trị và ý nghĩa to lớn của nó.",
    q2: "Vấn đề này rất quan trọng vì hoạt động tình nguyện giúp học sinh phát triển nhân cách, kỹ năng sống, tinh thần trách nhiệm với cộng đồng – những phẩm chất cần thiết cho mỗi công dân trong xã hội hiện đại.",
    q3: "Hoạt động tình nguyện là những việc làm xuất phát từ lòng tự nguyện, không vì mục đích lợi nhuận cá nhân, nhằm giúp đỡ người khác, cộng đồng hoặc bảo vệ môi trường. Ví dụ: dạy học miễn phí, dọn vệ sinh công cộng, quyên góp từ thiện, hỗ trợ vùng bị thiên tai.",
    q4: "Hiện nay, tuy có nhiều tổ chức và phong trào tình nguyện hoạt động sôi nổi, nhưng số lượng học sinh tham gia đều đặn vẫn còn ít. Nhiều bạn chỉ tham gia cho có, thiếu tính chủ động. Một số hoạt động tình nguyện tổ chức hình thức, chưa mang lại hiệu quả thực sự.",
    q5_1: "Học sinh bận rộn với việc học tập, thi cử, chưa thấy được mối liên hệ giữa hoạt động tình nguyện và sự phát triển bản thân.",
    q5_2: "Các hoạt động tình nguyện ở một số nơi tổ chức chưa hấp dẫn, thiếu sáng tạo, chưa phù hợp với sở thích và khả năng của học sinh.",
    q6_1: "Khi không tham gia tình nguyện, học sinh thiếu cơ hội rèn luyện kỹ năng sống, kỹ năng làm việc nhóm và sự đồng cảm với người khác. Ví dụ, nhiều bạn giỏi kiến thức sách vở nhưng khi đối mặt với thực tế cuộc sống lại lúng túng, thiếu khả năng ứng biến.",
    q6_2: "Thiếu tinh thần tình nguyện khiến thế hệ trẻ trở nên thờ ơ, ích kỷ, chỉ quan tâm đến bản thân mà quên đi trách nhiệm với cộng đồng. Ví dụ, khi xảy ra lũ lụt, thiên tai, nếu thanh niên không tham gia hỗ trợ thì công tác cứu trợ sẽ gặp rất nhiều khó khăn.",
    q7_1: "Nhà trường tổ chức đa dạng các hoạt động tình nguyện phù hợp với sở thích và khả năng của học sinh: câu lạc bộ tình nguyện, ngày hội thiện nguyện, dự án cộng đồng mini. Giải pháp này tạo sự hấp dẫn, giúp học sinh tìm thấy niềm vui khi cống hiến.",
    q7_2: "Ghi nhận và khen thưởng xứng đáng những học sinh tích cực tham gia tình nguyện: tính điểm rèn luyện, trao giấy khen, chia sẻ câu chuyện của các bạn trên bảng tin trường. Giải pháp này tạo động lực và lan tỏa tinh thần tình nguyện trong toàn trường.",
    q7_3: "Liên kết hoạt động tình nguyện với chương trình học: lồng ghép dự án phục vụ cộng đồng vào các môn học như Giáo dục công dân, Ngữ văn, Sinh học. Giải pháp này giúp học sinh thấy ý nghĩa thực tiễn của kiến thức, vừa học vừa cống hiến.",
    q8: "Khuyến khích học sinh tham gia hoạt động tình nguyện là gieo những hạt giống yêu thương và trách nhiệm. Một thế hệ trẻ biết sẻ chia và cống hiến sẽ tạo nên một xã hội nhân ái, đoàn kết và phát triển bền vững.",
  },

  // 10. Giảm thiểu tình trạng bỏ học ở vùng khó khăn
  [topics[9]]: {
    q1: "Tình trạng học sinh bỏ học ở các vùng khó khăn, vùng sâu vùng xa vẫn diễn ra đáng lo ngại, tước đi cơ hội phát triển và tương lai tươi sáng của nhiều em nhỏ.",
    q2: "Đây là vấn đề rất quan trọng vì giáo dục là con đường giúp các em thoát nghèo, thay đổi cuộc sống. Mỗi em học sinh bỏ học là một tương lai bị bỏ lỡ, ảnh hưởng đến sự phát triển của cả cộng đồng và đất nước.",
    q3: "Bỏ học là tình trạng học sinh ngừng đến trường trước khi hoàn thành chương trình giáo dục bắt buộc, thường do nhiều nguyên nhân phức tạp đan xen giữa kinh tế gia đình, điều kiện giao thông, phong tục tập quán và chất lượng giáo dục tại địa phương.",
    q4: "Hiện nay, tại nhiều vùng núi phía Bắc, Tây Nguyên, Đồng bằng sông Cửu Long, tỉ lệ học sinh bỏ học vẫn cao, đặc biệt ở cấp THCS và THPT. Nhiều em phải nghỉ học để đi làm thuê, phụ giúp gia đình. Tỉ lệ bỏ học ở nữ sinh còn cao hơn do tập quán lấy chồng sớm.",
    q5_1: "Hoàn cảnh kinh tế gia đình quá khó khăn, cha mẹ không đủ khả năng trang trải chi phí học tập, nhiều em phải đi làm kiếm sống từ nhỏ để phụ giúp gia đình.",
    q5_2: "Đường đến trường xa xôi, hiểm trở; cơ sở vật chất trường lớp thiếu thốn; thiếu giáo viên giỏi tình nguyện về vùng sâu vùng xa; phong tục tập quán lạc hậu như tảo hôn, coi nhẹ việc học.",
    q6_1: "Học sinh bỏ học sẽ thiếu kiến thức và kỹ năng để có việc làm ổn định, rơi vào vòng luẩn quẩn đói nghèo qua nhiều thế hệ. Ví dụ, ở một bản vùng cao, cả bản không ai học hết cấp 3, thanh niên chỉ biết làm nương rẫy, thu nhập bấp bênh, cuộc sống rất khó khăn.",
    q6_2: "Bỏ học sớm khiến các em dễ bị lôi kéo vào tệ nạn xã hội, lấy chồng/vợ sớm, thiếu khả năng nuôi dạy con cái đúng cách. Ví dụ, nhiều em gái ở vùng cao bỏ học lấy chồng khi mới 14-15 tuổi, sau đó cuộc sống rất vất vả vì chưa đủ trưởng thành.",
    q7_1: "Hỗ trợ tài chính cho học sinh vùng khó khăn: miễn giảm học phí, cấp học bổng, hỗ trợ sách vở, đồ dùng học tập, bữa ăn miễn phí tại trường. Giải pháp này trực tiếp gỡ bỏ rào cản kinh tế – nguyên nhân hàng đầu khiến các em bỏ học.",
    q7_2: "Xây dựng trường bán trú, nội trú tại các vùng xa, đảm bảo cơ sở vật chất tốt hơn, tuyển dụng và ưu đãi giáo viên về vùng khó khăn. Giải pháp này giúp rút ngắn khoảng cách đến trường, tạo điều kiện ăn ở tại chỗ cho các em.",
    q7_3: "Tuyên truyền, vận động phụ huynh và cộng đồng nhận thức về tầm quan trọng của giáo dục; xóa bỏ hủ tục tảo hôn; tổ chức các chương trình hướng nghiệp sớm để học sinh thấy giá trị của việc học. Giải pháp này thay đổi nhận thức từ gốc, mang lại hiệu quả bền vững.",
    q8: "Giảm thiểu tình trạng bỏ học ở vùng khó khăn cần sự chung tay của nhà nước, nhà trường, gia đình và toàn xã hội. Khi mỗi em nhỏ được đến trường, các em sẽ có cơ hội thay đổi cuộc đời mình và góp phần xây dựng quê hương, đất nước ngày càng phát triển.",
  },
};

// ─── Gợi ý chung cho 8 câu hỏi Tìm ý ──────────────────────────────────────

const generalHints: Record<string, string[]> = {
  q1: [
    "Đề bài đã nhắc đến vấn đề nào trong đời sống?",
  ],
  q2: [
    "Hãy suy nghĩ: Tại sao vấn đề này cần được giải quyết?",
    "Nó ảnh hưởng đến ai và ở mức độ nào?",
  ],
  q3: [
    "Hãy giải thích vấn đề một cách rõ ràng để người đọc hiểu đúng bản chất.",
    "Em có thể đưa ra định nghĩa hoặc mô tả ngắn gọn về vấn đề.",
  ],
  q4: [
    "Hãy nêu những biểu hiện cụ thể của vấn đề trong thực tế.",
    "Em có thể dẫn số liệu, hiện tượng mà em quan sát được hoặc đọc được.",
  ],
  q5: [
    "Mỗi nguyên nhân nên được phân tích rõ ràng, cụ thể.",
    "Có thể chia thành nguyên nhân chủ quan (từ con người) và khách quan (từ hoàn cảnh).",
  ],
  q6: [
    "Nêu hậu quả kèm ví dụ cụ thể để tăng sức thuyết phục.",
    "Hậu quả có thể ảnh hưởng đến cá nhân, gia đình và cộng đồng.",
  ],
  q7: [
    "Mỗi giải pháp cần nêu rõ: nội dung giải pháp, tính khả thi và hiệu quả mong đợi.",
    "Giải pháp nên thực tế, cụ thể, phù hợp với đối tượng và hoàn cảnh.",
    "Nên đề xuất giải pháp từ nhiều phía: cá nhân, gia đình, nhà trường, xã hội.",
  ],
  q8: [
    "Hãy khẳng định lại tầm quan trọng của việc giải quyết vấn đề.",
    "Nêu ý nghĩa tích cực khi vấn đề được giải quyết.",
    "Có thể liên hệ trách nhiệm của bản thân và thế hệ trẻ.",
  ],
};

// ─── Cấu hình dàn ý ─────────────────────────────────────────────────────────

const outlineSlotConfig: OutlineSectionConfig[] = [
  {
    section: "MỞ BÀI",
    color: "blue",
    items: [
      { key: "gioiThieu", label: "Giới thiệu vấn đề" },
      { key: "tamQuanTrong", label: "Tầm quan trọng của vấn đề" },
    ],
  },
  {
    section: "THÂN BÀI",
    color: "purple",
    items: [
      { key: "giaiThich", label: "Giải thích vấn đề" },
      { key: "thucTrang", label: "Thực trạng hiện nay" },
      { key: "nguyenNhan1", label: "Nguyên nhân 1" },
      { key: "nguyenNhan2", label: "Nguyên nhân 2" },
      { key: "hauQua1", label: "Hậu quả 1 + ví dụ" },
      { key: "hauQua2", label: "Hậu quả 2 + ví dụ" },
    ],
    subSection: {
      label: "Giải pháp",
      rows: [
        { liLe: "giaiPhap1", bangChung: "khaThi1", num: 1 },
        { liLe: "giaiPhap2", bangChung: "khaThi2", num: 2 },
        { liLe: "giaiPhap3", bangChung: "khaThi3", num: 3 },
      ],
    },
  },
  {
    section: "KẾT BÀI",
    color: "orange",
    items: [
      { key: "khangDinh", label: "Khẳng định" },
      { key: "yNghia", label: "Ý nghĩa" },
    ],
  },
];

// ─── Danh sách kiểm tra (6 mục cho lớp 9) ──────────────────────────────────

const checklistItems: ChecklistItem[] = [
  {
    key: "hasClearProblem",
    label: "Đã giới thiệu rõ vấn đề cần giải quyết chưa?",
    description:
      "Kiểm tra xem phần mở bài đã nêu rõ vấn đề và tầm quan trọng của nó chưa.",
  },
  {
    key: "hasExplanation",
    label: "Đã giải thích vấn đề và nêu thực trạng rõ ràng chưa?",
    description:
      "Kiểm tra xem đã giải thích bản chất vấn đề và trình bày thực trạng với dẫn chứng cụ thể chưa.",
  },
  {
    key: "hasCausesAndEffects",
    label: "Đã phân tích nguyên nhân và hậu quả thuyết phục chưa?",
    description:
      "Kiểm tra xem đã nêu được ít nhất 2 nguyên nhân và 2 hậu quả kèm ví dụ cụ thể chưa.",
  },
  {
    key: "hasSolutions",
    label: "Đã đề xuất ít nhất 3 giải pháp khả thi chưa?",
    description:
      "Kiểm tra xem mỗi giải pháp đã nêu rõ nội dung, tính khả thi và hiệu quả mong đợi chưa.",
  },
  {
    key: "hasConclusion",
    label: "Đã khẳng định và nêu ý nghĩa ở phần kết bài chưa?",
    description:
      "Kiểm tra xem phần kết bài đã khẳng định lại vấn đề và nêu ý nghĩa của việc giải quyết chưa.",
  },
  {
    key: "hasLogicalStructure",
    label: "Bài viết có bố cục rõ ràng, lập luận chặt chẽ, đủ khoảng 600 chữ không?",
    description:
      "Kiểm tra xem bài viết có đủ 3 phần (mở bài, thân bài, kết bài), các luận điểm được sắp xếp logic và đạt yêu cầu về số chữ chưa.",
  },
];

// ─── Hàm tạo cấu hình các phần viết bài ─────────────────────────────────────

function getWritingSections(
  slots: Record<string, string>,
): WritingSection[] {
  return [
    {
      key: "moBai",
      title: "Mở bài",
      color: "blue",
      prompt:
        "Hãy viết đoạn mở bài giới thiệu vấn đề cần giải quyết và nêu tầm quan trọng của nó",
      hints: [
        '"Trong đời sống hiện nay, vấn đề ... đang trở nên ngày càng đáng lo ngại."',
        '"Đây là vấn đề cấp bách cần được quan tâm giải quyết vì ..."',
        '"Vậy, cần có những giải pháp nào để khắc phục tình trạng này?"',
      ],
      outlineItems: [
        { label: "Giới thiệu vấn đề", value: slots.gioiThieu || "" },
        {
          label: "Tầm quan trọng của vấn đề",
          value: slots.tamQuanTrong || "",
        },
      ],
    },
    {
      key: "thanBai1",
      title: "Thân bài – Nguyên nhân",
      color: "purple",
      prompt:
        "Hãy viết phần thân bài giải thích vấn đề, nêu thực trạng và phân tích nguyên nhân",
      hints: [
        '"Trước hết, cần hiểu rõ ... là ..."',
        '"Thực trạng cho thấy ..."',
        '"Nguyên nhân đầu tiên phải kể đến là ..."',
        '"Bên cạnh đó, ... cũng là nguyên nhân quan trọng dẫn đến tình trạng này."',
      ],
      outlineItems: [
        { label: "Giải thích vấn đề", value: slots.giaiThich || "" },
        { label: "Thực trạng hiện nay", value: slots.thucTrang || "" },
        { label: "Nguyên nhân 1", value: slots.nguyenNhan1 || "" },
        { label: "Nguyên nhân 2", value: slots.nguyenNhan2 || "" },
      ],
    },
    {
      key: "thanBai2",
      title: "Thân bài – Hậu quả",
      color: "purple",
      prompt:
        "Hãy viết phần phân tích hậu quả của vấn đề kèm ví dụ cụ thể",
      hints: [
        '"Vấn đề này đã gây ra những hậu quả nghiêm trọng. Trước hết, ..."',
        '"Chẳng hạn như ... / Điều đó được thể hiện rõ qua ..."',
        '"Không chỉ vậy, ... còn dẫn đến ..."',
        '"Ví dụ điển hình là ..."',
      ],
      outlineItems: [
        { label: "Hậu quả 1 + ví dụ", value: slots.hauQua1 || "" },
        { label: "Hậu quả 2 + ví dụ", value: slots.hauQua2 || "" },
      ],
    },
    {
      key: "thanBai3",
      title: "Thân bài – Giải pháp",
      color: "purple",
      prompt:
        "Hãy viết phần đề xuất các giải pháp khả thi để giải quyết vấn đề",
      hints: [
        '"Để giải quyết vấn đề này, trước hết cần ..."',
        '"Giải pháp này khả thi vì ... và mang lại hiệu quả ..."',
        '"Bên cạnh đó, một giải pháp quan trọng không kém là ..."',
        '"Về lâu dài, cần ... để đảm bảo tính bền vững."',
      ],
      outlineItems: [
        { label: "Giải pháp 1", value: slots.giaiPhap1 || "" },
        { label: "Tính khả thi 1", value: slots.khaThi1 || "" },
        { label: "Giải pháp 2", value: slots.giaiPhap2 || "" },
        { label: "Tính khả thi 2", value: slots.khaThi2 || "" },
        { label: "Giải pháp 3", value: slots.giaiPhap3 || "" },
        { label: "Tính khả thi 3", value: slots.khaThi3 || "" },
      ],
    },
    {
      key: "ketBai",
      title: "Kết bài",
      color: "orange",
      prompt:
        "Hãy viết đoạn kết bài khẳng định vấn đề và nêu ý nghĩa của việc giải quyết",
      hints: [
        '"Tóm lại, vấn đề ... cần được giải quyết bằng sự chung tay của ..."',
        '"Khi vấn đề được khắc phục, chúng ta sẽ ..."',
        '"Là học sinh lớp 9, em nhận thức rằng ... và sẽ cố gắng ..."',
      ],
      outlineItems: [
        { label: "Khẳng định", value: slots.khangDinh || "" },
        { label: "Ý nghĩa", value: slots.yNghia || "" },
      ],
    },
  ];
}

// ─── Cấu hình 5 bước ────────────────────────────────────────────────────────

const stepsConfig: StepConfig[] = [
  {
    id: 0,
    title: "Lựa chọn đề tài",
    icon: "Lightbulb",
    color: "bg-blue-500",
    description: "Chọn đề bài và hiểu yêu cầu của đề",
  },
  {
    id: 1,
    title: "Tìm ý",
    icon: "PenTool",
    color: "bg-green-500",
    description: "Trả lời các câu hỏi để tìm ý cho bài viết",
  },
  {
    id: 2,
    title: "Lập dàn ý",
    icon: "FileText",
    color: "bg-purple-500",
    description: "Sắp xếp các ý thành dàn bài hoàn chỉnh",
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
    description: "Tự kiểm tra và hoàn thiện bài viết",
  },
];

// ─── Export dữ liệu lớp 9 ───────────────────────────────────────────────────

export const grade9Data: GradeData = {
  grade: 9,
  label: "Lớp 9",
  essayType:
    "VIẾT MỘT BÀI VĂN NGHỊ LUẬN VỀ MỘT VẤN ĐỀ CẦN GIẢI QUYẾT",
  wordCount: 600,
  topics,
  topicQuizData,
  topicKeywords,
  timYQuestions,
  topicSpecificHints,
  generalHints,
  outlineSlotConfig,
  checklistItems,
  getWritingSections,
  stepsConfig,
};
