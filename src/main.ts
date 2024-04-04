import request from "graphql-request";
import {getTransfersQueryDocument} from "./queries/test";

request("https://transfers.joyutils.org/graphql", getTransfersQueryDocument).then((data) => {
  // data is typed
  console.log(data.transfers[0]?.from.id)
})
