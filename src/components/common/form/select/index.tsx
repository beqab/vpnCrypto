import React from "react";

interface IProps {
  value?: string;
}

export const Select: React.FC<IProps> = ({ value }) => {
  return (
    <div className="select">
      <div className="selectInput">
        <span>{value ? value : "select"}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.41 8.59L6 10L12 16L18 10L16.59 8.59L12 13.17L7.41 8.59Z"
            fill="#D0D0D0"
          />
        </svg>
      </div>
      <div className="selectOptions"></div>
    </div>
  );
};
