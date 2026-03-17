import type {
  GradeData,
  TopicQuiz,
  StepConfig,
  OutlineSectionConfig,
  ChecklistItem,
  WritingSection,
  TimYQuestion,
} from "./writingMapConstants";

// ─── 10 đề bài dành cho lớp 6 ─────────────────────────────────────────────────

const topics: string[] = [
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng học sinh sử dụng điện thoại thông minh quá nhiều",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng nói tục, chửi thề trong học sinh",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng lười đọc sách ở giới trẻ hiện nay",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng xả rác bừa bãi nơi công cộng",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng bắt nạt bạn bè trong trường học",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng học sinh ham chơi game quên học bài",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng lãng phí thức ăn trong gia đình và ở trường học",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng trẻ em ít vận động thể chất, thích ở nhà xem ti vi",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng học sinh không chào hỏi người lớn",
  "Em hãy viết bài văn (khoảng 400 chữ) trình bày ý kiến của em về hiện tượng gian lận trong kiểm tra, thi cử ở trường",
];

// ─── Dữ liệu trắc nghiệm cho phần Hiểu đề (3 câu hỏi / đề) ─────────────────

const topicQuizData: Record<string, TopicQuiz> = {
  // 1. Sử dụng điện thoại thông minh quá nhiều
  [topics[0]]: {
    q1: {
      options: [
        "Sử dụng điện thoại thông minh quá nhiều",
        "Học sinh",
        "Công nghệ hiện đại",
      ],
      correct: "Sử dụng điện thoại thông minh quá nhiều",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng học sinh sử dụng điện thoại thông minh quá nhiều và tác hại của nó",
        "Bàn về lợi ích của điện thoại thông minh trong học tập",
        "Bàn về cách chọn mua điện thoại thông minh phù hợp",
      ],
      correct:
        "Bàn về hiện tượng học sinh sử dụng điện thoại thông minh quá nhiều và tác hại của nó",
    },
  },

  // 2. Nói tục, chửi thề
  [topics[1]]: {
    q1: {
      options: ["Nói tục, chửi thề", "Học sinh", "Trường học"],
      correct: "Nói tục, chửi thề",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng nói tục, chửi thề trong học sinh và cách khắc phục",
        "Bàn về nội quy trường học và cách thực hiện",
        "Bàn về tầm quan trọng của giao tiếp lịch sự",
      ],
      correct:
        "Bàn về hiện tượng nói tục, chửi thề trong học sinh và cách khắc phục",
    },
  },

  // 3. Lười đọc sách
  [topics[2]]: {
    q1: {
      options: ["Lười đọc sách", "Giới trẻ hiện nay", "Văn hóa đọc"],
      correct: "Lười đọc sách",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng giới trẻ lười đọc sách và hậu quả của nó",
        "Bàn về cách chọn sách hay để đọc mỗi ngày",
        "Bàn về vai trò của thư viện trường học",
      ],
      correct:
        "Bàn về hiện tượng giới trẻ lười đọc sách và hậu quả của nó",
    },
  },

  // 4. Xả rác bừa bãi nơi công cộng
  [topics[3]]: {
    q1: {
      options: ["Xả rác bừa bãi", "Nơi công cộng", "Ô nhiễm môi trường"],
      correct: "Xả rác bừa bãi",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng xả rác bừa bãi nơi công cộng và cách khắc phục",
        "Bàn về vai trò của việc bảo vệ môi trường sống",
        "Bàn về trách nhiệm của mỗi người với cộng đồng",
      ],
      correct:
        "Bàn về hiện tượng xả rác bừa bãi nơi công cộng và cách khắc phục",
    },
  },

  // 5. Bắt nạt bạn bè trong trường học
  [topics[4]]: {
    q1: {
      options: ["Bắt nạt bạn bè", "Trường học", "Bạo lực học đường"],
      correct: "Bắt nạt bạn bè",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng bắt nạt bạn bè trong trường học và tác hại của nó",
        "Bàn về cách xây dựng tình bạn đẹp ở trường",
        "Bàn về nội quy trường học về kỷ luật",
      ],
      correct:
        "Bàn về hiện tượng bắt nạt bạn bè trong trường học và tác hại của nó",
    },
  },

  // 6. Ham chơi game quên học bài
  [topics[5]]: {
    q1: {
      options: ["Ham chơi game quên học bài", "Học sinh", "Trò chơi điện tử"],
      correct: "Ham chơi game quên học bài",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng học sinh ham chơi game quên học bài và hậu quả của nó",
        "Bàn về lợi ích của trò chơi điện tử đối với trí tuệ",
        "Bàn về cách quản lý thời gian hiệu quả",
      ],
      correct:
        "Bàn về hiện tượng học sinh ham chơi game quên học bài và hậu quả của nó",
    },
  },

  // 7. Lãng phí thức ăn
  [topics[6]]: {
    q1: {
      options: ["Lãng phí thức ăn", "Gia đình và trường học", "Tiết kiệm"],
      correct: "Lãng phí thức ăn",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng lãng phí thức ăn trong gia đình và ở trường học",
        "Bàn về cách nấu ăn tiết kiệm cho gia đình",
        "Bàn về tầm quan trọng của dinh dưỡng đối với học sinh",
      ],
      correct:
        "Bàn về hiện tượng lãng phí thức ăn trong gia đình và ở trường học",
    },
  },

  // 8. Trẻ em ít vận động thể chất
  [topics[7]]: {
    q1: {
      options: [
        "Ít vận động thể chất",
        "Trẻ em",
        "Xem ti vi",
      ],
      correct: "Ít vận động thể chất",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng trẻ em ít vận động thể chất, thích ở nhà xem ti vi và tác hại của nó",
        "Bàn về lợi ích của các chương trình ti vi giáo dục",
        "Bàn về cách tổ chức hoạt động ngoại khóa cho học sinh",
      ],
      correct:
        "Bàn về hiện tượng trẻ em ít vận động thể chất, thích ở nhà xem ti vi và tác hại của nó",
    },
  },

  // 9. Học sinh không chào hỏi người lớn
  [topics[8]]: {
    q1: {
      options: [
        "Không chào hỏi người lớn",
        "Học sinh",
        "Lễ phép",
      ],
      correct: "Không chào hỏi người lớn",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng học sinh không chào hỏi người lớn và sự thiếu lễ phép",
        "Bàn về cách giáo dục lễ phép trong gia đình",
        "Bàn về vai trò của thầy cô trong việc dạy đạo đức",
      ],
      correct:
        "Bàn về hiện tượng học sinh không chào hỏi người lớn và sự thiếu lễ phép",
    },
  },

  // 10. Gian lận trong kiểm tra, thi cử
  [topics[9]]: {
    q1: {
      options: [
        "Gian lận trong kiểm tra, thi cử",
        "Trường học",
        "Kết quả học tập",
      ],
      correct: "Gian lận trong kiểm tra, thi cử",
    },
    q2: {
      options: [
        "Trình bày ý kiến của em về hiện tượng",
        "Kể lại một câu chuyện về hiện tượng",
        "Miêu tả chi tiết hiện tượng",
      ],
      correct: "Trình bày ý kiến của em về hiện tượng",
    },
    q3: {
      options: [
        "Bàn về hiện tượng gian lận trong kiểm tra, thi cử ở trường và tác hại của nó",
        "Bàn về cách ôn thi hiệu quả cho học sinh",
        "Bàn về vai trò của điểm số trong học tập",
      ],
      correct:
        "Bàn về hiện tượng gian lận trong kiểm tra, thi cử ở trường và tác hại của nó",
    },
  },
};

