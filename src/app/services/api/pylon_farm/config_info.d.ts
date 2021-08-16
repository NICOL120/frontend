/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;
export type HumanAddr = string;

export interface ConfigInfo {
  base_denom: string;
  community_fee: Decimal;
  controller?: HumanAddr | null;
  controller_fee: Decimal;
  deposit_fee: Decimal;
  lock_end: number;
  lock_start: number;
  owner: HumanAddr;
  platform?: HumanAddr | null;
  platform_fee: Decimal;
  pylon_gov: HumanAddr;
  pylon_staking: HumanAddr;
  pylon_token: HumanAddr;
  spectrum_gov: HumanAddr;
  spectrum_token: HumanAddr;
  terraswap_factory: HumanAddr;
  [k: string]: unknown;
}
