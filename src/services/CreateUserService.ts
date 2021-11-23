import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute ({name, email, admin}: IUserRequest): Promise<IUserRequest>{
    const userRepository = new UserRepository();

    if(!email) {
      throw new Error("Email incorrect!");
    }

    const userAlreadyExist = await userRepository.findOne({email});

    if(userAlreadyExist) {
      throw new Error("User already exist!");
    }

    const user: IUserRequest = {
      name,
      email,
      admin
    }

    await userRepository.save(user);

    return user;
  }
}