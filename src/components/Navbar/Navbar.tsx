import * as S from "./Navbar.styled";

function Navbar() {
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
        <input type="text" placeholder="Search" />
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
