import React from 'react';
import Square from '../components/Square';
import renderer from 'react-test-renderer';

it('empty square should be rendered correctly', () => {
    const tree = renderer
        .create(<Square></Square>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('open empty square should be rendered correctly', () => {
    const tree = renderer
        .create(<Square open={true}></Square>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('occupied square should be rendered correctly', () => {
    const tree = renderer
        .create(<Square has={true}></Square>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('open occupied square should be rendered correctly', () => {
    const tree = renderer
        .create(<Square has={true} open={true}></Square>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

