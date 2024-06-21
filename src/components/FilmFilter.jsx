import "../styles/styles.css";


export default function FilmFilter({filterState,setFilterState}) {
  
  return (
    <form className="FilterContainer">
      <div className="FilterContainer__Section">
          <label className="InputDesc">Сортировка по:
            <select
              className="FilterContainer__Input"
              value={filterState.sort_field}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  sort_field: e.target.value,
                  page: 0,
                }))
              }
            >
              <option value="imdb_id">ID на IMDB</option>
              <option value="budget">Бюджет</option>
              <option value="original_language">Язык</option>
              <option value="popularity">Популярность</option>
              <option value="release_date">Дата выхода</option>
              <option value="revenue">Кассовые сборы</option>
              <option value="runtime">Продолжительность</option>
              <option value="status">Статус</option>
              <option value="vote_average">Средний балл</option>
              <option value="vote_count">Кол-во голосов</option>
            </select>
          </label>
          <label className="InputDesc">Порядок сортировки:
            <select
              className="FilterContainer__Input"
              value={filterState.sort_order}
              onChange={(e) =>
                setFilterState((prev) => ({
                  ...prev,
                  sort_order: e.target.value,
                  page: 0,
                }))
              }
            >
              <option value="asc">По возрастанию</option>
              <option value="desc">По убыванию</option>
            </select>
          </label>
      </div>
      <div className="FilterContainer__Section">
        <label className="InputDesc">Поиск
          <input
            className="FilterContainer__Input"
            type="text"
            defaultValue={""}
            placeholder="Введите запрос..."
            value={filterState.search}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                search: e.target.value,
                page: 0,
              }))
            }
          />
        </label>
        <div>
          <label className="InputDesc">
          <input
              type="checkbox"
              checked={filterState.adult}
              onChange={() =>
                setFilterState((prev) => ({
                  ...prev,
                  adult: !prev.adult,
                  page: 0,
                }))
              }
            />
            Для взрослых
          </label>
        </div>
      </div>
      <div className="FilterContainer__Section">
        <label className="InputDesc">Дата выхода от:
          <input 
            className="FilterContainer__Input"
            type="date" 
            value={filterState.release_date_min}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                release_date_min: e.target.value? e.target.value: undefined,
                page: 0,
              }))
            }
          />
        </label>
        <label className="InputDesc">
          Дата выхода до:
          <input 
            className="FilterContainer__Input"
            type="date" 
            value={filterState.release_date_max}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                release_date_max: e.target.value? e.target.value: undefined,
                page: 0,
              }))
            } 
          />
        </label>
      </div>
      <div className="FilterContainer__Section">
        <label className="InputDesc">Бюджет от:</label>
          <input 
            className="FilterContainer__Input"
            type="number" 
            placeholder="Введите число..."
            value={filterState.budget_min}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                budget_min: Number(e.target.value)? Number(e.target.value): undefined,
                page: 0,
              }))
            }
          />
        <label className="InputDesc">Бюджет до:</label>
          <input 
            className="FilterContainer__Input" 
            type="number"
            placeholder="Введите число..."
            value={filterState.budget_max}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                budget_max: Number(e.target.value)? Number(e.target.value): undefined,
                page: 0,
              }))
            }
          />
      </div>
    </form>
  );
}
