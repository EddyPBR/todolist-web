import { Layout, Typography, Flex, Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const IS_LOGED_IN = false;

  return (
    <Layout style={{ height: "100vh" }}>
      {IS_LOGED_IN && (
        <Layout.Header>
          <Flex style={{ height: "100%" }} align="center" justify="space-between">
            <Typography.Text style={{ color: "#FFF" }} type="secondary">
              <span style={{ color: "#CCC" }}>Bem vindo(a),</span> Edvaldo Junior
            </Typography.Text>
            <Button type="primary" danger icon={<PoweroffOutlined />}>
              Sair
            </Button>
          </Flex>
        </Layout.Header>
      )}

      <Layout.Content>
        <Outlet />
      </Layout.Content>

      <Layout.Footer style={{ textAlign: "center" }}>Desenvolvido com ❤️ por EddyPBR</Layout.Footer>
    </Layout>
  );
}
