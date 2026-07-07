import Navbar from "@/components/layout/Navbar";
import QRGenerator from "@/components/qr/QRGenerator";

export default function URLPage() {
  return (
    <>
      <Navbar />

      <main>
        <QRGenerator
          type="url"
          title="Generate URL QR Code"
          description="Generate beautiful QR codes instantly."
          placeholder="https://example.com"
        />
      </main>
    </>
  );
}