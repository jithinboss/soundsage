import React, { memo, useState, useEffect, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card, ListGroup, Dropdown } from 'react-bootstrap';
//Icons
//Components
//data


interface Requests {

	id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;

}

interface IHome {

}

const Home: React.FC<IHome> = (props) => {


	return (
		<>
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
							</div>
							<Dropdown>
								<Dropdown.Toggle variant="dropdown basic">
									Dropdown Button
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
					</Card>
				</div>
				<div className="subscription-requests">
					<Card>
						<Card.Body>
							<div className='card-title'>
								<h6>Subscription Requests</h6>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	);
};

export default memo(Home);
