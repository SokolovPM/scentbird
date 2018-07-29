import constants from '../constants';
import createReducer from '../utils/createReducer';

const {
  CHANGE_SECURITY_CODE
} = constants;

const initialValues = {
  securityCode: '',
  securityCodeError: false
};

export default createReducer(initialValues, {
  [CHANGE_SECURITY_CODE]: (state, { securityCode }) => {
    return {
      securityCode,
      securityCodeError: securityCode === '111'
    };
  }
});
