/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({ href, children }) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <>
      <Link to={href}>{children}</Link>
    </>
  );
};
