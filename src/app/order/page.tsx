"use client";

import { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const [context, setContext] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 대표님의 추천 로직 (Mock)
  const getRecommendation = (ctx: string) => {
    switch (ctx) {
      case "축하":
        return "화사한 코랄 튤립과 델피늄, 그리고 골드 라인 리본 믹스 (150,000원)";
      case "위로":
        return "차분한 화이트 릴리와 소프트 블루 수국, 은은한 안개꽃 (120,000원)";
      case "사과":
        return "진심을 담은 딥 레드 로즈 50송이와 프리미엄 유칼립투스 (200,000원)";
      default:
        return "상황을 선택하시면 대표님의 네트워킹 맞춤 꽃바구니를 추천해 드립니다.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!context || !recipientName) {
      alert("상황과 대상의 이름을 입력해주세요.");
      return;
    }
    
    // DB 연동 및 알림 발송은 API를 통해 진행될 예정입니다. (Mock)
    setSubmitted(true);
    console.log("[실시간 알림 - 대표님 카카오톡] 새로운 주문이 접수되었습니다:", {
      context,
      recipientName,
      recommendation: getRecommendation(context),
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface-container flex flex-col items-center justify-center px-4">
        <div className="bg-surface p-8 rounded-xl border border-[#D4AF37] shadow-lg max-w-md w-full text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4">check_circle</span>
          <h2 className="text-headline-sm text-primary mb-2">주문이 접수되었습니다!</h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            대표님이 확인 후 연락드릴 예정입니다.<br/>
            추천 구성: {getRecommendation(context)}
          </p>
          <Link href="/">
            <button className="bg-primary text-[#D4AF37] border border-[#D4AF37] px-6 py-2 rounded text-label-caps hover:bg-primary-fixed-dim w-full transition-colors">
              홈으로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="border-b border-outline-variant/30 py-4 px-6 flex items-center justify-between">
        <Link href="/" className="text-primary hover:text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-label-caps">Back</span>
        </Link>
        <h1 className="text-headline-sm text-primary">Smart Ordering</h1>
        <div className="w-10"></div> {/* Placeholder for centering */}
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)] max-w-lg w-full">
          <h2 className="text-headline-md text-primary mb-2">어떤 마음을 전하고 싶으신가요?</h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            상황을 선택하시면 대표님이 직접 구성한 최적의 꽃바구니를 추천해 드립니다.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-label-caps text-on-surface-variant mb-2">보내는 상황</label>
              <div className="flex gap-4">
                {["축하", "위로", "사과"].map((ctx) => (
                  <button
                    key={ctx}
                    type="button"
                    onClick={() => setContext(ctx)}
                    className={`flex-1 py-3 rounded-lg border ${
                      context === ctx
                        ? "border-primary bg-primary text-[#D4AF37]"
                        : "border-outline-variant text-on-surface hover:border-primary"
                    } transition-colors text-label-caps`}
                  >
                    {ctx}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-label-caps text-on-surface-variant mb-2">받으시는 분</label>
              <input
                type="text"
                placeholder="이름이나 호칭을 입력해주세요"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full bg-surface-container-low border-b-2 border-primary focus:border-[#D4AF37] focus:outline-none py-3 px-4 rounded-t text-body-md transition-colors"
              />
            </div>

            <div className="bg-surface-container p-4 rounded border border-outline-variant/30 min-h-[80px] flex items-center justify-center text-center">
              <span className="text-body-md text-primary font-medium">
                {getRecommendation(context)}
              </span>
            </div>

            <button
              type="submit"
              className="bg-primary text-[#D4AF37] border border-[#D4AF37] py-4 rounded-lg text-label-caps hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">send</span>
              추천 구성으로 바로 주문하기
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
