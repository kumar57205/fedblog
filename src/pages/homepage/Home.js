import React from 'react';
import Header from '../../component/header/Header';
import MainContent from '../../component/listing/MainContent';
import Sidebar from '../../component/sidebar/Sidebar';
import TopBar from '../../component/topbar/TopBar';
import Footer from '../../component/footer/footer';
import "./Home.css";

function Home() {
    return (
        <div>
            <TopBar/>
            <Header />
            <div className="home-page">
                <MainContent/>
                <Sidebar />
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
