"use client";

export interface PhoneData {
  phone: string;
}

interface Props {
  value: PhoneData;
  onChange: (value: PhoneData) => void;
}

export default function PhoneForm({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Phone Number
      </label>

      <input
        type="tel"
        placeholder="+91 9876543210"
        value={value.phone}
        onChange={(e) =>
          onChange({
            phone: e.target.value,
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />

      <p className="mt-2 text-sm text-gray-500">
        Include country code for better compatibility.
      </p>
    </div>
  );
}