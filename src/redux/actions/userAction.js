import axios from "axios";
const registerUser = (user,history) => async (dispatch) => {
  console.log("user in postAction = ", user.password);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  const userType = user.userType.toString();

  const userToken = localStorage.getItem("token");

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
        console.log(res.data);
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
