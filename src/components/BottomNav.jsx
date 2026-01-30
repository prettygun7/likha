import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 safe-area-pb z-50">
            <div className="max-w-md mx-auto flex justify-around px-6 py-3">
                <button
                    onClick={() => navigate('/')}
                    className={`flex flex-col items-center justify-center space-y-1 transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary'}`}
                >
                    <span className="material-icons text-2xl">home</span>
                    <span className="text-[10px] font-medium">홈</span>
                </button>
                <button
                    onClick={() => navigate('/community')}
                    className={`flex flex-col items-center justify-center space-y-1 transition-colors ${isActive('/community') ? 'text-primary' : 'text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary'}`}
                >
                    <span className="material-icons text-2xl">forum</span>
                    <span className="text-[10px] font-medium">커뮤니티</span>
                </button>
            </div>
        </nav>
    );
}
