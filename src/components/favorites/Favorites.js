import React from 'react';
import './favorites.css'

let cardsFav = [
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '1234',
    update: '12/09/19'
  },
  {
    title: 'Направление на осмотр',
    order: '123',
    update: '12/09/19'
  },

]


export default class Favorites extends React.Component {
    constructor() {
      super()

      this.state = {
        prev: false
      }
      
      this.chooseDocument = this.chooseDocument.bind(this)
    }

    chooseDocument(e) {
      let target = e.currentTarget

      
      if(this.state.prev !== target && this.state.prev) {
        if(`${this.state.prev.classList}`.includes('active')){
          this.state.prev.classList.remove('active')
          this.state.prev.children[0].classList.remove('active')
        }
      }

      this.setState({
        prev: target
      })
      if(!target.className.includes('active')) {
        target.classList.add('active')
        target.children[0].classList.add('active')
        let doc = {
          id: target.dataset.order,
          name: target.dataset.name,
          last: target.dataset.update
        }
       
        
        localStorage.doc = JSON.stringify(doc);
      }
      else {
        target.classList.remove('active')
        target.children[0].classList.remove('active')
        localStorage.user = ''
      }

      
    }
 render() {
    return (
        <div className="main__favorites">
          <div className="main__favorites-title">Избранное</div>
          <div className="main__favorites-cards">
           {
             cardsFav.map( item => {
               return (
                <div className="favorites-cards__item"
                  data-name={item.title}
                  data-order={item.order}
                  data-update={item.update}
                  onClick={this.chooseDocument}>
                    
                  <div className="favorites-cards__item-img">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          opacity="0.3"
                          d="M15.6527 7.28235C15.9677 6.97542 16.0788 6.52496 15.943 6.10621C15.8068 5.68747 15.4522 5.38855 15.0164 5.32512L11.1423 4.7622C10.9773 4.73817 10.8348 4.63469 10.7611 4.48507L9.02909 0.974937C8.83461 0.580543 8.4399 0.335449 8.00001 0.335449C7.56044 0.335449 7.16573 0.580543 6.97126 0.974937L5.23894 4.48539C5.16525 4.63501 5.02236 4.73849 4.85736 4.76252L0.98327 5.32544C0.547867 5.38855 0.192881 5.68779 0.0567178 6.10653C-0.0791252 6.52528 0.0320482 6.97574 0.346986 7.28267L3.15003 10.0149C3.26953 10.1315 3.32432 10.2994 3.29613 10.4634L2.63485 14.3215C2.57622 14.6611 2.66529 14.9914 2.88507 15.2519C3.2266 15.6578 3.82284 15.7815 4.29957 15.531L7.76421 13.7093C7.90902 13.6333 8.09132 13.634 8.23581 13.7093L11.7008 15.531C11.8693 15.6197 12.049 15.6646 12.2345 15.6646C12.5732 15.6646 12.8942 15.514 13.1149 15.2519C13.3351 14.9914 13.4238 14.6605 13.3652 14.3215L12.7036 10.4634C12.6754 10.2991 12.7302 10.1315 12.8497 10.0149L15.6527 7.28235Z"
                          fill="#05C4F4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="favorites-cards__item-name">
                    <span className="name-card">Название</span>
                    <span className="name-value">{item.title}</span>
                  </div>
                  <div className="favorites-cards__item-numbers">
                    <div className="item-numbers__order">
                      <span className="order-name">Номер справки </span>
                      <span className="order-value">№ {item.order}</span>
                    </div>
                    <div className="item-numbers__date">
                      <span className="date-name">Дата обновления</span>
                      <span className="date-value">{item.update}</span>
                    </div>
                  </div>
                </div>
               )
             })
           }
          </div>
        </div>
      );
 }   
  
}


