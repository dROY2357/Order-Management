import { useRef } from "react";
const ListCard = (props) => {
  const selectionRef = useRef();
  return (
    <>
      <div className=" mx-auto h-[20vh] min-w-[45%] rounded-md bg-white drop-shadow-sm px-[3%] py-[1%] flex flex-col justify-between mt-[5vh]">
        <div className="font-semibold text-2xl">
          {props.type === `Customer` && `Seller Name: `}
          {props.type === `Seller` && `Customer Name: `}
          {props.data.name}
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-sm px-2 py-1">
            <div>Order Quantity: {props.data.quantity}</div>
            {props.type === "Customer" && (
              <div>
                Order Status:{" "}
                {(props.data.status === "delivered" && `Delivered`) ||
                  (props.data.status === "progress" && `In Progress`) ||
                  (props.data.status === "pending" && `Pending`)}
              </div>
            )}
          </div>

          <div className="flex flex-row justify-end items-end min-w-[60%] gap-4">
            {props.type === "Customer" && (
              <input
                className=" w-[30%] text-sm px-2 py-1 h-[2rem]"
                type="number"
                placeholder="Quantity"
                name="qty"
                ref={selectionRef}
              ></input>
            )}
            {props.type === "Seller" && (
              <select className="text-sm h-[2rem]" ref={selectionRef}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="pending">Pending</option>
                <option value="progress">In Progress</option>
                <option value="delivered">Delivered</option>
              </select>
            )}
            <button
              onClick={(e) => {
                const selectedValue = selectionRef.current.value;
                selectionRef.current.value = "";
                return props.handleButton(
                  e,
                  props.type,
                  selectedValue,
                  props.data.name,
                  props.name
                );
              }}
              className=" bg-blue-300 px-2 py-1 text-sm h-[2rem]"
            >
              {props.type === "Customer" ? `Place Order` : `Update Status`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
