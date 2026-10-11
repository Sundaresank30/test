Scenario: API request fail aanaalum application success response return pannudhu.
Task for employee:
- Identify the error-handling bug.
- Return an appropriate failure response.
- Test success and failure cases.
- Commit the fix.

  
async function getUser(fetchUser) {
  try {
    const user = await fetchUser();

    return {
      success: true,
      data: user
    };
  } catch (error) {
    return {
      success: true,
      data: null
    };
  }
}

module.exports = { getUser };
