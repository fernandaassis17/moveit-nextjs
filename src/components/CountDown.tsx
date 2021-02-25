import { useContext } from 'react'
import { CountdowmContext } from '../contexts/CountDownContext'
import styles from '../styles/components/CountDowm.module.css'


export function CountDowm() {

  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isactive, 
    startCountDown, 
    resetCountDown  
    } = useContext(CountdowmContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


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