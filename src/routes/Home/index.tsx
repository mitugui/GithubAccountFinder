import { useState } from "react"
import Search from "../../components/Search"
import { iUser } from "../../interfaces/iUser"

const Home = () => {
    const [user, setUser] = useState<iUser | null>(null)

    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        const { avatar_url, login, location, followers, following } = data

        const userData: iUser = {
            avatar_url,
            login,
            location,
            followers,
            following
        }

        setUser(userData)
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <p>{user.login}</p>}
        </div>
    )
}

export default Home