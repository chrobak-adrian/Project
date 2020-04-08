import React from "react";
import { DISHES } from "../../constants/common";
import { IIngredient } from "../../types/IIngredient";
import { ingredients } from "../../mocks/ingredientsResponse";

interface IProps {}

interface IState {
  orderType: number;
  ingredients: IIngredient[];
  dischKind: DISHES;
}

class Order extends React.Component<IProps, IState> {
  state = {
    orderType: 0,
    dischKind: DISHES.BURITO,
    ingredients
  } as IState;
  onBuritoSelect = () => this.setState({ orderType: 0 });
  onQuesadillaSelect = () => this.setState({ orderType: 1 });

  render(): JSX.Element {
    const { orderType, ingredients } = this.state;
    const orderQuesadillaType: Array<string> = [
      "Amerykańska",
      "Azjatycka",
      "Grecka",
      "Meksykańska"
    ];
    const orderBuritoType: Array<string> = [
      "Amerykański",
      "Azjatycki",
      "Grecki",
      "Meksykański"
    ];
    console.log(this.state);

    return (
      <section className="order">
        <div className="order-container">
          <div className="order-header">
            <div className="center">
              <p>Wybierz coś dla siebie: </p>
              <div className="btn btn-danger" onClick={this.onBuritoSelect}>
                Burito
              </div>
              <div className="btn btn-danger" onClick={this.onQuesadillaSelect}>
                Quesadilla
              </div>
            </div>
          </div>
          <div className="order-sidebar">
            <p>Wybierz wariant:</p>
            {orderType === 0
              ? orderBuritoType.map((type: string, index: number) => (
                  <div className="order-type" key={index}>{`${index +
                    1}. ${type}`}</div>
                ))
              : orderQuesadillaType.map((type: string, index: number) => (
                  <div className="order-type" key={index}>{`${index +
                    1}. ${type}`}</div>
                ))}
          </div>
          <div className="order-content">
            <div>
              {ingredients.map((ingidient: IIngredient, index: number) => (
                <div key={index} className="ingredient-row">
                  <div className="ingredient-name">{ingidient.name}</div>
                  <div className="btn btn-danger">-</div>
                  <div>{ingidient.value}</div>
                  <div className="btn btn-success">+</div>
                </div>
              ))}
            </div>
            <div className="center">
              <div className="btn btn-danger">Wyczyść</div>
              <div className="btn btn-success">Dodaj</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Order;
