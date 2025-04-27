import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Steps } from "antd";
import Step1Basics   from "./steps/Step1Basics";
import Step2Location from "./steps/Step2Location";
import Step3Date     from "./steps/Step3Date";
import Step4Review   from "./steps/Step4Review";

const stepRoutes = ["step-1","step-2","step-3","review"];

export default function CreateTaskWizard() {
  const location = useLocation();
  const current = stepRoutes.findIndex(r => location.pathname.endsWith(r));

  return (
    <div style={{ maxWidth: 720, margin: "40px auto" }}>
      <Steps current={current === -1 ? 0 : current}
            items={[{title:"Básicos"},{title:"Zona"},{title:"Fecha"},{title:"Revisar"}]} />
      <div style={{ marginTop: 32, background:"#fff", padding:32, borderRadius:20 }}>
        <Routes>
          <Route index      element={<Navigate to="step-1" />} />
          <Route path="step-1" element={<Step1Basics />} />
          <Route path="step-2" element={<Step2Location />} />
          <Route path="step-3" element={<Step3Date />} />
          <Route path="review" element={<Step4Review />} />
        </Routes>
      </div>
    </div>
  );
}
