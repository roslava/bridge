'use client';

import { useState, useEffect } from 'react';
import TimeLine from '@/components/Timeline/Timeline';
import styles from '@/app/home/page.module.css';

export default function Home() {
    const [currentSegment, setCurrentSegment] = useState('');
    const [scrollPercent, setScrollPercent] = useState(0); // Процент прокрутки

    // Обработчик wheel-событий
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault(); // Отменяем стандартное поведение скролла

            // Обновляем процент прокрутки
            const delta = event.deltaY; // Насколько прокрутили колесо
            const newScrollPercent = Math.min(Math.max(scrollPercent + delta * 0.1, 0), 100); // Ограничиваем от 0 до 100
            setScrollPercent(newScrollPercent);

            // Определение текущего сегмента (включительно)
            updateSegment(newScrollPercent);
        };

        // Добавляем обработчик wheel-событий
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollPercent]);

    // Обновление сегмента
    const updateSegment = (percent) => {
        let newSegment = '';
        if (percent <= 20) {
            newSegment = 'A';
        } else if (percent <= 40) {
            newSegment = 'B';
        } else if (percent <= 60) {
            newSegment = 'C';
        } else if (percent <= 80) {
            newSegment = 'D';
        } else {
            newSegment = 'E';
        }

        // Обновляем состояние только если сегмент изменился
        if (newSegment !== currentSegment) {
            setCurrentSegment(newSegment);
        }

        // Заполнение timeLine
        const timeLine = document.getElementById('timeLine');
        if (timeLine) {
            timeLine.style.background = `linear-gradient(to right, #4CAF50 ${percent}%, #ddd ${percent}%)`;
        }
    };

    // Обработчик клика на сегмент
    const handleSegmentClick = (segment) => {
        let percent = 0;
        switch (segment) {
            case 'A':
                percent = 0;
                break;
            case 'B':
                percent = 25;
                break;
            case 'C':
                percent = 50;
                break;
            case 'D':
                percent = 75;
                break;
            case 'E':
                percent = 100;
                break;
            default:
                percent = 0;
        }

        setScrollPercent(percent); // Устанавливаем процент прокрутки
        updateSegment(percent); // Обновляем сегмент
    };

    return (
        <div className={styles.container}>
            <div id="ShowBlock" className={styles.showBlock}>
                {currentSegment && `Сегмент ${currentSegment}`}
            </div>
            <TimeLine onSegmentClick={handleSegmentClick} />
        </div>
    );
}