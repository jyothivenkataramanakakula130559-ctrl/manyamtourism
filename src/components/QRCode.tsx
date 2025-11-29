import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";
import { Card, CardContent } from "@/components/ui/card";

export const QRCode = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const url = window.location.origin;
      QRCodeLib.toCanvas(
        canvasRef.current,
        url,
        {
          width: 200,
          margin: 2,
          color: {
            dark: "#047857", // primary color
            light: "#FFFFFF",
          },
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, []);

  return (
    <Card className="border-border/50 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6 text-center">
        <h3 className="font-semibold mb-4 text-foreground">Scan to Visit</h3>
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="rounded-lg" />
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Scan this QR code to visit our website
        </p>
      </CardContent>
    </Card>
  );
};
