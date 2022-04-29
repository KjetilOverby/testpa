import React from "react";
import ImageHeader from "../common/ImageHeader";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader />
        <div className="text-box">
          <h1 className="akan-header">Hva er Akan?</h1>
          <div className="text-box-content">
            <p>
              test testing super testoutLorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              cumque dolor mollitia commodi ducimus quam in sit veritatis
              quibusdam quisquam quo reiciendis. Delectus veritatis minima quas
              fugiat magni sequi sunt. In voluptate maxime laboriosam
              accusantium, aspernatur quae mollitia quibusdam non sapiente fuga
              vero odio atque incidunt quaerat est unde minima eos cupiditate.
              Possimus expedita cumque voluptates et officiis laboriosam vitae.
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
          }
          .akan-header {
            color: #333333;
            font-size: 3rem;
            font-weight: 100;
          }
          .moelven-header {
            font-size: 1.7rem;
            margin-top: -1rem;
            font-weight: 100;
          }
          .text-box {
            display: grid;
            place-items: center;
            margin-top: 5rem;
          }
          .text-box-content {
            width: 40%;
            margin-top: 3rem;
            text-align: center;
            color: #585858;
            margin-bottom: 5rem;
          }
          @media only screen and (max-width: 756px) {
            .text-box-content {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
