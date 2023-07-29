import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const backColor = [
  'bg0',

  'bg1',

  'bg2',

  'bg3',

  'bg4',

  'bg5',

  'bg6',

  'bg7',

  'bg8',

  'bg9',
]

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website1: '',
    username1: '',
    password1: '',
    count: 0,
    searchInput: '',
    isChecked: false,
  }

  isDeleteButton = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onChangeWebsiteInput = event => {
    console.log(event.target.value)
    this.setState({website1: event.target.value})
  }

  onChangeUsernameInput = event => {
    console.log(event.target.value)
    this.setState({username1: event.target.value})
  }

  onChangePasswordInput = event => {
    console.log(event.target.value)
    this.setState({password1: event.target.value})
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  newPasswordItemChecking = () => {
    const {website1, username1, password1} = this.state
    const randomNum = Math.floor(Math.random() * backColor.length - 1)
    // if (website1 === '' && username1 === '' && password1 === '') {
    //   alert('vbv')
    // }
    return {
      id: v4(),
      website: website1,
      username: username1,
      password: password1,
      randomBgColor: backColor[randomNum],
    }
  }

  onAddPassword = event => {
    event.preventDefault()

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, this.newPasswordItemChecking()],
      count: prevState.count + 1,
      website1: '',
      username1: '',
      password1: '',
    }))
    console.log(Math.floor(Math.random() * backColor.length))
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {
      passwordList,
      website1,
      username1,
      password1,
      count,
      searchInput,
      isChecked,
      randomNum,
    } = this.state

    const searchResult = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="manager-card">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
          />
          <div className="user-input-card">
            <form className="form-card" onSubmit={this.onAddPassword}>
              <div className="title-card">
                <h1 className="title">Add New Password</h1>
              </div>
              <div className="website-input-card">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  className="website-input"
                  type="text"
                  value={website1}
                  onChange={this.onChangeWebsiteInput}
                  placeholder="Enter Website"
                />
              </div>

              <div className="website-input-card">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  className="website-input"
                  type="text"
                  value={username1}
                  onChange={this.onChangeUsernameInput}
                  placeholder="Enter Username"
                />
              </div>

              <div className="website-input-card">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  className="website-input"
                  type="password"
                  value={password1}
                  onChange={this.onChangePasswordInput}
                  placeholder="Enter Password"
                />
              </div>

              <div className="btn-card">
                <button className="submit-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="img-card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>

          <div className="password-list-card">
            <div className="password-heading-card">
              <div className="counter-card">
                <h2 className="password-heading">Your Passwords</h2>
                <p className="counter">{count}</p>
              </div>
              <div className="search-input-card">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="hr" />
            <div className="show-passwords-card">
              <input
                className="checkbox"
                type="checkbox"
                value="checkbox"
                id="check"
                onClick={this.onChecked}
              />
              <label htmlFor="check" className="show-password">
                Show Passwords
              </label>
            </div>
            <div>
              <div>
                {searchResult.length === 0 ? (
                  <div className="no-password-card">
                    <img
                      className="no-passwords"
                      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                      alt="no passwords"
                    />
                    <p className="no-pass">No Passwords</p>
                  </div>
                ) : (
                  <ul className="ul-card">
                    {searchResult.map(eachItem => (
                      <PasswordItem
                        randomNum={randomNum}
                        isChecked={isChecked}
                        isDeleteButton={this.isDeleteButton}
                        passwordDetails={eachItem}
                        key={eachItem.id}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
