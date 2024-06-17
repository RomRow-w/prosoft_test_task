import "../styles/styles.css";
import { useState } from "react";

export default function Pagination({ pagesCount, filterState, setFilterState }) {
  const [currInput, setcurrInput] = useState("");

  const handleClick = () => {
    if (currInput - 1 > pagesCount || currInput <= 0) {
      setcurrInput("");
      return;
    }
    setFilterState((prev) => ({
      ...prev,
      page: Number(currInput - 1),
    }))
    setcurrInput("");
  }


  return (
    <div className="PaginationContainer">
      <p>
        {filterState.page? filterState.page + 1: 1} страница из {pagesCount + 1}
      </p>
      <input 
        className="PaginationContainer__Controls"
        type="number" 
        value={currInput} 
        onChange={(e) => setcurrInput(e.target.value)}
        placeholder="Введите страницу"
      />
      <button className="PaginationContainer__Controls" onClick={handleClick}>
        Перейти
      </button>
    </div>
  );
}
