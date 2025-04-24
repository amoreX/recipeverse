import { Camera } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
interface PictureUploadProps {
  setAvatar: (value: string) => void;
}
export function PictureUpload({ setAvatar }: PictureUploadProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [picture, setPicture] = useState<any>();
  const [uploadStatus, setUploadStatus] = useState<string>(""); // Add state for upload status
  useEffect(() => {
    console.log(picture);
  }, [picture]);
  const handlePicture = (e: any) => {
    const gettingUrl = async (e: any) => {
      const file = e.target.files?.[0];
      const data = new FormData();
      data.set("file", file);
      setUploadStatus("Uploading..."); // Set status to "Uploading..."
      try {
        const uploadRequest = await fetch("/api/picUpload", {
          method: "POST",
          body: data,
        });
        const signedUrl = await uploadRequest.json();
        console.log(signedUrl);
        setAvatar(signedUrl);
        setUploadStatus("Uploaded!"); // Set status to "Uploaded!" on success
      } catch (err) {
        console.error("Upload failed:", err);
        setUploadStatus("Upload failed"); // Set status to "Upload failed" on error
      }
    };
    if (e) {
      gettingUrl(e);
    }
  };
  return (
    <div className="flex flex-col items-center mt-4">
      <button
        type="button"
        className="flex items-center gap-2 rounded-lg border border-[#E8E2D9] bg-[#F8F5F0] px-4 py-2 text-sm font-medium text-[#507c49] shadow-sm hover:bg-[#E8E2D9]"
        onClick={() => fileInputRef.current?.click()} // Trigger file input on button click
      >
        <Camera />
        Upload Photo
      </button>
      <input
        ref={fileInputRef}
        type="file"
        className="absolute right-[9999px]" // Hide the default file input
        onChange={(e) => handlePicture(e)}
      />
      {uploadStatus && ( // Display upload status if it exists
        <p className="mt-2 text-sm text-gray-600">{uploadStatus}</p>
      )}
    </div>
  );
}
