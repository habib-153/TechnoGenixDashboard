import  { PureComponent } from 'react';
import { PieChart, Pie, Cell,Text } from 'recharts';

const data = [
    { name: 'Facebook', value: 330 },
    { name: 'Youtube', value: 550 },
    { name: 'Direct Search', value: 120 },

];
const COLORS = ['#9A52DA', '#EF5350', '#0466C2'];

export default class Example extends PureComponent {
  

    render() {
        return (
            <PieChart width={300} height={300} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <svg
                        width={100} // Adjust size as needed
                        height={100} // Adjust size as needed
                        viewBox="0 0 100 100"
                    // style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                    >

                        <Text dominantBaseline="central" textAnchor="middle">
                            Your Text Here
                        </Text>

                    </svg>
                </Pie>
               
            </PieChart>
        );
    }
}
