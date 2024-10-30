import Link from "next/link";

export default function UserList() {


    return (
        <>
            <h2>User List Page!</h2>
            <br/>
            <Link href="/user/create">Go to User Create page</Link>
        </>
    );
}