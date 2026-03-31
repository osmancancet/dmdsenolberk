"use client";

import { useRef, useState, useCallback, useEffect } from "react";

type FrameType = "ablasi" | "abisi";

function drawCarEmoji(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  emoji: string
) {
  ctx.save();
  ctx.font = `${size}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, x, y);
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
      const outerRadius = size / 2 - 10;
      const bandWidth = size * 0.12;
      const innerRadius = outerRadius - bandWidth;
      const photoRadius = innerRadius - 8;

      // Arka plan beyaz
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);

      // Dış kesikli çember
      ctx.save();
      ctx.setLineDash([12, 8]);
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#1a1a1a";
      ctx.beginPath();
      ctx.arc(center, center, outerRadius + 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Sarı bant (dış halka)
      ctx.beginPath();
      ctx.arc(center, center, outerRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#F5A623";
      ctx.fill();

      // İç turuncu çerçeve
      ctx.beginPath();
      ctx.arc(center, center, innerRadius + 4, 0, Math.PI * 2);
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#D4622B";
      ctx.stroke();

      // Kullanıcı fotoğrafı dairesel clip
      ctx.save();
      ctx.beginPath();
      ctx.arc(center, center, photoRadius, 0, Math.PI * 2);
      ctx.clip();

      if (userImage) {
        // Fotoğrafı ortala ve kırp
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
        // Placeholder - açık mavi gökyüzü + yeşil alan
        const grad = ctx.createLinearGradient(0, center - photoRadius, 0, center + photoRadius);
        grad.addColorStop(0, "#87CEEB");
        grad.addColorStop(0.5, "#87CEEB");
        grad.addColorStop(0.55, "#4CAF50");
        grad.addColorStop(1, "#388E3C");
        ctx.fillStyle = grad;
        ctx.fillRect(center - photoRadius, center - photoRadius, photoRadius * 2, photoRadius * 2);

        // Bulut
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(center - 20, center - photoRadius * 0.3, 25, 0, Math.PI * 2);
        ctx.arc(center + 10, center - photoRadius * 0.35, 30, 0, Math.PI * 2);
        ctx.arc(center + 35, center - photoRadius * 0.3, 22, 0, Math.PI * 2);
        ctx.fill();

        // "Fotoğrafını Yükle" metni
        ctx.fillStyle = "#555";
        ctx.font = `bold ${size * 0.04}px Arial`;
        ctx.textAlign = "center";
        ctx.fillText("Fotoğrafını Yükle", center, center + 10);
      }
      ctx.restore();

      // Üst yazı: "DMD HASTASI ŞENOL BERK"
      const topText = "DMD HASTASI ŞENOL BERK";
      ctx.save();
      ctx.font = `900 ${size * 0.048}px Arial, sans-serif`;
      ctx.fillStyle = "#1a1a1a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textRadius = outerRadius - bandWidth / 2;
      const startAngle = -Math.PI * 0.82;
      const endAngle = -Math.PI * 0.18;
      const angleRange = endAngle - startAngle;

      for (let i = 0; i < topText.length; i++) {
        const angle = startAngle + (angleRange * (i + 0.5)) / topText.length;
        const x = center + Math.cos(angle) * textRadius;
        const y = center + Math.sin(angle) * textRadius;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(topText[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // Alt yazı: "GÖNÜLLÜ ABLASI" veya "GÖNÜLLÜ ABİSİ"
      const bottomText = frameLabel;
      ctx.save();
      ctx.font = `900 ${size * 0.055}px Arial, sans-serif`;
      ctx.fillStyle = "#1a1a1a";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const bottomStartAngle = Math.PI * 0.78;
      const bottomEndAngle = Math.PI * 0.22;
      const bottomAngleRange = bottomStartAngle - bottomEndAngle;

      for (let i = 0; i < bottomText.length; i++) {
        const angle =
          bottomStartAngle -
          (bottomAngleRange * (i + 0.5)) / bottomText.length;
        const x = center + Math.cos(angle) * textRadius;
        const y = center + Math.sin(angle) * textRadius;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle - Math.PI / 2);
        ctx.fillText(bottomText[i], 0, 0);
        ctx.restore();
      }
      ctx.restore();

      // Sol ve sağ araba emojileri
      const carRadius = outerRadius - bandWidth / 2;
      const leftAngle = Math.PI * 0.88;
      const rightAngle = Math.PI * 0.12;
      const emojiSize = size * 0.07;
      drawCarEmoji(
        ctx,
        center + Math.cos(leftAngle) * carRadius,
        center + Math.sin(leftAngle) * carRadius,
        emojiSize,
        "\uD83D\uDE97"
      );
      drawCarEmoji(
        ctx,
        center + Math.cos(rightAngle) * carRadius,
        center + Math.sin(rightAngle) * carRadius,
        emojiSize,
        "\uD83D\uDE99"
      );
    },
    [userImage]
  );

  // Canvas'ı her değişiklikte yeniden çiz
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
      {/* Çerçeve seçimi */}
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

      {/* Canvas önizleme */}
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="w-full max-w-md rounded-2xl shadow-xl border border-gray-200"
          onClick={() => fileInputRef.current?.click()}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Butonlar */}
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
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Fotoğraf Yükle
        </button>

        {userImage && (
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition-all shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            İndir
          </button>
        )}
      </div>

      {/* Bilgi */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-sm text-amber-800">
          Fotoğrafını yükle, çerçeveyi seç ve indir! Sosyal medya profil
          fotoğrafın olarak kullanarak Şenol Berk&apos;e destek ol.
        </p>
      </div>
    </div>
  );
}
