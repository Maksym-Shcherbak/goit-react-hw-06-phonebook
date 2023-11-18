import css from './SearchFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onHandleChange = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        id="filter"
        value={filter}
        onChange={onHandleChange}
      />
    </>
  );
};
