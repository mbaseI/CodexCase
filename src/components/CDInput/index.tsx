import { SxProps, TextField, Theme } from '@mui/material';
import { ChangeEvent } from 'react';
import styles from './style.module.scss';

type CDInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'medium';
  color?: 'warning' | 'primary' | 'secondary' | 'error' | 'info' | 'success';
  fullWidth?: boolean;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
  onInput?: React.FormEventHandler<HTMLDivElement>;
  sx?: SxProps<Theme>;
  errors?: string;
  helperText?: React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  required?: boolean;
};

const CDInput: React.FC<CDInputProps> = ({ ...props }) => {
  return (
    <TextField
      className={styles.textField}
      onChange={props.onChange}
      fullWidth={props.fullWidth}
      color={props.color}
      variant={props.variant}
      size={props.size}
      value={props.value}
      label={props.label}
      inputProps={{
        autoComplete: 'off',
        maxLength: props.maxLength || 50,
      }}
      onFocus={props.onFocus}
      name={props.name}
      type={props.type}
      sx={props.sx}
      onInput={props.onInput}
      helperText={props.errors}
      onBlur={props.onBlur}
      required={props.required}
    />
  );
};

export default CDInput;
