import {
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Type,
  Wifi,
} from "lucide-react";

export const qrTypes = [
  {
    title: "URL",
    description: "Generate QR codes for websites and links.",
    href: "/url",
    icon: Globe,
  },
  {
    title: "Text",
    description: "Convert plain text into QR codes.",
    href: "/text",
    icon: Type,
  },
  {
    title: "WiFi",
    description: "Share WiFi instantly with a QR code.",
    href: "/wifi",
    icon: Wifi,
  },
  {
    title: "Email",
    description: "Create QR codes for email addresses.",
    href: "/email",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Create QR codes for phone numbers.",
    href: "/phone",
    icon: Phone,
  },
  {
    title: "SMS",
    description: "Generate QR codes for SMS messages.",
    href: "/sms",
    icon: MessageSquare,
  },
];