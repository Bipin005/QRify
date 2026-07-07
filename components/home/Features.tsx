import {
  ShieldCheck,
  Download,
  Palette,
  Smartphone,
  Zap,
  QrCode,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Instant Generation",
    description:
      "Generate professional QR Codes instantly without waiting.",
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: "Custom Design",
    description:
      "Customize colors, size and style to match your brand.",
  },
  {
    icon: <Download className="h-8 w-8 text-blue-600" />,
    title: "PNG & SVG Download",
    description:
      "Download high-quality QR Codes in PNG or SVG format.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
    title: "Mobile Friendly",
    description:
      "Create QR Codes easily from desktop, tablet or mobile.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Privacy First",
    description:
      "Your data stays private. We don't store your QR content.",
  },
  {
    icon: <QrCode className="h-8 w-8 text-blue-600" />,
    title: "Multiple QR Types",
    description:
      "Support for URL, Text, WiFi, Email, Phone, SMS, vCard and more.",
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose QRify?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to create beautiful, fast and
            professional QR Codes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5">{feature.icon}</div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}