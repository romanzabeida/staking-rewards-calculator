import { ChangeEvent, FC } from 'react';
import { Columns, Form } from 'react-bulma-components';

const { Field, Label, Control } = Form;

const CompoundRewards: FC<Props> = ({ checked = false }): JSX.Element => {
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.checked);
  };

  return (
    <Field>
      <Label>Sell/Reinvest?</Label>
      <Columns>
        <Columns.Column>Compound Rewards</Columns.Column>
        <Columns.Column narrow>
          <Control>
            <input type="checkbox" checked={checked} onChange={onChange} />
          </Control>
        </Columns.Column>
      </Columns>
    </Field>
  );
};

export default CompoundRewards;

type Props = {
  checked?: boolean;
};
