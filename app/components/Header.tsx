import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">

        <Link href="/" className="logo">
<Image
  src="/images/logo.png"
  alt="Eray Erdem Gayrimenkul"
  width={220}
  height={60}
  priority
  className="logo-img"
/>
        </Link>

        <nav className="nav">
          <Link href="/">Ana Sayfa</Link>

          <Link href="/ilanlar">
            İlanlarımız
          </Link>

          <Link href="#kurumsal">
            Kurumsal
          </Link>

          <Link href="#hizmetler">
            Hizmetlerimiz
          </Link>

          <Link href="#iletisim">
            İletişim
          </Link>
        </nav>

        <div className="phone-box">

          <a
            href="tel:+905051309509"
            className="phone-card"
          >
            <span className="phone-name">
              EFKAN ERDEM
            </span>

            <span className="phone-number">
              <span className="phone-line"></span>
              0505 130 9509
            </span>
          </a>

          <a
            href="tel:+905010939008"
            className="phone-card"
          >
            <span className="phone-name">
              SUDE ŞİMŞEK
            </span>

            <span className="phone-number">
              <span className="phone-line"></span>
              0501 093 9008
            </span>
          </a>

        </div>

      </div>
    </header>
  );
}