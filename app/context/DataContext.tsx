import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";

type DataContextType = {
  // user: { [key: string]: any } | null;
  // setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;

  dumbbellKcal: number;
  setDumbbellKcal: Dispatch<SetStateAction<number>>;
  stepKcal: number;
  setStepKcal: Dispatch<SetStateAction<number>>;
  pointKcal: number;
  setPointKcal: Dispatch<SetStateAction<number>>;
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within an DataProvider");
  }
  return context;
}

const DataProvider = (props: { children: ReactNode }): ReactElement => {
  // const [user, setUser] = useState<{ [key: string]: any } | null>(null);
  const [dumbbellKcal, setDumbbellKcal] = useState<number>(0);
  const [stepKcal, setStepKcal] = useState<number>(0);
  const [pointKcal, setPointKcal] = useState<number>(0);
  const [steps, setSteps] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());

  return <DataContext.Provider {...props}
                               value={{
                                 // user,
                                 // setUser,
                                 dumbbellKcal,
                                 setDumbbellKcal,
                                 stepKcal,
                                 setStepKcal,
                                 pointKcal,
                                 setPointKcal,
                                 steps,
                                 setSteps,
                                 points,
                                 setPoints,
                                 date,
                                 setDate
                               }}
  />;
};

export {DataProvider, useData};