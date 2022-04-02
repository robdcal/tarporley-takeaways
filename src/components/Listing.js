import React from "react";

export class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  setActiveListing = (event) => {
    event.preventDefault();
    this.props.updateActiveListing(this.props.index);
  };

  render() {
    const {
      name,
      logo,
      image,
      desc,
      cuisine,
      address,
      delivery,
      collection,
      phone,
      menu,
      hygiene,
    } = this.props.details;
    return (
      <div
        className={
          "w-full ml-2 mb-2 border border-gray-400 bg-white rounded p-4" +
          (this.props.status == 'active' ? " shadow-lg border-blue-500 bg-teal-100" : " cursor-pointer")
        }
        // onClick={this.state.open ? null : (e) => this.togglePanel(e)}
        onClick={this.setActiveListing}
      >
        <div className="flex items-center">
          {/* <img className="w-10 h-10" src={logo} alt="" /> */}
          {delivery === true && (
            <div className="bg-gray-300 fill-current rounded-full p-1 mr-2">
              <img src="/phone.svg" />
            </div>
          )}
          {collection === true && (
            <div className="bg-gray-300 fill-current rounded-full p-1 mr-2">
              <img src="/collection.svg" />
            </div>
          )}
          <h3 className="text-gray-900 font-bold text-xl">{name}</h3>
          <div
            className="ml-auto p-1 cursor-pointer"
            onClick={this.props.status == 'active' ? (e) => this.togglePanel(e) : null}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              transform={"rotate(" + (this.props.status == 'active' ? "180" : "") + ")"}
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-gray-700 py-2 text-base">{desc}</p>
        </div>
        <div className="py-2">
          {cuisine.map((value, index) => {
            return (
              <span
                className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2"
                key={index}
              >
                {this.props.filters[value].name}
              </span>
            );
          })}
        </div>
        {this.props.status == 'active' ? (
          <div>
            <div className="flex items-center">
              <div className="bg-gray-300 fill-current rounded-full p-1 mr-2">
                <img src="/phone.svg" />
              </div>
              <a className="hover:underline" href={"tel:" + phone}>
                {phone}
              </a>
            </div>
            <div>{address}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Listing;
