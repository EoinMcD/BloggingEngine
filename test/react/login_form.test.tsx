import * as React from "react";
import LoginForm from "../../app/javascript/components/login_form";
import { expect, test } from "@jest/globals";
import { render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const renderForm = (
  path = "/log",
  token = "@form_token"
) : RenderResult => {
  return render(
        <LoginForm path = {path} token = {token}/>
  );
};

test("Component renders as expected", () => {
  const { container } = renderForm();
  expect(container).toMatchSnapshot();
});
