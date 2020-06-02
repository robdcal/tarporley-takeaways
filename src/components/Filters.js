import React from "react";
import FilterButton from "./FilterButton";

export class Filters extends React.Component {
  render() {
    return (
      <div className="text-center py-5">

        {Object.keys(this.props.filters).map((key) => (
          <FilterButton updateFilter={this.props.updateFilter} key={key} details={this.props.filters[key]} />
        ))}

        {/* <FilterButton label="chinese" displayName="Chinese" updateFilter={this.props.updateFilter} status={this.props.filterState["chinese"]} /> */}
        {/* <FilterButton label="indian" displayName="Indian" updateFilter={this.props.updateFilter} status={this.props.filterState["indian"]} /> */}
      </div>
    );
  }
}

export default Filters;
