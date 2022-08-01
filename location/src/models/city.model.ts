import {Entity, model, property, belongsTo} from '@loopback/repository';
import {State} from './state.model';

@model()
export class City extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => State, {name: 'id'})
  stateId: string;

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
