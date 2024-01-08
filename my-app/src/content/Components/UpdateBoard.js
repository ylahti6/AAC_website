// UpdateBoard.js
import React from "react";

const UpdateBoard = () => {
  return (
    <div className="updateBoard">
      {/* Building section */}
      <div className="updateSection">
        <p className="title">Building</p>
        <p>
          Oratio is a cross-platform AAC app for Android and iOS. With a
          customizable grid of symbols and words, users tap to generate spoken
          communication. Its compatibility ensures accessibility on various
          devices, offering a seamless experience for users
        </p>
      </div>

      {/* Updates within the app */}
      <div className="updateSection">
        <p className="title">Updates</p>
        <p>
          The latest Oratio AAC app update introduces color-coded categories for
          a visually streamlined and user-friendly experience on both Android
          and iOS platforms.
        </p>
      </div>

      {/* Contact section */}
      <div className="updateSection">
        <p className="title">Contact</p>
        <p>Project By: Yannick Lahti</p>
      </div>
    </div>
  );
};

export default UpdateBoard;
