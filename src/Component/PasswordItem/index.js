import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isDeleteButton, isChecked, randomNum} = props
  const {id, website, username, password} = passwordDetails
  const initialName = website.slice(0, 1).toUpperCase()
  const onDeleteButton = () => {
    isDeleteButton(id)
  }
  const changePasswordView = isChecked ? (
    password
  ) : (
    <img
      className="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  return (
    <li className="list-card">
      <div className="user-logo">
        <p>{initialName}</p>
      </div>
      <div className="para-list">
        <p className="p1">{website}</p>
        <p className="p1">{username}</p>
        <p className="p1">{changePasswordView}</p>
      </div>
      <button
        className="delete-btn"
        data-testid="delete"
        type="button"
        onClick={onDeleteButton}
      >
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
