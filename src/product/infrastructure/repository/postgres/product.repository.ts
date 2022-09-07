import Product from "../../../domain/entity/product";
import ProductRepositoryInterface from "../../../domain/repository/product.interface";
import ProductModel from "../../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { uuid: id } });
    return new Product(
      productModel.id,
      productModel.name,
      productModel.price,
      productModel.omieCode
    );
  }

  create(entity: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
