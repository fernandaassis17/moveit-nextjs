import { isAssetError } from 'next/dist/client/route-loader'
import { useState, useEffect } from 'react'
import styles from '../styles/components/CountDowm.module.css'


let countDownTimeout: NodeJS.Timeout


export function CountDowm() {
    const [time, setTime] = useState(0.1 * 60)
    const [isactive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


    function startCountDown() {
        setIsActive(true)
    }

    useEffect(() => {
        if (isactive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else if (isactive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isactive, time])


    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    return (
        <div>
            <div className={styles.countdowmContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button >
            ) : (
                    <>

                        {isactive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar um ciclo
                            </button >) : (

                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountDown}
                                >
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    )
}