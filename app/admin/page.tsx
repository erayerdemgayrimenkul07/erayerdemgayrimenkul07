import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";
import AddListingForm from "@/app/components/AddListingForm";
import ListingList from "@/app/components/ListingList";
import Listings from "@/app/components/Listings";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Admin Paneli</h1>

      <p>
        Hoş geldin: {user.email}
      </p>

      <hr />

      <section>
        <h2>İlan Yönetimi</h2>

        <button>
          Yeni İlan Ekle
        </button>

        <button>
          İlanları Görüntüle
        </button>
      </section>
<AddListingForm />
<ListingList />


      <br />

      <LogoutButton />
    </main>
  );
}
