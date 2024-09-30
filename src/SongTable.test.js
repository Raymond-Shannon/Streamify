import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SongTable from './components/dashboard/SongTable';

const mockStore = configureStore([]);

test('filters songs by input text', () => {
    const store = mockStore({
        songs: {
            songs: [
                { songName: 'Hello', artist: 'Adele', date: '2020-01-01', count: 10, userID: '1' },
                { songName: 'Rolling in the Deep', artist: 'Adele', date: '2021-05-05', count: 5, userID: '2' },
            ],
        },
    });

    render(
        <Provider store={store}>
            <SongTable />
        </Provider>
    );

    // Verify both songs are initially rendered
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.getByText(/Rolling in the Deep/i)).toBeInTheDocument();

    // Simulate filtering by 'Hello'
    fireEvent.change(screen.getByLabelText(/Filter by Song Name or Artist/i), {
        target: { value: 'Hello' },
    });

    // Verify only 'Hello' is shown after filtering
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
    expect(screen.queryByText(/Rolling in the Deep/i)).not.toBeInTheDocument();
});

