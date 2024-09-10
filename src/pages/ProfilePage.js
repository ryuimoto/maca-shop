import React, { useState } from "react";
import { useAuth } from '../context/AuthContext';

function ProfilePage(){
    const { currentUser,updateProfile } = useAuth();
    const [name,setName] = useState(currentUser.name);
    const [email,setEmail] = useState(currentUser.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProfile({ name,email });
        alert('Profile updated successfully');
    };

    return(
        <form onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type="submit">Update Profile</button>
        </form>
    );

}

export default ProfilePage;