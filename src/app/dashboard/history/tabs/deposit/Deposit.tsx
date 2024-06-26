"use client";

import React, { useEffect, useState } from "react";
import TestingDeposit from "./TestingDeposit";
import FatherMotherDeposit from "./FatherMotherDeposit";

export default function Deposit() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);
  return (
    <div>
      {user && (
        <>
          {user.id === 1 && <TestingDeposit />}
          {user.id === 2 && <FatherMotherDeposit />}
        </>
      )}
    </div>
  );
}
