import * as React from "react";
import MyButton from "../../app/javascript/components/button";
import { expect, test } from "@jest/globals";
import { render, RenderResult, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const renderButton = (path = "/signup", name = "Register"): RenderResult => {
  return render(<MyButton path={path} name={name} />);
};

test("Component renders as expected", () => {
  const { container } = renderButton();
  expect(container).toMatchSnapshot();
});

test("Register button has the right link", () => {
  const { container } = renderButton();
  expect(getByRole(container, "link")).toHaveProperty(
    "href",
    window.location.href + "signup"
  );
});

test("Login button has the right link", () => {
  const { container } = renderButton("/login/index");
  expect(getByRole(container, "link")).toHaveProperty(
    "href",
    window.location.href + "login/index"
  );
});
