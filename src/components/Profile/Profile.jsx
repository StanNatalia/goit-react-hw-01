import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
return (
    <div className={css.wrapper}>
        <div className={css.info}>
             <img className={css.img}
             src={image}
             alt="User avatar"
             />
           <p className={css.title}>{name}</p>
           <p className={css.text}>@{tag}</p>
           <p className={css.text}>{location}</p>
        </div>

        <ul className={css.stats}>
        <li className={css.item}>
            <span className={css.statText}>Followers</span>
            <span className={css.number}>{followers}</span>
        </li>
        <li className={css.item}>
            <span className={css.statText}>Views</span>
            <span className={css.number}>{views}</span>
        </li>
        <li className={css.item}>
            <span className={css.statText}>Likes</span>
            <span className={css.number}>{likes}</span>
        </li>
      </ul>

    </div>

    )}

    


