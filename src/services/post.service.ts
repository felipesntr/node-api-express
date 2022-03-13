import axios from "axios";
import environment from "../environment";

const posts_url = environment.posts_url;

export default class PostService {
  public static findAll = async () => {
    try {
      const response = await axios.get(posts_url);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}
