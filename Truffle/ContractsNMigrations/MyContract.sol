pragma solidity ^0.4.17;

contract MyContract {
  event A(string someString);
  event B(uint value);
  event C(uint value, string someString, uint USD);

  function llama() public {
    emit A('algo de string');
  }
}
