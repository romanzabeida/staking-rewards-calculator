import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bulma-components';

import styles from './asset-amount.module.css';

const { Field, Label, Control, Input } = Form;

const AssetAmount: FC<Props> = ({ asset, value }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>Enter your {asset} amount</Label>
      <Control>
        <Input
          type="text"
          onChange={onChange}
          value={value}
          size="large"
          className={styles['asset-amount']}
        />
      </Control>
    </Field>
  );
};

export default AssetAmount;

type Props = {
  asset: string;
  value?: number;
};
