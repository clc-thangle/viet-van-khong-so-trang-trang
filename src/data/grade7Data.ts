import type {
  GradeData,
  TopicQuiz,
  StepConfig,
  OutlineSectionConfig,
  ChecklistItem,
  WritingSection,
  TimYQuestion,
} from "./writingMapConstants";

// ─── 10 đề bài dành cho lớp 7 (nghị luận xã hội – đạo lí) ──────────────────

const topics: string[] = [
  "Có ý kiến cho rằng: \"Lòng hiếu thảo là nền tảng của mọi đức hạnh\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Trung thực là phẩm chất quý giá nhất của con người\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Sự kiên trì là chìa khóa dẫn đến thành công\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Tình yêu thương là sức mạnh để thay đổi thế giới\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Sống có trách nhiệm là biểu hiện của người trưởng thành\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Sự tự tin là bước đầu tiên trên con đường thành công\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
  "Có ý kiến cho rằng: \"Đoàn kết là sức mạnh, chia rẽ là yếu đuối\". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó",
];

// ─── Dữ liệu trắc nghiệm cho phần Hiểu đề (3 câu hỏi / đề) ─────────────────

const topicQuizData: Record<string, TopicQuiz> = {
  // 1. Lòng hiếu thảo
  [topics[0]]: {
    q1: {
      options: ["Lòng hiếu thảo", "Đức hạnh", "Nền tảng"],
      correct: "Lòng hiếu thảo",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 2. Trung thực
  [topics[1]]: {
    q1: {
      options: ["Trung thực", "Phẩm chất", "Con người"],
      correct: "Trung thực",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 3. Lòng khoan dung
  [topics[2]]: {
    q1: {
      options: ["Lòng khoan dung", "Hạnh phúc", "Thanh thản"],
      correct: "Lòng khoan dung",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 4. Sự kiên trì
  [topics[3]]: {
    q1: {
      options: ["Sự kiên trì", "Thành công", "Chìa khóa"],
      correct: "Sự kiên trì",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 5. Tình yêu thương
  [topics[4]]: {
    q1: {
      options: ["Tình yêu thương", "Sức mạnh", "Thế giới"],
      correct: "Tình yêu thương",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 6. Lòng dũng cảm
  [topics[5]]: {
    q1: {
      options: ["Lòng dũng cảm", "Nỗi sợ hãi", "Vượt qua"],
      correct: "Lòng dũng cảm",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 7. Sống có trách nhiệm
  [topics[6]]: {
    q1: {
      options: ["Trách nhiệm", "Trưởng thành", "Biểu hiện"],
      correct: "Trách nhiệm",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 8. Lòng biết ơn
  [topics[7]]: {
    q1: {
      options: ["Lòng biết ơn", "Tâm hồn", "Cao đẹp"],
      correct: "Lòng biết ơn",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 9. Sự tự tin
  [topics[8]]: {
    q1: {
      options: ["Sự tự tin", "Bước đầu tiên", "Thành công"],
      correct: "Sự tự tin",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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

  // 10. Đoàn kết
  [topics[9]]: {
    q1: {
      options: ["Đoàn kết", "Sức mạnh", "Chia rẽ"],
      correct: "Đoàn kết",
    },
    q2: {
      options: [
        "Trình bày ý kiến tán thành",
        "Trình bày ý kiến phản đối",
      ],
      correct: "Trình bày ý kiến tán thành",
    },
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
};

// ─── Từ khóa cho mỗi đề (5 từ khóa / đề) ─────────────────────────────────────

const topicKeywords: Record<string, string[]> = {
  [topics[0]]: ["bổn phận con cái", "tôn kính cha mẹ", "chăm sóc phụng dưỡng", "truyền thống gia đình", "cội nguồn tổ tiên"],
  [topics[1]]: ["thành thật", "ngay thẳng", "tín nhiệm", "liêm khiết", "đáng tin cậy"],
  [topics[2]]: ["bao dung", "tha thứ", "vị tha", "cảm thông", "tâm hồn rộng mở"],
  [topics[3]]: ["nhẫn nại", "bền bỉ", "không bỏ cuộc", "vượt khó khăn", "ý chí bền vững"],
  [topics[4]]: ["yêu thương", "chăm sóc", "chia sẻ", "gắn kết", "đồng cảm"],
  [topics[5]]: ["can đảm", "vượt khó", "dám hành động", "khẳng định bản thân", "đối mặt thực tại"],
  [topics[6]]: ["nghĩa vụ", "trách nhiệm bản thân", "trách nhiệm xã hội", "cam kết", "chấp nhận hậu quả"],
  [topics[7]]: ["tri ân", "nhớ ơn", "ghi nhớ công ơn", "trân trọng", "đền đáp"],
  [topics[8]]: ["tin vào bản thân", "khẳng định cá nhân", "tự lực tự chủ", "can đảm thể hiện", "vượt qua tự ti"],
  [topics[9]]: ["đoàn kết", "hợp tác", "cộng đồng", "tương trợ", "sức mạnh tập thể"],
};

// ─── 8 câu hỏi Tìm ý ──────────────────────────────────────────────────────────

const timYQuestions: TimYQuestion[] = [
  {
    id: "q1",
    label: "Vấn đề đời sống cần bàn luận là gì?",
    placeholder: "Nhập vấn đề đời sống cần bàn luận...",
  },
  {
    id: "q2",
    label: "Ý kiến nào cần được tán thành/phản đối?",
    placeholder: "Nhập ý kiến cần tán thành hoặc phản đối...",
  },
  {
    id: "q3",
    label: "Nêu suy nghĩ của em về ý kiến đó?",
    placeholder: "Nhập suy nghĩ của em...",
  },
  {
    id: "q4",
    label: "Trình bày thực chất của ý kiến.",
    placeholder: "Nhập thực chất của ý kiến...",
  },
  {
    id: "q5",
    label:
      "Theo em, những khía cạnh nào của vấn đề khiến em tán thành/phản đối ý kiến trên?",
    placeholder: "Nhập khía cạnh...",
    subInputs: 3,
    subLabels: ["Khía cạnh 1", "Khía cạnh 2", "Khía cạnh 3"],
  },
  {
    id: "q6",
    label: "Có ví dụ nào chứng minh điều đó không?",
    placeholder: "Nhập bằng chứng...",
    subInputs: 3,
    subLabels: ["Bằng chứng 1", "Bằng chứng 2", "Bằng chứng 3"],
  },
  {
    id: "q7",
    label:
      "Từ những điều đã phân tích, em có thể khẳng định điều gì về ý kiến này?",
    placeholder: "Nhập kết luận khẳng định của em...",
  },
  {
    id: "q8",
    label: "Việc tán thành này có ý nghĩa gì?",
    placeholder: "Nhập ý nghĩa của việc tán thành...",
  },
];

// ─── Gợi ý theo từng đề (10 đề × 12 hint keys) ────────────────────────────────

const topicSpecificHints: Record<string, Record<string, string>> = {
  // 1. Lòng hiếu thảo
  [topics[0]]: {
    q1: "Lòng hiếu thảo",
    q2: "Ý kiến: \"Lòng hiếu thảo là nền tảng của mọi đức hạnh\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì hiếu thảo là đức tính tốt đẹp nhất, là gốc rễ của mọi phẩm chất đạo đức.",
    q4: "Hiếu thảo là tình cảm yêu thương, kính trọng, biết ơn và chăm sóc cha mẹ. Ý kiến khẳng định hiếu thảo là nền tảng, là cơ sở để phát triển các đức tính tốt đẹp khác.",
    q5_1: "Người hiếu thảo biết yêu thương cha mẹ sẽ biết yêu thương mọi người xung quanh.",
    q5_2: "Hiếu thảo giúp gia đình hạnh phúc, gắn kết, tạo nền tảng vững chắc cho xã hội.",
    q5_3: "Lòng hiếu thảo là truyền thống quý báu của dân tộc, giúp duy trì nền tảng đạo đức xã hội qua nhiều thế hệ.",
    q6_1: "Trong cuộc sống, những người con hiếu thảo như em học sinh giỏi chăm sóc mẹ bệnh vẫn luôn được mọi người yêu quý và tôn trọng.",
    q6_2: "Bác Hồ - vị lãnh tụ vĩ đại luôn nhớ về quê hương, gia đình, thể hiện lòng hiếu thảo sâu sắc.",
    q6_3: "Ngược lại, những người bất hiếu thường bị xã hội lên án và gặp nhiều bất hạnh trong cuộc sống.",
    q7: "Lòng hiếu thảo thực sự là nền tảng của mọi đức hạnh vì khi biết yêu thương cha mẹ, ta sẽ biết yêu thương con người và sống tốt đẹp hơn.",
    q8: "Mỗi chúng ta cần biết vâng lời, chăm ngoan, học giỏi để cha mẹ vui lòng. Bản thân em sẽ luôn giúp đỡ cha mẹ việc nhà và cố gắng học tập thật tốt.",
  },

  // 2. Trung thực
  [topics[1]]: {
    q1: "Trung thực",
    q2: "Ý kiến: \"Trung thực là phẩm chất quý giá nhất của con người\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì trung thực giúp xây dựng lòng tin, là nền tảng của mọi mối quan hệ tốt đẹp.",
    q4: "Trung thực là luôn nói đúng sự thật, không gian dối, sống ngay thẳng. Ý kiến khẳng định trong tất cả phẩm chất, trung thực là quý giá nhất vì nó tạo nên giá trị đích thực của con người.",
    q5_1: "Người trung thực được mọi người tin tưởng, tôn trọng, dễ dàng xây dựng các mối quan hệ bền vững.",
    q5_2: "Trung thực giúp con người sống thanh thản, không phải lo lắng che giấu sự thật hay sợ bị phát hiện.",
    q5_3: "Xã hội mà mọi người đều trung thực sẽ trở nên công bằng, văn minh và đáng sống hơn.",
    q6_1: "Bác Hồ sống cả cuộc đời trung thực, giản dị, nhờ đó được nhân dân và bạn bè quốc tế kính trọng, tin yêu.",
    q6_2: "Trong lớp em, bạn luôn thành thật khi làm bài, dù điểm không cao nhưng được cô giáo và các bạn rất tin tưởng.",
    q6_3: "Ngược lại, những người gian dối khi bị phát hiện sẽ mất uy tín, mất lòng tin của mọi người xung quanh.",
    q7: "Trung thực thực sự là phẩm chất quý giá nhất vì nó là nền tảng để xây dựng mọi giá trị tốt đẹp khác trong cuộc sống.",
    q8: "Mỗi người cần rèn luyện tính trung thực trong học tập và cuộc sống. Bản thân em sẽ luôn nói thật, làm thật và sống thật với chính mình.",
  },

  // 3. Lòng khoan dung
  [topics[2]]: {
    q1: "Lòng khoan dung",
    q2: "Ý kiến: \"Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì khi biết tha thứ, bao dung, con người sẽ không bị oán hận làm nặng lòng.",
    q4: "Khoan dung là biết tha thứ, bao dung, không chấp nhặt lỗi lầm của người khác. Ý kiến khẳng định rằng khoan dung mang lại sự thanh thản và hạnh phúc cho chính người biết tha thứ.",
    q5_1: "Khi tha thứ cho người khác, ta giải thoát chính mình khỏi sự oán giận, tâm hồn nhẹ nhàng, thanh thản hơn.",
    q5_2: "Khoan dung giúp hàn gắn các mối quan hệ bị rạn nứt, mang lại hạnh phúc cho cả hai bên.",
    q5_3: "Người khoan dung luôn được mọi người yêu quý, kính trọng, từ đó cuộc sống thêm ý nghĩa và hạnh phúc.",
    q6_1: "Trong truyện cổ tích, những nhân vật biết tha thứ như Tấm luôn được phù hộ và có kết cục hạnh phúc.",
    q6_2: "Bạn em từng giận bạn cùng bàn vì hiểu lầm, nhưng khi tha thứ, hai bạn lại thân thiết hơn trước.",
    q6_3: "Ngược lại, những người mãi ôm hận thù thường sống trong đau khổ, cô đơn và bất hạnh.",
    q7: "Lòng khoan dung thực sự giúp con người sống thanh thản và hạnh phúc hơn vì nó giải phóng tâm hồn khỏi oán hận.",
    q8: "Mỗi người cần rèn luyện lòng khoan dung, biết tha thứ và bao dung. Bản thân em sẽ không chấp nhặt lỗi nhỏ của bạn bè và luôn sẵn lòng tha thứ.",
  },

  // 4. Sự kiên trì
  [topics[3]]: {
    q1: "Sự kiên trì",
    q2: "Ý kiến: \"Sự kiên trì là chìa khóa dẫn đến thành công\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì không có thành công nào đến dễ dàng, chỉ có kiên trì mới giúp ta vượt qua khó khăn.",
    q4: "Kiên trì là sự bền bỉ, nhẫn nại, không bỏ cuộc trước khó khăn, thử thách. Ý kiến khẳng định kiên trì chính là yếu tố quan trọng nhất, là chìa khóa mở cánh cửa thành công.",
    q5_1: "Kiên trì giúp con người vượt qua thất bại, biến khó khăn thành động lực để cố gắng hơn.",
    q5_2: "Người kiên trì tích lũy kinh nghiệm qua từng lần thử, dần hoàn thiện bản thân đến khi đạt mục tiêu.",
    q5_3: "Không có tài năng bẩm sinh nào thay thế được sự kiên trì, vì tài năng mà thiếu kiên trì cũng sẽ lãng phí.",
    q6_1: "Edison đã thất bại hàng nghìn lần trước khi phát minh ra bóng đèn, nhờ kiên trì mà ông thành công.",
    q6_2: "Trong lớp em, bạn từng yếu Toán nhưng kiên trì luyện tập mỗi ngày, cuối năm đạt học sinh giỏi.",
    q6_3: "Ngược lại, nhiều người tài giỏi nhưng thiếu kiên trì, nửa chừng bỏ cuộc nên không bao giờ thành công.",
    q7: "Sự kiên trì thực sự là chìa khóa dẫn đến thành công vì nó giúp con người không bỏ cuộc cho đến khi đạt được mục tiêu.",
    q8: "Mỗi người cần rèn luyện tính kiên trì trong học tập và cuộc sống. Bản thân em sẽ kiên trì luyện tập mỗi ngày và không bỏ cuộc khi gặp khó khăn.",
  },

  // 5. Tình yêu thương
  [topics[4]]: {
    q1: "Tình yêu thương",
    q2: "Ý kiến: \"Tình yêu thương là sức mạnh để thay đổi thế giới\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì yêu thương có thể cảm hóa con người, xóa bỏ hận thù và xây dựng một thế giới tốt đẹp hơn.",
    q4: "Tình yêu thương là tình cảm quan tâm, chăm sóc, sẻ chia giữa con người với nhau. Ý kiến khẳng định yêu thương không chỉ là tình cảm mà còn là sức mạnh có thể thay đổi cả thế giới.",
    q5_1: "Yêu thương có sức mạnh cảm hóa, biến kẻ thù thành bạn, biến hận thù thành hòa bình.",
    q5_2: "Khi được yêu thương, con người sẽ tốt đẹp hơn, sẵn sàng lan tỏa yêu thương đến người khác.",
    q5_3: "Tình yêu thương là động lực thúc đẩy con người hành động vì cộng đồng, vì những điều tốt đẹp.",
    q6_1: "Mẹ Teresa dành cả đời chăm sóc người nghèo, người bệnh, tình yêu thương của bà đã thay đổi cuộc đời hàng triệu người.",
    q6_2: "Trong lớp em, khi bạn gặp khó khăn, cả lớp cùng giúp đỡ, tình yêu thương đó giúp bạn vượt qua và học tốt hơn.",
    q6_3: "Các phong trào thiện nguyện, quyên góp giúp đỡ đồng bào vùng lũ cho thấy sức mạnh to lớn của tình yêu thương.",
    q7: "Tình yêu thương thực sự là sức mạnh vĩ đại có thể thay đổi thế giới vì nó kết nối con người và lan tỏa những điều tốt đẹp.",
    q8: "Mỗi người cần biết yêu thương, sẻ chia với mọi người xung quanh. Bản thân em sẽ luôn quan tâm, giúp đỡ bạn bè và tham gia các hoạt động thiện nguyện.",
  },

  // 6. Lòng dũng cảm
  [topics[5]]: {
    q1: "Lòng dũng cảm",
    q2: "Ý kiến: \"Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì ai cũng có lúc sợ hãi, nhưng người dũng cảm là người dám đối mặt và vượt qua nỗi sợ đó.",
    q4: "Dũng cảm không phải là liều lĩnh hay không biết sợ. Dũng cảm thực sự là khi biết sợ nhưng vẫn dám hành động, dám đối mặt với khó khăn, nguy hiểm vì điều đúng đắn.",
    q5_1: "Mọi người đều có nỗi sợ, nhưng người dũng cảm không để nỗi sợ ngăn cản mình làm điều đúng đắn.",
    q5_2: "Dũng cảm vượt qua sợ hãi giúp con người trưởng thành, mạnh mẽ và tự tin hơn trong cuộc sống.",
    q5_3: "Lòng dũng cảm truyền cảm hứng cho những người xung quanh, tạo nên sức mạnh lan tỏa trong cộng đồng.",
    q6_1: "Những chiến sĩ cứu hỏa dù biết nguy hiểm vẫn lao vào đám cháy để cứu người, đó mới thực sự là dũng cảm.",
    q6_2: "Bạn em tuy sợ nước nhưng vẫn dũng cảm học bơi, cuối cùng bạn ấy bơi giỏi và tự tin hơn rất nhiều.",
    q6_3: "Ngược lại, người liều lĩnh hành động mà không suy nghĩ không phải là dũng cảm mà là thiếu suy xét.",
    q7: "Lòng dũng cảm thực sự nằm ở việc vượt qua nỗi sợ hãi chứ không phải không biết sợ, vì đó mới là phẩm chất đáng quý.",
    q8: "Mỗi người cần rèn luyện lòng dũng cảm, dám đối mặt với khó khăn. Bản thân em sẽ dũng cảm nhận lỗi khi sai và dám bảo vệ lẽ phải.",
  },

  // 7. Sống có trách nhiệm
  [topics[6]]: {
    q1: "Sống có trách nhiệm",
    q2: "Ý kiến: \"Sống có trách nhiệm là biểu hiện của người trưởng thành\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì người trưởng thành thực sự là người biết chịu trách nhiệm với lời nói, hành động của mình.",
    q4: "Sống có trách nhiệm là biết bổn phận, nghĩa vụ của mình và hoàn thành tốt. Ý kiến khẳng định rằng trách nhiệm là thước đo quan trọng nhất của sự trưởng thành, không phải tuổi tác.",
    q5_1: "Người có trách nhiệm luôn hoàn thành tốt công việc, không đổ lỗi cho hoàn cảnh hay người khác.",
    q5_2: "Sống có trách nhiệm giúp con người được tin tưởng, tôn trọng, tạo nên giá trị bản thân trong xã hội.",
    q5_3: "Trách nhiệm với bản thân, gia đình và xã hội là biểu hiện rõ ràng nhất của sự trưởng thành về nhân cách.",
    q6_1: "Nhiều bạn trẻ tuy còn nhỏ tuổi nhưng biết chăm sóc gia đình, học tập chăm chỉ - đó là biểu hiện của sự trưởng thành.",
    q6_2: "Trong lớp em, bạn lớp trưởng luôn hoàn thành tốt nhiệm vụ, chịu trách nhiệm trước tập thể, được mọi người tin tưởng.",
    q6_3: "Ngược lại, người vô trách nhiệm dù lớn tuổi vẫn bị coi là chưa trưởng thành, thiếu đáng tin cậy.",
    q7: "Sống có trách nhiệm thực sự là biểu hiện quan trọng nhất của sự trưởng thành vì nó thể hiện nhân cách và giá trị con người.",
    q8: "Mỗi người cần rèn luyện tinh thần trách nhiệm từ những việc nhỏ. Bản thân em sẽ hoàn thành tốt bài tập, giữ lời hứa và chịu trách nhiệm với hành động của mình.",
  },

  // 8. Lòng biết ơn
  [topics[7]]: {
    q1: "Lòng biết ơn",
    q2: "Ý kiến: \"Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì người biết ơn là người biết trân trọng, không vô ơn, thể hiện tâm hồn đẹp.",
    q4: "Biết ơn là ghi nhớ, trân trọng công lao, tình cảm mà người khác dành cho mình. Ý kiến khẳng định rằng biết ơn là phẩm chất phản ánh vẻ đẹp tâm hồn con người.",
    q5_1: "Người biết ơn là người biết trân trọng những gì mình nhận được, không coi đó là điều hiển nhiên.",
    q5_2: "Biết ơn giúp con người sống khiêm tốn, nhận ra mình luôn cần sự giúp đỡ của người khác.",
    q5_3: "Lòng biết ơn thúc đẩy con người sống tốt hơn, muốn đền đáp và lan tỏa yêu thương ra cộng đồng.",
    q6_1: "Dân tộc ta có truyền thống \"Uống nước nhớ nguồn\", mỗi dịp lễ Tết con cháu thắp hương tưởng nhớ tổ tiên.",
    q6_2: "Bạn em luôn viết thiệp cảm ơn thầy cô nhân ngày Nhà giáo, hành động nhỏ nhưng thể hiện tâm hồn đẹp.",
    q6_3: "Ngược lại, người vô ơn, quên ơn người đã giúp đỡ mình thường bị xã hội xa lánh và lên án.",
    q7: "Lòng biết ơn thực sự là dấu hiệu của tâm hồn cao đẹp vì nó cho thấy con người biết trân trọng cuộc sống và tình cảm của mọi người.",
    q8: "Mỗi người cần ghi nhớ và biết ơn những điều tốt đẹp mình nhận được. Bản thân em sẽ luôn cảm ơn cha mẹ, thầy cô và bạn bè đã giúp đỡ mình.",
  },

  // 9. Sự tự tin
  [topics[8]]: {
    q1: "Sự tự tin",
    q2: "Ý kiến: \"Sự tự tin là bước đầu tiên trên con đường thành công\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì tự tin giúp con người dám hành động, dám theo đuổi ước mơ.",
    q4: "Tự tin là tin vào năng lực, giá trị của bản thân. Ý kiến khẳng định tự tin là bước khởi đầu quan trọng nhất trên hành trình đạt đến thành công.",
    q5_1: "Người tự tin dám đặt mục tiêu cao và nỗ lực thực hiện, không ngại thất bại.",
    q5_2: "Tự tin giúp con người thể hiện tốt năng lực, tạo ấn tượng và nhận được sự tin tưởng từ người khác.",
    q5_3: "Tự tin là nền tảng để phát triển các phẩm chất khác như kiên trì, dũng cảm và sáng tạo.",
    q6_1: "Jack Ma từng bị từ chối hàng chục lần khi xin việc nhưng vẫn tự tin theo đuổi ước mơ, cuối cùng xây dựng đế chế Alibaba.",
    q6_2: "Trong lớp, những bạn tự tin phát biểu thường được thầy cô đánh giá cao và tiến bộ nhanh hơn.",
    q6_3: "Ngược lại, nhiều người tài giỏi nhưng thiếu tự tin nên không dám thể hiện, bỏ lỡ nhiều cơ hội.",
    q7: "Tự tin đúng là bước đầu tiên trên con đường thành công vì nếu không tin vào bản thân thì không thể bắt đầu bất cứ điều gì.",
    q8: "Học sinh cần rèn luyện sự tự tin bằng cách chuẩn bị kỹ bài học và mạnh dạn tham gia hoạt động. Bản thân em sẽ tự tin hơn trong giao tiếp và học tập.",
  },

  // 10. Đoàn kết
  [topics[9]]: {
    q1: "Đoàn kết",
    q2: "Ý kiến: \"Đoàn kết là sức mạnh, chia rẽ là yếu đuối\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì khi đoàn kết, sức mạnh tập thể luôn lớn hơn sức mạnh cá nhân.",
    q4: "Đoàn kết là sự gắn bó, hợp tác cùng nhau vì mục tiêu chung. Ý kiến khẳng định đoàn kết tạo nên sức mạnh, còn chia rẽ dẫn đến yếu đuối, thất bại.",
    q5_1: "Đoàn kết giúp chia sẻ công việc, phát huy thế mạnh của từng người để đạt kết quả tốt nhất.",
    q5_2: "Khi đoàn kết, mọi người hỗ trợ nhau vượt qua khó khăn mà một cá nhân không thể tự làm được.",
    q5_3: "Chia rẽ khiến sức mạnh bị phân tán, dễ bị kẻ xấu lợi dụng, dẫn đến thất bại.",
    q6_1: "Lịch sử Việt Nam cho thấy nhờ đoàn kết toàn dân mà chúng ta đã chiến thắng nhiều kẻ thù xâm lược hùng mạnh.",
    q6_2: "Trong lớp em, khi cả lớp cùng nhau chuẩn bị cho hội thi văn nghệ, nhờ đoàn kết mà lớp đạt giải nhất.",
    q6_3: "Câu chuyện \"Bó đũa\" dạy rằng mỗi chiếc đũa riêng lẻ dễ bẻ gãy, nhưng cả bó đũa thì không ai bẻ nổi.",
    q7: "Đoàn kết thực sự là sức mạnh vì nó gộp sức mạnh của nhiều người thành một khối vững chắc, không thế lực nào có thể phá vỡ.",
    q8: "Mỗi chúng ta cần biết hợp tác, tôn trọng và hỗ trợ lẫn nhau. Bản thân em sẽ luôn đoàn kết với bạn bè, không gây chia rẽ trong lớp.",
  },
};

// ─── Gợi ý chung cho 8 câu hỏi Tìm ý ─────────────────────────────────────────

const generalHints: Record<string, string[]> = {
  q1: [
    "Hãy xác định vấn đề đạo lí mà đề bài đưa ra để bàn luận.",
    "Vấn đề đó liên quan đến phẩm chất, đức tính nào của con người?",
  ],
  q2: [
    "Hãy nêu rõ ý kiến trong đề bài mà em cần tán thành hoặc phản đối.",
    "Viết lại nguyên văn ý kiến đó và cho biết em tán thành hay phản đối.",
  ],
  q3: [
    "Hãy nêu suy nghĩ khái quát của em: Em đồng ý hay không? Vì sao?",
    "Em có thể viết một câu ngắn gọn thể hiện quan điểm của mình.",
  ],
  q4: [
    "Hãy giải thích rõ các từ ngữ, khái niệm quan trọng trong ý kiến.",
    "Thực chất ý kiến đó muốn nói lên điều gì? Hãy diễn đạt lại bằng lời của em.",
  ],
  q5: [
    "Hãy nghĩ xem có những khía cạnh nào của vấn đề khiến em tán thành/phản đối.",
    "Mỗi khía cạnh nên là một lí lẽ riêng biệt, rõ ràng.",
    "Em có thể nêu từ 2-3 khía cạnh khác nhau.",
  ],
  q6: [
    "Hãy tìm ví dụ cụ thể để chứng minh cho mỗi khía cạnh đã nêu.",
    "Ví dụ có thể từ cuộc sống, lịch sử, văn học hoặc trải nghiệm bản thân.",
    "Ví dụ càng cụ thể, bài viết càng thuyết phục.",
  ],
  q7: [
    "Hãy khẳng định lại ý kiến của em sau khi đã phân tích các khía cạnh.",
    "Em có thể viết một câu ngắn gọn, mạnh mẽ để kết luận.",
  ],
  q8: [
    "Hãy nêu ý nghĩa, bài học rút ra từ việc tán thành ý kiến này.",
    "Việc tán thành ý kiến này có ý nghĩa gì với bản thân em và mọi người?",
  ],
};

// ─── Cấu hình dàn ý ────────────────────────────────────────────────────────────

const outlineSlotConfig: OutlineSectionConfig[] = [
  {
    section: "MỞ BÀI",
    color: "blue",
    items: [
      { key: "gioiThieu", label: "Giới thiệu vấn đề đời sống" },
      { key: "yKien", label: "Nêu ý kiến cần bàn luận" },
      { key: "thaiDo", label: "Thái độ tán thành/phản đối" },
    ],
  },
  {
    section: "THÂN BÀI",
    color: "purple",
    items: [{ key: "thucChat", label: "Trình bày thực chất của ý kiến" }],
    subSection: {
      label: "Khía cạnh & Bằng chứng",
      rows: [
        { liLe: "Khía cạnh 1", bangChung: "Bằng chứng 1", num: 1 },
        { liLe: "Khía cạnh 2", bangChung: "Bằng chứng 2", num: 2 },
        { liLe: "Khía cạnh 3", bangChung: "Bằng chứng 3", num: 3 },
      ],
    },
  },
  {
    section: "KẾT BÀI",
    color: "orange",
    items: [
      { key: "khangDinh", label: "Khẳng định lại ý kiến" },
      { key: "yNghia", label: "Ý nghĩa của việc tán thành" },
    ],
  },
];

// ─── Danh sách kiểm tra (5 mục) ───────────────────────────────────────────────

const checklistItems: ChecklistItem[] = [
  {
    key: "hasClearIssue",
    label: "Đã giới thiệu rõ vấn đề đời sống và ý kiến cần bàn luận chưa?",
    description:
      "Kiểm tra xem phần mở bài đã nêu rõ vấn đề đời sống, ý kiến cần tán thành/phản đối và thái độ của em chưa.",
  },
  {
    key: "hasExplanation",
    label: "Đã trình bày thực chất của ý kiến chưa?",
    description:
      "Kiểm tra xem phần thân bài đã giải thích rõ ý nghĩa, nội dung thực chất của ý kiến chưa.",
  },
  {
    key: "hasAspects",
    label: "Đã nêu được ít nhất 2-3 khía cạnh thuyết phục chưa?",
    description:
      "Kiểm tra xem phần thân bài đã có đủ các khía cạnh (lí lẽ) rõ ràng để bảo vệ quan điểm tán thành/phản đối chưa.",
  },
  {
    key: "hasEvidence",
    label: "Đã có bằng chứng cụ thể cho mỗi khía cạnh chưa?",
    description:
      "Kiểm tra xem mỗi khía cạnh đã có ví dụ hoặc bằng chứng cụ thể đi kèm chưa.",
  },
  {
    key: "hasConclusion",
    label: "Đã khẳng định lại ý kiến và nêu ý nghĩa ở phần kết bài chưa?",
    description:
      "Kiểm tra xem phần kết bài đã khẳng định lại quan điểm và nêu ý nghĩa của việc tán thành/phản đối chưa.",
  },
];

// ─── Hàm tạo cấu hình các phần viết bài (5 phần) ──────────────────────────────

function getWritingSections(
  slots: Record<string, string>,
): WritingSection[] {
  return [
    {
      key: "moBai",
      title: "Mở bài",
      color: "blue",
      prompt:
        "Hãy viết đoạn mở bài giới thiệu vấn đề đời sống, nêu ý kiến cần bàn luận và thể hiện thái độ tán thành hoặc phản đối",
      hints: [
        '"Trong cuộc sống, có ý kiến cho rằng: ..."',
        '"Đây là một nhận định rất đúng đắn / đáng suy ngẫm."',
        '"Em hoàn toàn tán thành / phản đối ý kiến trên vì ..."',
      ],
      outlineItems: [
        {
          label: "Giới thiệu vấn đề đời sống",
          value: slots.gioiThieu || "",
        },
        { label: "Ý kiến cần bàn luận", value: slots.yKien || "" },
        { label: "Thái độ tán thành/phản đối", value: slots.thaiDo || "" },
      ],
    },
    {
      key: "thanBai1",
      title: "Thân bài – Giải thích ý kiến",
      color: "purple",
      prompt:
        "Hãy viết đoạn thân bài trình bày thực chất (giải thích) ý kiến cần bàn luận",
      hints: [
        '"Trước hết, chúng ta cần hiểu rõ ý kiến trên. ..."',
        '"... có nghĩa là ... / Nói cách khác, ý kiến muốn khẳng định rằng ..."',
        '"Như vậy, thực chất ý kiến trên nhấn mạnh rằng ..."',
      ],
      outlineItems: [
        {
          label: "Thực chất của ý kiến",
          value: slots.thucChat || "",
        },
      ],
    },
    {
      key: "thanBai2",
      title: "Thân bài – Khía cạnh & Bằng chứng (1-2)",
      color: "purple",
      prompt:
        "Hãy viết đoạn thân bài trình bày khía cạnh 1, 2 và bằng chứng chứng minh",
      hints: [
        '"Thứ nhất, em tán thành ý kiến trên vì ..."',
        '"Điều đó được chứng minh qua ... / Chẳng hạn như ..."',
        '"Thứ hai, ... còn bởi vì ..."',
        '"Ví dụ như ... / Bản thân em đã từng chứng kiến ..."',
      ],
      outlineItems: [
        { label: "Khía cạnh 1", value: slots.liLe1 || "" },
        { label: "Bằng chứng 1", value: slots.bangChung1 || "" },
        { label: "Khía cạnh 2", value: slots.liLe2 || "" },
        { label: "Bằng chứng 2", value: slots.bangChung2 || "" },
      ],
    },
    {
      key: "thanBai3",
      title: "Thân bài – Khía cạnh & Bằng chứng (3)",
      color: "purple",
      prompt:
        "Hãy viết đoạn thân bài trình bày khía cạnh 3 và bằng chứng chứng minh",
      hints: [
        '"Không chỉ vậy, ... còn ..."',
        '"Thứ ba, ý kiến trên hoàn toàn đúng vì ..."',
        '"Minh chứng rõ ràng nhất là ... / Trong thực tế ..."',
      ],
      outlineItems: [
        { label: "Khía cạnh 3", value: slots.liLe3 || "" },
        { label: "Bằng chứng 3", value: slots.bangChung3 || "" },
      ],
    },
    {
      key: "ketBai",
      title: "Kết bài",
      color: "orange",
      prompt:
        "Hãy viết đoạn kết bài khẳng định lại ý kiến và nêu ý nghĩa của việc tán thành",
      hints: [
        '"Tóm lại, ý kiến \"...\" là hoàn toàn đúng đắn."',
        '"Việc tán thành ý kiến này nhắc nhở mỗi chúng ta ..."',
        '"Là học sinh, em sẽ cố gắng ... để ..."',
      ],
      outlineItems: [
        { label: "Khẳng định lại ý kiến", value: slots.khangDinh || "" },
        {
          label: "Ý nghĩa của việc tán thành",
          value: slots.yNghia || "",
        },
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

// ─── Export dữ liệu lớp 7 ─────────────────────────────────────────────────────

export const grade7Data: GradeData = {
  grade: 7,
  label: "Lớp 7",
  essayType:
    "VIẾT BÀI VĂN NGHỊ LUẬN VỀ MỘT VẤN ĐỀ ĐỜI SỐNG (TRÌNH BÀY Ý KIẾN TÁN THÀNH HOẶC PHẢN ĐỐI)",
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