// ─── Từ khóa cho mỗi đề (5 từ khóa / đề) ─────────────────────────────────────

const topicKeywords: Record<string, string[]> = {
  [topics[0]]: [
    "điện thoại thông minh",
    "nghiện",
    "mất tập trung",
    "sức khỏe",
    "học tập",
  ],
  [topics[1]]: [
    "nói tục",
    "chửi thề",
    "văn minh",
    "ngôn ngữ",
    "trường học",
  ],
  [topics[2]]: [
    "đọc sách",
    "lười biếng",
    "kiến thức",
    "văn hóa đọc",
    "giới trẻ",
  ],
  [topics[3]]: [
    "xả rác",
    "môi trường",
    "nơi công cộng",
    "ý thức",
    "vệ sinh",
  ],
  [topics[4]]: [
    "bắt nạt",
    "bạo lực học đường",
    "tổn thương",
    "tình bạn",
    "trường học",
  ],
  [topics[5]]: [
    "chơi game",
    "nghiện",
    "học bài",
    "thời gian",
    "kết quả học tập",
  ],
  [topics[6]]: [
    "lãng phí",
    "thức ăn",
    "tiết kiệm",
    "trân trọng",
    "môi trường",
  ],
  [topics[7]]: [
    "vận động thể chất",
    "xem ti vi",
    "sức khỏe",
    "lười vận động",
    "béo phì",
  ],
  [topics[8]]: [
    "chào hỏi",
    "lễ phép",
    "người lớn",
    "tôn trọng",
    "văn hóa ứng xử",
  ],
  [topics[9]]: [
    "gian lận",
    "thi cử",
    "trung thực",
    "kiểm tra",
    "kết quả thật",
  ],
};

