import {
  Home,
  KeyRound,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function Services() {
  return (
    <section className="services" id="hizmetler">
      <div className="container">

        <span className="section-tag">
          HİZMETLERİMİZ
        </span>

        <h2 className="services-title">
          Size Nasıl Yardımcı Olabiliriz?
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <Home size={32} />
            </div>

            <h3>Satılık Gayrimenkuller</h3>

            <p>
              Antalya'nın seçkin bölgelerinde satılık daire, villa,
              arsa ve ticari gayrimenkuller.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">
              <KeyRound size={32} />
            </div>

            <h3>Kiralık Gayrimenkuller</h3>

            <p>
              Konut ve ticari taşınmazlarda ihtiyaçlarınıza uygun
              kiralık seçenekler sunuyoruz.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">
              <TrendingUp size={32} />
            </div>

            <h3>Yatırım Danışmanlığı</h3>

            <p>
              Bölgesel analizlerle en doğru yatırım fırsatlarını
              birlikte değerlendiriyoruz.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">
              <Handshake size={32} />
            </div>

            <h3>Profesyonel Danışmanlık</h3>

            <p>
              Tapu, ekspertiz ve satış sürecinin her aşamasında
              yanınızdayız.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}