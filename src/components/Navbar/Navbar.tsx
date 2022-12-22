import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Content>
        <Menu>
          <button>
            <img src="/images/hamburger.svg" alt="" />
          </button>
          <a>
            <img src="/images/yt-logo.svg" alt="" />
          </a>
        </Menu>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  & > button {
    background-color: transparent;
    border: none;
    padding: 14px 12px;
    border-radius: 50px;
    display: flex;

    img,
    svg {
      width: 18px;
      pointer-events: none;
      margin: auto 0px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  & > a {
    display: inline-flex;
    vertical-align: middle;
    height: auto;

    & > img {
      width: 120px;
    }
  }
`;

export default Navbar;
