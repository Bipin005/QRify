"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import useQRCode from "@/hooks/useQRCode";

import QRCustomizer from "@/components/qr/QRCustomizer";
import QRPreview from "@/components/qr/QRPreview";
import DownloadButtons from "@/components/qr/DownloadButtons";

import SMSForm, { SMSData } from "./SMSForm";

export default function SMSGenerator() {
  const [sms, setSms] = useState<SMSData>({
    phone: "",
    message: "",
  });

  const [foreground, setForeground] =
    useState("#111827");

  const [background, setBackground] =
    useState("#ffffff");

  const [size, setSize] =
    useState(280);

  const [logo, setLogo] =
    useState<string>();

  const qrData = useMemo(() => {
    if (!sms.phone.trim()) return "";

    return `SMSTO:${sms.phone}:${sms.message}`;
  }, [sms]);

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

  const hasData = sms.phone.trim().length > 0;

  return (
    <section className="container-custom py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            SMS QR Code Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Generate a QR code that opens the SMS app
            with a pre-filled message.
          </p>

          <div className="mt-8">
            <SMSForm
              value={sms}
              onChange={setSms}
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
              disabled={!hasData}
              onDownload={download}
            />
          </div>
        </Card>

        {/* Right */}

        <QRPreview
          containerRef={containerRef}
          valid={hasData}
          logo={logo}
          setLogo={setLogo}
        />
      </div>
    </section>
  );
}