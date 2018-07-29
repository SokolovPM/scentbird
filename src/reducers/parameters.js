import constants from '../constants';
import createReducer from '../utils/createReducer';

const {
  CHANGE_SECURITY_CODE,
  CHANGE_EMAIL,
  CHECK_EMAIL,
  CHANGE_PASSWORD,
  CHECK_PASSWORD
} = constants;

const initialValues = {
  securityCode: '',
  securityCodeError: false,
  email: '',
  emailError: '',
  password: '',
  passwordError: ''
};

export default createReducer(initialValues, {
  [CHANGE_SECURITY_CODE]: (state, { securityCode }) => {
    return {
      securityCode,
      securityCodeError: securityCode === '111'
    };
  },

  [CHANGE_EMAIL]: (state, { email }) => ({ email }),
  [CHECK_EMAIL]: (state, {}) => {
    const email = state.email;
    if (!email) {
      return { emailError: 'This field is required' };
    }
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return { emailError: regex.test(email.toLowerCase()) ? '' : 'Wrong email format' };
  },

  [CHANGE_PASSWORD]: (state, { password }) => ({ password }),
  [CHECK_PASSWORD]: (state, {}) => {
    const password = state.password;
    if (!password) {
      return { passwordError: 'This field is required' };
    } else if (password.length < 10) {
      return { passwordError: 'Password should not be less than 10 symbols' };
    }
    return { passwordError: '' };
  },
});
