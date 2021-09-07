import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bulma-components';

import styles from './token-supply.module.css';

const { Field, Label, Control } = Form;

const TokenSupply: FC<Props> = ({ value }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>
        What % of eligible token supply is being staked?:
        <span className={styles['token-supply-value']}>&nbsp;{value}%</span>
      </Label>
      <Control>
        <input
          type="range"
          className={styles['token-supply']}
          min={0.1}
          max={100}
          step={0.1}
          value={value}
          onChange={onChange}
        />
      </Control>
    </Field>
  );
};

export default TokenSupply;

type Props = {
  value?: number;
};
