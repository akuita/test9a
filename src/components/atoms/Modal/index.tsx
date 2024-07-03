import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'

import styles from './index.module.css'

let instanceModalComponent: ModalComponent | null = null
const DEFAULT_STATES = {
  modals: [],
}

export enum ModalPositionEnum {
  DEFAULT = 'default',
  TOP = 'top',
  CENTER = 'center',
}
export interface ModalOptions extends Omit<ReactModal.Props, 'isOpen'> {
  position?: `${ModalPositionEnum}`
}
export type ModalProps = {
  local?: boolean
  style?: React.CSSProperties
}
type ModalState = {
  modals: {
    options: ModalOptions
    component: React.ReactNode
    visible: boolean
    id: string
  }[]
}

export class ModalComponent extends React.PureComponent<ModalProps, ModalState> {
  private t: ReturnType<typeof useTranslation>['t']

  constructor(props: ModalProps) {
    super(props)
    this.t = useTranslation().t
    this.state = DEFAULT_STATES
  }

  componentDidMount() {
    instanceModalComponent = this
  }

  componentWillUnmount() {
    instanceModalComponent = null
  }

  clearModal = (hideId?: string) => {
    if (!hideId) {
      return
    }

    this.setState((state) => {
      const modals = state.modals.filter((modal) => {
        if (modal.id === hideId && typeof modal.options?.onAfterClose === 'function') {
          modal.options?.onAfterClose()
        }
        return modal.id !== hideId
      })
      return {
        ...state,
        modals,
      }
    })
  }

  hide = (id?: string) => {
    const { modals } = this.state
    let newModals = modals
    if (id) {
      newModals = modals.map((modal) => {
        if (modal.id === id) {
          return { ...modal, visible: false }
        }
        return modal
      })
    } else if (modals?.[modals.length - 1]) {
      modals[modals.length - 1].visible = false
      newModals = modals
    }
    this.setState({
      modals: [...newModals],
    })
  }

  show = (component: React.ReactNode, options: ModalOptions) => {
    const { modals } = this.state
    const modalId = `${Date.now()}`
    this.setState({
      modals: [...modals, { component, options, visible: true, id: modalId }],
    })
    return modalId
  }

  render() {
    const { style, ...restProps } = this.props
    const { modals } = this.state

    return ( // Use t function to translate modal content if needed
      <>
        {modals.map((modal) => {
          const modalPosition = modal.options.position || ModalPositionEnum.DEFAULT
          return (
            <ReactModal
              key={modal.id}
              overlayClassName={styles.Overlay}
              className={clsx(styles.Modal, {
                [styles.ModalTop]: modalPosition === ModalPositionEnum.TOP,
                [styles.ModalCenter]: modalPosition === ModalPositionEnum.CENTER,
                [styles.ModalDefault]:
                  modalPosition === ModalPositionEnum.DEFAULT || !modal.options.position,
              })}
              isOpen={modal?.visible}
              onRequestClose={() => this.hide(modal.id)}
              onAfterClose={() => this.clearModal(modal.id)}
              style={{
                overlay: { // Center the modal content using flexbox
                  ...modal.options.style?.overlay,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                content: {
                  ...modal.options.style?.content,
                }, // Translate modal content if it's a string
              }}
              {...modal.options}
            >
              {typeof modal.component === 'string' ? this.t(modal.component) : modal.component}
            </ReactModal>
          )
        })}
      </>
    )
  }
}

export const Modal = {
  show(component: React.ReactNode, modalOptions: ModalOptions = {}) {
    return instanceModalComponent?.show(component, modalOptions)
  },
  hide(id?: string) {
    instanceModalComponent?.hide(id)
  },
  propTypes: {
    style: PropTypes.object,
    // ... define other prop types if needed
  },
  defaultProps: {
    style: {},
  },
}