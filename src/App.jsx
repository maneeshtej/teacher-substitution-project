import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import useNetworkStore from "./context/useNetworkStore";

const Login = lazy(() => import("./pages/login/Login"));
const Home = lazy(() => import("./pages/home/Home"));
const SubstitutionDetails = lazy(() =>
  import("./pages/substitution/SubstitutionDetails")
);
const AddSubstitution = lazy(() =>
  import("./pages/substitution/simpleSubstitution/AddSubstitution")
);
const ConfirmSubstitution = lazy(() =>
  import("./pages/substitution/simpleSubstitution/ConfirmSubstitution")
);
const EditSubstitutions = lazy(() =>
  import("./pages/substitution/EditSubstitutions")
);
const SelectorPage = lazy(() => import("./pages/substitution/SelectorPage"));
const AddSubstitution2 = lazy(() =>
  import("./pages/substitution/simpleSubstitution2/AddSubstitution2")
);
const ConfirmSubstitution2 = lazy(() =>
  import("./pages/substitution/simpleSubstitution2/ConfirmSubstitution2")
);
const Recent = lazy(() => import("./pages/recent/Recent"));
const SuccessfullSubstitution = lazy(() =>
  import("./pages/substitution/SuccessfullSubstitution")
);
const Printable = lazy(() => import("./pages/print/Printable"));

function App() {
  const { isOnline } = useNetworkStore();

  return (
    <div>
      {/* Show only when offline */}
      {!isOnline && (
        <div className="fixed top-0 left-0 h-[100dvh] w-[100vw] bg-black z-50 text-white flex items-center justify-center">
          App is offline
        </div>
      )}

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={<ProtectedRoute element={<Home />} />}
            />
            <Route
              path="/home/subdetails"
              element={<ProtectedRoute element={<SubstitutionDetails />} />}
            />
            <Route
              path="/addsubstitution"
              element={<ProtectedRoute element={<AddSubstitution />} />}
            />
            <Route
              path="/confirmsubstitution"
              element={<ProtectedRoute element={<ConfirmSubstitution />} />}
            />
            <Route
              path="/editsubstitution"
              element={<ProtectedRoute element={<EditSubstitutions />} />}
            />
            <Route
              path="/selecttype"
              element={<ProtectedRoute element={<SelectorPage />} />}
            />
            <Route
              path="/addsubstitution2"
              element={<ProtectedRoute element={<AddSubstitution2 />} />}
            />
            <Route
              path="/confirmsubstitution2"
              element={<ProtectedRoute element={<ConfirmSubstitution2 />} />}
            />
            <Route
              path="/recent"
              element={<ProtectedRoute element={<Recent />} />}
            />
            <Route
              path="/success"
              element={<ProtectedRoute element={<SuccessfullSubstitution />} />}
            />
            <Route
              path="/print"
              element={<ProtectedRoute element={<Printable />} />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
