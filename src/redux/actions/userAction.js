import axios from "axios";
const registerUser = (user) => async (dispatch) => {
  console.log("user in postAction = ", user.password);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  const userType = user.userType.toString();

  console.log("firstname", firstName);
  console.log("Lastname", lastName);
  console.log("email", email);
  console.log("Password", password);
  console.log("confirm", password_confirmation);
  console.log("userType", userType);

  const userToken = localStorage.getItem("token");
  console.log("in action token : " + userToken);

  dispatch(requestPosts());
  try {
    await axios
      .post(
        "http://34.210.129.167/api/users",
        {
          firstName,
          lastName,
          email,
          password,
          password_confirmation,
          userType,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const signupUser = res.data;
        console.log(res);
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: signupUser });
      });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

const exportedObject = {
  registerUser,
  requestPosts,
};
export default exportedObject;
