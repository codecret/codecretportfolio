import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./HomePage";
import Collection from "./Collection";
import SharedLayout from "./SharedLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="/" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
};

export default App;
