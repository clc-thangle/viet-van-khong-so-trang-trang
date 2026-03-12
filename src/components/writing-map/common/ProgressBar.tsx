interface ProgressBarProps {
  filled: number;
  total: number;
  colorFrom: string;
  colorTo: string;
  label?: string;
}

const ProgressBar = ({ filled, total, colorFrom, colorTo, label }: ProgressBarProps) => {
  const progress = total > 0 ? (filled / total) * 100 : 0;
  return (
    <div>
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorFrom} ${colorTo} transition-all duration-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {label && (
        <p className="text-sm text-gray-600 mt-2">
          {filled}/{total} {label} ({Math.round(progress)}%)
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
