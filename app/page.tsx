import Image from "next/image";
import ContactHeader from "./components/Header";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
   <>
   <ContactHeader/>
   <GetInTouch/>
   <FAQSection/>
   <Footer/>
   </>
  );
}
