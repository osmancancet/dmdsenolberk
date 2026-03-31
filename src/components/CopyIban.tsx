"use client";

import { useState } from "react";

interface CopyIbanProps {
  label: string;
  iban: string;
  flag: string;
}

export default function CopyIban({ label, iban, flag }: CopyIbanProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className={`group cursor-pointer bg-white border-2 rounded-xl p-4 transition-all hover:shadow-lg ${
        copied
          ? "border-success bg-green-50 animate-copied"
          : "border-gray-200 hover:border-primary-light"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-500">
          {flag} {label}
        </span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors ${
            copied
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-700"
          }`}
        >
          {copied ? "Kopyalandı!" : "Kopyala"}
        </span>
      </div>
      <p className="font-mono text-sm md:text-base font-semibold text-gray-800 tracking-wide">
        {iban}
      </p>
    </div>
  );
}
