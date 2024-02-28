import {ReactNode} from "react";

export interface IActivity {
  id: number;
  getTitle?: () => number;
  title: string,
  subtitle: string,
  perKcal: number,
  type: string,
  cardIcon: ReactNode,
  cardText: string,
}
