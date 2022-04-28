import React from "react";
import lonely from "../../assets/lonely.jpg";
import styles from "../../../styles/Home.module.css";

const ImageHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="text-container">
          <h1 className="akan-header">AKAN</h1>
          <h2 className="moelven-header">MOELVEN VÅLER</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            necessitatibus nesciunt omnis iste velit voluptatem vitae obcaecati
            aut. Fugit explicabo sed tempora similique qui adipisci perferendis
            quibusdam quos odio quas.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .akan-header {
            font-size: 5rem;
            font-weight: 100;
            color: #353535;
          }
          .moelven-header {
            font-size: 1.7rem;
            margin-top: -1rem;
            font-weight: 100;
            color: #3d3d3d;
          }
          .text {
            color: #272727;
            margin-top: 3rem;
          }
          .text-container {
            width: 20rem;
            font-weight: 100;
          }
          @media only screen and (max-width: 756px) {
            .text-container {
              width: 100%;
              font-weight: 100;
            }
            .container {
              padding: 0.5rem;
              height: 15rem;
            }
            .akan-header {
              font-size: 2rem;
            }
            .moelven-header {
              font-size: 1rem;
              margin-top: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default ImageHeader;
