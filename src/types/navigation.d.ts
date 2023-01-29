import { ReactComponentElement } from "react";

export interface IRoute {
  name: string;
  layout: string;
  component: ReactComponentElement;
  icon: ReactComponentElement | string;
  secondary?: boolean;
  parent?: Array;
  path: string;
}
