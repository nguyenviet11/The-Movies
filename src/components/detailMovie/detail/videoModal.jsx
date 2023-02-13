import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoModal = ({ dataTrailer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  console.log(dataTrailer);
  return (
    <div>
      {dataTrailer?.length > 0 ? (
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={dataTrailer[0]?.key}
            onClose={() => setIsOpen(false)}
          />
          <button onClick={openModal} className="modal__btn">
            <i class="fa-solid fa-play"></i>
            Play Trailer
          </button>
        </div>
      ) : undefined}
    </div>
  );
};

export default VideoModal;
