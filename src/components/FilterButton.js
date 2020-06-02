import React from "react";

export class FilterButton extends React.Component {
  labelRef = React.createRef();

  toggleFilter = (event) => {
    const filter = this.props.details.key;
    this.props.updateFilter(filter);
  };

  render() {
    return (
      <button
        className={(this.props.details.status === true) ? "btn-filter-active" : "btn-filter-inactive"}
        // label={this.props.label}
        onClick={this.toggleFilter}
        // status={this.props.status}
      >
        {this.props.details.name}
      </button>
    );
  }
}

export default FilterButton;
