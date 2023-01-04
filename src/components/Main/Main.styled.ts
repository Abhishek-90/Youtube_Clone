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
  width: 90%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  margin-top: -12px;
  & > img {
    width: 260px;
    border-radius: 10px;
  }
`;

export const VideoItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 12px 0;
  width: 260px;
  margin-bottom: 10px;

  &:hover {
    @media (min-width: 769px) {
      z-index: 10;
      background-color: white;
      transition: transform 300ms;
      transform: scale(1.2, 1.2);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);

      ${Thumbnail} {
        img {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
    }
  }
`;

export const VideoInformation = styled.div`
  display: flex;
  padding: 12px 8px;
  color: rgba(0, 0, 0, 0.6);
  flex: 1;

  & > div {
    :first-child {
      & > img {
        border-radius: 100%;
        width: 40px;
      }
    }

    :nth-child(2) {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;

      & > span {
        line-height: 1.5;

        &:first-child {
          font-size: 14px;
          font-weight: 600;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 2) {
          font-size: 11px;
        }
      }
    }
  }
`;
