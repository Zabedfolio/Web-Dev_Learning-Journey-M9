import UsersTable from '@/app/components/UsersTable';
import { getUsers } from '@/app/lib/data';
import React from 'react';

const UsersPage = async() => {


    const users = await getUsers();



    return (
        <div>
            <h2>
                 Users management: {users.length}
                 <UsersTable users={users}></UsersTable>
            </h2>
           
        </div>
    );
};

export default UsersPage;