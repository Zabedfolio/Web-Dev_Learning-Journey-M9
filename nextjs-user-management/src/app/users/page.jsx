
const UsersPage = async() => {

    const res = await fetch('http://localhost:8000/users');
    const users = await res.json();
    console.log(users,"users");
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div className="grid grid-cols-3 gap-4 w-9/12 mx-auto">
                {
                    users.map(user => 
                        <div key={user.id} className="border-2 p4">
                            <h2>{user.name}</h2>
                            <h2>{user.email}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsersPage;