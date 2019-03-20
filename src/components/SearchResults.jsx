import React from "react";
import Masonry from "react-masonry-component";

export default function(props) {
  return (
    <Masonry updateOnEachImageLoad={true} options={{}}>
      {props.results.map((result, index) => (
        <div className="grid-item" key={index}>
          <img src={result} className="result-image" alt={props.searchText} />
        </div>
      ))}
    </Masonry>
  );
}
