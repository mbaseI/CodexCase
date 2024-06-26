import React, { ChangeEvent } from 'react';
import CDModal from '../CDModal';
import { Button, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styles from './style.module.scss';
import Cards, { Focused } from 'react-credit-cards-2';
import CDInput from '../CDInput';
import { Formik } from 'formik';
import CheckoutSchema from '../../validations/chekout';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setBasket } from '../../master/actions';

const initialValues = {
  number: '',
  expiry: '',
  cvc: '',
  name: '',
  focus: '',
};

type CheckoutProps = {
  handleClose?: () => void;
  handleOpen?: () => void;
  open?: boolean;
};

const Checkout: React.FC<CheckoutProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const [focus, setFocus] = React.useState<Focused>('');

  const handleInputFocus = (e: any) => {
    setFocus(() => e.target.name);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = Math.max(-1, parseInt(e.target.value)).toString().slice(0, e.target.maxLength);
  };

  return (
    <CDModal onClose={props.handleClose} open={props.open!}>
      <div className={styles.checkout}>
        <div className={styles.information}>
          <span>Total Price: $7784</span>
          <IconButton onClick={props.handleClose} size={'large'} color={'inherit'}>
            <HighlightOffIcon />
          </IconButton>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={CheckoutSchema}
          onSubmit={() => {
            const notify = () => toast('Your order has been received');
            notify();
            props.handleClose && props.handleClose();
            dispatch(setBasket([]));
          }}
        >
          {({ values, errors, touched, handleBlur, isValid, handleChange, handleSubmit }) => (
            <div>
              <Cards
                number={values.number}
                expiry={values.expiry}
                cvc={values.cvc}
                name={values.name}
                focused={focus}
              />
              <div className={styles.form}>
                <CDInput
                  label={'Name'}
                  variant={'filled'}
                  name={'name'}
                  value={values.name}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  fullWidth
                  errors={errors.name}
                  sx={{ minHeight: '80px' }}
                  required
                  touched={touched.name}
                  onBlurCapture={handleBlur}
                />
                <CDInput
                  label={'Number'}
                  variant={'filled'}
                  name={'number'}
                  value={values.number}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onInput={onInputChange}
                  type='number'
                  maxLength={16}
                  fullWidth
                  errors={errors.number}
                  sx={{ minHeight: '80px' }}
                  required
                  touched={touched.number}
                  onBlurCapture={handleBlur}
                />
                <CDInput
                  label={'CVC'}
                  variant={'filled'}
                  name={'cvc'}
                  value={values.cvc}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onInput={onInputChange}
                  type='number'
                  maxLength={3}
                  fullWidth
                  errors={errors.cvc}
                  sx={{ minHeight: '80px' }}
                  required
                  touched={touched.cvc}
                  onBlurCapture={handleBlur}
                />
                <CDInput
                  label={'Expiry'}
                  variant={'filled'}
                  name={'expiry'}
                  value={values.expiry}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onInput={onInputChange}
                  type='number'
                  maxLength={4}
                  fullWidth
                  errors={errors.expiry}
                  sx={{ minHeight: '80px' }}
                  required
                  touched={touched.expiry}
                  onBlurCapture={handleBlur}
                />
              </div>
              <Button
                disabled={!isValid}
                fullWidth
                className={styles.button}
                onClick={() => handleSubmit()}
                variant='contained'
              >
                Pay
              </Button>
            </div>
          )}
        </Formik>
      </div>
    </CDModal>
  );
};

export default Checkout;
