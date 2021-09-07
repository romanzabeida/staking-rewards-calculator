import { ChangeEvent, FC } from 'react';
import { Form } from 'react-bulma-components';

import { RewardOption } from '../../view-model/types';
import { useViewModel } from '../../view-model';

import styles from './reward-option.module.css';

const { Field, Label, Control, Select } = Form;

const toOptionElement = ({ id, label }: RewardOption): JSX.Element => (
  <option value={id} key={id}>
    {label}
  </option>
);

const RewardOptionSelector: FC<Props> = (): JSX.Element => {
  const { rewardOptions, rewardOptionSelection, selectRewardOption } =
    useViewModel();

  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selection = Number(e.target.value);
    selectRewardOption(selection);
  };

  const value = rewardOptions[rewardOptionSelection]?.id;
  const optionElements = rewardOptions.map(toOptionElement);

  return (
    <Field>
      <Label>Choose your reward option</Label>
      <Control>
        <Select
          onChange={onChange}
          value={value}
          size="large"
          className={styles['reward-option']}
        >
          {optionElements}
        </Select>
      </Control>
    </Field>
  );
};

export default RewardOptionSelector;

type Props = {};
