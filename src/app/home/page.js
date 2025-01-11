'use client';

import { useState, useEffect } from 'react';
import TimeLine from '@/components/Timeline/Timeline';
import styles from '@/app/home/page.module.css';

export default function Home() {
    const [currentSegment, setCurrentSegment] = useState('');
    const [scrollPercent, setScrollPercent] = useState(0); // Процент прокрутки

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault(); // Отменяем стандартное поведение скролла

            // Обновляем процент прокрутки
            const delta = event.deltaY; // Насколько прокрутили колесо
            const newScrollPercent = Math.min(Math.max(scrollPercent + delta * 0.1, 0), 100); // Ограничиваем от 0 до 100
            setScrollPercent(newScrollPercent);

            // Определение текущего сегмента
            let newSegment = '';
            if (newScrollPercent < 20) {
                newSegment = 'A';
            } else if (newScrollPercent < 40) {
                newSegment = 'B';
            } else if (newScrollPercent < 60) {
                newSegment = 'C';
            } else if (newScrollPercent < 80) {
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
                timeLine.style.background = `linear-gradient(to right, #4CAF50 ${newScrollPercent}%, #ddd ${newScrollPercent}%)`;
            }
        };

        // Добавляем обработчик wheel-событий
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollPercent, currentSegment]);

    return (
        <div className={styles.container}>
            <div id="ShowBlock" className={styles.showBlock}>
                {currentSegment && `Сегмент ${currentSegment}`}
            </div>
            <TimeLine />
        </div>
    );
}