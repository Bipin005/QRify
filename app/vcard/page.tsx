import Navbar from "@/components/layout/Navbar";
import VCardGenerator from "@/components/vcard/VCardGenerator";

export default function VCardPage() {
  return (
    <>
      <Navbar />

      <main>
        <VCardGenerator />
      </main>
    </>
  );
}