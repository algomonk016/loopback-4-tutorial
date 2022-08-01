import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocationDataSource} from '../datasources';
import {State, StateRelations} from '../models';

export class StateRepository extends DefaultCrudRepository<
  State,
  typeof State.prototype.id,
  StateRelations
> {
  constructor(
    @inject('datasources.location') dataSource: LocationDataSource,
  ) {
    super(State, dataSource);
  }
}
