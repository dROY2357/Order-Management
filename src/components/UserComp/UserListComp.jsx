import ListCard from "./ListCard";
const UserListComp = (props) => {
  console.log(props);
  return (
    <>
      <div className=" mt-[5vh]">
        {props.selectedUser.name && (
          <h1 className=" text-center text-3xl font-medium my-5">
            {props.type === "Customer" && `Would you like to place any orders?`}
            {props.type === "Seller" && `You have some orders to fulfill`}
          </h1>
        )}
        <div className="flex flex-wrap gap-6 ">
          {props.data
            ?.find((user) => user.name === props.selectedUser.name)
            ?.orders.map((order) => (
              <ListCard
                data={order}
                type={props.type}
                handleButton={props.handleButton}
                name={props.selectedUser.name}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default UserListComp;