// ─── 5 câu hỏi Tìm ý ──────────────────────────────────────────────────────────

const timYQuestions: TimYQuestion[] = [
  {
    id: "q1",
    label: "Vấn đề cần bàn luận là gì?",
    placeholder: "Nhập vấn đề cần bàn luận...",
  },
  {
    id: "q2",
    label: "Ý kiến của em về vấn đề đó?",
    placeholder: "Nhập ý kiến của em...",
  },
  {
    id: "q3",
    label: "Vì sao em có ý kiến như vậy? (nêu ít nhất 2 lí do)",
    placeholder: "Nhập lí do...",
    subInputs: 2,
    subLabels: ["Lí do 1", "Lí do 2"],
  },
  {
    id: "q4",
    label: "Có ví dụ nào để chứng minh những điều trên?",
    placeholder: "Nhập ví dụ...",
    subInputs: 2,
    subLabels: ["Ví dụ 1", "Ví dụ 2"],
  },
  {
    id: "q5",
    label: "Từ những điều trên, em khẳng định điều gì?",
    placeholder: "Nhập khẳng định...",
  },
];

// ─── Gợi ý theo từng đề (10 đề × 7 hint keys) ────────────────────────────────

const topicSpecificHints: Record<string, Record<string, string>> = {
  // 1. Sử dụng điện thoại thông minh quá nhiều
  [topics[0]]: {
    q1: "Hiện tượng nhiều học sinh dành quá nhiều thời gian sử dụng điện thoại thông minh, từ lúc đi học về đến tận khuya.",
    q2: "Em cho rằng việc sử dụng điện thoại thông minh quá nhiều gây ra nhiều tác hại cho học sinh, cần phải hạn chế.",
    q3_1: "Sử dụng điện thoại quá nhiều khiến học sinh mất tập trung vào việc học, mắt bị mỏi, thị lực giảm sút, ảnh hưởng đến sức khỏe.",
    q3_2: "Điện thoại khiến học sinh ít giao tiếp với gia đình, bạn bè ngoài đời thực, dần dần trở nên thu mình, sống khép kín.",
    q4_1: "Bạn ngồi cạnh em hay lén dùng điện thoại trong giờ học, không nghe giảng nên điểm kiểm tra ngày càng thấp. Thầy cô nhắc nhở nhiều lần mà bạn vẫn không sửa.",
    q4_2: "Em đọc báo biết rằng các bác sĩ nhãn khoa cảnh báo trẻ em xem điện thoại nhiều có nguy cơ cận thị rất cao, nhiều bạn lớp 6 đã phải đeo kính.",
    q5: "Điện thoại thông minh là công cụ hữu ích nhưng cần sử dụng đúng cách. Học sinh nên giới hạn thời gian dùng điện thoại để bảo vệ sức khỏe và tập trung học tập.",
  },

  // 2. Nói tục, chửi thề
  [topics[1]]: {
    q1: "Hiện tượng nói tục, chửi thề xảy ra phổ biến trong học sinh, cả trong giờ ra chơi lẫn trên mạng xã hội.",
    q2: "Em cho rằng nói tục, chửi thề là thói quen xấu, thiếu văn minh, làm xấu hình ảnh của học sinh.",
    q3_1: "Nói tục, chửi thề thể hiện sự thiếu tôn trọng người nghe, khiến bạn bè và người lớn khó chịu, không muốn gần gũi.",
    q3_2: "Thói quen nói tục dễ lây lan. Nếu nhiều bạn cùng nói thì trường học sẽ mất đi sự văn minh, lịch sự mà thầy cô và các bạn mong muốn.",
    q4_1: "Trong lớp em, có nhóm bạn hay nói tục. Một lần phụ huynh đến thăm lớp nghe thấy đã rất buồn và lo lắng cho con em mình.",
    q4_2: "Bạn em kể rằng ở lớp cũ, các bạn nói tục rất nhiều nên bạn ấy cũng quen miệng. Khi sang trường mới, bạn ấy đã cố gắng bỏ thói quen xấu đó.",
    q5: "Nói tục, chửi thề không phải là cá tính mà là thói quen xấu. Mỗi học sinh cần rèn luyện cách nói năng lịch sự, văn minh để trở thành người có văn hóa.",
  },

  // 3. Lười đọc sách
  [topics[2]]: {
    q1: "Hiện tượng giới trẻ hiện nay lười đọc sách, thay vào đó chỉ thích lướt mạng xã hội, xem video và chơi game.",
    q2: "Em cho rằng lười đọc sách là điều đáng lo ngại vì sách là nguồn kiến thức quý giá giúp mở mang trí tuệ.",
    q3_1: "Đọc sách giúp em mở rộng hiểu biết, học được nhiều điều hay. Lười đọc sách nghĩa là bỏ lỡ cơ hội trau dồi kiến thức và vốn từ vựng.",
    q3_2: "Đọc sách rèn luyện khả năng tập trung, tư duy và viết văn hay hơn. Không đọc sách khiến khả năng diễn đạt kém, vốn từ nghèo nàn.",
    q4_1: "Bạn lớp trưởng lớp em rất thích đọc sách. Nhờ vậy bạn ấy viết văn rất hay, nói chuyện lưu loát và luôn đạt điểm cao môn Ngữ văn.",
    q4_2: "Bác Hồ từ nhỏ đã rất ham đọc sách. Nhờ đọc nhiều sách mà Bác hiểu biết rộng, nói được nhiều thứ tiếng và trở thành lãnh tụ vĩ đại.",
    q5: "Lười đọc sách là thói quen cần thay đổi. Mỗi ngày hãy dành ít nhất 15 phút đọc sách, dần dần em sẽ yêu thích và thấy mình tiến bộ hơn.",
  },

  // 4. Xả rác bừa bãi nơi công cộng
  [topics[3]]: {
    q1: "Hiện tượng nhiều người vứt rác không đúng nơi quy định, xả rác bừa bãi ở công viên, đường phố, trường học.",
    q2: "Em cho rằng xả rác bừa bãi là hành vi thiếu ý thức, gây ô nhiễm môi trường và ảnh hưởng xấu đến sức khỏe cộng đồng.",
    q3_1: "Rác vứt bừa bãi gây mất mỹ quan, bốc mùi hôi thối, thu hút ruồi muỗi và gây ra nhiều bệnh tật cho mọi người xung quanh.",
    q3_2: "Rác nhựa, túi ni-lông không phân hủy được, gây ô nhiễm đất, nguồn nước, ảnh hưởng đến động vật và hệ sinh thái lâu dài.",
    q4_1: "Sau buổi liên hoan lớp ở công viên, em thấy rác túi ni-lông, hộp xốp vứt khắp nơi trên bãi cỏ. Cảnh tượng rất mất mỹ quan và người đi sau phải dẫm lên rác.",
    q4_2: "Em xem tin tức biết rằng rác thải nhựa trôi ra biển khiến nhiều loài cá, rùa biển chết vì nuốt phải túi ni-lông. Điều đó thật đáng buồn.",
    q5: "Xả rác bừa bãi là thói quen xấu cần loại bỏ. Mỗi người hãy bỏ rác đúng nơi quy định để giữ gìn môi trường sống xanh, sạch, đẹp.",
  },

  // 5. Bắt nạt bạn bè trong trường học
  [topics[4]]: {
    q1: "Hiện tượng bắt nạt bạn bè xảy ra ở nhiều trường học, từ trêu chọc, chế giễu đến đánh đập, cô lập bạn.",
    q2: "Em cho rằng bắt nạt bạn bè là hành vi rất xấu, gây tổn thương cả thể chất lẫn tinh thần cho người bị bắt nạt.",
    q3_1: "Bắt nạt khiến bạn bị hại cảm thấy sợ hãi, buồn bã, không muốn đến trường. Nhiều bạn bị bắt nạt trở nên tự ti, thu mình và kết quả học tập sa sút.",
    q3_2: "Người bắt nạt cũng bị ảnh hưởng xấu: bị bạn bè xa lánh, bị thầy cô kỷ luật, và dần hình thành tính cách bạo lực, hung hăng.",
    q4_1: "Trong trường em, có bạn bị nhóm bạn khác trêu chọc vì bạn ấy mập. Bạn ấy buồn đến mức xin mẹ cho chuyển trường, không dám đi học.",
    q4_2: "Em đọc trên báo có bạn học sinh bị bắt nạt suốt cả năm mà không dám kể cho ai. Khi thầy cô phát hiện thì bạn ấy đã rất sợ hãi và không muốn đến trường nữa.",
    q5: "Bắt nạt bạn bè là hành vi sai trái cần lên án. Mỗi học sinh hãy biết yêu thương, giúp đỡ nhau và mạnh dạn lên tiếng khi thấy bạn bị bắt nạt.",
  },

  // 6. Ham chơi game quên học bài
  [topics[5]]: {
    q1: "Hiện tượng nhiều học sinh dành hàng giờ mỗi ngày để chơi game, quên làm bài tập và không chịu ôn bài.",
    q2: "Em cho rằng ham chơi game quên học bài là điều rất có hại, ảnh hưởng nghiêm trọng đến kết quả học tập và sức khỏe.",
    q3_1: "Chơi game quá nhiều khiến học sinh không còn thời gian học bài, làm bài tập. Kết quả là điểm số giảm sút, kiến thức bị hổng nghiêm trọng.",
    q3_2: "Nghiện game gây hại cho sức khỏe: mắt bị mỏi, đau lưng, mất ngủ do thức khuya chơi game. Nhiều bạn đến lớp uể oải, ngủ gật.",
    q4_1: "Bạn cùng bàn em trước đây học rất giỏi, nhưng từ khi nghiện game, bạn ấy thường xuyên không làm bài tập, bị thầy cô nhắc nhở và điểm thi cuối kỳ rất thấp.",
    q4_2: "Em nghe tin tức kể về một bạn học sinh chơi game liên tục mấy ngày không ăn uống, phải đưa vào bệnh viện cấp cứu. Câu chuyện đó khiến em rất lo lắng.",
    q5: "Game có thể là trò giải trí nhưng không nên để nó chiếm hết thời gian học tập. Học sinh cần biết tự kiểm soát để cân bằng giữa chơi và học.",
  },

  // 7. Lãng phí thức ăn
  [topics[6]]: {
    q1: "Hiện tượng lãng phí thức ăn diễn ra phổ biến trong gia đình và ở trường học, nhiều thức ăn bị bỏ thừa, đổ bỏ.",
    q2: "Em cho rằng lãng phí thức ăn là việc làm sai, cần phải thay đổi vì còn rất nhiều người không có đủ cơm ăn.",
    q3_1: "Lãng phí thức ăn là không trân trọng công sức của người nông dân, người nấu ăn. Mỗi hạt gạo, mỗi món ăn đều là mồ hôi, công sức của bao người.",
    q3_2: "Thức ăn bị bỏ thừa gây lãng phí tiền bạc cho gia đình. Ngoài ra, rác thải thực phẩm còn gây ô nhiễm môi trường khi phân hủy.",
    q4_1: "Ở bếp ăn trường em, mỗi buổi trưa có rất nhiều bạn ăn không hết cơm, đổ bỏ cả khay thức ăn. Các cô nhà bếp nhìn thấy rất buồn.",
    q4_2: "Em xem chương trình truyền hình thấy ở vùng cao, nhiều bạn nhỏ chỉ ăn cơm với muối, không có thức ăn ngon. Trong khi ở thành phố, nhiều người lại bỏ phí thức ăn.",
    q5: "Lãng phí thức ăn là điều không nên làm. Mỗi người hãy lấy thức ăn vừa đủ, ăn hết phần của mình để tiết kiệm và trân trọng công sức lao động.",
  },

  // 8. Trẻ em ít vận động thể chất
  [topics[7]]: {
    q1: "Hiện tượng nhiều trẻ em ngày nay ít vận động thể chất, suốt ngày ở nhà xem ti vi, lướt điện thoại thay vì chơi thể thao.",
    q2: "Em cho rằng ít vận động thể chất là điều đáng lo ngại vì nó ảnh hưởng xấu đến sức khỏe và sự phát triển của trẻ em.",
    q3_1: "Ít vận động khiến cơ thể yếu ớt, dễ mắc bệnh béo phì, tim mạch. Trẻ em cần vận động để xương chắc khỏe, cơ thể phát triển tốt.",
    q3_2: "Ngồi một chỗ xem ti vi nhiều khiến trẻ mệt mỏi, uể oải, thiếu năng lượng. Vận động thể chất giúp tinh thần vui vẻ, học tập tốt hơn.",
    q4_1: "Trong lớp em, nhiều bạn giờ ra chơi chỉ ngồi trong lớp xem điện thoại, không ra sân chơi. Có bạn than phiền hay bị mệt, đau lưng dù mới 12 tuổi.",
    q4_2: "Em đọc được rằng các bác sĩ khuyên trẻ em nên vận động ít nhất 60 phút mỗi ngày. Ở Nhật Bản, học sinh được khuyến khích chơi thể thao mỗi ngày nên rất khỏe mạnh.",
    q5: "Vận động thể chất rất quan trọng với trẻ em. Hãy tắt ti vi, bước ra ngoài chơi thể thao, chạy nhảy mỗi ngày để có sức khỏe tốt và tinh thần vui vẻ.",
  },

  // 9. Học sinh không chào hỏi người lớn
  [topics[8]]: {
    q1: "Hiện tượng nhiều học sinh gặp người lớn không chào hỏi, đi ngang qua thầy cô, hàng xóm mà không nói lời nào.",
    q2: "Em cho rằng không chào hỏi người lớn là biểu hiện thiếu lễ phép, cần được nhắc nhở và sửa đổi kịp thời.",
    q3_1: "Chào hỏi người lớn là nét đẹp văn hóa của người Việt Nam, thể hiện sự tôn trọng và lễ phép. Không chào hỏi khiến mình trở nên thiếu văn hóa trong mắt mọi người.",
    q3_2: "Khi biết chào hỏi, em sẽ được mọi người yêu quý, tạo được ấn tượng tốt. Thói quen tốt này sẽ giúp em tự tin hơn trong giao tiếp.",
    q4_1: "Ở khu phố em, có bạn luôn chào hỏi ông bà, cô chú khi gặp. Mọi người ai cũng khen bạn ấy ngoan và hay cho quà, giúp đỡ bạn ấy.",
    q4_2: "Ngược lại, có bạn gặp người lớn không bao giờ chào, đi ngang qua như không thấy. Hàng xóm nhận xét bạn ấy hỗn láo và cha mẹ bạn cũng bị đánh giá không tốt.",
    q5: "Chào hỏi người lớn là việc nhỏ nhưng thể hiện nhân cách lớn. Mỗi học sinh hãy rèn thói quen chào hỏi để trở thành người lễ phép, được mọi người yêu mến.",
  },

  // 10. Gian lận trong kiểm tra, thi cử
  [topics[9]]: {
    q1: "Hiện tượng gian lận trong kiểm tra, thi cử như quay cóp, nhìn bài bạn, mang tài liệu vào phòng thi xảy ra ở nhiều trường.",
    q2: "Em cho rằng gian lận trong kiểm tra, thi cử là hành vi sai trái, thiếu trung thực và gây ra nhiều hậu quả xấu.",
    q3_1: "Gian lận khiến kết quả học tập không phản ánh đúng năng lực thật. Học sinh quen gian lận sẽ không nắm vững kiến thức, lâu dần bị hổng kiến thức nghiêm trọng.",
    q3_2: "Gian lận là hành vi thiếu trung thực, không công bằng với những bạn chăm chỉ học tập. Nó tạo ra thói quen xấu: luôn tìm cách đi đường tắt thay vì nỗ lực.",
    q4_1: "Trong lớp em, có bạn hay quay cóp nên luôn được điểm cao. Nhưng khi thi cuối kỳ được giám sát chặt, bạn ấy bị điểm rất thấp. Mọi người đều thất vọng.",
    q4_2: "Cô giáo em kể rằng có bạn gian lận từ lớp 6, đến lớp 9 không biết gì cả, thi vào lớp 10 không đậu được. Lúc đó mới hối hận thì đã muộn.",
    q5: "Gian lận thi cử là thói xấu cần loại bỏ. Điểm số cao nhờ gian lận không có giá trị. Hãy trung thực trong học tập để có kiến thức thật sự cho bản thân.",
  },
};

