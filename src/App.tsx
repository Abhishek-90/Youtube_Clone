import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./firebase";
import { setUser } from "./store/UserSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
export default App;
