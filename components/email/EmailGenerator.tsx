"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import useQRCode from "@/hooks/useQRCode";

import QRCustomizer from "@/components/qr/QRCustomizer";
import QRPreview from "@/components/qr/QRPreview";
import DownloadButtons from "@/components/qr/DownloadButtons";

import EmailForm, { EmailData } from "./EmailForm";

export default function EmailGenerator() {
  const [email, setEmail] = useState<EmailData>({
    email: "",
    subject: "",
    body: "",
  });

  const [foreground, setForeground] =
    useState("#111827");

  const [background, setBackground] =
    useState("#ffffff");

  const [size, setSize] = useState(280);

  const [logo, setLogo] =
    useState<string>();

  const qrData = useMemo(() => {
    if (!email.email.trim()) return "";

    const params = new URLSearchParams();

    if (email.subject.trim()) {
      params.append("subject", email.subject);
    }

    if (email.body.trim()) {
      params.append("body", email.body);
    }

    const query = params.toString();

    return query
      ? `mailto:${email.email}?${query}`
      : `mailto:${email.email}`;
  }, [email]);

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
        {/* Left Panel */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            Email QR Code Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Generate a QR code that opens an email with
            a pre-filled subject and message.
          </p>

          <div className="mt-8">
            <EmailForm
              value={email}
              onChange={setEmail}
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
              disabled={!email.email.trim()}
              onDownload={download}
            />
          </div>
        </Card>

        {/* Right Panel */}

        <QRPreview
          containerRef={containerRef}
          valid={email.email.trim().length > 0}
          logo={logo}
          setLogo={setLogo}
        />
      </div>
    </section>
  );
}