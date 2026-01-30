import React, { useState } from 'react';

export default function ContentCards() {
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const [currentQuiz, setCurrentQuiz] = useState(null);

    // 20 Health OX Quiz Data
    const quizList = [
        { q: "하루에 물 2L 이상 마시는 것이 건강에 무조건 좋을까요?", a: false, exp: "신장 기능에 이상이 있거나 특정 질환이 있는 경우, 과도한 수분 섭취는 오히려 해로울 수 있습니다." },
        { q: "탄산수는 물 대신 마셔도 건강에 아무런 문제가 없을까요?", a: false, exp: "탄산수는 산성이라 치아 부식의 우려가 있고, 과민성 대장 증후군이 있다면 복부 팽만을 유발할 수 있습니다." },
        { q: "아침 공복에 사과를 먹는 것은 건강에 좋을까요?", a: true, exp: "사과의 펙틴 성분은 장 운동을 돕고 배변 활동을 원활하게 하여 아침에 먹으면 좋습니다." },
        { q: "저녁 늦게 먹는 야식은 소화가 잘 안 되어서 살이 더 찌는 걸까요?", a: true, exp: "밤에는 신진대사가 떨어지고 인슐린 저항성이 높아져서 같은 양을 먹어도 지방으로 축적되기 쉽습니다." },
        { q: "목이 뻐근할 때 목을 빙빙 돌리는 스트레칭은 좋을까요?", a: false, exp: "목을 심하게 돌리면 경추 디스크에 압력이 가해져 오히려 해로울 수 있습니다. 천천히 당기는 스트레칭이 좋습니다." },
        { q: "식사 직후에 커피를 마시는 것은 철분 흡수를 방해할까요?", a: true, exp: "커피의 탄닌 성분은 철분과 결합하여 흡수를 방해하므로, 식후 1시간 정도 지난 뒤에 마시는 것이 좋습니다." },
        { q: "감기에 걸렸을 때 소주에 고춧가루를 타 마시면 효과가 있을까요?", a: false, exp: "알코올은 염증을 악화시키고 탈수를 유발하여 감기 회복을 더디게 만듭니다. 의학적 근거가 없는 민간요법입니다." },
        { q: "우유를 마시면 위벽이 보호되어 속쓰림이 완화될까요?", a: false, exp: "우유의 단백질과 칼슘은 위산 분비를 촉진하여 일시적으로는 편해지더라도 나중에는 속쓰림을 더 악화시킬 수 있습니다." },
        { q: "비타민 C는 많이 먹을수록 좋을까요?", a: false, exp: "수용성이라 배출되긴 하지만, 과다 섭취 시 설사, 복통, 신장 결석 등의 부작용이 생길 수 있습니다." },
        { q: "어두운 곳에서 책을 보면 눈이 나빠질까요?", a: true, exp: "어두운 곳에서는 눈의 조절 근육이 과도하게 긴장하여 가성 근시를 유발하고 눈의 피로도를 높입니다." },
        { q: "땀을 많이 흘리면 살이 빠지는 걸까요?", a: false, exp: "땀으로 배출되는 것은 수분이므로, 물을 마시면 다시 체중이 돌아옵니다. 지방 연소와는 직접적인 관련이 적습니다." },
        { q: "식후에 바로 양치질을 하는 것이 치아 건강에 좋을까요?", a: false, exp: "산성 음식(과일, 커피 등)을 먹은 직후에는 치아 표면이 약해져 있으므로 물로 헹군 뒤 30분 후에 닦는 것이 좋습니다." },
        { q: "숙취 해소에는 사우나에서 땀을 빼는 것이 최고일까요?", a: false, exp: "음주 후 사우나는 탈수를 심화시키고 혈압을 상승시켜 심장에 무리를 줄 수 있어 매우 위험합니다." },
        { q: "관절염 환자는 운동을 아예 하지 않는 것이 좋을까요?", a: false, exp: "적절한 근력 운동은 관절 주변 근육을 강화하여 통증을 줄여줍니다. 수영이나 걷기 등 무리가 적은 운동을 추천합니다." },
        { q: "코피가 날 때 고개를 뒤로 젖히는 것이 올바른 대처법일까요?", a: false, exp: "피가 기도로 넘어가 폐렴을 유발할 수 있습니다. 고개를 앞으로 숙이고 콧등을 눌러 지혈해야 합니다." },
        { q: "귀지는 판 파낼수록 귀 건강에 좋을까요?", a: false, exp: "귀지는 외이도를 보호하는 역할을 합니다. 인위적으로 파내면 상처가 나거나 세균 감염의 위험이 있습니다." },
        { q: "딸꾹질을 멈추려면 숨을 참는 것이 효과가 있을까요?", a: true, exp: "숨을 참으면 혈액 속 이산화탄소 농도가 높아져 횡격막 자극이 줄어들어 딸꾹질이 멈추는 데 도움이 됩니다." },
        { q: "빈혈에는 무조건 시금치가 최고일까요?", a: false, exp: "시금치의 철분 흡수율은 낮은 편입니다. 붉은 살코기나 조개류 등 동물성 철분이 흡수가 훨씬 잘 됩니다." },
        { q: "손톱 반달 부분이 없으면 건강이 안 좋은 걸까요?", a: false, exp: "손톱 반달은 개인의 손톱 성장 속도나 구조에 따라 안 보일 수 있으며, 질병의 직접적인 신호는 아닙니다." },
        { q: "겨울철 실내 적정 습도는 40~60% 일까요?", a: true, exp: "습도가 너무 낮으면 호흡기 점막이 건조해져 바이러스 감염에 취약해지므로 적정 습도를 유지해야 합니다." }
    ];

    const openQuiz = () => {
        const randomQuiz = quizList[Math.floor(Math.random() * quizList.length)];
        setCurrentQuiz(randomQuiz);
        setIsQuizOpen(true);
        setShowResult(false);
        setIsCorrect(false);
    };

    const handleAnswer = (userAnswer) => {
        if (!currentQuiz) return;
        const correct = userAnswer === currentQuiz.a;
        setIsCorrect(correct);
        setShowResult(true);
    };

    const resetQuiz = () => {
        setIsQuizOpen(false);
        setShowResult(false);
        setIsCorrect(false);
        setCurrentQuiz(null);
    };

    return (
        <>
            <section className="px-4 grid grid-cols-2 gap-4">
                {/* Banner */}
                <div className="col-span-2 bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 relative h-48 flex items-center group cursor-pointer">
                    <img
                        alt="Medical Seminar"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuRR0mSYqiCRSmJDHq399vgPbqsBmsqpxcv-0c7-hK-3tfOCxeYopb4BmIjUFITljovYPMgA11yc_LxCPvc7kxLO-HFQkvKeJzJiB01P6qTxvyDdnzPbrUsv_mpWDDJd5qsak3yDw3IdWYCzbfIu9TfUfHoRVKfpdLZtuyi-DKL5l4YD31fxvAry7d7KjA9C_-7JwPEqdddaEblKgSgOLdsTovxBcIR25cilfgUY5nKMK2kKMDK8yUN9D7ofCPok_b1FbqUffjx4Q"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-transparent"></div>
                    <div className="relative z-10 p-6 max-w-[70%]">
                        <span className="inline-block px-2 py-1 bg-accent-blue/20 text-accent-blue text-xs font-bold rounded mb-2">추천 콘텐츠</span>
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">CAU 명의에게 듣는<br />100세 건강 비결</h3>
                        <p className="text-gray-300 text-xs mb-4">최신 의학 정보와 건강 상식을 쉽고 재미있게 알아보세요.</p>
                        <button className="bg-primary hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors flex items-center">
                            시청하기 <span className="material-icons text-sm ml-1">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Quiz */}
                <div className="col-span-2 bg-white dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-icons text-green-500">quiz</span>
                            <h4 className="font-bold text-gray-900 dark:text-white">매일 건강 OX 퀴즈</h4>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">퀴즈 풀고 건강 상식 확인하세요!</p>
                    </div>
                    <button
                        onClick={openQuiz}
                        className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold py-2 px-4 rounded-lg"
                    >
                        도전하기
                    </button>
                </div>
            </section>

            {/* Quiz Modal */}
            {isQuizOpen && currentQuiz && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-scale-up">
                        <div className="bg-blue-600 p-6 text-center relative">
                            <h3 className="text-white font-bold text-lg mb-1">오늘의 건강 퀴즈</h3>
                            <p className="text-blue-100 text-xs">매일 매일 상식이 쑥쑥!</p>
                            <button
                                onClick={resetQuiz}
                                className="absolute top-4 right-4 text-white/80 hover:text-white"
                            >
                                <span className="material-icons">close</span>
                            </button>
                        </div>

                        <div className="p-8">
                            {!showResult ? (
                                <>
                                    <div className="mb-8 text-center">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold mb-4">Q.</span>
                                        <p className="text-lg font-bold text-gray-800 dark:text-white leading-relaxed">
                                            {currentQuiz.q}
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => handleAnswer(true)}
                                            className="flex-1 aspect-square rounded-xl border-2 border-green-500/30 hover:bg-green-50 dark:hover:bg-green-900/20 text-green-600 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2"
                                        >
                                            <span className="text-6xl font-black">O</span>
                                            <span className="font-bold">맞다</span>
                                        </button>
                                        <button
                                            onClick={() => handleAnswer(false)}
                                            className="flex-1 aspect-square rounded-xl border-2 border-red-500/30 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 hover:scale-105 transition-all flex flex-col items-center justify-center gap-2"
                                        >
                                            <span className="text-6xl font-black">X</span>
                                            <span className="font-bold">아니다</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center animate-fade-in">
                                    <div className="mb-4">
                                        <span className={`material-icons text-6xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                            {isCorrect ? 'check_circle' : 'cancel'}
                                        </span>
                                        <h4 className={`text-xl font-bold mt-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                                            {isCorrect ? '정답입니다!' : '오답입니다!'}
                                        </h4>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6 text-left">
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            <span className="font-bold block mb-1 text-blue-600">해설:</span>
                                            {currentQuiz.exp}
                                        </p>
                                    </div>
                                    <button
                                        onClick={resetQuiz}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
                                    >
                                        확인
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
