import React, { memo, useState } from 'react'
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { courses } from '../../services/Subscriptions';


interface ICourses {

}
const Courses: React.FC<ICourses> = (props) => {
  const [coursesData, setCoursesData] = useState(courses);

  const titleTemplate = (rowData: any) => {
    return (
      <div>
        <h5>{rowData.data.title}</h5>
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
          <button>New Topic</button>
        ) : (
          <>
            {rowData.data.isPrint &&
              <button>print</button>
            }
            {rowData.data.isVideo &&
              <button>Video</button>
            }
          </>
        )
        }
      </div>
    )
  }


  return (
    <div>
      <TreeTable value={coursesData} tableStyle={{ minWidth: '50rem' }}>
        <Column field="key" expander></Column>
        <Column field="title" body={titleTemplate}></Column>
        <Column field="isEdit" body={editTemplate}></Column>
        <Column field="courseType" body={courseTypeTemplate}></Column>
        <Column field="action" body={actionTemplate}></Column>
      </TreeTable>
    </div>
  )
}

export default memo(Courses)