import axios from "axios";
import { BarChart, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Histogram from "./Components/Histogram/Histogram";

function App() {
  var res;
  var sorted;
  const [dataa, setdata] = useState([]);
  const [stat, setstat] = useState(false);
  function doit() {
    getData();
  }
  async function getData() {
    try {
      res = await axios.get("https://www.terriblytinytales.com/test.txt");
      const words = res.data.split(' ');
      // console.log(fruits);

      const count = {};

      for (const element of words) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
      }
      var array = [];
      for (var key in count) {
        array.push({
          name: key,
          value: count[key]
        });
      }

      sorted = array.sort(function (a, b) {
        return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0)
      });
      console.log(sorted.length);
      array.splice(20, sorted.length - 19);

      setdata(array);
      setstat(true);
      console.log(array);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {
        stat ? <div></div> : <button onClick={doit}>submit</button>
      }
      <Histogram dataa={dataa} stat={stat} />
    </div>
  );
}

export default App;
