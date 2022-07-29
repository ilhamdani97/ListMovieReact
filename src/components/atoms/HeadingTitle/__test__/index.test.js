import React from "react";
import ReactDOM from "react-dom";

import HeadingTitle from "..";

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("render is fine", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HeadingTitle/>, div);
})

it("render rating correctly", () => {
    render(<HeadingTitle className={'title-film'} name={'Batman'} year={2001} /> )
    const ratingElement = screen.getByTestId('title-film');
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement).toHaveTextContent('Batman(2001)');
})