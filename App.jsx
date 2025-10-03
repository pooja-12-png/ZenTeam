import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SectionA from "./components/SectionA.jsx";
import SectionB from "./components/SectionB.jsx";
import SectionII from "./components/SectionII.jsx";
import SectionIII from "./components/SectionIII.jsx";
import SectionIV from "./components/SectionIV.jsx";
import SectionV from "./components/SectionV.jsx";
import SectionVI from "./components/SectionVI.jsx";
import SectionVII from "./components/SectionVII.jsx";
import SectionVIII from "./components/SectionVIII.jsx";
import SubmitPage from "./pages/SubmitPage.jsx";
import NavigationPage from "./pages/NavigationPage.jsx";

function App() {
  const [formData, setFormData] = useState({});

  const saveData = (sectionKey, data) => {
    setFormData((prev) => ({ ...prev, [sectionKey]: data }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigationPage />} />
        <Route
          path="/sectionA"
          element={<SectionA onNext={(data) => saveData("sectionA", data)} />}
        />
        <Route
          path="/sectionB"
          element={<SectionB onNext={(data) => saveData("sectionB", data)} />}
        />
        <Route
          path="/sectionII"
          element={<SectionII onNext={(data) => saveData("sectionII", data)} />}
        />
        <Route
          path="/sectionIII"
          element={
            <SectionIII onNext={(data) => saveData("sectionIII", data)} />
          }
        />
        <Route
          path="/sectionIV"
          element={<SectionIV onNext={(data) => saveData("sectionIV", data)} />}
        />
        <Route
          path="/sectionV"
          element={<SectionV onNext={(data) => saveData("sectionV", data)} />}
        />
        <Route
          path="/sectionVI"
          element={<SectionVI onNext={(data) => saveData("sectionVI", data)} />}
        />
        <Route
          path="/sectionVII"
          element={
            <SectionVII onNext={(data) => saveData("sectionVII", data)} />
          }
        />
        <Route
          path="/sectionVIII"
          element={
            <SectionVIII onNext={(data) => saveData("sectionVIII", data)} />
          }
        />
        <Route path="/submit" element={<SubmitPage formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
