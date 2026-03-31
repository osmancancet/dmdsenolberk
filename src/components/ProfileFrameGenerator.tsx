"use client";

import { useRef, useState, useCallback, useEffect } from "react";

type FrameType = "ablasi" | "abisi";

function drawCar(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, color: string) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  // Gövde
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-20, -8, 40, 14, 4);
  ctx.fill();
  // Üst
  ctx.beginPath();
  ctx.roundRect(-12, -18, 24, 12, 3);
  ctx.fill();
  // Camlar
  ctx.fillStyle = "#a8d8ea";
  ctx.fillRect(-10, -16, 9, 8);
  ctx.fillRect(1, -16, 9, 8);
  // Tekerlekler
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(-12, 6, 5, 0, Math.PI * 2);
  ctx.arc(12, 6, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#999";
  ctx.beginPath();
  ctx.arc(-12, 6, 2, 0, Math.PI * 2);
  ctx.arc(12, 6, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export default function ProfileFrameGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [frameType, setFrameType] = useState<FrameType>("ablasi");

  const drawFrame = useCallback(
    (ctx: CanvasRenderingContext2D, size: number, frameLabel: string) => {
      const center = size / 2;
      const outerRadius = size / 2 - 8;
      const bandWidth = size * 0.11;
      const innerRadius = outerRadius - bandWidth;
      const photoRadius = innerRadius - 4;

      // Arka plan şeffaf
      ctx.clearRect(0, 0, size, size);

      // Krem dış daire
      ctx.beginPath();
      ctx.arc(center, center, outerRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#F5E6C8";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#D4A853";
      ctx.stroke();

      // Koyu kırmızı iç çerçeve
      ctx.beginPath();
      ctx.arc(center, center, innerRadius + 2, 0, Math.PI * 2);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#8B2500";
      ctx.stroke();

      // Fotoğraf alanı
      ctx.save();
      ctx.beginPath();
      ctx.arc(center, center, photoRadius, 0, Math.PI * 2);
      ctx.clip();

      if (userImage) {
        const imgAspect = userImage.width / userImage.height;
        let drawW, drawH, drawX, drawY;
        if (imgAspect > 1) {
          drawH = photoRadius * 2;
          drawW = drawH * imgAspect;
          drawX = center - drawW / 2;
          drawY = center - photoRadius;
        } else {
          drawW = photoRadius * 2;
          drawH = drawW / imgAspect;
          drawX = center - photoRadius;
          drawY = center - drawH / 2;
        }
        ctx.drawImage(userImage, drawX, drawY, drawW, drawH);
      } else {
        ctx.fillStyle = "#e8dcc8";
        ctx.fillRect(0, 0, size, size);
        ctx.fillStyle = "#999";
        ctx.font = `bold ${size * 0.04}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Fotoğrafını Yükle", center, center);
      }
      ctx.restore();

      // Üst yazı
      const topText = "DMD HASTASI ŞENOL BERK";
      ctx.save();
      ctx.font = `900 ${size * 0.044}px Arial, sans-serif`;
      ctx.fillStyle = "#1a1a1a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const textRadius = outerRadius - bandWidth / 2;
      const startAngle = -Math.PI * 0.80;
      const endAngle = -Math.PI * 0.20;
      const angleRange = endAngle - startAngle;
      for (let i = 0; i < topText.length; i++) {
        const angle = startAngle + (angleRange * (i + 0.5)) / topText.length;
        const tx = center + Math.cos(angle) * textRadius;
        const ty = center + Math.sin(angle) * textRadius;
        ctx.save();
        ctx.translate(tx, ty);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(topText[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // Alt yazı
      ctx.save();
      ctx.font = `900 ${size * 0.050}px Arial, sans-serif`;
      ctx.fillStyle = "#1a1a1a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const bStart = Math.PI * 0.77;
      const bEnd = Math.PI * 0.23;
      const bRange = bStart - bEnd;
      for (let i = 0; i < frameLabel.length; i++) {
        const angle = bStart - (bRange * (i + 0.5)) / frameLabel.length;
        const tx = center + Math.cos(angle) * textRadius;
        const ty = center + Math.sin(angle) * textRadius;
        ctx.save();
        ctx.translate(tx, ty);
        ctx.rotate(angle - Math.PI / 2);
        ctx.fillText(frameLabel[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // Sol tarafta tek araba (referans görseldeki güneş konumunda)
      drawCar(ctx, center - outerRadius * 0.85, center * 0.95, 2.0, "#C62828");
    },
    [userImage]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const size = 800;
    canvas.width = size;
    canvas.height = size;
    const label = frameType === "ablasi" ? "GÖNÜLLÜ ABLASI" : "GÖNÜLLÜ ABİSİ";
    drawFrame(ctx, size, label);
  }, [frameType, drawFrame]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => setUserImage(img);
    img.src = URL.createObjectURL(file);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `senolberk-gonullu-${frameType}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setFrameType("ablasi")}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            frameType === "ablasi"
              ? "bg-pink-500 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Gönüllü Ablası
        </button>
        <button
          onClick={() => setFrameType("abisi")}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            frameType === "abisi"
              ? "bg-blue-500 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Gönüllü Abisi
        </button>
      </div>

      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200"
          onClick={() => fileInputRef.current?.click()}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-primary hover:text-primary transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Fotoğraf Yükle
        </button>
        {userImage && (
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            İndir
          </button>
        )}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-sm text-amber-800">
          Fotoğrafını yükle, çerçeveyi seç ve indir! Sosyal medya profil
          fotoğrafın olarak kullanarak Şenol Berk&apos;e destek ol.
        </p>
      </div>
    </div>
  );
}
