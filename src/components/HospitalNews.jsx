import React from 'react';

export default function HospitalNews() {
    return (
        <section className="px-4">
            <div className="bg-white dark:bg-surface-dark backdrop-blur-sm rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                        <span className="material-icons text-2xl">history_edu</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">병원소식</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">중앙대병원 100주년 기념식</p>
                    </div>
                </div>
                <span className="material-icons text-gray-400 text-sm">arrow_forward_ios</span>
            </div>
        </section>
    );
}
