import * as React from "react";
import MyNavbar from "../../app/javascript/components/my_navbar";
import { expect, test } from "@jest/globals";
import { getByTestId, queryByText, getByText, render, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

const renderNavbar = (
  loggedIn = true,
  regPath = "/signup",
  homePath = "/"
) : RenderResult => {
  return render(
    <MyNavbar loggedIn= {loggedIn} regPath={regPath} homePath={homePath} />
  );
};

test("Component renders as expected", () => {
  const { container } = renderNavbar();
  expect(container).toMatchSnapshot();
});

test("Title button has the right link", () => {
  const { container } = renderNavbar();
  expect(getByTestId(container, "home-button")).toHaveProperty("href", window.location.href);
});

test("Register button has the right link", () => {
  const { container } = renderNavbar(false);
  expect(getByTestId(container, "reg-button")).toHaveProperty("href", window.location.href + "signup");
});

test("Register button is hidden when user is logged in", () => {
  const { container } = renderNavbar();
  expect(queryByText(container, "Register")).toBeFalsy();
});

test("Logout button is shown when user is logged in", () => {
  const { container } = renderNavbar();
  expect(getByText(container, "Logout")).toBeTruthy();
});

test("Register button is visible when user is logged out", () => {
  const { container } = renderNavbar(false);
  expect(getByText(container, "Register")).toBeTruthy();
});

test("Login button is visible when user is logged out", () => {
  const { container } = renderNavbar(false);
  expect(getByText(container, "Login")).toBeTruthy();
});
