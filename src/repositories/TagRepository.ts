import { EntityRepository, Repository } from "typeorm";
import { TagEntity } from "../entities/TagEntity";

@EntityRepository(TagEntity)
export class TagRepository extends Repository<TagEntity> {
  
}