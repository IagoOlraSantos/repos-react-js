import { useState, useEffect } from "react";
import { RepositoryItem } from "./RespositoryItem";

import "../styles/repositories.scss";

//https://api.github.com/users/diego3g/repos

const repository = {
  name: "unform2",
  description: "Forms in React",
  link: "#",
};

export function RepositoryList() {
  const user = "diego3g";
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository="{repository}" />
        <RepositoryItem repository="{repository}" />
        <RepositoryItem repository="{repository}" />
        <RepositoryItem repository="{repository}" />
      </ul>
    </section>
  );
}
