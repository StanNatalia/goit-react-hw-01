import css from "./FriendListItem.module.css";
import clsx from "clsx"

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.itemWrapper}>
            
             <img className={css.image} src={avatar} alt="Avatar" width="48" />
             <p>{name}</p>
             <p className={clsx(
                css.status,isOnline ? css.green : css.red)}>
                {isOnline ? "Online" : "Offline"}
             </p>

        </div>   
    )
}

