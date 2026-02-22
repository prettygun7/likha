import React from 'react';
import { useRef } from 'react';

export default function ShortsBar() {
    // Mock data based on the channel "이지컴온" (Easy Common) content
    // Since scraping failed, we use representative placeholders that look like the real content.
    const shorts = [
        {
            title: "사막 한가운데서 진료실이 열렸다｜중앙대병원 이집트 의료봉사",
            img: "https://img.youtube.com/vi/q1w-bKPgKNs/hqdefault.jpg",
            link: "https://youtube.com/shorts/q1w-bKPgKNs?si=mQ4t4AqcYj9ecP3_"
        },
        {
            title: "\"흑석역 4번출구\" 뮤직비디오｜중앙대병원 오시는 길 트로트 🎶",
            img: "https://img.youtube.com/vi/6TLae2xbl0k/hqdefault.jpg",
            link: "https://youtube.com/shorts/6TLae2xbl0k?si=EJUiDlbefzenk9QO"
        },
        {
            title: "업무 중에 1968년으로 시간여행 하고 왔습니다 🕒",
            img: "https://img.youtube.com/vi/92mbBMsGrDI/hqdefault.jpg",
            link: "https://youtube.com/shorts/92mbBMsGrDI?si=rAk4vO-x5KtNfLZ1"
        },
        {
            title: "밤새 CT 찍고 낮에 잠들고… 응급 CT실 나이트 근무자의 하루 🌙",
            img: "https://img.youtube.com/vi/W3tZi2XSiZU/hqdefault.jpg",
            link: "https://youtube.com/shorts/W3tZi2XSiZU?si=auPI7MbU0UP9S8dq"
        },
        {
            title: "넘어지고 손목 아플 때 '이것' 절대 하지 마세요 🙅‍♂️",
            img: "https://img.youtube.com/vi/SgGiA-o2xsM/hqdefault.jpg",
            link: "https://youtube.com/shorts/SgGiA-o2xsM?si=BHqKmRDG88fUWJlB"
        }
    ];

    const scrollContainerRef = useRef(null);

    return (
        <section className="pl-4">
            <div className="flex justify-between items-center pr-4 mb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-icons text-red-600 text-base">smart_display</span>
                    함께 성장 챌린지
                </h3>
                <a
                    href="https://www.youtube.com/@%EC%9D%B4%EC%A7%80%EC%BB%B4%EC%98%A8/shorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                    더보기 <span className="material-icons text-[10px] ml-0.5">arrow_forward_ios</span>
                </a>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-3 pb-4 pr-4 hide-scrollbar snap-x"
            >
                {shorts.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="snap-center shrink-0 w-32 flex flex-col gap-2 group cursor-pointer"
                    >
                        <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-md bg-gray-200 dark:bg-surface-dark relative">
                            <img
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                src={item.img}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute top-2 right-2 bg-black/40 rounded-full p-1 backdrop-blur-sm">
                                <span className="material-icons text-white text-[12px]">play_arrow</span>
                            </div>
                        </div>
                        <p className="text-xs font-medium text-gray-800 dark:text-gray-200 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
