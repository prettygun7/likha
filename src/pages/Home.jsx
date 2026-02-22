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

    const patientExperienceVideos = [
        {
            title: "\"흑석역 4번출구\" 뮤직비디오｜ 중앙대병원 오시는 길",
            img: "https://img.youtube.com/vi/6TLae2xbl0k/hqdefault.jpg",
            link: "https://youtu.be/6TLae2xbl0k?si=YtUH48f4d976K1QH"
        },
        {
            title: "[고객 칭찬사연] 중앙대병원 정형외과 이재성 교수 편(1)",
            img: "https://img.youtube.com/vi/VfsD4GEeSCY/hqdefault.jpg",
            link: "https://youtu.be/VfsD4GEeSCY?si=Twh5gJaWNGI7NQUr"
        }
    ];

    const publicMedicalVideos = [
        {
            title: "밤에 아이가 아플 땐? 🚑 우리아이 안심병원",
            img: "https://img.youtube.com/vi/MW6aL7g4SUI/hqdefault.jpg",
            link: "https://youtu.be/MW6aL7g4SUI?si=Vur17B-6l069iPA7"
        },
        {
            title: "신종 감염병 위기, 우리는 이미 준비 중이에요",
            img: "https://img.youtube.com/vi/DuL7lCDLbn0/hqdefault.jpg",
            link: "https://youtu.be/DuL7lCDLbn0?si=oExczAQielvqdH8F"
        }
    ];

    const historyVideos = [
        {
            title: "업무 중에 1968년으로 시간여행 하고 왔습니다🕒🤳",
            img: "https://img.youtube.com/vi/92mbBMsGrDI/hqdefault.jpg",
            link: "https://youtu.be/92mbBMsGrDI?si=kn9nBC7K3Hw6nLTv"
        }
    ];

    const healthShortsVideos = [
        {
            title: "넘어지고 손목 아플 때 '이것' 절대 하지 마세요",
            img: "https://img.youtube.com/vi/SgGiA-o2xsM/hqdefault.jpg",
            link: "https://youtu.be/SgGiA-o2xsM?si=KCfLzyNeuSdF5KfM"
        },
        {
            title: "요로결석, 왜 나만 자꾸 재발할까? 의사가 말하는 진짜 이유",
            img: "https://img.youtube.com/vi/m89COla_wAE/hqdefault.jpg",
            link: "https://youtu.be/m89COla_wAE?si=qh0MttUqsNxv3I2b"
        },
        {
            title: "전립선 초음파도 마취가 필요할까?",
            img: "https://img.youtube.com/vi/qdO8GTyXu9s/hqdefault.jpg",
            link: "https://youtu.be/qdO8GTyXu9s?si=UzMfB5Axlv9KnwsL"
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
            <ShortsBar
                title="환자경험 콘텐츠"
                icon="smart_display"
                videos={patientExperienceVideos}
            />
            <ShortsBar
                title="공공의료 인프라 운영"
                icon="smart_display"
                videos={publicMedicalVideos}
            />
            <ShortsBar
                title="시간여행으로 보는 중앙대병원 역사"
                icon="smart_display"
                videos={historyVideos}
            />
            <ShortsBar
                title="건강정보 쇼츠"
                icon="smart_display"
                videos={healthShortsVideos}
            />
            <ContentCards />
            <LifeConvenience />
            <Footer />
        </main>
    );
}
