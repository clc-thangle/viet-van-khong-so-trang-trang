import { ChevronRight, ChevronLeft } from "lucide-react";

interface NavigationButtonsProps {
  activeStep: number;
  totalSteps: number;
  canProceed: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ activeStep, totalSteps, canProceed, onPrev, onNext }: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
      <button
        onClick={onPrev}
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
        onClick={onNext}
        disabled={activeStep === totalSteps - 1 || !canProceed}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
          activeStep === totalSteps - 1 || !canProceed
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
        }`}
      >
        {activeStep === totalSteps - 1 ? "Hoàn thành" : "Bước tiếp theo"}
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NavigationButtons;
