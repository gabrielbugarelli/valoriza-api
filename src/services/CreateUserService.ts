import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute ({name, email, admin = false, password}: IUserRequest): Promise<IUserRequest> {
    const userRepository = getCustomRepository(UserRepository);

    if(!email) {
      throw new Error("Email incorrect!");
    }

    const userAlreadyExist = await userRepository.findOne({email});

    if(userAlreadyExist) {
      throw new Error("User already exist!");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    await userRepository.save(user);

    return user;
  }
}