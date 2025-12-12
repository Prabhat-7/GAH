import ImageUploader from "@/components/admin/ImageUploader";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await auth();
  if (!session) redirect("/signIn");
  if (!(session.user.role == "admin")) redirect("/signIn");
  return (
    <div>
      <ImageUploader />
    </div>
  );
}
