import "../styles/styles.css";

export default function PaginationSwitch({
  filterState,
  setFilterState,
  currentScrollMode,
  setScrollMode,
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={currentScrollMode}
        onChange={() => {
          setFilterState({ ...filterState, page: 0 });
          setScrollMode(!currentScrollMode);
        }}
      />
      Бесконечная прокрутка
    </label>
  );
}
