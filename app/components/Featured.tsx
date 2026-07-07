"use client";

import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "./PropertyCard";

export default function Featured() {
  const [search, setSearch] = useState("");
  const [district, setDistrict] = useState("Tümü");
  const [room, setRoom] = useState("Tümü");
  const [priceRange, setPriceRange] = useState("Tümü");

  return (
    <section className="featured">
      <div className="container">

        <span className="section-tag">
          PORTFÖYLERİMİZ
        </span>

        <div className="featured-title">
          <h2>Öne Çıkan İlanlar</h2>

<button className="all-property-btn">
  Toplam {properties.length} İlan
</button>
        </div>

        <input
          type="text"
          placeholder="İlçe, mahalle veya ilan ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="filter-bar">

          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="Tümü">📍 Tüm İlçeler</option>
            <option value="Kepez">Kepez</option>
            <option value="Muratpaşa">Muratpaşa</option>
            <option value="Konyaaltı">Konyaaltı</option>
            <option value="Döşemealtı">Döşemealtı</option>
          </select>

          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="Tümü">🏠 Tüm Oda Tipleri</option>
            <option value="1+1">1+1</option>
            <option value="2+1">2+1</option>
            <option value="3+1">3+1</option>
            <option value="5+1">5+1</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="Tümü">💰 Tüm Fiyatlar</option>
            <option value="0-5000000">0 ₺ - 5.000.000 ₺</option>
            <option value="5000000-10000000">5.000.001 ₺ - 10.000.000 ₺</option>
            <option value="10000000+">10.000.000 ₺ ve Üzeri</option>
          </select>

        </div>

        <div className="featured-grid">
          {properties
            .filter((property) => {
              const matchesSearch =
                property.title.toLowerCase().includes(search.toLowerCase()) ||
                property.location.toLowerCase().includes(search.toLowerCase());

              const matchesDistrict =
                district === "Tümü" ||
                property.location.includes(district);

              const matchesRoom =
                room === "Tümü" ||
                property.room === room;

              const numericPrice = Number(
                property.price.replace(/[^\d]/g, "")
              );

              let matchesPrice = true;

              if (priceRange === "0-5000000") {
                matchesPrice = numericPrice <= 5000000;
              }

              if (priceRange === "5000000-10000000") {
                matchesPrice =
                  numericPrice > 5000000 &&
                  numericPrice <= 10000000;
              }

              if (priceRange === "10000000+") {
                matchesPrice = numericPrice > 10000000;
              }

              return (
                matchesSearch &&
                matchesDistrict &&
                matchesRoom &&
                matchesPrice
              );
            })
            .map((property) => (
              <PropertyCard
                key={property.slug}
                property={property}
              />
            ))}
        </div>

      </div>
    </section>
  );
}



