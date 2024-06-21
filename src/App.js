import './styles/styles.css';
import { useEffect, useState } from "react";
import fetchFilms from "./API/fetchFilms";
import CardGrid from './components/CardGrid';
import FilmFilter from './components/FilmFilter';
import Pagination from './components/Pagination';
import PaginationSwitch from "./components/PaginationSwitch";


function App() {
  const [infiniteScrollMode, setInfiniteScrollMode] = useState(false);
  const [isLazyFetching, setIsLazyFetching] = useState(false);
  const [curLazyPage, setCurLazyPage] = useState(1);
  const [totalPagesCount, setTotalPagesCount] = useState(0);
  const [filmList, setFilmList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState({ page_size: 9 });


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight && curLazyPage <= totalPagesCount) { setIsLazyFetching(true); }
    }
    if (infiniteScrollMode) {
      window.addEventListener('scroll', handleScroll)
    }
    return (() => (window.removeEventListener('scroll', handleScroll)))
  }, [infiniteScrollMode, curLazyPage, totalPagesCount])


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
      setTotalPagesCount(
        Math.floor(data.data_size === currentFilter.page_size 
          ? 0
          : data.data_size / currentFilter.page_size
        ))
    })
  }, [currentFilter])


  return (
    <div className="App">
      <PaginationSwitch
        filterState={currentFilter}
        setFilterState={setCurrentFilter}
        currentScrollMode={infiniteScrollMode}
        setScrollMode={setInfiniteScrollMode}
      />
      <FilmFilter filterState={currentFilter} setFilterState={setCurrentFilter} />
      <CardGrid filmList={filmList} />
      {!infiniteScrollMode && <Pagination
        pagesCount={totalPagesCount}
        filterState={currentFilter}
        setFilterState={setCurrentFilter}
      />}
    </div>
  );
}

export default App;
