import React from 'react';
import { ListItem, IProps as IListItemProps } from "./ListItem/ListItem";
import './List.scss';

export const List = (props: IProps) => {
  const { title, items, footerText } = props;

  return (
    <div className="list">
      <h1>{ title }</h1>
      <div className="list__item-container">
        { items.map(item => <ListItem {...item} key={item.title} className="list__list-item"/>)}
      </div>
      <h4>{ footerText }</h4>
    </div>
  );
}

export interface IProps {
  /**
   * Title of the list.
   * @default ""
   */
  title?: string;

  /**
   * Appears in the footer of the list.
   * @default ""
   */
  footerText?: string;

  /**
   * Array of List Items to be displayed.
   * @kind Micros
   * @story ListItem
   */
  items: [IListItemProps];
}