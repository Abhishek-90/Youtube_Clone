import { useDispatch } from "react-redux";
import * as S from "./Navbar.styled";
import { addVideos } from "../../store/VideoListSlice";

function Navbar() {
  let setTimeoutId: any = null;
  const dispatch = useDispatch();

  function search(key: string) {
    if (setTimeoutId !== null) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?type=videos&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&q=${key}&maxResults=20`
      )
        .then((response: any) => {
          return response.json();
        })
        .then((json) => {
          const items = json.items;
          const ids = items.map((item: any) => {
            return item.id.videoId;
          });
          console.log(ids.join(","));
          fetch(
            `${
              process.env.REACT_APP_YOUTUBE_VIDEO_LIST
            }part=player,statistics,snippet&key=${
              process.env.REACT_APP_YOUTUBE_API_KEY
            }&id=${ids.join(",")}&maxResults=20`
          )
            .then((response) => {
              return response.json();
            })
            .then((json) => dispatch(addVideos(items)));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 800);
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
        <img src="/images/user.svg" alt="" />
      </S.User>
    </S.Container>
  );
}

export default Navbar;
