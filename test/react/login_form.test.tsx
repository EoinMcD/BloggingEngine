import * as React from "react";
import LoginForm from "../../app/javascript/components/login_form";
import { expect, test } from "@jest/globals";
import { fireEvent, getByRole, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const renderForm = (
  path = "/log",
  token = "token"
) : RenderResult => {
  return render(
        <LoginForm path = {path} token = {token}/>
  );
};
test("Component renders as expected", () => {
  const { container } = renderForm();
  expect(container).toMatchSnapshot();
});

test("Alert opens when path is wrong", () => {
  const { container } = renderForm("/wrongLogPath");
  window.alert = jest.fn();
  fireEvent.click(getByRole(container, "button"));
  expect(window.alert).toBeCalled();
});
