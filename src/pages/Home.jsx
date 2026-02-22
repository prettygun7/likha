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

    const vlogVideos = [
        {
            title: "중앙대병원 브이로그 - 1",
            img: "https://img.youtube.com/vi/IzLSdq4KIqM/hqdefault.jpg",
            link: "https://youtu.be/IzLSdq4KIqM?si=aCwsvq0Gpp73B1QJ"
        },
        {
            title: "중앙대병원 브이로그 - 2",
            img: "https://img.youtube.com/vi/vd-9mkbaQ8U/hqdefault.jpg",
            link: "https://youtu.be/vd-9mkbaQ8U?si=TEwAXfyKIqbLcxVE"
        },
        {
            title: "중앙대병원 브이로그 - 3",
            img: "https://img.youtube.com/vi/W3tZi2XSiZU/hqdefault.jpg",
            link: "https://youtu.be/W3tZi2XSiZU?si=jnA3O-cPhazjP48N"
        },
        {
            title: "중앙대병원 브이로그 - 4",
            img: "https://img.youtube.com/vi/I_TPWPzidpg/hqdefault.jpg",
            link: "https://youtu.be/I_TPWPzidpg?si=drM2eNNOK231LiMB"
        },
        {
            title: "중앙대병원 브이로그 - 5",
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
