import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import HospitalNews from '../components/HospitalNews';
import ShortsBar from '../components/ShortsBar';
import ContentCards from '../components/ContentCards';
import LifeConvenience from '../components/LifeConvenience';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="max-w-md mx-auto space-y-6 pt-4 pb-24">
            <WeatherWidget />
            <ShortsBar />
            <ContentCards />
            <LifeConvenience />
            <Footer />
        </main>
    );
}
