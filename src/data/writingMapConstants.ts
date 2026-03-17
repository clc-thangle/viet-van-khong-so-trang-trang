// ============================================
// SHARED TYPES - Used by all grade data files
// ============================================

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

// ============================================
// GRADE SYSTEM TYPES
// ============================================

export interface TimYQuestion {
  id: string;
  label: string;
  placeholder: string;
  subInputs?: number;
  subLabels?: string[];
}

export interface GradeData {
  grade: number;
  label: string;
  essayType: string;
  wordCount: number;
  topics: string[];
  topicQuizData: Record<string, TopicQuiz>;
  topicKeywords: Record<string, string[]>;
  timYQuestions: TimYQuestion[];
  topicSpecificHints: Record<string, Record<string, string>>;
  generalHints: Record<string, string[]>;
  outlineSlotConfig: OutlineSectionConfig[];
  checklistItems: ChecklistItem[];
  getWritingSections: (slots: Record<string, string>) => WritingSection[];
  stepsConfig: StepConfig[];
}

// ============================================
// SHARED STEPS CONFIG (same for all grades)
// ============================================

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
    description: "Trả lời các câu hỏi để tạo ý tưởng cho bài viết",
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
