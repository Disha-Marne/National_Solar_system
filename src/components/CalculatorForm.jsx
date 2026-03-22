import { useState } from "react";
import "./CalculatorForm.css"; // we’ll create this next

function CalculatorForm() {
  const [dailyUsage, setDailyUsage] = useState("");
  const [sunlightHours, setSunlightHours] = useState("");
  const [panelWattage, setPanelWattage] = useState("");
  const [requiredPanels, setRequiredPanels] = useState(null);

  const calculatePanels = () => {
    if (!dailyUsage || !sunlightHours || !panelWattage) return;
    const panels = Math.ceil((dailyUsage * 1000) / (sunlightHours * panelWattage));
    setRequiredPanels(panels);
  };

  return (
    <div className="calculator-card">
      <h2>Solar Panel Calculator</h2>
      <div className="input-group">
        <label>Daily Energy Usage (kWh):</label>
        <input
          type="number"
          value={dailyUsage}
          onChange={(e) => setDailyUsage(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Sunlight Hours per Day:</label>
        <input
          type="number"
          value={sunlightHours}
          onChange={(e) => setSunlightHours(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Panel Wattage (W):</label>
        <input
          type="number"
          value={panelWattage}
          onChange={(e) => setPanelWattage(e.target.value)}
        />
      </div>

      <button onClick={calculatePanels}>Calculate</button>

      {requiredPanels !== null && (
        <div className="result">
          You need {requiredPanels} solar panel(s)
        </div>
      )}
    </div>
  );
}

export default CalculatorForm;
