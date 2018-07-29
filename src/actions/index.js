import constants from '../constants';

const {
  CHANGE_SECURITY_CODE,
  CHANGE_EMAIL,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
  CHECK_PASSWORD,
  GO_TO_BUY
} = constants;

export const changeSecurityCode = (securityCode) => ({
  type: CHANGE_SECURITY_CODE,
  securityCode
})

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email
})

export const checkEmail = () => ({
  type: CHECK_EMAIL
})

export const changePassword = (password) => ({
  type: CHANGE_PASSWORD,
  password
})

export const checkPassword = () => ({
  type: CHECK_PASSWORD
})

export const goToBuy = () => ({
  type: GO_TO_BUY
})
