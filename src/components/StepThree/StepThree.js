import { useFormContext } from "../../state"
import { censorEmail, toSentenceCase } from "./helpers"

export default function StepTwo() {
  const [{ email, name }] = useFormContext()
  const censoredEmail = censorEmail(email)
  const SPACER = " "

  /**
   * Prints name appropriate with or without middle name.
   * - John Doe
   * - John Hank Doe
   */
  const fullName =
    toSentenceCase(name.first) +
    (name.middle ? SPACER + toSentenceCase(name.middle) + SPACER : SPACER) +
    toSentenceCase(name.last)

  return (
    <>
      <p>Please review before giving us All Your Data™</p>

      <p>
        <strong>Your info:</strong>
      </p>
      <p>
        <span>
          <strong>Name:</strong> {fullName}
        </span>
        <br aria-hidden="true" />
        <span>
          <strong>Email:</strong> {censoredEmail}
        </span>
      </p>

      <p className="row">
        By pressing the button below you relieve The Entity from all liability,
        including data leaks and other possibly illegal activity.
      </p>
      <div className="row">
        <button>Agree & Submit</button>
      </div>
    </>
  )
}
