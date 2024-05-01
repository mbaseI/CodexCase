import * as Yup from 'yup';

const CheckoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be more than 3 characters')
    .max(50)
    .matches(/^[^.,$\d]*$/, 'Name cannot contain special characters or numbers')
    .matches(/^\S+ \S+$/, 'Leave a space between your name and surname')
    .required('Cannot be empty'),
  number: Yup.string().min(16, 'Number must be 16 characters').required('Cannot be empty'),
  cvc: Yup.string().min(3, 'CVC must be 3 characters').required('Cannot be empty'),
  expiry: Yup.string().min(4, 'Expiry must be 4 characters').required('Cannot be empty'),
});

export default CheckoutSchema;
