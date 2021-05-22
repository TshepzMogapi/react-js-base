import { useState } from 'react';
import Filter from './Filter';

const Filters = (props) => {
  const [filters, setFilters] = useState(props.filters);

  const filterBy = (filter) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((f) => {
        if (f.category === filter.category) {
          f.checked = filter.checked;
        }
        return f;
      });
      return [...updatedFilters];
    });

    props.onFiltersUpdated(filter);
  };
  return (
    <div>
      Filters
      {filters.map((f) => (
        <Filter onFilterBy={filterBy} key={f.category} filter={f}></Filter>
      ))}
    </div>
  );
};

export default Filters;
