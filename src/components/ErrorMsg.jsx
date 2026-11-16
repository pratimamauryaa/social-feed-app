import React from "react";

const ErrorMsg = ({ Error }) => {
  if (!Error) {
    return null;
  }
  return (
    <>
      <div classNameName="alert alert-danger" role="alert">
        {Error}
      </div>
    </>
  );
};

export default ErrorMsg;
