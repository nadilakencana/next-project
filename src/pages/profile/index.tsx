import { useSession } from "next-auth/react";

const ProfilePage = () =>{
    const {data} : any = useSession();
    return (
        <div className="">
            <h1>Profile Page</h1>
            {data ? (
                <div>
                    <p>Welcome, {data.user.fullname}</p>
                </div>
            ) : (
                <p>Please sign in to view your profile information.</p>
            )}
        </div>
    )
}

export default ProfilePage;