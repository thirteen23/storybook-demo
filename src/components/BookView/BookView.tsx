import React from "react";

import "./BookView.scss";

export const BookView = (props: IProps) => {
  const { title, author, className = "", onClick } = props;

  const clickHandler = () => {
    if(onClick != null) {
      onClick({title, author});
    }
  }
  
  return (
    <div className={`list-item ${className}`} onClick={clickHandler}>
      <h2 className="list-item__title">
      {title}
      </h2>
      <p className="list-item__value">
        {author}
      </p>
    </div>
  );
}

export interface IProps {
  /**
   * Title of the book.
   */
  title: string;

  /**
   * Author of the book.
   */
  author: string;

  /**
   * Additional classname(s) of element.
   * @default ""
   */
  className?: string;

  /**
   * Callback to be invoked when item is clicked
   */
  onClick?: (data: { title: string; author: string; }) => void;
}