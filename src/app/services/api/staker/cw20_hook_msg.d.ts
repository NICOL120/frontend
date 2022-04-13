/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type StakerCw20HookMsg = {
  zap_to_unbond: {
    belief_price?: Decimal | null;
    belief_price_b?: Decimal | null;
    max_spread: Decimal;
    sell_asset: AssetInfo;
    sell_asset_b?: AssetInfo | null;
    swap_hints?: SwapOperation[] | null;
    target_asset: AssetInfo;
    [k: string]: unknown;
  };
};
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;
/**
 * AssetInfo contract_addr is usually passed from the cw20 hook so we can trust the contract_addr is properly validated.
 */
export type AssetInfo =
  | {
  token: {
    contract_addr: string;
    [k: string]: unknown;
  };
}
  | {
  native_token: {
    denom: string;
    [k: string]: unknown;
  };
};

export interface SwapOperation {
  asset_info: AssetInfo;
  belief_price?: Decimal | null;
  pair_contract: string;

  [k: string]: unknown;
}
