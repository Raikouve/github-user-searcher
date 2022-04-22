import { useState } from "react";
import Btn from "./components/Button";
import Display from "./components/Display";
import { apiCall } from "./services/api";
import SearchInput from "./components/Input";
import './styles/app.css';

function App() {

  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  async function getUser() {
    const result = apiCall(username);
    setUser(await result);
    setIsClicked(true);
  }

  function setSearch({ target: { value } }: any) {
    setUsername(value);
  }

  if (isClicked === false)
    return (
      <section>
        <h1>devFinder</h1>
        <div className="searchContainer">
          <SearchInput username={username} setSearch={setSearch} />
          <Btn trigger={getUser} />
        </div>
      </section>
    );

  return (
    <section>
      <h1>devFinder</h1>
      <div className="searchContainer">
        <SearchInput username={username} setSearch={setSearch} />
        <Btn trigger={getUser} />
      </div>
      <Display user={user} />
    </section>
  );
}

export default App;
