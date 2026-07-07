export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-wrapper">

        <div className="hero-left">

          <h1 className="hero-title">
            Güvenilir Hizmetin
            <br />
            <span>Doğru Adresi</span>
          </h1>

          <p className="hero-text">
            Şeffaf iletişim, doğru fiyat analizi ve profesyonel danışmanlık anlayışıyla Antalya'da güvenilir gayrimenkul çözümleri sunuyoruz.
          </p>

          <div className="hero-buttons">
            <a href="/ilanlar" className="btn btn-gold">
              PORTFÖYÜ İNCELE
            </a>

            <a href="#iletisim" className="btn btn-dark">
              BİZE ULAŞIN
            </a>
          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}