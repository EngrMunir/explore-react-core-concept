import './Friends.css';

const Friend = ({friend}) => {
    const {name, email}= friend;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <h3>Email: {email}</h3>            
        </div>
    );
};

export default Friend;