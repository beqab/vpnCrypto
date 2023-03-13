import React from "react";
import { Login } from "../../components/login";
import { useDispatch } from "react-redux";

import { fetchTodo } from "../../redux/actions";
import { Button } from "../../components/common/form";
import { IFetchTodoAction } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  return (
    <section className="homePage">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <Login />
          </div>
          <div className="col-md-7 text-right">
            <img
              height="560"
              src="./vpncrypto-protocol-gif-transparent.gif.gif.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
