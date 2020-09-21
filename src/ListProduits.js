import React, { Component } from "react";

class ListProduits extends Component {
  styles = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem 1rem",
      borderBottom: "1px solid #ccc",

      marginTop: "0.7rem",
    },
  };
  render() {
    return (
      <div>
        <ul className="ml-md-n5 ">
          {this.props.lines.map((line, index) => {
            return (
              <li style={this.styles.li} key={line.id}>
                <span>
                  {index + 1}. {line.value.produit} : {line.value.prix} &euro;
                </span>
                <button
                  className="close text-dark"
                  type="button"
                  aria-label="Close"
                  onClick={this.props.handleDelete.bind(null, line)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListProduits;
