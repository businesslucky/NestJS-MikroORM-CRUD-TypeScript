import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Book extends BaseEntity {

  @Property()
  title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }

}
