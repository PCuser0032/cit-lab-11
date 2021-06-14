import React from "react";
import Card from "./Card";

export default class List extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((repo, index) => {
          return (
            <Card
              key={index}
              avatar={repo.owner.avatar_url}
              login={repo.owner.login}
              url={repo.html_url}
              api_url={repo.url}
              name={repo.name}
            />
          );
        })}
      </div>
    );
  }
}
