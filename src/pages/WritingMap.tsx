import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Lightbulb,
  PenTool,
  FileText,
  Edit3,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { STEPS_CONFIG } from "../data/writingMapConstants";
import type { GradeData } from "../data/writingMapConstants";
import { getGradeData } from "../data/gradeRegistry";
import { useStepNavigation } from "../hooks/useStepNavigation";
import { generateEssayPdf } from "../utils/generateEssayPdf";
import GradeSelector from "../components/writing-map/GradeSelector";
import StepIndicatorView from "../components/writing-map/StepIndicator/StepIndicatorView";
import StepZeroView from "../components/writing-map/StepZeroUnderstanding/StepZeroView";
import { useStepZero } from "../components/writing-map/StepZeroUnderstanding/useStepZero";
import StepOneView from "../components/writing-map/StepOneIdea/StepOneView";
import { useStepOne } from "../components/writing-map/StepOneIdea/useStepOne";
import StepTwoView from "../components/writing-map/StepTwoOutline/StepTwoView";
import { useStepTwo } from "../components/writing-map/StepTwoOutline/useStepTwo";
import StepThreeView from "../components/writing-map/StepThreeWriting/StepThreeView";
import { useStepThree } from "../components/writing-map/StepThreeWriting/useStepThree";
import StepFourView from "../components/writing-map/StepFourReview/StepFourView";
import { useStepFour } from "../components/writing-map/StepFourReview/useStepFour";
import NavigationButtons from "../components/writing-map/NavigationButtons";

// Map icon strings from STEPS_CONFIG to actual icon components
const ICON_MAP: Record<string, LucideIcon> = {
  Lightbulb,
  PenTool,
  FileText,
  Edit3,
  CheckCircle,
};

const steps = STEPS_CONFIG.map((step) => ({
  ...step,
  icon: ICON_MAP[step.icon] || Lightbulb,
}));

// Default empty grade data for initial render
const EMPTY_GRADE_DATA: GradeData = {
  grade: 0,
  label: "",
  essayType: "",
  wordCount: 0,
  topics: [],
  topicQuizData: {},
  topicKeywords: {},
  timYQuestions: [],
  topicSpecificHints: {},
  generalHints: {},
  outlineSlotConfig: [],
  checklistItems: [],
  getWritingSections: () => [],
  stepsConfig: STEPS_CONFIG,
};

