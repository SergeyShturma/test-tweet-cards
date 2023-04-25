import React, { useState } from 'react';
import Select from 'react-select';

import s from './DropDown.module.css';

const options = [
  { value: 'default', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];

const defaultValue = { value: 'default', label: 'show all' };

const DropDown = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
    onChange(selectedValue.value);
  };

  return (
    <Select
      className={s.dropdown_select}
      value={selectedValue}
      options={options}
      onChange={handleChange}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'rgb(220,20,60,0.2)',
          primary75: 'black',
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'green' : 'blue',
          background: state.isFocused
            ? 'rgb(124,252,0,0.1)'
            : 'rgb(0,252,0,0.15)',
          borderRadius: state.isFocused ? '12px' : '22px',
        }),
      }}
    />
  );
};

export default DropDown;
