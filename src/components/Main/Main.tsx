import { useEffect, useState } from "react";
import styled from "styled-components";
import millify from "millify";
import { formatDistanceToNowStrict } from "date-fns";

const getDate = (date: string): string => {
  const convertedDate = new Date(date);
  const formatedDate = formatDistanceToNowStrict(convertedDate);
  return formatedDate;
};

function Main() {
  const [videos, setVideos] = useState<any>([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=player,statistics,snippet&key=AIzaSyCZgaU0hxFo26HjvGLa3muHfK2no2G08yo&chart=mostPopular&pageToken=CAUQAA&maxResults=20"
    ).then((response: any) => {
      response.json().then((json: any) => {
        setVideos(json.items);
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
                <a>
                  <span>{item.snippet.title}</span>
                  <span>{item.snippet.channelTitle}</span>
                  <span>
                    {millify(item.statistics.viewCount)} Views |{" "}
                    {getDate(item.snippet.publishedAt)} ago
                  </span>
                </a>
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

const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 12px 16px;
`;

const Thumbnail = styled.div`
  margin-top: -12px;
  & > img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    @media (min-width: 769px) {
      border-radius: 10px;
    }
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

  & > a {
    font-size: 14px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    span {
      line-height: 1.5;

      &:first-child {
        font-weight: 600;
        height: 2.9rem;
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
