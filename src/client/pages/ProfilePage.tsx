import Header from '../components/Header'
import MainContent from '../components/MainContent'
import styles from '../styles/profilePage.module.css'
import ArtistPresentation from '../components/ArtistPresentation'

function ProfilePage() {
    return (
        <>
            <Header />
            <ArtistPresentation />
            <MainContent>

                <div className={styles.songs}>
                    <h2>ProfilePage songs</h2>
                </div>

            </MainContent>
        </>
    )
}

export default ProfilePage