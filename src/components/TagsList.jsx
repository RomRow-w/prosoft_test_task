import "../styles/styles.css";

export default function TagsList({ title, tagsArray }) {
  return (
    <ul className="TagsList">
      {title}
      {tagsArray.map((i, ind) => {
        return (
          <li key={ind}>
            <span className="TagsList__Tag">{i.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
