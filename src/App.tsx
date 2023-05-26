import { useEffect, useState } from "react";
import Profile from "./views/Profile";
import Loading from "./views/Loading";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  return (
    <>
      <Loading loaded={loaded} />
      {loaded && <Profile />}
    </>
  );
}

export default App;
