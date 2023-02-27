import React from "react";

export const VpnSoftware = () => {
  return (
    <div className="pnSoftware">
      <div>
        <h2>Download software for your device:</h2>
        <div className="downloadGroup d-none d-md-flex">
          <a href="">
            <img src="../App Store Black.svg" />
          </a>
          <a href="">
            <img src="../Google Play Black.svg" />
          </a>
          <a href="">
            <img src="../Microsoft Black.svg" />
          </a>
        </div>
        <div className="downloadGroup d-none d-md-flex justify-content-center">
          <a href="">
            <img src="../Mac App Stor.svg" />
          </a>
          <a href="">
            <img src="../Group 6.svg" />
          </a>
        </div>

        <div className="downloadGroup d-flex d-md-none ">
          <a href="">
            <img src="../App Store Black.svg" />
          </a>
          <a href="">
            <img src="../Google Play Black.svg" />
          </a>
          <a href="">
            <img src="../Microsoft Black.svg" />
          </a>
          <a href="">
            <img src="../Group 6 (1).svg" />
          </a>
        </div>
        <div className="downloadGroup d-flex d-md-none">
          <a className="mw-100" href="">
            <img src="../Mac App Stor.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};
