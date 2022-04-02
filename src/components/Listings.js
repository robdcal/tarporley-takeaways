import React from "react";
import Listing from "./Listing";

export class Listings extends React.Component {
  render() {
    const takeaways = this.props.takeaways;
    const filters = this.props.filters;
    const activeFilters = [];
    const activeListing = this.props.activeListing;
    const updateActiveListing = this.props.updateActiveListing;

    const keys = Object.keys(filters);
    for (const key of keys) {
      if (filters[key].status === true) {
        activeFilters.push(key);
      }
    }

    return (
      <div>
        {Object.keys(takeaways).map(function (key) {
          if (
            takeaways[key].cuisine.some((r) => activeFilters.indexOf(r) >= 0)
          ) {
            return <Listing key={key} index={key} details={takeaways[key]} filters={filters} status={activeListing === key ? 'active' : 'inactive'} updateActiveListing={updateActiveListing} />;
          }
        })}
      </div>
    );
  }
}

export default Listings;
