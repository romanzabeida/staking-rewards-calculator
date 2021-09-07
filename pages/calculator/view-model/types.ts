export interface Service {}

export type Asset = {
  id: string;
  label: string;
};
export type RewardOption = Asset;
type Return = {
  percentage: number;
  assetAmount: number;
  fiatAmount: number;
};
export type Context = {
  // asset
  assets: Asset[];
  assetSelection: number;
  selectAsset: (as: number) => void;
  // rewardOptions
  rewardOptions: RewardOption[];
  rewardOptionSelection: number;
  selectRewardOption: (ros: number) => void;

  amount: number;
  stakingTime: number;
  providerFee: number;
  assetPrice: number;
  compoundRewards: boolean;
  tokenSupply: number;
  transactionFee: number;
  returns: {
    day: Return;
    week: Return;
    month: Return;
    year: Return;
  };
};

export type Props = {
  service: Service;
  appState: {
    // appState prop used to retrieve values from global state
  };
};
