import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { RootState } from '@utils/store';

function App() {
  const location = useLocation();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <p>
        <Link to="/1">route 1</Link>
      </p>
      <p>
        <Link to="/2">route 2</Link>
      </p>

      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </>
  );
}

export default App;
