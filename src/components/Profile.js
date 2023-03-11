import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>This is the profile page made using Functional Component using using outlet</h1>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default Profile;