/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExecuteMsg =
  | {
      receive: Cw20ReceiveMsg;
    }
  | {
      register_contracts: {
        /**
         * Collector contract to send all the reserve
         */
        collector_contract: string;
        /**
         * The contract has the logics for ANC distribution speed
         */
        distribution_model: string;
        /**
         * Faucet contract to drip ANC token to users
         */
        distributor_contract: string;
        /**
         * The contract has the logics for Anchor borrow interest rate
         */
        interest_model: string;
        overseer_contract: string;
        [k: string]: unknown;
      };
    }
  | {
      update_config: {
        distribution_model?: string | null;
        interest_model?: string | null;
        max_borrow_factor?: Decimal256 | null;
        owner_addr?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      repay_stable_from_liquidation: {
        borrower: string;
        prev_balance: Uint256;
        [k: string]: unknown;
      };
    }
  | {
      execute_epoch_operations: {
        deposit_rate: Decimal256;
        distributed_interest: Uint256;
        target_deposit_rate: Decimal256;
        threshold_deposit_rate: Decimal256;
        [k: string]: unknown;
      };
    }
  | {
      deposit_stable: {
        [k: string]: unknown;
      };
    }
  | {
      borrow_stable: {
        borrow_amount: Uint256;
        to?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      repay_stable: {
        [k: string]: unknown;
      };
    }
  | {
      claim_rewards: {
        to?: string | null;
        [k: string]: unknown;
      };
    };
/**
 * A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.
 *
 * # Examples
 *
 * Use `from` to create instances of this and `u128` to get the value out:
 *
 * ``` # use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);
 *
 * let b = Uint128::from(42u64); assert_eq!(b.u128(), 42);
 *
 * let c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```
 */
export type Uint128 = string;
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>
 */
export type Binary = string;
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal256(1_000_000_000_000_000_000) == 1.0 The greatest possible value that can be represented is 115792089237316195423570985008687907853269984665640564039457.584007913129639935 (which is (2^128 - 1) / 10^18)
 */
export type Decimal256 = string;
export type Uint256 = string;

/**
 * Cw20ReceiveMsg should be de/serialized under `Receive()` variant in a ExecuteMsg
 */
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
