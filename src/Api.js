import axios from "axios";

const PENDING = "pending";
const SUCCESS = "success";
const ERROR = "error";

const fetchUser = (id) => {
  console.log("fetching user");
  return axios
    .get("https://jsonplaceholder.typicode.com/users/"+id)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const fetchPosts = () => {
  console.log("fetching posts");
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const wrapPromise = (promise) => {
  let status = PENDING;
  let result;
  let suspend = promise.then(
    (res) => {
      status = SUCCESS;
      result = res;
    },
    (error) => {
      status = ERROR;
      result = error;
    }
  );

  console.log('wrapPromise', suspend);

  return {
    read() {                            //возвращается метод
        console.log('reading', promise);
      if (status === PENDING) {
        throw suspend;
      } else if (status === ERROR) {
        throw result;
      } else if (status === SUCCESS) {
        return result;
      }
    },
  };
};
export const fetchData = (userId) => {
  const userPromise = fetchUser(userId);
  const postsPromise = fetchPosts();
  return { user: wrapPromise(userPromise), posts: wrapPromise(postsPromise) };
};
