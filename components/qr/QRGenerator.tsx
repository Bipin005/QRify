"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import { validateUrl } from "@/lib/validators";
import useQRCode from "@/hooks/useQRCode";

import QRForm from "./QRForm";
import QRPreview from "./QRPreview";
import QRCustomizer from "./QRCustomizer";
import DownloadButtons from "./DownloadButtons";

interface QRGeneratorProps {
  type: "url" | "text";
  title: string;
  description: string;
  placeholder: string;
}

export default function QRGenerator({
  type,
  title,
  description,
  placeholder,
}: QRGeneratorProps) {
  const [value, setValue] = useState("");

  const [foreground, setForeground] =
    useState("#111827");

  const [background, setBackground] =
    useState("#ffffff");

  const [size, setSize] =
    useState(280);

  const [logo, setLogo] =
    useState<string>();

  const validation = useMemo(() => {
    if (type === "text") {
      return {
        valid: value.trim().length > 0,
        normalized: value,
      };
    }

    return validateUrl(value);
  }, [value, type]);

  const qrData = validation.valid
    ? validation.normalized
    : "";

  // ⭐ Single QR Engine
  const {
    containerRef,
    download,
  } = useQRCode({
    data: qrData,
    size,
    margin: 10,
    foreground,
    background,
    image: logo,
  });

  return (
    <section className="container-custom py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT PANEL */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-3 text-gray-600">
            {description}
          </p>

          <div className="mt-8">
            <QRForm
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={setValue}
            />
          </div>

          <div className="mt-10 border-t border-gray-200 pt-8">
            <QRCustomizer
              foreground={foreground}
              background={background}
              size={size}
              setForeground={setForeground}
              setBackground={setBackground}
              setSize={setSize}
            />
          </div>

          <div className="mt-10 border-t border-gray-200 pt-8">
            <DownloadButtons
              disabled={!validation.valid}
              onDownload={download}
            />
          </div>
        </Card>

        {/* RIGHT PANEL */}

        <QRPreview
          containerRef={containerRef}
          valid={validation.valid}
          logo={logo}
          setLogo={setLogo}
        />
      </div>
    </section>
  );
}