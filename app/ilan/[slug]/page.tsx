import { notFound } from "next/navigation";
import { properties } from "../../data/properties";
import PropertyGallery from "../../components/PropertyGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropertyDetail({ params }: Props) {
  const { slug } = await params;

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="property-detail">

      <div className="container">

        <div className="property-gallery">
<PropertyGallery
  images={property.images}
  title={property.title}
/>
        </div>

        <div className="property-header">

          <div>

            <span className="detail-badge">
              SATILIK
            </span>

            <h1>{property.title}</h1>

            <p className="detail-location">
              📍 {property.location}
            </p>

          </div>

          <div className="detail-price">
            {property.price}
          </div>

        </div>

        <div className="detail-grid">

          <div className="detail-item">
            📐 {property.area}
          </div>

          <div className="detail-item">
            🛏️ {property.room}
          </div>

          <div className="detail-item">
            🚿 {property.bath}
          </div>

          <div className="detail-item">
            🏢 {property.floor}
          </div>

        </div>

        <div className="detail-description">

          <h2>Açıklama</h2>

          <p>{property.description}</p>

        </div>

        <div className="detail-buttons">

          <a href="tel:05051309509" className="btn btn-gold">
            📞 Hemen Ara
          </a>

          <a
            href="https://wa.me/905051309509"
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </main>
  );
}