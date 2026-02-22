import React from 'react';

export default function LifeConvenience() {
    const facilities = [
        {
            name: "[한식] 소담",
            desc: "갈비탕, 찌개류, 비빔밥, 전골 등",
            info: "본관 지하 1층 | 02)6299-1307",
            time: "08:00~21:00 (주말 10:00~)",
            icon: "soup_kitchen",
            color: "text-orange-600",
            bg: "bg-orange-100 dark:bg-orange-900/30"
        },
        {
            name: "[한식] 큰솥 설렁탕",
            desc: "설렁탕, 육개장 등",
            info: "본관 지하 1층 | 070-8726-6687",
            time: "08:00~22:00 (주말 09:00~21:00)",
            icon: "rice_bowl",
            color: "text-orange-600",
            bg: "bg-orange-100 dark:bg-orange-900/30"
        },
        {
            name: "[한식] 구름산 추어탕",
            desc: "추어탕, 전복죽, 보쌈, 추어튀김",
            info: "본관 지하 1층 | 02)812-8122",
            time: "08:00~21:30",
            icon: "restaurant_menu",
            color: "text-orange-600",
            bg: "bg-orange-100 dark:bg-orange-900/30"
        },
        {
            name: "[한식] 죽 이야기",
            desc: "전복죽, 한우버섯죽 등",
            info: "본관 지하 1층 | 02)813-6288",
            time: "07:00~20:30 (토 08:00~)",
            icon: "spa",
            color: "text-green-600",
            bg: "bg-green-100 dark:bg-green-900/30"
        },
        {
            name: "[일식] 나라비 우동",
            desc: "돈까스, 우동, 알밥 등",
            info: "본관 지하 1층 | 02)6299-1300",
            time: "09:30~21:30",
            icon: "ramen_dining",
            color: "text-blue-500",
            bg: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            name: "[분식] 영스넥",
            desc: "떡볶이, 김밥, 라면 등",
            info: "본관 지하 1층 | 02)6298-4079",
            time: "07:00~21:00",
            icon: "fastfood",
            color: "text-red-500",
            bg: "bg-red-100 dark:bg-red-900/30"
        }
    ];

    return (
        <section className="px-4 space-y-4">
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-icons text-purple-500 text-base">store_mall_directory</span>
                    병원 지하 식당가 안내
                </h3>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                    {facilities.map((facility, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${facility.bg}`}>
                                <span className={`material-icons ${facility.color}`}>{facility.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{facility.name}</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">{facility.desc}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[10px] text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <span className="material-icons text-[10px]">place</span>
                                        {facility.info}
                                    </span>
                                    <span className="hidden sm:block text-gray-300">|</span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-icons text-[10px]">schedule</span>
                                        {facility.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="text-center mb-3">
                        <a
                            href="https://ch.cauhs.or.kr/home/conts/101010000000000.do"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                        >
                            전체 편의시설 보기
                            <span className="material-icons text-[10px]">open_in_new</span>
                        </a>
                    </div>
                    <div className="flex flex-col gap-1 items-center bg-gray-50 dark:bg-gray-800/50 rounded-lg py-3 px-4">
                        <div className="flex justify-between w-full max-w-[140px] text-[10px]">
                            <span className="text-gray-500 dark:text-gray-400 font-bold">TODAY</span>
                            <span className="text-gray-900 dark:text-white font-mono font-bold">1,248</span>
                        </div>
                        <div className="flex justify-between w-full max-w-[140px] text-[10px]">
                            <span className="text-gray-500 dark:text-gray-400 font-bold">TOTAL</span>
                            <span className="text-gray-900 dark:text-white font-mono font-bold">856,392</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
