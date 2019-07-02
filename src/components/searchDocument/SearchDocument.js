import React from 'react';
import { Link } from 'react-router-dom';
import './search-documents.css'

let someDoc = [
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление на анализ крови',
    order: '12345'
  },
  {
    title: 'Направление влево',
    order: '12345'
  },
]

export default class SearchDocuments extends React.Component {

  constructor() {

    super()

    this.state = {
      doc: someDoc,
      prev: [],
      locDoc: localStorage.doc 
    }
    this.showDocuments = this.showDocuments.bind(this)
    this.searchDocument = this.searchDocument.bind(this)
    this.chooseDocument = this.chooseDocument.bind(this)
    this.showNext = this.showNext.bind(this)
  }

  componentWillMount() {
    localStorage.doc = '[]'
  }
  

  showDocuments(arr) {
    let countGroups = Math.ceil(arr.length / 3)
    let result = []
    for(let i=0; i < countGroups; i++){
      let group =
      (
        <div className="search-document__results-group" key={i}>
          {
            (arr.slice(i*3, i*3+3)).map( (item, i2) => {
              return(
                <div className="search-document__results-item" key={i+i2}
                data-name={item.title}
                data-order={item.order}
                onClick={this.chooseDocument}>
                    <div className="results-item__img">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3039 6.58887L15.304 6.58882C15.4825 6.41486 15.5448 6.16307 15.4676 5.92505C15.3903 5.68751 15.1922 5.52054 14.9448 5.48447C14.9447 5.48447 14.9447 5.48446 14.9446 5.48445L11.0707 4.92156L11.0705 4.92153C10.7431 4.87385 10.4596 4.66838 10.3129 4.37087C10.3129 4.37075 10.3128 4.37064 10.3128 4.37053L8.58094 0.860734L8.58088 0.860613C8.47075 0.637269 8.25009 0.5 8.00025 0.5C7.75082 0.5 7.53011 0.637198 7.41994 0.860614L7.41988 0.86075L5.68773 4.37085C5.54093 4.66893 5.25677 4.87422 4.92966 4.92185L4.9295 4.92188L1.05541 5.48479L1.05524 5.48482C0.808455 5.52059 0.60991 5.68772 0.532511 5.92553C0.455375 6.1635 0.517738 6.41522 0.696201 6.58914L0.696233 6.58917L3.49928 9.32141L3.49948 9.32161C3.73602 9.55244 3.84538 9.88552 3.78914 10.2127M15.3039 6.58887L3.29637 10.128M15.3039 6.58887L12.5009 9.32143L12.5007 9.32161C12.2642 9.55241 12.1548 9.88509 12.211 10.2125L12.8726 14.0706L12.8727 14.0713C12.9065 14.2665 12.8567 14.4477 12.7333 14.5937L12.7328 14.5943C12.6056 14.7453 12.4238 14.8291 12.2348 14.8291C12.1323 14.8291 12.0323 14.8049 11.934 14.7531L11.9337 14.753L8.46874 12.9312L8.4671 12.9304C8.17893 12.7802 7.82359 12.7782 7.53227 12.931L7.53176 12.9313L4.06721 14.7529L4.29981 15.1955M15.3039 6.58887L7.76445 13.3738M3.78914 10.2127L3.29637 10.128M3.78914 10.2127L3.78918 10.2125L3.29637 10.128M3.78914 10.2127L3.12791 14.0705L3.12781 14.0711C3.09404 14.2667 3.14387 14.4475 3.26746 14.594L3.26791 14.5946C3.46035 14.8233 3.80133 14.8926 4.06712 14.753L4.29981 15.1955M3.29637 10.128L2.6351 13.9861C2.57647 14.3257 2.66553 14.656 2.88532 14.9165C3.22685 15.3224 3.82308 15.4461 4.29981 15.1955M4.29981 15.1955L7.76445 13.3738M7.76445 13.3738C7.90926 13.2979 8.09156 13.2985 8.23606 13.3738H7.76445Z"
                          stroke="#05C4F4"
                        />
                      </svg>
                    </div>
                    <div className="results-item__text">
                      {item.title}
                    </div>
                    <div className="results-item__number">№ {item.order} </div>
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

  searchDocument(e){
    let target = `${e.currentTarget.classList}`.includes('search-document__form-img')
    let searchString = `${document.querySelector('.search-document__form-input').value}`
    if(searchString && target || (searchString && e.key === 'Enter')){  
      let doc = someDoc.filter(item => item.title.toLowerCase().includes(searchString))
      this.setState({
        doc: doc
      })
    }
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
      }
     
      
      localStorage.doc = JSON.stringify(doc);
      console.log(localStorage.doc);
      this.setState({
        locDoc: localStorage.doc
      })
    }
    else {
      target.classList.remove('active')
      target.children[0].classList.remove('active')
      localStorage.doc = ''
      console.log(localStorage.doc);
      this.setState({
        locDoc: localStorage.doc
      })
    }

    
  }

  showNext() {
    if(this.state.locDoc.length > 5 || localStorage.doc.length > 5){
      return (
        <Link to="/add-drug"
          style={{display: 'flex', alignSelf: 'center'}} >
          <button className="search-document__submit">Выбрать </button>
        </Link>
      )
    }
  }

 render() {
    return (
        <div className="main__search-document">
          <div className="search-document__title">
            Поиск необходимой формы
          </div>
          <div className="search-document__form">
            <input className="search-document__form-input" onKeyPress={this.searchDocument}/>
            <div className="search-document__form-img" onClick={this.searchDocument}>
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
          <div className="search-document__results">
            {
              this.showDocuments(this.state.doc)
            }
         
          </div>
          {this.showNext()}
        </div>
      );
 }   
  
}


