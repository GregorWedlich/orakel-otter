# 🦦 Orakel Otter 🔮

## Your magical helper for Bitcoin exchange rates! 🪙💰

### 🌟 Features

- 📊 Fetches current Bitcoin prices in various currencies from the Mempool.space API
- 🌍 Supports USD, EUR, GBP, CAD, CHF, AUD, JPY
- 🔍 Filter by a specific currency or get all available rates

### 🚀 Quick Start

```typescript
import { orakelOtter } from "@gw/orakel-otter";

// Fetch all BTC exchange rates
const allRates = await orakelOtter();
console.log(allRates);

// Fetch BTC price for a specific currency
const eurRate = await orakelOtter("EUR");
console.log(eurRate);

### 📚 API
orakelOtter(currency?: string): Promise<[string, number][]>

currency (optional): The currency code (e.g., "USD", "EUR", "GBP")
Return value: An array of tuples with currency code and current BTC price

🛠️ Error Handling

If the specified currency is not found, an error will be thrown.

🙏 Contributing

Feel free to open issues or create pull requests. The Orakel Otter welcomes your help! 🦦❤️

📜 License

MIT

Created with 💖 and 🦦 magic
```
