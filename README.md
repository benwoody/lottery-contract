# Ethereum Lottery Smart Contract

---

**Install dependencies:**

   ```sh
   npm install
   ```

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
