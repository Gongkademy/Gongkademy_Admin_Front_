import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Member from "@pages/Member/Member";
import Lecture from "@pages/Lecture/Lecture";
import RegistLecture from "@pages/Lecture/RegistLecture";
import Notice from "@pages/Community/Notice";
import Qna from "@pages/Community/Qna";
import Concern from "@pages/Community/Concern";
import Home from "@pages/Home/Home";
import CommunityRouter from "@router/CommunityRouter.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "community",
        element: <CommunityRouter />,
        children: [
          {
            path: "notice",
            element: <Notice />,
          },
          {
            path: "qna",
            element: <Qna />,
          },
          {
            path: "concern",
            element: <Concern />,
          },
        ],
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "lecture",
        element: <Lecture />,
      },
      {
        path: "lecture/regist",
        element: <RegistLecture />,
      },
    ],
  },
]);
export default router;
