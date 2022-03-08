const defaultConfig: RequestInit = {
  cache: "no-cache",
  headers: {
    "content-type": "application/json",
  },
  mode: "cors",
  credentials: "include",
};

const request = async (url: string, config: RequestInit) => {
  const { method, body, headers } = config;

  const { headers: oldHeaders, ...rest } = defaultConfig;

  const newConfig: RequestInit = {
    ...rest,
    headers: {
      ...oldHeaders,
      ...headers,
    },
    body: method === "POST" && body ? JSON.stringify(body) : null,
    method: method ?? "GET",
  };

  const res = await fetch(url, newConfig)
    .then((response) => response.json())
    .then(function (myJson) {
      console.log(myJson);
    })
    .catch((error) => console.error("Error:", error));

  return res;
};
