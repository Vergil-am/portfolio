import styles from "../styles/Blog.module.css"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from "next/image";

export default function Window({ post }) {
  console.log(post)
  return (
    <div className={styles.Window}>
      <div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.mainImg}
            src={"https:" + post.fields.thumbnail.fields.file.url}
            fill
            objectFit="cover"
            style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
          />
        </div>
        <h3 style={{ marginLeft: '20px', marginRight: '20px' }}>
          {post.fields.title}
        </h3>
        <p style={{ marginLeft: '10px', marginRight: '10px' }}>
          {post.fields.snippet}
        </p>
        <p style={{
          display: "flex", alignItems: 'flex-end',
          justifyContent: 'flex-end', color: 'white',
          position: "absolute", bottom: "10px", right: '10px'
        }}>
          <CalendarTodayIcon />
          {post.sys.createdAt.split('T')[0]}
        </p>
      </div>
    </div>
  )
}
