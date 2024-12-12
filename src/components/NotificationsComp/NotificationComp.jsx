const NotificationComp = (props) => {
  return (
    <>
      <header className="mx-[30%] font-semibold text-2xl">
        You have some notifications!
      </header>
      <div className="bg-white mx-[30%] p-5 h-[45vh]">
        <ul className="list-none">
          {props.notifData?.map((notif) => (
            <li>{notif}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NotificationComp;
