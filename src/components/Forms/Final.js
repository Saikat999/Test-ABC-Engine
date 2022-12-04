import React from "react";
import Table from 'react-bootstrap/Table';
import jsPDF from "jspdf";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const sampledata = [
    {
      kp: 0,
      xValue: 585281.709,

    },
    {
      kp: 1,
      xValue: 585282.224,

    },
    {
      kp: 2,
      xValue: 585282.7391,

    },
    {
      kp: 3,
      xValue: 585283.2541,

    },
    {
      kp: 4,
      xValue: 585283.7692,

    },
    {
      kp: 5,
      xValue: 585284.2842,

    },
    {
      kp: 6,
      xValue: 585284.7992,

    },
    {
      kp: 7,
      xValue: 585285.3143,

    },
    {
      kp: 8,
      xValue: 585285.8293,

    },
    {
      kp: 9,
      xValue: 585286.3443,

    }
  ];

const Final = ({ values }) => {

    //destructuring the object from values
  const { projectName, projectDescription, client, contractor, maxX, minX, maxY, minY, maxZ,minZ } = values;



const pdfGenerate = () =>{
    let doc = new jsPDF('p', 'pt','a4');
    doc.html(document.getElementById("content"),{
        "width": 100,
        callback: function(pdf){
            let pageCount = doc.internal.getNumberOfPages();
            doc.deletePage(pageCount);
            pdf.save("generated.pdf");
        }
    })

}


  return (
    <>
        <div id="content" className="result-table mt-5">
            <h2 className="text-center mb-5">Result Table</h2>
            <Table striped bordered>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Project Description</th>
                        <th>Client</th>
                        <th>Contractor</th>
                        <th>Max-X</th>
                        <th>Min-X</th>
                        <th>Max-Y</th>
                        <th>Min-Y</th>
                        <th>Max-Z</th>
                        <th>Min-Z</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>{projectName}{" "}</td>
                        <td>{projectDescription}{" "}</td>
                        <td>{client}{" "}</td>
                        <td>{contractor}{" "}</td>
                        <td>{maxX}{" "}</td>
                        <td>{minX}{" "}</td>
                        <td>{maxY}{" "}</td>
                        <td>{minY}{" "}</td>
                        <td>{maxZ}{" "}</td>
                        <td>{minZ}{" "}</td>
                        </tr>
                    
                    </tbody>
            </Table>

        </div>
        <button onClick={pdfGenerate} className="btn btn-success mt-5">Download Result</button>

       {/* show the result in line chart */}
        <h2 className="chart-heading mt-5">Result Chart</h2>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={sampledata} width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kp" interval={'preserveStartEnd'} />
            <YAxis dataKey="xValue" interval={'preserveStartEnd'} />
            <Line type="monotone" dataKey="xValue" stroke="red" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </>
  );
};

export default Final;