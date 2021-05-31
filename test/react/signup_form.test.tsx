/* eslint-disable no-undef */
import * as React from "react";
import SignupForm from "../../app/javascript/components/signup_form";
import { expect, test } from "@jest/globals";
import {
  fireEvent,
  getByRole,
  queryByTestId,
  render,
  RenderResult
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import mockAxios from "jest-mock-axios";

const renderForm = (
  path = "/users",
  token = "token",
  redirectPath = "/articles"
): RenderResult => {
  return render(
    <SignupForm path={path} token={token} redirectPath={redirectPath} />
  );
};

describe("Describe the signup form", () => {
  test("Component renders as expected", () => {
    const { container } = renderForm();
    expect(container).toMatchSnapshot();
  });
  describe("Succesful signups", () => {
    test("Form can handle a succesful submission", () => {
      const { container } = renderForm();
      const response = {
        status: 200,
        data: {
          errors: undefined
        }
      };
      fireEvent.click(getByRole(container, "button"));
      mockAxios.mockResponse(response);
      expect(response).toStrictEqual({
        data: { errors: undefined },
        status: 200
      });
    });

    test("Email input is shown in the form", () => {
      const { container } = renderForm();
      expect(container.querySelector("input[name=email]")).toBeTruthy();
    });
    test("First Name input is shown in the form", () => {
      const { container } = renderForm();
      expect(container.querySelector("input[name=name]")).toBeTruthy();
    });
    test("Second name input is shown in the form", () => {
      const { container } = renderForm();
      expect(container.querySelector("input[name=sname]")).toBeTruthy();
    });
    test("Password input is shown in the form", () => {
      const { container } = renderForm();
      expect(container.querySelector("input[name=password]")).toBeTruthy();
    });
    test("Password confirmation input is shown in the form", () => {
      const { container } = renderForm();
      expect(
        container.querySelector("input[name=confirmpassword]")
      ).toBeTruthy();
    });
  });
  describe("Unsuccesful signup or params", () => {
    test("An error is shown when user submits incorrect data", () => {
      const { container } = renderForm();
      const response = {
        data: {
          errors: [
            "First name can't be blank",
            "Second name can't be blank",
            "Email can't be blank",
            "Email is invalid",
            "Password can't be blank",
            "Password is too short (minimum is 6 characters)",
            "Password can't be blank"
          ]
        }
      };
      fireEvent.click(getByRole(container, "button"));
      mockAxios.mockResponse(response);
      expect(queryByTestId(container, "error-div")).toBeTruthy();
      expect(queryByTestId(container, "error-div").textContent).toBe(
        "First name can't be blankSecond name can't be blankEmail can't be blankEmail is invalidPassword can't be blankPassword is too short (minimum is 6 characters)Password can't be blank"
      );
    });
    test("Alert message displays when there is no response when submitting signup request", () => {
      const { container } = renderForm("/wrongLogPath");
      jest.resetModules();
      global.alert = jest.fn();
      fireEvent.click(getByRole(container, "button"));
      mockAxios.mockError();
      expect(global.alert).toBeCalled();
    });
  });
});
