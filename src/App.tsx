import { ethers } from "ethers";
import "./App.css";

import { useSDK } from "@metamask/sdk-react";
function App() {
  const { account, connected, provider, sdk } = useSDK();

  const approveHandler = async () => {
    if (!provider) return;
    // erc-20 approve abi
    const browserProvider = new ethers.BrowserProvider(provider);
    // change to the SEPOLIA network
    await browserProvider.send("wallet_switchEthereumChain", [
      { chainId: "0xaa36a7" },
    ]);
    // USDC CONTRACT =0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48!
    const contract = new ethers.Contract(
      "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      ["function approve(address, uint256) public returns (bool)"],
      await browserProvider.getSigner()
    );
    try {
      await contract.approve(
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        ethers.MaxUint256
      );
    } catch (error) {
      console.log(
        "this log is never reached! if the user rejects the ERC-20 approve transaction, the error is not caught!"
      );
    }
  };

  const connectHandler = async () => {
    console.log(sdk);
    await sdk?.connect();
  };
  return (
    <>
      <div>{account || "not connected"}</div>
      <div>
        {!connected && <button onClick={connectHandler}>connect</button>}
        {connected && <button onClick={approveHandler}>approve usdc</button>}
      </div>
    </>
  );
}

export default App;
