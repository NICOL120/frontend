/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal256(1_000_000_000_000_000_000) == 1.0 The greatest possible value that can be represented is 115792089237316195423570985008687907853269984665640564039457.584007913129639935 (which is (2^128 - 1) / 10^18)
 */
export type Decimal256 = string;
export type Uint256 = string;

export interface BorrowerInfosResponse {
  borrower_infos: BorrowerInfoResponse[];
  [k: string]: unknown;
}
export interface BorrowerInfoResponse {
  borrower: string;
  interest_index: Decimal256;
  loan_amount: Uint256;
  pending_rewards: Decimal256;
  reward_index: Decimal256;
  [k: string]: unknown;
}
