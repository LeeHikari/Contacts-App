import { useState } from "react";
import styled from "styled-components";
import { User } from "../../../common/types";

type UsersProps = {
  contact: User;
};

export function Contacts({ contact }: UsersProps): JSX.Element {
  const [hideInfo, setHideInfo] = useState(false);

  return (
    <Container onClick={() => setHideInfo((wasOpened) => !wasOpened)}>
      <Text>
        <p className="name">{contact.name}</p>
        <p className="username">{contact.username}</p>
        {hideInfo && (
          <div>
            <InfoCategory style={{ marginTop: "2px" }}>Email</InfoCategory>
            <InfoText>{contact.email}</InfoText>
            <InfoCategory>Website</InfoCategory>
            <InfoText>{contact.website}</InfoText>
            <InfoCategory>Company</InfoCategory>
            <InfoText>{contact.company.name}</InfoText>
            <InfoCategory>Catch Phrase</InfoCategory>
            <p style={{ fontStyle: "italic", marginTop: "5px" }}>
              {contact.company.catchPhrase}
            </p>
            <InfoCategory>Business Slogan</InfoCategory>
            <InfoText>{contact.company.bs}</InfoText>
            <InfoCategory>Business Address</InfoCategory>
            <p style={{ marginTop: "5px", marginBottom: "0px" }}>
              {contact.address.suite} - {contact.address.street},{" "}
              {contact.address.city}, {contact.address.zipcode}
            </p>
          </div>
        )}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  display: flex;
  border-radius: 5px;
  transition: 0.3s ease;
  color: black;
  margin-bottom: 8px;
  margin-top: 8px;

  &:hover {
    background-color: #ffffff;
    transform: translateX(1px);
    cursor: pointer;
  }
`;

const Text = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Lato", sans-serif;
  font-weight: 300;

  .name {
    font-weight: bold;
    font-size: 24;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px;
    border-color: gray;
  }

  .username {
    opacity: 0.33;
    margin: 0px;
    padding: 0px;
  }
`;

const InfoCategory = styled.span`
  font-weight: bold;
  font-size: 11px;
`;

const InfoText = styled.p`
  margin-top: 3px;
`;
