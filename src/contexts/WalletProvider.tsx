import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const WalletContext = createContext<any>({});

function WalletProvider({ children }: { children?: ReactNode }) {
  const [wallet, setWallet] = useState<string | null>();
  const connectWallet = useCallback(async () => {
    const { ethereum } = window as any;
    if (ethereum) {
      const accounts: string[] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setWallet(accounts[0]);
    } else {
      alert("install metamask");
    }
  }, [setWallet]);
  const values = useMemo(
    () => ({ wallet, connectWallet }),
    [wallet, connectWallet]
  );

  return (
    <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
  );
}

export const useWalletProvider = () => useContext(WalletContext);
export default WalletProvider;
