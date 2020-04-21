import axios from "axios";
const NEW_USER = "NEW_USER";

const newUser = (acc) => (dispatch) => {
  dispatch({ type: NEW_USER });
  axios
    .post("http://localhost:5000/api/auth/register")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default newUser;
