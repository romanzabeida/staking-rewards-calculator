import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bulma-components';

import styles from './transaction-fee.module.css';

const { Field, Label, Control } = Form;

const TransactionFee: FC<Props> = ({ value, asset }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>
        How much transaction fees are being spent per day within the network?:
        <span className={styles['transaction-fee-value']}>
          &nbsp;{value}
          {asset}
        </span>
      </Label>
      <Control>
        <input
          type="range"
          className={styles['transaction-fee']}
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

export default TransactionFee;

type Props = {
  value?: number;
  asset: string;
};
