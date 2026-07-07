import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { Bed, MapPin, Ruler, ArrowRight } from "lucide-react";
import "./Listings.css";


export default async function Listings() {
  const supabase = await createClient();

  const { data: ilanlar } = await supabase
    .from("ilanlar")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (!ilanlar || ilanlar.length === 0) {
    return (
      <section className="listings-section">
        <h2 className="section-title">İlanlarımız</h2>
        <p className="empty-list">
          Henüz yayında ilan bulunmamaktadır.
        </p>
      </section>
    );
  }

  return (
    <section className="listings-section">

      <h2 className="section-title">
        Güncel Portföyümüz
      </h2>

      <div className="listing-grid">

        {ilanlar.map((ilan) => (

          <article
            key={ilan.id}
            className="listing-card"
          >

            <div className="listing-image">

              {ilan.resim && (
                <Image
                  src={ilan.resim}
                  alt={ilan.baslik}
                  width={600}
                  height={400}
                />
              )}

              <div className="listing-price">
                ₺ {Number(ilan.fiyat).toLocaleString("tr-TR")}
              </div>

            </div>

            <div className="listing-content">

              <h3>
                {ilan.baslik}
              </h3>

              <div className="listing-location">

                <MapPin size={18} />

                <span>
                  {ilan.konum}
                </span>

              </div>

              <div className="listing-info">

                <span>
                  <Bed size={18} />
                  {ilan.oda}
                </span>

                <span>
                  <Ruler size={18} />
                  {ilan.metrekare} m²
                </span>

              </div>

              <Link
                href={`/ilan/${ilan.id}`}
                className="listing-button"
              >
                Detayları İncele

                <ArrowRight size={18} />

              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}