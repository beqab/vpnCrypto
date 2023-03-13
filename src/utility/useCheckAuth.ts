import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthorizationToken } from "../api/axios-with-token";
import { AuthService } from "../api/auth/auth.http";
import { SetUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = (redirect = true) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loadUser, setLoadUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!(window as any).hasCheckedAuth) {
        // debugger;
        setAuthorizationToken(localStorage.getItem("token")!);
        // if (localStorage.getItem("user")) {
        //   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("user"))));
        // } else {
        if (!loadUser) {
          setLoadUser(true);
          AuthService.getUser(localStorage.getItem("token"))
            .then(res => {
              (window as any).hasCheckedAuth = true;
              dispatch(SetUser(res.data.user));
              setLoadUser(false);
            })
            .catch(err => {
              setLoadUser(false);

              localStorage.removeItem("token");
              localStorage.removeItem("user");
              if (redirect) {
                navigate("/login");
              }

              // console.log(err);
            });
        }
        // }
      }
    } else {
      if (redirect) {
        navigate("/login");
      }
    }
  }, []);
};
//
