import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { SERVER_URL } from 'src/config';
import { ICar } from '../interfaces';

@Injectable()
export class CarService {
  public constructor(private readonly httpService: HttpService) {}

  public async findAll(): Promise<any> {
    const res = await this.httpService
      .get(`http://${SERVER_URL}/car`)
      .toPromise();
    return res.data;
  }

  public async create(data: ICar): Promise<any> {
    const res = await this.httpService
      .post(`http://${SERVER_URL}/car`, data)
      .toPromise();
    return res.data;
  }

  public async find(name: string, brand: string): Promise<any> {
    const res = await this.httpService
      .get(`http://${SERVER_URL}/car/name=${name}&brand=${brand}`)
      .toPromise();
    return res.data;
  }
}
