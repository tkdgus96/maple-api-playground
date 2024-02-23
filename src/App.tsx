import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Routes";
import Layout from "@components/Layout";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Maple",
          fontSize: "0.875rem" as unknown as number,
        },
      }}
    >
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

