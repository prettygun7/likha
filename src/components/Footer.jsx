import React from 'react';

export default function Footer() {
    return (
        <section className="mt-8 px-6 py-8 bg-gray-100 dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-xs text-gray-500 mb-2">중앙대학교병원 모바일 커뮤니티</p>
            <div className="flex justify-center space-x-4 mb-4">
                <a className="text-gray-400 hover:text-primary transition-colors text-xs" href="#">이용약관</a>
                <span className="text-gray-300">|</span>
                <a className="text-gray-400 hover:text-primary transition-colors text-xs" href="#">개인정보처리방침</a>
                <span className="text-gray-300">|</span>
                <a className="text-gray-400 hover:text-primary transition-colors text-xs" href="#">고객센터</a>
            </div>
            <p className="text-[10px] text-gray-400">COPYRIGHT © CAU HOSPITAL. ALL RIGHTS RESERVED.</p>
        </section>
    );
}
