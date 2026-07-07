"use client";

import { ChangeEvent } from "react";
import {
  ImagePlus,
  Trash2,
  RefreshCcw,
} from "lucide-react";

interface Props {
  value?: string;
  onChange: (image?: string) => void;
}

export default function LogoUploader({
  value,
  onChange,
}: Props) {
  const handleUpload = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Maximum size is 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Logo
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Upload a logo for the center of your QR Code.
        </p>
      </div>

      {!value && (
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white p-10 transition hover:border-blue-500 hover:bg-blue-50">
          <ImagePlus
            size={42}
            className="mb-4 text-blue-600"
          />

          <span className="font-semibold">
            Upload Logo
          </span>

          <span className="mt-1 text-sm text-gray-500">
            PNG, JPG, SVG • Max 2 MB
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      )}

      {value && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex justify-center">
            <img
              src={value}
              alt="Logo"
              className="h-28 w-28 rounded-xl border bg-white object-contain p-2"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-blue-500 py-3 font-medium text-blue-600 transition hover:bg-blue-50">
              <RefreshCcw size={18} />
              Replace

              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>

            <button
              type="button"
              onClick={() => onChange(undefined)}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600"
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}