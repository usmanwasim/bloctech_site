import React, { createContext } from "react";

export const DataContext = createContext();

const ContextAPI = (props) => {
	return (
		<DataContext.Provider value={{}}>{props.children}</DataContext.Provider>
	);
};

export default ContextAPI;
