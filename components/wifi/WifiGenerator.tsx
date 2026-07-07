"use client";

import { useMemo, useState } from "react";

import Card from "@/components/ui/Card";

import useQRCode from "@/hooks/useQRCode";

import QRCustomizer from "@/components/qr/QRCustomizer";
import QRPreview from "@/components/qr/QRPreview";
import DownloadButtons from "@/components/qr/DownloadButtons";

import WifiForm, {
  WifiData,
} from "./WifiForm";

export default function WifiGenerator() {
  const [wifi, setWifi] =
    useState<WifiData>({
      ssid: "",
      password: "",
      security: "WPA",
      hidden: false,
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
    if (!wifi.ssid.trim()) return "";

    return `WIFI:T:${wifi.security};S:${wifi.ssid};P:${wifi.password};H:${wifi.hidden};;`;
  }, [wifi]);

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
    wifi.ssid.trim().length > 0;

  return (
    <section className="container-custom py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT */}

        <Card>
          <h1 className="text-3xl font-bold text-gray-900">
            WiFi QR Code Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Create a QR code that lets anyone join
            your WiFi instantly.
          </p>

          <div className="mt-8">
            <WifiForm
              value={wifi}
              onChange={setWifi}
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