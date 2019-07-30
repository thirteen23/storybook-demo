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
    children?: React.ReactNode;
    className?: string;
    primary?: boolean;
    disabled?: boolean;
    childProps?: any;
}