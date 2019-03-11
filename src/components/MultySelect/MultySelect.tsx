import React, { ReactElement } from 'react';

import Select from 'react-select';

import './MultySelect.scss';
import { isArray } from 'util';

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: string[];
  value?: string | string[];
  isDisabled?: boolean;
  onChange: (value: any) => void;
}

function MultySelect(props: Props): ReactElement {

  const handleChange = (selectedOption: Option[] | any) => {
    const value = selectedOption.map((v: Option) => v.value);
    const options = props.options.map(v => ({ selected: value.includes(v), value: v }));
    props.onChange({ target: { value, name: 'selectMultiple', options } });
  }

  const mappedOptions = props.options.map(v => ({ value: v, label: v }));
  const mappedValues = isArray(props.value) ? props.value.map(v => ({ value: v, label: v })) : [];

  return (
    <Select className="Select" classNamePrefix="Select" isMulti
    value={mappedValues} options={mappedOptions} onChange={handleChange} isDisabled={props.isDisabled} />
  )
}

export default MultySelect;