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
  "Lòng hiếu thảo là nền tảng của mọi đức hạnh",
  "Trung thực là phẩm chất quý giá nhất của con người",
  "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn",
  "Sự kiên trì là chìa khóa dẫn đến thành công",
  "Tình yêu thương là sức mạnh để thay đổi thế giới",
  "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi",
  "Sống có trách nhiệm là biểu hiện của người trưởng thành",
  "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp",
  "Sự tự tin là bước đầu tiên trên con đường thành công",
  "Đoàn kết là sức mạnh, chia rẽ là yếu đuối",
];

// ─── Dữ liệu trắc nghiệm cho phần Hiểu đề (3 câu hỏi / đề) ─────────────────

const topicQuizData: Record<string, TopicQuiz> = {
  // 1. Lòng hiếu thảo
  [topics[0]]: {
    q1: {
      options: ["Hiếu thảo", "Đức hạnh", "Nền tảng"],
      correct: "Hiếu thảo",
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
        "Bàn về vai trò của lòng hiếu thảo – nền tảng của mọi đức hạnh trong cuộc sống",
        "Bàn về cách chăm sóc ông bà, cha mẹ khi già yếu",
        "Bàn về truyền thống gia đình của người Việt Nam",
      ],
      correct:
        "Bàn về vai trò của lòng hiếu thảo – nền tảng của mọi đức hạnh trong cuộc sống",
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
        "Bàn về ý kiến cho rằng trung thực là phẩm chất quý giá nhất của con người",
        "Bàn về tác hại của sự gian dối trong cuộc sống",
        "Bàn về cách rèn luyện tính trung thực ở học sinh",
      ],
      correct:
        "Bàn về ý kiến cho rằng trung thực là phẩm chất quý giá nhất của con người",
    },
  },

  // 3. Lòng khoan dung
  [topics[2]]: {
    q1: {
      options: ["Khoan dung", "Thanh thản", "Hạnh phúc"],
      correct: "Khoan dung",
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
        "Bàn về ý kiến cho rằng lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn",
        "Bàn về cách tha thứ cho người khác khi bị xúc phạm",
        "Bàn về vai trò của sự bao dung trong gia đình",
      ],
      correct:
        "Bàn về ý kiến cho rằng lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn",
    },
  },

  // 4. Sự kiên trì
  [topics[3]]: {
    q1: {
      options: ["Kiên trì", "Thành công", "Chìa khóa"],
      correct: "Kiên trì",
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
        "Bàn về ý kiến cho rằng sự kiên trì là chìa khóa dẫn đến thành công",
        "Bàn về cách vượt qua khó khăn trong học tập",
        "Bàn về tầm quan trọng của mục tiêu trong cuộc sống",
      ],
      correct:
        "Bàn về ý kiến cho rằng sự kiên trì là chìa khóa dẫn đến thành công",
    },
  },

  // 5. Tình yêu thương
  [topics[4]]: {
    q1: {
      options: ["Yêu thương", "Sức mạnh", "Thế giới"],
      correct: "Yêu thương",
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
        "Bàn về ý kiến cho rằng tình yêu thương là sức mạnh để thay đổi thế giới",
        "Bàn về các hoạt động từ thiện trong cộng đồng",
        "Bàn về vai trò của tình cảm gia đình đối với trẻ em",
      ],
      correct:
        "Bàn về ý kiến cho rằng tình yêu thương là sức mạnh để thay đổi thế giới",
    },
  },

  // 6. Lòng dũng cảm
  [topics[5]]: {
    q1: {
      options: ["Dũng cảm", "Nỗi sợ hãi", "Vượt qua"],
      correct: "Dũng cảm",
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
        "Bàn về ý kiến cho rằng lòng dũng cảm là vượt qua nỗi sợ hãi chứ không phải không biết sợ",
        "Bàn về cách rèn luyện sự can đảm ở lứa tuổi học sinh",
        "Bàn về vai trò của sự tự tin trong cuộc sống",
      ],
      correct:
        "Bàn về ý kiến cho rằng lòng dũng cảm là vượt qua nỗi sợ hãi chứ không phải không biết sợ",
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
        "Bàn về ý kiến cho rằng sống có trách nhiệm là biểu hiện của người trưởng thành",
        "Bàn về cách rèn luyện tính kỷ luật ở trường học",
        "Bàn về vai trò của gia đình trong việc dạy con sống tự lập",
      ],
      correct:
        "Bàn về ý kiến cho rằng sống có trách nhiệm là biểu hiện của người trưởng thành",
    },
  },

  // 8. Lòng biết ơn
  [topics[7]]: {
    q1: {
      options: ["Biết ơn", "Tâm hồn cao đẹp", "Dấu hiệu"],
      correct: "Biết ơn",
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
        "Bàn về ý kiến cho rằng lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp",
        "Bàn về truyền thống uống nước nhớ nguồn của dân tộc",
        "Bàn về cách thể hiện lòng biết ơn với thầy cô giáo",
      ],
      correct:
        "Bàn về ý kiến cho rằng lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp",
    },
  },

  // 9. Sự tự tin
  [topics[8]]: {
    q1: {
      options: ["Tự tin", "Thành công", "Bước đầu tiên"],
      correct: "Tự tin",
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
        "Bàn về ý kiến cho rằng sự tự tin là bước đầu tiên trên con đường thành công",
        "Bàn về cách khắc phục tính nhút nhát ở học sinh",
        "Bàn về vai trò của kỹ năng giao tiếp trong cuộc sống",
      ],
      correct:
        "Bàn về ý kiến cho rằng sự tự tin là bước đầu tiên trên con đường thành công",
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
        "Bàn về ý kiến cho rằng đoàn kết là sức mạnh, chia rẽ là yếu đuối",
        "Bàn về cách xây dựng tinh thần đồng đội trong lớp học",
        "Bàn về vai trò của sự hợp tác trong công việc nhóm",
      ],
      correct:
        "Bàn về ý kiến cho rằng đoàn kết là sức mạnh, chia rẽ là yếu đuối",
    },
  },
};

