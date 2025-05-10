# Ethereum Lottery Smart Contract

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

### **Deploy on Main Net:**

```sh
npx hardhat run scripts/deploy.js --network mainnet
```
---

## Run Tests

To ensure the contract works as expected, run:

```sh
npx hardhat test
```
