import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Homepage from '../components/Homepage';

const mockStore = configureStore([]);

describe('HomeContent', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cities: {
        cities: [],
        loading: false,
      },
    });
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Homepage />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
