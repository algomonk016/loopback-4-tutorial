import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LocationDataSource} from '../datasources';
import {State, StateRelations, City} from '../models';
import {CityRepository} from './city.repository';

export class StateRepository extends DefaultCrudRepository<
  State,
  typeof State.prototype.id,
  StateRelations
> {

  public readonly cities: HasManyRepositoryFactory<City, typeof State.prototype.id>;

  constructor(
    @inject('datasources.location') dataSource: LocationDataSource, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(State, dataSource);
    this.cities = this.createHasManyRepositoryFactoryFor('cities', cityRepositoryGetter,);
    this.registerInclusionResolver('cities', this.cities.inclusionResolver);
  }
}
