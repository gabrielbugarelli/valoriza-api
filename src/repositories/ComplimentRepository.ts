import { EntityRepository, Repository } from "typeorm";
import { ComplimentEntity } from "../entities/ComplimentEntity";

@EntityRepository(ComplimentEntity)
export class ComplimentRepository extends Repository<ComplimentEntity>{
  
}