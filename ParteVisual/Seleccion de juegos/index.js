import React from "react";
import "./style.css";

export const SeleccinDeJuegos = () => {
  return (
    <div className="seleccin-de-juegos">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <img
            className="icon-chevron-down"
            alt="Icon chevron down"
            src="icon-chevron-down.png"
          />
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle-2" />
              <img
                className="vector"
                alt="Vector"
                src="vector.svg"
              />
              <div className="rectangle-3" />
            </div>
          </div>
          <p className="partida-privada">
            <span className="text-wrapper">Partida </span>
            <span className="span">Privada</span>
          </p>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle-4" />
              <img
                className="img"
                alt="Rectangle"
                src="rectangle-52.png"
              />
              <div className="text-wrapper-2">Selección de juegos</div>
              <div className="text-wrapper-3">Party Wars</div>
            </div>
          </div>
        </div>
        <div className="frame">
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-4">YO NUNCA</div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-3">
              <div className="rectangle-5" />
              <img
                className="image"
                alt="Image"
                src="image-38.png"
              />
              <div className="text-wrapper-5">¿QUIÉN ES QUIÉN?</div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-4">
              <div className="rectangle-6" />
              <img
                className="image-2"
                alt="Image"
                src="image-40.png"
              />
              <div className="text-wrapper-4">FRECUENCIA</div>
            </div>
            <p className="no-encuentras-juegos">
              ¿No encuentras juegos a tu gusto? <br />
              ¡Crea el tuyo!
            </p>
          </div>
          <div className="group-4">
            <div className="overlap-5">
              <img
                className="image-3"
                alt="Image"
                src="image-39.png"
              />
              <div className="text-wrapper-6">PRUEBA O VERDAD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
