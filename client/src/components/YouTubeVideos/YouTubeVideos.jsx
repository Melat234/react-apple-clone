import { useState, useEffect } from "react";

const YouTubeVideos = () => {
  const [youTubeVideos, setyouTubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBO6dPnmcpOnONe--yh7iOtCghnBdXWGTc"
    )
      .then((res) => res.json())
      .then((data) => {
        setyouTubeVideos(data.items);
      });
  }, []);
  console.log(youTubeVideos);
  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-4">Latest Videos</h2>
        <br />
      </div>
      <div className="row">
        {youTubeVideos?.map((singleVideo) => {
          let videoId = singleVideo.id.videoId;
          let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
          return (
            <div key={videoId} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <a href={videoLink}>
                  <img
                    src={singleVideo.snippet.thumbnails.high.url}
                    alt="thumbnail"
                    className="card-img-top"
                  />
                </a>
                <div className="card-body">
                  <a href={videoLink} className="text-decoration-none">
                    <h5 className="card-title text-dark">
                      {singleVideo.snippet.title}
                    </h5>
                  </a>
                  <p className="card-text text-muted">
                    {singleVideo.snippet.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <small className="text-muted">
                    Published
                    {new Date(
                      singleVideo.snippet.publishTime
                    ).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default YouTubeVideos;
