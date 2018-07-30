import constants from '../constants';
import createReducer from '../utils/createReducer';

import { months, years, states } from './data-utils';

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

const initialValues = {
  securityCode: '',
  securityCodeError: false,
  wrongSecurityCode: false,
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  firstName: '',
  firstNameError: '',
  streetAddress: '',
  streetAddressError: '',
  apartment: '',
  postcode: '',
  postcodeError: '',
  country: '',
  countryError: '',
  phone: '',
  cardType: 'vi',
  cardNumber: '',
  cardNumberError: '',
  selectedState: states[0],
  states,
  selectedCity: states[0].cities[0],
  months,
  selectedMonth: '',
  selectedMonthError: '',
  years,
  selectedYear: '',
  selectedYearError: ''
};

const checkEmail = (email) => {
  if (!email) {
    return 'This field is required';
  }
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase()) ? '' : 'Wrong email format'  ;
}

const checkPassword = (password) => {
  if (!password) {
    return 'This field is required';
  } else if (password.length < 10) {
    return 'Password should not be less than 10 symbols';
  }
  return '';
}

const checkPostcode = (postcode) => {
  if (!postcode) {
    return 'This field is required';
  } else if (postcode.length !== 6) {
    return 'The postal code must contain six digits';
  } else {
    return '';
  }
}

const cardRegexps = {
  mc: /^(?:5[1-5][0-9]{14})$/,
	vi: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
	ax: /^(?:3[47][0-9]{13})$/
};

const checkCardNumber = (cardNumber, cardType) => {
  if (!cardNumber) {
    return'This field is required';
  }
  return cardRegexps[cardType].test(cardNumber.trim()) ? '' : 'Wrong card number format'
}

const checkSecurityCode = (securityCode) => {
  if (!securityCode) {
    return 'This field is required';
  } else if (securityCode.length !== 3) {
    return 'Wrong security code format';
  }
  return'';
}

export default createReducer(initialValues, {
  [CHANGE_SECURITY_CODE]: (state, { securityCode }) => ({ securityCode }),
  [CHECK_SECURITY_CODE]: (state, {}) => {
    return { securityCodeError: checkSecurityCode(state.securityCode), wrongSecurityCode: state.securityCode === '111' }
  },

  [CHANGE_EMAIL]: (state, { email }) => ({ email }),
  [CHECK_EMAIL]: (state, {}) => {
    return { emailError: checkEmail(state.email)}
  },

  [CHANGE_PASSWORD]: (state, { password }) => ({ password }),
  [CHECK_PASSWORD]: (state, {}) => {
    return { passwordError: checkPassword(state.password)}
  },

  [CHANGE_FIRST_NAME]: (state, { firstName }) => ({ firstName }),
  [CHECK_FIRST_NAME]: (state, {}) => {
    return { firstNameError: state.firstName ? '' : 'This field is required'}
  },

  [CHANGE_LAST_NAME]: (state, { lastName }) => ({ lastName }),
  [CHECK_LAST_NAME]: (state, {}) => {
    return { lastNameError: state.lastName ? '' : 'This field is required'}
  },

  [CHANGE_STREET_ADDRESS]: (state, { streetAddress }) => ({ streetAddress }),
  [CHECK_STREET_ADDRESS]: (state, {}) => {
    return { streetAddressError: state.streetAddress ? '' : 'This field is required'}
  },

  [CHANGE_APARTMENT]: (state, { apartment }) => ({ apartment }),

  [CHANGE_POSTCODE]: (state, { postcode }) => ({ postcode }),
  [CHECK_POSTCODE]: (state, {}) => {
    return { postcodeError: checkPostcode(state.postcode)}
  },

  [CHANGE_COUNTRY]: (state, { country }) => ({ country }),
  [CHECK_COUNTRY]: (state, {}) => {
    return { countryError: state.country ? '' : 'This field is required'}
  },

  [CHANGE_PHONE]: (state, { phone }) => ({ phone }),

  [CHANGE_CARD_TYPE]: (state, { cardType }) => ({ cardType }),


  [CHANGE_CARD_NUMBER]: (state, { cardNumber }) => ({ cardNumber }),
  [CHECK_CARD_NUMBER]: (state, {}) => {
    return { cardNumberError: checkCardNumber(state.cardNumber, state.cardType)}
  },

  [CHANGE_STATE]: (state, { selectedState }) => {
    return {
      selectedState,
      selectedCity: selectedState.cities[0]
    }
  },
  [CHANGE_CITY]: (state, { selectedCity }) => ({ selectedCity }),

  [CHANGE_MONTH]: (state, { selectedMonth }) => ({ selectedMonth, selectedMonthError: selectedMonth ? '' : 'This field is required' }),
  [CHANGE_YEAR]: (state, { selectedYear }) => ({ selectedYear, selectedYearError: selectedYear ? '' : 'This field is required' }),

  [GO_TO_BUY]: (state) => {
    const result = {};

    result.emailError = checkEmail(state.email);
    result.passwordError = checkPassword(state.password);
    result.firstNameError = state.firstName ? '' : 'This field is required';
    result.lastNameError = state.lastName ? '' : 'This field is required';
    result.streetAddressError = state.streetAddress ? '' : 'This field is required';
    result.postcodeError = checkPostcode(state.postcode);
    result.countryError = state.country ? '' : 'This field is required';
    result.cardNumberError = checkCardNumber(state.cardNumber, state.cardType);
    result.securityCodeError = checkSecurityCode(state.securityCode);
    result.wrongSecurityCode = state.securityCode === '111';
    result.selectedMonthError = state.selectedMonth ? '' : 'This field is required';
    result.selectedYearError = state.selectedYear ? '' : 'This field is required';

    if (result.emailError || result.passwordError || result.firstNameError ||
      result.lastNameError || result.streetAddressError || result.postcodeError ||
      result.countryError || result.cardNumberError || result.securityCodeError ||
      result.wrongSecurityCode || result.selectedMonthError || result.selectedYearError
    ) {
      return result;
    } else {
      // go to buy
      console.log('go to buy')
    }
  }
});
