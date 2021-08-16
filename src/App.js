import { useState } from "react"
import { FormContextProvider } from "./state"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"
import StepFour from "./components/StepFour"
import "./styles.scss"

const FIRST_STEP = 0
const LAST_STEP = 3
const StepComponents = [StepOne, StepTwo, StepThree, StepFour]

export default function App() {
  const [step, setStep] = useState(0)

  function handleNextClick(e) {
    e.preventDefault()
    setStep(step + 1)
  }

  function handleBackClick(e) {
    e.preventDefault()
    setStep(step - 1)
  }

  function handleSubmit(e) {
    /**
     * Some network request to send the form
     * data would probably happen here.
     *
     * Let's assume it was all successful :)
     */
    handleNextClick(e)
  }

  function renderStep() {
    const Step = StepComponents[step]
    return <Step handleNextClick={handleNextClick} />
  }

  function renderBackButton() {
    return (
      ![FIRST_STEP, LAST_STEP].includes(step) && (
        <p>
          <button className="btn-bare" type="button" onClick={handleBackClick}>
            Back
          </button>
        </p>
      )
    )
  }

  return (
    <FormContextProvider>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Give Us All Your Data™</h1>
        {renderStep()}
        {renderBackButton()}
      </form>
    </FormContextProvider>
  )
}
