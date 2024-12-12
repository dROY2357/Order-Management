import styles from "./NavComp.module.css";
const NavComp = ({ typeSelect }) => {
  return (
    <>
      <nav className={`${styles.navbar} top-0 py-3 drop-shadow-md`}>
        <h2 className="text-3xl mx-[5%] my-2 font-semibold">
          Order Management
        </h2>
        <ul className=" list-none flex flex-row gap-4 mx-[7%] font-medium text-2xl my-1 mt-5">
          <li
            onClick={() => {
              return typeSelect("customer");
            }}
            className=" hover:cursor-pointer"
          >
            Customers
          </li>
          <li
            onClick={() => {
              return typeSelect("seller");
            }}
            className="hover:cursor-pointer"
          >
            Sellers
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavComp;
