import styled from "styled-components";
import { DisplayContacts } from "./components/ContactList";
import "index.css";

export function App(): JSX.Element {
  return (
    <div>
      <Header>
        <Title>Resonate Contacts</Title>
      </Header>
      <Layout>
        <DisplayContacts />
      </Layout>
    </div>
  );
}

const Header = styled.div`
  background-color: #ffd966;
  padding: 16px;
  text-align: center;
`;

const Title = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 36px;
  margin: 5px;
`;

const Layout = styled.div`
  background-color: #f59ea0;
`;
