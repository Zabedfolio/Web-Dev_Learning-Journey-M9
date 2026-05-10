import AddUserModal from '@/app/components/AddUserModal';
import UsersTable from '@/app/components/UsersTable';
import { createUser, deleteUser } from '@/app/lib/actions';
import { getUsers } from '@/app/lib/data';
import React from 'react';

const UsersPage = async() => {


    const users = await getUsers();



    return (
        <div className='container mx-auto'>
            <h2>
                 
                 <div className='flex justify-between mt-10 items-center container mx-auto'>
                    Users management: {users.length}
                    <AddUserModal createUserAction={createUser}></AddUserModal>
                 </div>
                 <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
            </h2>
           
        </div>
    );
};

export default UsersPage;