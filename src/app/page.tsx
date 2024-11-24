import HomePage from "./home/page";

import { isMobile } from "react-device-detect";

export default function Home() {
  const renderContent = () => {
    if (isMobile) {
      return <div> This content is available only on mobile</div>;
    }
    return <HomePage />;
  };
  return renderContent();
}
