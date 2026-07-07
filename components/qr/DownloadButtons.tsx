"use client";

import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

interface DownloadButtonsProps {
  disabled: boolean;
  onDownload: (type: "png" | "svg") => void;
}

export default function DownloadButtons({
  disabled,
  onDownload,
}: DownloadButtonsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Download
      </h3>

      <div className="flex flex-wrap gap-3">
        <Button
          disabled={disabled}
          onClick={() => onDownload("png")}
          className="flex items-center gap-2"
        >
          <Download size={18} />
          PNG
        </Button>

        <Button
          variant="outline"
          disabled={disabled}
          onClick={() => onDownload("svg")}
          className="flex items-center gap-2"
        >
          <Download size={18} />
          SVG
        </Button>
      </div>

      <p className="text-sm text-gray-500">
        High-quality downloads ready for print and web.
      </p>
    </div>
  );
}