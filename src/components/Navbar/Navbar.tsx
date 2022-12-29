import { useDispatch, useSelector } from "react-redux";
import * as S from "./Navbar.styled";
import { addVideos } from "../../store/VideoListSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { setUser } from "../../store/UserSlice";

function Navbar() {
  let setTimeoutId: any = null;
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
        `${process.env.REACT_APP_YOUTUBE_SEARCH_VIDEO_LIST}type=videos&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&q=${key}&maxResults=20`
      )
        .then((response: any) => {
          return response.json();
        })
        .then((json) => {
          const items = json.items;
          const ids = items.map((item: any) => {
            return item.id.videoId;
          });
          fetch(
            `${
              process.env.REACT_APP_YOUTUBE_GET_VIDEO_LIST
            }part=player,statistics,snippet&key=${
              process.env.REACT_APP_YOUTUBE_API_KEY
            }&id=${ids.join(",")}`
          )
            .then((response) => {
              return response.json();
            })
            .then((json) => dispatch(addVideos(json.items)));
        })
        .catch((error) => {
          console.log(error.message);
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
      {userInfo !== null ? (
        <S.User>
          <img src={userInfo.photoURL} alt="" />
        </S.User>
      ) : (
        <S.SignInButton onClick={signInWithGoogle}>Sign In</S.SignInButton>
      )}
    </S.Container>
  );
}

export default Navbar;
