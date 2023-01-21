import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Navigation } from "./components/Headers";

import './index.css';

import reportWebVitals from './reportWebVitals';
import { Mainnet, Rinkeby, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBlockNumber } from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

import { useContractFunction, useSendTransaction } from '@usedapp/core'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import { ethers } from 'ethers'
// import { nftABI} from "./abi/nftConctract.json"

import { useContractCall } from "@usedapp/core";

import { Provider,AddressInput } from '@web3-ui/components';



//more UI stuff
import {
  Button,
  Divider,
  Heading,
  Input,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react";






// const nftABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoin","outputs":[{"internalType":"contract ERC20BITCOIN","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addy","type":"address"}],"name":"bitcoinBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNum","type":"uint256"}],"name":"blockRewardCalc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createCollectible","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_steps","type":"uint256"},{"internalType":"uint256","name":"_blockNum","type":"uint256"}],"name":"mod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

const nftABI =
[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoin","outputs":[{"internalType":"contract ERC20BITCOIN","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addy","type":"address"}],"name":"bitcoinBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bitcoinSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_blockNum","type":"uint256"}],"name":"blockRewardCalc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_steps","type":"uint256"},{"internalType":"uint256","name":"_blockNum","type":"uint256"}],"name":"mod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]


// const config: Config = {
//   readOnlyChainId: Rinkeby.chainID,
//   readOnlyUrls: {
//     [Rinkeby.chainID]: 'https://ropsten.infura.io/v3/f685ca2dc3484a259837f6a815838eea',
//   },
//   multicallAddresses: {
//     [Rinkeby.chainID]: 'https://ropsten.infura.io/v3/f685ca2dc3484a259837f6a815838eea',
//   },
//
// }

export const Polygon: Chain = {
  chainId: 137,
  chainName: 'Polygon',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  getExplorerAddressLink: (address: string) => `https://polygonscan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://polygonscan.com/tx/${transactionHash}`,
}


const config: Config = {
  readOnlyChainId: Polygon.chainID,
  readOnlyUrls: {
    [Polygon.chainID]: 'https://polygon-rpc.com/',
  },
  multicallAddresses: {
    [Polygon.chainID]: 'https://polygon-rpc.com/',
  },

}


const nftBTC = '0x9a95ea51387d63e55afd9d718ba9846de16fb0a0';
const nftAddress = '0xDD2dAaE523088022B1506C7876484ce734B46334';


ReactDOM.render(

  <React.StrictMode>

    <DAppProvider config={config}>
      <App />
    </DAppProvider>

  </React.StrictMode>,
  document.getElementById('root')
)

// const nftInterface = new utils.Interface(nftABI);

export function TokenBalance() {
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(nftBTC, account)

  return (
    <div>


      {tokenBalance && <p>You have: nftBTC tokens Balance: {formatUnits(tokenBalance, 18)}</p>}
    </div>
  )
}

export function useMint(_contract) {
  const { state, send } = useContractFunction(_contract, "mintBlock", {});
  return { state, send };
}



export function App() {

  const { activateBrowserWallet, account, library, deactivate, active } = useEthers()
  const etherBalance = useEtherBalance(account)
  const tokenBalance = useTokenBalance(nftBTC, account)
  const blockNumber = useBlockNumber()

  const nftInterface = new utils.Interface(nftABI);

  ethers.utils.getAddress(nftAddress);

  const contract = new Contract(nftAddress, nftInterface);

  const { state, send: mintCoin } = useMint(contract);





   const handleClick2 = () => {
      mintCoin();
  }


  const symbol = useContractCall({
    abi: nftInterface,
    address: nftAddress,
    method: "symbol",
    args: [],
  }) ?? [];

  const nftBTCaddress = useContractCall({
    abi: nftInterface,
    address: nftAddress,
    method: "bitcoin",
    args: [],
  }) ?? [];

  //contract



  // const { state, send } = useContractFunction(contract, 'createCollectible')
  // const mintBTC = (wethAmount: string) => {
  //   send(utils.parseEther(wethAmount))
  //   }

    const { sendTransaction, stateTX } = useSendTransaction()
  //   const handleClick = () => {
  //   sendTransaction({ to: address, value: utils.parseEther("0.1") })
  // }








  return (


    <div>

      <Container>
      <Row>
      <div>
      <Navigation />
      </div>
      </Row>
      <Header />
      <div>
      {contract && <p> NFT contract address (MATIC): {contract.address}</p>}



      {!account &&
        <p>Please connect your wallet to continue</p>
      }


      {!account  &&
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      }
      {account &&
        <button onClick={deactivate}>Disconnect</button>
      }



        {false && <p> block number:  {blockNumber}     </p>   }

      </div>

      {false && <p>Account: {account}</p>}
      {etherBalance && false && <p>ETH Balance: {formatEther(etherBalance)}</p>}

      {false && <p>contract symbol {symbol}</p>}











      <div>{/*
      Hello {account}
      */}

      </div>
      <TokenBalance />
      {account && <p> nftBTC token contract address: {nftBTCaddress}</p>}


      {account &&
        <button onClick={handleClick2}>Mint</button>
      }


      </Container>
    </div>


  )
}
