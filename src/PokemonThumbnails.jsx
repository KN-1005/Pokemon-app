import React, { useState, useEffect } from "react";

//アロー関数でコンポーネントを定義
const PokemonThumbnails = ({
    id, 
    name, 
    image, 
    iconImage, 
    type,
    jpName,
    jpType,
 }) => {
    const style = `thumb-container ${type}`;

    return (
         <div className={style}>
         <div className="number">
             <small>#0{id}</small>
         </div>
         <img src={image} alt={name} />
         <img src={iconImage} alt={name} className="icon-image" />
         <div className="detail-wrapper">
             <h4>{jpName ?? "???"}</h4>
             <h3>{jpType ?? type}</h3>
         </div>
    </div>
    );
};

//デフォルトエクスポートする
export default PokemonThumbnails;