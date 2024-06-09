import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="img" />
      <p className="title">{title}</p>
      <p className="domain-url">{domainUrl}</p>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
