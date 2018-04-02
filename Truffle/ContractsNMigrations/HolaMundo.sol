pragma solidity ^0.4.19;

contract HolaMundo {

  mapping(address => string) public saludos;

  function setSaludo(string newContent) public {
    saludos[msg.sender] = newContent;
  }

  function getSaludo() public view returns (string) {
    return saludos[msg.sender];
  }
}