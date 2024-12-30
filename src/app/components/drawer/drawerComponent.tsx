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
          {item.map((list: any, idx: number) => (
            <Link
              className="flex items-center gap-4 py-2 text-text-1 px-6 "
              key={idx}
              href={list.href}
              onClick={onClose}
            >
              <div className="max-w-6 w-full flex ">{list.icon}</div>
              <div className="text-text2 text-base flex justify-between w-full">
                {list.label}{" "}
                {list.language && (
                  <span className="font-bold ">{list.language}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </Drawer>
  );
};

export default DrawerComponent;
