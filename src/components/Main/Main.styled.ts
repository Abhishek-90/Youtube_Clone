import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  @media (min-width: 769px) {
    padding-right: 20px;
  }
`;

export const Content = styled.div`
  width: 95%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
  row-gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export const VideoItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 12px 16px;

  &:hover {
    @media (min-width: 769px) {
      background-color: white;
      transition: transform 300ms;
      transform: scale(1.1, 1.1);
      padding: 12px 0 0 0;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Thumbnail = styled.div`
  margin-top: -12px;
  & > img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const VideoInformation = styled.div`
  display: flex;
  padding: 12px 0;
  color: rgba(0, 0, 0, 0.6);
  & > div > img {
    border-radius: 100%;
    width: 50px;
    @media (max-width: 768px) {
      width: 40px;
    }
  }
  div {
    font-size: 14px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    span {
      line-height: 1.5;

      &:first-child {
        font-weight: 600;
        height: auto;
        max-height: 2.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(0, 0, 0, 1);
      }

      &:nth-child(n + 2) {
        font-size: 11px;
      }
    }
  }
`;
