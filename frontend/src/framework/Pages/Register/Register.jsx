import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import bcrypt from "bcryptjs";
import "./Register.css";

import ActionButton from "../../Prebuilt/Buttons/ActionButton/ActionButton";
import BaseButton from "../../Base/BaseButton/BaseButton";
import BaseIcon from "../../Base/BaseIcon/BaseIcon";
import BaseInput from "../../Base/BaseInput/BaseInput";
import Collapser from "../../Base/Collapser/Collapser";
import Container from "../../Base/Containers/Container/Container";
import Flexer from "../../Base/Flexer/Flexer";
import Item from "../../Base/Containers/Item/Item";
import Page from "../../Base/Containers/Page/Page";
import Surface from "../../Base/Containers/Surface/Surface";
import Text from "../../Base/Text/Text";

import { handleDataChange } from "../../../utils/dataHandlers/dataHandlers";
import axiosInstance from "../../../lib/Axios/axiosInstance";
import { setAuth, setUser } from "../../../lib/Actions/auth";

const textFields = [
  {
    label: "First Name",
    id: "firstName",
    autoComplete: "fname",
  },
  {
    label: "Last Name",
    id: "lastName",
    autoComplete: "lname",
  },
  {
    label: "Username",
    id: "username",
    autoComplete: "username",
  },
  {
    label: "Email Address",
    id: "email",
    autoComplete: "email",
  },
  {
    label: "Password",
    id: "password",
    autoComplete: "current-password",
    type: "password",
  },
];

const advancedTextFields = [
  {
    id: "phone",
    label: "Phone Number",
    autoComplete: "phone",
    type: "tel",
    grid: 12,
  },
  {
    id: "address",
    label: "Address",
    autoComplete: "address",
    type: "text",
    grid: 12,
  },
  {
    id: "city",
    label: "City",
    autoComplete: "city",
    type: "text",
  },
  {
    id: "state",
    label: "State",
    autoComplete: "state",
    type: "text",
  },

  {
    id: "zipcode",
    label: "Zipcode",
    autoComplete: "zipcode",
    type: "text",
  },
  {
    id: "country",
    label: "Country",
    autoComplete: "country",
    type: "text",
  },
];

const Register = ({}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [isAdvanced, setIsAdvanced] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogic = async (event) => {
    event.preventDefault();

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(formData.password, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });

    const loginData = {
      username: formData.username,
      password: hashedPassword,
    };

    axiosInstance
      .post("/auth/register/", {
        ...formData,
        password: hashedPassword,
        salt: salt,
      })
      .then((res) => {
        axiosInstance.post("/auth/login/", loginData).then((response) => {
          dispatch(
            setAuth({
              is_authenticated: response.data.authenticated,
            })
          );
          dispatch(
            setUser({
              is_superuser: response.data.is_superuser,
              username: response.data.username,
            })
          );
          const expires = new Date(Date.parse(response.data.exp));
          Cookies.set("jwt", response.data.jwt, { expires });
          Cookies.set("username", formData.username, { expires: 90 });
        });
      })
      .then(navigate("/"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Page>
      <Surface j="c" a="c" maxWidth={360} boxShadow={4} fillHeight pad={3}>
        <BaseIcon
          icon={faCoins}
          color="primary"
          fontSize="2rem"
          style={{ margin: "8px 8px 16px 8px" }}
        />
        <Text t="h2" className="register-heading">
          Register
        </Text>
        <form className="register-form" onSubmit={submitLogic}>
          <Container>
            {textFields.map((textField) => (
              <Item
                xs={
                  textField.id === "firstName" || textField.id === "lastName"
                    ? 6
                    : 12
                }
                style={{
                  paddingRight: textField.id === "firstName" ? 3 : 0,
                  paddingLeft: textField.id === "lastName" ? 3 : 0,
                }}
              >
                <BaseInput
                  id={textField.id}
                  name={textField.id}
                  type={textField.type || "text"}
                  helpText={textField.label}
                  value={formData.name}
                  onChange={(e) => handleDataChange(e, setFormData, formData)}
                  style={{
                    marginTop: 8,
                  }}
                  inputStyle={{ marginTop: 2 }}
                />
              </Item>
            ))}
          </Container>
          <Flexer fd="column" j="c" mt={16}>
            <BaseButton
              type="submit"
              size="sm"
              style={{ fontSize: "0.95rem", width: 80 }}
            >
              Submit
            </BaseButton>
            <Flexer j="fs" mt={8}>
              <Link to="/login" className="link-text">
                <Text>Already have an account? Login</Text>
              </Link>
            </Flexer>
          </Flexer>
          <Flexer j="je" mt={4}>
            <Text w="90%" a="r" mr={8}>
              Advanced Registration
            </Text>
            <ActionButton
              type={isAdvanced ? "close" : "open"}
              size="t"
              fontSize="0.9rem"
              onClick={() => setIsAdvanced(!isAdvanced)}
              iconStyle={{ marginTop: 1 }}
            />
          </Flexer>
          <Collapser isOpen={isAdvanced}>
            <Container className="animate-me">
              {advancedTextFields.map((textField) => (
                <Item
                  xs={textField.grid ? textField.grid : 6}
                  key={textField.id}
                  style={{
                    paddingRight:
                      textField.id === "city" || textField.id === "zipcode"
                        ? 3
                        : 0,
                    paddingLeft:
                      textField.id === "state" || textField.id === "country"
                        ? 3
                        : 0,
                  }}
                >
                  <BaseInput
                    id={textField.id}
                    name={textField.id}
                    type={textField.type || "text"}
                    helpText={textField.label}
                    value={formData.name}
                    onChange={(e) => handleDataChange(e, setFormData, formData)}
                    style={{
                      marginTop: 8,
                    }}
                    inputStyle={{ marginTop: 2 }}
                  />
                </Item>
              ))}
            </Container>
          </Collapser>
        </form>
      </Surface>
    </Page>
  );
};

export default Register;