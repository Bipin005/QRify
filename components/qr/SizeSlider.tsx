interface SizeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function SizeSlider({
  value,
  onChange,
}: SizeSliderProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium">
          QR Size
        </span>

        <span className="text-sm text-gray-500">
          {value}px
        </span>
      </div>

      <input
        type="range"
        min={180}
        max={400}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full"
      />
    </div>
  );
}