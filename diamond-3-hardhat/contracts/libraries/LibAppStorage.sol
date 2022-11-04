// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Counters } from "@openzeppelin/contracts/utils/Counters.sol";

struct AppStorage {
  mapping(uint256 => address) owners;
  mapping(address => uint256) balances;
  mapping(uint256 => address) tokenApprovals;
  mapping(address => mapping(address => bool)) operatorApprovals;
  Counters.Counter tokenIds;
}

library LibAppStorage {
  function diamondStorage() internal pure returns (AppStorage storage ds) {
    assembly {
      ds.slot := 0
    }
  }
}
