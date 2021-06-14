import React from "react";

export default function Card(props) {
  return (
    <div className="card flex-row align-items-center w-50 shadow p-3 mt-5 ms-auto me-auto">
      <div>
        <img alt="avatar" src={props.avatar} width={100} height={100} />
      </div>
      <div className="fs-2 ms-3">
        <p>{props.login}</p>
      </div>
      <div className="fs-2 ms-3">
        <p>
          <a className="text-decoration-none" href={props.url}>
            {props.name}
          </a>
        </p>
      </div>
    </div>
  );
}
