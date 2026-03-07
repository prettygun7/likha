import React from 'react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            중앙대병원 <span className="text-purple-600 dark:text-purple-400">자율적 혁신활동 (이지컴온)</span>
                        </span>
                        <h1 className="text-lg font-bold leading-none text-cau-blue dark:text-blue-400">환영합니다😀</h1>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {/* Right side elements removed */}
                </div>
            </div>
        </header>
    );
}
