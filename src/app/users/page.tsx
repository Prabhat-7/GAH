import db from "@/lib/db";

export default async function Users() {
  const users = await db.user.findMany();

  return (
    <div>
      <h1>Users</h1>

      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Mobile No: {user.mobile_no}</p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
