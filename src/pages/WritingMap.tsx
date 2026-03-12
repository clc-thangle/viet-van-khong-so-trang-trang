import {
  Lightbulb,
  PenTool,
  FileText,
  Edit3,
  CheckCircle,
} from "lucide-react";
import { type LucideIcon } from 'lucide-react';
import { STEPS_CONFIG } from "../data/writingMapConstants";
import { useStepNavigation } from "../hooks/useStepNavigation";
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

const WritingMap = () => {
  // Step hooks
  const stepZero = useStepZero();
  const stepOne = useStepOne();
  const stepTwo = useStepTwo(stepOne.ideaAnswers);
  const stepThree = useStepThree();
  const stepFour = useStepFour();

  // Step completion check
  const isStepComplete = (stepIndex: number): boolean => {
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
  };

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

  // Render step content
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepZeroView
            selectedTopic={stepZero.selectedTopic}
            understandingAnswers={stepZero.understandingAnswers}
            randomTopics={stepZero.randomTopics}
            handleSelectTopic={stepZero.handleSelectTopic}
            handleRefreshTopics={stepZero.handleRefreshTopics}
            updateUnderstandingAnswer={stepZero.updateUnderstandingAnswer}
            setUnderstandingAnswers={stepZero.setUnderstandingAnswers}
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
            outlineSlots={stepTwo.outlineSlots}
          />
        );
      case 4:
        return (
          <StepFourView
            checklist={stepFour.checklist}
            completedCount={stepFour.completedCount}
            toggleChecklist={stepFour.toggleChecklist}
            essayParagraphs={stepThree.essayParagraphs}
          />
        );
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
          5 bước đơn giản giúp em viết đoạn văn nghị luận một cách khoa học và
          hiệu quả
        </p>
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
                    "Vui lòng trả lời đầy đủ tất cả các câu hỏi trong phần Khai phá ý tưởng để tiếp tục"}
                  {activeStep === 2 &&
                    "Vui lòng điền ít nhất câu mở đoạn và thân đoạn"}
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
