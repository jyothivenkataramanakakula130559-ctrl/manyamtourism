import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const PhotoUpload = () => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery-photos')
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }
      }
      
      toast.success(`Successfully uploaded ${files.length} photo(s)!`);
      
      // Refresh the page to show new photos
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error) {
      console.error('Error uploading photos:', error);
      toast.error('Failed to upload photos. Please try again.');
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <label htmlFor="photo-upload" className="cursor-pointer">
        <Input
          id="photo-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          disabled={uploading}
          className="hidden"
        />
        <Button
          variant="default"
          size="lg"
          disabled={uploading}
          asChild
        >
          <span>
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-5 w-5" />
                Upload Photos
              </>
            )}
          </span>
        </Button>
      </label>
    </div>
  );
};
