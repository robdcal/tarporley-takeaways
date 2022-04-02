import React from "react";
import FilterButton from "./FilterButton";

export class Filters extends React.Component {
  render() {
    return (
      <div className="text-center py-5">
        {Object.keys(this.props.filters).map((key) => (
          <FilterButton
            updateFilter={this.props.updateFilter}
            key={key}
            details={this.props.filters[key]}
          />
        ))}
      </div>
    );
  }
}

export default Filters;
