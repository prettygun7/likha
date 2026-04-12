import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import HospitalHistoryWidget from '../components/HospitalHistoryWidget';
import HospitalNews from '../components/HospitalNews';
import ShortsBar from '../components/ShortsBar';
import ContentCards from '../components/ContentCards';
import LifeConvenience from '../components/LifeConvenience';
import Footer from '../components/Footer';

export default function Home() {
    const challengeVideos = [
        {
            title: "함께 성장 챌린지(5)(New) 사람과 병원이 자란 순간 #xg #hypnotize #kpop #jurin #chisa #hinata #harvey #juria #maya",
            img: "https://img.youtube.com/vi/4Zlmy_JbjwE/hqdefault.jpg",
            link: "https://youtube.com/shorts/4Zlmy_JbjwE?si=mw2SLs7ex0kVJ78k"
        },
        {
            title: "함께 성장 챌린지(5) 사람과 병원이 자란 순간 #xg #hypnotize #playlist #kpop #플레이리스트",
            img: "https://img.youtube.com/vi/1n65Iu2lO8s/hqdefault.jpg",
            link: "https://youtube.com/shorts/1n65Iu2lO8s?si=J_VCjVd8GcUgUff5"
        },
        {
            title: "함께 성장 챌린지(4)",
            img: "https://img.youtube.com/vi/mpXdm33HoME/hqdefault.jpg",
            link: "https://youtube.com/shorts/mpXdm33HoME?si=TnKU2WC5T4iq48tE"
        },
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
            title: "밤새 일하는 CT실의 하루 #CT실 #CT실야간근무 #CT실브이로그 #병원브이로그 #의료현장",
            img: "https://img.youtube.com/vi/dNl8n6Rzstg/hqdefault.jpg",
            link: "https://youtu.be/dNl8n6Rzstg?si=ORAHaq3Uo8lsnSfV"
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

    const socialContributionVideos = [
        {
            title: "사막 한가운데서 진료실이 열렸다｜중앙대병원 이집트 의료봉사 #브이로그 #중앙대 #중앙대병원 #해외봉사 #esg",
            img: "https://img.youtube.com/vi/q1w-bKPgKNs/hqdefault.jpg",
            link: "https://youtu.be/q1w-bKPgKNs?si=bAmg7Xhvm-OcTPPH"
        },
        {
            title: "사막 한가운데서 진료실이 열렸다｜중앙대병원 이집트 의료봉사 #브이로그 #중앙대 #중앙대병원 #해외봉사 #esg",
            img: "https://img.youtube.com/vi/E2SsF2sifu4/hqdefault.jpg",
            link: "https://youtu.be/E2SsF2sifu4?si=n3xa48xZLq3RhXpZ"
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

    const hospitalSoundTrackVideos = [
        {
            title: "[HST] Track 1. Since 1968 | 시작된 시간 #kpop  #playlist   #cafe  #cafemusic  #플레이리스트 #플리 #플리추천 #플레이리스트추천",
            img: "https://img.youtube.com/vi/mg5zVmbKgZA/hqdefault.jpg",
            link: "https://youtu.be/mg5zVmbKgZA?si=nzpc79oWp_VPpAUB"
        },
        {
            title: "[HST] Track 2. Right Where We Began | 처음처럼, 그 자리에서 #kpop #playlist   #cafe   #cafemusic #플레이리스트 #플리",
            img: "https://img.youtube.com/vi/u64vZY_30JY/hqdefault.jpg",
            link: "https://youtu.be/u64vZY_30JY?si=i0TQvSun5aYICpQn"
        },
        {
            title: "[HST] Track 3. Where the Day Begins | 어떤 하루의 시작 #kpop #playlist #ost  #cafe  #cafemusic #플레이리스트 #플리",
            img: "https://img.youtube.com/vi/DCM2-07lIrE/hqdefault.jpg",
            link: "https://youtu.be/DCM2-07lIrE?si=dWk8eQDs_lIWa8ML"
        },
        {
            title: "[HST] Track 4. Through That Door | 그날의 문을 지나 #kpop #playlist #플레이리스트 #플리 #ost #cafe #cafemusic",
            img: "https://img.youtube.com/vi/K8CErHlbLdE/hqdefault.jpg",
            link: "https://youtu.be/K8CErHlbLdE?si=fZVz5EnsyZRUI1Jy"
        },
        {
            title: "[HST] Track 5. The Ones Who Guard the Night | 밤을 지키는 사람들 #playlist #cafe #cafemusic #플레이리스트 #플리 #ost",
            img: "https://img.youtube.com/vi/nYGfcitp04A/hqdefault.jpg",
            link: "https://youtu.be/nYGfcitp04A?si=8AG1CsLtC2LADWU8"
        },
        {
            title: "[HST] Track 6. Walking With the City | 도시와 함께 걷다 #playlist  #pop  #ost #cafe #cafemusic #플레이리스트 #플리",
            img: "https://img.youtube.com/vi/fW6Pst5Ycu0/hqdefault.jpg",
            link: "https://youtu.be/fW6Pst5Ycu0?si=UIzsPPt60AlN1MGA"
        },
        {
            title: "[HST] Track 7. Where the Wind Once Passed | 바람이 지나간 복도 #playlist  #pop #ost #cafe #cafemusic #플레이리스트",
            img: "https://img.youtube.com/vi/rr5DiY1Jj-U/hqdefault.jpg",
            link: "https://youtu.be/rr5DiY1Jj-U?si=oDvZvLZCo73aw6ED"
        },
        {
            title: "[HST] Track 8. A Courage Without a Name | 이름 없는 용기 #playlist #pop  #ost #cafe #cafemusic #플레이리스트 #플리",
            img: "https://img.youtube.com/vi/p9ZEJbiZ0cc/hqdefault.jpg",
            link: "https://youtu.be/p9ZEJbiZ0cc?si=qtHjZYL7osCo0_uD"
        },
        {
            title: "[HST] Track 9. Deeper Than Yesterday | 어제보다 깊은 오늘 #playlist  #플레이리스트 #플리 #pop #ost #cafe #cafemusic",
            img: "https://img.youtube.com/vi/uirGh3UUCyA/hqdefault.jpg",
            link: "https://youtu.be/uirGh3UUCyA?si=czENC_95Jzrs2dif"
        },
        {
            title: "[HST] Track 10. Still Being Written | 아직 끝나지 않은 이야기 #playlist #플레이리스트 #플리 #pop #ost #cafe #cafemusic",
            img: "https://img.youtube.com/vi/c14OSQafYBk/hqdefault.jpg",
            link: "https://youtu.be/c14OSQafYBk?si=J_RZFHWn_I4ld-Ib"
        },
        {
            title: "세계 최초 Hospital Sound Track",
            img: "https://img.youtube.com/vi/V8be9rfC4FQ/hqdefault.jpg",
            link: "https://www.youtube.com/shorts/V8be9rfC4FQ"
        },
        {
            title: "세계 최초 Hospital Sound Track (2)",
            img: "https://img.youtube.com/vi/_1sk6Vjc4ZI/hqdefault.jpg",
            link: "https://youtu.be/_1sk6Vjc4ZI?si=qi9E-RsyBPTQPoXx"
        }
    ];

    const cauhPlaylistVideos = [
        {
            title: "Believe(Love in CAUH) | Official Lyrics Video",
            img: "https://img.youtube.com/vi/AHoXREllkR8/hqdefault.jpg",
            link: "https://youtube.com/shorts/AHoXREllkR8?si=5Y2K_VJ_97RKpmPa"
        },
        {
            title: "Believe(Love in CAUH) | 국내최초 병원 배경 K-POP 탄생",
            img: "https://img.youtube.com/vi/zufysfE_87I/hqdefault.jpg",
            link: "https://youtu.be/zufysfE_87I?si=8p8Vc2ZbTDesl2ZF"
        }
    ];

    const kpopPlaylistVideos = [
        {
            title: "To You💖(Intro & Verse1) | MABOO:HI #kpop #playlist #kpopidol #플레이리스트 #플리 #청량 #kpopshorts #kpopgroup",
            img: "https://img.youtube.com/vi/26wdFAZCzyk/hqdefault.jpg",
            link: "https://youtube.com/shorts/26wdFAZCzyk?si=6I-seLf2JuI3iV5v"
        },
        {
            title: "(Official Video) Captured - MABOO:Hi(마부:하이) #kpop #playlist #플레이리스트 #플리 #kpopidol #kpopshorts",
            img: "https://img.youtube.com/vi/I_uop2hTK2g/hqdefault.jpg",
            link: "https://youtube.com/shorts/I_uop2hTK2g?si=A-GXcMYmqs51SXTl"
        },
        {
            title: "(Official Video) Captured - MABOO:Hi(마부:하이) #kpop #playlist #플레이리스트 #플리 #kpopidol #kpopshorts",
            img: "https://img.youtube.com/vi/dQCfs74w4lo/hqdefault.jpg",
            link: "https://youtu.be/dQCfs74w4lo?si=P9u5BGWCRY0XCxIV"
        },
        {
            title: "(OFFICIAL AUDIO) Show Me Your Love – MABOO:Hi #kpop #playlist #idol #플레이리스트 #플리",
            img: "https://img.youtube.com/vi/TqJjjvyHK_s/hqdefault.jpg",
            link: "https://youtu.be/TqJjjvyHK_s?si=fn0N5gc3HbWNRG6N"
        },
        {
            title: "Show Me Your Love – MABOO:Hi(VINA) #kpop #playlist #플레이리스트 #플리 #케이팝",
            img: "https://img.youtube.com/vi/PJGV2MfP-8g/hqdefault.jpg",
            link: "https://youtube.com/shorts/PJGV2MfP-8g?si=36XULLhixjx_t1Mn"
        },
        {
            title: "해피엔딩의 마지막에서, 난 너에게 닿아 있어 | Captured",
            img: "https://img.youtube.com/vi/LmgsVl07t4M/hqdefault.jpg",
            link: "https://youtu.be/LmgsVl07t4M?si=diX0NEhHfh0rBFv0"
        },
        {
            title: "숨조차 잊은 채로, I’m Captured 💗",
            img: "https://img.youtube.com/vi/YY7k4oxhirA/hqdefault.jpg",
            link: "https://youtu.be/YY7k4oxhirA?si=kIQRHeoaOaFmg95G"
        },
        {
            title: "Captured | 사랑에 빠지는 순간💗",
            img: "https://img.youtube.com/vi/AaaC5agK2dw/hqdefault.jpg",
            link: "https://youtu.be/AaaC5agK2dw?si=oifsYMr-dbIH-mPH"
        }
    ];

    return (
        <main className="max-w-md mx-auto space-y-6 pt-4 pb-24">
            <WeatherWidget />
            <HospitalHistoryWidget />
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
                title="사회 공헌"
                icon="smart_display"
                videos={socialContributionVideos}
            />
            <ShortsBar
                title="건강정보 쇼츠"
                icon="smart_display"
                videos={healthShortsVideos}
            />
            <ShortsBar
                title="세계 최초 Hospital Sound Track"
                icon="smart_display"
                videos={hospitalSoundTrackVideos}
            />
            <ShortsBar
                title="CAUH 플레이리스트"
                icon="smart_display"
                videos={cauhPlaylistVideos}
            />
            <ShortsBar
                title="K-POP 플레이리스트"
                icon="smart_display"
                videos={kpopPlaylistVideos}
            />
            <ContentCards />
            <LifeConvenience />
            <Footer />
        </main>
    );
}
