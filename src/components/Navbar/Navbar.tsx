import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../store/VideoListSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { removeUser, setUser } from "../../store/UserSlice";
import * as S from "./Navbar.styled";

function Navbar() {
  let setTimeoutId: NodeJS.Timeout | null = null;
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.user.user);

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        dispatch(setUser(result.user));
      })
      .catch((e: ErrorEvent) => {
        console.error(e.message);
      });
  }

  function search(key: string) {
    if (setTimeoutId !== null) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_YOUTUBE_SEARCH_VIDEO_LIST}?searchKey=${key}`
      )
        .then((response: any) => response.json())
        .then((json) => {
          dispatch(addVideos(json.videoData));
        })
        .catch((error) => {
          console.error(error.message);
        });
    }, 500);
  }

  return (
    <S.Container>
      <S.Menu>
        <button>
          <img src="/images/hamburger.svg" alt="" />
        </button>
        <a>
          <img src="/images/yt-logo.svg" alt="" />
        </a>
      </S.Menu>
      <S.Search>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => search(e.target.value)}
        />
        <S.SearchIcon>
          <img src="/images/search.svg" alt="search-icon" />
        </S.SearchIcon>
      </S.Search>
      <S.User>
        {userInfo ? (
          <>
            <img src={userInfo.photoURL} alt="" />
            <div>
              <button onClick={() => dispatch(removeUser())}>Sign Out</button>
            </div>
          </>
        ) : (
          <S.SignInButton onClick={signInWithGoogle}>Sign In</S.SignInButton>
        )}
      </S.User>
    </S.Container>
  );
}

export default Navbar;
