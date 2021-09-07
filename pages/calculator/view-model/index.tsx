import { createContext, FC, useContext, useEffect, useState } from 'react';

// import i18n from 'i18n';
import { Context, Props } from './types';

const noopFn = () => {
  // intentionally left blank
};

const assets = [
  { id: 'usdt', label: 'USDT' },
  { id: 'btc', label: 'BTC' },
  { id: 'eth', label: 'ETH' },
  { id: 'bnb', label: 'BNB' },
  { id: 'xrp', label: 'XRP' },
];
const rewardOptions = [
  { id: 'stake', label: 'Stake' },
  { id: 'lend', label: 'Lend' },
];
const emptyReturn = {
  percentage: 0,
  assetAmount: 0,
  fiatAmount: 0,
};
const emptyContext = {
  assets,
  assetSelection: 0,
  selectAsset: noopFn,

  rewardOptions,
  rewardOptionSelection: 0,
  selectRewardOption: noopFn,

  amount: 0,
  stakingTime: 0,
  providerFee: 0,
  assetPrice: 0,
  compoundRewards: false,
  tokenSupply: 0,
  transactionFee: 0,
  returns: {
    day: emptyReturn,
    week: emptyReturn,
    month: emptyReturn,
    year: emptyReturn,
  },
};
const Ctx = createContext<Context>(emptyContext);
2;
const Provider: FC<Props> = ({ service, appState, children }): JSX.Element => {
  const [assetSelection, setAssetSelection] = useState<number>(
    emptyContext.assetSelection
  );
  const selectAsset = (selection: number) => {
    // communicate to Service if needed
    setAssetSelection(selection);
  };

  const [rewardOptionSelection, setRewardOptionSelection] = useState<number>(
    emptyContext.rewardOptionSelection
  );
  const selectRewardOption = (selection: number) => {
    // communicate to Service if needed
    setRewardOptionSelection(selection);
  };

  const context = {
    ...emptyContext,
    assetSelection,
    selectAsset,

    rewardOptionSelection,
    selectRewardOption,
  };

  return <Ctx.Provider value={context}>{children}</Ctx.Provider>;
};

export function useViewModel() {
  return useContext(Ctx);
}

export default Provider;
