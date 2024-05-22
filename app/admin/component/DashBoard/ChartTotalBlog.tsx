"use client"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

type Uiews ={
    id:string,
    users: string;
    title:string
    createdAt:Date
    } 

type typee ={
    data:Uiews[]
    inshight:inshight
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

type inshight = {
  day:string
  num:string
}

const BarChartBlog = (props:typee) => {
 
  const currentDate = new Date();
  
 
let arr: any[] = []
let arrDay:any[] = []
  for(let i = 1; i <= Number(props.inshight.num) -1; i++) {
    if(i !== 0){

      const oneDayAgo = new Date(currentDate);
      oneDayAgo.setDate(currentDate.getDate() - i)
      arrDay.push(oneDayAgo.toString().slice(4,15))
     
      const data = props.data.filter((view) => {
        const createdAt = new Date(view.createdAt);
        return createdAt.toString().slice(4, 15) === oneDayAgo.toString().slice(4, 15);
     
      })
      arr.push(data.length)
    }
  }



    const chartData ={
        labels: arrDay,
        datasets: [
            {
                label: props.inshight.day,
                data:arr,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              }, 
        ]
      }
      const chartOptions = {
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
            }
        },
        maintainAspectRatio: false,
        responsive: true,
      }


  return (
      <div className=' w-full relative '>
     
        <Line data={chartData} options={chartOptions} />
      </div>
  );
};

export default BarChartBlog;