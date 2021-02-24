import { isAssetError } from 'next/dist/client/route-loader'
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CountDowm.module.css'


let countDownTimeout: NodeJS.Timeout



export function CountDowm() {

    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60)
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
            startNewChallenge()
        }
    }, [isactive, time])


    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(25 * 60)
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
                    <img src="icons/check.svg" alt="" />
                </button >
            ) : (
                    <>

                        {isactive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar um ciclo  <img src="icons/stop.svg" alt="" />
                            </button >) : (

                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountDown}
                                >
                                    Iniciar um ciclo
                                    <img src="icons/play.svg" alt="" />
                                </button>
                            )}
                    </>
                )}
        </div>
    )
}