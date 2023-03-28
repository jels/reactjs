import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesCharts from "./PiesCharts";

function App() {
  return (
    <div>
      <h1 className="bg-info text-center font-monospace fw-bold lh-base">Graficos ChartJs</h1>
      <div>
        <p className="m-2"><b> Ejemplo #1</b> Grafico de lineas basico</p>
        <div class="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"230px"}}>
          <LinesChart />
        </div>
      </div>
      <hr class="mt-3 mb-2"/>
      <div>
          <p class="m-2"><b>Ejemplo #2: </b>Grafico de barras</p>
          <div class="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"230px"}}>
            <BarsChart />   
          </div>   
      </div>
      <hr class="mt-3 mb-2"/>
      <div>
          <p class="m-2"><b>Ejemplo #2: </b>Grafico de barras</p>
          <div class="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px",height:"230px"}}>
          <PiesCharts />   
          </div>
      </div>
      <br/>
    </div>
    
  );
}

export default App;
