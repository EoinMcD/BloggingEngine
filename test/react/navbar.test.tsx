import * as React from "react";
import {cleanup, fireEvent, getByLabelText, render} from "@testing-library/react";
import MyNavbar from "../../app/javascript/components/my_navbar";
import renderer from "react-test-renderer";
import {describe, expect, test} from "@jest/globals";
import * as Jest from "jest";

test("Component renders as expected", () => {
  const component = renderer.create(
    <MyNavbar logged_in= {true} regPath="/signup" homePath="/" />
  );
  const tree = component.toJSON() ;
  expect(tree).toMatchSnapshot();
});
// test("Title button links to home page")

// test("Register button redirects to signup page")

// test("Register button is hidden when user is logged in")

// test("Logout button is shown when user is logged in")

// test("Register button is visible when user is logged out")

// test("Login button is visible when user is logged out")
