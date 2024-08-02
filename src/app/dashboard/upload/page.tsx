import S3UploadForm from "@/components/S3UploadForm";



export default function Upload() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
       <S3UploadForm></S3UploadForm>
    </main>
  );
}
