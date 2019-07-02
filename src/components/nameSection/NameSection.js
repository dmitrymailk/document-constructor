import React from 'react';
import './nameSection.css'
export default class NameSection extends React.Component {

 render() {
    return (
        <div className="main__section">
          <div className="main__section-img">
              <svg
              width={39}
              height={44}
              viewBox="0 0 39 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                  d="M27.6984 18.6984C27.6984 17.7596 26.9374 16.9985 25.9985 16.9985H8.48991C7.55107 16.9985 6.79004 17.7596 6.79004 18.6984C6.79004 19.6372 7.55107 20.3983 8.48991 20.3983H25.9985C26.9374 20.3983 27.6984 19.6372 27.6984 18.6984Z"
                  fill="#05C4F4"
              />
              <path
                  d="M8.48991 23.7983C7.55107 23.7983 6.79004 24.5594 6.79004 25.4982C6.79004 26.437 7.55107 27.1981 8.48991 27.1981H19.1235C20.0623 27.1981 20.8234 26.437 20.8234 25.4982C20.8234 24.5594 20.0623 23.7983 19.1235 23.7983H8.48991Z"
                  fill="#05C4F4"
              />
              <path
                  d="M12.4846 40.1168H6.79946C4.92485 40.1168 3.39973 38.5917 3.39973 36.7171V6.79946C3.39973 4.92485 4.92485 3.39973 6.79946 3.39973H27.6984C29.573 3.39973 31.0981 4.92485 31.0981 6.79946V17.2536C31.0981 18.1925 31.8591 18.9535 32.798 18.9535C33.7368 18.9535 34.4978 18.1925 34.4978 17.2536V6.79946C34.4978 3.05024 31.4476 0 27.6984 0H6.79946C3.05024 0 0 3.05024 0 6.79946V36.7171C0 40.4663 3.05024 43.5166 6.79946 43.5166H12.4846C13.4234 43.5166 14.1844 42.7555 14.1844 41.8167C14.1844 40.8779 13.4234 40.1168 12.4846 40.1168Z"
                  fill="#05C4F4"
              />
              <path
                  d="M37.5086 24.6116C35.5203 22.6232 32.2851 22.6232 30.298 24.6102L20.9655 33.9221C20.7673 34.1199 20.6211 34.3634 20.5397 34.6313L18.5073 41.3224C18.3271 41.9157 18.4841 42.5599 18.917 43.0036C19.2414 43.336 19.682 43.5165 20.1339 43.5165C20.2851 43.5165 20.4377 43.4962 20.5876 43.4547L27.4487 41.5541C27.731 41.4759 27.9884 41.3261 28.1957 41.1191L37.5087 31.8236C39.497 29.8353 39.497 26.6001 37.5086 24.6116ZM26.1103 38.3971L22.6586 39.3533L23.6687 36.0276L29.9658 29.7445L32.3703 32.1489L26.1103 38.3971ZM35.106 29.4186L34.7766 29.7473L32.3726 27.3433L32.7008 27.0157C33.3636 26.3529 34.442 26.3529 35.1048 27.0157C35.7675 27.6785 35.7675 28.7569 35.106 29.4186Z"
                  fill="#05C4F4"
              />
              <path
                  d="M25.9985 10.1992H8.48991C7.55107 10.1992 6.79004 10.9602 6.79004 11.8991C6.79004 12.8379 7.55107 13.599 8.48991 13.599H25.9985C26.9374 13.599 27.6984 12.8379 27.6984 11.8991C27.6984 10.9602 26.9374 10.1992 25.9985 10.1992Z"
                  fill="#05C4F4"
              />
              </svg>
          </div>
          <div className="main__section-title">{this.props.textSec}</div>
          </div>
      );
 }   
  
}


