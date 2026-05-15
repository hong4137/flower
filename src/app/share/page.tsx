"use client";

import { useState } from "react";
import Link from "next/link";

export default function SharePage() {
  const [copied, setCopied] = useState(false);
  const myReferralCode = "FLORA-QUEEN-2024";
  const shareLink = `https://aurumflora.com/?ref=${myReferralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="border-b border-outline-variant/30 py-4 px-6 flex items-center justify-between bg-surface-container-low">
        <Link href="/" className="text-primary hover:text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-label-caps">Back</span>
        </Link>
        <h1 className="text-headline-sm text-primary">Viral Referral</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-grow p-4 md:p-8 max-w-container-max mx-auto w-full space-y-8">
        <section className="bg-primary text-on-primary rounded-xl p-8 border border-[#D4AF37] shadow-lg text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFRFrvEKOily2AHI4Vs4NsZJJZQVYyJXnSZ8wLj5Ii4Lz4MLyRIH_7wykUSmBevMzVguT2ve8elZzyQLDqduPszm4hsXiIvkYJOHZDSDX3DghJw1HownIHw584VY4um-bl1yvzhKVRAUu6Ob793kxuve5LBwe6voqGmL4GbMrK4OYlWBERW6kcvsaEp-Kp2x856O_65KZaPhte5VEdKGn3Jfks6qgLkHjuRgbcqkodhtrZbR88KeUD3VTVHg92WYNVdkhB2zsL4Q")',
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-headline-lg text-[#D4AF37] mb-2">Share & Earn</h2>
            <p className="text-body-lg mb-6 opacity-90 max-w-lg mx-auto">
              친구에게 Aurum Flora를 소개하고 두 분 모두 <strong>커뮤니티 멤버십 할인권</strong>을 받으세요!
            </p>

            <div className="bg-surface text-on-surface rounded flex items-center justify-between p-2 max-w-md mx-auto border border-[#D4AF37]">
              <span className="text-body-md truncate px-2 text-on-surface-variant select-all">
                {shareLink}
              </span>
              <button
                onClick={handleCopy}
                className="bg-primary text-[#D4AF37] px-4 py-2 rounded text-label-caps hover:bg-primary-fixed-dim transition-colors whitespace-nowrap flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">{copied ? "check" : "content_copy"}</span>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              현재 누적 추천 횟수: <strong>3명</strong> (멤버십 할인권 3장 발급 완료)
            </p>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-4xl text-[#D4AF37]">workspace_premium</span>
            <h3 className="text-headline-md text-primary">이달의 바이럴 퀸 👑</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { rank: 1, name: "김*정", count: 15, isMe: false },
              { rank: 2, name: "이*희", count: 12, isMe: false },
              { rank: 3, name: "박*연 (나)", count: 3, isMe: true },
            ].map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  user.isMe
                    ? "border-[#D4AF37] bg-secondary-fixed/20"
                    : "border-outline-variant/30 bg-surface"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-headline-sm ${user.rank === 1 ? "text-[#D4AF37]" : "text-on-surface-variant"}`}>
                    {user.rank}
                  </span>
                  <span className="text-body-lg text-primary">{user.name}</span>
                </div>
                <span className="text-label-caps text-on-surface-variant bg-surface-container px-3 py-1 rounded">
                  추천 {user.count}회
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
