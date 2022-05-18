import { Injectable } from "@nestjs/common";
import { PRODUCTS } from "./product.mock";

@Injectable()
export class AppService {
  products = PRODUCTS;

  async getProducts() {
    return await this.products;
  }
}