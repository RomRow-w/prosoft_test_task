import "../styles/styles.css";
import TagsList from "./TagsList";

export default function FilmCard({props}) {


  return (
    <div className="FilmCard">
      <h1>{props.title}</h1>
      <ul>
        { props.tagline && <li>Слоган: {props.tagline}</li> }
        { props.release_date && <li>Дата выхода: {props.release_date}</li> }
        { props.runtime && <li>Продолжительность: {props.runtime} минут</li> }
        { props.adult && <li>Возраст: 18+ </li> }
        { props.original_language && <li>Язык фильма: {props.original_language}</li> }
        { props.original_title && <li>Название на родном языке: {props.original_title}</li> }
        { props.overview && <li>Краткое описание: {props.overview}</li> }
        { props.popularity > 1 && <li>Популярность: {props.popularity.toFixed(1)}</li> }
        { props.status && <li>Статус выхода: {props.status}</li> }
        { props.homepage && <li>Страница фильма: {props.homepage}</li> }
        { props.budget && <li>Бюджет: {props.budget}$</li> }
        { props.revenue && <li>Кассовые сборы: {props.revenue}</li> }
        { props.belongs_to_collection && <li>Входит в Коллекцию: {props.belongs_to_collection.name}</li> }
        { props.vote_average !== 0 && <li>Средний рейтинг: {props.vote_average}</li> }
        { props.vote_count !== 0 && <li>Кол-во голосов: {props.vote_count}</li> }
        { props.id && <li>ID: {props.id}</li> }
        { props.imdb_id && <li>IMDB ID: {props.imdb_id}</li> }
      </ul>

      {props.genres && <TagsList title="Жанры: " tagsArray={props.genres}/>}
      {props.production_countries && <TagsList title="Страны производства: " tagsArray={props.production_countries}/>}
      {props.production_companies && <TagsList title="Студии производства: " tagsArray={props.production_companies}/>}
      {props.spoken_languages && <TagsList title="Языки в фильме: " tagsArray={props.spoken_languages}/>}
      
    </div>
  )
}
