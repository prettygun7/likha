import React from 'react';
import { useRef } from 'react';

export default function ShortsBar({
    title = "함께 성장 챌린지",
    icon = "smart_display",
    videos = []
}) {
    const scrollContainerRef = useRef(null);

    return (
        <section className="pl-4">
            <div className="flex justify-between items-center pr-4 mb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-icons text-red-600 text-base">{icon}</span>
                    {title}
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
                {videos.map((item, index) => (
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
