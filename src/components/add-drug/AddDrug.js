import React from 'react';
import './add-drug.css'
import { Link } from 'react-router-dom';
export default class AddDrug extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 1,
      doc: [
        // {
        //   name: 'TEST', 
        //   schedule: '2/3/4',
        //   period: '13 jun - 14 jul',
        //   price: '1324'
        // }
      ], 
      formActive: true,
      recipes: localStorage.recipes
    }
    this.addNewDrug = this.addNewDrug.bind(this)
    this.addNewRecipe = this.addNewRecipe.bind(this)
  }

  componentWillMount(){
    localStorage.recipes = '[]';
  }
  componentDidMount(){
    console.log('aAA');
    document.querySelector('.form-body__drug-add').addEventListener('click', ()=> {
      console.log("object");
      this.addNewRecipe()
    })
  }

  addNewDrug() {
    if(this.state.formActive){
      let box = document.querySelector('.main__add-drug');
      let button = document.querySelector('.add-drug__item-new');
      let item = document.querySelector('#drugForm').children[0].cloneNode(true)
      item.children[1].children[1].children[4].addEventListener('click', this.addNewRecipe)
      box.insertBefore(item, button)
      let count = this.state.count + 1
      this.setState({
        count: count,
        formActive: false
      })
    }
    
  }

  addNewRecipe() {
    let name = document.querySelector('.form-body__drug-input').value
    let schedule = document.querySelector('.drug-info__schedule-input').value
    let period = document.querySelector('.drug-info__period-input').value 
    let price = document.querySelector('.drug-info__price-input').value
    function l(item){
      return item.length > 0? true:false
    }
    if(l(price) && l(schedule) && l(name) && l(period)){
      let recipe = {
        name: name, 
        schedule: schedule,
        period: period,
        price: price
      }
      let prevRes = JSON.parse(localStorage.recipes)
      prevRes.push(recipe);
      localStorage.recipes = JSON.stringify(prevRes);
      console.log(localStorage);

      let addForm = document.querySelector('.add-drug__form')
      console.log(addForm);
      addForm.remove()
      this.setState({
        formActive: true,
        doc: prevRes,
        recipes: localStorage.recipes
      })
    }
    else {
      console.log('fill all');
    }
    
  }

  showNext() {
    if(JSON.parse(this.state.recipes.length) > 5 ){
      return (
        <Link to="/check"
          style={{display: 'flex', justifyContent: 'center'}} >
          <button className="search-document__submit">Выбрать </button>
        </Link>
      )
    }
  }

 render() {
    return (
<React.Fragment>
<div>
  <div className="main__add-drug">
    {
      this.state.doc.map( (item, i) => {
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

 
    <div className="add-drug__item-new"
    onClick={this.addNewDrug}>
      <div className="add-drug__item-order"
      
      >{this.state.count}.</div>
      <button className="add-drug__item-new-button">
        Добавить лекарство
      </button>
    </div>
  </div>
  <div className="main__popup-search">
    <div
      className="modal"
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="main__popup-search-wrap fix-bootsrap">
        <button
          type="button"
          className="close main__popup-search-close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="popup-search__title">
          Введите название лекарства или действующего средства
        </div>
        <form className="popup-search__form">
          <input className="popup-search__form-input" />
          <div className="popup-search__form-img">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5595 15.4322L13.6491 11.5219C13.6283 11.5011 13.6039 11.4866 13.5822 11.4672C14.3516 10.3001 14.8007 8.90292 14.8007 7.40043C14.8007 3.31327 11.4874 0 7.40036 0C3.31327 0 0 3.31327 0 7.40036C0 11.4874 3.31319 14.8007 7.40028 14.8007C8.90285 14.8007 10.2999 14.3516 11.4671 13.5822C11.4864 13.6038 11.5009 13.6282 11.5217 13.649L15.4322 17.5595C16.0196 18.1468 16.972 18.1468 17.5595 17.5595C18.1468 16.972 18.1468 16.0197 17.5595 15.4322ZM7.40036 12.2352C4.73004 12.2352 2.5654 10.0706 2.5654 7.40036C2.5654 4.73004 4.73011 2.5654 7.40036 2.5654C10.0705 2.5654 12.2352 4.73011 12.2352 7.40036C12.2352 10.0706 10.0705 12.2352 7.40036 12.2352Z"
                fill="#2F2F2F"
              />
            </svg>
          </div>
        </form>
        <div className="popup-search__pop-results">
          <div className="popup-search__pop-results-item">
            <div className="pop-results-item__img">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.09315 5.22148C7.1224 5.27998 7.15165 5.33848 7.1809 5.38235C7.21015 5.42623 7.25402 5.47011 7.28327 5.51398C7.32715 5.55786 7.37102 5.60173 7.42953 5.64561C7.4734 5.67486 7.5319 5.71874 7.60503 5.73336C7.66353 5.76261 7.72203 5.77724 7.79516 5.79186C7.86828 5.80649 7.92678 5.80649 7.98528 5.80649C8.04378 5.80649 8.11691 5.80649 8.17541 5.79186C8.23391 5.77724 8.29241 5.76261 8.33629 5.73336H8.35091C8.40942 5.70411 8.46792 5.67486 8.52642 5.63098C8.57029 5.60173 8.61417 5.55786 8.65804 5.51398L8.67267 5.49936C8.71655 5.45548 8.7458 5.41161 8.77505 5.36773C8.8043 5.32385 8.83355 5.27998 8.84817 5.22148C8.84817 5.20685 8.84817 5.20685 8.8628 5.19223C8.89205 5.13373 8.90667 5.0606 8.9213 5.0021C8.93592 4.9436 8.93592 4.87047 8.93592 4.81197C8.93592 4.75347 8.93592 4.68034 8.9213 4.62184C8.90667 4.56334 8.89205 4.50484 8.8628 4.43171C8.81892 4.32934 8.76042 4.24158 8.6873 4.16846C8.67267 4.15383 8.67267 4.15383 8.65804 4.13921C8.61417 4.09533 8.57029 4.06608 8.51179 4.02221C8.45329 3.99296 8.40942 3.9637 8.35091 3.93445C8.29241 3.9052 8.23391 3.89058 8.17541 3.87595C8.10229 3.86133 8.04378 3.86133 7.98528 3.86133C7.92678 3.86133 7.85366 3.86133 7.79516 3.87595C7.73666 3.89058 7.67815 3.9052 7.61965 3.93445H7.60503C7.54653 3.9637 7.48803 3.99296 7.44415 4.02221C7.38565 4.06608 7.34177 4.09533 7.2979 4.13921C7.25402 4.18308 7.21015 4.22696 7.1809 4.27084C7.15165 4.31471 7.1224 4.37321 7.09315 4.43171C7.0639 4.49021 7.04927 4.54872 7.03464 4.60722C7.02002 4.68034 7.02002 4.73884 7.02002 4.79734C7.02002 4.85585 7.02002 4.92897 7.03464 4.98747C7.04927 5.10447 7.07852 5.16298 7.09315 5.22148Z"
                  fill="#05C4F4"
                />
                <path
                  d="M9.12619 10.5748H8.78981V6.99158C8.78981 6.78683 8.62894 6.61133 8.40956 6.61133H6.87391C6.66915 6.61133 6.49365 6.77221 6.49365 6.99158V7.78135C6.49365 7.9861 6.65453 8.1616 6.87391 8.1616H7.18104V10.5894H6.87391C6.66915 10.5894 6.49365 10.7503 6.49365 10.9697V11.7594C6.49365 11.9642 6.65453 12.1397 6.87391 12.1397H9.12619C9.33095 12.1397 9.50645 11.9788 9.50645 11.7594V10.9697C9.50645 10.7503 9.33095 10.5748 9.12619 10.5748Z"
                  fill="#05C4F4"
                />
                <path
                  d="M8 0C3.58318 0 0 3.58318 0 8C0 12.4168 3.58318 16 8 16C12.4168 16 16 12.4168 16 8C16 3.58318 12.4168 0 8 0ZM8 14.947C4.16819 14.947 1.05302 11.8318 1.05302 8C1.05302 4.16819 4.16819 1.05302 8 1.05302C11.8318 1.05302 14.947 4.16819 14.947 8C14.947 11.8318 11.8318 14.947 8 14.947Z"
                  fill="#05C4F4"
                />
              </svg>
            </div>
            <div className="pop-results-item__text">Адонозил</div>
          </div>
          <div className="popup-search__pop-results-item active">
            <div className="pop-results-item__img">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.09315 5.22148C7.1224 5.27998 7.15165 5.33848 7.1809 5.38235C7.21015 5.42623 7.25402 5.47011 7.28327 5.51398C7.32715 5.55786 7.37102 5.60173 7.42953 5.64561C7.4734 5.67486 7.5319 5.71874 7.60503 5.73336C7.66353 5.76261 7.72203 5.77724 7.79516 5.79186C7.86828 5.80649 7.92678 5.80649 7.98528 5.80649C8.04378 5.80649 8.11691 5.80649 8.17541 5.79186C8.23391 5.77724 8.29241 5.76261 8.33629 5.73336H8.35091C8.40942 5.70411 8.46792 5.67486 8.52642 5.63098C8.57029 5.60173 8.61417 5.55786 8.65804 5.51398L8.67267 5.49936C8.71655 5.45548 8.7458 5.41161 8.77505 5.36773C8.8043 5.32385 8.83355 5.27998 8.84817 5.22148C8.84817 5.20685 8.84817 5.20685 8.8628 5.19223C8.89205 5.13373 8.90667 5.0606 8.9213 5.0021C8.93592 4.9436 8.93592 4.87047 8.93592 4.81197C8.93592 4.75347 8.93592 4.68034 8.9213 4.62184C8.90667 4.56334 8.89205 4.50484 8.8628 4.43171C8.81892 4.32934 8.76042 4.24158 8.6873 4.16846C8.67267 4.15383 8.67267 4.15383 8.65804 4.13921C8.61417 4.09533 8.57029 4.06608 8.51179 4.02221C8.45329 3.99296 8.40942 3.9637 8.35091 3.93445C8.29241 3.9052 8.23391 3.89058 8.17541 3.87595C8.10229 3.86133 8.04378 3.86133 7.98528 3.86133C7.92678 3.86133 7.85366 3.86133 7.79516 3.87595C7.73666 3.89058 7.67815 3.9052 7.61965 3.93445H7.60503C7.54653 3.9637 7.48803 3.99296 7.44415 4.02221C7.38565 4.06608 7.34177 4.09533 7.2979 4.13921C7.25402 4.18308 7.21015 4.22696 7.1809 4.27084C7.15165 4.31471 7.1224 4.37321 7.09315 4.43171C7.0639 4.49021 7.04927 4.54872 7.03464 4.60722C7.02002 4.68034 7.02002 4.73884 7.02002 4.79734C7.02002 4.85585 7.02002 4.92897 7.03464 4.98747C7.04927 5.10447 7.07852 5.16298 7.09315 5.22148Z"
                  fill="#05C4F4"
                />
                <path
                  d="M9.12619 10.5748H8.78981V6.99158C8.78981 6.78683 8.62894 6.61133 8.40956 6.61133H6.87391C6.66915 6.61133 6.49365 6.77221 6.49365 6.99158V7.78135C6.49365 7.9861 6.65453 8.1616 6.87391 8.1616H7.18104V10.5894H6.87391C6.66915 10.5894 6.49365 10.7503 6.49365 10.9697V11.7594C6.49365 11.9642 6.65453 12.1397 6.87391 12.1397H9.12619C9.33095 12.1397 9.50645 11.9788 9.50645 11.7594V10.9697C9.50645 10.7503 9.33095 10.5748 9.12619 10.5748Z"
                  fill="#05C4F4"
                />
                <path
                  d="M8 0C3.58318 0 0 3.58318 0 8C0 12.4168 3.58318 16 8 16C12.4168 16 16 12.4168 16 8C16 3.58318 12.4168 0 8 0ZM8 14.947C4.16819 14.947 1.05302 11.8318 1.05302 8C1.05302 4.16819 4.16819 1.05302 8 1.05302C11.8318 1.05302 14.947 4.16819 14.947 8C14.947 11.8318 11.8318 14.947 8 14.947Z"
                  fill="#05C4F4"
                />
              </svg>
            </div>
            <div className="pop-results-item__text">Адоноoooзил</div>
          </div>
          <div className="popup-search__pop-results-item">
            <div className="pop-results-item__img">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.09315 5.22148C7.1224 5.27998 7.15165 5.33848 7.1809 5.38235C7.21015 5.42623 7.25402 5.47011 7.28327 5.51398C7.32715 5.55786 7.37102 5.60173 7.42953 5.64561C7.4734 5.67486 7.5319 5.71874 7.60503 5.73336C7.66353 5.76261 7.72203 5.77724 7.79516 5.79186C7.86828 5.80649 7.92678 5.80649 7.98528 5.80649C8.04378 5.80649 8.11691 5.80649 8.17541 5.79186C8.23391 5.77724 8.29241 5.76261 8.33629 5.73336H8.35091C8.40942 5.70411 8.46792 5.67486 8.52642 5.63098C8.57029 5.60173 8.61417 5.55786 8.65804 5.51398L8.67267 5.49936C8.71655 5.45548 8.7458 5.41161 8.77505 5.36773C8.8043 5.32385 8.83355 5.27998 8.84817 5.22148C8.84817 5.20685 8.84817 5.20685 8.8628 5.19223C8.89205 5.13373 8.90667 5.0606 8.9213 5.0021C8.93592 4.9436 8.93592 4.87047 8.93592 4.81197C8.93592 4.75347 8.93592 4.68034 8.9213 4.62184C8.90667 4.56334 8.89205 4.50484 8.8628 4.43171C8.81892 4.32934 8.76042 4.24158 8.6873 4.16846C8.67267 4.15383 8.67267 4.15383 8.65804 4.13921C8.61417 4.09533 8.57029 4.06608 8.51179 4.02221C8.45329 3.99296 8.40942 3.9637 8.35091 3.93445C8.29241 3.9052 8.23391 3.89058 8.17541 3.87595C8.10229 3.86133 8.04378 3.86133 7.98528 3.86133C7.92678 3.86133 7.85366 3.86133 7.79516 3.87595C7.73666 3.89058 7.67815 3.9052 7.61965 3.93445H7.60503C7.54653 3.9637 7.48803 3.99296 7.44415 4.02221C7.38565 4.06608 7.34177 4.09533 7.2979 4.13921C7.25402 4.18308 7.21015 4.22696 7.1809 4.27084C7.15165 4.31471 7.1224 4.37321 7.09315 4.43171C7.0639 4.49021 7.04927 4.54872 7.03464 4.60722C7.02002 4.68034 7.02002 4.73884 7.02002 4.79734C7.02002 4.85585 7.02002 4.92897 7.03464 4.98747C7.04927 5.10447 7.07852 5.16298 7.09315 5.22148Z"
                  fill="#05C4F4"
                />
                <path
                  d="M9.12619 10.5748H8.78981V6.99158C8.78981 6.78683 8.62894 6.61133 8.40956 6.61133H6.87391C6.66915 6.61133 6.49365 6.77221 6.49365 6.99158V7.78135C6.49365 7.9861 6.65453 8.1616 6.87391 8.1616H7.18104V10.5894H6.87391C6.66915 10.5894 6.49365 10.7503 6.49365 10.9697V11.7594C6.49365 11.9642 6.65453 12.1397 6.87391 12.1397H9.12619C9.33095 12.1397 9.50645 11.9788 9.50645 11.7594V10.9697C9.50645 10.7503 9.33095 10.5748 9.12619 10.5748Z"
                  fill="#05C4F4"
                />
                <path
                  d="M8 0C3.58318 0 0 3.58318 0 8C0 12.4168 3.58318 16 8 16C12.4168 16 16 12.4168 16 8C16 3.58318 12.4168 0 8 0ZM8 14.947C4.16819 14.947 1.05302 11.8318 1.05302 8C1.05302 4.16819 4.16819 1.05302 8 1.05302C11.8318 1.05302 14.947 4.16819 14.947 8C14.947 11.8318 11.8318 14.947 8 14.947Z"
                  fill="#05C4F4"
                />
              </svg>
            </div>
            <div className="pop-results-item__text">Адонозииил</div>
          </div>
        </div>
        <button
          className="popup-search__submit"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
  
  {this.showNext()}
  
</div>

<template id="drugForm">
<div className="add-drug__form">
    <div className="add-drug__item-order">{this.state.count}.</div>
    <div className="add-drug__form-body">
      <div className="form-body__title">
        Добавление лекарства №{this.state.count}
      </div>
      <div className="form-body__drug">
        <div className="form-body__drug-name">
          Введите название лекарства
        </div>
        <div className="form-body__drug-wrap">
          <input className="form-body__drug-input" />
          <button
            className="form-body__drug-search"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5595 15.4322L13.6491 11.5219C13.6283 11.5011 13.6039 11.4866 13.5822 11.4672C14.3516 10.3001 14.8007 8.90292 14.8007 7.40043C14.8007 3.31327 11.4874 0 7.40036 0C3.31327 0 0 3.31327 0 7.40036C0 11.4874 3.31319 14.8007 7.40028 14.8007C8.90285 14.8007 10.2999 14.3516 11.4671 13.5822C11.4864 13.6038 11.5009 13.6282 11.5217 13.649L15.4322 17.5595C16.0196 18.1468 16.972 18.1468 17.5595 17.5595C18.1468 16.972 18.1468 16.0197 17.5595 15.4322ZM7.40036 12.2352C4.73004 12.2352 2.5654 10.0706 2.5654 7.40036C2.5654 4.73004 4.73011 2.5654 7.40036 2.5654C10.0705 2.5654 12.2352 4.73011 12.2352 7.40036C12.2352 10.0706 10.0705 12.2352 7.40036 12.2352Z"
                fill="#2F2F2F"
              />
            </svg>
          </button>
        </div>
        <div className="form-body__drug-info">
          <div className="drug-info__schedule">
            <span className="drug-info__schedule-name">
              График приема
            </span>
            <input className="drug-info__schedule-input" />
          </div>
          <div className="drug-info__period">
            <span className="drug-info__period-name">
              Период приема
            </span>
            <input className="drug-info__period-input" />
          </div>
          <div className="drug-info__price">
            <span className="drug-info__price-name">
              Примерная цена за уп.
            </span>
            <input className="drug-info__price-input" />
          </div>
        </div>
        <div className="form-body__drug-danger">
          &nbsp; 
        </div>
        <button className="form-body__drug-add" data-name={123}
        onClick={this.addNewRecipe}
        >Добавить</button>
      </div>
    </div>
  </div>
</template>

</React.Fragment>
      );
 }   
  
}


