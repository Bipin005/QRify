"use client";

import ColorPicker from "./ColorPicker";
import SizeSlider from "./SizeSlider";

interface Props {
  foreground: string;
  background: string;
  size: number;

  setForeground: (value: string) => void;
  setBackground: (value: string) => void;
  setSize: (value: number) => void;
}

export default function QRCustomizer({
  foreground,
  background,
  size,
  setForeground,
  setBackground,
  setSize,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Customize
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Personalize the appearance of your QR Code.
        </p>
      </div>

      <ColorPicker
        label="Foreground"
        value={foreground}
        onChange={setForeground}
      />

      <ColorPicker
        label="Background"
        value={background}
        onChange={setBackground}
      />

      <SizeSlider
        value={size}
        onChange={setSize}
      />
    </div>
  );
}