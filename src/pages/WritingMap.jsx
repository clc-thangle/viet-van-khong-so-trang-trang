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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q1")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q1"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q1", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Vấn đề là từ khóa chính của đề bài.</p>
                          <p className="italic text-gray-500">VD: Lòng biết ơn, tự học, hiếu thảo, nghiện game, ...</p>
                        </div>
                      ))}
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q2")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q2"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q2", (
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Tán thành hoặc phản đối</p>
                        </div>
                      ))}
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q3")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q3"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
                      </button>
                      {renderIdeaHintPopup("q3", (
                        <div className="text-sm text-gray-600 space-y-2">
                          <p>• Giải thích từ khóa chính trong ý kiến được nêu ở đề bài</p>
                          <p className="italic text-gray-500">VD: Lòng biết ơn là ..., Hiếu thảo là ...</p>
                          <p>• Ý kiến trong đề bài muốn khẳng định điều gì</p>
                          <p className="italic text-gray-500">VD: Khẳng định vai trò của lòng biết ơn, Ý nghĩa của lòng hiếu thảo, ...</p>
                        </div>
                      ))}
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q4")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q4"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q5")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q5"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q6")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q6"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
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
                    <div className="relative">
                      <button
                        onClick={() => toggleIdeaHint("q7")}
                        className={`p-1.5 rounded-full transition-all ${
                          activeIdeaHint === "q7"
                            ? "bg-emerald-500 text-white shadow-md"
                            : "bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                        }`}
                        title="Xem gợi ý"
                      >
                        <Lightbulb className="w-4 h-4" />
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
