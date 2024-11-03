import React from 'react';
import { useState, useId, useLayoutEffect } from 'react';
import { IBaseInputModel, IBaseInputProps } from './base-input.model';
import './base-input.css';

const BaseInput = (props: IBaseInputProps) => {
  const [value, setValue] = useState<string>(props.value || '');
  const uniqueId = `input${useId()}`;
  const entity = props.api.getEntity() as any as IBaseInputModel;

  useLayoutEffect(() => {
    let localContainer = entity[props.customPropertyContainer];
    let directumProperties = JSON.parse(localContainer);

    if (directumProperties && directumProperties[props.propertyName])
      setValue(directumProperties[props.propertyName]);
  }, []);

  function onChange(value: string): void {
    let localContainer = entity[props.customPropertyContainer];
    if (!localContainer || localContainer == '')
      localContainer = '{}';

    let directumProperties = JSON.parse(localContainer);
    directumProperties[props.propertyName] = value;

    entity.changeProperty(props.customPropertyContainer, JSON.stringify(directumProperties));

    setValue(value);
  }

  return (
    <div className={'base-input'}>
      <label htmlFor={uniqueId}>{ props.label || '' }</label>
      <div className={'input-wrapper'}>
        <div className="border"/>
        <div className="border-active"/>
        <input
          type={'text'}
          id={uniqueId}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </div>
  )
}

export default BaseInput;
