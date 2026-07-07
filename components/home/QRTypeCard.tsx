import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QRTypeCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function QRTypeCard({
  title,
  description,
  href,
  icon,
}: QRTypeCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-medium text-blue-600">
        Generate
        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}