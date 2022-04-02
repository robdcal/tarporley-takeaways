import React from "react";
import Maps from "./Maps";
import Filters from "./Filters";
import Listings from "./Listings";
import takeaways from "../takeaways";

class App extends React.Component {
  state = {
    filters: {
      chinese: {
        name: "Chinese",
        key: "chinese",
        status: true,
      },
      indian: {
        name: "Indian",
        key: "indian",
        status: true,
      },
      kebab: {
        name: "Kebab",
        key: "kebab",
        status: true,
      },
      burger: {
        name: "Burger",
        key: "burger",
        status: true,
      },
      fishchips: {
        name: "Fish & Chips",
        key: "fishchips",
        status: true,
      },
      pizza: {
        name: "Pizza",
        key: "pizza",
        status: true,
      },
    },
    takeaways: takeaways,
    activeListing: "",
  };

  updateFilter = (filter) => {
    const filters = { ...this.state.filters };
    filters[filter].status = !filters[filter].status;
    this.setState({ filters });
  };

  updateActiveListing = (key) => {
    let activeListing = this.state.activeListing;
    activeListing == key ? activeListing = '' : activeListing = key;
    this.setState({ activeListing })
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="flex max-w-xl mx-auto my-5 p-6 bg-gray-200 rounded-lg shadow-xl">
          <div className="m-3 p-1">
            <h1 className="text-2xl text-blue-700 leading-tight">
              Tarporley Takeaways
            </h1>
            <p className="text-base text-gray-700 leading-normal">
              Takeaway food for delivery or collection in and around Tarporley
            </p>
          </div>
        </div>
        <Filters
          updateFilter={this.updateFilter}
          filters={this.state.filters}
        />
        <div className="flex">
          <div className="w-2/3">
            <Maps
              filters={this.state.filters}
              takeaways={this.state.takeaways}
              activeListing={this.state.activeListing}
              updateActiveListing={this.updateActiveListing}
            />
          </div>
          <div className="w-1/3">
            <Listings
              filters={this.state.filters}
              takeaways={this.state.takeaways}
              activeListing={this.state.activeListing}
              updateActiveListing={this.updateActiveListing}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
