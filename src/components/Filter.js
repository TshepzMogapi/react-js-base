import { useState } from 'react';
const Filter = (props) => {
  const [filter, setFilter] = useState(props.filter);

  const applyFilter = () => {
    setFilter((prevFilter) => {
      const updatedFilter = {
        ...prevFilter,
        checked: !prevFilter.checked,
      };
      return updatedFilter;
    });

    let updatedFilter = { ...filter, checked: !filter.checked };
    props.onFilterBy(updatedFilter);
  };
  return (
    <span onClick={applyFilter} className="filter">
      {filter.checked ? 'checked' : 'not'}
    </span>
  );
};

export default Filter;
