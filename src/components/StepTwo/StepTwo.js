import { useFormContext, actions } from "../../state"

const { SET_NAME, SET_IS_ADULT } = actions
const InputNames = {
  first: "first",
  middle: "middle",
  last: "last",
}

const Placeholders = {
  first: "John",
  middle: "Hank",
  last: "Doe",
}

export default function StepTwo({ handleNextClick }) {
  const [{ name, isAdult }, dispatch] = useFormContext()

  function handleChange(event) {
    const { value, name } = event.target

    dispatch({
      type: SET_NAME,
      payload: { nameType: InputNames[name], value },
    })
  }

  function handleCheck() {
    dispatch({
      type: SET_IS_ADULT,
      payload: { value: !isAdult },
    })
  }

  function handleClick(e) {
    if (!isAdult || !name.first || !name.last) return

    handleNextClick(e)
  }

  return (
    <>
      <p>We need some basic info about you.</p>

      {Object.values(InputNames).map((nameType) => (
        <label className="pr-1" key={nameType} htmlFor={nameType}>
          <span className="d-block pb-0">
            {nameType[0].toUpperCase() + nameType.slice(1)} Name
          </span>
          <input
            required
            className="mb-1"
            name={nameType}
            id={name}
            value={name[nameType]}
            onChange={handleChange}
            placeholder={Placeholders[nameType]}
          />
        </label>
      ))}

      <p>
        <label htmlFor="adult">
          <input
            required
            id="adult"
            type="checkbox"
            checked={isAdult}
            onChange={handleCheck}
          />{" "}
          By checking this box, I confirm that I'm at least 18 years of age.
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
