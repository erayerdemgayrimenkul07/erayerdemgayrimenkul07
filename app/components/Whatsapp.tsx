import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/905051309509"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}