"use client";

import { RefObject } from "react";

import Card from "@/components/ui/Card";
import LogoUploader from "./LogoUploader";

interface QRPreviewProps {
  containerRef: RefObject<HTMLDivElement | null>;
  valid: boolean;

  logo?: string;
  setLogo: (logo?: string) => void;
}

export default function QRPreview({
  containerRef,
  valid,
  logo,
  setLogo,
}: QRPreviewProps) {
  return (
    <Card className="overflow-hidden rounded-3xl">
      {/* Preview */}

      <div className="flex flex-col items-center p-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Live Preview
        </h2>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300">
          <div
            ref={containerRef}
            className="flex min-h-[280px] min-w-[280px] items-center justify-center"
          />
        </div>

        {/* Status */}

        {valid ? (
          <div className="mt-8 max-w-xs text-center">
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              ✓ QR Code Ready
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Customize or download your QR code below.
            </p>
          </div>
        ) : (
          <div className="mt-8 max-w-xs text-center">
            <p className="font-semibold text-gray-800">
              Your QR Code will appear here
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Enter a valid value to generate your QR code.
            </p>
          </div>
        )}
      </div>

      {/* Divider */}

      <div className="border-t border-gray-200" />

      {/* Logo Upload */}

      <div className="bg-gray-50 p-8">
        <LogoUploader
          value={logo}
          onChange={setLogo}
        />
      </div>
    </Card>
  );
}