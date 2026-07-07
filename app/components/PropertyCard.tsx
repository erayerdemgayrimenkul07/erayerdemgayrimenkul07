import Link from "next/link";

type Property = {
  slug: string;
  title: string;
  price: string;
  location: string;
  images: string[];
  area: string;
  room: string;
  floor: string;
};

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.images[0]} alt={property.title} />

        <span className="badge">
          SATILIK
        </span>
      </div>

      <div className="property-content">

        <div className="price">
          {property.price}
        </div>

        <h3>
          {property.title}
        </h3>

        <p>
          {property.location}
        </p>

        <div className="property-info">
          <span>📐 {property.area}</span>
          <span>🛏️ {property.room}</span>
          <span>🏢 {property.floor}</span>
        </div>

        <Link
          href={`/ilan/${property.slug}`}
          className="property-btn"
        >
          Detayları İncele
        </Link>

      </div>
    </div>
  );
}
