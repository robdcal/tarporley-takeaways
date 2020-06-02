import React from "react";
import Maps from "./Maps";
import Filters from "./Filters";

class App extends React.Component {
  state = {
    filters: {
      chinese: {
        name: "Chinese",
        key: "chinese",
        status: true
      },
      indian: {
        name: "Indian",
        key: "indian",
        status: true
      },
      kebab: {
        name: "Kebab",
        key: "kebab",
        status: true
      },
      burger: {
        name: "Burger",
        key: "burger",
        status: true
      },
      fishchips: {
        name: "Fish & Chips",
        key: "fishchips",
        status: true
      }
    },
  };

  updateFilter = (filter) => {
    const filters = {...this.state.filters};
    filters[filter].status = !filters[filter].status;
    this.setState({ filters })
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex max-w-xl mx-auto my-10 p-6 bg-gray-200 rounded-lg shadow-xl">
          <div className="m-3 p-1">
            <h1 className="text-2xl text-blue-700 leading-tight">
              Tarporley Takeaways
            </h1>
            <p className="text-base text-gray-700 leading-normal">
              Takeaway food for delivery or collection in and around Tarporley
            </p>
          </div>
        </div>
        <Filters updateFilter={this.updateFilter} filters={this.state.filters} />
        <Maps />
      </div>
    );
  }
}

export default App;
