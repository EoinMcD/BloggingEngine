/* eslint-disable no-undef */
import * as React from "react";
import LoginForm from "../../app/javascript/components/login_form";
import { expect, test } from "@jest/globals";
import { fireEvent, getByRole, queryByTestId, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import mockAxios from "jest-mock-axios";

const renderForm = (
  path = "/log",
  token = "token"
) : RenderResult => {
  return render(
        <LoginForm path = {path} token = {token}/>
  );
};

describe("Describe the login form", () => {
  afterEach(() => {
    jest.resetModules();
  });
  test("Component renders as expected", () => {
    const { container } = renderForm();
    expect(container).toMatchSnapshot();
  });

  test("Errors array is filled after finding no user", () => {
    const { container } = renderForm();
    const response = {
      data: {
        errors: "No User Found"
      }
    };
    fireEvent.click(getByRole(container, "button"));
    mockAxios.mockResponse(response);
    expect(queryByTestId(container, "Error")).toBeTruthy();
  });

  test("Alert opens when path is wrong", () => {
    const { container } = renderForm("/wrongLogPath");
    jest.resetModules();
    global.alert = jest.fn();
    fireEvent.click(getByRole(container, "button"));
    mockAxios.mockError();
    expect(global.alert).toBeCalled();
  });
});
