import React from 'react';
import './check.css'

let doc = [
  {
    name: "TEST",
    schedule: "2/3/4",
    period: "13 jun - 14 jul",
    price: "1324"
  }
];


export default class Check extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      user: {}
    }
  }

componentWillMount(){
  if(JSON.parse(localStorage.recipes)) {
    let res = JSON.parse(localStorage.recipes)
    let user = JSON.parse(localStorage.user)
    this.setState({
      recipes: res,
      user: user
    })
  }
}

 render() {
    return (
<React.Fragment>
    <div className="main__check">
        <div className="main__check-title">Рецепт №1234</div>
        <div className="main__check-desc">
        <div className="main__check-desc-person">
            <div className="check-desc-person__title">Пациент</div>
            <div className="check-desc-person-wrap">
            <div className="check-desc-person__info">
                <span className="check-desc-person__info-title">
                ФИО пациента
                </span>
                <span className="check-desc-person__info-value">
                {this.state.user.name}
                </span>
            </div>
            <div className="check-desc-person__info">
                <span className="check-desc-person__info-title">
                Возраст
                </span>
                <span className="check-desc-person__info-value">{this.state.user.age}</span>
            </div>
            <div className="check-desc-person__info">
                <span className="check-desc-person__info-title long">
                Адресс или номер медецинской карты пациента
                </span>
                <span className="check-desc-person__info-value">
                г. Волгоград, Бульвар 30 лет Победы, д.99 кв.7
                </span>
            </div>
            </div>
        </div>
        <div className="main__check-desc-doctor">
            <div className="check-desc-doctor__title">Врач</div>
            <div className="check-desc-doctor-wrap">
            <div className="check-desc-doctor__info">
                <span className="check-desc-doctor__info-title">
                ФИО лечащего врача
                </span>
                <span className="check-desc-doctor__info-value">
                Волошина Анна Владимировна
                </span>
            </div>
            </div>
        </div>
        </div>
  </div>
  <div className="main__list-recepies">
      <span className="main__list-recepies-title">
        Выписанные лекарства
      </span>

  {
    this.state.recipes.map( (item, i) => {
      return(
        <div className="add-drug__list-item" key={i}>
        <div className="add-drug__list-item-order">
        {i+1}.
        </div>
        <div className="add-drug__list-item-info">
          <div className="list-item-info__title">
            <span className="list-item-info__title-name">Название</span>
            <span className="list-item-info__title-value">{item.name}</span>
          </div>
          <div className="list-item-info__title">
            <span className="list-item-info__title-name">График приема</span>
            <span className="list-item-info__title-value">{item.schedule}</span>
          </div>
          <div className="list-item-info__title">
            <span className="list-item-info__title-name">Период приема</span>
            <span className="list-item-info__title-value">{item.period}</span>
          </div>
          <div className="list-item-info__title">
            <span className="list-item-info__title-name">Примерная цена за уп.</span>
            <span className="list-item-info__title-value">{item.price}</span>
          </div>
        </div>
      </div>
        )
      })
    }
  </div>
</React.Fragment>     
      );
 }   
  
}


