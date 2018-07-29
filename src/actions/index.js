import constants from '../constants';

const {
  CHANGE_SECURITY_CODE
} = constants;

export const changeSecurityCode = (securityCode) => ({
  type: CHANGE_SECURITY_CODE,
  securityCode
})
