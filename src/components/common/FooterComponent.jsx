import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div className="container">Footer</div>
      <style jsx>
        {`
          .container {
            grid-area: footer;
            background: Rgb(17, 77, 81);
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
