import { useAccount, useBalance, useDisconnect } from "wagmi";

export function Account() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

    const balance = useBalance({
        address
    })
    console.log("balance:", balance);

    return (
        <div>
            {address && <div>
                Your Address - {address}<br />
                Your Balance - {balance.data?.formatted} {balance.data?.symbol}
                </div>}

                <button onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}