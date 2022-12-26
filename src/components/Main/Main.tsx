import { useEffect } from "react";
import styled from "styled-components";
import millify from "millify";
import { formatDistanceToNowStrict } from "date-fns";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addVideos } from "../../store/VideoListSlice";

const getDate = (date: string): string => {
  const convertedDate = new Date(date);
  const formatedDate = formatDistanceToNowStrict(convertedDate);
  return formatedDate;
};

function Main() {
  const videos = useSelector((state: any) => state.videos);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_YOUTUBE_GET_VIDEO_LIST}part=player,statistics,snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&chart=mostPopular&pageToken=CAUQAA&maxResults=20`
    ).then((response: any) => {
      response.json().then((json: any) => {
        dispatch(addVideos(json.items));
      });
    });
  }, []);

  return (
    <Container>
      <Content>
        {videos.map((item: any) => {
          return (
            <VideoItem key={item.id}>
              <Thumbnail>
                <img src={item.snippet.thumbnails.high.url} alt="" />
              </Thumbnail>
              <VideoInformation>
                <div>
                  <img src="/images/user.svg" alt="" />
                </div>
                <div>
                  <span>{item.snippet.title}</span>
                  <span>{item.snippet.channelTitle}</span>
                  <span>
                    {millify(item.statistics.viewCount)} Views |{" "}
                    {getDate(item.snippet.publishedAt)} ago
                  </span>
                </div>
              </VideoInformation>
            </VideoItem>
          );
        })}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  @media (min-width: 769px) {
    padding-right: 20px;
  }
`;

const Content = styled.div`
  width: 95%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

const VideoItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 12px 16px;

  &:hover {
    z-index: 10;
    background-color: white;
    transition: transform 300ms;
    transform: scale(1.1, 1.1);
    border: 1px solid black;
    padding: 12px 0 0 0;
  }
`;

const Thumbnail = styled.div`
  margin-top: -12px;
  & > img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const VideoInformation = styled.div`
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

export default Main;
