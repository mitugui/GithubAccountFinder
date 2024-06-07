import { useState } from "react"
import Search from "../../components/Search"
import User from "../../components/User"
import Error from "../../components/Error"
import { iUser } from "../../interfaces/iUser"

const Home = () => {
    const [user, setUser] = useState<iUser | null>(null)
    const [error, setError] = useState(false)

    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()

        setError(false)
        setUser(null)

        if (res.status === 404) {
            setError(true)
            return
        }

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
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    )
}

export default Home