import React, { memo, useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//data
import { chartData, subscriptionRequest } from "../../services/Subscriptions"


interface IHome {

}
const Home: React.FC<IHome> = (props) => {
	const [subscriptionData, setSubscriptionData] = useState(subscriptionRequest);

	const mailTemplate=(rowData:any)=>{
		return(
			<div>
				<a>{rowData?.email}</a>
			</div>
		)
	}

	return (
		<>
			<div className="content-area content-area__bots">
				<div className="card">
					<BarChart width={150} height={40} data={chartData}>
						<Bar dataKey="uv" fill="#8884d8" />
					</BarChart>
					<DataTable dataKey='key' value={subscriptionData} tableStyle={{ minWidth: '50rem' }}>
						<Column field="name" header="Name"></Column>
						<Column field="email" header="Email" body={mailTemplate}></Column>
						<Column field="phoneNumber" header="Phone Number"></Column>
						<Column field="requestedOn" header="Requested On"></Column>
						<Column field="discipline" header="Discipline"></Column>
					</DataTable>
				</div>
			</div>
		</>
	);
};

export default memo(Home);
