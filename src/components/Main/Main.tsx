import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addVideos } from "../../store/VideoListSlice";
import { IVideoData } from "../../Shared/interfaces";
import millify from "millify";
import * as S from "./Main.styled";

const getDate = (date: string): string => {
  const convertedDate = new Date(date);
  const formatedDate = formatDistanceToNowStrict(convertedDate);
  return formatedDate;
};

function Main() {
  const videos: IVideoData[] = useSelector((state: any) => state.videos);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}${process.env.REACT_APP_YOUTUBE_GET_VIDEO_LIST}`
    )
      .then((response: any) => response.json())
      .then((json: any) => {
        dispatch(addVideos(json.videoData));
        setIsLoading(false);
        // setIsLoading(false);
      });
  }, []);

  return (
    <S.Container>
      {isLoading && <img src="/images/spinner.svg" alt="spinner" />}
      {!isLoading && videos.length > 0 && (
        <S.Content>
          {videos.map((item: IVideoData) => {
            return (
              <S.VideoItem key={item.id}>
                <S.Thumbnail>
                  <img src={item.thumbnailUrl} alt="" />
                </S.Thumbnail>
                <S.VideoInformation>
                  <div>
                    <img
                      src={
                        item.channelThumbnailUrl
                          ? item.channelThumbnailUrl
                          : "/images/user.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <span>{item.title}</span>
                    <span>{item.channelTitle}</span>
                    <span>
                      {millify(item.viewCount)} Views |{" "}
                      {getDate(item.publishedAt)} ago
                    </span>
                  </div>
                </S.VideoInformation>
              </S.VideoItem>
            );
          })}
        </S.Content>
      )}
    </S.Container>
  );
}

export default Main;
