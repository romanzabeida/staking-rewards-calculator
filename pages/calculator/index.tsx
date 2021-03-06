import type { NextPage } from 'next';
import Head from 'next/head';
import { Heading, Columns } from 'react-bulma-components';

import ViewModelProvider from './view-model';

import Asset from './components/Asset';
import RewardOption from './components/RewardOption';
import AssetAmount from './components/AssetAmount';
import TokenSupply from './components/TokenSupply';
import TransactionFee from './components/TransactionFee';
import StakingTime from './components/StakingTime';
import ProviderFee from './components/ProviderFee';
import CompoundRewards from './components/CompoundRewards';
import AssetPrice from './components/AssetPrice';
import ReturnValue from './components/ReturnValue';

import styles from './calculator.module.css';

const Home: NextPage = () => {
  return (
    <ViewModelProvider service={{}} appState={{}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Heading>Calculate Your Earnings</Heading>
        <Columns>
          <Columns.Column>
            <Columns>
              <Columns.Column>
                <Asset />
              </Columns.Column>
              <Columns.Column>
                <RewardOption />
              </Columns.Column>
            </Columns>
            <AssetAmount asset="BTC" value={1000} />

            <Heading>Advanced Options</Heading>
            <Columns>
              <Columns.Column size={6}>
                <StakingTime />
              </Columns.Column>
              <Columns.Column size={6}>
                <ProviderFee />
              </Columns.Column>
              <Columns.Column size={6}>
                <CompoundRewards />
              </Columns.Column>
              <Columns.Column size={6}>
                <AssetPrice asset="BTC" currency="USD" value={10} />
              </Columns.Column>
            </Columns>
            <TokenSupply value={10} />
            <TransactionFee value={10} asset="BTC" />

            <Heading>Returns</Heading>
            <Columns>
              <Columns.Column size={6}>
                <ReturnValue
                  label="Day"
                  percentage={0.01}
                  asset="BTC"
                  assetValue={0.14853}
                  fiatValue="$0.19"
                />
              </Columns.Column>
              <Columns.Column size={6}>
                <ReturnValue
                  label="Week"
                  percentage={0.1}
                  asset="BTC"
                  assetValue={1.03972}
                  fiatValue="$1.32"
                />
              </Columns.Column>
              <Columns.Column size={6}>
                <ReturnValue
                  label="Month"
                  percentage={0.45}
                  asset="BTC"
                  assetValue={4.45594}
                  fiatValue="$5.66"
                />
              </Columns.Column>
              <Columns.Column size={6}>
                <ReturnValue
                  label="Year"
                  percentage={5.42}
                  asset="BTC"
                  assetValue={54.21395}
                  fiatValue="$68.85"
                />
              </Columns.Column>
            </Columns>
          </Columns.Column>
          {/* <Columns.Column className={styles.results} narrow>
            Second Column
            <div
              style={{
                width: '20rem',
                height: '1rem',
                backgroundColor: 'green',
              }}
            />
          </Columns.Column> */}
        </Columns>
      </main>
    </ViewModelProvider>
  );
};

export default Home;
