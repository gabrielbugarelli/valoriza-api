import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

export class CreateTagService {
  async execute (name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    if(!name) {
      throw new Error("Incorrect name!");
    }

    const nameAlreadyExist = await tagRepository.findOne({name});
    if(nameAlreadyExist) {
      throw new Error("Tag already exist!");
    }

    const tag = tagRepository.create({name});
    await tagRepository.save(tag);

    return tag;
  }
}