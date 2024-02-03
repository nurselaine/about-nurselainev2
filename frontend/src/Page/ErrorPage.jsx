import React, { memo } from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage(){
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Oh no!</h1>
      <p>An error has occured. We can't find your page :(</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default memo(ErrorPage);