import {UserProps} from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import classes from "./User.module.css";

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.personal_info}>
        <img src={avatar_url} alt={`Foto de perfil do usuário ${login}`} />
        <h2>{login}</h2>
      </div>
      <div className={classes.location}>
        <MdLocationPin className={classes.location_pin} />
        <span>{location}</span>
      </div>
      <ul>
        <li className={classes.followers_box}>
          <p>Seguidores:</p>
          <div className={classes.count_box}>{followers}</div>
        </li>
        <li>
        <p>Seguindo:</p>
          <div className={classes.count_box}>{following}</div>
        </li>
      </ul>
      <button>Ver principais projetos</button>

    </div>

  );  

}

export default User