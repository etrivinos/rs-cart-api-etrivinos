import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { Carts } from './entity';


@Module({
  imports: [ 
    OrderModule,
    TypeOrmModule.forFeature([Carts])
  ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
