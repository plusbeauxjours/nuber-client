import React from "react";
import styled from "../../typed-components";
import { MutationFn } from "react-apollo";
import Form from "src/Components/Form";
import Input from "../../Components/Input/Input";
import Helmet from "react-helmet";
import Header from "src/Components/Header";
import Button from "src/Components/Button";
import { updateProfile } from "../../types/api";

const Container = styled.div``;

const ExtendedForm = styled(Form)`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 30px;
`;

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  onSubmit: MutationFn;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const EditAccountPresenter: React.SFC<IProps> = ({
  firstName,
  lastName,
  email,
  profilePhoto,
  loading,
  onSubmit,
  onInputChange
}) => (
  <Container>
    <Helmet>
      <title>Edit Account | Nuber</title>
    </Helmet>
    <Header title={"Edit Account"} backTo={"/"} />
    <ExtendedForm submitFn={onsubmit}>
      <ExtendedInput
        onChage={onInputChange}
        type={"text"}
        value={firstName}
        plcaholder={"First name"}
      />
      <ExtendedInput
        onChage={onInputChange}
        type={"text"}
        value={lastName}
        plcaholder={"Last name"}
      />
      <ExtendedInput
        onChage={onInputChange}
        type={"email"}
        value={email}
        plcaholder={"Email"}
      />
      <Button onClick={null} value={loading ? "Loading" : "Update"} />
    </ExtendedForm>
  </Container>
);

export default EditAccountPresenter;