// ─── Từ khóa cho mỗi đề (5 từ khóa / đề) ─────────────────────────────────────

const topicKeywords: Record<string, string[]> = {
  [topics[0]]: ["hiếu thảo", "đức hạnh", "cha mẹ", "gia đình", "kính trọng"],
  [topics[1]]: ["trung thực", "phẩm chất", "lòng tin", "chân thành", "đạo đức"],
  [topics[2]]: ["khoan dung", "tha thứ", "thanh thản", "hạnh phúc", "bao dung"],
  [topics[3]]: ["kiên trì", "thành công", "nỗ lực", "bền bỉ", "quyết tâm"],
  [topics[4]]: ["yêu thương", "sức mạnh", "sẻ chia", "đồng cảm", "nhân ái"],
  [topics[5]]: ["dũng cảm", "nỗi sợ", "vượt qua", "can đảm", "nghị lực"],
  [topics[6]]: ["trách nhiệm", "trưởng thành", "bổn phận", "tự giác", "đáng tin"],
  [topics[7]]: ["biết ơn", "tâm hồn", "tri ân", "nhớ ơn", "cao đẹp"],
  [topics[8]]: ["tự tin", "thành công", "bản lĩnh", "dám làm", "tin tưởng"],
  [topics[9]]: ["đoàn kết", "sức mạnh", "chia rẽ", "hợp tác", "tập thể"],
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
    q1: "Vấn đề đạo lí cần bàn luận là vai trò của lòng hiếu thảo trong việc hình thành nhân cách con người.",
    q2: "Ý kiến: \"Lòng hiếu thảo là nền tảng của mọi đức hạnh\". Em tán thành ý kiến này.",
    q3: "Em hoàn toàn đồng ý vì người biết hiếu thảo với cha mẹ thì cũng sẽ biết yêu thương, kính trọng mọi người xung quanh.",
    q4: "Lòng hiếu thảo là tình cảm yêu thương, kính trọng, biết ơn và chăm sóc cha mẹ, ông bà. Đức hạnh là những phẩm chất tốt đẹp của con người. Ý kiến khẳng định: hiếu thảo là gốc rễ, là cơ sở để phát triển mọi phẩm chất tốt đẹp khác.",
    q5_1: "Người có lòng hiếu thảo biết yêu thương cha mẹ thì cũng biết yêu thương, tôn trọng mọi người xung quanh. Từ tình yêu gia đình mà mở rộng ra tình yêu xã hội.",
    q5_2: "Hiếu thảo giúp con người biết sống có trách nhiệm. Khi biết ơn công lao sinh thành, dưỡng dục của cha mẹ, ta sẽ tự giác sống tốt, học hành chăm chỉ để không phụ lòng cha mẹ.",
    q5_3: "Lòng hiếu thảo là truyền thống quý báu của dân tộc Việt Nam, được truyền từ đời này sang đời khác, góp phần giữ gìn nền tảng đạo đức xã hội.",
    q6_1: "Trong truyện cổ tích Việt Nam, chàng Thạch Sanh dù nghèo khó vẫn luôn hiếu thảo, nhờ đó mà được trời đất phù hộ, cuối cùng trở thành vua hiền.",
    q6_2: "Bạn lớp trưởng lớp em rất hiếu thảo, luôn giúp mẹ việc nhà và chăm sóc em nhỏ. Bạn ấy cũng rất hòa đồng, giúp đỡ bạn bè và được mọi người yêu quý.",
    q6_3: "Ngược lại, có người bất hiếu với cha mẹ thì thường cũng bạc bẽo với bạn bè, đồng nghiệp. Điều đó chứng tỏ hiếu thảo chính là nền tảng của mọi đức hạnh.",
    q7: "Từ những phân tích trên, em khẳng định lòng hiếu thảo thực sự là nền tảng vững chắc để xây dựng mọi đức hạnh tốt đẹp trong con người.",
    q8: "Việc tán thành ý kiến này nhắc nhở mỗi người hãy luôn giữ gìn lòng hiếu thảo, vì đó chính là bước đầu tiên để trở thành người có nhân cách tốt đẹp.",
  },

  // 2. Trung thực
  [topics[1]]: {
    q1: "Vấn đề đạo lí cần bàn luận là giá trị của đức tính trung thực đối với con người trong cuộc sống.",
    q2: "Ý kiến: \"Trung thực là phẩm chất quý giá nhất của con người\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì trung thực giúp con người xây dựng được lòng tin, sự tôn trọng từ mọi người và sống thanh thản với chính mình.",
    q4: "Trung thực là luôn nói đúng sự thật, không gian dối, không làm sai lệch sự việc. Ý kiến khẳng định rằng trong tất cả các phẩm chất tốt đẹp, trung thực là phẩm chất quý giá nhất, đáng trân trọng nhất.",
    q5_1: "Trung thực giúp con người xây dựng lòng tin với mọi người. Khi ta luôn nói thật, người khác sẽ tin tưởng, tôn trọng và sẵn sàng hợp tác với ta.",
    q5_2: "Người trung thực sống thanh thản, không phải lo lắng che giấu sự thật. Sự gian dối có thể đem lại lợi ích trước mắt nhưng sẽ gây hậu quả lâu dài.",
    q5_3: "Trung thực là nền tảng của mọi mối quan hệ tốt đẹp: tình bạn, tình thầy trò, tình gia đình. Không có trung thực, mọi mối quan hệ đều dễ đổ vỡ.",
    q6_1: "Tấm gương Bác Hồ luôn sống trung thực, giản dị. Nhờ đức tính trung thực, Bác được nhân dân cả nước và bạn bè quốc tế kính trọng, tin yêu.",
    q6_2: "Trong lớp em, có bạn luôn thành thật khi làm bài kiểm tra, không quay cóp. Dù đôi khi điểm không cao bằng bạn khác, nhưng bạn ấy được cô giáo và các bạn rất tin tưởng.",
    q6_3: "Ngược lại, có bạn hay gian lận khi thi. Khi bị phát hiện, bạn ấy mất uy tín, các bạn trong lớp không ai muốn làm nhóm cùng nữa.",
    q7: "Từ những phân tích trên, em khẳng định trung thực thực sự là phẩm chất quý giá nhất, là nền tảng để con người xây dựng cuộc sống tốt đẹp.",
    q8: "Việc tán thành ý kiến này giúp mỗi người ý thức rèn luyện tính trung thực hằng ngày, từ những việc nhỏ nhất, để trở thành người đáng tin cậy.",
  },

  // 3. Lòng khoan dung
  [topics[2]]: {
    q1: "Vấn đề đạo lí cần bàn luận là vai trò của lòng khoan dung đối với hạnh phúc và sự thanh thản trong cuộc sống con người.",
    q2: "Ý kiến: \"Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì khi biết tha thứ và bao dung, tâm hồn ta sẽ nhẹ nhàng, không bị oán hận làm nặng nề.",
    q4: "Lòng khoan dung là biết tha thứ, bao dung với lỗi lầm của người khác, không chấp nhặt hay thù hận. Ý kiến khẳng định rằng nhờ có lòng khoan dung, con người sẽ tìm được sự thanh thản trong tâm hồn và hạnh phúc trong cuộc sống.",
    q5_1: "Khi biết tha thứ, tâm hồn ta sẽ nhẹ nhàng, không bị oán giận, hận thù đè nặng. Ta sẽ cảm thấy vui vẻ, bình yên hơn trong cuộc sống hằng ngày.",
    q5_2: "Lòng khoan dung giúp giữ gìn và hàn gắn các mối quan hệ. Ai cũng có lúc sai lầm, nếu biết tha thứ cho nhau thì tình bạn, tình thân sẽ bền chặt hơn.",
    q5_3: "Người khoan dung thường được mọi người yêu quý và kính trọng. Sự bao dung lan tỏa điều tích cực, tạo nên môi trường sống hòa hợp, ấm áp.",
    q6_1: "Đức Phật dạy rằng: \"Ôm giữ sự giận dữ giống như nắm than hồng, người bị bỏng chính là bạn\". Tha thứ chính là buông bỏ hòn than nóng để tay mình không bị đau.",
    q6_2: "Trong lớp em, có lần hai bạn cãi nhau rất nặng lời. Nhưng sau đó bạn Mai đã chủ động xin lỗi và bạn Hoa đã tha thứ. Từ đó hai bạn chơi thân hơn trước.",
    q6_3: "Nelson Mandela từng bị tù 27 năm nhưng khi được tự do, ông không hề thù hận mà tha thứ cho những người đã giam giữ mình, nhờ đó ông mang lại hòa bình cho cả đất nước.",
    q7: "Từ những phân tích trên, em khẳng định lòng khoan dung thực sự giúp con người sống thanh thản, hạnh phúc hơn và xây dựng cuộc sống tốt đẹp hơn.",
    q8: "Việc tán thành ý kiến này nhắc nhở mỗi người hãy mở rộng tấm lòng, biết tha thứ để tâm hồn luôn nhẹ nhàng và cuộc sống tràn đầy niềm vui.",
  },

  // 4. Sự kiên trì
  [topics[3]]: {
    q1: "Vấn đề đạo lí cần bàn luận là vai trò của sự kiên trì đối với thành công trong cuộc sống.",
    q2: "Ý kiến: \"Sự kiên trì là chìa khóa dẫn đến thành công\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì không có thành công nào đạt được mà không cần sự kiên trì, bền bỉ vượt qua khó khăn.",
    q4: "Kiên trì là sự bền bỉ, nhẫn nại theo đuổi mục tiêu dù gặp nhiều khó khăn, trở ngại. Ý kiến khẳng định rằng kiên trì chính là yếu tố quan trọng nhất, giống như chiếc chìa khóa mở cánh cửa thành công.",
    q5_1: "Kiên trì giúp con người vượt qua mọi khó khăn, thử thách. Bất kỳ việc gì, dù khó đến mấy, nếu kiên trì theo đuổi thì cuối cùng sẽ đạt được kết quả.",
    q5_2: "Người kiên trì sẽ tích lũy được kiến thức và kinh nghiệm theo thời gian. Mỗi lần thất bại là một bài học, giúp ta tiến gần hơn đến thành công.",
    q5_3: "Kiên trì rèn luyện cho con người ý chí mạnh mẽ, không dễ bỏ cuộc. Đây là phẩm chất cần thiết để thành công trong bất kỳ lĩnh vực nào.",
    q6_1: "Thomas Edison đã thất bại hàng nghìn lần trước khi phát minh ra bóng đèn điện. Ông nói: \"Tôi không thất bại, tôi chỉ tìm ra mười nghìn cách không hiệu quả\". Nhờ kiên trì, ông đã thay đổi cả thế giới.",
    q6_2: "Bạn em học Toán không giỏi, nhưng bạn ấy kiên trì luyện tập mỗi ngày. Sau một năm, bạn ấy đã đạt giải ba trong kỳ thi Toán cấp huyện, khiến cả lớp ngưỡng mộ.",
    q6_3: "Câu tục ngữ \"Có công mài sắt, có ngày nên kim\" chứng minh rằng ông cha ta từ xưa đã hiểu rõ giá trị của sự kiên trì trong cuộc sống.",
    q7: "Từ những phân tích trên, em khẳng định sự kiên trì thực sự là chìa khóa quan trọng nhất để mở cánh cửa thành công trong cuộc sống.",
    q8: "Việc tán thành ý kiến này giúp mỗi người có thêm động lực để kiên trì theo đuổi ước mơ, không nản lòng trước khó khăn, thử thách.",
  },

  // 5. Tình yêu thương
  [topics[4]]: {
    q1: "Vấn đề đạo lí cần bàn luận là sức mạnh của tình yêu thương trong việc thay đổi thế giới và cuộc sống con người.",
    q2: "Ý kiến: \"Tình yêu thương là sức mạnh để thay đổi thế giới\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì tình yêu thương có thể làm mềm lòng người cứng rắn nhất, kết nối con người và tạo nên những điều kỳ diệu.",
    q4: "Tình yêu thương là tình cảm chân thành, sự quan tâm, sẻ chia giữa con người với nhau. Ý kiến khẳng định rằng yêu thương không chỉ là cảm xúc mà còn là sức mạnh to lớn, có khả năng thay đổi cả thế giới theo hướng tốt đẹp hơn.",
    q5_1: "Tình yêu thương giúp con người xích lại gần nhau, xóa bỏ hận thù và bất đồng. Khi có yêu thương, con người sẵn sàng giúp đỡ nhau vượt qua mọi khó khăn.",
    q5_2: "Yêu thương tạo nên sức mạnh cộng đồng. Khi mọi người cùng yêu thương, sẻ chia thì xã hội sẽ trở nên tốt đẹp, công bằng và nhân ái hơn.",
    q5_3: "Tình yêu thương giúp con người sống có ý nghĩa hơn. Khi biết yêu thương, ta sẽ sống không chỉ vì bản thân mà còn vì người khác, vì cộng đồng.",
    q6_1: "Trong đại dịch Covid-19, tình yêu thương thể hiện qua những chuyến xe chở lương thực miễn phí, những \"ATM gạo\" giúp đỡ người nghèo. Nhờ yêu thương, mọi người cùng vượt qua giai đoạn khó khăn.",
    q6_2: "Cô giáo vùng cao bỏ thành phố lên núi dạy chữ cho trẻ em nghèo. Tình yêu thương của cô đã thay đổi cuộc đời nhiều em nhỏ, giúp các em có cơ hội học tập, thoát nghèo.",
    q6_3: "Mẹ Teresa suốt đời giúp đỡ người nghèo khổ ở Ấn Độ. Tình yêu thương của bà đã truyền cảm hứng cho hàng triệu người trên khắp thế giới cùng làm điều tốt.",
    q7: "Từ những phân tích trên, em khẳng định tình yêu thương thực sự là sức mạnh vĩ đại nhất có thể thay đổi thế giới theo hướng tốt đẹp hơn.",
    q8: "Việc tán thành ý kiến này nhắc nhở mỗi người hãy gieo mầm yêu thương trong cuộc sống hằng ngày, vì mỗi hành động nhỏ đều có thể tạo nên thay đổi lớn.",
  },

  // 6. Lòng dũng cảm
  [topics[5]]: {
    q1: "Vấn đề đạo lí cần bàn luận là bản chất thực sự của lòng dũng cảm trong cuộc sống con người.",
    q2: "Ý kiến: \"Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì ai cũng có lúc sợ hãi, nhưng dũng cảm là khi ta dám đối mặt và vượt qua nỗi sợ đó để làm điều đúng đắn.",
    q4: "Dũng cảm không có nghĩa là liều lĩnh hay không biết sợ. Dũng cảm thực sự là khi biết sợ nhưng vẫn dám đối mặt, vẫn dám hành động vì lẽ phải. Ý kiến giúp ta hiểu đúng về bản chất của lòng dũng cảm.",
    q5_1: "Ai cũng có nỗi sợ, đó là phản ứng tự nhiên của con người. Người dũng cảm không phải không sợ gì cả mà là người biết kiểm soát nỗi sợ để hành động đúng đắn.",
    q5_2: "Dũng cảm đối mặt với nỗi sợ giúp con người trưởng thành hơn. Mỗi lần vượt qua nỗi sợ, ta sẽ mạnh mẽ hơn và tự tin hơn trong cuộc sống.",
    q5_3: "Lòng dũng cảm giúp con người bảo vệ lẽ phải, bảo vệ người yếu hơn mình. Nhờ có những người dũng cảm mà xã hội trở nên công bằng hơn.",
    q6_1: "Anh hùng Võ Thị Sáu dù còn rất trẻ, dù biết sợ nhưng vẫn dũng cảm chiến đấu vì Tổ quốc. Trước khi bị xử bắn, chị vẫn hát vang, thể hiện tinh thần bất khuất.",
    q6_2: "Bạn em dù rất sợ nước nhưng vẫn dũng cảm tham gia lớp học bơi vì biết đó là kỹ năng cần thiết. Sau ba tháng, bạn ấy đã bơi giỏi và rất tự hào về bản thân.",
    q6_3: "Trong lớp, có bạn dũng cảm đứng lên bảo vệ bạn bị bắt nạt dù bản thân cũng sợ. Hành động ấy khiến cả lớp kính phục và từ đó không ai bắt nạt ai nữa.",
    q7: "Từ những phân tích trên, em khẳng định lòng dũng cảm thực sự không phải là không biết sợ mà là dám đối mặt và vượt qua nỗi sợ hãi.",
    q8: "Việc tán thành ý kiến này giúp mỗi người hiểu đúng về dũng cảm, từ đó dám đối mặt với khó khăn thay vì trốn tránh trong cuộc sống.",
  },

  // 7. Sống có trách nhiệm
  [topics[6]]: {
    q1: "Vấn đề đạo lí cần bàn luận là mối liên hệ giữa tinh thần trách nhiệm và sự trưởng thành của con người.",
    q2: "Ý kiến: \"Sống có trách nhiệm là biểu hiện của người trưởng thành\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì người trưởng thành thực sự không chỉ lớn về tuổi tác mà còn biết chịu trách nhiệm với lời nói, hành động của mình.",
    q4: "Sống có trách nhiệm là biết nhận và hoàn thành tốt các nhiệm vụ, bổn phận của mình; dám chịu trách nhiệm với hành động và lời nói của bản thân. Ý kiến khẳng định rằng đây chính là dấu hiệu quan trọng nhất cho thấy một người đã thực sự trưởng thành.",
    q5_1: "Người có trách nhiệm luôn hoàn thành tốt công việc được giao, không đổ lỗi cho người khác. Đó là biểu hiện của sự trưởng thành trong suy nghĩ và hành động.",
    q5_2: "Sống có trách nhiệm giúp con người được tin tưởng và tôn trọng. Người lớn hay bạn bè đều muốn hợp tác với người biết chịu trách nhiệm.",
    q5_3: "Trách nhiệm không chỉ với bản thân mà còn với gia đình, bạn bè và cộng đồng. Biết nghĩ đến người khác là biểu hiện của sự trưởng thành thực sự.",
    q6_1: "Lớp trưởng lớp em luôn đến sớm dọn lớp, nhắc nhở các bạn giữ trật tự. Dù bận học nhưng bạn ấy không bao giờ thoái thác nhiệm vụ. Mọi người đều nói bạn ấy rất trưởng thành.",
    q6_2: "Có bạn trong lớp khi làm sai đã dũng cảm nhận lỗi trước thầy cô thay vì đổ lỗi cho bạn khác. Thầy cô rất khen bạn ấy vì biết chịu trách nhiệm.",
    q6_3: "Ngược lại, có người dù đã lớn tuổi nhưng luôn trốn tránh trách nhiệm, đổ lỗi cho hoàn cảnh. Người ấy dù già nhưng chưa thực sự trưởng thành.",
    q7: "Từ những phân tích trên, em khẳng định sống có trách nhiệm thực sự là biểu hiện rõ ràng nhất của sự trưởng thành trong mỗi con người.",
    q8: "Việc tán thành ý kiến này giúp mỗi người, đặc biệt là học sinh, ý thức rèn luyện tinh thần trách nhiệm từ nhỏ để trở thành người trưởng thành thực sự.",
  },

  // 8. Lòng biết ơn
  [topics[7]]: {
    q1: "Vấn đề đạo lí cần bàn luận là giá trị của lòng biết ơn trong việc thể hiện vẻ đẹp tâm hồn con người.",
    q2: "Ý kiến: \"Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì người biết ơn là người hiểu được giá trị của những gì mình nhận được, từ đó sống tốt hơn và nhân ái hơn.",
    q4: "Lòng biết ơn là sự ghi nhớ, trân trọng những điều tốt đẹp mà người khác đã làm cho mình. Tâm hồn cao đẹp là tâm hồn giàu tình cảm, biết sống vì người khác. Ý kiến khẳng định rằng biết ơn chính là biểu hiện cho thấy con người có tâm hồn đẹp đẽ, cao quý.",
    q5_1: "Người biết ơn là người biết trân trọng công sức, tình cảm của người khác. Đó là biểu hiện của một tâm hồn tinh tế, nhạy cảm và giàu tình cảm.",
    q5_2: "Lòng biết ơn giúp con người sống khiêm tốn, không kiêu ngạo. Khi biết ơn, ta hiểu rằng thành công của mình có sự đóng góp của nhiều người.",
    q5_3: "Biết ơn thúc đẩy con người sống tốt hơn, muốn đền đáp và giúp đỡ người khác. Từ biết ơn mà lan tỏa yêu thương ra cộng đồng.",
    q6_1: "Dân tộc ta có truyền thống \"Uống nước nhớ nguồn\", \"Ăn quả nhớ kẻ trồng cây\". Mỗi dịp lễ Tết, con cháu về thắp hương tưởng nhớ tổ tiên, thể hiện lòng biết ơn sâu sắc.",
    q6_2: "Bạn em luôn viết thiệp cảm ơn thầy cô nhân ngày Nhà giáo Việt Nam. Bạn ấy nói: \"Thầy cô đã dạy em biết bao điều hay, em phải biết ơn\". Hành động nhỏ nhưng thể hiện tâm hồn đẹp.",
    q6_3: "Ngược lại, có người được giúp đỡ nhưng không biết ơn, thậm chí còn quên ơn. Người như vậy bị mọi người xa lánh vì tâm hồn thiếu đi vẻ đẹp của lòng biết ơn.",
    q7: "Từ những phân tích trên, em khẳng định lòng biết ơn thực sự là dấu hiệu cho thấy một con người có tâm hồn cao đẹp, đáng trân trọng.",
    q8: "Việc tán thành ý kiến này nhắc nhở mỗi người hãy luôn ghi nhớ và biết ơn những điều tốt đẹp mà mình nhận được, để tâm hồn luôn đẹp và cuộc sống ý nghĩa hơn.",
  },

  // 9. Sự tự tin
  [topics[8]]: {
    q1: "Vấn đề đạo lí cần bàn luận là vai trò của sự tự tin trên con đường đạt đến thành công.",
    q2: "Ý kiến: \"Sự tự tin là bước đầu tiên trên con đường thành công\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì nếu không tin vào bản thân mình, ta sẽ không dám bắt đầu bất cứ điều gì, và không bắt đầu thì không thể thành công.",
    q4: "Tự tin là tin vào khả năng, giá trị của bản thân mình, dám nghĩ, dám làm, dám thể hiện. Ý kiến khẳng định rằng tự tin chính là bước khởi đầu quan trọng nhất, là điều kiện tiên quyết để đạt được thành công.",
    q5_1: "Tự tin giúp con người dám bắt đầu, dám thử sức với những điều mới. Nếu không tự tin, ta sẽ do dự, bỏ lỡ nhiều cơ hội quý giá trong cuộc sống.",
    q5_2: "Người tự tin sẽ truyền cảm hứng và sự tin tưởng cho người khác. Khi ta tin vào bản thân, mọi người xung quanh cũng sẽ tin tưởng vào ta.",
    q5_3: "Tự tin giúp con người bình tĩnh đối mặt với khó khăn, không dễ nản lòng. Khi tin rằng mình làm được, ta sẽ nỗ lực hết sức để đạt mục tiêu.",
    q6_1: "Nick Vujicic sinh ra không có tay chân nhưng nhờ sự tự tin, anh đã trở thành diễn giả nổi tiếng thế giới, truyền cảm hứng cho hàng triệu người.",
    q6_2: "Bạn em trước đây rất nhút nhát, không dám phát biểu. Nhưng khi bạn ấy tự tin giơ tay lần đầu tiên và được cô khen, từ đó bạn ấy tích cực phát biểu và kết quả học tập tiến bộ rõ rệt.",
    q6_3: "Trong cuộc thi hùng biện cấp trường, bạn không giỏi nhất nhưng tự tin nhất đã giành giải cao. Vì sự tự tin giúp bạn ấy trình bày lưu loát, thuyết phục ban giám khảo.",
    q7: "Từ những phân tích trên, em khẳng định sự tự tin thực sự là bước đầu tiên, là nền tảng vững chắc trên con đường dẫn đến thành công.",
    q8: "Việc tán thành ý kiến này giúp mỗi người, đặc biệt là học sinh, tự tin hơn vào bản thân, dám ước mơ và dám hành động để biến ước mơ thành hiện thực.",
  },

  // 10. Đoàn kết
  [topics[9]]: {
    q1: "Vấn đề đạo lí cần bàn luận là vai trò của tinh thần đoàn kết và tác hại của sự chia rẽ trong cuộc sống.",
    q2: "Ý kiến: \"Đoàn kết là sức mạnh, chia rẽ là yếu đuối\". Em tán thành ý kiến này.",
    q3: "Em đồng ý vì khi đoàn kết, con người sẽ tạo nên sức mạnh to lớn để vượt qua mọi khó khăn, còn chia rẽ chỉ khiến tất cả yếu đi.",
    q4: "Đoàn kết là cùng nhau chung sức, chung lòng vì mục tiêu chung. Chia rẽ là tách rời, mâu thuẫn, mỗi người một hướng. Ý kiến khẳng định rằng khi đoàn kết, con người sẽ mạnh mẽ; khi chia rẽ, con người sẽ trở nên yếu đuối.",
    q5_1: "Khi đoàn kết, mỗi người đóng góp sức mình sẽ tạo nên sức mạnh tổng hợp lớn hơn rất nhiều so với từng cá nhân đơn lẻ. Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.",
    q5_2: "Đoàn kết giúp mọi người hỗ trợ nhau, bù đắp điểm yếu của nhau. Trong tập thể đoàn kết, ai cũng được phát huy thế mạnh và được giúp đỡ khi khó khăn.",
    q5_3: "Chia rẽ khiến sức mạnh bị phân tán, dễ bị kẻ xấu lợi dụng. Khi không đoàn kết, tập thể sẽ suy yếu và không thể đạt được mục tiêu chung nào.",
    q6_1: "Trong lịch sử Việt Nam, nhờ tinh thần đoàn kết toàn dân, ông cha ta đã chiến thắng nhiều kẻ thù xâm lược hùng mạnh gấp nhiều lần, từ giặc Nguyên Mông đến thực dân Pháp.",
    q6_2: "Lớp em từng thua cuộc thi kéo co vì các bạn không đồng lòng. Nhưng khi cả lớp đoàn kết tập luyện, hô vang cùng nhịp, lớp em đã giành chiến thắng ở lần thi sau.",
    q6_3: "Câu chuyện \"Bó đũa\" kể rằng mỗi chiếc đũa riêng lẻ dễ bẻ gãy, nhưng cả bó đũa thì không ai bẻ nổi. Đó là bài học về sức mạnh đoàn kết.",
    q7: "Từ những phân tích trên, em khẳng định đoàn kết thực sự tạo nên sức mạnh vô cùng to lớn, còn chia rẽ chỉ dẫn đến sự yếu đuối và thất bại.",
    q8: "Việc tán thành ý kiến này nhắc nhở mỗi người hãy luôn giữ gìn tinh thần đoàn kết trong gia đình, lớp học và cộng đồng để cùng nhau vươn lên.",
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
