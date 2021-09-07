import { ChangeEvent, FC } from 'react';
import { Columns, Form } from 'react-bulma-components';

import styles from './asset-price.module.css';

const { Field, Label, Control } = Form;

const AssetPrice: FC<Props> = ({
  asset,
  currency,
  value = 70,
}): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <Field>
      <Label>{asset} Price</Label>
      <Columns>
        <Columns.Column>{currency}</Columns.Column>
        <Columns.Column>
          <Control>
            <input
              type="number"
              className={styles['asset-price']}
              min={0}
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

export default AssetPrice;

type Props = {
  asset: string;
  currency: string;
  value?: number;
};
