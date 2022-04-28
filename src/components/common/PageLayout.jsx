import React from "react";
const PageLayout = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 4rem 1fr 15rem;
          grid-template-areas: "header" "content" "footer";
        }
      `}</style>
    </>
  );
};
export default PageLayout;
