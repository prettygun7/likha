import React from 'react';

export default function Reservation() {
    return (
        <main className="max-w-md mx-auto pt-20 px-4 pb-24 min-h-screen">
            <h2 className="text-xl font-bold mb-4 dark:text-white">진료 예약</h2>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                <span className="material-icons text-4xl text-gray-300 mb-2">calendar_today</span>
                <p className="text-gray-500 dark:text-gray-400">예약 기능이 준비 중입니다.</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                    전화 예약 안내
                </button>
            </div>
        </main>
    );
}
