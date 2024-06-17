import { useEffect, useState } from "react";
import fetchFilms from "./API/fetchFilms";
import CardGrid from './components/CardGrid';
import FilmFilter from './components/FilmFilter';
import Pagination from './components/Pagination';
import './styles/styles.css';


function App() {
  const [infiniteScrollMode, setInfiniteScrollMode] = useState(false);
  const [isLazyFetching, setIsLazyFetching] = useState(false);
  const [curLazyPage, setCurLazyPage] = useState(0);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [filmList, setFilmList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState({ page: 0, page_size: 9 });


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight) {
        if (curLazyPage <= totalPagesCount) {
          setIsLazyFetching(true);
        }
      }
    }

    if (infiniteScrollMode) {
      window.addEventListener('scroll', handleScroll)
    }
    return (() => (window.removeEventListener('scroll', handleScroll)))
  })


  useEffect(() => {
    if (isLazyFetching) {
      fetchFilms({ ...currentFilter, page: curLazyPage }).then((data) => {
        setFilmList(prev => [...prev, ...data.data])
        setCurLazyPage(prev => prev + 1)
        setIsLazyFetching(false)
      })
    }
  }, [isLazyFetching, currentFilter, curLazyPage, infiniteScrollMode, totalPagesCount])


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFilms(currentFilter).then((data) => {
      setFilmList(data.data)
      setTotalPagesCount(Math.floor(data.data_size / currentFilter.page_size))
    })
  }, [currentFilter])


  return (
    <div className="App">
      <label>
        <input
          type='checkbox'
          checked={infiniteScrollMode}
          onChange={() => {
            setCurLazyPage(currentFilter.page + 1)
            setInfiniteScrollMode(!infiniteScrollMode)
          }}
        />
        Бесконечная прокрутка
      </label>
      <FilmFilter filterState={currentFilter} setFilterState={setCurrentFilter} />
      <CardGrid filmList={filmList} />
      {!infiniteScrollMode &&
        <Pagination
          pagesCount={totalPagesCount}
          filterState={currentFilter}
          setFilterState={setCurrentFilter}
        />
      }
    </div>
  );
}

export default App;
