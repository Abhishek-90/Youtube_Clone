import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  padding: 8px 20px 8px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  & > button {
    background-color: transparent;
    border: none;
    padding: 14px 12px;
    border-radius: 50px;
    display: flex;
    cursor: pointer;

    img,
    svg {
      width: 18px;
      pointer-events: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
      padding: 10px 6px;
    }
  }

  & > a {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > img {
      width: 120px;

      @media (max-width: 768px) {
        width: 100px;
      }
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  flex: 1;
  position: relative;
  & > input {
    height: 32px;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 12px;
    font-size: 16px;
    flex: 1;

    &:focus {
      outline: 1px solid rgba(0, 0, 240, 0.4);
    }
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const SearchIcon = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10px;
  width: auto;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  pointer-events: none;

  & > img {
    width: 25px;
  }

  @media (max-width: 768px) {
    right: 5px;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 30px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignInButton = styled.button`
  padding: 0 12px;
  background-color: transparent;
  border: none;
  font-size: 14px;
  border-radius: 50px;
  color: rgba(0, 0, 230, 0.6);
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 230, 0.08);
  }
`;
