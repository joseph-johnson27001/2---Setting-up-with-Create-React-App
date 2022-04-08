import React, { createContext } from "react";

const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
