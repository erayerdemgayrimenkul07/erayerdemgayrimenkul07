import {
  Phone,
  Smartphone,
  MapPinned,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="iletisim">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-box">

            <div className="footer-icon">
              <Phone size={24} />
            </div>

            <div>
              <h4>EFKAN ERDEM</h4>

              <p>
                <a href="tel:+905051309509">
                  0505 130 9509
                </a>
              </p>

              <small>
                Satış ve gayrimenkul danışmanlığı
              </small>
            </div>

          </div>

          <div className="footer-box">

            <div className="footer-icon">
              <Smartphone size={24} />
            </div>

            <div>
              <h4>SUDE ŞİMŞEK</h4>

              <p>
                <a href="tel:+905010939008">
                  0501 093 9008
                </a>
              </p>

              <small>
                Bilgi ve randevu için bize ulaşabilirsiniz.
              </small>
            </div>

          </div>

          <div className="footer-box">

            <div className="footer-icon">
              <MapPinned size={24} />
            </div>

            <div>
              <h4>OFİS</h4>

              <p>
                Hüsnü Karakaş Mahallesi
              </p>

              <small>
                Hasan Polatkan Caddesi No:1
                <br />
                Kepez / Antalya
              </small>
            </div>

          </div>

        </div>

        <div className="copyright">
          © 2026 Eray Erdem Gayrimenkul | Yetki Belge No: 0704858
        </div>

      </div>
    </footer>
  );
}