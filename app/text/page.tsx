import Navbar from "@/components/layout/Navbar";
import QRGenerator from "@/components/qr/QRGenerator";

export default function TextPage() {
  return (
    <>
      <Navbar />

      <main>
        <QRGenerator
          type="text"
          title="Generate Text QR Code"
          description="Generate QR codes from plain text instantly."
          placeholder="Enter your text..."
        />
      </main>
    </>
  );
}