import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";


export function SendTransaction() {
    const { data: hash, sendTransaction } = useSendTransaction();
    const [addressTo, setAddressTo] = useState<string>("");
    const [valueToSend, setValueToSend] = useState<string>("");
    
    async function sendTx() {
        const to = addressTo as `0x${string}`
        const value = valueToSend;
        sendTransaction({ to, value: parseEther(value) })
    }

    return <div>
        <input onChange={(e) => setAddressTo(e.target.value)} placeholder="0xA0CF...251e" required />
        <input onChange={(e) => setValueToSend(e.target.value)} placeholder="0.05" required />
        <button onClick={sendTx}>Send</button>
        {hash && <div>Transaction Hash: {hash}</div>}
    </div>
}