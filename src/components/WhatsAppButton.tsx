"use client";

interface WhatsAppButtonProps {
  href: string;
  label: string;
  subtitle?: string;
  icon: "group" | "chat";
}

export default function WhatsAppButton({
  href,
  label,
  subtitle,
  icon,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl p-4 transition-all hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
        {icon === "group" ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.28h.5c.16 0 .4-.06.6.45.21.51.67 1.74.72 1.87.06.13.1.27.02.44-.08.17-.12.27-.23.42l-.35.46c-.12.14-.25.29-.11.57.14.27.63 1.09 1.36 1.78.93.88 1.71 1.17 1.95 1.3.25.14.39.12.54-.04.14-.19.62-.72.79-.97.17-.25.33-.21.55-.12.23.09 1.45.72 1.7.85zm-4.47 7.31c5.76 0 10.44-4.68 10.44-10.44 0-5.76-4.68-10.44-10.44-10.44C6.52.39 1.84 5.07 1.84 10.83c0 1.84.48 3.57 1.31 5.07L1.72 21.1l5.35-1.41c1.45.78 3.12 1.22 4.89 1.22l.32-.04z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        )}
      </div>
      <div>
        <p className="font-semibold text-base">{label}</p>
        {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
      </div>
      <svg
        className="w-5 h-5 ml-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
