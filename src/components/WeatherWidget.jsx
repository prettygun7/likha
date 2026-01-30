import React, { useEffect, useState } from 'react';

export default function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [daily, setDaily] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Heukseok-dong coordinates: 37.5091, 126.9633
        fetch('https://api.open-meteo.com/v1/forecast?latitude=37.5091&longitude=126.9633&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo')
            .then(res => res.json())
            .then(data => {
                setWeather(data.current);
                setDaily(data.daily);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch weather", err);
                setLoading(false);
            });
    }, []);

    const getWeatherIcon = (code) => {
        // Mapping Open-Meteo WMO codes to Material Symbols
        if (code === 0) return 'sunny';
        if (code >= 1 && code <= 3) return 'partly_cloudy_day';
        if (code >= 45 && code <= 48) return 'foggy';
        if (code >= 51 && code <= 67) return 'rainy';
        if (code >= 71 && code <= 77) return 'ac_unit'; // Snow
        if (code >= 80 && code <= 82) return 'rainy';
        if (code >= 95) return 'thunderstorm';
        return 'cloud';
    };

    const getWeatherText = (code) => {
        if (code === 0) return '맑음';
        if (code >= 1 && code <= 3) return '구름 조금';
        if (code >= 45 && code <= 48) return '안개';
        if (code >= 51 && code <= 67) return '비';
        if (code >= 71 && code <= 77) return '눈';
        if (code >= 80 && code <= 82) return '소나기';
        if (code >= 95) return '뇌우';
        return '흐림';
    };

    const formatDate = () => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
        return date.toLocaleDateString('ko-KR', options);
    };

    return (
        <section className="px-4">
            <div className="bg-gradient-to-br from-cau-blue to-blue-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden min-h-[160px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <p className="text-blue-100 text-sm mb-1">{formatDate()}</p>
                        <h2 className="text-2xl font-bold leading-tight">오늘의<br />흑석동 날씨</h2>
                    </div>

                    {loading ? (
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="w-10 h-10 bg-white/20 rounded-full mb-2"></div>
                            <div className="w-16 h-4 bg-white/20 rounded"></div>
                        </div>
                    ) : weather && daily ? (
                        <div className="flex flex-col items-center text-right">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="material-symbols-outlined text-4xl">
                                    {getWeatherIcon(weather.weather_code)}
                                </span>
                                <div>
                                    <p className="text-3xl font-bold leading-none">{Math.round(weather.temperature_2m)}°</p>
                                </div>
                            </div>
                            <p className="text-blue-100 text-sm font-medium mb-1">{getWeatherText(weather.weather_code)}</p>
                            <div className="flex gap-2 text-xs text-blue-100 bg-white/10 px-2 py-1 rounded-lg">
                                <span>최고 {Math.round(daily.temperature_2m_max[0])}°</span>
                                <span className="text-white/40">|</span>
                                <span>최저 {Math.round(daily.temperature_2m_min[0])}°</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-blue-100">날씨 정보를 불러올 수 없습니다.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
