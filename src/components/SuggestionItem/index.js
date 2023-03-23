// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, update} = props
  const {suggestion, id} = suggestionDetails
  const onUpdate = () => {
    update(id)
  }
  return (
    <li className="list-cont">
      <p className="sug">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={onUpdate}
      />
    </li>
  )
}
export default SuggestionItem
