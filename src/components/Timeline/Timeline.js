import styles from '@/components/Timeline/Timeline.module.css';

const TimeLine = () => {
    return (
        <div id="timeLine" className={styles.timeLine}>
            <div className={styles.segment} data-segment="A"></div>
            <div className={styles.segment} data-segment="B"></div>
            <div className={styles.segment} data-segment="C"></div>
            <div className={styles.segment} data-segment="D"></div>
            <div className={styles.segment} data-segment="E"></div>
        </div>
    );
};

export default TimeLine;