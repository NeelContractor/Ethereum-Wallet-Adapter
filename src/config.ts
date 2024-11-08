import { http, createConfig } from "wagmi";
import { base, mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe } from 'wagmi/connectors';



export const config = createConfig({
    chains: [sepolia, mainnet], //mainnet, base
    connectors: [
        injected(),
        metaMask(),
        safe(),
    ],
    transports: {
        [mainnet.id]: http(),
        // [base.id]: http(),
        [sepolia.id]: http()
    }
})