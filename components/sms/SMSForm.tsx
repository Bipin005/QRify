"use client";

export interface SMSData {
  phone: string;
  message: string;
}

interface Props {
  value: SMSData;
  onChange: (value: SMSData) => void;
}

export default function SMSForm({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Phone */}

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
              ...value,
              phone: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Message */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Enter your SMS message..."
          value={value.message}
          onChange={(e) =>
            onChange({
              ...value,
              message: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}