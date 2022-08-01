import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {LocationDataSource} from '../datasources';
import {City, CityRelations, State} from '../models';
import {StateRepository} from './state.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly id: BelongsToAccessor<State, typeof City.prototype.id>;

  constructor(
    @inject('datasources.location') dataSource: LocationDataSource, @repository.getter('StateRepository') protected stateRepositoryGetter: Getter<StateRepository>,
  ) {
    super(City, dataSource);
    this.id = this.createBelongsToAccessorFor('id', stateRepositoryGetter,);
    this.registerInclusionResolver('id', this.id.inclusionResolver);
  }
}
