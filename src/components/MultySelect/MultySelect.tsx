import React, { ReactElement } from 'react';

import Select from 'react-select';

import './MultySelect.scss';

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[] | undefined;
  value?: Option;
  isDisabled?: boolean;
  onChange: (value: Option[]) => void;
}

function MultySelect(props: Props): ReactElement {

  const handleChange = (selectedOption: Option[] | any) => {
    props.onChange(selectedOption);
  }

  return (
    <Select className="Select" classNamePrefix="Select" isMulti 
            options={props.options} onChange={handleChange} value={props.value} isDisabled={props.isDisabled} />
  )
}

export default MultySelect;