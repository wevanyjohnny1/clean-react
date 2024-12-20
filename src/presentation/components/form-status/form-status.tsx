/* eslint-disable react/prop-types */
import React from 'react'
import Styles from './form-status-style.scss'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
