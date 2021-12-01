import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '../repositories/ComplimentRepository';
import { UserRepository } from '../repositories/UserRepository';

type ComplimentRequest = {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string
}

export class CreateComplimentService {
  async execute({tag_id, user_sender, user_receiver, message}: ComplimentRequest) {
    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    if(user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver!");
    }

    const userReceiverExists = await userRepository.findOne(user_receiver);
    if(!userReceiverExists) {
      throw new Error ('User Receiver does not exist!');
    }

    const compliment = complimentRepository.create({
      tag_id, 
      user_sender, 
      user_receiver, 
      message
    })

    await complimentRepository.save(compliment);

    return compliment;
  } 
}