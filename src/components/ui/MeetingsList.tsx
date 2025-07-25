import React, { useState } from 'react';
import './MeetingsList.css';

const MeetingsList = () => {
    const meetings = [
        {
            id: 1,
            hashtag: '#навечеринку',
            title: 'Встреча с инвесторами Яндекса по вопросам стартапа проекта',
            time: 'Сегодня 12:20'
        },
        {
            id: 2,
            hashtag: '#переговоры',
            title: 'Обсуждение условий сотрудничества',
            time: 'Завтра 14:00'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="meetings-container">
            {/* Карточка встречи */}
            <div className="meeting-card">
                <div className="hashtag">{meetings[currentIndex].hashtag}</div>
                <div className="meeting-title">{meetings[currentIndex].title}</div>
                <div className="meeting-time">{meetings[currentIndex].time}</div>
            </div>
        </div>
    );
};

export default MeetingsList;