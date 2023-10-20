import React, { memo, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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
          <span key={key}>{item}&nbsp;</span>
        ))}
        <button>settings</button>
      </div>
    )
  }

  return (
    <div>
      <DataTable dataKey='key' value={subscriptionsData} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email" body={mailTemplate}></Column>
        <Column field="phoneNumber" header="Phone Number"></Column>
        <Column field="joinedOn" header="Joined On"></Column>
        <Column field="discipline" header="Discipline" body={disciplineTemplate}></Column>
      </DataTable>
    </div>
  )
}

export default memo(Subsriptions)