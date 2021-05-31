import * as React from "react";
import MyButton from "../../app/javascript/components/button";
import { expect, test } from "@jest/globals";
import { render, RenderResult, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const renderButton = (
  path = "/signup",
  buttonText = "Register"
): RenderResult => {
  return render(<MyButton path={path} buttonText={buttonText} />);
};

test("Component renders as expected", () => {
  const { container } = renderButton();
  expect(container).toMatchSnapshot();
});

test("Button has the right link", () => {
  const { container } = renderButton();
  expect(getByRole(container, "link")).toHaveProperty(
    "href",
    window.location.href + "signup"
  );
});

test("Button has the right text", () => {
  const { container } = renderButton();
  expect(getByRole(container, "link").textContent).toEqual("Register");
});
