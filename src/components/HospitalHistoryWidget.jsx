import React, { useMemo } from 'react';
import historyData from '../data/hospitalHistory.json';

export default function HospitalHistoryWidget() {
    const todayHistory = useMemo(() => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        // 1. Find events for today (matching month and day)
        let matchingEvents = historyData.filter(
            item => item.month === month && item.day === day
        );

        // 2. If no events for today, find events for the 1st of this month
        if (matchingEvents.length === 0) {
            matchingEvents = historyData.filter(
                item => item.month === month && item.day === "01"
            );
        }

        if (matchingEvents.length === 0) return null;

        // 3. Sort by year (ascending) and get the oldest
        matchingEvents.sort((a, b) => {
            const yearA = parseInt(a.year, 10);
            const yearB = parseInt(b.year, 10);
            return yearA - yearB;
        });

        return matchingEvents[0];
    }, []);

    if (!todayHistory) return null;

    // Split content by newline to render multiple lines properly
    const contentLines = todayHistory.content.split('\n');

    return (
        <section className="px-4 mt-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-blue-50 text-cau-blue rounded-xl p-3 flex flex-col items-center justify-center min-w-[80px] flex-shrink-0">
                    <span className="text-[14px] font-bold text-center leading-tight">오늘의<br />병원 역사</span>
                </div>
                <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                        {todayHistory.year}년 {todayHistory.month}월 {todayHistory.day}일
                    </h3>
                    <div className="text-gray-800 text-[15px] leading-snug">
                        {contentLines.map((line, index) => (
                            <p key={index} className={index > 0 ? "mt-1" : ""}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
