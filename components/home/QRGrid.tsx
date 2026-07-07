import {
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Type,
  UserRound,
  Wifi,
} from "lucide-react";

import QRTypeCard from "./QRTypeCard";

const qrTypes = [
  {
    title: "URL",
    description: "Generate QR Codes for websites and links.",
    href: "/url",
    icon: <Globe size={28} />,
  },
  {
    title: "Text",
    description: "Convert plain text into QR Codes.",
    href: "/text",
    icon: <Type size={28} />,
  },
  {
    title: "WiFi",
    description: "Connect to WiFi instantly with one scan.",
    href: "/wifi",
    icon: <Wifi size={28} />,
  },
  {
    title: "Email",
    description: "Create QR Codes for email addresses.",
    href: "/email",
    icon: <Mail size={28} />,
  },
  {
    title: "Phone",
    description: "Call instantly after scanning.",
    href: "/phone",
    icon: <Phone size={28} />,
  },
  {
    title: "SMS",
    description: "Generate SMS QR Codes.",
    href: "/sms",
    icon: <MessageSquare size={28} />,
  },
  {
    title: "vCard",
    description: "Create a digital contact card QR Code.",
    href: "/vcard",
    icon: <UserRound size={28} />,
  },
];

export default function QRGrid() {
  return (
    <section className="container-custom py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Choose Your QR Type
        </h2>

        <p className="mt-4 text-gray-600">
          Generate professional QR codes in seconds.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {qrTypes.map((item) => (
          <QRTypeCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}