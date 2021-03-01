import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdowmContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const {resetCountDown} = useContext(CountdowmContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.ChallengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.ChallengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallengeNotActive}>
                        <strong>Inicie um ciclo
                                para receber desafios</strong>
                        <p>
                        <img src={'icons/level-up.svg'} />
                    Avance de level completando desafios
                </p>
                    </div>

                )}
        </div>
    )
}