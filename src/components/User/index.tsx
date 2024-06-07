import { iUser } from "../../interfaces/iUser"
import { MdLocationPin } from "react-icons/md"

const User = ({
    avatar_url,
    login,
    location,
    followers,
    following
}: iUser) => {
    return (
        <div>
            <img src={avatar_url} alt={`Imagem de avatar de ${login}`}></img>
            <h2>{login}</h2>
            {location && (
                <p>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div>
                <div>
                    <p>Seguidores:</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>
    )
}

export default User