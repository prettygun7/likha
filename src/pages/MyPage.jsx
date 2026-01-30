import React from 'react';

export default function MyPage() {
    return (
        <main className="max-w-md mx-auto pt-20 px-4 pb-24 min-h-screen">
            <h2 className="text-xl font-bold mb-4 dark:text-white">마이페이지</h2>
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="material-icons text-3xl text-gray-400">person</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg dark:text-white">게스트 님</h3>
                        <p className="text-sm text-gray-500">로그인이 필요합니다</p>
                    </div>
                </div>
                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">
                    로그인 / 회원가입
                </button>
            </div>
        </main>
    );
}
