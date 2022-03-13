import axios from "axios";
import environment from "../environment";

const users_url = environment.users_url;

export default class UserService {
  public static findAll = async () => {
    try {
      const response = await axios.get(users_url);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}
