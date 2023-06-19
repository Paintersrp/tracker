import React, { useState, ChangeEvent } from 'react';
import './Input.css';

import {  HelpText } from '../../Elements';
import { Base, BaseProps } from '@/theme/base';

interface InputProps extends BaseProps {
  id?: string;
  name?: string;
  type?: string;
  helpText?: string;
  helpPosition?: 'top' | 'bottom';
  value?: string | number | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rows?: number;
  multiline?: boolean;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  helpText = '',
  helpPosition = 'top',
  value,
  onChange,
  rows = 4,
  multiline = false,
  required = false,
  error = false,
  placeholder,
  style,
  inputStyle,
  className = '',
  size = 'large',
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <Base className="input-root" style={style} {...rest}>
      {helpText && (
        <HelpText mt={0} mb={0} style={{ order: helpPosition === 'top' ? 1 : 2 }}>
          {helpText}
        </HelpText>
      )}
      <InputComponent
        className={`${className} base-input ${InputComponent} input-${size}`}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        type={type}
        data-error={error ? 'true' : undefined}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          ...inputStyle,
          minHeight: multiline ? 30 * rows : undefined,
          order: helpPosition === 'top' ? 2 : 1,
        }}
      />
    </Base>
  );
};

export default Input;
