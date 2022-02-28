/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ExecuteMsg =
  | {
      increase_position: {
        belief_price: Decimal;
        borrow_a_amount: Uint128;
        borrow_b_amount: Uint128;
        deposit_a_amount: Uint128;
        deposit_b_amount: Uint128;
        deposit_lp_amount: Uint128;
        max_spread: Decimal;
        position_id?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      reduce_position: {
        min_withdraw_a_amount: Uint128;
        min_withdraw_b_amount: Uint128;
        position_id: number;
        repay_a_amount?: Uint128 | null;
        repay_b_amount?: Uint128 | null;
        unbond_amount?: Uint128 | null;
        withdraw_lp_amount: Uint128;
        [k: string]: unknown;
      };
    }
  | {
      liquidate: {
        position_id: number;
        repay_a_amount: Uint128;
        repay_b_amount: Uint128;
        user: string;
        [k: string]: unknown;
      };
    }
  | {
      harvest: {
        amount?: Uint128 | null;
        position_id: number;
        [k: string]: unknown;
      };
    }
  | {
      callback: CallbackMsg;
    };
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string;
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
export type CallbackMsg =
  | {
      provide_liquidity: {
        prev_a_amount: Uint128;
        prev_b_amount: Uint128;
        slippage_tolerance: Decimal;
        [k: string]: unknown;
      };
    }
  | {
      bond: {
        position_id: number;
        prev_lp_amount: Uint128;
        user_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      update_position: {
        position_id: number;
        prev_bond_amount: Uint128;
        user_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      assert_health: {
        position_id: number;
        user_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      repay: {
        min_withdraw_a_amount: Uint128;
        min_withdraw_b_amount: Uint128;
        position_id: number;
        prev_a_amount: Uint128;
        prev_b_amount: Uint128;
        repay_a_amount?: Uint128 | null;
        repay_b_amount?: Uint128 | null;
        user_addr: Addr;
        [k: string]: unknown;
      };
    }
  | {
      withdraw: {
        min_withdraw_a_amount: Uint128;
        min_withdraw_b_amount: Uint128;
        prev_a_amount: Uint128;
        prev_b_amount: Uint128;
        user_addr: Addr;
        [k: string]: unknown;
      };
    };
/**
 * A human readable address.
 *
 * In Cosmos, this is typically bech32 encoded. But for multi-chain smart contracts no assumptions should be made other than being UTF-8 encoded and of reasonable length.
 *
 * This type represents a validated address. It can be created in the following ways 1. Use `Addr::unchecked(input)` 2. Use `let checked: Addr = deps.api.addr_validate(input)?` 3. Use `let checked: Addr = deps.api.addr_humanize(canonical_addr)?` 4. Deserialize from JSON. This must only be done from JSON that was validated before such as a contract's state. `Addr` must not be used in messages sent by the user because this would result in unvalidated instances.
 *
 * This type is immutable. If you really need to mutate it (Really? Are you sure?), create a mutable copy using `let mut mutable = Addr::to_string()` and operate on that `String` instance.
 */
export type Addr = string;
