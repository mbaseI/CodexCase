import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import styles from './style.module.scss';

type CDInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'medium';
  color?: 'warning' | 'primary' | 'secondary' | 'error' | 'info' | 'success';
  fullWidth?: boolean;
};

const CDInput: React.FC<CDInputProps> = ({
  onChange,
  value,
  label,
  variant,
  size,
  color,
  fullWidth,
}) => {
  return (
    <TextField
      className={styles.textField}
      onChange={onChange}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      size={size}
      value={value}
      label={label}
      inputProps={{
        autoComplete: 'off',
      }}
    />
  );
};

export default CDInput;
