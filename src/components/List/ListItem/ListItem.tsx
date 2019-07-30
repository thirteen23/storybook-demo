import React from "react";

import "./ListItem.scss";

export const ListItem = (props: IProps) => {
  const { title, value, className = "", onClick } = props;

  const clickHandler = () => {
    if(onClick != null) {
      onClick({title, value});
    }
  }
  
  return (
    <div className={`list-item ${className}`} onClick={clickHandler}>
      <h2 className="list-item__title">
      {title}
      </h2>
      <p className="list-item__value">
        {value}
      </p>
    </div>
  );
}

export interface IProps {
  /**
   * Title of the item.
   * @default ""
   */
  title: string;

  /**
   * Value of the item.
   * @default ""
   */
  value: string;

  /**
   * Additional classname(s) of element.
   * @default ""
   */
  className?: string;

  /**
   * Callback to be invoked when item is clicked
   */
  onClick?: ({ title, value }) => void;
}