import React, { memo, useState, useEffect, useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//Icons
//Components
//data
import { SubscriptionsServices } from "../../services/Subscriptions"

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


	const [subscriptionsRequests, setSubscriptionsRequests] = useState<Requests[]>([]);

	// useEffect(() => {
	// 	subscriptionsRequests.getSubscriptionsRequests().then(data => setSubscriptionsRequests(data));
	// }, []);

	return (
		<>
			<div className="content-area content-area__bots">
				<div className="card">
					<DataTable value={subscriptionsRequests} tableStyle={{ minWidth: '50rem' }}>
						<Column field="code" header="Code"></Column>
						<Column field="name" header="Name"></Column>
						<Column field="category" header="Category"></Column>
						<Column field="quantity" header="Quantity"></Column>
					</DataTable>
				</div>
			</div>
		</>
	);
};

export default memo(Home);
