import * as React from "react";
import "./Button.scss";

export const Button = (props: IProps) => {
  const { children, primary, className, disabled = false, ...childProps } = props;

  return (
    <div className={`ecl-btn-wrapper ${className}`}>
      <button className={`ecl-btn ${primary ? "primary" : ""}  ${disabled ? "disabled" : ""}`} {...childProps}>
        { children }
      </button>
    </div>
  );
};

export interface IProps {
    /**
     * Titles and actions of the links for the kebab menu
     */
    primary: boolean;
    /**
     * Header title of the alert
     */
    className: string;
    
    children: any;

    /**
     * Date of the alert
     */
    disabled: boolean;
    
    childProps: any;
}