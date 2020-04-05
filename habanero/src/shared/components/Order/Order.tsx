import React from "react";

interface IProps {}
interface IState {
  orderType: number;
  ingredients: {
    cheese: 0;
    chicken: 0;
    tomato: 0;
    corn: 0;
    mushrooms: 0;
  };
}

class Order extends React.Component<IProps, IState> {
  state = {
    orderType: 0,
  } as IState;

  onBuritoSelect = () => this.setState({ orderType: 0 });
  onQuesadillaSelect = () => this.setState({ orderType: 1 });

  render() {
    const { orderType } = this.state;
    const orderQuesadillaType: Array<string> = [
      "Amerykańska",
      "Azjatycka",
      "Grecka",
      "Meksykańska",
    ];
    const orderBuritoType: Array<string> = [
      "Amerykańska",
      "Azjatycka",
      "Grecka",
      "Meksykańska",
    ];
    const ingredients = ["Ser", "Kukurydza", "Kurczak", "Pieczarki", "Pomidor"];
    console.log(this.state);
    return (
      <section className="order">
        <div className="order-container">
          <div className="order-nav">
            <div className="btn btn-danger" onClick={this.onBuritoSelect}>
              Burito
            </div>
            <div className="btn btn-danger" onClick={this.onQuesadillaSelect}>
              Quesadilla
            </div>
          </div>
          <div className="order-sidebar">
            {orderType === 0
              ? orderBuritoType.map((type: string, index: number) => (
                  <div key={index}>{`${index + 1}. ${type}`}</div>
                ))
              : orderQuesadillaType.map((type: string, index: number) => (
                  <div key={index}>{`${index + 1}. ${type}`}</div>
                ))}
          </div>
          <div className="order-content">
            <div>
              {ingredients.map((ingidient: string, index: number) => (
                <div key={index} className="ingredient-row">
                  <div className="ingredient-name">{ingidient}</div>
                  <div className="btn btn-danger">+</div>
                  <div className="btn btn-danger">-</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Order;
