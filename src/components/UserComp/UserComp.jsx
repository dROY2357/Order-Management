import UserListComp from "./UserListComp";

const UserComp = (props) => {
  return (
    <>
      <div className=" mx-[10%] my-5">
        {props.selectedUser ? (
          <UserListComp
            selectedUser={props.selectedUser}
            data={props.data}
            type={props.type}
            handleButton={props.handleButton}
          />
        ) : null}
      </div>
      {props.selectedComp === "Orders" ? (
        <footer>
          <button
            onClick={() => props.handleCompSelection("Home")}
            className="bg-blue-300 ml-[10%] w-[120px] p-1 mt-[2%]"
          >
            Go to Home
          </button>
        </footer>
      ) : null}
    </>
  );
};

export default UserComp;
