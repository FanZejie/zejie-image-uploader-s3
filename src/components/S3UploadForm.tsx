"use client";

import { useState } from "react";

const S3UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
        setFile(files[0]);
      }
  };
  const handleSubmmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <>
      <h1>Upload Files to S3 Bucket</h1>
      <form onSubmit={handleSubmmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          onChange={handleFileChange}
        ></input>
        <button type="submit" disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </>
  );
};

export default S3UploadForm;
