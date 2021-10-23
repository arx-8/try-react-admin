import { makeStyles } from "@material-ui/core/styles"
import { alpha } from "@material-ui/core/styles/colorManipulator"
import ActionDelete from "@material-ui/icons/Delete"
import { ReactElement, ReactEventHandler, SyntheticEvent } from "react"
import {
  Button,
  ButtonProps,
  OnFailure,
  OnSuccess,
  Record as RaRecord,
  RedirectionSideEffect,
  useDeleteWithUndoController,
  useResourceContext,
} from "react-admin"

/**
 * なぜか import classnames from "classnames" が type error になるため、代替
 */
const classnames = (...classNames: (string | undefined)[]) => {
  return classNames.filter((x) => x != null).join(" ")
}

type CustomProps = {
  confirm: () => boolean
}

type Props = {
  basePath?: string
  className?: string
  classes?: Record<string, unknown>
  // May be injected by Toolbar - sanitized in Button
  handleSubmit?: (
    event?: SyntheticEvent<HTMLFormElement>
  ) => Promise<Record<string, unknown>>
  handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void
  icon?: ReactElement
  invalid?: boolean
  label?: string
  onClick?: ReactEventHandler
  onFailure?: OnFailure
  onSuccess?: OnSuccess
  pristine?: boolean
  record?: RaRecord
  redirect?: RedirectionSideEffect
  resource?: string
  saving?: boolean
  submitOnEnter?: boolean
}

type DeleteWithUndoButtonProps = Props & ButtonProps & CustomProps

/**
 * onClick 時に window.confirm で簡易な confirm を hook できるようにした react-admin.DeleteButton の copy 実装
 * @see https://github.com/marmelab/react-admin/blob/v3.19.0/packages/ra-ui-materialui/src/button/DeleteWithUndoButton.tsx
 */
export const DeleteButtonWithConfirm = (
  props: DeleteWithUndoButtonProps
): JSX.Element => {
  const {
    label = "ra.action.delete",
    className,
    icon = <ActionDelete />,
    onClick,
    record,
    basePath,
    redirect = "list",
    onSuccess,
    onFailure,
    confirm,
    ...rest
  } = props
  const classes = useStyles(props)
  const resource = useResourceContext(props)
  const { handleDelete, loading } = useDeleteWithUndoController({
    basePath,
    onClick,
    onFailure,
    onSuccess,
    record,
    redirect,
    resource,
  })

  return (
    <Button
      className={classnames(
        "ra-delete-button",
        classes.deleteButton,
        className
      )}
      disabled={loading}
      key="button"
      label={label}
      onClick={(e) => {
        // ここに confirm を追加したいためだけに、元コードをコピペしている
        if (confirm()) {
          handleDelete(e)
        }
      }}
      {...rest}
    >
      {icon}
    </Button>
  )
}

const useStyles = makeStyles(
  (theme) => ({
    deleteButton: {
      "&:hover": {
        // Reset on mouse devices
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },

        backgroundColor: alpha(theme.palette.error.main, 0.12),
      },
      color: theme.palette.error.main,
    },
  }),
  { name: "RaDeleteWithUndoButton" }
)
