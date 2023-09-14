import React, { FC, useContext, useRef, useState } from "react";
interface TypePage {
  page2: number | null;
  page: number | null;
  setPage: (message: number) => void;
}
interface MyPageContextProps {
  children: React.ReactNode;
}
export const PageContext = React.createContext<TypePage>({
  page2: null,
  page: null,
  setPage: () => {},
});

export const MyPageContext: FC<MyPageContextProps> = ({ children }) => {
  const [page, setPage] = useState(1);
  const page2 = 1;
  return (
    <PageContext.Provider value={{ page, setPage, page2 }}>
      {children}
    </PageContext.Provider>
  );
};
