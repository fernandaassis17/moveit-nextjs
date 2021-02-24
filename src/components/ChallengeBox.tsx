import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasActiveChallenge = true

    return (
        <div className={styles.ChallengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>

                    <footer>
                        <button 
                        type="button"
                        className={styles.ChallengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.ChallengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallengeNotActive}>
                        <strong>Inicie um ciclo para receber desafios a
                serem completados</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                    Avance de level completando desafios
                </p>
                    </div>

                )}
        </div>
    )
}