import Link from "next/link";
import { ArrowRight, QrCode } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-custom py-16 sm:py-20 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <QrCode size={16} />
            Free QR Code Generator
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Generate QR Codes
            <span className="block text-blue-600">
              Instantly.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Create QR Codes for URLs, WiFi, Text, Phone,
            SMS and more in seconds. No signup.
            Completely free.
          </p>

          <div className="mt-10">
            <Link
              href="/url"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Generate QR
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="flex justify-center">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <QrCode
              size={220}
              className="text-blue-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}