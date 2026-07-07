"use client";

export interface VCardData {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  phone: string;
  email: string;
  website: string;
}

interface Props {
  value: VCardData;
  onChange: (value: VCardData) => void;
}

export default function VCardForm({
  value,
  onChange,
}: Props) {
  const update = (key: keyof VCardData, val: string) =>
    onChange({
      ...value,
      [key]: val,
    });

  return (
    <div className="space-y-5">

      <input
        className="w-full rounded-xl border p-3"
        placeholder="First Name"
        value={value.firstName}
        onChange={(e) => update("firstName", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Last Name"
        value={value.lastName}
        onChange={(e) => update("lastName", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Company"
        value={value.company}
        onChange={(e) => update("company", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Job Title"
        value={value.jobTitle}
        onChange={(e) => update("jobTitle", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Phone"
        value={value.phone}
        onChange={(e) => update("phone", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Email"
        value={value.email}
        onChange={(e) => update("email", e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Website"
        value={value.website}
        onChange={(e) => update("website", e.target.value)}
      />

    </div>
  );
}