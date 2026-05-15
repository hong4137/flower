"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  // 모의 권한 확인 (MVP를 위해 클라이언트 상태로 관리)
  const [isVip, setIsVip] = useState(false);

  if (!isVip) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
        <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/30 text-center max-w-md">
          <span className="material-symbols-outlined text-6xl text-error mb-4">lock</span>
          <h2 className="text-headline-sm text-primary mb-2">프리미엄 멤버십 전용</h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            이 메뉴는 Aurum Flora 프리미엄 멤버십 회원만 접근 가능합니다.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setIsVip(true)}
              className="bg-primary text-[#D4AF37] px-6 py-3 rounded text-label-caps hover:bg-primary-fixed-dim transition-colors"
            >
              VIP 계정으로 모의 로그인 (테스트용)
            </button>
            <Link href="/">
              <button className="border border-primary text-primary px-6 py-3 rounded text-label-caps hover:bg-surface-container-high transition-colors w-full">
                홈으로 돌아가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="border-b border-outline-variant/30 py-4 px-6 flex items-center justify-between bg-surface-container-low">
        <Link href="/" className="text-primary hover:text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-label-caps">Back</span>
        </Link>
        <h1 className="text-headline-sm text-[#D4AF37]">Premium Board</h1>
        <button 
          onClick={() => setIsVip(false)}
          className="text-label-caps text-on-surface-variant hover:text-error transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="flex-grow p-4 md:p-8 max-w-container-max mx-auto w-full space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-2 border-[#D4AF37]">
            <span className="material-symbols-outlined text-[#D4AF37]">diamond</span>
          </div>
          <div>
            <h2 className="text-headline-md text-primary">프리미엄 멤버십 라운지</h2>
            <p className="text-body-md text-on-surface-variant">VVIP 회원님을 위한 프라이빗 네트워킹 및 클래스 안내</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Class Notice */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)] relative overflow-hidden group">
            <span className="absolute top-4 right-4 bg-primary text-[#D4AF37] px-3 py-1 rounded text-label-caps">
              D-3
            </span>
            <h3 className="text-headline-sm text-primary mb-2">프리미엄 꽃 관리 클래스</h3>
            <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2">
              수입산 장미와 작약을 오래 보관하는 방법과 홈 인테리어 배치 팁을 대표님이 직접 전수합니다.
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span>2024년 6월 20일 (목) 14:00</span>
            </div>
            <button className="text-primary font-bold border-b border-primary hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors pb-1">
              신청하기 (잔여 2명)
            </button>
          </div>

          {/* Networking Party */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,50,0,0.05)] relative overflow-hidden group">
            <span className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded text-label-caps">
              HOT
            </span>
            <h3 className="text-headline-sm text-primary mb-2">VVIP 네트워킹 와인 파티</h3>
            <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2">
              비즈니스 리더들과 함께하는 프라이빗 와인 파티. 특별한 만남과 인연을 Aurum Flora에서 준비했습니다.
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>티타임즈 화원 본점 프라이빗 가든</span>
            </div>
            <button className="text-primary font-bold border-b border-primary hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors pb-1">
              초대장 확인하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
