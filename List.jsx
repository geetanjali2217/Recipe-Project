import React from "react";

export default function List(props) {
  const { list } = props;

  return list.map((item) => (
    <div className="displayFirst" key={item.id}>
      <div>{item.title}</div>
      <img src={item.image} alt={item.title} height="150px" />
      <button>Get Details</button>
    </div>
  ));
}
