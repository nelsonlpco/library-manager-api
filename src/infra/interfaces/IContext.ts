export default interface IContext {
  connect(): Promise<boolean>;
  close(): Promise<boolean>;
}
