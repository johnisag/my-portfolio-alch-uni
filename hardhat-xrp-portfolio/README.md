# My Portfolio Hardhat Project using XRP EVM Side Chain

## SETUP WITH EVM XPR SIDE CHAIN

### PREREQUISITES

- SETUP EVM SIDE CHAIN ACCOUNT
- GET SOME XRP (FAUCET)
- SEND TO EVM SIDE CHAIN ACCOUNT
- Connect Metamask to XRP Ledger Sidechain

[Getting Started with XRP EVM Side Chain](https://opensource.ripple.com/docs/evm-sidechain/get-started-evm-sidechain/)
[Connect Metamask to XRP EVM Side Chain](https://opensource.ripple.com/docs/evm-sidechain/connect-metamask-to-xrpl-evm-sidechain/)

### TO DEPLOY AND TEST IN XRP EVM DEV SIDECHAIN

```shell
npx hardhat run scripts/deploy.js --network xrpl
```

```shell
npx hardhat run scripts/use_with_signer.js
npx hardhat run scripts/use_with_provider.js
```
