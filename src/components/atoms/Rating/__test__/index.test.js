import React from "react";
import ReactDOM from "react-dom";
import Rating from "..";

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("render is fine", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Rating/>, div);
})

it("render rating correctly", () => {
    render(<Rating className={'rating-film'} valueRating={7} valueOf={10} /> )
    const ratingElement = screen.getByTestId('rating-film');
    expect(ratingElement).toBeInTheDocument();
    expect(ratingElement).toHaveTextContent('7/10');
})