import styled from "@emotion/styled";
import { FC } from "react";
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh- 50px);
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
  //   const { pathname } = useLocation();
  return (
    <LayoutWrapper>
      <Row>
        {/* {pathname !== "/" ? <SideBar /> : null} */}
        <Column>
          <BodyWrapper>{children}</BodyWrapper>
          <Footer />
        </Column>
      </Row>
    </LayoutWrapper>
  );
};

export default Layout;
