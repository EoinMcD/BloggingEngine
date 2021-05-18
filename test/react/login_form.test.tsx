import * as React from "react";
import LoginForm from "../../app/javascript/components/login_form";
import { expect, test } from "@jest/globals";
import { fireEvent, getByRole, getByTestId, queryByTestId, render, RenderResult, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import $ from "jquery";

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
  test("Errors array is filled after finding no user", async () => {
    const { container } = renderForm();
    $.ajax = jest.fn().mockImplementation(() => {
      const fakeResponse = {
        errors: "No User Found"
      };
      return Promise.resolve(fakeResponse);
    });
    fireEvent.click(getByRole(container, "button"));
    await waitFor(() => expect(queryByTestId(container, "Error")).toBeTruthy());
  });
  test("Alert opens when path is wrong", () => {
    const { container } = renderForm("/wrongLogPath");
    window.alert = jest.fn();
    fireEvent.click(getByRole(container, "button"));
    expect(window.alert).toBeCalled();
  });
});
