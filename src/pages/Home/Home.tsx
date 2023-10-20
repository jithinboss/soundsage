import React, { memo, useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Dropdown, ListGroup } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//data
import { chartData, subscriptionRequest } from "../../services/Subscriptions"


interface IHome {

}
const Home: React.FC<IHome> = (props) => {
	const [subscriptionData, setSubscriptionData] = useState(subscriptionRequest);

	const mailTemplate = (rowData: any) => {
		return (
			<div>
				<a>{rowData?.email}</a>
			</div>
		)
	}

	return (
		<div className="content-area home-page">
			<div className="recent-courses">
				<Card>
					<Card.Body>
						<div className='card-title'>
							<h6>Recent Courses</h6>
						</div>
						<ListGroup className='course-list'>
							<ListGroup.Item >
								<span className='name'><a>Course 1</a>(Violin)</span>
								<span className='date'>12 Aug 2023</span>
							</ListGroup.Item>
							<ListGroup.Item >
								<span className='name'><a>Course 1</a>(Violin)</span>
								<span className='date'>12 Aug 2023</span>
							</ListGroup.Item>
							<ListGroup.Item >
								<span className='name'><a>Course 1</a>(Violin)</span>
								<span className='date'>12 Aug 2023</span>
							</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card>
			</div>
			<div className="subscription-chart">
				<Card>
					<Card.Body>
						<div className='card-title'>
							<h6>Courses Subscription</h6>
							<Dropdown>
								<Dropdown.Toggle variant="dropdown basic">
									Violin
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<div className='charts-wrapper'>
							<ResponsiveContainer>
								<BarChart data={chartData} margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}>
									<Bar dataKey="uv" fill="#A3A3F5" barSize={24} />
									<XAxis dataKey="name" axisLine={false} tickLine={false} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="subscription-requests">
				<Card>
					<Card.Body>
						<div className='card-title'>
							<h6>Subscription Requests</h6>
						</div>
						<div className='table-data'>
							<DataTable dataKey='key' value={subscriptionData} tableStyle={{ minWidth: '50rem' }}>
								<Column field="name" header="Name"></Column>
								<Column field="email" header="Email" body={mailTemplate}></Column>
								<Column field="phoneNumber" header="Phone Number"></Column>
								<Column field="requestedOn" header="Requested On"></Column>
								<Column field="discipline" header="Discipline"></Column>
							</DataTable>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	)

};

export default memo(Home);
