"use client";

import Input from "@/components/ui/Input";
import { validateUrl } from "@/lib/validators";

interface QRFormProps {
  type: "url" | "text";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function QRForm({
  type,
  value,
  placeholder,
  onChange,
}: QRFormProps) {
  const validation =
    type === "url"
      ? validateUrl(value)
      : {
          valid: value.trim().length > 0,
        };

  const label =
    type === "url"
      ? "Website URL"
      : "Text";

  return (
    <div className="space-y-4">
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value && (
        <div>
          {type === "url" ? (
            <p
              className={`text-sm font-medium ${
                validation.valid
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {validation.valid
                ? "✓ Valid URL"
                : "Please enter a valid URL"}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              {value.length}{" "}
              {value.length === 1
                ? "character"
                : "characters"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}