import { useQuery } from "@tanstack/react-query";
import { GetUserTweets, GetUserInfo } from "../requests/requests";
import { Tweet } from "./Tweet";


export function PersonalProfileTab() {
  const userInfo = useQuery({
    queryKey: ["userInfo"],
    queryFn: GetUserInfo,
  });

  const userTweets = useQuery({
    queryKey: ["userTweets"],
    queryFn: GetUserTweets,
  });

  return (
    <div className="col-start-4 col-span7 text-white">
      {userInfo.isSuccess && (
        <div>
          <p>Hi{userInfo.data.first_name}</p>
          <p>How are you doing?</p>
        </div>
      )}
      {userTweets.isSuccess && <div className="flex flex-col gap-2">{userTweets.len > 0 && userTweets.data.map((val, i) => {
        return <Tweet key={i} tweet = {val.tweet} ID={val.ID}></Tweet>
      })}</div>}
    </div>
  );
}
