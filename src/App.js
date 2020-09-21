import React from "react";
import ListProduits from "./ListProduits";
import NavBar from "./Navbar";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      produit: "",
      prix: "",
      lines: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addLine() {
    const newLine = {
      id: 1 + this.state.id,
      value: {
        produit: this.state.produit.slice(),
        prix: this.state.prix.slice(),
      },
    };

    this.setState({
      id: newLine.id,
      produit: "",
      prix: "",
      lines: [...this.state.lines, newLine],
    });
  }

  handleDelete(lineToBeDeleted) {
    const newLines = this.state.lines.filter((_line) => {
      return _line !== lineToBeDeleted;
    });
    this.setState({ lines: newLines });
  }

  countSum = () => {
    let sum = 0;
    for (let i = 0; i < this.state.lines.length; ++i) {
      sum += Number(this.state.lines[i].value.prix);
    }
    return sum;
  };

  render() {
    return (
      <div className="wrapper">
        <NavBar
          totalDepences={"Total des dépenses: €" + this.countSum()}
        ></NavBar>

        <div className="App">
          <h1 className="display-3 mb-5 text-center">Les dépenses </h1>
          <div className="container">
            <h3 className=" text-muted">Ajouter une nouvelle dépense</h3>
            <br />
            <input
              className="mr-3 p-2"
              type="text"
              placeholder="Dépense"
              value={this.state.produit}
              onChange={(e) => this.updateInput("produit", e.target.value)}
            />
            <input
              className="mr-5 p-2 "
              type="text"
              placeholder="Montant de la dépanse"
              value={this.state.prix}
              onChange={(e) => this.updateInput("prix", e.target.value)}
            />
            <button
              className="btn btn-lg btn-success"
              onClick={() => this.addLine()}
            >
              Ajouter
            </button>

            <ListProduits
              handleDelete={this.handleDelete.bind(this)}
              lines={this.state.lines}
            />
          </div>
        </div>
        <Footer
          copyright={"NEKRASHEVYCH Olga ©  Tous droits réservés."}
        ></Footer>
      </div>
    );
  }
}

export default App;