// ─── Gợi ý chung cho 5 câu hỏi Tìm ý ─────────────────────────────────────────

const generalHints: Record<string, string[]> = {
  q1: [
    "Hãy nêu ngắn gọn hiện tượng mà đề bài yêu cầu bàn luận.",
    "Hiện tượng đó diễn ra ở đâu, với ai?",
  ],
  q2: [
    "Em đồng tình hay không đồng tình với hiện tượng đó?",
    "Em có thể nêu ý kiến bằng một câu ngắn gọn, rõ ràng.",
  ],
  q3: [
    "Hãy nghĩ xem: Vì sao hiện tượng đó lại tốt hoặc xấu?",
    "Nó ảnh hưởng thế nào đến bản thân em và mọi người xung quanh?",
    "Mỗi lí do nên viết thành một ý riêng biệt.",
  ],
  q4: [
    "Em có thể lấy ví dụ từ những gì em thấy ở trường, ở nhà hoặc ngoài xã hội.",
    "Ví dụ cũng có thể là câu chuyện em đọc được trong sách, báo hoặc nghe kể lại.",
    "Ví dụ càng cụ thể, bài viết càng thuyết phục.",
  ],
  q5: [
    "Hãy khẳng định lại ý kiến của em một cách ngắn gọn.",
    "Em có thể nêu thêm lời khuyên hoặc mong muốn cho mọi người.",
  ],
};

