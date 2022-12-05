import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { ICar } from 'src/car/interfaces';

import { CarService } from '../../car/service/car.service';

@Injectable()
export class CarCommand {
  public constructor(private readonly carService: CarService) { }

  /**
   * Пример: yarn cli car:find
   */
  @Command({ command: 'car:find', describe: 'Получить список всех авто' })
  public async findCar(): Promise<void> {
    try {
      console.log(await this.carService.findAll());
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Пример: yarn cli car:find-sort 1 1
   * @param name 1|-1
   * @param brand 1|-1
   */
  @Command({
    command: 'car:find-sort <name> <brand>',
    describe: 'Получить список всех авто с сортировкой',
  })
  public async findSorted(
    @Positional({
      name: 'name',
      describe: 'Сортировка по имени',
      type: 'string',
    })
    name: string,
    @Positional({
      name: 'brand',
      describe: 'Сортировка по бренду',
      type: 'string',
    })
    brand: string,
  ): Promise<void> {
    try {
      console.log(await this.carService.find(name, brand));
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Пример: yarn cli car:create '{"name": "rav4", "brand": "toyota", "production_year": 2010, "price": 20000}'
   * @param data
   */
  @Command({
    command: 'car:create <data>',
    describe: 'Добавить авто',
  })
  public async create(
    @Positional({
      name: 'data',
      describe: 'JSON с данными об авто',
      type: 'string',
    })
    data: string,
  ): Promise<void> {
    try {
      console.log(await this.carService.create(JSON.parse(data) as ICar));
    } catch (e) {
      console.error(e);
    }
  }
}
