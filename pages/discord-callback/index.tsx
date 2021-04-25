import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

export default function index({ data }) {
  useEffect(() => {
    const fetchUser = async () => {
      const code = window.location.search.replace("?code=", "");
      const res = await axios.post(
        "https://akashi.nekyou.com/v2/api/auth/discord/",
        {
          code: code,
        }
      );
      console.log(res);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="flex">Redirect</div>
    </div>
  );
}
