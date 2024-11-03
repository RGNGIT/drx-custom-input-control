import { IRemoteComponentCardApi } from "@directum/sungero-remote-component-types";

export interface IBaseInputProps {
  api: IRemoteComponentCardApi
  label: string;
  propertyName: string;
  value?: string;
  customPropertyContainer: string;
}

export interface IBaseInputModel {
  changeProperty(propName: string, prop: Object): void
  [key: string]: any;
}