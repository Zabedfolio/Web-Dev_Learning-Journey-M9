import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, Modal, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
    const { userId } = await params;

    const user = await getUserById(userId);
    console.log("editing user", user);

    const updateUserWrapper = async(formData)=>{
        'use server'
        return updateUser(userId, formData);
    }

    return (
        <div className='container mx-auto mt-8'>
            <h2 className='text-center'>User Name: {user?.name}</h2>
            <div className='w-1/3 mx-auto mt-10 shadow-md p-10 rounded-xl'>
                <form action={updateUserWrapper} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="tel" defaultValue={user.role}>
                        <Label>Role</Label>
                        <Input placeholder="Enter user role" />
                    </TextField>

                    <div className='flex gap-3 mt-3'>
                        <Button slot="close" type="submit">Update User</Button>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default UserEditPage;