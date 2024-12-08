import { dataMenu, MenuMobile, navBarMobile } from "@/utils/navbar";
import { Drawer } from "antd";
import Link from "next/link";

type Props = {
  setOpen: any;
  isOpen: boolean;
};

const DrawerComponent = (props: Props) => {
  const { setOpen, isOpen } = props;

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      width={350}
      closable={false}
      placement="left"
      onClose={onClose}
      open={isOpen}
      rootStyle={{ padding: 0 }}
    >
      {dataMenu.map((item: any, idx: number) => (
        <div key={idx} className="border-t">
          {item.map((list: any) => (
            <Link
              className="flex items-center gap-3 py-2 text-text-1 px-6 "
              key={list.id}
              href={list.href}
            >
              <div className="max-w-6 w-full flex ">{list.icon}</div>
              <div className="text-text2">{list.label}</div>
            </Link>
          ))}
        </div>
      ))}
    </Drawer>
  );
};

export default DrawerComponent;
