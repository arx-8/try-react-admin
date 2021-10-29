import { SaveButton, SaveButtonProps } from "react-admin"

type Props = {
  confirm: () => boolean
  disabled?: boolean
} & SaveButtonProps

/**
 * onClick 時に window.confirm で簡易な confirm を hook 可能にしている
 */
export const SaveButtonWithConfirm = ({
  confirm,
  disabled,
  handleSubmitWithRedirect,
}: Props): JSX.Element => {
  return (
    <SaveButton
      disabled={disabled}
      handleSubmitWithRedirect={() => {
        if (confirm()) {
          return handleSubmitWithRedirect?.()
        }
        return undefined
      }}
    />
  )
}
