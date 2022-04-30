import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal= jest.fn();
const currentPhoto = {
    name: "Mr. Peanut",
    category: "portraits",
    description: "He sings, he dances, and he loves.",
    index: 1
}

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            mockToggleModal={mockToggleModal}
        />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal 
            currentPhoto={currentPhoto}
            mockToggleModal={mockToggleModal}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})