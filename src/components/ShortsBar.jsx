import React from 'react';
import { useRef } from 'react';

export default function ShortsBar() {
    // Mock data based on the channel "이지컴온" (Easy Common) content
    // Since scraping failed, we use representative placeholders that look like the real content.
    const shorts = [
        {
            title: "중앙대병원 혁신활동 챌린지 - 1",
            img: "https://img.youtube.com/vi/9HbaooCw51g/hqdefault.jpg",
            link: "https://youtu.be/9HbaooCw51g?si=n6IxeSgKb89YJHZI"
        },
        {
            title: "중앙대병원 혁신활동 챌린지 - 2",
            img: "https://img.youtube.com/vi/XRhQaNEimaM/hqdefault.jpg",
            link: "https://youtu.be/XRhQaNEimaM?si=_RjAx8jXijX6zuWa"
        },
        {
            title: "중앙대병원 혁신활동 챌린지 - 3",
            img: "https://img.youtube.com/vi/If85Ajs5psU/hqdefault.jpg",
            link: "https://youtu.be/If85Ajs5psU?si=cDPhpXsPcpopB0uP"
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
