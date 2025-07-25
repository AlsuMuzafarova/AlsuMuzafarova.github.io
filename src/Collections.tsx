import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Collections.css"

import HeaderPhone from "./components/HeaderPhone";
import Header from "./components/Header";
import Slidebar from "./components/ui/Slidebar";

import warning_traiangle from "./assets/warning_triangle.svg";
import danger_figure from "./assets/red_warning.svg";
import FeaturesSection from "./components/FeaturesSection";
import UsefulSection from "./components/UsefulSection";
import plusIcon from "./assets/plusIcon.svg";
import HeaderUseful from "./components/ui/HeaderUseful";
import background1 from "./assets/Background.png";
import background2 from "./assets/Background1.png";
import background3 from "./assets/Background2.png";
import logo from "./assets/miniLogo.svg";
import iconCard1 from "./assets/iconArticles2card1.svg";
import iconCard2 from "./assets/iconArticles2card2.svg";
import businessIcon from "./assets/business-icon.svg";
import SlidebarPhone from "./components/ui/SlidebarPhone";
import SlidingMenuCollections from "./components/ui/SlidingMenuCollections";
import MeetingsList from "./components/ui/MeetingsList";

const Collections = () => {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);

    // Проверяем размер экрана при загрузке и при ресайзе
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 640); // Например, мобильная версия при ≤768px
        };

        checkScreenSize(); // Проверяем сразу
        window.addEventListener("resize", checkScreenSize); // Следим за изменениями

        return () => window.removeEventListener("resize", checkScreenSize); // Убираем слушатель при размонтировании
    }, []);

    return (
        <div className="unitop-container">
            {isMobile ? <HeaderPhone /> : <Header />}
            <main className="main-content">
                {!isMobile ? <Slidebar /> : null}
                <section className="avav">
                    <SlidingMenuCollections/>

                    <div className="emailConfirmationYellow">
                        <div className="confirmationFrameYellow">
                            <img src={warning_traiangle} alt="icon"/>
                            <div className="confirmationMessageYellow">
                                <p className="text1">Подтвердите свою почту. Перейдите по ссылке в письме или
                                    отправьте письмо ещё раз, если не нашли его</p>
                                <p className="text2" onClick={() => navigate("/NotFound")}>Отправить еще раз</p>
                            </div>
                        </div>
                    </div>

                    <div className="emailConfirmationRed">
                        <div className="confirmationFrameRed">
                            <img src={danger_figure} alt="icon"/>
                            <div className="confirmationMessageRed">
                                <p className="text1">Подтвердите свою почту. Перейдите по ссылке в письме или
                                    отправьте письмо ещё раз, если не нашли его</p>
                                <p className="text2" onClick={() => navigate("/NotFound")}>Отправить еще раз</p>
                            </div>
                        </div>
                    </div>

                    <div className="meetsFrame">
                        <div className="meetstitle">
                            <div className="meetstitle-text">
                                <h3>Встречи</h3>
                                <p>Ваши предстоящие события</p>
                            </div>
                            <button className="meetstitleButton" onClick={() => navigate("/NotFound")}>Больше</button>
                        </div>
                        <MeetingsList/>
                    </div>

                    <FeaturesSection/>

                    <UsefulSection/>

                    <div className="plus">
                        <div className="plus-frame">
                            <div className="plus-description">
                                <h2>С Плюсом лучше</h2>
                                <p>
                                    Расширенные возможности, доступ к эксклюзивным ресурсам и контенту.
                                </p>
                            </div>
                            <img src={plusIcon} alt="icon" className="plus-icon"/>
                        </div>
                    </div>

                    <div className="articles">
                        <HeaderUseful/>
                        <div className="content-articles">
                            <div className="articles-card" id="articles-card1" onClick={() => navigate("/NotFound")}>
                                <img src={background1} alt="Фоновое изображение"/>
                                <p className="text-overlay">Новое приложение – новая жизнь</p>
                            </div>
                            <div className="articles-card" id="articles-card2" onClick={() => navigate("/NotFound")}>
                                <img src={background2} alt="Фоновое изображение"/>
                                <p className="text-overlay">Как не давать деньги в долг?</p>
                            </div>
                            <div className="articles-card" id="articles-card3" onClick={() => navigate("/NotFound")}>
                                <img src={background3} alt="Фоновое изображение"/>
                                <p className="text-overlay">Как получать визитку?</p>
                            </div>
                        </div>
                    </div>

                    <div className="articles2">
                        <HeaderUseful/>
                        <div className="content-articles2">
                            <div className="articles2-card" id="articles2-card1">
                                <div className="text">
                                    <div className="text-place">
                                        <img src={logo} alt="logotype"/>
                                        <h4>С Плюсом лучше</h4>
                                        <p>Раскройте потенциал приложения на всю мощь</p>
                                    </div>
                                    <button onClick={() => navigate("/NotFound")}>Продолжить</button>
                                </div>
                                <img src={iconCard1} alt="icon" className="picture"/>
                            </div>
                            <div className="articles2-card" id="articles2-card2">
                                <div className="text">
                                    <div className="text-place">
                                        <img src={logo} alt="logotype"/>
                                        <h4>Бизнес для настоящих</h4>
                                        <p>Раскройте потенциал приложения на всю мощь</p>
                                    </div>
                                    <button onClick={() => navigate("/NotFound")}>Продолжить</button>
                                </div>
                                <img src={iconCard2} alt="icon" className="picture"/>
                            </div>
                        </div>
                    </div>

                    <div className="business">
                        <div className="business-frame">
                            <div className="business-description">
                                <h2>Откройте большее</h2>
                                <p>Шагните на новый уровень своего бизнеса</p>
                            </div>
                            <img src={businessIcon} alt="icon" className="business-icon"/>
                        </div>
                    </div>
                </section>
                {isMobile ? <SlidebarPhone/> : null}
            </main>
        </div>
    )
}

export default Collections;