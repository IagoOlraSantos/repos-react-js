export function RepositoryItem(props) {
  return (
    <li className="respository-item">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
