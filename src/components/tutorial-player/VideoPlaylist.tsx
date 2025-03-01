import type { VideoData } from "../../types/VideoData";
import "./VideoPlaylist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faX } from "@fortawesome/free-solid-svg-icons";

interface Props {
  videos: VideoData[];
  playVideoCallback: (vid: VideoData) => void;
  deleteVideoCallback: (vid: VideoData) => void;
  className?: string;
}

const VideoPlaylist = ({
  videos,
  playVideoCallback,
  deleteVideoCallback,
  className = "",
}: Props) => {
  return (
    <div className={className}>
      {videos.map((vid) => {
        return (
          <div className="playlist-row" key={vid.id.videoId}>
            <button
              className="playlist-video-play"
              onClick={() => playVideoCallback(vid)}
            >
              <FontAwesomeIcon icon={faPlay} />
            </button>
            <img
              style={{ height: "3em" }}
              src={vid.snippet.thumbnails.default.url}
            />
            <div className="playlist-video-info">
              <span className="playlist-row-title">{vid.snippet.title}</span>
              <div style={{ fontSize: "0.61em" }}>
                {vid.snippet.channelTitle}
              </div>
            </div>
            <button
              className="playlist-video-delete"
              onClick={() => deleteVideoCallback(vid)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default VideoPlaylist;
