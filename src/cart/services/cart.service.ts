import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../models';
import { Carts } from '../entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Carts) private cartsRepository: Repository<Carts>,
  ) {}

  async findOrCreateByUserId(userId: string): Promise<Carts> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async findByUserId(userId: string): Promise<Carts> {
    return this.cartsRepository.findOneBy({ user_id: userId });
  }

  createByUserId(userId: string) {
    // TODO: Create cart using Carts Repository
    return null;
  }

  async updateByUserId(userId: string, cart: Cart) {
    // TODO: Implement
    return {};
  }

  removeByUserId(userId): void {
    // TODO: Implement
  }

}
