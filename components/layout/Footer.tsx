import Link from "next/link";
import {
  Globe,
  Mail,
  QrCode,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="container-custom py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <QrCode size={22} />
              </div>

              <span className="text-2xl font-bold">
                QRify
              </span>
            </div>

            <p className="mt-5 leading-7 text-gray-600">
              QRify helps you generate beautiful,
              customizable and professional QR Codes
              instantly.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link
                href="/"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/url"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                URL QR
              </Link>

              <Link
                href="/text"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                Text QR
              </Link>

              <Link
                href="/wifi"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                WiFi QR
              </Link>

              <Link
                href="/vcard"
                className="block text-gray-600 transition hover:text-blue-600"
              >
                vCard QR
              </Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Connect
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:ny666350@gmail.com"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600"
              >
                <Mail size={18} />
                hello@qrify.app
              </a>

              <a
                href="https://github.com/Bipin005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600"
              >
                <Globe size={18} />
                GitHub
              </a>

              <a
                href="/"
                className="flex items-center gap-3 text-gray-600 transition hover:text-blue-600"
              >
                <Globe size={18} />
                QRify Website
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} QRify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}