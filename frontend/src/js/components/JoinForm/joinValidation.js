import { createValidator, required, maxLength, email } from '../../utils/validation';

const joinValidation = createValidator({
  fullName: [required],
  email: [required, email],
  company: [required],
  phone: [required, maxLength(30)]
});
export default joinValidation;
