import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailPage = async({params}) => {

    const {userId}= await params;
    const user = await getUserById(userId);
    console.log(user,"user")

    return (
        <div>
            <h2>Details page</h2>
        </div>
    );
};

export default UserDetailPage;