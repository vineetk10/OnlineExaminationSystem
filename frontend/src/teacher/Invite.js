// import React,{useEffect,useState} from 'react'
// import { Dropdown } from 'react-bootstrap'
// import "../css/Invite.css";
// import Sidebar from "../core/Sidebar"
// import Base from '../core/Base';
// import { Container,Row,Col } from 'react-bootstrap';
// import "../css/Sidebar.css";
// import {GetAllUsers} from "../user/helper/userapicalls"
// import DataTable from 'react-data-table-component';

// export default function Invite() {
//     const [papers,setPapers] = useState([]);
//     const [users,setUsers] = useState([]);
    
//     useEffect(() => {
//           if (typeof window != "undefined" && localStorage.getItem("papers")) {
//             setPapers(JSON.parse(localStorage.getItem("papers")));
//           }
//           setUsers(GetAllUsers());
//     }, [])
//     return (
//         <Base title="Online Examination" className="Invite" description="Invite Students">
//             <Container fluid>
//                 <Row>
//                     <Col className="sidebarInvite col-md-4 col-lg-4">
//                     <Sidebar/>
//                     </Col>
//                     <Col className="col-md-8 col-lg-8">
//                         <table className="table">
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                     Question Paper 
//                                     </td>   
//                                     <td>
//                                         <Dropdown>
//                                             <Dropdown.Toggle variant="warning" id="dropdown-basic">
//                                                 Choose Question Paper
//                                             </Dropdown.Toggle>
//                                                 <Dropdown.Menu>
//                                                     {papers.map((paper,index)=>{
//                                                        return <Dropdown.Item href="#/action-1">{paper.paperTitle}</Dropdown.Item>
                                                        
//                                                     })}
//                                                 </Dropdown.Menu>
//                                         </Dropdown>
//                                     </td>         
//                                 </tr>
//                             </tbody>
//                         </table>
//                         <DataTable title="Arnold Movies" data={users}/>
//                     </Col>
//                 </Row>
//                 </Container>
//         </Base>
       
//     )
// }