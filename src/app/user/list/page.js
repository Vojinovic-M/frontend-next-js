'use client';
import Link from "next/link";
import useListData from "@/hooks/useListData";
import {useEffect, useState} from "react";
import {Spinner} from "reactstrap";
import DataTable from "react-data-table-component";

export const tableColumns = [
    {
        name: 'First Name',
        selector: (row) => `${row.firstName}`,
        sortable: false
    },
    {
        name: 'Last Name',
        selector: (row) => `${row.lastName}`,
        sortable: false
    }
]

export default function UserList() {

    const {pageNumber, setPageNumber} = useState(1);
    const {pageSize, setPageSize} = useState(10);

    const {getData, loading, data} = useListData(`user/get-page-list?pageNumber=${pageNumber-1}&pageSize=${pageSize}`);

    useEffect(() => {
        getData();
    }, []);

    console.log(data);
    return (
        <>
            <DataTable data={data.users}
                       columns={tableColumns}
                       striped={true}
                       noHeader={true}
                       pagination
                       paginationServer
                       progressPending={loading}
                       paginationTotalRows={data.totalElements}
                       progressComponent={<Spinner color="danger">Loading...</Spinner>}
                       paginationPerPage={10}
                       highlightOnHover
            </>
        </>
    );
}