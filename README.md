# Ethereum Lottery Smart Contract

Simple smart contract for a lottery system on Ethereum, allowing players to enter by sending a fixed entry fee. The contract randomly selects a winner using the `block.prevrandao` method, ensuring compatibility with Proof of Stake (PoS) networks.
---

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up Hardhat:**

   ```sh
   npx hardhat
   ```

   Select **"Create a basic sample project"** if prompted.


## Compile the Contract

Run:

```sh
npx hardhat compile
```

You should see **"Compilation finished successfully"**.

---

### **Deploy Locally:**

```sh
npx hardhat run scripts/deploy.js --network hardhat
```

### **Deploy on Sepolia Testnet:**

1. **Get Sepolia test ETH** from:
   - [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
2. **Deploy:**

```sh
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Run Tests

To ensure the contract works as expected, run:

```sh
npx hardhat test
```
