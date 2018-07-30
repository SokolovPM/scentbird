import constants from '../constants';

const {
  CHANGE_SECURITY_CODE,
  CHECK_SECURITY_CODE,
  CHANGE_EMAIL,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
  CHECK_PASSWORD,
  GO_TO_BUY,
  CHANGE_FIRST_NAME,
  CHECK_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHECK_LAST_NAME,
  CHANGE_STREET_ADDRESS,
  CHECK_STREET_ADDRESS,
  CHANGE_APARTMENT,
  CHANGE_POSTCODE,
  CHECK_POSTCODE,
  CHANGE_COUNTRY,
  CHECK_COUNTRY,
  CHANGE_PHONE,
  CHANGE_CARD_TYPE,
  CHANGE_CARD_NUMBER,
  CHECK_CARD_NUMBER,
  CHANGE_STATE,
  CHANGE_CITY,
  CHANGE_MONTH,
  CHANGE_YEAR
} = constants;

export const changeSecurityCode = (securityCode) => ({
  type: CHANGE_SECURITY_CODE,
  securityCode
})

export const checkSecurityCode = () => ({
  type: CHECK_SECURITY_CODE
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

export const changeStreetAddress = (streetAddress) => ({
  type: CHANGE_STREET_ADDRESS,
  streetAddress
})
export const checkStreetAddress = () => ({
  type: CHECK_STREET_ADDRESS
})

export const changeApartment = (apartment) => ({
  type: CHANGE_APARTMENT,
  apartment
})

export const changePostcode = (postcode) => ({
  type: CHANGE_POSTCODE,
  postcode
})
export const checkPostcode = () => ({
  type: CHECK_POSTCODE
})

export const changeCountry = (country) => ({
  type: CHANGE_COUNTRY,
  country
})
export const checkCountry = () => ({
  type: CHECK_COUNTRY
})

export const changePhone = (phone) => ({
  type: CHANGE_PHONE,
  phone
})

export const changeCardType = (cardType) => ({
  type: CHANGE_CARD_TYPE,
  cardType
})

export const changeCardNumber = (cardNumber) => ({
  type: CHANGE_CARD_NUMBER,
  cardNumber
})
export const checkCardNumber = () => ({
  type: CHECK_CARD_NUMBER
})

export const changeState = (selectedState) => ({
  type: CHANGE_STATE,
  selectedState
})

export const changeCity = (selectedCity) => ({
  type: CHANGE_CITY,
  selectedCity
})

export const changeMonth = (selectedMonth) => ({
  type: CHANGE_MONTH,
  selectedMonth
})

export const changeYear = (selectedYear) => ({
  type: CHANGE_YEAR,
  selectedYear
})

export const goToBuy = () => ({
  type: GO_TO_BUY
})
