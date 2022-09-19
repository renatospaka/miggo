export default interface RepositoryInterface<T> {
  find(id: string): Promise<T>;
  findAll(): Promise<T>;
  create(entity: T): Promise<void>;
}
