import { ChangeEvent, FC } from 'react';
import { Columns, Form } from 'react-bulma-components';

import styles from './staking-time.module.css';

const { Field, Label, Control } = Form;

const StakingTime: FC<Props> = ({ value = 365 }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>Staking Time</Label>
      <Columns>
        <Columns.Column>Days</Columns.Column>
        <Columns.Column>
          <Control>
            <input
              type="number"
              className={styles['staking-time']}
              min={1}
              step={1}
              value={value}
              onChange={onChange}
            />
          </Control>
        </Columns.Column>
      </Columns>
    </Field>
  );
};

export default StakingTime;

type Props = {
  value?: number;
};
