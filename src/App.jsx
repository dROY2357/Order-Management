import { useState } from "react";
import "./App.css";
import data from "./data/data";
import UserComp from "./components/UserComp/UserComp";
import NavComp from "./components/NavComp";
import HomeComp from "./components/HomeComp/HomeComp";
import SelectionComp from "./components/SelectionComp";

function App() {
  const [selectedComp, setSelectedComp] = useState("");
  const [selectedUserType, setselectedUserType] = useState("");
  const [selectedUser, setSelectedUser] = useState({ type: "", name: "" });
  const [customers, setCustomers] = useState(data.customers);
  const [sellers, setSellers] = useState(data.sellers);
  const [notifs, setNotifs] = useState(data.notifications);

  //console.log(notifs);

  const typeSelect = (type) => {
    setselectedUserType(type);
    setSelectedUser({ type: "", name: "" });
    //console.log(selectedUserType);
  };

  const handleSelection = (e, name, type) => {
    console.log(`${name} ${type}`);
    console.log(selectedUserType);
    setSelectedUser({ type, name });
    e.target.value = "";
    setSelectedComp("Home");
  };

  const handleButton = (e, type, value, name, currName) => {
    //console.log(value + " " + name + " " + currName + " " + type);
    if (type === "Customer") {
      setCustomers(
        customers.map((customer) =>
          customer.name === currName
            ? {
                ...customer,
                orders: customer.orders.map((order) =>
                  order.name === name
                    ? {
                        ...order,
                        quantity: parseInt(order.quantity) + parseInt(value),
                      }
                    : order
                ),
              }
            : customer
        )
      );
      setSellers(
        sellers.map((seller) =>
          seller.name === name
            ? {
                ...seller,
                orders: seller.orders.map((order) =>
                  order.name === currName
                    ? {
                        ...order,
                        quantity: parseInt(order.quantity) + parseInt(value),
                      }
                    : order
                ),
              }
            : seller
        )
      );
      setNotifs(
        notifs.map((item) =>
          item.type === "seller"
            ? {
                ...item,
                data: item.data.map((dataInArr) => {
                  if (dataInArr.name === name) {
                    dataInArr.notifs.push(
                      `You have an order from ${currName} of ${value} products.`
                    );
                    return dataInArr;
                  } else {
                    return dataInArr;
                  }
                }),
              }
            : item
        )
      );
    } else if (type === "Seller") {
      setCustomers(
        customers.map((customer) =>
          customer.name === name
            ? {
                ...customer,
                orders: customer.orders.map((order) =>
                  order.name === currName ? { ...order, status: value } : order
                ),
              }
            : customer
        )
      );
      setNotifs(
        notifs.map((item) =>
          item.type === "customer"
            ? {
                ...item,
                data: item.data.map((dataInArr) => {
                  if (dataInArr.name === name) {
                    dataInArr.notifs.push(
                      `Status updated for your order from ${currName}. Status: ${
                        (value === "pending" && `Pending`) ||
                        (value === "progress" && `In Progress`) ||
                        (value === "delivered" && `Delivered successfully`)
                      }`
                    );
                    return dataInArr;
                  } else {
                    return dataInArr;
                  }
                }),
              }
            : item
        )
      );
    }
  };

  const handleCompSelection = (type) => {
    setSelectedComp(type);
  };

  return (
    <>
      <NavComp typeSelect={typeSelect} />
      {selectedUserType ? (
        selectedUserType === "" ? null : (
          <SelectionComp
            handleSelection={handleSelection}
            data={selectedUserType === "customer" ? customers : sellers}
            type={selectedUserType}
          />
        )
      ) : null}
      {selectedUser.name === ""
        ? null
        : selectedComp === "Home" && (
            <HomeComp
              handleCompSelection={handleCompSelection}
              selectedUser={selectedUser}
              selectedUserType={selectedUserType}
              notifData={
                notifs
                  .filter((item) => item.type === selectedUserType)[0]
                  .data.filter((data) => data.name === selectedUser.name)[0]
                  .notifs
              }
            />
          )}
      {selectedComp === "Orders" && selectedUserType === "customer" && (
        <UserComp
          selectedUser={selectedUser}
          data={customers}
          type="Customer"
          handleSelection={handleSelection}
          handleButton={handleButton}
          selectedComp={selectedComp}
          handleCompSelection={handleCompSelection}
        />
      )}
      {selectedComp === "Orders" && selectedUserType === "seller" && (
        <UserComp
          selectedUser={selectedUser}
          data={sellers}
          type="Seller"
          handleSelection={handleSelection}
          handleButton={handleButton}
          selectedComp={selectedComp}
          handleCompSelection={handleCompSelection}
        />
      )}
    </>
  );
}

export default App;
