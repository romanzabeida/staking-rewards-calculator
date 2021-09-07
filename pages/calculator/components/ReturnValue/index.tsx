import { ChangeEvent, FC } from 'react';
import { Columns, Form } from 'react-bulma-components';

import styles from './return-value.module.css';

const { Field, Label, Control } = Form;

const ReturnValue: FC<Props> = ({
  label,
  asset,
  percentage,
  assetValue,
  fiatValue,
}): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <>
      <Columns>
        <Columns.Column>
          1 {label} @ {percentage}%
        </Columns.Column>
        <Columns.Column narrow>{fiatValue}</Columns.Column>
      </Columns>
      {assetValue}&nbsp;{asset}
    </>
  );
};

export default ReturnValue;

type Props = {
  label: string;
  asset: string;
  percentage: number;
  assetValue: number;
  fiatValue: string;
};
