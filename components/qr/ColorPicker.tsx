interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ColorPicker({
  label,
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent"
      />
    </div>
  );
}