"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useParams, useRouter } from "next/navigation";

export default function EditPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getProperty() {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error.message);
        return;
      }

      setTitle(data.title || "");
      setDescription(data.description || "");
      setPrice(data.price || "");
      setLocation(data.location || "");
      setRoom(data.room || "");
      setArea(data.area || "");
    }

    if (id) {
      getProperty();
    }
  }, [id]);

  async function updateProperty(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await supabase
      .from("properties")
      .update({
        title,
        description,
        price,
        location,
        room,
        area,
      })
      .eq("id", id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("İlan güncellendi.");

    setTimeout(() => {
      router.push("/admin");
      router.refresh();
    }, 1000);
  }

  return (
    <main>
      <h1>İlan Düzenle</h1>

      <form onSubmit={updateProperty}>
        <input
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Açıklama"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Fiyat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Konum"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="Oda"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <input
          placeholder="Metrekare"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />

        <button type="submit">
          Güncelle
        </button>
      </form>

      <p>{message}</p>
    </main>
  );
}