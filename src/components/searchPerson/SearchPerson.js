import React from 'react';
import { Link } from 'react-router-dom';
let img = 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg';



let users = [
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234'
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214'
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214'
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'Безруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1234',
  },
  {
    title: 'НеБезруков Владимир Ильич',
    birth: '12.12.1867',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '67',
    OMC: '2351200836000023',
    last: '13/12/15',
    passport: '22 23 124214',
    id: '1345'
  },
  {
    title: 'Уникальный Человек Для Теста',
    birth: '03.09.2001',
    img: 'http://web-citizen.ru/digit-challenge/document-constructor/view/v_1/img/user.jpg',
    age: '18',
    OMC: '123456789012345678',
    last: '14/12/17',
    passport: '45 25 126214',
    id: '88005553535'
  },
  
]
export default class SearchPerson extends React.Component {

  constructor() {
    super()



    this.state = {
      users: users, 
      user: '12'
    }

    
    this.showUsers = this.showUsers.bind(this)
    this.searchPerson = this.searchPerson.bind(this)
    this.chooseUser = this.chooseUser.bind(this)
    this.showNext = this.showNext.bind(this)
    localStorage.user = '[]'
    localStorage.doc = '[]'
    localStorage.recipes = '[]'
  }

  componentWillMount() {
    localStorage.user = '[]'
    localStorage.doc = '[]'
    localStorage.recipes = '[]'
  }

  showUsers(arr) {
    let countGroups = Math.ceil(arr.length / 8)
    let result = []
    for(let i=0; i < countGroups; i++){
      let group =
      (
        <div className="search-person__results-group" key={i}>
          {
            (arr.slice(i*8, i*8+8)).map( (item, i2) => {
              return(
                <div
              className="search-person__results-item"
              data-toggle="collapse"
              data-target={'#collapseExample'+ i + i2 }
              aria-expanded="false"
              aria-controls={'#collapseExample' }
              onClick={this.chooseUser}
              data-name={item.title}
              data-age={item.age}
              data-id={item.id}
            key={i+i2}>
                <div className="results-item__head">
                  <div className="results-item__head-img">
                    <svg
                      width={17}
                      height={9}
                      viewBox="0 0 17 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.65841 8.67619L0.348909 1.88741C-0.116304 1.45556 -0.116304 0.755393 0.348909 0.323755C0.813707 -0.107919 1.56757 -0.107919 2.03233 0.323755L8.50012 6.33078L14.9677 0.32393C15.4327 -0.107744 16.1865 -0.107744 16.6513 0.32393C17.1162 0.755604 17.1162 1.45574 16.6513 1.88759L9.34164 8.67637C9.10913 8.8922 8.80472 9 8.50016 9C8.19545 9 7.89081 8.89199 7.65841 8.67619Z"
                        fill="#05C4F4"
                      />
                      <path
                        d="M7.65841 8.67619L0.348909 1.88741C-0.116304 1.45556 -0.116304 0.755393 0.348909 0.323755C0.813707 -0.107919 1.56757 -0.107919 2.03233 0.323755L8.50012 6.33078L14.9677 0.32393C15.4327 -0.107744 16.1865 -0.107744 16.6513 0.32393C17.1162 0.755604 17.1162 1.45574 16.6513 1.88759L9.34164 8.67637C9.10913 8.8922 8.80472 9 8.50016 9C8.19545 9 7.89081 8.89199 7.65841 8.67619Z"
                        fill="#05C4F4"
                      />
                    </svg>
                  </div>
                  <div className="results-item__head-text">
                    {item.title}
                  </div>
                  <div className="results-item__head-number">{item.birth}</div>
                </div>
                <div
                  className="results-item__body collapse"
                  id={'collapseExample'+ i + i2 }
                >
                  <div className="results-item__body-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="results-item__body-date">
                    <div className="body-date__birth-age">
                      <div className="birth-age__birth">
                        <div className="birth-age__birth-name">
                          Дата рождения
                        </div>
                        <div className="birth-age__birth-value">
                          12.12.1867
                        </div>
                      </div>
                      <div className="birth-age__age">
                        <div className="birth-age__age-name">Возраст</div>
                        <div className="birth-age__age-value"> {item.age}</div>
                      </div>
                    </div>
                    <div className="body-date__passport">
                      <div className="body-date__passport-name">
                        Серия и номер паспорта
                      </div>
                      <div className="body-date__passport-value">
                      {item.passport}
                      </div>
                    </div>
                  </div>
                  <div className="results-item__body-number">
                    <div className="body-number__OMC">
                      <div className="body-number__OMC-name">
                        Номер полиса ОМС
                      </div>
                      <div className="body-number__OMC-value">
                      {item.OMC}
                      </div>
                    </div>
                    <div className="body-number__last">
                      <div className="body-number__last-name">
                        Последнее посещение
                      </div>
                      <div className="body-number__last-value"> {item.last}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              )
            })
          }
        </div>
      )
    result.push(group)
    }


    return(
      result.map(item => item)
    )
  }

  chooseUser(e) {
    let target = e.currentTarget
    if(!target.className.includes('active')) {
      target.classList.add('active')
      let user = {
        id: target.dataset.id,
        name: target.dataset.name,
        age: target.dataset.age
      }
      
      localStorage.user = JSON.stringify(user);
      this.setState({
        user: localStorage.user
      })
    }
    else {
      target.classList.remove('active')
      localStorage.user = '[]'
      this.setState({
        user: localStorage.user
      })
    }
  }

  searchPerson(e){
    let target = `${e.currentTarget.classList}`.includes('search-person__form-img')
    let searchString = `${document.querySelector('.search-person__form-input').value}`
    if(searchString && target || (searchString && e.key === 'Enter')){  
      let user = users.filter(item => item.title.toLowerCase().includes(searchString))
      this.setState({
        users: user
      })
    }
  }

  showNext() {
    if(this.state.user.length > 5 ){
      return (
        <Link style={{display: 'flex', alignSelf: 'center'}} 
           to="/choose-document">
             <button className="search-person__submit">Выбрать</button>
        </Link>
      )
    }
  }

 render() {
    return (
    <div className="main__search-person">
        <div className="search-person__title">Введите ФИО пациента </div>
        <div className="search-person__form">
          <input className="search-person__form-input" onKeyPress={this.searchPerson}/>
          <div className="search-person__form-img" onClick={this.searchPerson}>
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
        </div>
        <div className="search-person__results">
          {this.showUsers(this.state.users)}
        </div>
        
      
        {this.showNext()}
       
        
      </div>
      
      );
 }   
  
}


