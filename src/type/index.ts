import { CSSProperties } from 'vue';

export interface MenuItemType{
  info:string,
  link:string,
  iconClass?:string,
  styleSheet?:CSSProperties | string
}

export interface NotificationMessage{
  id:number;
  content:string;
  iconClass?: string;
  styleSheet?: string;
  duration:number
}