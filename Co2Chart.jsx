import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

function Co2Chart({ dados }) {
  return (
    <div className="chart-card">
      <h2>Gráfico de emissão de CO₂</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="emissao" name="Emissão de CO₂" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Co2Chart;
