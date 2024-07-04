# Instructions

```bash
pnpm install 
pnpm dev
```

1. Access [http://localhost:5173/](http://localhost:5173/)
2. Click the "Connect" button.
3. After connecting, click "Approve USDC."
4. Click the "Cancel Transaction" button.
5. Notice that the log "this log is never reached! If the user rejects the ERC-20 approve transaction, the error is not caught!" will not be printed in the console.