// ─── Cấu hình dàn ý (3 phần, 7 slot) ──────────────────────────────────────────

const outlineSlotConfig: OutlineSectionConfig[] = [
  {
    section: "MỞ BÀI",
    color: "blue",
    items: [
      { key: "gioiThieu", label: "Giới thiệu hiện tượng" },
      { key: "yKien", label: "Nêu ý kiến của em" },
    ],
  },
  {
    section: "THÂN BÀI",
    color: "purple",
    items: [
      { key: "liDo1", label: "Lí do 1" },
      { key: "viDu1", label: "Ví dụ 1" },
      { key: "liDo2", label: "Lí do 2" },
      { key: "viDu2", label: "Ví dụ 2" },
    ],
  },
  {
    section: "KẾT BÀI",
    color: "orange",
    items: [{ key: "khangDinh", label: "Khẳng định lại ý kiến" }],
  },
];

// ─── Danh sách kiểm tra (5 mục) ───────────────────────────────────────────────

const checklistItems: ChecklistItem[] = [
  {
    key: "hasClearTopic",
    label: "Đã nêu rõ hiện tượng đời sống cần bàn luận chưa?",
    description:
      "Kiểm tra xem phần mở bài đã giới thiệu rõ hiện tượng đời sống mà đề bài yêu cầu chưa.",
  },
  {
    key: "hasClearOpinion",
    label: "Đã trình bày rõ ý kiến của em chưa?",
    description:
      "Kiểm tra xem em đã nêu rõ ý kiến (đồng tình hay không đồng tình) về hiện tượng đó chưa.",
  },
  {
    key: "hasReasons",
    label: "Đã nêu được ít nhất 2 lí do thuyết phục chưa?",
    description:
      "Kiểm tra xem phần thân bài đã có đủ 2 lí do rõ ràng để bảo vệ ý kiến của em chưa.",
  },
  {
    key: "hasExamples",
    label: "Đã có ví dụ cụ thể để chứng minh chưa?",
    description:
      "Kiểm tra xem mỗi lí do đã có ví dụ hoặc bằng chứng cụ thể đi kèm chưa.",
  },
  {
    key: "hasConclusion",
    label: "Đã khẳng định lại ý kiến ở phần kết bài chưa?",
    description:
      "Kiểm tra xem phần kết bài đã khẳng định lại ý kiến và nêu mong muốn, lời khuyên chưa.",
  },
];

