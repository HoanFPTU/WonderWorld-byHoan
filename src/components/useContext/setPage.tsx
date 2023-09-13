import React, { FC, useContext, useRef, useState } from "react";
interface TypePage {
  page: number;
  setPage: (message: number) => void;
}
interface MyPageContextProps {
  children: React.ReactNode;
}
export const PageContext = React.createContext<TypePage>({
  page: 1,
  setPage: () => {},
});

export const MyPageContext: FC<MyPageContextProps> = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
