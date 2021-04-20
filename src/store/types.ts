export interface FluxStandardAction<S> {
  readonly type: string;
  payload?: S;
}
