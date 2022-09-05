export default interface RepositoryInterface<T> {
  find(id: string): Promise<T>;
}