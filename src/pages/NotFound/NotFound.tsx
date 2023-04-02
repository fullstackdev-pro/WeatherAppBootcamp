import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function NotFound() {
  return (
    <div
      className="notFound bg-no-repeat bg-cover w-[100vw] h-[100vh] "
      onClick={handleClick}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
      >
        <Link
          to="/"
          className="text-slate-200 cursor-pointer text-[1.5rem] no-underline"
        >
          Bosh sahifa
        </Link>
        <Typography className="text-slate-200 text-[1.5rem] ">404</Typography>
      </Breadcrumbs>
      <div className="text-center text-[2rem] md:text-[4rem] mt-[10rem] text-slate-200">
        404 Sahifa topilmadi
      </div>
    </div>
  );
}

export default NotFound;
