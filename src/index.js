import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <h1>
    Hello world
  </h1>
);

function SaleItem(props) {
  const {amount} = props;

  return (
    <li>
      <span>
        La venta tiene un monto de { amount }
      </span>
    </li>
  );
}

function SaleList({ sales = []}) {
  return sales.map((sale, key) => (
      <SaleItem key={key} amount={sale.amount} />
    )
  );
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      totalAmount: 0,
      value: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.addSale = this.addSale.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  addSale() {
    this.setState(({sales, totalAmount}) => {
      return {
          sales: [
            ...sales,
            {
              amount: value
            },
          ],
          totalAmount: totalAmount + parseInt(value)
        };
    })
  }
  closeBatch() {

  }

  render(){
    return (
      <div>
        <h1>Sales</h1>
        <span>Total: {this.state.totalAmount}</span>
        <button onClick={this.closeBatch}>Cerrar lote</button>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.addSale}>Agregar venta</button>
        <SaleList sales={this.state.sales}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));