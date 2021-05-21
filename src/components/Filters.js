import Filter from './Filter';
const Filters = (props) => {
  const filterBy = (filter) => {
    console.log('filters ____');
    console.log(filter);
    props.onFiltersUpdated(filter);
  };
  return (
    <div>
      Filters
      {props.filters.map((f) => (
        <Filter onFilterBy={filterBy} key={f.category} filter={f}></Filter>
      ))}
    </div>
  );
};

export default Filters;