// ─── Hàm tạo cấu hình các phần viết bài ───────────────────────────────────────

function getWritingSections(
  slots: Record<string, string>,
): WritingSection[] {
  return [
    {
      key: "moBai",
      title: "Mở bài",
      color: "blue",
      prompt:
        "Hãy viết đoạn mở bài giới thiệu hiện tượng đời sống và nêu ý kiến của em",
      hints: [
        '"Trong cuộc sống hằng ngày, chúng ta dễ dàng bắt gặp hiện tượng ..."',
        '"Đây là một hiện tượng khiến em suy nghĩ rất nhiều."',
        '"Em cho rằng hiện tượng này ... vì ..."',
      ],
      outlineItems: [
        { label: "Giới thiệu hiện tượng", value: slots.gioiThieu || "" },
        { label: "Ý kiến của em", value: slots.yKien || "" },
      ],
    },
    {
      key: "thanBai",
      title: "Thân bài",
      color: "purple",
      prompt:
        "Hãy viết phần thân bài trình bày các lí do và ví dụ chứng minh cho ý kiến của em",
      hints: [
        '"Trước hết, em cho rằng ... bởi vì ..."',
        '"Chẳng hạn như ... / Điều đó được thể hiện qua ..."',
        '"Không chỉ vậy, ... còn ..."',
        '"Ví dụ như ... / Bản thân em đã từng chứng kiến ..."',
      ],
      outlineItems: [
        { label: "Lí do 1", value: slots.liDo1 || "" },
        { label: "Ví dụ 1", value: slots.viDu1 || "" },
        { label: "Lí do 2", value: slots.liDo2 || "" },
        { label: "Ví dụ 2", value: slots.viDu2 || "" },
      ],
    },
    {
      key: "ketBai",
      title: "Kết bài",
      color: "orange",
      prompt:
        "Hãy viết đoạn kết bài khẳng định lại ý kiến của em về hiện tượng",
      hints: [
        '"Tóm lại, hiện tượng ... là điều mà mỗi người cần quan tâm."',
        '"Em mong rằng mọi người sẽ ..."',
        '"Là học sinh, em sẽ cố gắng ... để góp phần ..."',
      ],
      outlineItems: [
        { label: "Khẳng định lại ý kiến", value: slots.khangDinh || "" },
      ],
    },
  ];
}

// ─── Cấu hình 5 bước ──────────────────────────────────────────────────────────

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

// ─── Export dữ liệu lớp 6 ─────────────────────────────────────────────────────

export const grade6Data: GradeData = {
  grade: 6,
  label: "Lớp 6",
  essayType: "VIẾT BÀI VĂN TRÌNH BÀY Ý KIẾN VỀ MỘT HIỆN TƯỢNG ĐỜI SỐNG",
  wordCount: 400,
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
