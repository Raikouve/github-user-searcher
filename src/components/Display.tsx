import { formatDate } from "../helpers/formatDate";
import Avatar from '@mui/material/Avatar';
import '../styles/display.css';

function Display({user}: any) {

  const createdAt = formatDate(user.created_at)

  return (
    <section className="displaySection">
      <div>
        <Avatar
          srcSet={user.avatar_url}
          sx={{ width: 64, height: 64 }}
        />
        <h2>{user.name}</h2>
      </div>
      <span>{`@${user.login}`}</span>
      <p>{user.bio}</p>
      <span>{`Joined ${createdAt}`}</span>
    </section>
  );
}

export default Display;
