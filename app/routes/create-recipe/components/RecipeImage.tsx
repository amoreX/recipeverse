import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";

interface RecipeImageProps {
  setRecipeUrl: (value: string) => void;
}

export function RecipeImage({ setRecipeUrl }: RecipeImageProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>(""); // ✅ status state
  const [imagePreview, setImagePreview] = useState<string | null>(null); // ✅ optional preview

  const handlePicture = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.set("file", file);

    setUploadStatus("Uploading...");

    try {
      const uploadRequest = await fetch("/api/picUpload", {
        method: "POST",
        body: data,
      });

      const signedUrl = await uploadRequest.json();
      console.log(signedUrl);
      setRecipeUrl(signedUrl); // ✅ send URL to parent
      setImagePreview(URL.createObjectURL(file)); // ✅ for preview
      setUploadStatus("Uploaded!");
    } catch (err) {
      console.error("Upload failed:", err);
      setUploadStatus("Upload failed");
    }
  };

  return (
    <Card className="border-[#E8E2D9]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-lg font-semibold text-[#2D2A26]">
          Recipe Image
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-[#F8F5F0] cursor-pointer"
            onClick={() => fileInputRef.current?.click()} // ✅ trigger click
          >
            {imagePreview ? ( // ✅ show preview if available
              <img
                src={imagePreview}
                alt="Recipe preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium text-[#2D2A26]">
                  Upload Recipe Image
                </p>
                <p className="text-xs text-muted-foreground">
                  Drag and drop or click to browse
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handlePicture} // ✅ handle upload
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Recommended size: 1200 x 800 pixels (3:2 ratio)
          </p>
          {uploadStatus && (
            <p className="text-sm text-gray-600">{uploadStatus}</p> // ✅ status display
          )}
        </div>
      </CardContent>
    </Card>
  );
}
