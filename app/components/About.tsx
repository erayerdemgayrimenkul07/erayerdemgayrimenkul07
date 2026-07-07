export default function About() {
  return (
    <section className="about">
      <div className="container about-wrapper">

        <div className="about-image">
          <img src="/images/about.jpg" alt="Eray Erdem Gayrimenkul" />
        </div>

        <div className="about-content">

          <span className="section-tag">
            HAKKIMIZDA
          </span>

          <h2>
            Antalya'da Güvenilir Gayrimenkul Danışmanlığı
          </h2>

          <p>
            Eray Erdem Gayrimenkul olarak Antalya'da konut, arsa,
            ticari gayrimenkul ve yatırım danışmanlığı alanlarında
            müşterilerimize profesyonel hizmet sunuyoruz.
          </p>

          <p>
            Doğru fiyat analizi, güvenilir satış süreci ve
            şeffaf danışmanlık anlayışımızla hayalinizdeki
            gayrimenkule güvenle ulaşmanızı sağlıyoruz.
          </p>

          <div className="about-list">
            <div>✔️ 20+ Yıllık Tecrübe</div>
            <div>✔️ Binlerce Mutlu Müşteri</div>
            <div>✔️ Bölge Uzmanlığı</div>
            <div>✔️ Kredi Danışmanlığı</div>
          </div>

        </div>

      </div>
    </section>
  );
}