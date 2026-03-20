import { ChevronRight, ChevronLeft, Download, Send } from "lucide-react";

interface NavigationButtonsProps {
  activeStep: number;
  totalSteps: number;
  canProceed: boolean;
  onPrev: () => void;
  onNext: () => void;
  isAllComplete?: boolean;
  onDownloadPdf?: () => void;
  isDownloading?: boolean;
  onSubmit?: () => void;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
}

const NavigationButtons = ({
  activeStep,
  totalSteps,
  canProceed,
  onPrev,
  onNext,
  isAllComplete = false,
  onDownloadPdf,
  isDownloading = false,
  onSubmit,
  isSubmitting = false,
  isSubmitted = false,
}: NavigationButtonsProps) => {
  const isLastStep = activeStep === totalSteps - 1;
  const showActions = isLastStep && isAllComplete;

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

      {showActions ? (
        <div className="flex items-center gap-3">
          {/* Nút Download PDF */}
          {onDownloadPdf && (
            <button
              onClick={onDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-wait"
            >
              {isDownloading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Đang tạo...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download PDF
                </>
              )}
            </button>
          )}

          {/* Nút Nộp bài */}
          {onSubmit && (
            <button
              onClick={onSubmit}
              disabled={isSubmitting || isSubmitted}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed ${
                isSubmitted
                  ? 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                  : 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:from-primary-600 hover:to-purple-700 disabled:opacity-60'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Đang nộp...
                </>
              ) : isSubmitted ? (
                <>✅ Đã nộp bài</>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Nộp bài
                </>
              )}
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={onNext}
          disabled={isLastStep || !canProceed}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            isLastStep || !canProceed
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
          }`}
        >
          {isLastStep ? "Hoàn thành" : "Bước tiếp theo"}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
