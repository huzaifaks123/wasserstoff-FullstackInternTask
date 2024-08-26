// import styles from style modules
import styles from '../styles/pages.module.css'

// import different to present in dashboard
import BubbleChart from '../components/BubbleChart';
import ScatterPlot from '../components/ScatterChart';
import LinePlot from '../components/LinePlot';
import BarChart from '../components/BarChart';
import SWOTChart from '../components/SWOT';
import PieChart from '../components/PieChart';

// import required components
import { useSelector } from 'react-redux';
import { DataSelector } from '../redux/reducers/DashboardReducer';

// functio to renfer Dashboard
export default function DashboardPage() {

    // import data from reducer
    const { data } = useSelector(DataSelector)

    return (
        <>
            <div className={`container row gx-5 d-flex justify-content-between w-100 mx-0 p-2 ${styles.container}`}>
                <div className={`col-md-8 me-2 p-0 rounded ${styles.card}`}><SWOTChart /></div>
                <div className={`col-md rounded p-2 ${styles.card}`}><PieChart data={data} /></div>
            </div>
            <div className={`container row gx-5 d-flex justify-content-between w-100 mx-0 p-2 ${styles.container}`}>
                <div className={`col-md mx-1 rounded p-2 ${styles.card}`}><LinePlot data={data} /></div>
                <div className={`col-md mx-1 rounded p-2 ${styles.card}`}><BubbleChart data={data} /></div>
            </div>
            <div className={`container row gx-5 d-flex justify-content-between w-100 mx-0 p-2 ${styles.container}`}>
                <div className={`col-md mx-1 rounded p-2 ${styles.card}`}><BarChart data={data} /></div>
                <div className={`col-md mx-1 rounded p-2 ${styles.card}`}><ScatterPlot data={data} /></div>
            </div>
        </>
    )
}