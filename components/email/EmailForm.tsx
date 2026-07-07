"use client";

export interface EmailData {
  email: string;
  subject: string;
  body: string;
}

interface Props {
  value: EmailData;
  onChange: (value: EmailData) => void;
}

export default function EmailForm({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="example@gmail.com"
          value={value.email}
          onChange={(e) =>
            onChange({
              ...value,
              email: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Subject
        </label>

        <input
          type="text"
          placeholder="Meeting"
          value={value.subject}
          onChange={(e) =>
            onChange({
              ...value,
              subject: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Write your message..."
          value={value.body}
          onChange={(e) =>
            onChange({
              ...value,
              body: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none resize-none"
        />
      </div>
    </div>
  );
}