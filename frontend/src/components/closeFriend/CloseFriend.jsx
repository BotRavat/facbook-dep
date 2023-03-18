import './closeFriend.css';

export default function CloseFriend({user}){
    return(
        <li className='leftbarFriend'>
        <img className='leftbarFriendImage' src={user.profilePicture} alt='' />
        <span className='leftbarFriendName'>{user.username}</span>
           </li>
    )
}