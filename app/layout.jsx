"use client";
import React, { useMemo, useState } from "react";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createCustomTheme } from "@/utils/createCustomTheme";
import ContextAPI from "@/utils/ContextAPI";

export default function RootLayout({ children }) {
	const [mode, setMode] = useState("light");

	const toggleMode = () => {
		setMode((val) => (val === "light" ? "dark" : "light"));
	};

	const theme = useMemo(() => {
		let theme = createCustomTheme(mode);
		theme = responsiveFontSizes(theme);
		return theme;
	}, [mode]);

	return (
		<html lang="en">
			<head />
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					limit={3}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme={mode}
				/>
				<body>
					<ContextAPI>
						<Header mode={mode} toggleMode={toggleMode} />
						{children}
						<Footer />
					</ContextAPI>
				</body>
			</ThemeProvider>
		</html>
	);
}
