import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/fernandaassis17.png" alt="Fernanda Assis"/>
            <div>
                <strong>Fernanda Assis</strong>
                
                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
                </p>
            </div>
        </div>
    )
}