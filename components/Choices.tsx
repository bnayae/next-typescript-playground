import { assert } from "console";
import React, { Dispatch, SetStateAction, useState } from "react";
import styles from './Choices.module.css';

interface ISingleProps {
  kind: "single";
  value?: string;
  /** compatible with useState (set) */
  setValue: Dispatch<SetStateAction<string | undefined>>;
}

interface IMultiProps {
  kind: "multi";
  values: string[];
  /** compatible with useState (set) */
  setValues: Dispatch<SetStateAction<string[]>>;
}

interface ICommonProps {
  readonly?: boolean;
  options: string[];
}

type IDiscriminateProps = ISingleProps | IMultiProps;

type IProps = IDiscriminateProps & ICommonProps;

export const Choices = ({ readonly, options, ...props }: IProps) => {
  const type = props.kind == 'single' ? "radio" : "checkbox";

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    const value = e.target.value;
    if (props.kind == 'single') {
      const { setValue } = props;
      setValue(checked ? value : undefined);
    } else {
      const { setValues } = props;
      if (checked) setValues((p) => [...p, value]);
      else setValues((p) => p.filter((m) => m !== value));
    }
  };

  return (
    <div className={styles.layout}>
      {options.map((m) => {
          const checked = props.kind == 'single' ? props.value === m : props.values.includes(m);
          return (
        <input key={m} checked={checked} type={type} value={m} onChange={handleChange} readOnly={readonly}/>
      )})}
    </div>
  );
};
