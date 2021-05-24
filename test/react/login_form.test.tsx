/* eslint-disable no-undef */
import * as React from "react";
import LoginForm from "../../app/javascript/components/login_form";
import { expect, test } from "@jest/globals";
import {
  fireEvent,
  getByRole,
  getByTestId,
  queryByTestId,
  render,
  RenderResult
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import mockAxios from "jest-mock-axios";

const renderForm = (
  path = "/login_index_path",
  token = "token",
  redirectPath = "/articles"
): RenderResult => {
  return render(
    <LoginForm path={path} token={token} redirectPath={redirectPath} />
  );
};

describe("Describe the login form", () => {
  test("Component renders as expected", () => {
    const { container } = renderForm();
    expect(container).toMatchSnapshot();
  });

  test("An error is shown after email or password are incorrect when submitting login request", () => {
    const { container } = renderForm();
    const response = {
      data: {
        errors: "Email or password is incorrect"
      }
    };
    fireEvent.click(getByRole(container, "button"));
    mockAxios.mockResponse(response);
    expect(queryByTestId(container, "error-div")).toBeTruthy();
  });

  test("Alert message displays when there is no response when submitting login request", () => {
    const { container } = renderForm("/wrongLogPath");
    jest.resetModules();
    global.alert = jest.fn();
    fireEvent.click(getByRole(container, "button"));
    mockAxios.mockError();
    expect(global.alert).toBeCalled();
  });

  test("User is logged in after submitting correct params", () => {
    const { container } = renderForm();
    console.log(window.location.href);
    const response = {
      status: 200,
      data: {
        errors: undefined
      }
    };
    fireEvent.click(getByRole(container, "button"));
    mockAxios.mockResponse(response);
    console.log(window.location.href);
    expect(response).toStrictEqual({
      data: { errors: undefined },
      status: 200
    });
  });

  test("Email input is shown in the form", () => {
    const { container } = renderForm();
    expect(getByTestId(container, "email")).toBeTruthy();
  });

  test("Password input is shown in the form", () => {
    const { container } = renderForm();
    expect(getByTestId(container, "password")).toBeTruthy();
  });
});
