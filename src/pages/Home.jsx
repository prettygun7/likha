import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import HospitalNews from '../components/HospitalNews';
import ShortsBar from '../components/ShortsBar';
import ContentCards from '../components/ContentCards';
import LifeConvenience from '../components/LifeConvenience';
import Footer from '../components/Footer';

export default function Home() {
    const challengeVideos = [
        {
            title: "함께 성장 챌린지(3)",
            img: "https://img.youtube.com/vi/9HbaooCw51g/hqdefault.jpg",
            link: "https://youtu.be/9HbaooCw51g?si=n6IxeSgKb89YJHZI"
        },
        {
            title: "함께 성장 챌린지(2)",
            img: "https://img.youtube.com/vi/XRhQaNEimaM/hqdefault.jpg",
            link: "https://youtu.be/XRhQaNEimaM?si=_RjAx8jXijX6zuWa"
        },
        {
            title: "함께 성장 챌린지(1)",
            img: "https://img.youtube.com/vi/If85Ajs5psU/hqdefault.jpg",
            link: "https://youtu.be/If85Ajs5psU?si=cDPhpXsPcpopB0uP"
        }
    ];

    const vlogVideos = [
        {
            title: "에버랜드 찍먹하고 간호사로 돌아온 썰",
            img: "https://img.youtube.com/vi/IzLSdq4KIqM/hqdefault.jpg",
            link: "https://youtu.be/IzLSdq4KIqM?si=aCwsvq0Gpp73B1QJ"
        },
        {
            title: "병원 행정직 20년차가 말아주는 진짜 이야기🏥",
            img: "https://img.youtube.com/vi/vd-9mkbaQ8U/hqdefault.jpg",
            link: "https://youtu.be/vd-9mkbaQ8U?si=TEwAXfyKIqbLcxVE"
        },
        {
            title: "밤새 CT 찍고 낮에 잠들고… 응급 CT실 나이트 근무자의 하루",
            img: "https://img.youtube.com/vi/W3tZi2XSiZU/hqdefault.jpg",
            link: "https://youtu.be/W3tZi2XSiZU?si=jnA3O-cPhazjP48N"
        },
        {
            title: "대학병원 신입이 말아주는 병원 총무팀 찐 현실썰",
            img: "https://img.youtube.com/vi/I_TPWPzidpg/hqdefault.jpg",
            link: "https://youtu.be/I_TPWPzidpg?si=drM2eNNOK231LiMB"
        },
        {
            title: "대학병원 신입이 말아주는 병원 총무팀 찐 현실썰(2)",
            img: "https://img.youtube.com/vi/I_TPWPzidpg/hqdefault.jpg",
            link: "https://youtu.be/I_TPWPzidpg?si=jqroCGXSolw_CC7F"
        }
    ];

    return (
        <main className="max-w-md mx-auto space-y-6 pt-4 pb-24">
            <WeatherWidget />
            <ShortsBar
                title="함께 성장 챌린지"
                icon="smart_display"
                videos={challengeVideos}
            />
            <ShortsBar
                title="브이로그"
                icon="smart_display"
                videos={vlogVideos}
            />
            <ContentCards />
            <LifeConvenience />
            <Footer />
        </main>
    );
}
