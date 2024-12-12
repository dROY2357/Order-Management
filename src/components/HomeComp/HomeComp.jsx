import NotificationComp from "../NotificationsComp/NotificationComp";

const HomeComp = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between h-[75vh]">
        <header>
          <h1 className="font-medium text-4xl text-center mt-[1vh]">
            Hi! {props.selectedUser.name}
          </h1>
        </header>
        <NotificationComp notifData={props.notifData} />
        <footer>
          <button
            onClick={() => props.handleCompSelection("Orders")}
            className="bg-blue-300 ml-[10%] w-[120px] p-1"
          >
            Go to Orders
          </button>
        </footer>
      </div>
    </>
  );
};

export default HomeComp;
