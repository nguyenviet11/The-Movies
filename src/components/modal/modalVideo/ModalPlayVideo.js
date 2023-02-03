import React, { useState } from 'react';
import VideoModal from './_index';

function ModalPlayVideo() {
    const [isOpen, setOpen] = useState(false);

    function handleChange() {
        setOpen(!isOpen);
    }

    return (
        <div className="wrapper">
            <VideoModal isOpen={isOpen} close={handleChange} />
            <button onClick={handleChange}>Play</button>
        </div>
    );
}

export default ModalPlayVideo;
