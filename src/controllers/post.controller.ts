import { Request, Response } from "express";
import { Post } from "../domain/entities/post.entity";
import { User } from "../domain/entities/user.entity";

import PostService from "../services/post.service";
import UserService from "../services/user.service";

export class PostController {
  public static findAll = async (
    _req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const posts: Post[] = await PostService.findAll();
      const users: User[] = await UserService.findAll();

      const posts_with_user = posts.map((post: Post) => {
        const user = users.find((user: User) => user.id === post.userId);
        return { ...post, user };
      });

      return res.status(200).json(posts_with_user);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}
