import React, { memo, useState } from 'react'
import { Card } from "react-bootstrap";
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { courses } from '../../services/Subscriptions';
//icons
import { PiPrinterFill } from "react-icons/pi";
import { MdVideocam } from "react-icons/md";


interface ICourses {

}
const Courses: React.FC<ICourses> = (props) => {
	const [coursesData, setCoursesData] = useState(courses);

	const titleTemplate = (rowData: any) => {
		return (
			<div>
				<h6>{rowData.data.title}</h6>
			</div>
		)
	}

	const editTemplate = (rowData: any) => {
		return (
			<div>
				{rowData.data.isEdit &&
					<a>Edit</a>
				}
			</div>
		)
	}

	const courseTypeTemplate = (rowData: any) => {
		return (
			<div>
				<span>{rowData.data.courseType}</span>
			</div>
		)
	}

	const actionTemplate = (rowData: any) => {
		return (
			<div>
				{rowData.data.isNewTopic ? (
					<span style={{ marginLeft: "16px" }}>New Topic</span>
				) : (
					<>
						{rowData.data.isPrint &&
							<PiPrinterFill style={{ marginLeft: "16px" }} />
						}
						{rowData.data.isVideo &&
							<MdVideocam style={{ marginLeft: "16px" }} />
						}
					</>
				)
				}
			</div>
		)
	}


	return (
		<div className="content-area courses">
			<Card>
				<Card.Body>
					<div className='table-data'>
						<div className='title'>
							<h5>Courses</h5>
						</div>
						<TreeTable value={coursesData} >
							<Column field="key" expander></Column>
							<Column field="title" body={titleTemplate}></Column>
							<Column field="isEdit" body={editTemplate}></Column>
							<Column field="courseType" body={courseTypeTemplate}></Column>
							<Column field="action" body={actionTemplate}></Column>
						</TreeTable>
					</div>
				</Card.Body>
			</Card>

		</div>
	)
}

export default memo(Courses)