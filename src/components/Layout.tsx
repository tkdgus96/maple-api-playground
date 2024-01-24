import styled from "@emotion/styled";
import { FC } from "react";
import SideBar from "./NavigationBar";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import SideBar from "./SideBar";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  min-width: 90vw;
  justify-content: center;
  align-items: center;
`;

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.div`
  min-height: calc(90vh - 61.5px);
  padding-top: 3rem;
`;
const FooterWrapper = styled.div`
  height: 50px;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: React.ReactNode;
}

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Data based on NEXON Open API</h3>
    </FooterWrapper>
  );
};
const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <LayoutWrapper>
      <ColumnLayout>
        {pathname !== "/" ? <SideBar /> : null}
        <Column>
          <BodyWrapper>{children}</BodyWrapper>
        </Column>
      </ColumnLayout>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
