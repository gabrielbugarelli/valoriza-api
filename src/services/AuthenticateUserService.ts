import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from 'jsonwebtoken';

type AuthenticateRequest = {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({email, password}: AuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({email});

    if(!user) {
      throw new Error('Email our password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch) {
      throw new Error('Email our password incorrect!');
    }

    /**
     * caso o usuário exista, 
     * o método irá gerar um novo token
     * do usuário
     */

    const token = sign(
      {
        email: user.email,
      }, 
      "599a7d44df15442cc1fbadf9b86d13a7", 
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}