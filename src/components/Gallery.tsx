import { useEffect, useState } from "react";
import campingGroup from "@/assets/camping-group.jpg";
import campingNight from "@/assets/camping-night.jpg";
import campingTent from "@/assets/camping-tent.jpg";
import trekImage from "@/assets/trek.jpg";
import jeepMountain from "@/assets/jeep-mountain.jpg";
import { supabase } from "@/integrations/supabase/client";
import { PhotoUpload } from "./PhotoUpload";

const galleryImages = [
  { src: campingGroup, alt: "Group camping experience at Gudisa" },
  { src: campingNight, alt: "Night camping under the stars" },
  { src: campingTent, alt: "Comfortable camping tents" },
  { src: trekImage, alt: "Trekking adventure in the hills" },
  { src: jeepMountain, alt: "Off-road jeep experience" },
];

export const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{ src: string; alt: string }>>([]);

  useEffect(() => {
    fetchUploadedPhotos();
  }, []);

  const fetchUploadedPhotos = async () => {
    const { data, error } = await supabase.storage
      .from('gallery-photos')
      .list();

    if (error) {
      console.error('Error fetching photos:', error);
      return;
    }

    const photos = data.map((file) => {
      const { data: urlData } = supabase.storage
        .from('gallery-photos')
        .getPublicUrl(file.name);
      
      return {
        src: urlData.publicUrl,
        alt: `Gallery photo ${file.name}`
      };
    });

    setUploadedPhotos(photos);
  };

  const allImages = [...galleryImages, ...uploadedPhotos];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-foreground">
            Experience Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Moments captured from our adventures
          </p>
        </div>

        <PhotoUpload />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
