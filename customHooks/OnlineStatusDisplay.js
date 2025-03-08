import React from "react";

import useOnlineStatus from "./useOnlineStatus";

// Custom Hook to check if the user is online

function OnlineStatusDisplay() {
  const online = useOnlineStatus();

  return (
    <div>
      <p>You are {online ? "online" : "offline"}</p>
    </div>
  );
}

export default OnlineStatusDisplay;
