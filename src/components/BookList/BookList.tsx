import React from 'react';
import { BookView, IProps as IBookViewProps } from "../BookView/BookView";

import './BookList.scss';

export const BookList = (props: IProps) => (
  <div className="list">
    <h1>{ props.titleText }</h1>
    <div className="list__item-container">
      { props.books.map(book => (
        <span key={book.title}>
          <BookView {...book}  className="list__list-item"/>
        </span>
        ))}
    </div>
    <h4>{ props.footerText }</h4>
  </div>
);

export interface IProps {
  /**
   * Array of BookView props to display.
   * @kind Micros
   * @story BookView
   */
  books: IBookViewProps[];
  
  /**
   * Title of the list.
   * @default ""
   */
  titleText?: string;

  /**
   * Appears in the footer of the list.
   * @default ""
   */
  footerText?: string;

}