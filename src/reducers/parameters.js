import constants from '../constants';
import createReducer from '../utils/createReducer';

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

const initialValues = {
  securityCode: '',
  securityCodeError: false,
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  firstName: '',
  firstNameError: ''
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

export default createReducer(initialValues, {
  [CHANGE_SECURITY_CODE]: (state, { securityCode }) => {
    return {
      securityCode,
      securityCodeError: securityCode === '111'
    };
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





  [GO_TO_BUY]: (state) => {
    const result = {};

    result.emailError = checkEmail(state.email);
    result.passwordError = checkPassword(state.password);
    result.firstNameError = state.firstName ? '' : 'This field is required';
    result.lastNameError = state.lastName ? '' : 'This field is required';

    if (result.emailError || result.passwordError || result.firstNameError ||
      result.lastNameError
    ) {
      return result;
    } else {
      // go to buy
      console.log('go to buy')
    }
  }
});
