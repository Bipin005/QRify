"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export interface QRConfig {
  data: string;
  size?: number;
  margin?: number;
  foreground?: string;
  background?: string;
  image?: string;
}

export default function useQRCode({
  data,
  size = 280,
  margin = 10,
  foreground = "#111827",
  background = "#ffffff",
  image,
}: QRConfig) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const qrRef =
    useRef<QRCodeStyling | null>(null);

  // Create QR once
  useEffect(() => {
    qrRef.current = new QRCodeStyling({
      width: size,
      height: size,
      type: "svg",

      data,

      margin,

      image,

      qrOptions: {
        errorCorrectionLevel: "H",
      },

      imageOptions: {
        crossOrigin: "anonymous",
        margin: 8,
        imageSize: 0.28,
        hideBackgroundDots: true,
      },

      dotsOptions: {
        color: foreground,
        type: "rounded",
      },

      cornersSquareOptions: {
        color: foreground,
        type: "extra-rounded",
      },

      cornersDotOptions: {
        color: foreground,
      },

      backgroundOptions: {
        color: background,
      },
    });

    if (containerRef.current) {
      qrRef.current.append(
        containerRef.current
      );
    }

    return () => {
      containerRef.current?.replaceChildren();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update QR
  useEffect(() => {
    if (!qrRef.current) return;

    qrRef.current.update({
      data,

      width: size,
      height: size,

      margin,

      image,

      imageOptions: {
        crossOrigin: "anonymous",
        margin: 8,
        imageSize: 0.28,
        hideBackgroundDots: true,
      },

      dotsOptions: {
        color: foreground,
        type: "rounded",
      },

      cornersSquareOptions: {
        color: foreground,
        type: "extra-rounded",
      },

      cornersDotOptions: {
        color: foreground,
      },

      backgroundOptions: {
        color: background,
      },
    });
  }, [
    data,
    size,
    margin,
    foreground,
    background,
    image,
  ]);

  const download = async (
    extension: "png" | "svg"
  ) => {
    if (!qrRef.current) return;

    await qrRef.current.download({
      extension,
      name: "qrify",
    });
  };

  return {
    containerRef,
    download,
    qrRef,
  };
}