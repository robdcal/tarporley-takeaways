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
        className={
          this.props.details.status === true
            ? "btn-filter-active"
            : "btn-filter-inactive"
        }
        onClick={this.toggleFilter}
      >
        {this.props.details.name}
      </button>
    );
  }
}

export default FilterButton;
