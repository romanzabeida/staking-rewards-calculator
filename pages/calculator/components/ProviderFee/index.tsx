import { ChangeEvent, FC } from 'react';
import { Columns, Form } from 'react-bulma-components';

import styles from './provider-fee.module.css';

const { Field, Label, Control } = Form;

const ProviderFee: FC<Props> = ({ value = 70 }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>Fees</Label>
      <Columns>
        <Columns.Column>Provider fee (%)</Columns.Column>
        <Columns.Column>
          <Control>
            <input
              type="number"
              className={styles['provider-fee']}
              min={0}
              max={100}
              step={0.01}
              value={value}
              onChange={onChange}
            />
          </Control>
        </Columns.Column>
      </Columns>
    </Field>
  );
};

export default ProviderFee;

type Props = {
  value?: number;
};
