import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bulma-components';

import { Asset } from '../../view-model/types';
import { useViewModel } from '../../view-model';

import styles from './asset.module.css';

const { Field, Label, Control, Select } = Form;

const toOptionElement = ({ id, label }: Asset): JSX.Element => (
  <option value={id} key={id}>
    {label}
  </option>
);

const AssetSelector: FC<Props> = (): JSX.Element => {
  const { assets, assetSelection, selectAsset } = useViewModel();

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selection = Number(e.target.value);
    selectAsset(selection);
  };

  const value = assets[assetSelection]?.id;
  const options = assets.map(toOptionElement);

  return (
    <Field>
      <Label>Choose your asset</Label>
      <Control>
        <Select
          onChange={onChange}
          value={value}
          size="large"
          className={styles.asset}
        >
          {options}
        </Select>
      </Control>
    </Field>
  );
};

export default AssetSelector;

type Props = {};
