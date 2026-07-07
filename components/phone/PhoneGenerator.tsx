"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import useQRCode from "@/hooks/useQRCode";

import QRCustomizer from "@/components/qr/QRCustomizer";
import QRPreview from "@/components/qr/QRPreview";
import DownloadButtons from "@/components/qr/DownloadButtons";

import PhoneForm, {
  PhoneData,
} from "./PhoneForm";

export default function PhoneGenerator() {
  const [phone, setPhone] =
    useState<PhoneData>({
      phone: "",
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
    if (!phone.phone.trim()) return "";

    return `tel:${phone.phone.trim()}`;
  }, [phone]);

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

  const hasData =
    phone.phone.trim().length > 0;

  return (
    <section className="container-custom py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            Phone QR Code Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Generate a QR code that opens the phone
            dialer instantly.
          </p>

          <div className="mt-8">
            <PhoneForm
              value={phone}
              onChange={setPhone}
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

        {/* RIGHT */}

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