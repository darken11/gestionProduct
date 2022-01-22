export enum ProductActionsType{

  SEARCH="[product] Search Product"
}
export interface ActionProduct{
  type:ProductActionsType,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
}
export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
