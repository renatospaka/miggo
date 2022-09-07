export default interface RepositoryInterface<T> {
  find(id: string): Promise<T>;
  create(entity: T): Promise<void>;
}