import React from "react";
import { Helmet } from "react-helmet";

const CircularCursor = () => {
  return (
    <div>
      <div id="circularcursor">
        <div className="circle1"></div>
      </div>
      <Helmet>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="/public/circleCursor.js" type="text/javascript" />
        </Helmet>
    </div>
  );
};

export default CircularCursor;
