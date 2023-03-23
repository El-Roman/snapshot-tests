import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import gitHubCard from './src/components/GitHubCard';

test('renders a snapshot', () => {
    const tree = renderer.create(<gitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
})