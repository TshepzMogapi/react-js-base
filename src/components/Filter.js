import { useState } from 'react';
const Filter = (props) => {
  const [filter, setFilter] = useState(props.filter);
  // props.onFilterBy
  const applyFilter = () => {
    // props.onFilterBy(props.filter);

    setFilter((prevFilter) => {
      return { ...prevFilter, checked: !prevFilter.checked };
    });

    props.onFilterBy(filter);
  };
  return (
    <span onClick={applyFilter} className="filter">
      {filter.checked ? 'checked' : 'not'}
    </span>
  );
};

export default Filter;
