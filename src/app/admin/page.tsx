"use client";

import { useState } from "react";
import Link from "next/link";

type CrmEvent = {
  id: string;
  customerName: string;
  eventName: string;
  eventDate: string;
  daysLeft: number;
  notified: boolean;
};

export default function AdminCrmPage() {
  const [events, setEvents] = useState<CrmEvent[]>([
    {
      id: "1",
      customerName: "홍길동",
      eventName: "결혼기념일",
      eventDate: "2024-06-25",
      daysLeft: 7,
      notified: false,
    },
    {
      id: "2",
      customerName: "이영희",
      eventName: "어머니 생신",
      eventDate: "2024-06-28",
      daysLeft: 10,
      notified: false,
    },
  ]);

  const sendAlimtalk = (eventId: string) => {
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId ? { ...ev, notified: true } : ev
      )
    );
    alert("알림톡이 성공적으로 발송되었습니다. (모의 발송)");
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="border-b border-outline-variant/30 py-4 px-6 flex items-center justify-between bg-surface-container-low">
        <Link href="/" className="text-primary hover:text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-label-caps">Back</span>
        </Link>
        <h1 className="text-headline-sm text-primary">CRM Dashboard</h1>
        <div className="text-label-caps text-on-surface-variant">
          Admin View
        </div>
      </header>

      <main className="flex-grow p-4 md:p-8 max-w-container-max mx-auto w-full space-y-8">
        <div>
          <h2 className="text-headline-md text-primary mb-2">고객 기념일 관리</h2>
          <p className="text-body-md text-on-surface-variant">
            다가오는 고객의 기념일을 확인하고 맞춤형 꽃바구니 제안 알림톡을 발송하세요.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container text-primary font-bold text-label-caps border-b border-outline-variant/30">
              <tr>
                <th className="p-4">고객명</th>
                <th className="p-4">기념일 종류</th>
                <th className="p-4">날짜</th>
                <th className="p-4">남은 기간</th>
                <th className="p-4">알림톡 발송</th>
              </tr>
            </thead>
            <tbody>
              {events.map((ev) => (
                <tr key={ev.id} className="border-b border-outline-variant/10 hover:bg-surface-container/30 transition-colors">
                  <td className="p-4 text-body-md text-on-surface">{ev.customerName}</td>
                  <td className="p-4 text-body-md text-on-surface">{ev.eventName}</td>
                  <td className="p-4 text-body-md text-on-surface">{ev.eventDate}</td>
                  <td className="p-4 text-body-md text-error font-medium">D-{ev.daysLeft}</td>
                  <td className="p-4">
                    {ev.notified ? (
                      <span className="text-label-caps text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        발송완료
                      </span>
                    ) : (
                      <button
                        onClick={() => sendAlimtalk(ev.id)}
                        className="bg-primary text-[#D4AF37] px-4 py-2 rounded text-label-caps hover:bg-primary-fixed-dim transition-colors flex items-center gap-1"
                        disabled={ev.daysLeft > 7}
                      >
                        <span className="material-symbols-outlined text-sm">chat</span>
                        {ev.daysLeft > 7 ? "발송대기" : "알림톡 발송"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
