import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SectionA from "./components/SectionA";
import SectionII from "./components/SectionII";
import SectionIII from "./components/SectionIII";
import SectionIV from "./components/SectionIV";
import SectionV from "./components/SectionV";
import SectionVI from "./components/SectionVI";
import SectionVII from "./components/SectionVII";
import SectionVIII from "./components/SectionVIII";
import SubmitPage from "./pages/SubmitPage";

function App() {
  const [formData, setFormData] = useState({});

  const saveData = (sectionKey, data) => {
    setFormData((prev) => ({ ...prev, [sectionKey]: data }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SectionA onNext={(data) => saveData("sectionA", data)} />} />
        <Route path="/sectionII" element={<SectionII onNext={(data) => saveData("sectionII", data)} />} />
        <Route path="/sectionIII" element={<SectionIII onNext={(data) => saveData("sectionIII", data)} />} />
        <Route path="/sectionIV" element={<SectionIV onNext={(data) => saveData("sectionIV", data)} />} />
        <Route path="/sectionV" element={<SectionV onNext={(data) => saveData("sectionV", data)} />} />
        <Route path="/sectionVI" element={<SectionVI onNext={(data) => saveData("sectionVI", data)} />} />
        <Route path="/sectionVII" element={<SectionVII onNext={(data) => saveData("sectionVII", data)} />} />
        <Route path="/sectionVIII" element={<SectionVIII onNext={(data) => saveData("sectionVIII", data)} />} />
        <Route path="/submit" element={<SubmitPage formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
