import { getContacts } from "../../services/api";
import { User } from "../../common/types";
import { Contacts } from "../ContactList/Contact/index";
import { useEffect, useState } from "react";
import styled from "styled-components";

export function DisplayContacts(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const response = await getContacts();
        setUsers(response.data);
      } catch (error) {
        console.log({ error });
      }
    }
    load();
  }, []);

  return (
    <Grid>
      {users.map((contact) => (
        <Contacts key={contact.id} contact={contact} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 50px;
  padding-right: 50px;

  @media (min-width: 768px) {
    padding-left: 150px;
    padding-right: 150px;
  }

  @media (min-width: 992px) {
    padding-left: 250px;
    padding-right: 250px;
  }

  @media (min-width: 1200px) {
    padding-left: 300px;
    padding-right: 300px;
  }
`;