const WritingMap = () => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [gradeData, setGradeData] = useState<GradeData>(EMPTY_GRADE_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Step hooks - using gradeData
  const stepZero = useStepZero(gradeData);
  const stepOne = useStepOne(gradeData.timYQuestions);
  const stepTwo = useStepTwo(
    stepOne.ideaAnswers,
    gradeData.timYQuestions,
    gradeData.outlineSlotConfig
  );
  const writingSections = useMemo(
    () => gradeData.getWritingSections(stepTwo.outlineSlots),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gradeData, JSON.stringify(stepTwo.outlineSlots)]
  );
  const stepThree = useStepThree(writingSections);
  const stepFour = useStepFour(gradeData.checklistItems);

  // Step completion check
  const isStepComplete = useCallback(
    (stepIndex: number): boolean => {
      switch (stepIndex) {
        case 0:
          return stepZero.isComplete;
        case 1:
          return stepOne.isComplete;
        case 2:
          return stepTwo.isComplete;
        case 3:
          return stepThree.isComplete;
        case 4:
          return stepFour.isComplete;
        default:
          return false;
      }
    },
    [
      stepZero.isComplete,
      stepOne.isComplete,
      stepTwo.isComplete,
      stepThree.isComplete,
      stepFour.isComplete,
    ]
  );

  // Navigation
  const {
    activeStep,
    completedSteps,
    canProceedToNext,
    isStepUnlocked,
    handleNextStep,
    handlePrevStep,
    handleStepClick,
  } = useStepNavigation(steps, isStepComplete);

  // Load grade data when selected
  const handleSelectGrade = useCallback(async (grade: number) => {
    setIsLoading(true);
    try {
      const data = await getGradeData(grade);
      setGradeData(data);
      setSelectedGrade(grade);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu lớp:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle back to grade selection
  const handleBackToGradeSelect = () => {
    setSelectedGrade(null);
    setGradeData(EMPTY_GRADE_DATA);
  };

  // Render step content
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepZeroView
            selectedTopic={stepZero.selectedTopic}
            understandingAnswers={stepZero.understandingAnswers}
            randomTopics={stepZero.randomTopics}
            topicQuizData={gradeData.topicQuizData}
            handleSelectTopic={stepZero.handleSelectTopic}
            handleRefreshTopics={stepZero.handleRefreshTopics}
            updateUnderstandingAnswer={stepZero.updateUnderstandingAnswer}
            setUnderstandingAnswers={stepZero.setUnderstandingAnswers}
            essayType={gradeData.essayType}
          />
        );
      case 1:
        return (
          <StepOneView
            selectedTopic={stepZero.selectedTopic}
            ideaAnswers={stepOne.ideaAnswers}
            activeIdeaHint={stepOne.activeIdeaHint}
            activeTopicHint={stepOne.activeTopicHint}
            isComplete={stepOne.isComplete}
            updateIdeaAnswer={stepOne.updateIdeaAnswer}
            toggleIdeaHint={stepOne.toggleIdeaHint}
            toggleTopicHint={stepOne.toggleTopicHint}
            timYQuestions={gradeData.timYQuestions}
            topicSpecificHints={gradeData.topicSpecificHints}
            generalHints={gradeData.generalHints}
          />
        );
      case 2:
        return (
          <StepTwoView
            outlineSlots={stepTwo.outlineSlots}
            selectedDragItem={stepTwo.selectedDragItem}
            availableItems={stepTwo.availableItems}
            filledCount={stepTwo.filledCount}
            totalSlots={stepTwo.totalSlots}
            handleDragStart={stepTwo.handleDragStart}
            handleDragOver={stepTwo.handleDragOver}
            handleDrop={stepTwo.handleDrop}
            handleItemClick={stepTwo.handleItemClick}
            handleSlotClick={stepTwo.handleSlotClick}
            updateOutlineSlot={stepTwo.updateOutlineSlot}
            outlineSlotConfig={gradeData.outlineSlotConfig}
          />
        );
      case 3:
        return (
          <StepThreeView
            essayParagraphs={stepThree.essayParagraphs}
            activeWritingHint={stepThree.activeWritingHint}
            filledParagraphs={stepThree.filledParagraphs}
            totalParagraphs={stepThree.totalParagraphs}
            updateParagraph={stepThree.updateParagraph}
            toggleWritingHint={stepThree.toggleWritingHint}
            getWordCount={stepThree.getWordCount}
            writingSections={writingSections}
          />
        );
      case 4:
        return (
          <StepFourView
            checklist={stepFour.checklist}
            completedCount={stepFour.completedCount}
            toggleChecklist={stepFour.toggleChecklist}
            essayParagraphs={stepThree.essayParagraphs}
            checklistItems={gradeData.checklistItems}
            writingSections={writingSections}
          />
        );
      default:
        return null;
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloading(true);
    try {
      await generateEssayPdf(
        stepThree.essayParagraphs,
        writingSections,
        stepZero.selectedTopic || undefined
      );
    } catch (error) {
      console.error("Lỗi khi tạo PDF:", error);
      alert("Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại!");
    } finally {
      setIsDownloading(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  // Grade selection screen
  if (selectedGrade === null) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Bản đồ viết bài văn số</h1>
          <p className="text-blue-100">
            5 bước đơn giản giúp em viết đoạn văn nghị luận một cách khoa học và
            hiệu quả
          </p>
        </div>

        <div className="card p-8">
          <GradeSelector onSelectGrade={handleSelectGrade} />
        </div>
      </div>
    );
  }

  // Main writing map with selected grade
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">Bản đồ viết bài văn số</h1>
          <button
            onClick={handleBackToGradeSelect}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Đổi lớp
          </button>
        </div>
        <p className="text-blue-100">
          5 bước đơn giản giúp em viết đoạn văn nghị luận một cách khoa học và
          hiệu quả
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
            {gradeData.label}
          </span>
          <span className="text-sm text-blue-200">
            {gradeData.essayType}
          </span>
        </div>
      </div>

      {/* Progress Steps */}
      <StepIndicatorView
        steps={steps}
        activeStep={activeStep}
        completedSteps={completedSteps}
        isStepUnlocked={isStepUnlocked}
        isStepComplete={isStepComplete}
        onStepClick={handleStepClick}
      />

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
                    (stepZero.selectedTopic === ""
                      ? "Vui lòng chọn 1 đề bài để tiếp tục"
                      : "Vui lòng trả lời đúng 3 câu hỏi trắc nghiệm phần Hiểu đề để tiếp tục")}
                  {activeStep === 1 &&
                    "Vui lòng trả lời đầy đủ tất cả các câu hỏi trong phần Tìm ý để tiếp tục"}
                  {activeStep === 2 &&
                    "Vui lòng điền đầy đủ tất cả các ô trong dàn ý để tiếp tục"}
                  {activeStep === 3 &&
                    "Vui lòng viết đầy đủ tất cả các đoạn văn để tiếp tục"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <NavigationButtons
          activeStep={activeStep}
          totalSteps={steps.length}
          canProceed={canProceedToNext()}
          onPrev={handlePrevStep}
          onNext={handleNextStep}
          isAllComplete={stepFour.isComplete}
          onDownloadPdf={handleDownloadPdf}
          isDownloading={isDownloading}
        />
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-300">
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
          <span className="text-2xl">💡</span> Mẹo học tập
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Hãy làm từng bước một cách cẩn thận, đừng vội vàng</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Thực hành nhiều lần để thành thạo quy trình</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-yellow-600">•</span>
            <span>Mỗi đề bài có thể cần điều chỉnh linh hoạt</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WritingMap;
