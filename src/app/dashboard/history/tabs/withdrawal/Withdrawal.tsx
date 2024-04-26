"use client";

import React, { useEffect, useState } from "react";
import TestingWithdrawal from "./TestingWithdrawal";
import FatherMotherWithdrawal from "./FatherMotherWithdrawal";

export default function Withdrawal() {
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
          {user.id === 1 && <TestingWithdrawal />}
          {user.id === 2 && <FatherMotherWithdrawal />}
        </>
      )}
    </div>
  );
}
