declare module "fhevmjs" {
    export function createInstance(options: { networkUrl: string; gatewayUrl: string }): Promise<Instance>;
  
    export interface Instance {
      generateKeypair(): { publicKey: string; privateKey: string };
      createEIP712(publicKey: string, contractAddress: string): EIP712Object;
      reencrypt(options: ReencryptOptions): Promise<ReencryptResult>;
    }
}

export interface EIP712Object {
  domain: {
      name: string;
      version: string;
      chainId: number;
      verifyingContract: string;
  };
  message: Record<string, unknown>;
  primaryType: string;
  types: Record<string, Array<{ name: string; type: string }>>;
}

export interface ReencryptOptions {
  handle: string;
  privateKey: string;
  publicKey: string;
  signature: string;
  contractAddress: string;
  userAddress: string;
}

export interface ReencryptResult {
  success: boolean;
  encryptedData: string;
  metadata: Record<string, unknown>;
}