import styles from '@/components/Timeline/Timeline.module.css';

const TimeLine = ({ onSegmentClick }) => {
    // Обработчик клика на сегмент
    const handleClick = (segment) => {
        if (onSegmentClick) {
            onSegmentClick(segment);
        }
    };

    return (
        <div id="timeLine" className={styles.timeLine}>
            <div className={styles.segment} data-segment="A" onClick={() => handleClick('A')}></div>
            <div className={styles.segment} data-segment="B" onClick={() => handleClick('B')}></div>
            <div className={styles.segment} data-segment="C" onClick={() => handleClick('C')}></div>
            <div className={styles.segment} data-segment="D" onClick={() => handleClick('D')}></div>
            <div className={styles.segment} data-segment="E" onClick={() => handleClick('E')}></div>
        </div>
    );
};

export default TimeLine;