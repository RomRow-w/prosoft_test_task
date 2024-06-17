import "../styles/styles.css";
import FilmCard from "./FilmCard";

export default function CardGrid({ filmList }) {
  return (
    <div className="CardContainer">
      {filmList.map((data) => {
        return <FilmCard key={data.id} props={data}></FilmCard>;
      })}
    </div>
  );
}
