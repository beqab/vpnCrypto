import React from "react";
import { Button } from "../components/common/form";

export const Dashboard = () => {
  return (
    <div>
      <div className="dashboardInfoLine">
        <div className="row">
          <div className="col-md-3  ">
            <div className="dashboardInfoLine_card w-100 d-flex align-items-center">
              <div>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.114288"
                    width="40.1429"
                    height="40"
                    rx="8.32639"
                    fill="#212121"
                  />
                  <path
                    d="M27.5001 15.8334L20.0001 11.6667L12.5001 15.8334V24.1667L20.0001 28.3334L27.5001 24.1667V15.8334ZM20.0001 13.5751L24.9251 16.3084L22.4168 17.7001C21.8085 17.0667 20.9501 16.6667 20.0001 16.6667C19.0501 16.6667 18.1918 17.0667 17.5835 17.7001L15.0751 16.3084L20.0001 13.5751ZM19.1668 25.9667L14.1668 23.1917V17.7167L16.7751 19.1667C16.7001 19.4251 16.6668 19.7084 16.6668 20.0001C16.6668 21.5501 17.7251 22.8584 19.1668 23.2251V25.9667ZM18.3335 20.0001C18.3335 19.0834 19.0835 18.3334 20.0001 18.3334C20.9168 18.3334 21.6668 19.0834 21.6668 20.0001C21.6668 20.9167 20.9168 21.6667 20.0001 21.6667C19.0835 21.6667 18.3335 20.9167 18.3335 20.0001ZM20.8335 25.9667V23.2334C22.2751 22.8667 23.3335 21.5584 23.3335 20.0084C23.3335 19.7167 23.3001 19.4334 23.2251 19.1667L25.8335 17.7167V23.1917L20.8335 25.9667Z"
                    fill="#FF5301"
                  />
                </svg>
              </div>
              <div className="dashboardInfoLine_testBox">
                <span className="dashboardInfoLine_subTitle">Held tokens</span>
                <div className="dashboardInfoLine_title">
                  Your reserved tokens 0
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="dashboardInfoLine_card w-100 d-flex align-items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8.32639" fill="#212121" />
                  <path
                    d="M19.5 30H19.2344C19.1458 30 19.0661 29.9831 18.9953 29.9494C16.6755 29.2583 14.763 27.8886 13.2578 25.8402C11.7526 23.7925 11 21.5297 11 19.0518V14.2731C11 13.8517 11.1286 13.4724 11.3857 13.1353C11.6421 12.7981 11.974 12.5537 12.3813 12.402L18.7563 10.1264C19.0042 10.0421 19.2521 10 19.5 10C19.7479 10 19.9958 10.0421 20.2437 10.1264L26.6188 12.402C27.026 12.5537 27.3582 12.7981 27.6154 13.1353C27.8718 13.4724 28 13.8517 28 14.2731V19.0518C28 21.5297 27.2474 23.7925 25.7422 25.8402C24.237 27.8886 22.3245 29.2583 20.0047 29.9494C19.9161 29.9831 19.7479 30 19.5 30ZM19.5 27.952C21.3417 27.3957 22.8646 26.2832 24.0687 24.6144C25.2729 22.9456 25.875 21.0914 25.875 19.0518V14.2731L19.5 11.9975L13.125 14.2731V19.0518C13.125 21.0914 13.7271 22.9456 14.9312 24.6144C16.1354 26.2832 17.6583 27.3957 19.5 27.952Z"
                    fill="#FF5301"
                  />
                </svg>
              </div>
              <div className="dashboardInfoLine_testBox">
                <span className="dashboardInfoLine_subTitle">VPN Access</span>
                <div className="dashboardInfoLine_title">Free</div>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="dashboardInfoLine_card w-100 d-flex align-items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8.32639" fill="#212121" />
                  <path
                    d="M19.5 30H19.2344C19.1458 30 19.0661 29.9831 18.9953 29.9494C16.6755 29.2583 14.763 27.8886 13.2578 25.8402C11.7526 23.7925 11 21.5297 11 19.0518V14.2731C11 13.8517 11.1286 13.4724 11.3857 13.1353C11.6421 12.7981 11.974 12.5537 12.3813 12.402L18.7563 10.1264C19.0042 10.0421 19.2521 10 19.5 10C19.7479 10 19.9958 10.0421 20.2437 10.1264L26.6188 12.402C27.026 12.5537 27.3582 12.7981 27.6154 13.1353C27.8718 13.4724 28 13.8517 28 14.2731V19.0518C28 21.5297 27.2474 23.7925 25.7422 25.8402C24.237 27.8886 22.3245 29.2583 20.0047 29.9494C19.9161 29.9831 19.7479 30 19.5 30ZM19.5 27.952C21.3417 27.3957 22.8646 26.2832 24.0687 24.6144C25.2729 22.9456 25.875 21.0914 25.875 19.0518V14.2731L19.5 11.9975L13.125 14.2731V19.0518C13.125 21.0914 13.7271 22.9456 14.9312 24.6144C16.1354 26.2832 17.6583 27.3957 19.5 27.952Z"
                    fill="#FF5301"
                  />
                </svg>
              </div>
              <div className="dashboardInfoLine_testBox">
                <span className="dashboardInfoLine_subTitle">VPN Access</span>
                <div className="dashboardInfoLine_title">Free</div>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="dashboardInfoLine_card w-100 d-flex align-items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8.32639" fill="#212121" />
                  <path
                    d="M19.5 30H19.2344C19.1458 30 19.0661 29.9831 18.9953 29.9494C16.6755 29.2583 14.763 27.8886 13.2578 25.8402C11.7526 23.7925 11 21.5297 11 19.0518V14.2731C11 13.8517 11.1286 13.4724 11.3857 13.1353C11.6421 12.7981 11.974 12.5537 12.3813 12.402L18.7563 10.1264C19.0042 10.0421 19.2521 10 19.5 10C19.7479 10 19.9958 10.0421 20.2437 10.1264L26.6188 12.402C27.026 12.5537 27.3582 12.7981 27.6154 13.1353C27.8718 13.4724 28 13.8517 28 14.2731V19.0518C28 21.5297 27.2474 23.7925 25.7422 25.8402C24.237 27.8886 22.3245 29.2583 20.0047 29.9494C19.9161 29.9831 19.7479 30 19.5 30ZM19.5 27.952C21.3417 27.3957 22.8646 26.2832 24.0687 24.6144C25.2729 22.9456 25.875 21.0914 25.875 19.0518V14.2731L19.5 11.9975L13.125 14.2731V19.0518C13.125 21.0914 13.7271 22.9456 14.9312 24.6144C16.1354 26.2832 17.6583 27.3957 19.5 27.952Z"
                    fill="#FF5301"
                  />
                </svg>
              </div>
              <div className="dashboardInfoLine_testBox">
                <span className="dashboardInfoLine_subTitle">VPN Access</span>
                <div className="dashboardInfoLine_title">Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="labelsGroup">
            <div className="active">Ecosystem</div>
            <div>High Speed</div>
            <div>Free</div>
            <div>Secure</div>
          </div>
          <div className="adWrapper">
            <img src="./vpncrypto-protocol-gif-transparent.gif.gif.svg" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="buyBox">
            <p>
              Reserve your allocation with 25% discount to continue free vpn
              access after tge:
            </p>
            <div className="text-center">
              <Button className="btn">Buy</Button>
            </div>
          </div>
          <div className="transactions">
            <div className="transactions_title">Transactions history</div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
            <div className="transaction">
              <div>
                <div className="transaction_label">Payment date</div>
                <div className="transaction_date">03/14/2022 05:12PM</div>
              </div>
              <div className="transaction_amount">+4 tokens</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
