import styles from '../styles/artistPresentation.module.css'

function ArtistPresentation() {
    return (
        <>
            <div className={styles.imgAndDescriptionDiv}>
                <div className={styles.profileImgDiv}>
                    <img src="#" alt="Artist profile image" />
                    <input type="file" name="image" />
                </div>
                <div className={styles.descriptionDiv}>
                    <p>Description</p>
                    <button>Edit Description</button>
                </div>

            </div>
        </>
    )
}

export default ArtistPresentation