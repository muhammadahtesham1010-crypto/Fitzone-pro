"use client";

import { Camera, Loader2 } from "lucide-react";
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/lib/uploadthing";
import { toast } from "sonner";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

interface ProfileUploadProps {
  onUploadComplete: (url: string) => void;
}

export function ProfileUpload({ onUploadComplete }: ProfileUploadProps) {
  const { startUpload, isUploading } = useUploadThing("avatarUploader", {
    onClientUploadComplete: (res) => {
      if (res?.[0]?.url) onUploadComplete(res[0].url);
    },
    onUploadError: () => {
      toast.error("Failed to upload image");
    },
  });

  return (
    <button
      type="button"
      onClick={() => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = () => {
          const file = input.files?.[0];
          if (file) startUpload([file]);
        };
        input.click();
      }}
      disabled={isUploading}
      className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-2.5 text-white shadow-lg hover:bg-emerald-600 disabled:opacity-50"
    >
      {isUploading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Camera className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
