import React from "react";
import Masonry from "react-masonry-component";

export default function(props) {
  return (
    <Masonry updateOnEachImageLoad={true} options={{ gutter: 15 }}>
      {props.results.map((result, index) => (
        <div className="grid-item">
          <img
            src={result}
            key={index}
            className="result-image"
            alt={props.searchText}
          />
        </div>
      ))}
    </Masonry>
  );
}
