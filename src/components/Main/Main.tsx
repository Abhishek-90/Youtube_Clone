import { useEffect } from "react";
import millify from "millify";
import { formatDistanceToNowStrict } from "date-fns";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addVideos } from "../../store/VideoListSlice";
import * as S from "./Main.styled";

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
    <S.Container>
      <S.Content>
        {videos.map((item: any) => {
          return (
            <S.VideoItem key={item.id}>
              <S.Thumbnail>
                <img
                  src={
                    item.snippet.thumbnails.maxres?.url ||
                    item.snippet.thumbnails.medium?.url
                  }
                  alt=""
                />
              </S.Thumbnail>
              <S.VideoInformation>
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
              </S.VideoInformation>
            </S.VideoItem>
          );
        })}
      </S.Content>
    </S.Container>
  );
}

export default Main;
