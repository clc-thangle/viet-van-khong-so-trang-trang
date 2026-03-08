import { useState, useMemo, useRef, useEffect } from "react";
import {
  Lightbulb,
  PenTool,
  FileText,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Sparkles,
  X,
} from "lucide-react";

const WritingMap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(""); // Đề được chọn trong 5 đề random
  const [understandingAnswers, setUnderstandingAnswers] = useState({
    keyword: "",
    issue: "",
    format: "",
  });
  const [activeHint, setActiveHint] = useState(null); // Track which hint popup is open (step 1)
  const [activeIdeaHint, setActiveIdeaHint] = useState(null); // Track which hint popup is open (step 2)
  const [activeTopicHint, setActiveTopicHint] = useState(null); // Track topic-specific hint popup (step 2)
  const [ideaAnswers, setIdeaAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4_1: "",
    q4_2: "",
    q5_1: "",
    q5_2: "",
    q6: "",
    q7: "",
  });
  const [formData, setFormData] = useState({
    topicType: "",
    keywords: [],
    evidence: [],
    essayText: {
      opening: "",
      body: "",
      conclusion: "",
    },
    checklist: {
      hasEnoughIdeas: false,
      hasLogicalArgument: false,
      hasGoodExpression: false,
      hasCorrectSpelling: false,
    },
  });

  // Mock data: 10 đề đạo lí
  const daoLyTopics = [
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
  ];

  // Mock data: 10 đề hiện tượng
  const hienTuongTopics = [
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

  // Mock data: 5 từ khóa gợi ý tương ứng cho từng đề cụ thể
  const topicKeywords = {
    // Đề đạo lí
    'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': [
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
    'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': [
      "nhẫn nại",
      "bền bỉ",
      "không bỏ cuộc",
      "vượt khó khăn",
      "ý chí bền vững",
    ],
    'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': [
      "yêu thương",
      "chăm sóc",
      "chia sẻ",
      "gắn kết",
      "đồng cảm",
    ],
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
    'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': [
      "tri ân",
      "nhớ ơn",
      "ghi nhớ công ơn",
      "trân trọng",
      "đền đáp",
    ],
    'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó':
      [
        "tin vào bản thân",
        "khẳng định cá nhân",
        "tự lực tự chủ",
        "can đảm thể hiện",
        "vượt qua tự ti",
      ],
    'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': [
      "đoàn kết",
      "hợp tác",
      "cộng đồng",
      "tương trợ",
      "sức mạnh tập thể",
    ],
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
  const topicSpecificHints = {
    // ===== ĐỀ ĐẠO LÍ =====
    'Có ý kiến cho rằng: "Lòng hiếu thảo là nền tảng của mọi đức hạnh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Lòng hiếu thảo',
      q2: 'Tán thành. Vì hiếu thảo là đức tính tốt đẹp nhất, là gốc rễ của mọi phẩm chất đạo đức.',
      q3: 'Hiếu thảo là tình cảm yêu thương, kính trọng, biết ơn và chăm sóc cha mẹ. Ý kiến khẳng định hiếu thảo là nền tảng, là cơ sở để phát triển các đức tính tốt đẹp khác.',
      q4_1: 'Người hiếu thảo biết yêu thương cha mẹ sẽ biết yêu thương mọi người xung quanh',
      q4_2: 'Hiếu thảo giúp gia đình hạnh phúc, gắn kết, tạo nền tảng vững chắc cho xã hội',
      q5_1: 'Trong cuộc sống, những người con hiếu thảo như em học sinh giỏi chăm sóc mẹ bệnh vẫn luôn được mọi người yêu quý và tôn trọng',
      q5_2: 'Bác Hồ - vị lãnh tụ vĩ đại luôn nhớ về quê hương, gia đình, thể hiện lòng hiếu thảo sâu sắc',
      q6: 'Lòng hiếu thảo thực sự là nền tảng của mọi đức hạnh vì khi biết yêu thương cha mẹ, ta sẽ biết yêu thương con người và sống tốt đẹp hơn.',
      q7: 'Mỗi chúng ta cần biết vâng lời, chăm ngoan, học giỏi để cha mẹ vui lòng. Bản thân em sẽ luôn giúp đỡ cha mẹ việc nhà và cố gắng học tập thật tốt.',
    },
    'Có ý kiến cho rằng: "Trung thực là phẩm chất quý giá nhất của con người". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Trung thực',
      q2: 'Tán thành. Vì trung thực giúp con người tạo dựng niềm tin và sống đúng với lương tâm.',
      q3: 'Trung thực là luôn nói thật, làm thật, không gian dối. Ý kiến khẳng định trung thực là phẩm chất quan trọng nhất, là nền tảng để xây dựng các mối quan hệ tốt đẹp.',
      q4_1: 'Người trung thực được mọi người tin tưởng, tôn trọng và yêu quý',
      q4_2: 'Trung thực giúp xã hội công bằng, văn minh và phát triển bền vững',
      q5_1: 'Trong lớp học, những bạn luôn thành thật nhận lỗi khi mắc sai lầm luôn được thầy cô và bạn bè quý mến',
      q5_2: 'Tổng thống Abraham Lincoln được mệnh danh là "Abe trung thực" vì sự ngay thẳng, nhờ đó ông trở thành vị tổng thống vĩ đại',
      q6: 'Trung thực quả thực là phẩm chất quý giá nhất vì nó là nền tảng của niềm tin và sự tôn trọng trong mọi mối quan hệ.',
      q7: 'Học sinh cần rèn luyện tính trung thực từ những điều nhỏ nhất: không quay cóp, thành thật với thầy cô và bạn bè. Bản thân em sẽ luôn nói thật và dám nhận lỗi.',
    },
    'Có ý kiến cho rằng: "Lòng khoan dung giúp con người sống thanh thản và hạnh phúc hơn". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Lòng khoan dung',
      q2: 'Tán thành. Vì biết tha thứ giúp tâm hồn nhẹ nhàng, không bị thù hận chi phối.',
      q3: 'Khoan dung là biết tha thứ, bao dung với lỗi lầm của người khác. Ý kiến khẳng định rằng khoan dung mang lại sự thanh thản và hạnh phúc cho chính mình.',
      q4_1: 'Người khoan dung không mang nặng thù hận, tâm hồn luôn nhẹ nhàng và thanh thản',
      q4_2: 'Khoan dung giúp hàn gắn các mối quan hệ, tạo sự hòa hợp trong cộng đồng',
      q5_1: 'Trong lớp, khi một bạn lỡ làm hỏng đồ của mình, nếu biết tha thứ thì cả hai vẫn giữ được tình bạn tốt đẹp',
      q5_2: 'Nelson Mandela sau 27 năm tù đày vẫn tha thứ cho kẻ giam cầm mình, trở thành biểu tượng hòa giải của cả thế giới',
      q6: 'Lòng khoan dung thực sự giúp con người hạnh phúc hơn vì khi buông bỏ hận thù, ta được sống trong bình yên.',
      q7: 'Mỗi chúng ta cần học cách tha thứ và bao dung hơn. Bản thân em sẽ cố gắng không giận lâu và sẵn sàng cho bạn bè cơ hội sửa lỗi.',
    },
    'Có ý kiến cho rằng: "Sự kiên trì là chìa khóa dẫn đến thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Sự kiên trì',
      q2: 'Tán thành. Vì không có thành công nào đến dễ dàng nếu thiếu sự kiên trì, bền bỉ.',
      q3: 'Kiên trì là sự bền bỉ, nhẫn nại theo đuổi mục tiêu dù gặp khó khăn. Ý kiến khẳng định kiên trì là yếu tố quyết định dẫn đến thành công.',
      q4_1: 'Kiên trì giúp con người vượt qua thất bại, rút ra bài học và tiến gần hơn đến mục tiêu',
      q4_2: 'Người kiên trì tích lũy được kinh nghiệm, kỹ năng qua thời gian, tạo nền tảng vững chắc cho thành công',
      q5_1: 'Thomas Edison đã thất bại hàng nghìn lần trước khi phát minh ra bóng đèn điện, ông nói: "Tôi không thất bại, tôi đã tìm ra 10.000 cách không hiệu quả"',
      q5_2: 'Bản thân em từng kiên trì luyện tập Toán mỗi ngày dù ban đầu rất yếu, sau một học kỳ đã đạt điểm cao',
      q6: 'Kiên trì chính là chìa khóa thành công vì mọi thành tựu lớn đều cần thời gian và nỗ lực không ngừng nghỉ.',
      q7: 'Học sinh cần đặt mục tiêu rõ ràng và kiên trì theo đuổi mỗi ngày. Bản thân em sẽ lập kế hoạch học tập và thực hiện đều đặn dù có khó khăn.',
    },
    'Có ý kiến cho rằng: "Tình yêu thương là sức mạnh để thay đổi thế giới". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Tình yêu thương',
      q2: 'Tán thành. Vì yêu thương là sợi dây gắn kết con người, tạo nên sức mạnh to lớn.',
      q3: 'Tình yêu thương là sự quan tâm, chia sẻ, đồng cảm với mọi người. Ý kiến khẳng định yêu thương có sức mạnh thay đổi thế giới theo hướng tốt đẹp hơn.',
      q4_1: 'Yêu thương giúp con người xích lại gần nhau, xóa bỏ hận thù và xung đột',
      q4_2: 'Tình yêu thương tạo động lực để con người làm điều tốt đẹp, giúp đỡ người khó khăn',
      q5_1: 'Trong đại dịch COVID-19, hàng triệu người Việt Nam đã chung tay quyên góp, chia sẻ thực phẩm cho người khó khăn, thể hiện tình yêu thương lớn lao',
      q5_2: 'Bác sĩ Đặng Thùy Trâm với tình yêu thương bệnh nhân đã hy sinh tuổi thanh xuân nơi chiến trường, trở thành biểu tượng cao đẹp',
      q6: 'Tình yêu thương thực sự có sức mạnh thay đổi thế giới vì nó kết nối con người và lan tỏa những điều tốt đẹp.',
      q7: 'Mỗi chúng ta cần biết yêu thương, quan tâm người xung quanh. Bản thân em sẽ giúp đỡ bạn bè gặp khó khăn và tham gia các hoạt động thiện nguyện.',
    },
    'Có ý kiến cho rằng: "Lòng dũng cảm không phải là không biết sợ, mà là vượt qua nỗi sợ hãi". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Lòng dũng cảm',
      q2: 'Tán thành. Vì dũng cảm thực sự là dám đối mặt và vượt qua nỗi sợ chứ không phải không biết sợ.',
      q3: 'Dũng cảm là dám đối mặt với khó khăn, nguy hiểm. Ý kiến khẳng định bản chất thực sự của dũng cảm là vượt qua nỗi sợ hãi chứ không phải không có nỗi sợ.',
      q4_1: 'Ai cũng có nỗi sợ, nhưng người dũng cảm biết kiểm soát và hành động đúng đắn dù sợ hãi',
      q4_2: 'Dũng cảm vượt qua sợ hãi giúp con người trưởng thành, mạnh mẽ và tự tin hơn',
      q5_1: 'Các chiến sĩ cứu hỏa dù biết nguy hiểm vẫn lao vào đám cháy để cứu người, họ sợ nhưng vẫn hành động',
      q5_2: 'Bản thân em từng rất sợ phát biểu trước lớp, nhưng đã dũng cảm giơ tay và dần tự tin hơn',
      q6: 'Lòng dũng cảm đích thực là khả năng vượt qua nỗi sợ hãi để làm điều đúng đắn, đó mới là phẩm chất đáng quý.',
      q7: 'Học sinh cần rèn luyện lòng dũng cảm bằng cách dám thử thách bản thân. Bản thân em sẽ không ngại nói lên ý kiến và dám nhận lỗi khi sai.',
    },
    'Có ý kiến cho rằng: "Sống có trách nhiệm là biểu hiện của người trưởng thành". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Sống có trách nhiệm',
      q2: 'Tán thành. Vì trách nhiệm là thước đo quan trọng nhất của sự trưởng thành.',
      q3: 'Trách nhiệm là ý thức về bổn phận, nghĩa vụ với bản thân và cộng đồng. Ý kiến khẳng định sống có trách nhiệm là dấu hiệu cho thấy một người đã thực sự trưởng thành.',
      q4_1: 'Người có trách nhiệm biết hoàn thành tốt công việc, không đổ lỗi và dám chịu hậu quả',
      q4_2: 'Trách nhiệm giúp mỗi người đóng góp tích cực cho gia đình và xã hội',
      q5_1: 'Những bạn học sinh biết tự giác học bài, làm việc nhà không cần nhắc nhở chính là biểu hiện của người có trách nhiệm',
      q5_2: 'Các bác sĩ trong đại dịch đã làm việc không ngừng nghỉ vì trách nhiệm với bệnh nhân và cộng đồng',
      q6: 'Sống có trách nhiệm đúng là biểu hiện của sự trưởng thành vì nó cho thấy con người biết đặt bổn phận lên trên sở thích cá nhân.',
      q7: 'Học sinh cần rèn tính trách nhiệm từ việc nhỏ: đi học đúng giờ, làm bài đầy đủ. Bản thân em sẽ tự giác hoàn thành nhiệm vụ mà không cần ai nhắc nhở.',
    },
    'Có ý kiến cho rằng: "Lòng biết ơn là dấu hiệu của một tâm hồn cao đẹp". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Lòng biết ơn',
      q2: 'Tán thành. Vì biết ơn thể hiện nhân cách và sự trân trọng những gì mình nhận được.',
      q3: 'Lòng biết ơn là sự ghi nhớ, trân trọng công lao của người khác. Ý kiến khẳng định biết ơn là biểu hiện của tâm hồn cao đẹp, nhân cách tốt.',
      q4_1: 'Người biết ơn luôn trân trọng cuộc sống, không sống ích kỷ và biết chia sẻ',
      q4_2: 'Lòng biết ơn tạo nên mối quan hệ tốt đẹp, lan tỏa giá trị nhân văn trong cộng đồng',
      q5_1: 'Truyền thống "Uống nước nhớ nguồn" của dân tộc ta - ngày 27/7 hàng năm cả nước tri ân các thương binh liệt sĩ',
      q5_2: 'Bản thân em luôn gửi lời cảm ơn thầy cô sau mỗi tiết học, đó là cách em thể hiện sự trân trọng',
      q6: 'Lòng biết ơn thực sự là dấu hiệu của tâm hồn cao đẹp vì nó cho thấy con người biết sống có tình, có nghĩa.',
      q7: 'Mỗi chúng ta cần luôn nhớ ơn cha mẹ, thầy cô và những người đã giúp đỡ mình. Bản thân em sẽ thể hiện lòng biết ơn bằng hành động cụ thể mỗi ngày.',
    },
    'Có ý kiến cho rằng: "Sự tự tin là bước đầu tiên trên con đường thành công". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Sự tự tin',
      q2: 'Tán thành. Vì tự tin giúp con người dám hành động, dám theo đuổi ước mơ.',
      q3: 'Tự tin là tin vào năng lực, giá trị của bản thân. Ý kiến khẳng định tự tin là bước khởi đầu quan trọng nhất trên hành trình đạt đến thành công.',
      q4_1: 'Người tự tin dám đặt mục tiêu cao và nỗ lực thực hiện, không ngại thất bại',
      q4_2: 'Tự tin giúp con người thể hiện tốt năng lực, tạo ấn tượng và nhận được sự tin tưởng từ người khác',
      q5_1: 'Jack Ma từng bị từ chối hàng chục lần khi xin việc nhưng vẫn tự tin theo đuổi ước mơ, cuối cùng xây dựng đế chế Alibaba',
      q5_2: 'Trong lớp, những bạn tự tin phát biểu thường được thầy cô đánh giá cao và tiến bộ nhanh hơn',
      q6: 'Tự tin đúng là bước đầu tiên trên con đường thành công vì nếu không tin vào bản thân thì không thể bắt đầu bất cứ điều gì.',
      q7: 'Học sinh cần rèn luyện sự tự tin bằng cách chuẩn bị kỹ bài học và mạnh dạn tham gia hoạt động. Bản thân em sẽ tự tin hơn trong giao tiếp và học tập.',
    },
    'Có ý kiến cho rằng: "Đoàn kết là sức mạnh, chia rẽ là yếu đuối". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Đoàn kết',
      q2: 'Tán thành. Vì khi đoàn kết, sức mạnh tập thể luôn lớn hơn sức mạnh cá nhân.',
      q3: 'Đoàn kết là sự gắn bó, hợp tác cùng nhau vì mục tiêu chung. Ý kiến khẳng định đoàn kết tạo nên sức mạnh, còn chia rẽ dẫn đến yếu đuối, thất bại.',
      q4_1: 'Đoàn kết giúp chia sẻ công việc, phát huy thế mạnh của từng người để đạt kết quả tốt nhất',
      q4_2: 'Khi đoàn kết, mọi người hỗ trợ nhau vượt qua khó khăn mà một cá nhân không thể tự làm được',
      q5_1: 'Lịch sử Việt Nam cho thấy nhờ đoàn kết toàn dân mà chúng ta đã chiến thắng nhiều kẻ thù xâm lược hùng mạnh',
      q5_2: 'Trong lớp em, khi cả lớp cùng nhau chuẩn bị cho hội thi văn nghệ, nhờ đoàn kết mà lớp đạt giải nhất',
      q6: 'Đoàn kết thực sự là sức mạnh vì nó gộp sức mạnh của nhiều người thành một khối vững chắc, không thế lực nào có thể phá vỡ.',
      q7: 'Mỗi chúng ta cần biết hợp tác, tôn trọng và hỗ trợ lẫn nhau. Bản thân em sẽ luôn đoàn kết với bạn bè, không gây chia rẽ trong lớp.',
    },

    // ===== ĐỀ HIỆN TƯỢNG =====
    'Có ý kiến cho rằng: "Hiện tượng nghiện mạng xã hội đang ảnh hưởng nghiêm trọng đến giới trẻ". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Nghiện mạng xã hội',
      q2: 'Tán thành. Vì mạng xã hội đang chiếm quá nhiều thời gian và ảnh hưởng tiêu cực đến học sinh.',
      q3: 'Nghiện mạng xã hội là tình trạng dành quá nhiều thời gian cho Facebook, TikTok, Instagram... Ý kiến khẳng định đây là vấn đề nghiêm trọng đối với giới trẻ hiện nay.',
      q4_1: 'Nghiện mạng xã hội khiến học sinh mất tập trung, kết quả học tập sa sút nghiêm trọng',
      q4_2: 'Sống ảo trên mạng khiến giới trẻ mất kỹ năng giao tiếp thực tế, ảnh hưởng sức khỏe tinh thần',
      q5_1: 'Theo thống kê, thanh thiếu niên Việt Nam dành trung bình 3-5 giờ/ngày cho mạng xã hội, nhiều bạn thức khuya lướt TikTok ảnh hưởng sức khỏe',
      q5_2: 'Trong lớp em, có bạn vì nghiện Facebook mà không làm bài tập, điểm số giảm sút rõ rệt',
      q6: 'Nghiện mạng xã hội thực sự đang ảnh hưởng nghiêm trọng đến giới trẻ, đây là vấn đề cần được quan tâm giải quyết.',
      q7: 'Học sinh cần tự kiểm soát thời gian sử dụng mạng xã hội, ưu tiên học tập. Bản thân em sẽ giới hạn thời gian lướt mạng mỗi ngày không quá 1 giờ.',
    },
    'Có ý kiến cho rằng: "Bạo lực học đường là vấn đề nhức nhối cần được giải quyết triệt để". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Bạo lực học đường',
      q2: 'Tán thành. Vì bạo lực học đường gây tổn thương nặng nề cho học sinh và cần được xử lý dứt điểm.',
      q3: 'Bạo lực học đường là hành vi dùng sức mạnh để bắt nạt, đánh đập, xúc phạm bạn bè trong trường. Ý kiến khẳng định đây là vấn đề nhức nhối cần giải quyết triệt để.',
      q4_1: 'Bạo lực học đường gây tổn thương thể chất và tinh thần nghiêm trọng cho nạn nhân, nhiều em bị trầm cảm',
      q4_2: 'Bạo lực học đường phá vỡ môi trường giáo dục an toàn, khiến học sinh sợ hãi khi đến trường',
      q5_1: 'Nhiều vụ bạo lực học đường được đưa lên báo chí, có em học sinh bị đánh hội đồng phải nhập viện, để lại sang chấn tâm lý lâu dài',
      q5_2: 'Trong trường em, nhà trường đã tổ chức các buổi tuyên truyền chống bạo lực, giúp các bạn hiểu được hậu quả nghiêm trọng',
      q6: 'Bạo lực học đường thực sự là vấn đề nhức nhối vì nó ảnh hưởng trực tiếp đến sự phát triển và tương lai của học sinh.',
      q7: 'Mỗi học sinh cần nói không với bạo lực, biết bảo vệ bản thân và báo cho thầy cô khi bị bắt nạt. Bản thân em sẽ luôn đối xử tốt với bạn bè và lên tiếng khi thấy bất công.',
    },
    'Có ý kiến cho rằng: "Gian lận trong thi cử là hành vi đáng lên án". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Gian lận trong thi cử',
      q2: 'Tán thành. Vì gian lận thi cử là hành vi thiếu trung thực, làm mất công bằng trong giáo dục.',
      q3: 'Gian lận thi cử là hành vi quay cóp, chép bài, sử dụng tài liệu trái phép trong kiểm tra. Ý kiến khẳng định đây là hành vi đáng bị phê phán.',
      q4_1: 'Gian lận thi cử làm mất đi sự công bằng, người học thật bị thiệt thòi',
      q4_2: 'Gian lận khiến học sinh không có kiến thức thực, ảnh hưởng đến tương lai',
      q5_1: 'Nhiều vụ gian lận thi THPT Quốc gia bị phát hiện gây chấn động dư luận, những người liên quan bị xử lý nghiêm',
      q5_2: 'Trong lớp em, những bạn quay cóp dù được điểm cao nhưng không hiểu bài, khi kiểm tra miệng lại không trả lời được',
      q6: 'Gian lận thi cử đúng là hành vi đáng lên án vì nó phá hoại sự công bằng và làm mất giá trị thực của giáo dục.',
      q7: 'Học sinh cần tự giác học bài, trung thực trong kiểm tra. Bản thân em sẽ luôn làm bài bằng năng lực thật của mình và nhắc nhở bạn bè không gian lận.',
    },
    'Có ý kiến cho rằng: "Hiện tượng lãng phí thức ăn đang trở thành vấn đề đáng báo động". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Lãng phí thức ăn',
      q2: 'Tán thành. Vì lãng phí thức ăn không chỉ ảnh hưởng kinh tế mà còn tác động xấu đến môi trường.',
      q3: 'Lãng phí thức ăn là việc vứt bỏ thực phẩm còn ăn được, mua quá nhiều không dùng hết. Ý kiến khẳng định đây là vấn đề nghiêm trọng cần được quan tâm.',
      q4_1: 'Lãng phí thức ăn gây thiệt hại kinh tế lớn trong khi nhiều người vẫn đang thiếu ăn',
      q4_2: 'Thức ăn thừa gây ô nhiễm môi trường, phát thải khí nhà kính khi phân hủy',
      q5_1: 'Theo FAO, mỗi năm thế giới lãng phí khoảng 1.3 tỷ tấn thức ăn, trong khi hàng triệu người chết vì đói',
      q5_2: 'Ở căng tin trường em, nhiều bạn lấy nhiều cơm nhưng ăn không hết rồi đổ đi, rất lãng phí',
      q6: 'Lãng phí thức ăn thực sự là vấn đề đáng báo động vì nó ảnh hưởng đến cả kinh tế, xã hội và môi trường.',
      q7: 'Mỗi người cần lấy thức ăn vừa đủ, bảo quản thực phẩm đúng cách. Bản thân em sẽ ăn hết phần cơm và nhắc nhở gia đình không mua quá nhiều đồ ăn.',
    },
    'Có ý kiến cho rằng: "Đọc sách đang dần bị thay thế bởi các thiết bị điện tử". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Thói quen đọc sách bị thay thế bởi thiết bị điện tử',
      q2: 'Tán thành. Vì ngày càng nhiều người, đặc biệt là giới trẻ, dành thời gian cho điện thoại thay vì đọc sách.',
      q3: 'Hiện tượng này là việc sách giấy mất dần vị trí khi con người chuyển sang đọc trên điện thoại, máy tính. Ý kiến cảnh báo về sự suy giảm của văn hóa đọc truyền thống.',
      q4_1: 'Thiết bị điện tử với nội dung giải trí hấp dẫn khiến giới trẻ không còn kiên nhẫn đọc sách',
      q4_2: 'Việc bỏ đọc sách khiến khả năng tư duy sâu, vốn từ và trí tưởng tượng của giới trẻ bị hạn chế',
      q5_1: 'Khảo sát cho thấy người Việt Nam đọc trung bình chưa đến 1 cuốn sách/năm, trong khi dùng điện thoại 3-4 giờ/ngày',
      q5_2: 'Trong lớp em, rất ít bạn có thói quen đọc sách, đa số dùng giờ rảnh để xem video trên điện thoại',
      q6: 'Đọc sách đúng là đang bị thay thế bởi thiết bị điện tử, đây là thực trạng đáng lo ngại cần được khắc phục.',
      q7: 'Học sinh cần dành ít nhất 15-30 phút mỗi ngày để đọc sách. Bản thân em sẽ lập thói quen đọc sách trước khi ngủ và giảm thời gian dùng điện thoại.',
    },
    'Có ý kiến cho rằng: "Hiện tượng nói tục chửi thề trong giới trẻ ngày càng phổ biến và đáng lo ngại". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Nói tục chửi thề trong giới trẻ',
      q2: 'Tán thành. Vì nói tục chửi thề thể hiện sự thiếu văn hóa và đang trở nên đáng báo động.',
      q3: 'Nói tục chửi thề là sử dụng những lời lẽ thô tục, thiếu văn hóa trong giao tiếp. Ý kiến khẳng định hiện tượng này ngày càng phổ biến và đáng lo ngại.',
      q4_1: 'Nói tục chửi thề làm xấu đi hình ảnh bản thân, mất đi sự tôn trọng của người khác',
      q4_2: 'Khi nói tục trở thành thói quen, nó ảnh hưởng đến nhân cách và khả năng giao tiếp văn minh',
      q5_1: 'Trên mạng xã hội, nhiều video của giới trẻ chứa đầy lời tục tĩu lại được nhiều lượt xem, tạo xu hướng xấu',
      q5_2: 'Trong sân trường, em thường nghe các bạn nói tục như một thói quen, kể cả trước mặt thầy cô',
      q6: 'Nói tục chửi thề thực sự là hiện tượng đáng lo ngại vì nó phản ánh sự xuống cấp về văn hóa ứng xử của giới trẻ.',
      q7: 'Học sinh cần ý thức sử dụng lời nói văn minh, lịch sự. Bản thân em sẽ không nói tục và nhắc nhở bạn bè cùng sử dụng ngôn ngữ đẹp.',
    },
    'Có ý kiến cho rằng: "Hiện tượng sống ảo trên mạng xã hội đang làm méo mó giá trị thực của cuộc sống". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Sống ảo trên mạng xã hội',
      q2: 'Tán thành. Vì sống ảo khiến con người đánh mất giá trị thực và chạy theo những điều không có thật.',
      q3: 'Sống ảo là tạo hình ảnh không thật về bản thân trên mạng xã hội để nhận được sự ngưỡng mộ. Ý kiến khẳng định hiện tượng này đang làm méo mó giá trị thực.',
      q4_1: 'Sống ảo khiến con người tốn thời gian, tiền bạc để tạo hình ảnh giả tạo thay vì phát triển bản thân',
      q4_2: 'Sống ảo tạo áp lực so sánh, khiến nhiều người tự ti, trầm cảm khi thấy cuộc sống người khác "hoàn hảo"',
      q5_1: 'Nhiều bạn trẻ vay tiền mua đồ hiệu, thuê xe sang chỉ để chụp ảnh đăng mạng xã hội khoe khoang',
      q5_2: 'Nghiên cứu cho thấy việc thường xuyên so sánh bản thân với hình ảnh hoàn hảo trên Instagram làm tăng tỷ lệ trầm cảm ở giới trẻ',
      q6: 'Sống ảo thực sự đang làm méo mó giá trị cuộc sống vì nó khiến con người chạy theo hào nhoáng bên ngoài mà quên đi giá trị bên trong.',
      q7: 'Mỗi người cần sống thật với chính mình, trân trọng giá trị thực. Bản thân em sẽ sử dụng mạng xã hội một cách lành mạnh và không chạy theo lượt like.',
    },
    'Có ý kiến cho rằng: "Thói quen xả rác bừa bãi đang hủy hoại môi trường sống". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Xả rác bừa bãi',
      q2: 'Tán thành. Vì xả rác bừa bãi gây ô nhiễm nghiêm trọng và ảnh hưởng đến sức khỏe con người.',
      q3: 'Xả rác bừa bãi là vứt rác không đúng nơi quy định, gây mất vệ sinh. Ý kiến khẳng định thói quen này đang hủy hoại môi trường sống của chúng ta.',
      q4_1: 'Rác thải gây ô nhiễm nguồn nước, đất đai, không khí, ảnh hưởng trực tiếp đến sức khỏe',
      q4_2: 'Rác nhựa cần hàng trăm năm để phân hủy, gây hại cho động vật và hệ sinh thái',
      q5_1: 'Nhiều bãi biển đẹp của Việt Nam ngập trong rác sau mỗi kỳ nghỉ lễ, gây phản cảm với du khách quốc tế',
      q5_2: 'Trong khu phố em, có người xả rác xuống kênh rạch gây tắc nghẽn dòng chảy, mỗi khi mưa là ngập lụt',
      q6: 'Xả rác bừa bãi thực sự đang hủy hoại môi trường sống và nếu không thay đổi, hậu quả sẽ rất nghiêm trọng.',
      q7: 'Mỗi người cần bỏ rác đúng nơi quy định, phân loại rác và hạn chế dùng đồ nhựa. Bản thân em sẽ luôn mang theo túi để đựng rác và tham gia dọn vệ sinh khu phố.',
    },
    'Có ý kiến cho rằng: "Hiện tượng học sinh thiếu kỹ năng sống đang trở thành vấn đề đáng quan tâm". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Học sinh thiếu kỹ năng sống',
      q2: 'Tán thành. Vì nhiều học sinh giỏi kiến thức nhưng lại thiếu các kỹ năng cơ bản trong cuộc sống.',
      q3: 'Thiếu kỹ năng sống là tình trạng học sinh không biết tự chăm sóc bản thân, giao tiếp kém, không biết xử lý tình huống. Ý kiến khẳng định đây là vấn đề cần quan tâm.',
      q4_1: 'Thiếu kỹ năng sống khiến học sinh khó thích nghi với môi trường mới, dễ bị lôi kéo vào tệ nạn',
      q4_2: 'Học sinh thiếu kỹ năng sống sẽ gặp khó khăn trong công việc và cuộc sống sau này',
      q5_1: 'Nhiều sinh viên đại học không biết nấu cơm, giặt đồ hay quản lý chi tiêu khi sống xa gia đình',
      q5_2: 'Trong lớp em, khi gặp xung đột, nhiều bạn không biết cách giải quyết mà chỉ biết cãi nhau hoặc khóc',
      q6: 'Thiếu kỹ năng sống thực sự là vấn đề đáng quan tâm vì kỹ năng sống quan trọng không kém kiến thức sách vở.',
      q7: 'Học sinh cần chủ động rèn luyện kỹ năng sống: tự lập, giao tiếp, làm việc nhóm. Bản thân em sẽ tự giác phụ việc nhà và tham gia hoạt động ngoại khóa.',
    },
    'Có ý kiến cho rằng: "Hiện tượng nghiện game online đang ảnh hưởng nghiêm trọng đến học tập và sức khỏe của học sinh". Em hãy viết 1 bài văn (khoảng 400 chữ) trình bày suy nghĩ của em về ý kiến đó': {
      q1: 'Nghiện game online',
      q2: 'Tán thành. Vì nghiện game đang khiến nhiều học sinh sa sút học tập và sức khỏe giảm sút.',
      q3: 'Nghiện game online là tình trạng dành quá nhiều thời gian chơi game, không kiểm soát được bản thân. Ý kiến khẳng định đây là vấn đề ảnh hưởng nghiêm trọng đến học sinh.',
      q4_1: 'Nghiện game khiến học sinh mất tập trung, bỏ học, kết quả sa sút nghiêm trọng',
      q4_2: 'Chơi game quá nhiều ảnh hưởng sức khỏe: mắt kém, đau lưng, rối loạn giấc ngủ, béo phì',
      q5_1: 'Có học sinh chơi game liên tục 48 giờ phải nhập viện vì kiệt sức, nhiều em bỏ ăn bỏ học vì game',
      q5_2: 'Trong lớp em, có bạn vì nghiện game mà thức khuya, đến lớp ngủ gật, từ học sinh khá xuống yếu',
      q6: 'Nghiện game online thực sự ảnh hưởng nghiêm trọng đến học sinh vì nó cướp đi thời gian, sức khỏe và tương lai.',
      q7: 'Học sinh cần tự giới hạn thời gian chơi game, ưu tiên học tập và vận động. Bản thân em sẽ chỉ chơi game tối đa 30 phút/ngày vào cuối tuần sau khi hoàn thành bài tập.',
    },
  };

  // Random 5 đề từ 10 đề, chỉ random lại khi đổi topicType
  const [randomSeed, setRandomSeed] = useState(0);

  const randomTopics = useMemo(() => {
    const sourceTopics =
      formData.topicType === "dao-ly"
        ? daoLyTopics
        : formData.topicType === "hien-tuong"
          ? hienTuongTopics
          : [];
    if (sourceTopics.length === 0) return [];
    // Shuffle và lấy 5
    const shuffled = [...sourceTopics].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.topicType, randomSeed]);

  // Dữ liệu cho Bước 1: Hiểu đề
  const topicTypes = [
    {
      id: "dao-ly",
      title: "Đề đạo lí",
      description: "Đề bài yêu cầu bàn về một vấn đề đạo đức, nhân cách",
      example: 'VD: "Em hãy nêu suy nghĩ về lòng hiếu thảo"',
    },
    {
      id: "hien-tuong",
      title: "Đề hiện tượng",
      description: "Đề bài yêu cầu phân tích một hiện tượng xã hội, tự nhiên",
      example: 'VD: "Hiện tượng học sinh nghiện game"',
    },
  ];

  console.log("activeStep", activeStep);

  // Dữ liệu cho Bước 2: Tạo ý
  const keywordBank = {
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

  // Template khung đoạn văn
  const essayTemplate = {
    opening: "Câu mở đoạn giới thiệu vấn đề/chủ đề chính mà em sẽ bàn luận.",
    body: "Phần thân bài trình bày luận điểm, dẫn chứng, phân tích và giải thích.",
    conclusion: "Câu kết khẳng định lại ý kiến, mở rộng hoặc rút ra bài học.",
  };

  const handleTopicSelect = (topicId) => {
    setFormData({ ...formData, topicType: topicId });
    setSelectedTopic(""); // Reset đề đã chọn khi đổi dạng đề
    setUnderstandingAnswers({ keyword: "", issue: "", format: "" });
    setActiveHint(null);
    setRandomSeed((prev) => prev + 1); // Tạo random mới
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setUnderstandingAnswers({ keyword: "", issue: "", format: "" });
    setActiveHint(null);
  };

  const updateUnderstandingAnswer = (field, value) => {
    setUnderstandingAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const toggleHint = (hintId) => {
    setActiveHint((prev) => (prev === hintId ? null : hintId));
  };

  const updateIdeaAnswer = (field, value) => {
    setIdeaAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const toggleIdeaHint = (hintId) => {
    setActiveIdeaHint((prev) => (prev === hintId ? null : hintId));
    setActiveTopicHint(null); // Close topic hint when opening idea hint
  };

  const toggleTopicHint = (hintId) => {
    setActiveTopicHint((prev) => (prev === hintId ? null : hintId));
    setActiveIdeaHint(null); // Close idea hint when opening topic hint
  };

  // Kiểm tra đã hoàn thành phần khai phá ý tưởng chưa
  const isIdeaExplorationComplete =
    ideaAnswers.q1.trim() !== "" &&
    ideaAnswers.q2.trim() !== "" &&
    ideaAnswers.q3.trim() !== "" &&
    ideaAnswers.q4_1.trim() !== "" &&
    ideaAnswers.q4_2.trim() !== "" &&
    ideaAnswers.q5_1.trim() !== "" &&
    ideaAnswers.q5_2.trim() !== "" &&
    ideaAnswers.q6.trim() !== "" &&
    ideaAnswers.q7.trim() !== "";

  // Kiểm tra đã hoàn thành phần hiểu đề chưa
  const isUnderstandingComplete =
    understandingAnswers.keyword.trim() !== "" &&
    understandingAnswers.issue.trim() !== "" &&
    understandingAnswers.format.trim() !== "";

  const toggleKeyword = (keyword) => {
    const newKeywords = formData.keywords.includes(keyword)
      ? formData.keywords.filter((k) => k !== keyword)
      : [...formData.keywords, keyword];
    setFormData({ ...formData, keywords: newKeywords });
  };

  const toggleEvidence = (evidence) => {
    const newEvidence = formData.evidence.includes(evidence)
      ? formData.evidence.filter((e) => e !== evidence)
      : [...formData.evidence, evidence];
    setFormData({ ...formData, evidence: newEvidence });
  };

  const updateEssayText = (section, value) => {
    setFormData({
      ...formData,
      essayText: { ...formData.essayText, [section]: value },
    });
  };

  const toggleChecklist = (item) => {
    setFormData({
      ...formData,
      checklist: { ...formData.checklist, [item]: !formData.checklist[item] },
    });
  };

  // Kiểm tra điều kiện hoàn thành mỗi bước
  const isStepComplete = (stepIndex) => {
    switch (stepIndex) {
      case 0: // Bước 1: Phải chọn dạng đề VÀ chọn 1 đề cụ thể VÀ hoàn thành hiểu đề
        return (
          formData.topicType !== "" &&
          selectedTopic !== "" &&
          understandingAnswers.keyword.trim() !== "" &&
          understandingAnswers.issue.trim() !== "" &&
          understandingAnswers.format.trim() !== ""
        );
      case 1: // Bước 2: Phải hoàn thành phần khai phá ý tưởng
        return (
          ideaAnswers.q1.trim() !== "" &&
          ideaAnswers.q2.trim() !== "" &&
          ideaAnswers.q3.trim() !== "" &&
          ideaAnswers.q4_1.trim() !== "" &&
          ideaAnswers.q4_2.trim() !== "" &&
          ideaAnswers.q5_1.trim() !== "" &&
          ideaAnswers.q5_2.trim() !== "" &&
          ideaAnswers.q6.trim() !== "" &&
          ideaAnswers.q7.trim() !== ""
        );
      case 2: // Bước 3: Phải điền ít nhất mở đoạn và thân đoạn
        return (
          formData.essayText.opening.trim() !== "" &&
          formData.essayText.body.trim() !== ""
        );
      case 3: // Bước 4: Hoàn thành khi tích hết tất cả checklist
        return Object.values(formData.checklist).every(
          (value) => value === true,
        );
      default:
        return false;
    }
  };

  // Kiểm tra xem có thể chuyển sang bước tiếp theo không
  const canProceedToNext = () => {
    return isStepComplete(activeStep);
  };

  // Kiểm tra xem một bước có được unlock không
  const isStepUnlocked = (stepIndex) => {
    if (stepIndex === 0) return true; // Bước 1 luôn unlock
    // Các bước sau chỉ unlock khi bước trước đã hoàn thành
    return isStepComplete(stepIndex - 1);
  };

  // Xử lý khi chuyển sang bước tiếp theo
  const handleNextStep = () => {
    if (canProceedToNext()) {
      if (!completedSteps.includes(activeStep)) {
        setCompletedSteps([...completedSteps, activeStep]);
      }
      setActiveStep(Math.min(steps.length - 1, activeStep + 1));
    }
  };

  // Xử lý khi click vào step indicator
  const handleStepClick = (stepIndex) => {
    if (isStepUnlocked(stepIndex)) {
      setActiveStep(stepIndex);
    }
  };

  const steps = [
    {
      id: 0,
      title: "Lựa chọn đề tài",
      icon: Lightbulb,
      color: "bg-blue-500",
      description: "Xác định dạng đề và phân tích yêu cầu",
    },
    {
      id: 1,
      title: "Tạo ý",
      icon: PenTool,
      color: "bg-green-500",
      description: "Trả lời các câu hỏi để tạo ý",
    },
    {
      id: 2,
      title: "Viết",
      icon: FileText,
      color: "bg-purple-500",
      description: "Triển khai đoạn văn theo khung mẫu",
    },
    {
      id: 3,
      title: "Kiểm tra",
      icon: CheckCircle,
      color: "bg-orange-500",
      description: "Tự đánh giá và hoàn thiện bài viết",
    },
  ];

  const renderStepContent = () => {
    switch (activeStep) {
      case 0: // Bước 1: Hiểu đề
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Chọn dạng đề bài
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topicTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTopicSelect(type.id)}
                    className={`p-5 rounded-xl text-left transition-all border-2 ${
                      formData.topicType === type.id
                        ? "border-primary-500 bg-primary-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-primary-300 hover:shadow-md"
                    }`}
                  >
                    <h4 className="font-bold text-gray-900 mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {formData.topicType && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 animate-slide-up">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-gray-900">
                    Em hãy chọn 1 trong các đề
                  </h4>
                </div>
                <ul className="space-y-3">
                  {randomTopics.map((topic, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleSelectTopic(topic)}
                        className={`w-full text-left p-4 rounded-xl transition-all border-2 ${
                          selectedTopic === topic
                            ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-300"
                            : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                              selectedTopic === topic
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span
                            className={`leading-relaxed ${
                              selectedTopic === topic
                                ? "text-blue-900 font-semibold"
                                : "text-gray-700"
                            }`}
                          >
                            {topic}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                {selectedTopic && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 animate-slide-up">
                    <p className="text-sm text-green-800">
                      ✓ Đề đã chọn: <strong>{selectedTopic}</strong>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Phần Hiểu đề - chỉ hiện khi đã chọn đề */}
            {selectedTopic && (
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 animate-slide-up">
                <div className="flex items-center gap-2 mb-5">
                  <div className="bg-amber-500 p-2 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Hiểu đề</h4>
                    <p className="text-sm text-gray-500">
                      Trả lời 3 câu hỏi dưới đây để phân tích đề bài
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Câu hỏi 1 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <label className="font-semibold text-gray-800 flex-1">
                        Từ khóa chính của đề bài là gì?
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => toggleHint("keyword")}
                          className={`p-1.5 rounded-full transition-all ${
                            activeHint === "keyword"
                              ? "bg-amber-500 text-white shadow-md"
                              : "bg-amber-100 text-amber-600 hover:bg-amber-200"
                          }`}
                          title="Xem gợi ý"
                        >
                          <Lightbulb className="w-4 h-4" />
                        </button>
                        {activeHint === "keyword" && (
                          <div className="absolute right-0 top-10 z-10 w-72 bg-white rounded-xl shadow-xl border border-amber-200 p-4 animate-slide-up">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-amber-700 text-sm">💡 Gợi ý</span>
                              <button
                                onClick={() => setActiveHint(null)}
                                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Từ khóa thường là khái niệm chính của đề bài
                            </p>
                            <p className="text-sm text-gray-500 italic mt-1">
                              VD: Tự học, lòng biết ơn, trung thực, ...
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      type="text"
                      value={understandingAnswers.keyword}
                      onChange={(e) => updateUnderstandingAnswer("keyword", e.target.value)}
                      placeholder="Nhập từ khóa chính của đề bài..."
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Câu hỏi 2 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <label className="font-semibold text-gray-800 flex-1">
                        Vấn đề cần bàn luận là gì?
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => toggleHint("issue")}
                          className={`p-1.5 rounded-full transition-all ${
                            activeHint === "issue"
                              ? "bg-amber-500 text-white shadow-md"
                              : "bg-amber-100 text-amber-600 hover:bg-amber-200"
                          }`}
                          title="Xem gợi ý"
                        >
                          <Lightbulb className="w-4 h-4" />
                        </button>
                        {activeHint === "issue" && (
                          <div className="absolute right-0 top-10 z-10 w-72 bg-white rounded-xl shadow-xl border border-amber-200 p-4 animate-slide-up">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-amber-700 text-sm">💡 Gợi ý</span>
                              <button
                                onClick={() => setActiveHint(null)}
                                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Vai trò của ...</li>
                              <li>• Ý nghĩa của ...</li>
                              <li>• Sự cần thiết ...</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      type="text"
                      value={understandingAnswers.issue}
                      onChange={(e) => updateUnderstandingAnswer("issue", e.target.value)}
                      placeholder="Nhập vấn đề cần bàn luận..."
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  {/* Câu hỏi 3 */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <label className="font-semibold text-gray-800 flex-1">
                        Yêu cầu về hình thức?
                      </label>
                      <div className="relative">
                        <button
                          onClick={() => toggleHint("format")}
                          className={`p-1.5 rounded-full transition-all ${
                            activeHint === "format"
                              ? "bg-amber-500 text-white shadow-md"
                              : "bg-amber-100 text-amber-600 hover:bg-amber-200"
                          }`}
                          title="Xem gợi ý"
                        >
                          <Lightbulb className="w-4 h-4" />
                        </button>
                        {activeHint === "format" && (
                          <div className="absolute right-0 top-10 z-10 w-72 bg-white rounded-xl shadow-xl border border-amber-200 p-4 animate-slide-up">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-amber-700 text-sm">💡 Gợi ý</span>
                              <button
                                onClick={() => setActiveHint(null)}
                                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Bài văn hay đoạn văn?</li>
                              <li>• Dung lượng là bao nhiêu chữ?</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      type="text"
                      value={understandingAnswers.format}
                      onChange={(e) => updateUnderstandingAnswer("format", e.target.value)}
                      placeholder="Nhập yêu cầu về hình thức..."
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-amber-500 focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Kết quả phân tích - chỉ hiện khi đã trả lời đủ 3 câu */}
                {isUnderstandingComplete && (
                  <div className="mt-6 bg-white rounded-xl p-5 border-2 border-green-300 shadow-sm animate-slide-up">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h5 className="font-bold text-gray-900">
                        Kết quả phân tích đề
                      </h5>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                          📌 Từ khóa:
                        </span>
                        <span className="text-sm text-gray-800 font-medium">
                          "{understandingAnswers.keyword}"
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                          📌 Vấn đề cần bàn luận:
                        </span>
                        <span className="text-sm text-gray-800 font-medium">
                          "{understandingAnswers.issue}"
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-gray-600 min-w-[160px]">
                          📌 Hình thức:
                        </span>
                        <span className="text-sm text-gray-800 font-medium">
                          "{understandingAnswers.format}"
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 1: {
        // Bước 2: Tạo ý
        const selectedTopicType = formData.topicType || "dao-ly";
        const currentBank = keywordBank[selectedTopicType];
        const suggestedKeywords = topicKeywords[selectedTopic] || [];

        // Helper to render a hint popup
        const renderIdeaHintPopup = (hintId, content) => {
          if (activeIdeaHint !== hintId) return null;
          return (
            <div className="absolute right-0 top-10 z-10 w-80 bg-white rounded-xl shadow-xl border border-emerald-200 p-4 animate-slide-up">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-700 text-sm">💡 Gợi ý</span>
                <button
                  onClick={() => setActiveIdeaHint(null)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              {content}
            </div>
          );
        };

        // Helper to render a topic-specific hint popup
        const renderTopicHintPopup = (hintId, content) => {
          if (activeTopicHint !== hintId) return null;
          if (!content) return null;
          return (
            <div className="absolute right-0 top-10 z-10 w-80 bg-white rounded-xl shadow-xl border border-blue-200 p-4 animate-slide-up">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-700 text-sm">📘 Gợi ý theo đề bài</span>
                <button
                  onClick={() => setActiveTopicHint(null)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="text-sm text-gray-700">
                {typeof content === 'string' ? <p>{content}</p> : content}
              </div>
            </div>
          );
        };

        // Get topic-specific hints for the selected topic
        const currentTopicHints = topicSpecificHints[selectedTopic] || {};

        return (
          <div className="space-y-6">
            {/* Hiển thị lại đề đã chọn */}
            {selectedTopic && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">
                      Đề bài đã chọn
                    </p>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {selectedTopic}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Từ khóa gợi ý theo đề (view only) */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Từ khóa gợi ý cho đề bài
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                💡 Các từ khóa dưới đây phù hợp với đề bài em đã chọn. Hãy tham
                khảo khi viết bài!
              </p>
              <div className="flex flex-wrap gap-3">
                {suggestedKeywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-300 shadow-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </span>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Khai phá ý tưởng */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Khai phá ý tưởng</h4>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Hãy trả lời các câu hỏi sau để tìm ý cho bài văn nghị luận của em
              </p>

              <div className="space-y-6">
                {/* Câu hỏi 1 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Vấn đề cần bàn luận là gì?
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q1")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q1"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q1")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q1"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q1", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Vấn đề là từ khóa chính của đề bài.</p>
                          <p className="italic text-gray-500">VD: Lòng biết ơn, tự học, hiếu thảo, nghiện game, ...</p>
                        </div>
                      ))}
                      {renderTopicHintPopup("q1", currentTopicHints.q1)}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={ideaAnswers.q1}
                    onChange={(e) => updateIdeaAnswer("q1", e.target.value)}
                    placeholder="Nhập vấn đề cần bàn luận..."
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Câu hỏi 2 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Nêu suy nghĩ của em về ý kiến được nêu ở đề bài
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q2")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q2"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q2")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q2"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q2", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Tán thành hoặc phản đối</p>
                        </div>
                      ))}
                      {renderTopicHintPopup("q2", currentTopicHints.q2)}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={ideaAnswers.q2}
                    onChange={(e) => updateIdeaAnswer("q2", e.target.value)}
                    placeholder="Nhập suy nghĩ của em..."
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Câu hỏi 3 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Hãy giải thích ngắn gọn về ý kiến của đề bài?
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q3")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q3"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q3")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q3"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q3", (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Giải thích từ khóa chính trong ý kiến được nêu ở đề bài</p>
                          <p className="italic text-gray-500">VD: Lòng biết ơn là ..., Hiếu thảo là ...</p>
                          <p>• Ý kiến trong đề bài muốn khẳng định điều gì</p>
                          <p className="italic text-gray-500">VD: Khẳng định vai trò của lòng biết ơn, Ý nghĩa của lòng hiếu thảo, ...</p>
                        </div>
                      ))}
                      {renderTopicHintPopup("q3", currentTopicHints.q3)}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={ideaAnswers.q3}
                    onChange={(e) => updateIdeaAnswer("q3", e.target.value)}
                    placeholder="Nhập giải thích ngắn gọn..."
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Câu hỏi 4 - 2 ô input */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Giải thích vì sao em tán thành hoặc phản đối với ý kiến đó (Nêu ít nhất 2 lí do)
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q4")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q4"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q4")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q4"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q4", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Em hãy nghĩ xem vấn đề này mang lại lợi ích hoặc tác hại gì?</p>
                          <p className="italic text-gray-500">VD:</p>
                          <ul className="list-disc pl-4 text-gray-500 italic">
                            <li>Giúp con người tiến bộ</li>
                            <li>Giúp học tập tốt hơn</li>
                            <li>Giúp rèn luyện ý chí</li>
                          </ul>
                        </div>
                      ))}
                      {renderTopicHintPopup("q4", (
                        <div className="text-sm text-gray-700 space-y-2">
                          <p><strong>Lí do 1:</strong> {currentTopicHints.q4_1}</p>
                          <p><strong>Lí do 2:</strong> {currentTopicHints.q4_2}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 pl-8">
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-1 block">Lí do 1:</label>
                      <input
                        type="text"
                        value={ideaAnswers.q4_1}
                        onChange={(e) => updateIdeaAnswer("q4_1", e.target.value)}
                        placeholder="Nhập lí do thứ nhất..."
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-1 block">Lí do 2:</label>
                      <input
                        type="text"
                        value={ideaAnswers.q4_2}
                        onChange={(e) => updateIdeaAnswer("q4_2", e.target.value)}
                        placeholder="Nhập lí do thứ hai..."
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Câu hỏi 5 - 2 ô input */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Dẫn chứng chứng minh cho các lí do
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q5")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q5"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q5")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q5"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q5", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <ul className="list-disc pl-4">
                            <li>Từ cuộc sống xung quanh</li>
                            <li>Từ người nổi tiếng</li>
                            <li>Từ bản thân mình</li>
                          </ul>
                        </div>
                      ))}
                      {renderTopicHintPopup("q5", (
                        <div className="text-sm text-gray-700 space-y-2">
                          <p><strong>Dẫn chứng 1:</strong> {currentTopicHints.q5_1}</p>
                          <p><strong>Dẫn chứng 2:</strong> {currentTopicHints.q5_2}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 pl-8">
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-1 block">
                        Dẫn chứng chứng minh lí do 1:
                      </label>
                      <input
                        type="text"
                        value={ideaAnswers.q5_1}
                        onChange={(e) => updateIdeaAnswer("q5_1", e.target.value)}
                        placeholder="Nhập dẫn chứng cho lí do 1..."
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 mb-1 block">
                        Dẫn chứng chứng minh lí do 2:
                      </label>
                      <input
                        type="text"
                        value={ideaAnswers.q5_2}
                        onChange={(e) => updateIdeaAnswer("q5_2", e.target.value)}
                        placeholder="Nhập dẫn chứng cho lí do 2..."
                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Câu hỏi 6 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      6
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Khẳng định lại tính xác đáng của ý kiến
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q6")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q6"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q6")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q6"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q6", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <ul className="list-disc pl-4">
                            <li>Điều này rất cần thiết trong cuộc sống vì ...</li>
                            <li>Ý kiến này đúng vì ...</li>
                            <li>Vì vậy, có thể thấy rằng ...</li>
                          </ul>
                        </div>
                      ))}
                      {renderTopicHintPopup("q6", currentTopicHints.q6)}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={ideaAnswers.q6}
                    onChange={(e) => updateIdeaAnswer("q6", e.target.value)}
                    placeholder="Nhập khẳng định lại ý kiến..."
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>

                {/* Câu hỏi 7 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      7
                    </span>
                    <label className="font-semibold text-gray-800 flex-1">
                      Từ vấn đề đã bàn luận, theo em chúng ta nên làm gì?
                    </label>
                    <div className="relative flex items-center gap-1">
                      <button
                        onClick={() => toggleIdeaHint("q7")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q7"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Gợi ý chung"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleTopicHint("q7")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeTopicHint === "q7"
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                        }`}
                        title="Gợi ý theo đề bài"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q7", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <ul className="list-disc pl-4">
                            <li>Vì vậy, mỗi chúng ta cần ...</li>
                            <li>Học sinh nên ...</li>
                            <li>Bản thân em sẽ ...</li>
                          </ul>
                        </div>
                      ))}
                      {renderTopicHintPopup("q7", currentTopicHints.q7)}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={ideaAnswers.q7}
                    onChange={(e) => updateIdeaAnswer("q7", e.target.value)}
                    placeholder="Nhập hành động cần thực hiện..."
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Kết quả khai phá ý tưởng */}
              {isIdeaExplorationComplete && (
                <div className="mt-6 bg-white rounded-xl p-5 border-2 border-green-300 shadow-sm animate-slide-up">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h5 className="font-bold text-gray-900">
                      Dàn ý bài văn nghị luận của em
                    </h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Vấn đề bàn luận:</span>
                      <span className="text-gray-800">"{ideaAnswers.q1}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Suy nghĩ:</span>
                      <span className="text-gray-800">"{ideaAnswers.q2}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Giải thích:</span>
                      <span className="text-gray-800">"{ideaAnswers.q3}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Lí do 1:</span>
                      <span className="text-gray-800">"{ideaAnswers.q4_1}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Lí do 2:</span>
                      <span className="text-gray-800">"{ideaAnswers.q4_2}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Dẫn chứng lí do 1:</span>
                      <span className="text-gray-800">"{ideaAnswers.q5_1}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Dẫn chứng lí do 2:</span>
                      <span className="text-gray-800">"{ideaAnswers.q5_2}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Khẳng định:</span>
                      <span className="text-gray-800">"{ideaAnswers.q6}"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-600 min-w-[180px]">📌 Hành động:</span>
                      <span className="text-gray-800">"{ideaAnswers.q7}"</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }

      case 2: // Bước 3: Viết
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-2">
                📝 Khung đoạn văn mẫu
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>1. Mở đoạn:</strong> {essayTemplate.opening}
                </p>
                <p>
                  <strong>2. Thân đoạn:</strong> {essayTemplate.body}
                </p>
                <p>
                  <strong>3. Kết đoạn:</strong> {essayTemplate.conclusion}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  1️⃣ Câu mở đoạn (Câu chủ đề)
                </label>
                <textarea
                  value={formData.essayText.opening}
                  onChange={(e) => updateEssayText("opening", e.target.value)}
                  placeholder="Viết câu mở đoạn giới thiệu chủ đề..."
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none min-h-[100px] transition-all"
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 Gợi ý: Giới thiệu vấn đề/phẩm chất/nhân vật mà em sẽ bàn
                </p>
              </div>

              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  2️⃣ Thân đoạn (Luận điểm + Dẫn chứng + Phân tích)
                </label>
                <textarea
                  value={formData.essayText.body}
                  onChange={(e) => updateEssayText("body", e.target.value)}
                  placeholder="Trình bày luận điểm, dẫn chứng và phân tích..."
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none min-h-[200px] transition-all"
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 Gợi ý: Sử dụng từ khóa và dẫn chứng đã chọn ở Bước 2
                </p>
              </div>

              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  3️⃣ Câu kết đoạn
                </label>
                <textarea
                  value={formData.essayText.conclusion}
                  onChange={(e) =>
                    updateEssayText("conclusion", e.target.value)
                  }
                  placeholder="Viết câu kết khẳng định lại ý chính..."
                  className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none min-h-[100px] transition-all"
                />
                <p className="text-sm text-gray-500 mt-2">
                  💡 Gợi ý: Khẳng định lại ý kiến hoặc rút ra bài học
                </p>
              </div>
            </div>

            {(formData.essayText.opening ||
              formData.essayText.body ||
              formData.essayText.conclusion) && (
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-3">
                  ✍️ Bản nháp của em
                </h4>
                <div className="prose prose-sm max-w-none">
                  {formData.essayText.opening && (
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {formData.essayText.opening}
                    </p>
                  )}
                  {formData.essayText.body && (
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {formData.essayText.body}
                    </p>
                  )}
                  {formData.essayText.conclusion && (
                    <p className="text-gray-700 leading-relaxed">
                      {formData.essayText.conclusion}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );

      case 3: {
        // Bước 4: Tự kiểm tra
        const checklistItems = [
          {
            key: "hasEnoughIdeas",
            label: "Đủ ý chưa?",
            description: "Đã trình bày đầy đủ luận điểm và dẫn chứng minh họa",
          },
          {
            key: "hasLogicalArgument",
            label: "Lập luận chặt chẽ chưa?",
            description:
              "Luận điểm logic, dẫn chứng phù hợp, phân tích sâu sắc",
          },
          {
            key: "hasGoodExpression",
            label: "Diễn đạt ổn chưa?",
            description: "Câu văn mạch lạc, rõ ràng, từ ngữ phong phú",
          },
          {
            key: "hasCorrectSpelling",
            label: "Chính tả đúng chưa?",
            description: "Không có lỗi chính tả, dấu câu đúng quy tắc",
          },
        ];

        const completedItems = Object.values(formData.checklist).filter(
          Boolean,
        ).length;
        const progress = (completedItems / checklistItems.length) * 100;

        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-3">
                📊 Tiến độ hoàn thành
              </h4>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-700 mt-2">
                {completedItems}/{checklistItems.length} tiêu chí đã kiểm tra (
                {Math.round(progress)}%)
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                ✅ Danh sách kiểm tra
              </h3>
              {checklistItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`w-full p-5 rounded-xl text-left transition-all border-2 ${
                    formData.checklist[item.key]
                      ? "border-green-500 bg-green-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        formData.checklist[item.key]
                          ? "border-green-500 bg-green-500"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {formData.checklist[item.key] && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 mb-1">
                        {item.label}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {completedItems === checklistItems.length && (
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center animate-scale-in shadow-xl">
                <div className="text-5xl mb-3">🎉</div>
                <h4 className="text-2xl font-bold mb-2">Xuất sắc!</h4>
                <p>
                  Em đã hoàn thành tất cả các bước kiểm tra. Bài văn của em đã
                  sẵn sàng!
                </p>
              </div>
            )}
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Bản đồ viết đoạn văn số</h1>
        <p className="text-blue-100">
          4 bước đơn giản giúp em viết đoạn văn nghị luận một cách khoa học và
          hiệu quả
        </p>
      </div>

      {/* Progress Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => {
          const isUnlocked = isStepUnlocked(index);
          const isComplete = isStepComplete(index);
          const isCurrent = activeStep === index;

          return (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              disabled={!isUnlocked}
              className={`p-4 rounded-xl text-left transition-all relative ${
                isCurrent
                  ? "bg-white shadow-xl ring-2 ring-primary-500 scale-105"
                  : isComplete
                    ? "bg-green-50 border-2 border-green-500"
                    : isUnlocked
                      ? "bg-white border-2 border-gray-200 hover:shadow-md"
                      : "bg-gray-100 border-2 border-gray-200 opacity-50 cursor-not-allowed"
              }`}
            >
              {isComplete && !isCurrent && (
                <div className="absolute top-2 right-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              )}
              {!isUnlocked && (
                <div className="absolute top-2 right-2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              <div
                className={`${step.color} p-2 rounded-lg inline-block mb-2 ${!isUnlocked && "opacity-50"}`}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <h3
                className={`font-bold text-sm mb-1 ${isUnlocked ? "text-gray-900" : "text-gray-400"}`}
              >
                Bước {index + 1}
              </h3>
              <p
                className={`text-xs ${isUnlocked ? "text-gray-600" : "text-gray-400"}`}
              >
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Content */}
      <div className="card p-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className={`${steps[activeStep].color} p-3 rounded-xl`}>
              {(() => {
                const Icon = steps[activeStep].icon;
                return <Icon className="w-7 h-7 text-white" />;
              })()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Bước {activeStep + 1}: {steps[activeStep].title}
              </h2>
              <p className="text-gray-600">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>

        {renderStepContent()}

        {/* Thông báo yêu cầu hoàn thành */}
        {!canProceedToNext() && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-xl">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-bold text-yellow-900 mb-1">
                  Chưa thể chuyển sang bước tiếp theo
                </h4>
                <p className="text-sm text-yellow-800">
                  {activeStep === 0 &&
                    (formData.topicType === ""
                      ? "Vui lòng chọn dạng đề bài để tiếp tục"
                      : selectedTopic === ""
                        ? "Vui lòng chọn 1 đề bài cụ thể để tiếp tục"
                        : "Vui lòng trả lời đầy đủ 3 câu hỏi phần Hiểu đề để tiếp tục")}
                  {activeStep === 1 &&
                    "Vui lòng trả lời đầy đủ tất cả các câu hỏi trong phần Khai phá ý tưởng để tiếp tục"}
                  {activeStep === 2 &&
                    "Vui lòng điền ít nhất câu mở đoạn và thân đoạn"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:shadow-md"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Bước trước
          </button>

          <button
            onClick={handleNextStep}
            disabled={activeStep === steps.length - 1 || !canProceedToNext()}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              activeStep === steps.length - 1 || !canProceedToNext()
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            }`}
          >
            {activeStep === steps.length - 1 ? "Hoàn thành" : "Bước tiếp theo"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-300">
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="text-2xl">💡</span> Mẹo học tập
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>Hãy làm từng bước một cách cẩn thận, đừng vội vàng</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>Thực hành nhiều lần để thành thạo quy trình</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600">•</span>
            <span>Mỗi đề bài có thể cần điều chỉnh linh hoạt</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WritingMap;
