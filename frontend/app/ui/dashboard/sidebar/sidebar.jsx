import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineTravelExplore,
  MdFormatListBulletedAdd,
  MdPersonPinCircle,
  MdLocalTaxi,
  MdAttachMoney,
  MdEditDocument,
  MdOutlineQuestionMark,
  MdOutlineQuestionAnswer,
  MdOutlineAdminPanelSettings,
  MdLogout,
} from "react-icons/md";
import Image from "next/image";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Link from "next/link";

const menuItems = [
  {
    title: "Páginas",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/avatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Tomas Schattmann</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <Link href="/login">
        <button className={styles.logout}>
          <MdLogout />
          Cerrar sesión
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
