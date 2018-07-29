import constants from '../constants';

const {
  CHANGE_SECURITY_CODE,
  CHANGE_EMAIL,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
  CHECK_PASSWORD,
  GO_TO_BUY,
  CHANGE_FIRST_NAME,
  CHECK_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHECK_LAST_NAME
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

export const changeFirstName = (firstName) => ({
  type: CHANGE_FIRST_NAME,
  firstName
})
export const checkFirstName = () => ({
  type: CHECK_FIRST_NAME
})

export const changeLastName = (lastName) => ({
  type: CHANGE_LAST_NAME,
  lastName
})
export const checkLastName = () => ({
  type: CHECK_LAST_NAME
})

export const goToBuy = () => ({
  type: GO_TO_BUY
})
