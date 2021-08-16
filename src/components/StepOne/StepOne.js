import { useFormContext, actions } from "../../state"

const { SET_EMAIL } = actions
const INPUT_NAME = "email"
const PLACEHOLDER = "john.doe@gmail.com"

export default function StepOne({ handleNextClick }) {
  const [{ email }, dispatch] = useFormContext()
  const isValidEmail = email.match(
    /[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+\.[A-Za-z0-9-_.]+/
  )

  function handleChange(e) {
    dispatch({ type: SET_EMAIL, payload: { value: e.target.value } })
  }

  function handleClick(e) {
    if (!email || !isValidEmail) return
    handleNextClick(e)
  }

  return (
    <>
      <p>To start, we need an email.</p>
      <p>
        <label htmlFor={INPUT_NAME}>
          <span>Email (required): </span>
          <input
            required
            name={INPUT_NAME}
            id={INPUT_NAME}
            value={email}
            onChange={handleChange}
            placeholder={PLACEHOLDER}
          />
        </label>
      </p>
      <p>
        <button type="button" onClick={handleClick}>
          Next
        </button>
      </p>
    </>
  )
}
