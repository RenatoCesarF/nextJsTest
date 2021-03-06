
import styles from './TwitterMedia.module.css'
function isImage(url) {
    if (url != null) {
        
        if (url.includes('.jpg') || url.includes('.png') || url.includes('.gif')) {
            return true
        }

        return false
    }
}

export default function TwitterMedia(props) {
    
    return (
        <div>
            { isImage(props.twMedia) ?
                    
                (<img
                    onClick={() => {
                        window.open(props.twMedia)
                    }}
                    className={styles.twMedia}
                    src={props.twMedia} >
                </img>)
                :
                (<video
                    playsInline
                    controls
                    className={styles.twMedia}
                    src={props.twMedia}
                />
                    
                )
            }
        </div>
    )
}