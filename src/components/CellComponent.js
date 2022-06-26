import React from "react";

export const CellComponent = ({ cell, makeTurn }) => {
  const handleClick = () => {
    makeTurn(cell);
  };

  return (
    <div className="cell" onClick={handleClick}>
      {cell?.figure?.logo && <img src={cell?.figure?.logo} />}
    </div>
  );
};
