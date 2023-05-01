import { RepositoryItem } from "./RespositoryItem";

const repository = {
  name: "unform2",
  description: "Forms in React",
  link: "#",
};

export function RepositoryList() {
  return (
    <section className="respository-list">
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
