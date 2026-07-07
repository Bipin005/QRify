"use client";

export interface WifiData {
  ssid: string;
  password: string;
  security: "WPA" | "WEP" | "nopass";
  hidden: boolean;
}

interface Props {
  value: WifiData;
  onChange: (value: WifiData) => void;
}

export default function WifiForm({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      {/* SSID */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          WiFi Name (SSID)
        </label>

        <input
          type="text"
          placeholder="Enter WiFi name"
          value={value.ssid}
          onChange={(e) =>
            onChange({
              ...value,
              ssid: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Password */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="text"
          placeholder="Enter password"
          value={value.password}
          onChange={(e) =>
            onChange({
              ...value,
              password: e.target.value,
            })
          }
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Security */}

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Security
        </label>

        <select
          value={value.security}
          onChange={(e) =>
            onChange({
              ...value,
              security: e.target.value as WifiData["security"],
            })
          }
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
        >
          <option value="WPA">WPA / WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>
      </div>

      {/* Hidden */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={value.hidden}
          onChange={(e) =>
            onChange({
              ...value,
              hidden: e.target.checked,
            })
          }
          className="h-4 w-4"
        />

        <span className="text-sm text-gray-700">
          Hidden Network
        </span>
      </label>
    </div>
  );
}