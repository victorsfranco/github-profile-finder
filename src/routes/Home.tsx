import { UserProps } from "../types/user";
import {useState} from "react";

// Components
import Search from "../components/Search/Search";
import User from "../components/User/User";
import Error from "../components/Error/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async(userName: string) => {
    setUser(null);
    setError(false);
    
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()

    if (res.status === 404) {
      setError(true);
      return;
    }

    const {avatar_url, login, location, followers, following} = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    setUser(userData);
  }


  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}

export default Home;