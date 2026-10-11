Scenario: Login system empty username or password irundhaalum login successful-nu return pannudhu.
Task for employee:
- Identify and fix the bug.
- Username and password rendu valid-aa irukkanum.
- Test valid and invalid inputs.
- Commit the fix with a meaningful message.


function login(username, password) {
  if (username !== "" || password !== "") {
    return {
      success: true,
      message: "Login successful"
    };
  }

  return {
    success: false,
    message: "Username and password are required"
  };
}

console.log(login("admin", ""));
console.log(login("", "wrong123"));
console.log(login("", ""));
