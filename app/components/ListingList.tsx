"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

type Property = {
  id: string;
  title: string;
  price: string;
  location: string;
  images: string[];
  created_at: string;
  slug: string;
};

export default function ListingList() {
  const [properties, setProperties] = useState<Property[]>([]);

  async function getProperties() {
    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error && data) {
      setProperties(data);
    }
  }

  useEffect(() => {
    getProperties();
  }, []);

  async function deleteProperty(id: string) {
    const confirmDelete = confirm(
      "Bu ilan silinsin mi?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("properties")
      .delete()
      .eq("id", id);

    if (!error) {
      setProperties((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  }

  return (
    <section>

      <h2>Mevcut İlanlar</h2>

      {properties.length === 0 && (
        <p>Henüz ilan bulunmuyor.</p>
      )}

      {properties.map((property) => (

        <div key={property.id}>

          {property.images?.[0] && (
            <img
              src={property.images[0]}
              alt={property.title}
              width={220}
            />
          )}

          <h3>{property.title}</h3>

          <p>
            <strong>Fiyat:</strong> {property.price}
          </p>

          <p>
            <strong>Konum:</strong> {property.location}
          </p>

          <small>
            {new Date(property.created_at).toLocaleDateString("tr-TR")}
          </small>

          <br />
          <br />

          <button
            onClick={() => deleteProperty(property.id)}
          >
            Sil
          </button>

          {" "}

          <Link href={`/admin/edit/${property.id}`}>
            Düzenle
          </Link>

          <hr />

        </div>

      ))}

    </section>
  );
}