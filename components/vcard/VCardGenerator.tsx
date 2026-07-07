"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import useQRCode from "@/hooks/useQRCode";

import QRCustomizer from "@/components/qr/QRCustomizer";
import QRPreview from "@/components/qr/QRPreview";
import DownloadButtons from "@/components/qr/DownloadButtons";

import VCardForm, {
  VCardData,
} from "./VCardForm";

export default function VCardGenerator() {
  const [contact, setContact] =
    useState<VCardData>({
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      phone: "",
      email: "",
      website: "",
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
    if (
      !contact.firstName.trim() &&
      !contact.lastName.trim() &&
      !contact.phone.trim() &&
      !contact.email.trim()
    ) {
      return "";
    }

    return [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${contact.lastName};${contact.firstName}`,
      `FN:${contact.firstName} ${contact.lastName}`.trim(),
      `ORG:${contact.company}`,
      `TITLE:${contact.jobTitle}`,
      `TEL:${contact.phone}`,
      `EMAIL:${contact.email}`,
      `URL:${contact.website}`,
      "END:VCARD",
    ].join("\n");
  }, [contact]);

  const hasData =
    !!(
      contact.firstName.trim() ||
      contact.lastName.trim() ||
      contact.phone.trim() ||
      contact.email.trim()
    );

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
        {/* LEFT */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            vCard QR Code Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Create a digital contact card that people can
            save instantly by scanning your QR code.
          </p>

          <div className="mt-8">
            <VCardForm
              value={contact}
              onChange={setContact}
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