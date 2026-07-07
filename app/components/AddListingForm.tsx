"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function AddListingForm() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [fiyat, setFiyat] = useState("");
  const [konum, setKonum] = useState("");
  const [ilce, setIlce] = useState("");
  const [mahalle, setMahalle] = useState("");
  const [durum, setDurum] = useState("Satılık");
  const [oda, setOda] = useState("");
  const [metrekare, setMetrekare] = useState("");
  const [banyo, setBanyo] = useState("");
  const [kat, setKat] = useState("");
  const [binaYasi, setBinaYasi] = useState("");
  const [isitma, setIsitma] = useState("");
  const [esyali, setEsyali] = useState(false);
  const [oneCikan, setOneCikan] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [yetkiNo, setYetkiNo] = useState("");
  const [ilanNo, setIlanNo] = useState("");
  const [resim, setResim] = useState<File | null>(null);

  const [message, setMessage] = useState("");

  async function addListing(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Giriş bulunamadı.");
      return;
    }

    let imageUrl = "";

    if (resim) {
      const fileName = `${Date.now()}-${resim.name}`;

      const { error: uploadError } = await supabase.storage
        .from("ilan-resimleri")
        .upload(fileName, resim);

      if (uploadError) {
        setMessage(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("ilan-resimleri")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const slug = baslik
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const { error } = await supabase.from("properties").insert({
      title: baslik,
      description: aciklama,
      price: fiyat,
      location: konum,
      area: metrekare,
      room: oda,
      bath: banyo,
      floor: kat,
      images: imageUrl ? [imageUrl] : [],
      slug,

      status: durum,
      district: ilce,
      neighborhood: mahalle,
      building_age: binaYasi,
      heating: isitma,
      furnished: esyali,
      featured: oneCikan,
      video_url: videoUrl,
      authority_no: yetkiNo,
      listing_no: ilanNo,

      ekleyen: user.email,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("İlan başarıyla eklendi.");

    setBaslik("");
    setAciklama("");
    setFiyat("");
    setKonum("");
    setIlce("");
    setMahalle("");
    setDurum("Satılık");
    setOda("");
    setMetrekare("");
    setBanyo("");
    setKat("");
    setBinaYasi("");
    setIsitma("");
    setVideoUrl("");
    setYetkiNo("");
    setIlanNo("");
    setEsyali(false);
    setOneCikan(false);
    setResim(null);
  }

  return (
    <form onSubmit={addListing}>
      <h2>Yeni İlan Ekle</h2>

      <input
        placeholder="Başlık"
        value={baslik}
        onChange={(e) => setBaslik(e.target.value)}
      />

      <textarea
        placeholder="Açıklama"
        value={aciklama}
        onChange={(e) => setAciklama(e.target.value)}
      />

      <input
        placeholder="Fiyat"
        value={fiyat}
        onChange={(e) => setFiyat(e.target.value)}
      />

      <input
        placeholder="Konum"
        value={konum}
        onChange={(e) => setKonum(e.target.value)}
      />

      <input
        placeholder="İlçe"
        value={ilce}
        onChange={(e) => setIlce(e.target.value)}
      />

      <input
        placeholder="Mahalle"
        value={mahalle}
        onChange={(e) => setMahalle(e.target.value)}
      />

      <select
        value={durum}
        onChange={(e) => setDurum(e.target.value)}
      >
        <option value="Satılık">Satılık</option>
        <option value="Kiralık">Kiralık</option>
      </select>

      <input
        placeholder="Oda"
        value={oda}
        onChange={(e) => setOda(e.target.value)}
      />

      <input
        placeholder="Metrekare"
        value={metrekare}
        onChange={(e) => setMetrekare(e.target.value)}
      />

      <input
        placeholder="Banyo Sayısı"
        value={banyo}
        onChange={(e) => setBanyo(e.target.value)}
      />

      <input
        placeholder="Kat"
        value={kat}
        onChange={(e) => setKat(e.target.value)}
      />

      <input
        placeholder="Bina Yaşı"
        value={binaYasi}
        onChange={(e) => setBinaYasi(e.target.value)}
      />

      <input
        placeholder="Isıtma"
        value={isitma}
        onChange={(e) => setIsitma(e.target.value)}
      />

      <input
        placeholder="Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />

      <input
        placeholder="Yetki No"
        value={yetkiNo}
        onChange={(e) => setYetkiNo(e.target.value)}
      />

      <input
        placeholder="İlan No"
        value={ilanNo}
        onChange={(e) => setIlanNo(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={esyali}
          onChange={(e) => setEsyali(e.target.checked)}
        />
        Eşyalı
      </label>

      <label>
        <input
          type="checkbox"
          checked={oneCikan}
          onChange={(e) => setOneCikan(e.target.checked)}
        />
        Öne Çıkan
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setResim(e.target.files?.[0] || null)}
      />

      <button type="submit">
        İlanı Kaydet
      </button>

      <p>{message}</p>
    </form>
  );
}