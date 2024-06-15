// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Authentication {
    mapping(address => bool) public loggedInUsers;
    mapping(address => bool) public registeredUsers;

    event UserLoggedIn(address indexed user);
    event UserRegistered(address indexed user);

    function register() public {
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function login() public {
        require(registeredUsers[msg.sender], "User is not registered");
        loggedInUsers[msg.sender] = true;
        emit UserLoggedIn(msg.sender);
    }
}
