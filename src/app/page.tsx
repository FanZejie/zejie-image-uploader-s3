import S3UploadForm from "@/components/S3UploadForm";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        整个咔咔炫酷的主页
        带个login按钮
        <Link href={'/auth/login'}>login</Link>
    </main>
  );
}
