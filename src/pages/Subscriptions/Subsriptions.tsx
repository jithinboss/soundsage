import React, { memo, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "react-bootstrap";
//data
import { subscriptions } from "../../services/Subscriptions"



interface ISubsriptions {

}
const Subsriptions: React.FC<ISubsriptions> = (props) => {

	const [subscriptionsData, setSubscriptionsData] = useState(subscriptions);

	const mailTemplate = (rowData: any) => {
		return (
			<div>
				<a>{rowData?.email}</a>
			</div>
		)
	}


	const disciplineTemplate = (rowData: any) => {
		return (
			<div>
				{rowData?.discipline?.map((item: any, key: any) => (
					<span key={key}>{item}&nbsp;&nbsp;&nbsp;</span>
				))}
				<a style={{ marginLeft: "16px" }}>Settings</a>
			</div>
		)
	}

	return (
		<div className="content-area subscriptions">
			<Card>
				<Card.Body>
					<div className='table-data'>
						<div className='title'>
							<h5>Courses</h5>
						</div>
						<DataTable dataKey='key' value={subscriptionsData}>
							<Column field="name" header="Name"></Column>
							<Column field="email" header="Email" body={mailTemplate}></Column>
							<Column field="phoneNumber" header="Phone Number"></Column>
							<Column field="joinedOn" header="Joined On"></Column>
							<Column field="discipline" header="Discipline" body={disciplineTemplate}></Column>
						</DataTable>
					</div>
				</Card.Body>
			</Card>
		</div>

	)
}

export default memo(Subsriptions)