import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import Spinner from "../components/Spinner";

const Home = () => {
	const { data, isLoading } = useSelector((state) => state.announstment);
	const [open, setOpen] = useState(false);
	const onClose = () => setOpen((prev) => !prev);
	const number = 10;

	return (
		<>
			{!isLoading ? (
				<Box sx={{ padding: 2 }}>
					<Button sx={{ m: 2 }} variant="contained" onClick={onClose}>
						{open ? "Close" : "Open"}
					</Button>
					{open && (
						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>№</TableCell>
										<TableCell>Название</TableCell>
										<TableCell>Описание</TableCell>
										<TableCell>Цена</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data?.slice(0, number).map((item, index) => (
										<TableRow key={item.title}>
											<TableCell>{index + 1}</TableCell>
											<TableCell>{item.title}</TableCell>
											<TableCell>{item.description}</TableCell>
											<TableCell>{`$${item.price}`}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					)}
				</Box>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Home;
