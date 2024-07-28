import { NextResponse } from "next/server";
import { S3Client,S3ClientConfig, PutObjectCommand } from "@aws-sdk/client-s3";

// 确保环境变量不为 undefined
const region = process.env.NEXT_PUBLIC_AWS_S3_REGION as string;
const accessKeyId = process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY as string;
const bucketName = process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME as string;

const s3Config: S3ClientConfig = {
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
};

const s3Client = new S3Client(s3Config);

async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: file,
    ContentType: "image/jpg",
  };
  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);
    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}