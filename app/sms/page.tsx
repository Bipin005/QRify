import Navbar from "@/components/layout/Navbar";
import SMSGenerator from "@/components/sms/SMSGenerator";

export default function SMSPage() {
  return (
    <>
      <Navbar />

      <main>
        <SMSGenerator />
      </main>
    </>
  );
}