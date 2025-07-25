import React from 'react';
import './MeetingCard.css';

interface MeetingCardProps {
    hashtag: string;
    title: string;
    time: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ hashtag, title, time }) => {
    return (
        <div className="meeting-card">
            <div className="hashtag">{hashtag}</div>
            <div className="meeting-title">{title}</div>
            <div className="meeting-time">{time}</div>
        </div>
    );
};

export default MeetingCard;