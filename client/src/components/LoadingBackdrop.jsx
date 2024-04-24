import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function LoadingBackdrop({ open }) {

	return (
		<div>
			{/* <Button onClick={handleOpen}>Show backdrop</Button> */}
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}
